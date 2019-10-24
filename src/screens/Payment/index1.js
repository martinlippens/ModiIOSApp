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
            cardnum: '',
            mmyy: '',
            cvc: '',
            promo: '',
            cardnumValid: true,
            mmyyValid: true,
            cvcValid: true,
            promoValid: true,
            validStart: false,
            loading: false
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.backIcon}>
                        <Icon name='ios-arrow-back' size={40} color='#212123'/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Payment</Text>
                </View>
                
                <View style={styles.servicetitle}>
                    <Text style={styles.serviceText}>Cleaning Plan : Every 2 weeks{'\n'}Starting Mon, May 28  AM{'\n'}3hours</Text>
                </View>
                <View style={styles.inputView}>
                    <TextInput 
                        onChangeText={(cardnum)=>this.cardnum(cardnum)}
                        underlineColorAndroid = 'transparent'
                        value = {this.state.cardnum}
                        style = {styles.textInput}
                        placeholder='Card Number'
                        keyboardType='numeric'

                    />
                </View>
                {
                    this.state.cardnumValid&&this.state.validStart?
                    <View style={styles.validView}>
                        <Text>Please enter a card number.</Text>
                    </View>:null
                }
               
                <View style={[styles.inputView,{marginTop:30}]}>
                    <TextInput 
                        placeholder='MM/YY'
                        onChangeText={(mmyy)=>this.mmyy(mmyy)}
                        underlineColorAndroid = 'transparent'
                        value = {this.state.mmyy}
                        style = {styles.mmyyInput}
                    />
                    <TextInput 
                        placeholder='CVC'
                        onChangeText={(cvc)=>this.cvc(cvc)}
                        underlineColorAndroid = 'transparent'
                        value = {this.state.cvc}
                        style = {styles.cvcInput}
                        keyboardType='numeric'
                    />
                </View>
                {
                    this.state.mmyyValid&&this.state.validStart?
                    <View style={styles.validView}>
                        <Text>Please enter a MM/YY.</Text>
                    </View>:null


                }
                {
                    
                     this.state.cvcValid&&this.state.validStart?
                    <View style={styles.validView}>
                        <Text>Please enter a cvc.</Text>
                    </View>:null
                }
                <View style={[styles.inputView,{marginTop:30}]}>
                    <TextInput 
                        onChangeText={(promo)=>this.promo(promo)}
                        underlineColorAndroid = 'transparent'
                        value = {this.state.promo}
                        style = {styles.textInput}
                        placeholder='Promo code(optional)'
                        keyboardType='numeric'

                    />
                </View>
                {
                    this.state.promoValid&&this.state.validStart?
                    <View style={styles.validView}>
                        <Text>Please enter a promo code.</Text>
                    </View>:null
                }
                <Button text={'SUBMIT'} style={{marginVertical:35}} onPress={()=>this.Next()}/>
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
            alert(error.message)
            this.setState({loading: false})
        })
    }
    cardnum(cardnum){
        
        if(cardnum.length===0) this.setState({cardnum:cardnum, cardnumValid:true})
        else  this.setState({cardnum:cardnum, cardnumValid:false})
        
        
    }
    mmyy(mmyy){
        if(mmyy.length===0) this.setState({mmyy: mmyy, mmyyValid: true})
        else this.setState({mmyy: mmyy, mmyyValid: false})
    }
    cvc(cvc){
        if(cvc.length===0) this.setState({cvc: cvc, cvcValid: true})
        else this.setState({cvc: cvc, cvcValid: false})
    }
    promo(promo){
        if(promo.length===0) this.setState({promo: promo, promoValid: true})
        else this.setState({promo: promo, promoValid: false})
    }


    Next(){
        this.setState({validStart: true})
        if(this.state.cardnumValid||this.state.mmyyValid||this.state.cvcValid) return
        this.props.navigation.navigate('Setting')
    }

}