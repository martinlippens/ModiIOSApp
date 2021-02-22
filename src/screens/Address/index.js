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
    Modal,
    ActivityIndicator,
    ScrollView,
    KeyboardAvoidingView
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

        const { loginType } = this.props.userinfo;
        const { params } = this.props.navigation.state;
        //const email = params.email;
        this.state = {
            email: '',
            emailValid: false,
            password: '',
            passwordValid: false,
            Cpassword: '',
            CpasswordValid: false,
            firstname: '',
            firstnameValid: false,
            lastname: '',
            lastnameValid: false,
            complex: '',
            complexValid: false,
            phone: '',
            phoneValid: false,
            unit: '',
            unitValid: false,

            complex_id:null,

            validStart: false,
            loginVaid: false,
            loginType: loginType,
            titleVaid: true,
            DriverModalVisible: false,
            complex_lists:null,            
            passwordShow: false,
            CpasswordShow:false       


        }
    }
    componentWillMount() {
        fetch('http://18.221.234.213/api/api_complexlist', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({complex_lists:responseJson.data});                
            })
            .catch((error) => {
                alert(error);
            });
    }
    DriverModalVisible(visible) {
        this.setState({ DriverModalVisible: visible })
    }

    render() {
        return (
            <View style={styles.container}>
                        
                        <View style={{ paddingHorizontal: 24 }}>
                        
                            <View style={styles.buidings}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Image source={require('../../images/individual.png')} style={styles.buidingimage} />
                            </TouchableOpacity>   
                                <Text style={styles.buidingTitle}>Sign up</Text>
                             
                            </View>
                            {/* <Image source={require('../../images/black.png')} style={styles.logoimage} /> */}
                            {/* <Text style={styles.pageInfo}>Create Profile</Text> */}
                        </View>
                <ScrollView style={{ paddingHorizontal: 24 }}>
                        <Text style={styles.PageTitle}>Personal Information:</Text>

                        <View style={styles.inputTwoView}>
                            <View>
                                <Text style={[styles.inputTitle, { width: 150 }]}>{this.state.firstname === "" ? "" : "FIRST NAME"}</Text>
                                <View style={this.state.firstnameValid || !this.state.loginVaid ? styles.inputView : styles.ErrorinputView}>
                                    <TextInput
                                        onChangeText={(firstname) => this.firstname(firstname)}
                                        onFocus={(res) => this.setState({ titleVaid: false })}
                                        underlineColorAndroid='transparent'
                                        value={this.state.firstname}
                                        style={[styles.textInput, { width: 150 }]}
                                        placeholder='First name'
                                    />
                                </View>
                            </View>
                            <View>
                                <Text style={[styles.inputTitle, { width: 150 }]}>{this.state.lastname === "" ? "" : "LAST NAME"}</Text>
                                <View style={this.state.lastnameValid || !this.state.loginVaid ? styles.inputView : styles.ErrorinputView}>
                                    <TextInput
                                        onChangeText={(lastname) => this.lastname(lastname)}
                                        onFocus={(res) => this.setState({ titleVaid: false })}
                                        underlineColorAndroid='transparent'
                                        value={this.state.lastname}
                                        style={[styles.textInput, { width: 150 }]}
                                        placeholder='Last name'
                                    />
                                </View>
                            </View>
                        </View>
                        <Text style={styles.inputTitle}>{this.state.email === "" ? "" : "Email Address"}</Text>
                        <View style={this.state.emailValid|| !this.state.loginVaid ?styles.inputView:styles.ErrorinputView}>
                            <TextInput
                                onChangeText={(email) => this.email(email)}
                                onFocus={(res) => this.setState({ titleVaid: false })}
                                underlineColorAndroid='transparent'
                                value={this.state.email}
                                style={styles.textInput}
                                placeholder='Email Address'
                            />
                        </View>
                         
                        <Text style={styles.inputTitle}>{this.state.phone === "" ? "" : "Phone Number"}</Text>
                        <View style={this.state.phoneValid || !this.state.loginVaid ? styles.inputView : styles.ErrorinputView}>
                            <TextInput
                                onChangeText={(phone) => this.phone(phone)}
                                onFocus={(res) => this.setState({ titleVaid: false })}
                                underlineColorAndroid='transparent'
                                value={this.state.phone}
                                style={styles.textInput}
                                keyboardType='numeric'
                                placeholder='Phone Number'
                            />
                        </View>
                        <Text style={styles.inputTitle}>{this.state.unit === "" ? "" : "Apt Number"}</Text>
                        <View style={this.state.unitValid || !this.state.loginVaid ? styles.inputView : styles.ErrorinputView}>
                            <TextInput
                                onChangeText={(unit) => this.unit(unit)}
                                onFocus={(res) => this.setState({ titleVaid: false })}
                                underlineColorAndroid='transparent'
                                value={this.state.unit}
                                style={styles.textInput}
                                placeholder='Apt Number'
                            />
                        </View>
                        <Text style={styles.inputTitle}>{this.state.complex === "" ? "" : "Complex Name"}</Text>
                        <TouchableOpacity onPress={() => this.DriverModalVisible(true)}>
                        <View style={this.state.complexValid || !this.state.loginVaid ? styles.inputView : styles.ErrorinputView}>                            
                            {
                                this.state.complex != ""?
                                <Text style={styles.textInput}>{this.state.complex}</Text>
                                :
                                <Text style={[styles.textInput,{color:'#c7c7cd'}]}>{"Complex Name"}</Text>
                            } 
                        </View>
                        </TouchableOpacity>
                        
                        <Text style={styles.inputTitle}>{this.state.password === "" ? "" : "Password"}</Text>
                        <View style={this.state.passwordValid || !this.state.loginVaid ?styles.inputView:styles.ErrorinputView}>
                            <TextInput
                                onChangeText={(password) => this.password(password)}
                                underlineColorAndroid='transparent'
                                onFocus={(res) => this.setState({ titleVaid: false })}
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
                        <Text style={styles.inputTitle}>{this.state.Cpassword === "" ? "" : "Confirm Password"}</Text>
                        <View style={this.state.CpasswordValid || !this.state.loginVaid ?styles.inputView:styles.ErrorinputView}>
                            <TextInput
                                onChangeText={(Cpassword) => this.Cpassword(Cpassword)}
                                underlineColorAndroid='transparent'
                                onFocus={(res) => this.setState({ titleVaid: false })}
                                value={this.state.Cpassword}
                                style={styles.textInput}
                                placeholder='Confirm Password'
                                secureTextEntry={this.state.CpasswordShow ? false : true}
                            />
                            <TouchableOpacity onPress={() => this.setState({ CpasswordShow: !this.state.CpasswordShow })}>
                                {
                                    this.state.passwordShow ?
                                        <Icon name='ios-eye' style={styles.iconShow} size={25} />
                                        : <Icon name='ios-eye-off' style={styles.iconShow} size={25} />
                                }
                            </TouchableOpacity>
                        </View>
                        <Button text={'Sign Up'} style={{ marginVertical: 30 }} onPress={() => this.continue()} />                        
                        <View style={{ marginBottom: 270 }}></View>
                </ScrollView>
                <Modal animationType='fade' transparent={true} visible={this.state.DriverModalVisible} >
                    <View style={styles.ModalView}>
                        <TouchableOpacity onPress={() => this.setState({ DriverModalVisible: false })}>
                            <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: 'rgb(255,255,255)', marginLeft: 10, marginBottom: 10 }} >
                                <Icon name='ios-close' size={30} style={{ alignSelf: 'center' }} color='rgb(78,80,83)' />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.DriverModalContant}>
                            
                            {
                                this.state.complex_lists?
                                this.state.complex_lists.map(item => {
                                    return (
                                        <TouchableOpacity style={styles.dirverBtns} onPress={() => this.setState({ complex: `${item.complex_name}`, complex_id: item.id, complexValid:true, DriverModalVisible: false })}>
                                            <Text style={styles.dirverName}>{`${item.complex_name}`}</Text>
                                            <Text style={styles.addressName}>{`(${item.address})`}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                                :null
                            }
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
    continue() {
        if( this.state.firstnameValid && this.state.lastnameValid && this.state.phoneValid &&
            this.state.unitValid && this.state.complexValid && this.state.emailValid){
                this.setState({ loginVaid: true })
                if(this.state.password == '' && this.state.Cpassword == ''){
                    alert('Input Error!')
                }else if (this.state.password.length < 6) {
                    alert('Password must be at least 6 character')
                }else if(this.state.password != this.state.Cpassword){
                    alert('Pasword and Confirm Password should be match!')
                }else{
                    fetch('http://18.221.234.213/api/api_signup', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: this.state.email,
                            firstname: this.state.firstname,
                            lastname: this.state.lastname,
                            phone: this.state.phone,
                            complex_id: this.state.complex_id,
                            apart_num: this.state.unit,
                            password: this.state.password,
                        }),
                    })
                        .then((response) => response.json())
                        .then((responseJson) => {
                            console.log(responseJson)
                            // this.setState({ modalVisible: true })
                            // setTimeout(this.Goupcoimg, 3000)
                            if(responseJson.data==="success"){
                                this.props.navigation.navigate('Login');
                            }
                            if(responseJson.data==="failure"){
                                alert('Email exist aleady!')
                            }
                        })
                        .catch((error) => {
                            alert(error);
                        });
                }
        
        }else{
            alert("Input Error!")
            this.setState({ loginVaid: true })
        }
    }

    firstname(firstname) {
        this.setState({ firstname: firstname })
        if (firstname == '')
            this.setState({ firstnameValid: false })
        else
            this.setState({ firstnameValid: true })
    }
    lastname(lastname) {
        this.setState({ lastname: lastname })
        if (lastname == '')
            this.setState({ lastnameValid: false })
        else
            this.setState({ lastnameValid: true })
    }
    phone(phone) {
        this.setState({ phone: phone })
        if (phone == '')
            this.setState({ phoneValid: false })
        else
            this.setState({ phoneValid: true })
    }
    unit(unit) {
        this.setState({ unit: unit })
        if (unit == '')
            this.setState({ unitValid: false })
        else
            this.setState({ unitValid: true })
    }
    city(city) {
        this.setState({ city: city })
        if (city == '')
            this.setState({ cityValid: false })
        else
            this.setState({ cityValid: true })
    }
    zipcode(zipcode) {
        this.setState({ zipcode: zipcode })
        if (zipcode == '')
            this.setState({ zipcodeValid: false })
        else
            this.setState({ zipcodeValid: true })
    }
    email(email) {
        this.setState({ email: email })
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            this.setState({ emailValid: true})
        } else {
            this.setState({ emailValid: false})
        }
    }
    password(pass) {
        if (pass.length < 6 || pass != this.state.password) this.setState({ password: pass, passwordValid: false})
        else this.setState({ password: pass, CpasswordValid: true, passwordValid: true })
    }
    Cpassword(pass) {
        if (pass.length < 6 || pass != this.state.password) this.setState({ Cpassword: pass, CpasswordValid: false})
        else this.setState({ Cpassword: pass, CpasswordValid: true, passwordValid: true  })
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