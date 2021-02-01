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
//import firebase from 'firebase'

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
            loading: true,
            date: '',
            time: '',
            cleaner: [],
            extra: []
        }
    }
    componentWillMount(){
        // let uid = firebase.auth().currentUser.uid;
        // firebase.database().ref('users/'+uid+'/address/'+this.props.navigation.state.params.address_id).on('value',function(snapshot){
        //     console.log('++--value',snapshot.child('cleaningType').val())
        //     let extra = []
        //     let cleaningType = snapshot.child('cleaningType').val()
        //     let howoften = snapshot.child('howoften').val()
        //     let date = snapshot.child('date').val()
        //     let time = snapshot.child('time').val()
        //     let cleaner = snapshot.child('cleaner').val()
        //     if(cleaningType>1) { extra = snapshot.child('extra').val()}
        //     this.setState({cleaningType,loading: false,howoften,date,time,cleaner,extra})
        // }.bind(this))
    }
    render(){
        const {goBack} = this.props.navigation;
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>goBack()} style={styles.backIcon}>
                        <Icon name='ios-arrow-back' size={40} color='#212123'/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Service for Login</Text>
                </View>
                <View style={styles.servicetitle}>
                    <Text style={styles.serviceText}>What kind of service would you like?</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:18}}>
                    <View style={styles.typeContainer}>
                        <TouchableOpacity onPress={()=>this.setState({cleaningType:1,howoften:0})}>
                            <View style={this.state.cleaningType===1?styles.cleaningTypeView_active:styles.cleaningTypeView}>
                                <Icon name='ios-woman' size={60}  />
                                <Text style={styles.typeText}>$40 / 2 hour{'\n'}No add-ons{'\n'}Cleaning</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.setState({cleaningType:2,howoften:0})}>
                            <View style={this.state.cleaningType===2?styles.cleaningTypeView_active:styles.cleaningTypeView}>
                                <Icon name='ios-woman' size={60}  />
                                <Text style={styles.typeText}>$80 / 2 hour{'\n'}2 add-ons{'\n'}Cleaning</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.setState({cleaningType:3,howoften:0})}>
                            <View style={this.state.cleaningType===3?styles.cleaningTypeView_active:styles.cleaningTypeView}>
                                <Icon name='ios-woman' size={60}  />
                                <Text style={styles.typeText}>$120 / 3 hour{'\n'}4 add-ons{'\n'}Cleaning</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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
    Next=()=>{
        let loginData={
            address_id: this.props.navigation.state.params.address_id,
            howoften:this.state.howoften,
            date:this.state.date,
            time:this.state.time,
            cleaner:this.state.cleaner,
            extra: this.state.extra,
            cleaningType: this.state.cleaningType
        }
        if(this.state.cleaningType===1){
            this.props.navigation.navigate('ScheduleForLogin',{loginData: loginData})
        }else{
            this.props.navigation.navigate('ExtrasForLogin',{loginData: loginData})
        }
    }

}