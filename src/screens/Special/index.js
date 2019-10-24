import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  DatePickerIOS,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableHighlight,
  KeyboardAvoidingView
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import axios from 'axios';
import QS from 'qs';
import IOSPicker from 'react-native-ios-picker';
import FastImage from 'react-native-fast-image';
export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        this.state={
            AptNum: '',
            chosenDate: new Date()
        }
       

        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        this.setState({chosenDate: newDate})
    } 
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>                    
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.backIcon}>
                        <Icon name='ios-arrow-back' size={40} color='#212123'/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Special Info</Text>
                </View>
                
                <KeyboardAvoidingView behavior="position" >
                <ScrollView>
                <View style={styles.servicetitle}>
                    <Text style={styles.serviceText}>Do you have specific instructions for your cleaner?</Text>
                </View>
                
                <View style={styles.textAreaView}>
                    <TextInput
                        style={styles.textArea}
                        placeholder="Do you have a pet?"
                        placeholderTextColor="grey"
                        numberofLines={10}
                        returnKeyType={"done"}
                        multiline={true}
                    />
                </View>
                
                    <Button text={'Next'} style={{marginTop:25}} onPress={()=>this.submitBtn()}/>
                    </ScrollView>
                </KeyboardAvoidingView>
                
            </View>
        )
    }
    submitBtn(){
        this.props.navigation.navigate('Success')    
    }
}