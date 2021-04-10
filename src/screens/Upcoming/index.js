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
    ImageBackground,
    TextInput,
    ScrollView
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import HexagoneImag from '../../components/hexagoneImg';
//import Drawer from 'react-native-drawer-menu';
import Drawer from 'react-native-drawer';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
//import firebase from 'firebase'
class Setting extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        console.log('userinfo', this.props.userinfo);

        const { user } = this.props.userinfo;
        const { bookinginfo } = this.props.userinfo;
        console.log(bookinginfo)
        this.state = {
            email: '',
            password: '',
            drawer: false,
            addressData: [],
            userInfo: user,
            bookinginfo: bookinginfo,
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
        }
    }
    componentWillReceiveProps(nextProps) {
        const { bookinginfo } = nextProps.userinfo;
        this.setState({ bookinginfo: bookinginfo })
    }

    closeControlPanel = () => {
        this.setState({ drawer: false })
    }
    openControlPanel = () => {
        this._drawer.open()
        this.setState({ drawer: true })
    }
    render() {
        return (

            <Drawer
                ref={(ref) => this._drawer = ref}
                type="overlay"
                //style={styles.container}
                openDrawerOffset={100}
                //drawerWidth={200}
                content={this.drawerContent()}
                onClose={() => {
                    this.setState({ drawer: false })
                }}
            //maskAlpha={0.1}
            //rightDisabled={this.state.drawer}
            //type={Drawer.types.Overlay}
            //customStyles={{drawer: styles.drawer}}
            //drawerPosition={Drawer.positions.left}
            //onDrawerOpen={() => { console.log('Drawer is opened'); }}
            //onDrawerClose={() => { console.log('Drawer is closed') }}
            //easingFunc={Easing.ease}
            >
                <ImageBackground style={{ width: '100%', height: '100%', opacity: 0.9 }} source={{ uri: `${this.state.userInfo.photo}` }}>
                    <LinearGradient
                        colors={['#524552', '#825082']}
                        start={{ x: 0.5, y: 0.0 }}
                        end={{ x: 1, y: 0.8 }}
                        style={this.state.drawer ? styles.containerOFF : styles.container}
                    >
                        {/* <View style={this.state.drawer?styles.containerOFF:styles.container}> */}


                        <View style={styles.body}>
                            <Text style={styles.headerText}>{"Upcoming"}</Text>
                            <Text style={styles.Welcome}>{`Hey ${this.state.userInfo.first_name}, your ${this.state.bookinginfo?.package?.name} is coming up!`}</Text>

                            <Text style={styles.weekName}>{`${moment(this.state.bookinginfo.scheduled_at, 'YYYY-MM-DD HH:mm:ss').format("dddd")}`}</Text>

                            <Text style={styles.MsgText}>{`Cleaning is scheduled for ${moment(this.state.bookinginfo?.scheduled_at, 'YYYY-MM-DD HH:mm:ss').format('Do MMM YYYY at hh A')}.`}</Text>
                            {/* <Text style={styles.MsgText}>{`(between ${this.gettimes(this.state.bookinginfo.TimeName)})`}</Text> */}

                        </View>
                        <TouchableOpacity onPress={() => this.openControlPanel()} style={styles.backIcon}>
                            <Image source={require('../../images/grey.png')} style={styles.meunIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Schedule')} style={styles.clockIcon}>
                            <Image source={require('../../images/white.png')} style={styles.meunIcon} />
                        </TouchableOpacity>
                    </LinearGradient>
                </ImageBackground>

                <LinearGradient
                    colors={['#008CDF', '#00B1D9']}
                    start={{ x: 0.0, y: 0.5 }}
                    end={{ x: 1, y: 0.8 }}
                    style={styles.BookBtn}
                >
                    <TouchableOpacity style={styles.btn_view} onPress={() => this.Login()}>

                        <View>
                            <Text style={styles.btn_con}>Book your next cleaning</Text>
                            {/* <Text style={styles.btn_credit}>You have 1 credit available</Text> */}
                        </View>
                        <Icon name='ios-arrow-forward' color="rgb(255, 255, 255)" size={25} />

                    </TouchableOpacity>
                </LinearGradient>
            </Drawer >
        )
    }
    drawerContent() {
        return (
            <View style={styles.drawerContent} >
                <LinearGradient
                    colors={['#524552', '#825082']}
                    start={{ x: 0.0, y: 0.5 }}
                    end={{ x: 1, y: 0.8 }}
                    style={styles.menuheader}
                >
                    <TouchableOpacity style={styles.menuheader_view}
                    onPress={() => {
                        this._drawer.close()
                        this.props.navigation.navigate("Profile")
                    }}>
                        <View>
                            <Text style={styles.headerbtn_con}>{`${this.state.userInfo.first_name} ${this.state.userInfo.last_name}`}</Text>
                            <Text style={styles.headerbtn_credit}>1 credit available for December</Text>
                        </View>
                        <Icon name='ios-arrow-forward' color="rgb(255, 255, 255)" style={{ marginLeft: 25 }} size={25} />
                    </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                    colors={['#FFFFFF', '#FFFFFF']}
                    start={{ x: 0.0, y: 0.5 }}
                    end={{ x: 1, y: 0.8 }}
                    style={styles.menucontent}
                >
                    <TouchableOpacity style={[styles.menuView, { paddingTop: 30 }]}
                        onPress={() => {
                            this._drawer.close()
                            //this.props.navigation.navigate('Schedule')
                        }}>
                        <Text style={styles.menuText}>Upcoming Cleanings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.menuView]}
                    onPress={() => 
                        {  this._drawer.close()
                    this.props.navigation.navigate("History")}}>
                        <Text style={styles.menuText}>History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.menuView]}
                        onPress={() => {
                            this._drawer.close()
                            this.props.navigation.navigate("Setting")
                        }}>
                        <Text style={styles.menuText}>Setting</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={[styles.menuView]}
                        onPress={() => {
                            this._drawer.close()
                            this.props.navigation.navigate('Password')
                        }
                        }>
                        <Text style={styles.menuText}>Password</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={[styles.menuView]}
                       onPress={() =>
                        {  
                            this._drawer.close()
                            this.props.navigation.navigate('Help')
                        }}>
                        <Text style={styles.menuText}>Help</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.menuView]} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.menuText}>Sign out</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        )
    }
    Login() {
        this.props.navigation.navigate('Service')
    }
    gettimes(value) {
        console.log(value)
        let res = this.state.cleanTimes.filter(item => {
            return item.name === value
        })
        if (res[0])
            return res[0].time;
        else
            return "";
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
        costinfostore: (data) => {
            dispatch({
                type: 'costinfo_store',
                value: data
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Setting) 