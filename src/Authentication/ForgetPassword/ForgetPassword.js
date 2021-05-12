import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Image, Pressable } from 'react-native';
import { Box, CustomInput, Text } from '../../UI/index';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../../component/Theme/Theme';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Button } from '../../component';
import Logo from '../../assets/images/logo-black.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const ForgetPassword = () => {
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation();
    const loginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email("Please enter valid email address")
            .required('Email Address is Required')
    });

    const forgetPasswordHandler = async (values) => {
        console.log(values);
    }
    return (
        <SafeAreaView style={theme.base}>
            <Spinner
                visible={loading}
                color={theme.color.primary}
            />
            <Box maxWidth={wp("90%")} marginHorizontal={wp("5%")} marginTop={50}>
                <Box>
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
                        <Text size={5.5} marginLeft={5} bold lineHeight={50}>Forgot Password</Text>
                    </Box>
                </Box>
                <Formik
                    validationSchema={loginValidationSchema}
                    initialValues={{ email: '' }}
                    onSubmit={values => forgetPasswordHandler(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => {
                        return (
                            <Box>
                                <CustomInput
                                    placeholder="joemark@gmail.com"
                                    label="Email Address"
                                    keyboardType="email-address"
                                    flex={1}
                                    value={values.email}
                                    setValue={handleChange('email')}
                                    blur={handleBlur('email')}
                                    style={{ paddingVertical: 7 }}
                                />
                                {(errors.email && touched.email) &&
                                    <Text size={3} color={theme.color.danger}>{errors.email}</Text>
                                }
                                <Pressable onPress={() => navigation.navigate("Login")}>
                                    <Box flexDirection="row" alignItems="center" marginTop={10}>
                                        <MaterialCommunityIcons
                                            name="arrow-left"
                                            color={theme.color.primary}
                                            size={25}
                                        />
                                        <Text capitalize marginLeft={5} color={theme.color.primary} bold size={3.2}>back to sign in</Text>
                                    </Box>
                                </Pressable>
                                <Box marginTop={20}>
                                    <Button
                                        title="Submit"
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
        </SafeAreaView>
    );
}

export default ForgetPassword;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        zIndex: 2,
        borderColor: theme.color.lightGrey,
        position: "absolute",
        top: hp("24%"),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    roundButtonStyle: {
        shadowColor: "#000000d2",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.58,
        shadowRadius: 2.00,
        elevation: 5,
    }

})