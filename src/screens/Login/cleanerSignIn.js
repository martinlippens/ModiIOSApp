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
            email: '',
            password: '',
            emailValid: true,
            passwordValid: true,
            validStart: false,
            loading: false,
            login_failed:false
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.backIcon}>
                        <Icon name='ios-arrow-back' size={40} color='#212123'/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Sign In</Text>
                </View>
                {
                    this.state.login_failed?
                    <View style={styles.validView}>
                        <Text>Your email address and password do not match.</Text>
                    </View>:null
                }                

                <View style={styles.inputView}>
                    <TextInput 
                        onChangeText={(email)=>this.email(email)}
                        underlineColorAndroid = 'transparent'
                        value = {this.state.email}
                        style = {styles.textInput}
                        placeholder='Email'

                    />
                </View>
                {
                    this.state.emailValid&&this.state.validStart?
                    <View style={styles.validView}>
                        <Text>Please enter a valid email address.</Text>
                    </View>:null
                }
               
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
                        <Text>Please enter a password.</Text>
                    </View>:null
                }
                
                <Button text={'Sign In'} style={{marginTop:35}} onPress={()=>this.Login()}/>
                <Text onPress={()=>this.props.navigation.navigate('Forgot')} style={styles.forgotTitle}>Forgot your password?</Text>
                {
                    this.state.loading?
                    <View style={styles.loadinView}>
                        <ActivityIndicator size='large' color='#41cab7' />
                    </View>:null
                }
            </View>
        )
    }
    Login(){
        this.setState({validStart: true})
        if(this.state.emailValid||this.state.passwordValid) return
        this.setState({loading: true})
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(()=>{
            this.setState({loading: false})
            this.props.navigation.navigate('Setting');
        })
        .catch(error=>{
            //alert(error.message)
            this.setState({login_failed:true})
            this.setState({loading: false})
        })
    }
    email(email){
        this.setState({email: email})
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(email)){
            this.setState({emailValid: false,login_failed:false})
        }else{
            this.setState({emailValid: true,login_failed:false})
        }
        
    }
    password(pass){
        if(pass.length===0) this.setState({password: pass, passwordValid: true,login_failed:false})
        else this.setState({password: pass, passwordValid: false,login_failed:false})
    }
}