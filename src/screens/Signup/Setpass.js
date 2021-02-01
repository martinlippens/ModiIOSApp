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

import styles from './EmailStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
//import firebase from 'firebase';
export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    
    constructor(props){
        super(props)
        const { params } = this.props.navigation.state;
        var info = params.info;
        this.state={
            password: '',
            passwordValid: true,
            info:info,
        }
    }
    componentDidMount(){
        //console.log('++---',this.props.navigation.state.params.ServiceData)
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                        <Text style={styles.logoText}>MODI</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 30}}>
                <View style={styles.TitleText}>
                    <Text style={styles.Welcome}>{"Rad. We Found You "+this.state.info.firstname+"!"}</Text>
                    <Text style={styles.MsgText}>Create your account by entering a passowrd.</Text>
                </View>
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
                            <Text>The Password must be at least 6 characters long</Text>
                        </View>:null
                    }
                    
                    <Button text={'Continue'} style={{marginTop:35}} onPress={()=>this.setPassword()}/>
                </ScrollView>
            </View>
        )
    }
    password(pass){
        if(pass.length<6) this.setState({password: pass, passwordValid: true})
        else this.setState({password: pass, passwordValid: false})
    }
    setPassword(){       
        this.setState({validStart: true})
        if(this.state.passwordValid) return


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