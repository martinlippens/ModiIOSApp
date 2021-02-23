import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    Modal,
    ActivityIndicator,
    TouchableHighlight
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import axios from 'axios';
import moment from 'moment';
import QS from 'qs';
import IOSPicker from 'react-native-ios-picker';
import FastImage from 'react-native-fast-image';
import HttpClient from '../../utils/HttpClient';
class Success extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        const { bookinginfo } = this.props.userinfo;
        const { user } = this.props.userinfo;
        console.log(bookinginfo)
        this.state = {
            userInfo: user,
            bookinginfo: bookinginfo,
            modalVisible: false,

            cleanTimes: [
                {
                    name: "Morning",
                    time: "8 AM - 10 AM",
                    image: require('../../images/1Morning.png')
                },
                {
                    name: "Late Morning",
                    time: "10 AM - 12 PM",
                    image: require("../../images/2LateMorning.png")
                },
                {
                    name: "Afternoon",
                    time: "12 PM - 2 PM",
                    image: require("../../images/3Afternoon.png")
                },
                {
                    name: "Late Afternoon",
                    time: "2 PM - 4 PM",
                    image: require("../../images/LateAfternoon.png")
                }
            ],
        };

        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.serviceText}>Your cleaning is successfully booked!</Text>
                    <Text style={styles.helptitle}>A confirmation was sent to your email address with more details.</Text>
                    
                    <View style={styles.btnT}>
                            <View style={styles.btnTypeView}>
                                <Image source={{ uri: HttpClient.BASE_URL + '/storage/' + this.state.bookinginfo?.package?.image }} style={styles.cleanImag} />
                                <Text style={styles.typeText}>{this.state.bookinginfo?.package?.name}</Text>
                            <Text style={[styles.MsgText, {textAlign: 'center'}]}>{`Cleaning is scheduled for ${moment(this.state.bookinginfo?.scheduled_at, 'YYYY-MM-DD HH:mm:ss').format('Do MMM YYYY [at] hh A')}.`}</Text>
                                {/* <Text style={styles.contentText}>{`${this.state.bookinginfo?.TimeName} on ${moment(this.state.bookinginfo?.DateSet, "X").format("dddd, MMM DD")},`}</Text> */}
                                {/* <Text style={styles.contentText}>{`between ${this.gettimes(this.state.bookinginfo?.TimeName)}.`}</Text> */}
                                <View style={styles.lineView}></View>
                                <View style={styles.locationView}>
                                    <Image source={require('../../images/mapPin.png')} style={styles.locationIcon} />
                                    <Text style={styles.contentText}>{`${this.state.bookinginfo?.address?.street_address} , ${this.state.bookinginfo?.address?.city}`}</Text>
                                </View>
                            </View>
                    </View>

                    <Button text={'Add a reminder'} onPress={() => this.submitBtn()} />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Upcoming')} >
                            <Text style={styles.closebtn}>Close</Text>
                    </TouchableOpacity>
                </View>
                
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <View style={styles.popups}>
                        <View style={styles.popupView}>
                            <Image source={require('../../images/timer.png')} style={styles.timerImag} />
                            <Text style={styles.ModalTitle}>Reminder activated</Text>
                            <Text style={[styles.textArea, { marginTop: 20 }]}>You will receive an alert prior to your scheduled cleaning appointment.</Text>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
    submitBtn() {
            this.setState({ modalVisible: true })
            setTimeout(this.Goupcoimg, 3000)
    }
    Next() {
        this.setState({ modalVisible: false })
        this.props.navigation.navigate('Upcoming');
    }
    Goupcoimg = () => {
            this.setState({ modalVisible: false })
            this.props.navigation.navigate('Upcoming');
    }
    gettimes(value){
        console.log(value)
        let res = this.state.cleanTimes.filter(item => {
            return item.name === value
        })
        if(res[0])            
            return res[0].time;
        else
            return "";
    }
}



const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        formDataStor: (data) => {
            dispatch({
                type: 'info_store',
                value: data
            })
        },
        BookingDataStore: (data) => {
            dispatch({
                type: 'BookingData_store',
                value: data
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Success) 