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
  Modal
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'
//import firebase from 'firebase'
import StarRating from 'react-native-star-rating'
export default class Feedback extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: '',
            drawer: false,
            isDatePickerVisible: false,
            isTimePickerVisible: false,
            date: new Date().getTime(),
            loading: true,
            data:[],
            reportModal: false,
            feedback: '',
            key: '',
            starCounting: 0,
            cleanerName: '',
            cleanerId:''
        }
    }
     componentWillMount(){
         
        let self = this
        // let uid = firebase.auth().currentUser.uid
        // firebase.database().ref('users/'+uid+'/completedCleaner').on('value',snapshot=>{
        //     snapshot.forEach(child=>{
        //         firebase.database().ref('cleaners/'+child.val()).on('value', s=>{
        //             let cleanerName = s.child('fullname').val()
        //             firebase.database().ref('ScheduleCleaner/'+child.val()).on('value',function(snap){
        //                 let data = []
        //                 snap.forEach(c=>{
        //                     if(c.val().user!==uid||c.val().cleanerFeed===null) return
        //                     obj={}
        //                     obj.key=c.key
        //                     obj.val=c.val()
        //                     obj.cleanerName= cleanerName
        //                     obj.cleanerId = child.val()
        //                     data.push(obj)
        //                 })
        //                 self.setState({data,loading: false})
        //             })
        //         })
                
        //     })
        // })
      
    }
    _showDateTimePicker = () => this.setState({ isTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isTimePickerVisible: false });
    _showDateTimePicker1 = () => this.setState({ isDatePickerVisible: true });

    _hideDateTimePicker1 = () => this.setState({ isDatePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', moment(date).format('hh:mm a'));
        this.setState({time: moment(date).format('hh:mm a')})
        this._hideDateTimePicker();
    };
    _handleDatePicked1 = (date) => {
        console.log('A date has been picked: ', date);
        this.setState({date: moment(date).format('DD-MM-YYYY')})
        this._hideDateTimePicker1();
    };
    render(){
        // console.log('++----DATA',this.state.data)
        return(
           
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={[styles.backIcon,{left:16}]}>
                            <Icon name='ios-arrow-back' size={40} color='#212123'/>
                        </TouchableOpacity>                        
                        
                        <Text style={styles.headerTitle_home}>Report</Text>
                    </View>
                    <ScrollView>
                        {
                            this.state.data.                             
                            map((d,index)=>{
                                //console.log('++---Result',d)
                                return(
                                    <TouchableOpacity style={{marginBottom:20}} onPress={()=>this.setState({
                                        reportModal: true,
                                        key: d.key,
                                        feedback:d.val.cleanerFeed,
                                        cleanerName: d.cleanerName,
                                        cleanerId: d.cleanerId
                                        })}>
                                        <View style={styles.locationView}>
                                            <View style={styles.dupView}>
                                                <Text style={styles.locationName}>{d.val.date}</Text>
                                                <Text style={styles.schedulename}>{d.cleanerName}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                            
                        }
                        <DateTimePicker
                            isVisible={this.state.isDatePickerVisible}
                            onConfirm={this._handleDatePicked1}
                            onCancel={this._hideDateTimePicker1}
                            mode='date'
                            minimumDate={new Date()}
                            minuteInterval={30}
                        /> 

                    </ScrollView>
                     {
                        this.state.loading?
                        <View style={styles.loadinView}>
                            <ActivityIndicator size='large' color='#41cab7' />
                        </View>:null
                    }
                    <Modal
                        animationType='slide'
                        visible={this.state.reportModal}
                        transparent={false}
                        
                    >
                        <View style={[styles.container]}>
                            <View style={[styles.header,{marginBottom:5}]}>
                                <TouchableOpacity onPress={()=>this.setState({reportModal: false})} style={[styles.backIcon,{left:16}]}>
                                    <Icon name='ios-arrow-back' size={40} color='#212123'/>
                                </TouchableOpacity>
                                <Text style={styles.headerTitle_home}>Feedback Detail</Text>                                
                            </View>
                            <ScrollView>
                                <Text style={{textAlign:'right',padding:18,fontSize:19}}>{this.state.cleanerName}</Text>
                                <View style={styles.reportView}>
                                    <TextInput 
                                        placeholder='write here...'
                                        onChangeText={(text)=>this.setState({feedback: text})}
                                        style={styles.TextArea}
                                        multiline={true}
                                        value={this.state.feedback}
                                        editable={false}
                                    />
                                </View>
                                <View style={styles.starView}>
                                    <StarRating
                                        disabled={false} 
                                        maxStars={5} 
                                        rating={this.state.starCounting} 
                                        fullStarColor={'#9CDBB3'} 
                                        starSize={35} 
                                        emptyStarColor='#9CDBB3'
                                        selectedStar={(rating)=>this.setState({starCounting: rating})}
                                    />
                                </View>
                                <Button text={'Done'} style={{marginTop:35}} onPress={()=>this.Login()}/>
                            </ScrollView>
                        </View>
                    </Modal>
                </View>
           
        )
    }
    
    Login(){
        
        if(this.state.feedback==='') return
        // let uid = firebase.auth().currentUser.uid
        // firebase.database().ref('ScheduleCleaner/'+this.state.cleanerId+'/'+this.state.key).update({
        //     star: this.state.starCounting
        // }).then(()=>{
        //     this.setState({reportModal: false})
        // })
    }
}