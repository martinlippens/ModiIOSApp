import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';
import { theme } from '../../component/Theme/Theme';
import { Button } from '../../component/index';
import { Box, Text, CustomInput } from "../../UI/index";
import Logo from '../../assets/images/logo-black.png';
import { heightPercentageToDP, heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { fetchRequest } from '../../Utils/FetchRequest';
import { BASE_URL } from '../../../constant';
import { setAuthUser } from '../../Utils/Helpers';
const Signup = () => {
    const [secure, toggleSecure] = useState(true)
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation();
    const phoneRegExp = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/
    const SignupValidationSchema = yup.object().shape({
        fullName: yup
            .string()
            .required('Full Name is Required'),
        email: yup
            .string()
            .email("Please enter valid email address")
            .required('Email Address is Required'),
        password: yup
            .string()
            .min(6, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
        phone: yup
            .string()
            .matches(phoneRegExp, "Phone number is invalid"),
        confirmPassword: yup
            .string()
            .required('Please confirm your password')
            .test('passwords-match', 'Passwords must match', function (value) {
                return this.parent.password === value;
            }),
    });

    const formatPhoneNumber = (phoneNumberString) => {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return null;
    }


    const checkEmailAddressExistance = email => {
        const url = `${BASE_URL}api_emailverify`;
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(email)
        }
        fetchRequest(url, options).then(res => {
            console.log('res', res);
        }).catch(err => onError(err))
    }

    const SignupHandler = async (values) => {
        console.log(values);
        setLoading(true);
        //   checkEmailAddressExistance(values.email);
        setAuthUser(values);
        const time = setTimeout(() => {
            setLoading(false);
            clearTimeout(time);
            navigation.replace("Main");
        }, 3000);
    }

    const onError = (e) => {
        setLoading(false)
        console.log('error', e)
    }
    return (
        <SafeAreaView style={theme.base}>
            <Spinner
                visible={loading}
                color={theme.color.primary}
            />
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
                        <Text size={5.5} marginLeft={5} bold lineHeight={50}>Sign up</Text>
                    </Box>
                    <Box marginTop={heightPercentageToDP("2%")}>
                        <Formik
                            validationSchema={SignupValidationSchema}
                            initialValues={{ fullName: '', email: '', password: '', confirmPassword: '', phone: '' }}
                            onSubmit={values => SignupHandler(values)}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => {
                                return (
                                    <Box>
                                        <CustomInput
                                            label="Full Name"
                                            flex={1}
                                            marginVertical={5}
                                            borderColor={theme.color.lightPink}
                                            inputContainerStyle={{ borderBottomWidth: 1 }}
                                            value={values.fullName}
                                            setValue={handleChange('fullName')}
                                            blur={handleBlur('fullName')}
                                            style={{ paddingVertical: 3 }}
                                        />
                                        {(errors.fullName && touched.fullName) &&
                                            <Text size={3} color={theme.color.danger}>{errors.fullName}</Text>
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
                                        <CustomInput
                                            label="Password"
                                            flex={1}
                                            marginVertical={5}
                                            secure={secure}
                                            borderColor={theme.color.lightPink}
                                            value={values.password}
                                            setValue={handleChange('password')}
                                            blur={handleBlur('password')}
                                            style={{ paddingVertical: 3 }}
                                            iconAfter={secure ? "eye-off" : "eye"}
                                            iconAfterSize={20}
                                            handleAfterPress={() => toggleSecure(!secure)}
                                        />
                                        {(errors.password && touched.password) &&
                                            <Text size={3} color={theme.color.danger}>{errors.password}</Text>
                                        }
                                        <CustomInput
                                            label="Confirm Password"
                                            flex={1}
                                            marginVertical={5}
                                            secure={secure}
                                            borderColor={theme.color.lightPink}
                                            value={values.confirmPassword}
                                            setValue={handleChange('confirmPassword')}
                                            blur={handleBlur('confirmPassword')}
                                            style={{ paddingVertical: 3 }}
                                            iconAfter={secure ? "eye-off" : "eye"}
                                            iconAfterSize={20}
                                            handleAfterPress={() => toggleSecure(!secure)}
                                        />
                                        {(errors.confirmPassword && touched.confirmPassword) &&
                                            <Text size={3} color={theme.color.danger}>{errors.confirmPassword}</Text>
                                        }
                                        <Box marginTop={20}>
                                            <Button
                                                title="Sign up"
                                                size={4.5}
                                                color={theme.color.white}
                                                onPress={handleSubmit}
                                            />
                                        </Box>
                                        <Box marginTop={20}>
                                            <Text center bold color={theme.color.primary}>Already have an account?</Text>
                                            <Text marginTop={5} uppercase handleClick={() => navigation.navigate("Login")} center bold color={theme.color.danger}>Log in</Text>
                                        </Box>
                                    </Box>
                                )
                            }}
                        </Formik>
                    </Box>
                </Box>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}

export default Signup;

const styles = StyleSheet.create({

})