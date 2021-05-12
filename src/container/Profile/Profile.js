import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';
import { theme } from '../../component/Theme/Theme';
import { Button, Header } from '../../component/index';
import { Box, Text, CustomInput } from "../../UI/index";
import Logo from '../../assets/images/logo-black.png';
import { heightPercentageToDP, heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import HttpClient from '../../Utils/HttpClient';
import {toast} from '../../Utils/Toast';
import { getAuthUser, setAuthUser } from '../../Utils/Helpers';

const Profile = () => {
    const [loading, setLoading] = useState(true)
    const [user, setuser] = useState(null)
    const navigation = useNavigation();
    const phoneRegExp = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/

    useEffect(() => {
        getProfileData()
    }, [])

    const getProfileData = async () => {
        const user = await getAuthUser();
        if (user) {
            setuser(user);
        } else {
            alert("session expired, Please login again");
            navigation.replace("Auth");
        }
        setLoading(false);
    }

    const SignupValidationSchema = yup.object().shape({
        firstName: yup
            .string()
            .required('First Name is Required'),
        lastName: yup
            .string()
            .required('Last Name is Required'),
        email: yup
            .string()
            .email("Please enter valid email address")
            .required('Email Address is Required'),
        phone: yup
            .string()
            .matches(phoneRegExp, "Phone number is invalid")
    });

    const formatPhoneNumber = (phoneNumberString) => {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return null;
    }

    const onError = (e) => {
        setLoading(false)
        console.log('error', e)
    }

    const updateUserHandler = async (values) => {
        setLoading(true);
        const { success, data, errors, message } = await HttpClient.put('/customers/' + user.id, {
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            phone: values.phone,
        });
        if (success) {
            await setAuthUser(data);
        } else {
            toast(message)
           onError(message)
        }
    }
    return (
        <SafeAreaView style={theme.base}>
            <Spinner
                visible={loading}
                color={theme.color.primary}
            />
            <Header left />
            {user &&
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="always"
                >
                    <Box maxWidth={wp("90%")} marginHorizontal={wp("5%")}>
                        <Image
                            source={Logo}
                            resizeMode="contain"
                            style={{ width: wp("30%"), height: hp("10%"), marginTop: 10 }}
                        />
                        <Box flexDirection="row" alignItems="center">
                            <MaterialCommunityIcons
                                name="account-circle-outline"
                                color={theme.color.primary}
                                size={25}
                            />
                            <Text size={5.5} marginLeft={5} bold lineHeight={50}>Profile</Text>
                        </Box>
                        <Box marginTop={heightPercentageToDP("2%")}>
                            <Formik
                                validationSchema={SignupValidationSchema}
                                initialValues={{ firstName: user?.first_name || '', lastName: user?.last_name || '', email: user?.email || '', password: '', phone: user?.phone || '' }}
                                onSubmit={values => updateUserHandler(values)}
                            >
                                {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => {
                                    return (
                                        <Box>
                                            <CustomInput
                                                label="First Name"
                                                flex={1}
                                                marginVertical={5}
                                                borderColor={theme.color.lightPink}
                                                inputContainerStyle={{ borderBottomWidth: 1 }}
                                                value={values.firstName}
                                                setValue={handleChange('firstName')}
                                                blur={handleBlur('firstName')}
                                                style={{ paddingVertical: 3 }}
                                            />
                                            {(errors.firstName && touched.firstName) &&
                                                <Text size={3} color={theme.color.danger}>{errors.firstName}</Text>
                                            }
                                            <CustomInput
                                                label="Last Name"
                                                flex={1}
                                                marginVertical={5}
                                                borderColor={theme.color.lightPink}
                                                inputContainerStyle={{ borderBottomWidth: 1 }}
                                                value={values.lastName}
                                                setValue={handleChange('lastName')}
                                                blur={handleBlur('lastName')}
                                                style={{ paddingVertical: 3 }}
                                            />
                                            {(errors.lastName && touched.lastName) &&
                                                <Text size={3} color={theme.color.danger}>{errors.lastName}</Text>
                                            }
                                            <CustomInput
                                                keyboardType="email-address"
                                                flex={1}
                                                marginVertical={5}
                                                borderColor={theme.color.lightPink}
                                                inputContainerStyle={{ borderBottomWidth: 1 }}
                                                value={values.email}
                                                label="Email Address"
                                                setValue={handleChange('email')}
                                                blur={handleBlur('email')}
                                                style={{ paddingVertical: 3 }}
                                            />
                                            {(errors.email && touched.email) &&
                                                <Text size={3} color={theme.color.danger}>{errors.email}</Text>
                                            }
                                            <CustomInput
                                                label="Phone"
                                                keyboardType="number-pad"
                                                flex={1}
                                                marginVertical={5}
                                                prefix="+1 "
                                                color={theme.color.grey}
                                                borderColor={theme.color.lightPink}
                                                value={values.phone}
                                                setValue={handleChange('phone')}
                                                blur={() => {
                                                    formatPhoneNumber(values.phone)
                                                    handleChange('phone')
                                                    handleBlur('phone')
                                                }}
                                                style={{ paddingVertical: 3 }}
                                            />
                                            {(errors.phone && touched.phone) &&
                                                <Text size={3} color={theme.color.danger}>{errors.phone}</Text>
                                            }
                                            <Box marginTop={20}>
                                                <Button
                                                    title="Update"
                                                    size={4.5}
                                                    color={theme.color.white}
                                                    onPress={handleSubmit}
                                                />
                                            </Box>
                                        </Box>
                                    )
                                }}
                            </Formik>
                        </Box>
                    </Box>
                </KeyboardAwareScrollView>
            }
        </SafeAreaView>
    );
}

export default Profile;

const styles = StyleSheet.create({

})