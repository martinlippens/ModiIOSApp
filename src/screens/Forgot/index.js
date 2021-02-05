import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    ActivityIndicator,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/button';
import moment from 'moment';

export default class Login extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            verifycode: '',
            email: '',
            password: '',
            con_password: '',
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
            btnConfirmStatus:false

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <ScrollView>

                        <View style={styles.viewContents}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backIcon}>
                                <Icon name='ios-arrow-back' size={30} color='rgb(104, 108, 113)' />
                            </TouchableOpacity>

                            <Text style={[styles.pageTitle, { marginTop: 25 }]}>Forgot</Text>
                            <Text style={styles.pageTitle}>passwowrd</Text>
                            {
                                !this.state.ViewCode ?
                                    <View>
                                        <View style={!this.state.submit_failed ? styles.inputView : styles.inputErrorView}>
                                            <TextInput
                                                onChangeText={(email) => this.email(email)}
                                                underlineColorAndroid='transparent'
                                                value={this.state.email}
                                                style={styles.textInput}
                                                placeholder='Email address'
                                            />
                                        </View>
                                        {
                                            this.state.emailValid ?
                                                <Text style={styles.errorText}>Please enter a valid email address.</Text>
                                                : null
                                        }
                                        <View style={[!this.state.submit_failed ? styles.inputView : styles.inputErrorView, { marginTop: 10 }]}>
                                            <TextInput
                                                placeholder='New password'
                                                onChangeText={(pass) => this.password(pass)}
                                                underlineColorAndroid='transparent'
                                                value={this.state.password}
                                                style={styles.textInput}
                                                secureTextEntry={this.state.passwordShow ? false : true}
                                            />
                                            <TouchableOpacity onPress={() => this.setState({ passwordShow: !this.state.passwordShow })}>
                                                {
                                                    this.state.passwordShow ?
                                                        <Icon name='ios-eye' style={styles.iconShow} size={20} />
                                                        : <Icon name='ios-eye-off' style={styles.iconShow} size={20} />
                                                }
                                            </TouchableOpacity>
                                        </View>
                                        {
                                            this.state.passwordValid ?
                                                <Text style={styles.errorText}>Please enter a 6-character password.</Text> : null
                                        }
                                        <View style={[!this.state.submit_failed ? styles.inputView : styles.inputErrorView, { marginTop: 10 }]}>
                                            <TextInput
                                                placeholder='Confirm new password'
                                                onChangeText={(con_password) => this.con_password(con_password)}
                                                underlineColorAndroid='transparent'
                                                value={this.state.con_password}
                                                style={styles.textInput}
                                                secureTextEntry={this.state.con_passwordShow ? false : true}
                                            />
                                            <TouchableOpacity onPress={() => this.setState({ con_passwordShow: !this.state.con_passwordShow })}>
                                                {
                                                    this.state.con_passwordShow ?
                                                        <Icon name='ios-eye' style={styles.iconShow} size={20} />
                                                        : <Icon name='ios-eye-off' style={styles.iconShow} size={20} />
                                                }
                                            </TouchableOpacity>
                                        </View>
                                        {
                                            this.state.con_passwordValid ?
                                                <Text style={styles.errorText}>Please enter a 6-character password.</Text> : null
                                        }
                                        {
                                            this.state.submit_failed ?
                                                <Text style={styles.errorText}>Password is not matched</Text> : null
                                        }

                                        <Button text={'Send Email'} status={this.state.btnSendStatus} style={{ marginTop: 30 }} onPress={() => this.submit_btn()} />
                                    </View>

                                    :
                                    <View>
                                        <View style={[!this.state.verifycodeValid ? styles.inputView : styles.inputErrorView, { marginTop: 10 }]}>
                                            <TextInput
                                                placeholder='Verify Code'
                                                onChangeText={(verifycode)=>this.verifycode(verifycode)}
                                                underlineColorAndroid = 'transparent'
                                                value = {this.state.verifycode}
                                                style = {styles.textInput}
                                            />
                                        </View>
                                        {
                                            this.state.verifycodeValid ?
                                                <Text style={styles.errorText}>Please enter a email verify code.</Text> : null
                                        }
                                        <Button text={'Confirm'} style={{ marginBottom: 50  }} onPress={() => this.Confirmbtn()} />
                                    </View>
                            }
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        )
    }

    verifycode(verifycode) {
        verifycode.length === 0 ? this.setState({ verifycode: verifycode, verifycodeValid: true }) : this.setState({ verifycode: verifycode, verifycodeValid: false })
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
    password(password) {
        this.setState({ password: password })
        if (password.length >= 6) this.setState({ passwordValid: false, submitValid: true, submit_failed: false })
        else this.setState({ passwordValid: true, submitValid: false, submit_failed: false })

    }
    con_password(con_password) {
        this.setState({ con_password: con_password })
        if (con_password.length >= 6) this.setState({ con_passwordValid: false, submitValid: true, submit_failed: false })
        else this.setState({ con_passwordValid: true, submitValid: false, submit_failed: false })
    }
    Confirmbtn() {
        if (this.state.verifycode === this.state.RequireData) {
            this.setState({btnConfirmStatus:true})
            fetch(Config.API_ENDPOINT+'api_forgotupdate', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    newPassword: this.state.password
                }),
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({btnConfirmStatus:false})
                    if (responseJson.error) {
                        return;
                    }
                    alert("Password updated!")
                    this.props.navigation.navigate('Login')
                })
                .catch((error) => {
                    this.setState({btnConfirmStatus:false})
                    alert(error);
                });

        } else {
            this.setState({ verifycodeValid: true })
        }
    }

    submit_btn() {
        this.email(this.state.email)
        this.password(this.state.password)
        this.con_password(this.state.con_password)
        if (this.state.email === "" || this.state.password === "" || this.state.con_password === "") return
        if (this.state.password != this.state.con_password) {
            this.setState({ submit_failed: true })
            return
        }
        if (!this.state.emailValid && !this.state.passwordValid) {

            this.setState({btnSendStatus:true})
            //fetch(Config.API_ENDPOINT+'api_forgotpass', {
            fetch('http://52.14.114.118/api/'+'api_forgotpass', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email
                }),
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({btnSendStatus:false})
                    if (responseJson.error) {
                        return;
                    }


                    if (responseJson.data.type === 'error') {
                        alert('Email exist aleady!')
                    }
                    else {
                        this.setState({ RequireData: responseJson.data.code })
                        this.setState({ ViewCode: true })
                    }
                })
                .catch((error) => {
                    this.setState({btnSendStatus:false})
                    alert(error);
                });
        }
        else return

    }
}