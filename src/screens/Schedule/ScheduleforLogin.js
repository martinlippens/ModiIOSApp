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
  Modal
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import IOSPicker from 'react-native-ios-picker';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
const weekday=[
    'Sun','Mon','Tue','Wed','Thu','Fri','Sat'
]
const availableTime = ['8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM']
const {width, height} = Dimensions.get('window')
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
            howoften: 2,
            moreOptionModal: false,
            isDatePickerVisible: false,
            isTimePickerVisible: false,
            date: 'Select Start Date',
            time: 'Select Start Time',
            day:'',
            calendarModal: false
        }
    }
    componentWillMount(){
        
        console.log('++---props',this.props.navigation.state.params)
        const {loginData} = this.props.navigation.state.params
        this.setState({howoften:loginData.howoften, date:loginData.date, time: loginData.time})
    }
    _showDateTimePicker = () => this.setState({ timeModal: true });

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
        const {goBack} = this.props.navigation;
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>goBack()} style={styles.backIcon}>
                        <Icon name='ios-arrow-back' size={40} color='#212123'/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Schedule Cleaning</Text>
                </View>
                <View style={styles.servicetitle}>
                    <Text style={styles.serviceText}>Select a Frequency</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:18}}>
                    <View style={{flexDirection:'row',justifyContent:'space-around',paddingVertical:18}}>
                    {
                        weekday.map(w=>{
                            return(
                                <TouchableOpacity onPress={()=>this.setState({day:w})}>
                                    {
                                        moment().format('ddd')===w?
                                        <Text style={{position:'absolute',top:-20,alignSelf:'center'}}>Today</Text>:null
                                    }
                                    <View style={this.state.day===w?styles.dayView_active:styles.dayView} >
                                        <Text style={{color:this.state.day===w?'#fff':'#00a991'}}>{w}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                    </View>
                    <View style={styles.howOften}>
                        <TouchableOpacity onPress={()=>this.setState({howoften:1})}>
                            <View style={this.state.howoften===1?styles.howOftenView_active:styles.howOftenView}>
                                <Text style={this.state.howoften===1?styles.oftenText_active:styles.oftenText}>One Time</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.setState({howoften:2})}>
                            <View style={this.state.howoften===2?styles.howOftenView_active:styles.howOftenView}>
                                <Text style={this.state.howoften===2?styles.oftenText_active:styles.oftenText}>Weekly</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.setState({howoften:3})}>
                            <View style={this.state.howoften===3?styles.howOftenView_active:styles.howOftenView}>
                                <Text style={this.state.howoften===3?styles.oftenText_active:styles.oftenText}>Monthly</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* <TouchableOpacity onPress={this._showDateTimePicker}>
                        <View style={[styles.inputView,{marginVertical:25}]}>
                            <Text style={styles.dateText}>{this.state.time}</Text>
                        </View>
                    </TouchableOpacity> */}
                    <IOSPicker 
                            data={availableTime}
                            onValueChange={(d, i)=> this.setState({time:d})}
                            style = {[styles.inputView,{marginVertical:15}]}
                            textStyle = {{fontSize: 18,fontWeight:'300'}}
                            mode='collapse'
                        />
                    <TouchableOpacity onPress={()=>this.setState({calendarModal: true})}>
                        <View style={[styles.inputView,{marginBottom: 25}]}>
                            <Text style={styles.dateText}>{this.state.date}</Text>
                        </View>
                    </TouchableOpacity>
                    <Button text={'CONTINUE'} style={{marginVertical:15}} onPress={()=>this.Next()}/>
                </ScrollView>   
                         
                <DateTimePicker
                    isVisible={this.state.isDatePickerVisible}
                    onConfirm={this._handleDatePicked1}
                    onCancel={this._hideDateTimePicker1}
                    mode='date'
                    minimumDate={new Date()}
                    minuteInterval={30}
                />    

                <Modal
                    visible={this.state.calendarModal}
                    animationType='slide'
                    transparent={true}
                >
                    <View style={{paddingTop: 30,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center',alignItems:'center',width,height}}>
                        <View style={{width:width-50,height:350,borderRadius:10,backgroundColor:'white',paddingTop:50}}>
                        {/* <View style={styles.header}>
                            <TouchableOpacity onPress={()=>this.setState({calendarModal: false})} style={styles.backIcon}>
                                <Icon name='ios-arrow-back' size={40} color='#212123'/>
                            </TouchableOpacity>
                            <Text style={styles.headerTitle}>Calendar</Text>
                        </View> */}
                        <TouchableOpacity onPress={()=>this.setState({calendarModal: false})} style={[styles.backIcon,{right:16,top:5}]}>
                            <Icon name='md-close' size={30} color='#00a991'/>
                        </TouchableOpacity>
                        <CalendarList
                        // Callback which gets executed when visible months change in scroll view. Default = undefined
                        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                        // Max amount of months allowed to scroll to the past. Default = 50
                        pastScrollRange={50}
                        // Max amount of months allowed to scroll to the future. Default = 50
                        futureScrollRange={50}
                        // Enable or disable scrolling of calendar list
                        scrollEnabled={true}
                        // Enable or disable vertical scroll indicator. Default = false
                        showScrollIndicator={false}
                        current={`${moment().format('YYYY-MM-DD')}`}
                        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                        minDate={`${moment().format('YYYY-MM-DD')}`}
                        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                        maxDate={'2020-10-30'}
                        // Handler which gets executed on day press. Default = undefined
                        onDayPress={(day) => this.setState({date:day.dateString,calendarModal:false})}
                        // Handler which gets executed on day long press. Default = undefined
                        onDayLongPress={(day) => {console.log('selected day', day)}}
                        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                        monthFormat={'MMMM'}
                        markedDates={{
                            [this.state.date]: {selected: true}                            
                        }}
                        // Handler which gets executed when visible month changes in calendar. Default = undefined
                        onMonthChange={(month) => {console.log('month changed', month)}}
                        // Hide month navigation arrows. Default = false
                        hideArrows={true}
                        // Replace default arrows with custom ones (direction can be 'left' or 'right')
                        renderArrow={(direction) => (<Arrow />)}
                        // Do not show days of other months in month page. Default = false
                        hideExtraDays={true}
                        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                        // day from another month that is visible in calendar page. Default = false
                        disableMonthChange={true}
                        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                        firstDay={7}
                        // Hide day names. Default = false
                        hideDayNames={false}
                        // Show week numbers to the left. Default = false
                        showWeekNumbers={false}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                        onPressArrowLeft={substractMonth => substractMonth()}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                        onPressArrowRight={addMonth => addMonth()}
                        theme={{
                            backgroundColor: '#ffffff',
                            calendarBackground: '#ffffff',
                            textSectionTitleColor: '#b6c1cd',
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#00adf5',
                            dayTextColor: '#2d4150',
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#00adf5',
                            selectedDotColor: '#ffffff',
                            arrowColor: 'orange',
                            monthTextColor: '#00a991',
                            
                            textMonthFontWeight: 'bold',
                            textDayFontSize: 16,
                            textMonthFontSize: 16,
                            textDayHeaderFontSize: 16
                        }}
                        style={{                            
                            height: height-10,
                            width: width-50,
                            borderRadius:10
                        }}
                        />
                        </View>
                    </View>

                </Modal>
                
            </View>
        )
    }
    Next(){
        const {loginData} = this.props.navigation.state.params;
        loginData.howoften = this.state.howoften;
        loginData.time = this.state.time; 
        loginData.date = this.state.date;
        this.props.navigation.navigate('SelectCleanerForLogin',{loginData: loginData})
    }
}