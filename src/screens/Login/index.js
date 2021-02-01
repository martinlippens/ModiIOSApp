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
    ScrollView,
    KeyboardAvoidingView,
    Modal,
    ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import Swiper from 'react-native-swiper';
class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)

        //const { loginType } = this.props.userinfo;
        loginType=1;
        this.state = {
            email: '',
            password: '',
            emailValid: true,
            passwordValid: true,
            validStart: false,
            loginVaid: true,
            modalVisble: false,
            modalexitflag: false,
            loginType:loginType,
            
            passwordShow: false,
            
        }
    }


    componentWillMount() {
        AsyncStorage.getItem('email', (err, result) => {
            this.setState({ email: result })
        })
        AsyncStorage.getItem('password', (err, result) => {
            this.setState({ password: result})
        })
        AsyncStorage.getItem('modalVisble', (err, result) => {
            if (result == "false")
                this.setState({ modalVisble: false })
            else
                this.setState({ modalVisble: true })
        })
    }
    setModalVisible(visible) {
        this.setState({ modalVisble: visible });
    }
    render() {
        return (
            <View style={this.state.modalVisble ? styles.containerModal : styles.container}>
                <ScrollView style={{paddingHorizontal:24}}>
                    {/* <KeyboardAvoidingView behavior="position" > */}
                <Image source={require('../../images/black.png')} style={styles.logoimage} />
                
                <View style={styles.buidings}>
                    <Image source={require('../../images/individual.png')} style={styles.buidingimage} />
                    <Text style={styles.buidingTitle}>Login</Text>
                </View>
                <Text style={styles.inputTitle}>{this.state.email === "" ? "" : "EMAIL ADDRESS"}</Text>
                <View style={this.state.loginVaid?styles.inputView:styles.ErrorinputView}>
                    <TextInput
                        onChangeText={(email) => this.email(email)}
                        underlineColorAndroid='transparent'
                        value={this.state.email}
                        style={styles.textInput}
                        placeholder='Enter you email address'
                    />
                </View>
                
                <Text style={[styles.inputTitle,{marginTop:30}]}>{this.state.password === "" ? "" : "PASSWORD"}</Text>
                <View style={this.state.loginVaid?styles.inputView:styles.ErrorinputView}>
                    <TextInput
                        onChangeText={(password) => this.password(password)}
                        underlineColorAndroid='transparent'
                        value={this.state.password}
                        style={styles.textInput}
                        placeholder='Password'
                        secureTextEntry={this.state.passwordShow ? false : true}
                    />
                    <TouchableOpacity onPress={() => this.setState({ passwordShow: !this.state.passwordShow })}>
                        {
                            this.state.passwordShow ?
                                <Icon name='ios-eye' style={styles.iconShow} size={25} />
                                : <Icon name='ios-eye-off' style={styles.iconShow} size={25} />
                        }
                    </TouchableOpacity>
                </View> 
                {
                    !this.state.loginVaid?
                    <View>
                        <Text  style={styles.validView}>The password doesn't match this account</Text>
                    </View>:null
                }               
                <Text onPress={() => this.props.navigation.navigate('Forgot')} style={styles.forgot}>Forgot?</Text>
                <Button text={'Log In'} style={{ marginTop: 15}} onPress={() => this.Login()} />
                <Text style={styles.signupHelp}>Don't have an account?</Text>
                <Text onPress={() => this.Signup()} style={styles.signup}>Sign up</Text>
                {/* </KeyboardAvoidingView> */}
                </ScrollView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisble}
                >
                    <View style={styles.modalView}>
                            <View style={styles.modalcontain}>
                            <Swiper 
                            style={styles.wrapper} 
                            height={350} 
                            index={0}
                            autoplayTimeout={5} 
                            dot={<View style={{backgroundColor:'rgba(255,255,255,.3)', width:6, height:6, borderRadius:3, marginLeft:3, marginRight:3,marginTop:3,marginBottom:3}}/>}
                            activeDot={<View style={{backgroundColor:'rgb(255,255,255)', width:6, height:6, borderRadius:3, marginLeft:3, marginRight:3,marginTop:3,marginBottom:3}}/>}
                            
                            >

                                <View style={styles.slide}>
                                    <Text style={styles.slideStep}>STEP ONE</Text>
                                    <Text style={styles.slideTtile}>Professional home cleaning is an amenity</Text>
                                    <Image resizeMode='stretch' style={styles.swiperimage} source={require('../../images/deepCleaningPale.png')} />
                                    <Text style={styles.slideText}>Every complex has designated cleaners, so you will always have the same cleaners who have been background checked and vetted by us.</Text>
                                    
                                </View>
                                <View style={styles.slide}>
                                    <Text style={styles.slideStep}>STEP TWO</Text>
                                    <Text style={styles.slideTtile}>1 free hour of cleaning included per month</Text>
                                    <Image resizeMode='stretch' style={styles.swiperimage} source={require('../../images/basicCleaningPale.png')} />
                                    <Text style={styles.slideText}>Schedule a "Basic Cleaning" for free or you can eassily upgrade your service to a "Deep Cleaning" for a nominal fee.</Text>
                                    
                                </View>

                                <View style={styles.slide}>
                                    <Text style={styles.slideStep}>STEP THREE</Text>
                                    <Text style={styles.slideTtile}>Verify your account and schedule a cleaning</Text>
                                    <Image resizeMode='stretch' style={styles.swiperimage} source={require('../../images/deepCleaningPale.png')} />
                                    <Text style={styles.slideText}>Use the email address on your lease agreement to verify your account, create a password, complete your profile, and you're ready to go!</Text>
                                    
                                </View>
                            </Swiper>
                            <View style={styles.modalBtnView}>
                                <TouchableOpacity style={styles.checkView} onPress={() => { this.setState({ modalexitflag: !this.state.modalexitflag }) }}>
                                    {
                                        this.state.modalexitflag ?
                                            <Icon name='ios-checkbox-outline' size={25} color='rgb(255,255,255)' />
                                            : <Icon name='ios-square-outline' size={25} color='rgb(255,255,255)' />
                                    }
                                    <Text style={styles.checkbtn}>Don't show again.</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.modalskip()}>
                                    <Text style={styles.skipbtn}>Skip tour</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

    modalskip() {
        if (this.state.modalexitflag)
            AsyncStorage.setItem('modalVisble', "false", () => { });
        else
            AsyncStorage.setItem('modalVisble', "true", () => { });

        this.setModalVisible(!this.state.modalVisble)
    }
    Signup(){
        this.props.navigation.navigate('Address');
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
    email(email) {
        this.setState({ email: email })
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            this.setState({ emailValid: true, login_failed: false, loginVaid: true })
        } else {
            this.setState({ emailValid: true, login_failed: false, loginVaid: false })
        }
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