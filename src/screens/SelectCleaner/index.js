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
  Modal,
  ActivityIndicator
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import StarRating from 'react-native-star-rating';
import FastImage from 'react-native-fast-image'
import axios from 'axios'
export default class Schedule extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: '',
            cleaningType: 2,
            howoften: 0,
            moreOptionModal: false,
            addone1:false,
            addone2:false,
            addone3:false,
            addone4:false,
            addone5:false,
            cleanerData:[],
            loading: true,
            loading1: true,
            selectedCleaner:null,
            selectedPhone: [],
            scheduleData: [],
            name:'',
            token: '',
            cleanerName: ''
        }
    }
    componentWillMount(){
            fetch('http://3.16.29.143/api/api_getcleaner', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        zipcode_valid:91205
                    }),
                })
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.error){
                    this.setState({login_failed: true})
                    return;
                }
                if(responseJson.data==="false"){
                    alert("Sorry, No Cleaner");
                }
                else{
                    this.setState({cleanerData:responseJson.data})
                    console.log(responseJson.data)

                }
            })
            .catch((error) => {
                alert(error);
            });
    }
    
    render(){
        let self = this
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.backIcon}>
                        <Icon name='ios-arrow-back' size={40} color='#212123'/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Cleaners</Text>
                </View>
                <View style={styles.servicetitle}>
                    <Text style={styles.serviceText}>Do you have a preferred Cleaner?</Text>
                </View>
                <Text style={styles.helpText}>I'd like any cleaner that is available during the day & time selected.</Text>
                <Button text={'First Available'} style={{width: 160,marginVertical:15}} onPress={()=>this.Next()}/>
                <Text style={styles.helpText}>Based on your selected date & time, the folowing cleaners are avaliable</Text>
                <ScrollView contentContainerStyle={{paddingHorizontal:10}}>
                    {
                        this.state.cleanerData.map(cleaner=>{
                            return(
                                <TouchableOpacity onPress={()=>this.selectCleaner(cleaner.cleanerid)}>
                                    <View style={self.state.selectedCleaner===cleaner.cleanerid?styles.selectedCleanerView:styles.cleanerView}>
                                        <FastImage source={{uri: cleaner.photo}} style={{width:50,height:50,borderRadius:25}} />
                                        <Text style={{marginLeft:18,fontSize:18}}>{cleaner.firstname + " " + cleaner.firstname}</Text>
                                        <View style={{position:'absolute',right: 5}}>
                                            { cleaner.feedback?
                                                <StarRating 
                                                    disabled={true} 
                                                    maxStars={5} 
                                                    rating={cleaner.feedback} 
                                                    fullStarColor={'#9CDBB3'} 
                                                    starSize={15} 
                                                    emptyStarColor='#9CDBB3'
                                                />:
                                                <Text style={{opacity:0.6}}>No feedback</Text>
                                            }
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                    
                </ScrollView>
                <Button text={'Next'} style={{marginVertical:15}} onPress={()=>this.Next()}/>
                
            </View>
        )
    }
    selectCleaner(cleanerid){
        this.setState({selectedCleaner: cleanerid})
    }
    Next(){
        // alert(this.state.token+'============='+ this.state.cleanerName); return
        //if(this.state.selectedCleaner) return
        
        this.props.navigation.navigate('Special')
        
        // const {ServiceData} = this.props.navigation.state.params;
        // ServiceData.cleaner = [...this.state.selectedCleaner]
        // let uid = firebase.auth().currentUser.uid;
        // let self = this
        // firebase.database().ref('users/'+uid+'/address').push(ServiceData)
        // this.state.selectedCleaner.forEach(c=>{
        //     firebase.database().ref('ScheduleCleaner/'+c).push({
        //         time: ServiceData.time,
        //         day: ServiceData.day,
        //         date: ServiceData.date,
        //         user: uid,
        //         username: self.state.name
        //     })
        // })
        // const params = {
        //     "to" : this.state.token,
        //     "notification": {
        //         "title": "Cleaning Schedule",
        //         "text": `Hi, ${this.state.cleanerName}, You are hired by ${this.state.name} `,
        //         "sound": "default"
        //     },
        //     "priority": "high"
        // };
        // const headers = {
        //     'Authorization': 'key=AIzaSyA-nQlPDHhrE1xWHi9Fmi03sAEX4IrBnzM',
        //     'Content-Type': 'application/json'
        // }
        // if(this.state.token !== ''){
        //     axios({
        //         url: 'https://fcm.googleapis.com/fcm/send',
        //         method: 'post',
        //         headers: headers,
        //         data: params
        //     })
        // }
           
    
    }

}