import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';
import { theme } from '../../component/Theme/Theme';
import { Button } from '../../component/index';
import { Box, Text, CustomInput } from "../../UI/index";
import Logo from '../../assets/images/logo-black.png';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from 'formik';
import * as yup from 'yup';
import Spinner from 'react-native-loading-spinner-overlay';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Header } from "../../component/index";
const Help = () => {
    const [loading, setLoading] = useState(false)
    const loginValidationSchema = yup.object().shape({
        name: yup
            .string()
            .required("Full Name is Required"),
        email: yup
            .string()
            .email("Please enter valid email address")
            .required('Email Address is Required'),
        comment: yup
            .string()
            .nullable()
    });

    const helpHandler = async (values) => {
        console.log(values);
    }
    return (
        <SafeAreaView style={theme.base}>
            <Spinner
                visible={loading}
                color={theme.color.primary}
            />
            <Header left title="Help" />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="always"
            >
                <Box maxWidth={wp("90%")} marginHorizontal={wp("5%")} >
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
                        <Text size={5.5} marginLeft={5} bold lineHeight={50}>Help</Text>
                    </Box>
                    <Box marginTop={hp("2%")}>
                        <Formik
                            validationSchema={loginValidationSchema}
                            initialValues={{ name: '', email: '', comment: '' }}
                            onSubmit={values => helpHandler(values)}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => {
                                return (
                                    <Box>
                                        <CustomInput
                                            placeholder="John Doe"
                                            flex={1}
                                            marginVertical={10}
                                            borderColor={touched.name ? theme.color.darkPink : theme.color.lightPink}
                                            inputContainerStyle={{ borderBottomWidth: 1 }}
                                            value={values.name}
                                            label="Full Name"
                                            setValue={handleChange('name')}
                                            blur={handleBlur('name')}
                                            style={{ paddingVertical: 7 }}
                                        />
                                        {(errors.name && touched.name) &&
                                            <Text size={3} color={theme.color.danger}>{errors.name}</Text>
                                        }
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
                                            label="Comment"
                                            placeholder="I want to know that ..."
                                            flex={1}
                                            marginVertical={10}
                                            multiline
                                            textMarginBottom={10}
                                            numberOfLines={6}
                                            textAlignVertical="top"
                                            padding={10}
                                            borderColor={touched.comment ? theme.color.darkPink : theme.color.lightPink}
                                            value={values.comment}
                                            setValue={handleChange('comment')}
                                            blur={handleBlur('comment')}
                                            border={1}
                                            borderColor={theme.color.primary}
                                        />
                                        {(errors.comment && touched.comment) &&
                                            <Text size={3} color={theme.color.danger}>{errors.comment}</Text>
                                        }
                                        <Box marginTop={hp("2%")}>
                                            <Button
                                                title="Submit"
                                                paddingVertical={14}
                                                width={90}
                                                size={4}
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
        </SafeAreaView>
    );
}

export default Help;

const styles = StyleSheet.create({

})