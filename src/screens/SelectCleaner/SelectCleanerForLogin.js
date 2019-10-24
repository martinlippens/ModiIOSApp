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
import firebase from 'firebase';
import StarRating from 'react-native-star-rating';
import Composer from 'react-native-message-composer'; 
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
            selectedCleaner:[]
        }
    }
    componentWillMount(){
        firebase.database().ref('cleaners').on('value',snapshot=>{
            let data = [];            
            snapshot.forEach(child=>{
                let obj = {}
                console.log('++--',child.val(),child.key)
                obj.key = child.key;
                obj.val = child.val();
                data.push(obj);
            })
            this.setState({cleanerData: data, loading: false,selectedCleaner: this.props.navigation.state.params.loginData.cleaner});
        }).bind(this)
        
    }
    selectCleaner(key){
        let cleanerArray = [...this.state.selectedCleaner] ;
        let index = cleanerArray.indexOf(key);
        let {cleaningType} = this.props.navigation.state.params.loginData
       
            if(cleanerArray.length>0&&index<0){
                cleanerArray=[key]
            }else{
                if(index>-1) cleanerArray.splice(index, 1);
                else cleanerArray.push(key)
            }
        
        
        
        this.setState({selectedCleaner: cleanerArray})
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
                    <Text style={styles.serviceText}>Select a Cleaner</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:10}}>
                    {
                        this.state.cleanerData.map(cleaner=>{
                            return(
                                <TouchableOpacity onPress={()=>this.selectCleaner(cleaner.key)}>
                                    <View style={self.state.selectedCleaner.indexOf(cleaner.key)>-1?styles.selectedCleanerView:styles.cleanerView}>
                                        <Image source={{uri: cleaner.val.avatar}} style={{width:50,height:50,borderRadius:25}} />
                                        <Text style={{marginLeft:18,fontSize:18}}>{cleaner.val.fullname}</Text>
                                        <View style={{position:'absolute',right: 5}}>
                                            { cleaner.val.star?
                                                <StarRating 
                                                    disabled={true} 
                                                    maxStars={5} 
                                                    rating={cleaner.val.star} 
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
                    <Button text={'CONTINUE'} style={{marginVertical:15}} onPress={()=>this.Next()}/>
                </ScrollView>
                {
                    this.state.loading?
                    <View style={styles.loadinView}>
                        <ActivityIndicator size='large' color='#41cab7' />
                    </View>:null
                }
            </View>
        )
    }
    Next(){
        if(this.state.selectedCleaner.length===0) return
        const {loginData} = this.props.navigation.state.params;
        loginData.cleaner = [...this.state.selectedCleaner]
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref('users/'+uid+'/address/'+loginData.address_id).update(loginData)
        this.props.navigation.navigate('Payment')
    //      Composer.composeMessageWithArgs(
    //     {
    //         'messageText':`Hey, You are selected for cleaning`,
                            
    //         'subject':'Order',
    //         'recipients':this.state.selectedPhone,
    //       'presentAnimated': true,
    //       'dismissAnimated': false
    //        },
    //     (result) => {
    //       switch(result) {
    //         case Composer.Sent:
    //           console.log('the message has been sent');
              
    //           break;
    //         case Composer.Cancelled:
    //           console.log('user cancelled sending the message');
    //           break;
    //         case Composer.Failed:
    //           console.log('failed to send the message');
    //           break;
    //         case Composer.NotSupported:
    //           console.log('this device does not support sending texts');
    //           break;
    //         default:
    //           console.log('something unexpected happened');
    //           break;
    //       }
    //     }
    //   );
    }
    

}