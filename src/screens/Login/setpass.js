import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput,
    ActivityIndicator
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import firebase from 'firebase';
class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        const { params } = this.props.navigation.state;
        var email = params.email;
        var userID = params.userID;
        this.state = {
            email: email,
            userID:userID,
            password: '',
            confirm_pass: '',
            confirm_passValid: false,
            passwordValid: false,
            loginVaid: false
        }
    }
    render() {
        return (
            <View style={styles.container}>

                <Image source={require('../../images/black.png')} style={styles.logoimage} />
                <View style={styles.buidings}>
                    <Image source={require('../../images/buildings.png')} style={styles.buidingimage} />
                    <Text style={styles.buidingTitle}>Eleve Lofts & Skydeck</Text>
                </View>

                
                <Text style={styles.inputTitle}>{this.state.password === "" ? "" : "CREATE PASSWORD"}</Text>
                <View style={styles.inputView}>
                    <TextInput
                        onChangeText={(password) => this.password(password)}
                        underlineColorAndroid='transparent'
                        value={this.state.password}
                        style={styles.textInput}
                        placeholder='Create Password'
                        secureTextEntry={true}
                    />
                </View>
                <Text style={[styles.inputTitle, { marginTop: 8 }]}>{this.state.passwordValid && this.state.confirm_pass != "" ? "CONFIRM PASSWORD" : ""}</Text>
                {
                    this.state.passwordValid ?
                        <View style={styles.inputView}>
                            <TextInput
                                onChangeText={(conpass) => this.confirm_pass(conpass)}
                                underlineColorAndroid='transparent'
                                value={this.state.confirm_pass}
                                style={styles.conpassInput}
                                placeholder='Confirm password'
                                secureTextEntry={true}
                            />
                            {
                                this.state.loginVaid ?
                                    <Image source={require('../../images/1Green.png')} style={styles.confirmIcon} />
                                    :
                                    null
                            }
                        </View>
                        : null
                }
                {
                    !this.state.loginVaid?
                    <View>
                        <Text  style={styles.validView}>Your password doesn't match</Text>
                    </View>:null
                }

                {
                    this.state.passwordValid && this.state.loginVaid ?
                        <Button text={'Good to go!'} style={{ marginTop: 25 }} onPress={() => this.setpassword()} />
                        : null
                }

            </View>
        )
    }
    setpassword() {
        fetch('http://3.16.29.143/api/api_setpassword', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userID: this.state.userID,
                password: this.state.password
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.Login()
            })
            .catch((error) => {
                alert(error);
            });
    }
    Login() {
        
        fetch('http://3.16.29.143/api/api_login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.flag === "success") {
                    this.props.formDataStor(responseJson.data);
                    this.props.BookingInfoStore(responseJson.bookingInfo);
                    this.props.navigation.navigate('Setting');
                }
                else {
                    this.setState({ loginVaid: true })
                }
            })
            .catch((error) => {
                alert(error);
            });

    }
    password(pass) {
        if (pass.length < 6) this.setState({ password: pass, passwordValid: false, confirm_pass: "" })
        else this.setState({ password: pass, passwordValid: true, loginVaid: false })
    }
    confirm_pass(pass) {
        if (pass != this.state.password) this.setState({ confirm_pass: pass, confirm_passValid: false })
        else this.setState({ confirm_pass: pass, confirm_passValid: true, loginVaid: true })
    }
}



const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        formDataStor: (data) => {
            dispatch({
                type: 'info_store',
                value: data
            })
        },
        costinfostore: (data) => {
            dispatch({
                type: 'costinfo_store',
                value: data
            })
        },
        BookingInfoStore: (data) => {
            dispatch({
                type: 'Bookinginfo_store',
                value: data
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login) 