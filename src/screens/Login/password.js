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
    ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
//import firebase from 'firebase';
class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        const { params } = this.props.navigation.state;
        const { loginType } = this.props.userinfo;
        var email = params?.email != undefined ? params.email : '';
        this.state = {
            email: email,
            password: '',
            passwordValid: false,
            validStart: false,
            loginVaid: true,
            loginType:loginType
        }
    }
    componentWillMount() {
        AsyncStorage.getItem('password', (err, result) => {
            this.setState({ password: result, loginVaid: true })
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../images/black.png')} style={styles.logoimage} />
                
                {
                    this.state.loginType === 1 ?
                        <View style={styles.buidings}>
                            <Image source={require('../../images/individual.png')} style={styles.buidingimage} />
                            <Text style={styles.buidingTitle}>Individual</Text>
                        </View>
                        :
                        <View style={styles.buidings}>
                            <Image source={require('../../images/buildings.png')} style={styles.buidingimage} />
                            <Text style={styles.buidingTitle}>Complex</Text>
                        </View>
                }
                {/* {
                    this.state.loginVaid===true?
                    <View style={styles.validView}>
                        <Text>Wrong information</Text>
                    </View>:null
                } */}
                <Text style={styles.inputTitle}>{this.state.password === "" ? "" : "PASSWORD"}</Text>
                <View style={this.state.loginVaid?styles.inputView:styles.ErrorinputView}>
                    <TextInput
                        onChangeText={(password) => this.password(password)}
                        underlineColorAndroid='transparent'
                        value={this.state.password}
                        style={styles.textInput}
                        placeholder='Password'
                        secureTextEntry={true}
                    />
                </View>
                {
                    !this.state.loginVaid?
                    <View>
                        <Text  style={styles.validView}>The password doesn't match this account</Text>
                    </View>:null
                }
                {/* {
                    this.state.emailValid&&this.state.validStart?
                    <View style={styles.validView}>
                        <Text>Please enter a valid email address.</Text>
                    </View>:null
                } */}
                {/*                
                <View style={[styles.inputView,{marginTop:30}]}>
                    <TextInput 
                        placeholder='Password'
                        onChangeText={(pass)=>this.password(pass)}
                        underlineColorAndroid = 'transparent'
                        value = {this.state.password}
                        style = {styles.textInput}
                        secureTextEntry={true}
                    />
                </View>
                {
                    this.state.passwordValid&&this.state.validStart?
                    <View style={styles.validView}>
                        <Text>The Password must be at least 6 characters long</Text>
                    </View>:null
                } */}
                {
                    this.state.password != "" && this.state.loginVaid ?
                        <Button text={'Sign In'} style={{ marginTop: 38 }} onPress={() => this.Login()} />
                        : null
                }

                {/* <Text onPress={()=>this.props.navigation.navigate('Forgot')} style={styles.forgotTitle}>Forgot your password?</Text>                 */}
            </View>
        )
    }
    Login() {
        // this.setState({validStart: true})
        // if(this.state.emailValid||this.state.passwordValid) return
        console.log(this.state.email, this.state.password)

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
                    AsyncStorage.setItem('email', this.state.email, () => { });
                    AsyncStorage.setItem('password', this.state.password, () => { });
                    this.props.formDataStor(responseJson.data);
                    this.props.BookingInfoStore(responseJson.bookingInfo);
                    if (responseJson.bookingInfo!=null)
                        this.props.navigation.navigate('Upcoming');
                    else
                        this.props.navigation.navigate('Setting');
                }
                else {
                    this.setState({ loginVaid: false })
                }
            })
            .catch((error) => {
                alert(error);
            });

    }
    password(pass) {
        if (pass.length < 6) this.setState({ password: pass, passwordValid: false, login_failed: false })
        else this.setState({ password: pass, passwordValid: true, loginVaid: true })
    }
}



const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo
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