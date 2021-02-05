import React, { Component } from 'react';
import { connect } from 'react-redux';
let { width, height } = Dimensions.get('window')
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
import moment from 'moment';
import IOSPicker from 'react-native-ios-picker';
import FastImage from 'react-native-fast-image';
import CalendarPicker from 'react-native-calendar-picker';
import Carousel, { Pagination } from 'react-native-snap-carousel';


const cleanOption = [
    {
        index: 1,
        title: 'Oven',
    },
    {
        index: 2,
        title: 'Pantry',
    },
    {
        index: 3,
        title: 'Interior windows',
    },
    {
        index: 4,
        title: 'Refrigerator',
    }
]


class DateSet extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        const { bookingdata } = this.props.userinfo;
        const { user } = this.props.userinfo;
        console.log(bookingdata)
        this.state = {
            AptNum: '',
            startDate: new Date(),
            chosenDate: null,
            bookingdata: bookingdata,
            userInfo: user,
            menuActive: 1,
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
            activeSlide: 0,
            TimeName: null,
            TimeNameActive: false,
            cleanSetTimes: null,
            extra: [],
            cleanerMsg: ""

        }
        this.onDateChange = this.onDateChange.bind(this);

    }
    onDateChange(date) {
        console.log(date)
        //this.setState({ chosenDate: moment(date).format("X"), menuActive: 2 });
        this.setState({ chosenDate: moment(date).format("X") });
    }
    _renderItem = ({ item, index }) => {
        return (

            <TouchableOpacity onPress={() => this.SetTime(index, item.name, item.time)} style={styles.setTimeView}>
                <View style={index == this.state.activeSlide ? styles.activeItem : styles.itmeView}>
                    <Image source={item.image} style={styles.timeimage} />
                    <Text style={styles.setTimeTtile}>{item.name}</Text>
                    <Text style={styles.setTimeTimes}>{item.time}</Text>
                </View>
            </TouchableOpacity>
        );

    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerTitle}>{this.state.bookingdata.CleanType}</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting')} style={styles.CloseIcon}>
                    <Icon name='md-close' size={35} color='rgb(151, 151, 151)' />
                </TouchableOpacity>



                <ScrollView>
                    <KeyboardAvoidingView behavior="position" >
                        <View style={styles.content}>
                            <View style={styles.menuView}>
                                <TouchableOpacity style={styles.menuBtn} onPress={() => this.setState({ menuActive: 1 })}>
                                    <Image source={require('../../images/calendar.png')} style={styles.meunIcon} />
                                    <Text style={styles.menuTitle}>Date</Text>
                                </TouchableOpacity>
                                <Text style={styles.menuValue}>{this.state.chosenDate ? moment(this.state.chosenDate, "X").format("MMM DD, YYYY") : null}</Text>
                            </View>
                            {
                                this.state.menuActive == 1 ?
                                    <View style={styles.dateView}>
                                        {
                                            this.state.chosenDate ?
                                                <CalendarPicker
                                                    previousTitle={<Icon name='ios-arrow-back' size={20} color='rgb(52, 45, 52)' />}
                                                    nextTitle={<Icon name='ios-arrow-forward' size={20} color='rgb(52, 45, 52)' />}
                                                    // textStyle={{fontSize: 16, fontFamily:"Montserrat-Light"}}
                                                    weekdays={["S", "M", "T", "W", "T", "F", "S"]}
                                                    minDate={this.state.startDate}
                                                    selectedDayColor="#825082"
                                                    selectedDayTextColor="#FFFFFF"
                                                    onDateChange={this.onDateChange}
                                                    // disabledDates={["2018-12-05"]}
                                                    customDatesStyles={[{
                                                        date: moment(this.state.chosenDate, "X").format("YYYY-MM-DD"),
                                                        style: { backgroundColor: '#825082' },
                                                        textStyle: { color: '#FFFFFF' }, // sets the font color
                                                        containerStyle: [], // extra styling for day container
                                                    }]}
                                                    width={320}
                                                />
                                                :
                                                <CalendarPicker
                                                    previousTitle={<Icon name='ios-arrow-back' size={20} color='rgb(52, 45, 52)' />}
                                                    nextTitle={<Icon name='ios-arrow-forward' size={20} color='rgb(52, 45, 52)' />}
                                                    // textStyle={{fontSize: 16, fontFamily:"Montserrat-Light"}}
                                                    weekdays={["S", "M", "T", "W", "T", "F", "S"]}
                                                    months={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                                                        'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                                                    minDate={this.state.startDate}
                                                    selectedDayColor="#825082"
                                                    selectedDayTextColor="#FFFFFF"
                                                    onDateChange={this.onDateChange}
                                                    // disabledDates={["2018-12-05"]}
                                                    width={320}
                                                />
                                        }

                                    </View>
                                    : null
                            }

                            <View style={styles.menuView}>
                                <TouchableOpacity style={styles.menuBtn} onPress={() => this.setState({ menuActive: 2, TimeNameActive: true })}>
                                    <Image source={require('../../images/clock.png')} style={styles.meunIcon} />
                                    <Text style={styles.menuTitle}>Timeframe</Text>
                                </TouchableOpacity>
                                <Text style={styles.menuValue}>{this.state.TimeNameActive ? this.state.cleanTimes[this.state.activeSlide].name : null}</Text>
                            </View>
                            {
                                this.state.menuActive == 2 ?
                                    <View>
                                        <ScrollView horizontal={true} decelerationRate={0} snapToInterval={400} snapToAlignment={"center"} style={styles.TimesbtnView}>

                                            {
                                                this.state.cleanTimes.map((item, index) => {
                                                    return (
                                                        <TouchableOpacity onPress={() => this.SetTime(index, item.name, item.time)} style={styles.setTimeView}>
                                                            <View style={index == this.state.activeSlide ? styles.activeItem : styles.itmeView}>
                                                                <Image source={item.image} style={styles.timeimage} />
                                                                <Text style={styles.setTimeTtile}>{item.name}</Text>
                                                                <Text style={styles.setTimeTimes}>{item.time}</Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                    )
                                                })
                                            }

                                        </ScrollView>
                                        {/* <Carousel
                                            data={this.state.cleanTimes}
                                            renderItem={this._renderItem}
                                            sliderWidth={width}
                                            itemWidth={152}
                                            sliderHeight={168}
                                            itemHeight={170}
                                            onSnapToItem={(index) => this.setState({ activeSlide: index })}
                                            firstItem={this.state.activeSlide}
                                        /> */}
                                        {/* <Pagination
                                            dotsLength={this.state.cleanTimes.length}
                                            activeDotIndex={this.state.activeSlide}
                                            containerStyle={{ backgroundColor: 'rgb(255, 255, 255)' }}
                                            dotStyle={{
                                                width: 6,
                                                height: 6,
                                                borderRadius: 3,
                                                marginHorizontal: 0,
                                                paddingHorizontal: 0,
                                                backgroundColor: 'rgba(73, 71, 73, 0.2)'
                                            }}
                                            inactiveDotStyle={{
                                                // Define styles for inactive dots here
                                            }}
                                            inactiveDotOpacity={1}
                                            inactiveDotScale={0.6}
                                        /> */}
                                    </View>
                                    : null
                            }
                            <View style={styles.menuView}>
                                <TouchableOpacity style={styles.menuBtn} onPress={() => this.setState({ menuActive: 3 })} >
                                    <Image source={require('../../images/list.png')} style={styles.meunIcon} />
                                    <Text style={styles.menuTitle}>Details</Text>
                                </TouchableOpacity>
                                <Text style={styles.menuValue}>{this.state.extra.length > 0 ? "Add " + this.state.extra.length : null}</Text>
                            </View>

                            {
                                this.state.menuActive == 3 ?
                                    <View>
                                        {
                                            this.state.bookingdata.CleanType == 'Deep Cleaning' ?
                                                <View>
                                                    <Text style={styles.detailTitle}>Select 2 appliances to clean:</Text>
                                                    <View style={styles.detailView}>
                                                        <ScrollView horizontal={true} decelerationRate={0} snapToInterval={400} snapToAlignment={"center"} style={styles.optionbtnView}>

                                                            {
                                                                cleanOption.map(d => {
                                                                    return (
                                                                        <TouchableOpacity onPress={() => this.selectExtra(d.index)} style={styles.setTimeView}>
                                                                            <View style={this.state.extra.indexOf(d.index) > -1 ? styles.activeoption : styles.optionbtn}>
                                                                                <Text style={this.state.extra.indexOf(d.index) > -1 ? styles.activetext : styles.detailoption}>{d.title}</Text>
                                                                            </View>
                                                                        </TouchableOpacity>
                                                                    )
                                                                })
                                                            }

                                                        </ScrollView>
                                                    </View>
                                                </View>
                                                : null
                                        }

                                        <Text style={styles.detailTitle}>Message for cleaner:</Text>
                                        <View style={styles.textAreaView}>
                                            <TextInput
                                                onChangeText={(cleanerMsg) => this.cleanerMsg(cleanerMsg)}
                                                style={styles.textArea}
                                                value={this.state.cleanerMsg}
                                                placeholder="Enter your comments here"
                                                placeholderTextColor="grey"
                                                numberofLines={10}
                                                multiline={true}
                                            />
                                        </View>
                                    </View>
                                    : null
                            }

                            <View style={[styles.menuView]}></View>
                            <View style={{ marginBottom: 250 }}>
                                <Button text={'Book it!'} onPress={() => this.submitBtn()} />
                            </View>


                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>

            </View>
        )
    }
    SetTime(index, name, times) {
        //this.setState({ TimeName: name, cleanSetTimes: times, menuActive: 3 })
        this.setState({ activeSlide: index })
    }
    cleanerMsg(res) {
        this.setState({ cleanerMsg: res })

    }
    selectExtra(type) {
        var extra_count = 2;
        extras = this.state.extra;
        var index = extras.indexOf(type);
        if (index > -1) {
            extras.splice(index, 1);
            this.setState({ extra: extras });
            return
        }
        if (this.state.extra.length === extra_count) return

        extras.push(type)
        this.setState({ extra: extras });
    }
    submitBtn() {
        if (this.state.chosenDate === null) {
            alert("please select date")
            return
        }

        if (this.state.TimeNameActive === false) {
            alert("please select timeframe")
            return
        }

        var TimeName = this.state.cleanTimes[this.state.activeSlide].name
        this.setState({ TimeName: TimeName })
        let data = this.state.bookingdata
        data.DateSet = this.state.chosenDate
        data.TimeName = TimeName
        data.cleanSetTimes = this.state.cleanSetTimes
        data.Extra = this.state.extra
        data.cleanerMsg = this.state.cleanerMsg
        var cleanerMsg = this.state.cleanerMsg;
        if(cleanerMsg === ""){
            cleanerMsg = "-";
        }
        
        fetch('http://3.16.29.143/api/api_bookingstore', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.state.userInfo.token}`,
            },
            body: JSON.stringify({
                userID: this.state.userInfo.userInfo.u_id,
                CleanType: data.CleanType,
                Extra: JSON.stringify(this.state.extra),
                DateSet: this.state.chosenDate,
                TimeSet: TimeName,
                cleanerMsg: cleanerMsg
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.warn('BOOKING_RESPONSE',responseJson)
                if (responseJson.flag === "success") {
                    this.props.BookingInfoStore(data);
                    this.props.navigation.navigate('Success');
                }
            })
            .catch((error) => {
                alert(error);
            });


    }
}


const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo
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
        },
        BookingInfoStore: (data) => {
            dispatch({
                type: 'Bookinginfo_store',
                value: data
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DateSet) 