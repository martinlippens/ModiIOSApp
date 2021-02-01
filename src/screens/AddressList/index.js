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
  ScrollView
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import axios from 'axios';
import QS from 'qs';

export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        this.state={
            address: '',
            zipcode: '',
            unit: '',
            data: [],
            locationname: '',
            addressvalid: true
        }
    }
   
    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>                    
                    <Icon name='ios-ribbon' size={30} color='white' style={{marginLeft:18}} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 30}}>
                    <Icon name='ios-home' size={100} color='#000' style={{alignSelf:'center',marginTop:30,marginBottom:15}} />
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Setting')}>
                        <View style={styles.locationView}>
                            <View style={styles.dupView}>
                                <Text style={styles.locationName}>County Road 121</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Button text={'Add Address'} style={{marginTop:15,backgroundColor: 'black'}} onPress={()=>this.Login()}/>
                </ScrollView>
            </View>
        )
    }
   
    Login(){
       this.props.navigation.navigate('Address',{param:true})
    }
}