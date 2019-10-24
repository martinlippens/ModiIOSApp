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
  ScrollView,
  ActivityIndicator
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import firebase from 'firebase';
export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        this.state={
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            phone:'',
            Vcode:'',
            firstnameValid: true,
            validStart: false,
            verifycode:false,
            lastnameValid: true,
            emailValid: true,
            passwordValid: true,
            phoneValid:true,
            loading: false
        }
    }
    componentDidMount(){
        //console.log('++---',this.props.navigation.state.params.ServiceData)
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    {
                        !this.state.verifycode?
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.backIcon}>
                            <Icon name='ios-arrow-back' size={40} color='#212123'/>
                        </TouchableOpacity>
                        :null
                    }
                        <Text style={styles.headerTitle}>{!this.state.verifycode?"Sign Up":"Verify Code"}</Text>
                        
                </View>
                {
                    !this.state.verifycode?
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 30}}>
                    <View style={styles.inputView}>
                        <TextInput
                            placeholder='Full Name' 
                            onChangeText={(name)=>this.firstname(name)}
                            underlineColorAndroid = 'transparent'
                            value = {this.state.firstname}
                            style = {styles.textInput}

                        />
                    </View>
                    {
                        this.state.firstnameValid&&this.state.validStart?
                        <View style={styles.validView}>
                            <Text>Please enter your full name.</Text>
                        </View>:null
                    }
                    
                    <View style={styles.inputView}>
                        <TextInput 
                            placeholder='Email'
                            onChangeText={(email)=>this.email(email)}
                            underlineColorAndroid = 'transparent'
                            value = {this.state.email}
                            style = {styles.textInput}

                        />
                    </View>
                    {
                        this.state.emailValid && this.state.validStart?
                        <View style={styles.validView}>
                            <Text>Please enter a valid email address.</Text>
                        </View>:null
                    }
                    <View style={styles.inputView}>
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
                            <Text>Please enter a password.</Text>
                        </View>:null
                    }
                    <View style={styles.inputView}>
                        <Text style={styles.phoneup}>+1</Text>
                        <TextInput
                            placeholder='Phone' 
                            onChangeText={(phone)=>this.phone(phone)}
                            underlineColorAndroid = 'transparent'
                            value = {this.state.phone}
                            style = {styles.phoneInput}
                            keyboardType='numeric'
                        />
                    </View>
                    {
                        this.state.phoneValid&&this.state.validStart?
                        <View style={styles.validView}>
                            <Text>Please enter a phone number.</Text>
                        </View>:null
                    }
                    <Button text={'Create Account'} style={{marginTop:35}} onPress={()=>this.Signup()}/>
                </ScrollView>
                :
                    <View>
                    <View style={styles.inputView}>
                        <TextInput
                            placeholder='Code' 
                            onChangeText={(Vcode)=>this.Vcode(Vcode)}
                            underlineColorAndroid = 'transparent'
                            value = {this.state.Vcode}
                            style = {styles.textInput}

                        />
                    </View>
                    <Button text={'Confirm'} style={{marginTop:35}} onPress={()=>this.confirm()}/>
                    </View>
                }
            </View>
        )
    }
    firstname(name){
        if(name.length===0) this.setState({firstnameValid: true,firstname: name})
        else this.setState({firstnameValid: false,firstname: name})        
    }
    lastname(name){
        if(name.length===0) this.setState({lastname: name, lastnameValid: true})
        else this.setState({lastname: name, lastnameValid: false})
    }
    Vcode(Vcode){
        this.setState({Vcode: Vcode})
    }
    email(email){
        this.setState({email: email})
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(email)){
            this.setState({emailValid: false})
        }else{
            this.setState({emailValid: true})
        }
        
    }
    phone(phone){
        if(phone.length===0) this.setState({phone: phone, phoneValid: true})
        else this.setState({phone: phone, phoneValid: false})
    }
    password(pass){
        if(pass.length===0) this.setState({password: pass, passwordValid: true})
        else this.setState({password: pass, passwordValid: false})
    }
    Signup(){       
        this.setState({validStart: true})
        if(this.state.firstnameValid||this.state.emailValid||this.state.passwordValid||this.state.phoneValid) return

        this.setState({verifycode:true})
        
    }
    confirm(){
        this.props.navigation.navigate('Service')
    }
}