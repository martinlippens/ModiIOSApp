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

import { getAuthUser, getDeviceId, setApiToken, setAuthUser } from "../../Utils/Helpers";
import HttpClient from "../../Utils/HttpClient";
import Storage from "../../Utils/Storage";
import { toast } from "../../Utils/Toast";

const Login = () => {
    const [secure, toggleSecure] = useState(true);
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation();
    const loginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email("Please enter valid email address")
            .required('Email Address is Required'),
        password: yup
            .string()
            .required('Password is required'),
    });

    const loginHandler = async (values) => {
        setLoading(true);
        try {
            const { success, data, errors, message } = await HttpClient.post('/login', {
                email: values.email,
                password: values.password,
                device_id: getDeviceId(),
            });
            if (success) {
                await setAuthUser(data.user);
                await setApiToken(data.access_token);
                await Storage.set('uid', data.user.id);
                setLoading(false);
                navigation.replace('Main');
            } else {
                setLoading(false);
                console.log('errors', errors);
                toast(message);
            }
        } catch (error) {
            toast(error.message);
            setLoading(false);
            console.log('error', error)
        }
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
                <Box maxWidth={wp("90%")} marginHorizontal={wp("5%")} marginTop={50}>
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
                        <Text size={5.5} marginLeft={5} bold lineHeight={50}>Login</Text>
                    </Box>
                    <Box marginTop={heightPercentageToDP("2%")}>
                        <Formik
                            validationSchema={loginValidationSchema}
                            initialValues={{ email: '', password: '' }}
                            onSubmit={values => loginHandler(values)}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => {
                                return (
                                    <Box>
                                        <CustomInput
                                            placeholder="joemark@gmail.com"
                                            keyboardType="email-address"
                                            flex={1}
                                            marginVertical={10}
                                            borderColor={touched.email ? theme.color.darkPink : theme.color.lightPink}
                                            inputContainerStyle={{ borderBottomWidth: 1 }}
                                            value={values.email}
                                            label="Email Address"
                                            setValue={handleChange('email')}
                                            blur={handleBlur('email')}
                                            style={{ paddingVertical: 7 }}
                                        />
                                        {(errors.email && touched.email) &&
                                            <Text size={3} color={theme.color.danger}>{errors.email}</Text>
                                        }
                                        <CustomInput
                                            label="Password"
                                            placeholder="Password"
                                            flex={1}
                                            marginVertical={10}
                                            secure={secure}
                                            borderColor={touched.password ? theme.color.darkPink : theme.color.lightPink}
                                            value={values.password}
                                            setValue={handleChange('password')}
                                            blur={handleBlur('password')}
                                            style={{ paddingVertical: 7 }}
                                            iconAfter={secure ? "eye-off" : "eye"}
                                            iconAfterSize={20}
                                            handleAfterPress={() => toggleSecure(!secure)}
                                        />
                                        {(errors.password && touched.password) &&
                                            <Text size={3} color={theme.color.danger}>{errors.password}</Text>
                                        }
                                        <Box flexDirection="row" justifyContent="flex-end" marginTop={5}>
                                            <Text color={theme.color.danger} handleClick={() => navigation.navigate("ForgetPassword")} bold uppercase size={3}>Forgot Password? </Text>
                                        </Box>
                                        <Box marginTop={20}>
                                            <Button
                                                title="Log In"
                                                size={4.5}
                                                paddingVertical={13}
                                                color={theme.color.white}
                                                onPress={handleSubmit}
                                            />
                                        </Box>
                                        <Box marginTop={30}>
                                            <Text center bold color={theme.color.primary}> Don't have an account?</Text>
                                            <Text marginTop={5} uppercase handleClick={() => navigation.navigate("Signup")} center bold color={theme.color.danger}>Sign Up</Text>
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

export default Login;

const styles = StyleSheet.create({

})