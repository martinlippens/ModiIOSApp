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
    ActivityIndicator,
    KeyboardAvoidingView
} from 'react-native';

import styles from './EmailStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
//import firebase from 'firebase';
export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            emailValid: true,
            password: '',
            passwordValid: true,
            con_password: '',
            con_passwordValid: true,
            info:null
        }
    }
    componentDidMount() {
        //console.log('++---',this.props.navigation.state.params.ServiceData)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.logoText}>MODI</Text>
                </View>
                <KeyboardAvoidingView behavior="position" >
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
                    <View style={styles.TitleText}>
                        <Text style={styles.Welcome}>WELCOME!</Text>
                        <Text style={styles.MsgText}>Please enter your email so we can verify your identity.</Text>
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            placeholder='your.email@example.com'
                            onChangeText={(email) => this.email(email)}
                            underlineColorAndroid='transparent'
                            value={this.state.email}
                            style={styles.textInput}
                        />
                    </View>
                    {
                        this.state.emailValid && this.state.validStart ?
                            <View style={styles.validView}>
                                <Text>Please enter a valid email address.</Text>
                            </View> : null
                    }
                    {
                        this.state.info===null?
                            <Button text={'Continue'} style={{ marginTop: 35 }} onPress={() => this.Signup()} />
                        :
                            <View>
                            <View style={styles.TitleText}>
                                <Text style={styles.Welcome}>{"Rad. We Found You "+this.state.info.firstname+"!"}</Text>
                                <Text style={styles.MsgText}>Create your account by entering a passowrd.</Text>
                            </View>
                                <View style={styles.inputView}>
                                    <TextInput
                                        placeholder='New Password' 
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
                                }
                                <View style={styles.inputView}>
                                    <TextInput
                                        placeholder='Confirm Password' 
                                        onChangeText={(con_pass)=>this.con_password(con_pass)}
                                        underlineColorAndroid = 'transparent'
                                        value = {this.state.con_password}
                                        style = {styles.textInput}
                                        secureTextEntry={true}
                                    />
                                </View>
                                {
                                    this.state.con_passwordValid&&this.state.validStart?
                                    <View style={styles.validView}>
                                        <Text>The Password must be at least 6 characters long</Text>
                                    </View>:null
                                }
                                
                                <Button text={'Continue'} style={{marginTop:35}} onPress={()=>this.setPassword()}/>
                            </View>
                    }
                    
                    
                </ScrollView>
                </KeyboardAvoidingView>
            </View>
        )
    }
    password(pass){
        if(pass.length<6) this.setState({password: pass, passwordValid: true})
        else this.setState({password: pass, passwordValid: false})
    }
    con_password(pass){
        if(pass.length<6) this.setState({con_password: pass, con_passwordValid: true})
        else this.setState({con_password: pass, con_passwordValid: false})
    }
    email(email) {
        this.setState({ email: email })
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            this.setState({ emailValid: false })
        } else {
            this.setState({ emailValid: true })
        }

    }
    Signup() {
        this.setState({ validStart: true })
        if (this.state.emailValid) return



        fetch('http://3.16.29.143/api/api_emailverify', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.data === "fail") {
                    alert("Please enter correct email.");
                }
                else if(responseJson.data === "success"){
                    this.setState({ info: responseJson.info })
                    //this.props.navigation.navigate('Setpass',{info: responseJson.info})
                }
                else{
                    this.props.navigation.navigate('Login')
                }
            })
            .catch((error) => {
                alert(error);
            });
        ///this.props.navigation.navigate('Setpass')

    }

    setPassword(){       
        this.setState({validStart: true})
        if(this.state.passwordValid || this.state.con_passwordValid) return
        
        if(this.state.con_password!==this.state.password){
            alert("Password is not matched");
            return
        }

        fetch('http://3.16.29.143/api/api_setpassword', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userID:this.state.info.id,
                password: this.state.password
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if(responseJson.data === "success"){
                    this.props.navigation.navigate('Login')
                }
            })
            .catch((error) => {
                alert(error);
            });

    }
}