import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput as RNTextInput,
    ImageBackground,
    ActivityIndicator,
    KeyboardAvoidingView,
    ScrollView,
    Alert
} from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/button';
import moment from 'moment';
import HttpClient from '../../utils/HttpClient';

export default class Login extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            verifycode: '',
            email: 'testmyprojects2017@gmail.com',
            password: 'secret',
            con_password: 'secret',
            verifycodeValid: false,
            emailValid: false,
            passwordValid: false,
            con_passwordValid: false,
            submitValid: false,

            ViewCode: false,

            wq_photo: '',
            insurance_photo: '',
            authority_photo: '',
            misc_photo: '',

            RequireData: null,
            passwordShow: false,
            con_passwordShow: false,
            submit_failed: false,

            btnSendStatus:false,
            btnConfirmStatus: false,
            
            otpSent: false,
            otp: null,
            otpInput: null,
            isOtpValid: false,
            hasError: false,
        }
    }

    email(email) {
        this.setState({ email: email })
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            this.setState({ emailValid: false, submitValid: true })
        } else {
            this.setState({ emailValid: true, submitValid: false })
        }
    }

    handleSendOTP = async () => {
        const apiReponse = await HttpClient.post('/password/forgot', {
            email: this.state.email,
        });
        console.log(apiReponse);
        if (apiReponse.success) {
            this.setState({
                otpSent: true,
                otp: apiReponse.data,
            });

            Alert.alert('Success', apiReponse.message);
        } else {
            this.setState({
                message: apiReponse.message,
                hasError: true,
            });
        }
    }

    handleVerifyOTP = () => {
        const { otp, otpInput } = this.state;

        if (otp == otpInput) {
            this.setState({ isOtpValid: true });
        } else {
            this.setState({
                isOtpValid: false,
                message: 'Invalid OTP',
                hasError: true,
            });
        }
    }

    handleResetPassword = async () => {
        const { navigation } = this.props;
        const { email, password, con_password } = this.state;

        const apiReponse = await HttpClient.post('/password/reset', {
            email: email,
            password: password,
            password_confirmation: con_password,
        });

        console.log(apiReponse);

        if (apiReponse.success) {
            Alert.alert('Success', 'Your password has been reset. Please login to continue.');
            navigation.replace('Login');
        } else {
            this.setState({
                message: apiReponse.message,
                hasError: true,
            });
        }
    }

    renderEmail() {
        const { email, hasError, emailValid } = this.state;

        return (
            <>
                <View style={styles.inputView}>
                    <TextInput
                        onChangeText={(email) => this.email(email)}
                        underlineColorAndroid='transparent'
                        value={email}
                        style={styles.textInput}
                        placeholder='Email address'
                        autoCapitalize="none"
                        error={!emailValid || hasError}
                    />
                </View>
                {emailValid && (
                    <Text style={styles.errorText}>Please enter a valid email address.</Text>
                )}
            </>
        )
    }

    renderNewPassword() {
        const {
            password,
            passwordShow,
            passwordValid,
            con_password,
            con_passwordShow,
            con_passwordValid,
            hasError,
            message,
        } = this.state;

        return (
            <>
                <View style={styles.inputView}>
                    <TextInput
                        mode="flat"
                        placeholder='New password'
                        onChangeText={(pass) => this.password(pass)}
                        underlineColorAndroid='transparent'
                        value={password}
                        style={styles.textInput}
                        secureTextEntry={!passwordShow}
                        error={hasError}
                    />
                    <TouchableOpacity onPress={() => this.setState({ passwordShow: !passwordShow })}>
                        {
                            passwordShow ?
                                <Icon name='ios-eye' style={styles.iconShow} size={20} />
                                : <Icon name='ios-eye-off' style={styles.iconShow} size={20} />
                        }
                    </TouchableOpacity>
                </View>
                {
                    passwordValid ?
                        <Text style={styles.errorText}>Please enter a 6-character password.</Text> : null
                }
                <View style={styles.inputView}>
                    <TextInput
                        placeholder='Confirm new password'
                        onChangeText={(con_password) => this.con_password(con_password)}
                        underlineColorAndroid='transparent'
                        value={con_password}
                        style={styles.textInput}
                        secureTextEntry={!con_passwordShow}
                        error={hasError}
                    />
                    <TouchableOpacity onPress={() => this.setState({ con_passwordShow: !con_passwordShow })}>
                        {
                            con_passwordShow ?
                                <Icon name='ios-eye' style={styles.iconShow} size={20} />
                                : <Icon name='ios-eye-off' style={styles.iconShow} size={20} />
                        }
                    </TouchableOpacity>
                </View>
                {hasError && (
                    <Text style={styles.errorText}>{message}</Text>
                )}
                {/* {
                    con_passwordValid ?
                        <Text style={styles.errorText}>Please enter a 6-character password.</Text> : null
                }
                {
                    submit_failed ?
                        <Text style={styles.errorText}>Password is not matched</Text> : null
                } */}
            </>
        )
    }

    renderOTP() {
        const { otpInput, isOtpValid, hasError, message } = this.state;

        return (
            <View>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder='Enter OTP'
                        onChangeText={(text) => this.setState({ otpInput: text})}
                        underlineColorAndroid='transparent'
                        value={otpInput}
                        style={styles.textInput}
                        error={hasError}
                    />
                </View>

                {hasError && (
                    <Text style={styles.errorText}>{message}</Text>
                )}
            </View>
        );
    }

    renderSubmitAction() {
        const { otpSent, otp, isOtpValid } = this.state;

        const sendOTPBtn = (
            <Button
                text="Send OTP"
                status={this.state.btnSendStatus}
                style={{ marginTop: 30 }}
                onPress={this.handleSendOTP}
            />
        );

        const verifyOTPBtn = (
            <Button
                text="Verify OTP"
                style={{ marginTop: 30 }}
                onPress={this.handleVerifyOTP}
            />
        );

        const sendResetPasswordBtn = (
            <Button
                text="Reset Password"
                style={{ marginTop: 30 }}
                onPress={this.handleResetPassword}
            />
        );

        if (!otpSent && !otp) return sendOTPBtn;
        
        if (otpSent && otp && !isOtpValid) return verifyOTPBtn;

        return sendResetPasswordBtn;
    }

    render() {
        const { otpSent, isOtpValid } = this.state;

        return (
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    bounces={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <KeyboardAvoidingView behavior="padding" enabled>
                        <View style={styles.viewContents}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backIcon}>
                                <Icon name='ios-arrow-back' size={30} color='rgb(104, 108, 113)' />
                            </TouchableOpacity>

                            <Text style={[styles.pageTitle, { marginTop: 25 }]}>Forgot</Text>
                            <Text style={styles.pageTitle}>Password</Text>

                            {(otpSent && !isOtpValid)
                                ? this.renderOTP()
                                : (otpSent && isOtpValid)
                                    ? this.renderNewPassword()
                                    : this.renderEmail()
                            }
                            {this.renderSubmitAction()}
                        </View>
                        </KeyboardAvoidingView>
                </ScrollView>
            </View>
        )
    }
}