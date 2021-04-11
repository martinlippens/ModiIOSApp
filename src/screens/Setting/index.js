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

        super(props)
        const { user } = this.props.userinfo;
        const { bookinginfo } = this.props.userinfo;
        console.log(user)
        this.state = {
            email: '',
            password: '',
            drawer: false,
            addressData: [],
            userInfo: user,
            bookinginfo: bookinginfo
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
        const { user } = this.props.userinfo;

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
                <View style={this.state.drawer ? styles.containerOFF : styles.container}>
                    <TouchableOpacity onPress={() => this.openControlPanel()} style={styles.backIcon}>
                        <Image source={require('../../images/grey.png')} style={styles.meunIcon} />
                    </TouchableOpacity>
                    <View style={styles.body}>
                        <HexagoneImag imageUrl={user.photo} />
                        {/* <Image source={{uri: `data:image/jpg;base64,${user.photos}`}} style={{width:300,height:350,resizeMode:'stretch'}} /> */}
                    </View>
                    <View style={styles.logoView}>
                        {/* <Text style={styles.logoText}>{`${user.complex_name?.toUpperCase()} & SKYDECK`}</Text> */}
                    </View>
                    <View style={styles.body}>
                        <Text style={[styles.Welcome,{marginTop:30}]}>{"Hi " + user.first_name + "!"}</Text>
                        <Text style={styles.Welcome}>{"Welcome to Modi!"}</Text>
                        {/* <Text style={styles.MsgText}>{`Our records show that you live in Apt ${user.apart_num}`}</Text> */}
                        <TouchableOpacity style={styles.btn_view} onPress={() => this.Login()}>
                            <Text style={styles.btn_con}>Great, Let's continue </Text>
                            <Icon name='ios-arrow-forward' color="rgb(0, 140, 223)" size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Drawer>
        )
    }
    drawerContent() {
        const { user } = this.props.userinfo;

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
                            <Text style={styles.headerbtn_con}>{`${user.first_name} ${user.last_name}`}</Text>
                            <Text style={styles.headerbtn_credit}>1 credit available for February</Text>
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
                    <TouchableOpacity 
                    onPress={() =>
                        {  
                            this._drawer.close()
                            //this.props.navigation.navigate('Schedule')
                        }}
                    style={[styles.menuView, { paddingTop: 30 }]}>
                        <Text style={styles.menuText}>Upcoming Cleanings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.menuView]}
                     onPress={() => 
                        {  this._drawer.close()
                    this.props.navigation.navigate("History")}}>
                        <Text style={styles.menuText}>History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.menuView]}
                    onPress={() => 
                        {  this._drawer.close()
                    this.props.navigation.navigate("Setting")}}>
                        <Text style={styles.menuText}>Setting</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={[styles.menuView]}
                    onPress={() =>
                        { 
                            this._drawer.close()
                            this.props.navigation.navigate('Password')}
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
                    <TouchableOpacity style={[styles.menuView]}  onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.menuText}>Sign out</Text>
                    </TouchableOpacity>
                </LinearGradient>


                {/* <ScrollView>
                    
                    <Text style={styles.headerTitle}>MODI</Text>
                    <View style={styles.BottomBorder} />
                    <Text style={{ fontSize: 14, fontFamily: 'Symbol', fontWeight: 'bold', marginTop: 15, color: 'black', marginLeft: 12 }}>{user.first_name + " " + user.last_name}</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Symbol', fontWeight: '300', marginTop: 5, color: '#333', marginLeft: 12, marginBottom: 15 }}>{user.email}</Text>
                    <View style={styles.BottomBorder} />
                    <Text style={{ fontSize: 14, fontFamily: 'Symbol', fontWeight: 'bold', marginVertical: 10, color: 'black', marginLeft: 12 }}>1 Credit for</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Symbol', fontWeight: 'bold', marginVertical: 10, color: 'black', marginLeft: 12 }}>October remaining</Text>

                    <TouchableOpacity style={[styles.menuView, { backgroundColor: '#F5F5F5' }]}>
                        <Text style={styles.menuText}>Upcoming Cleanings</Text>
                        <Icon style={styles.icons} name='ios-arrow-forward' size={30} color='#9ea0a4' />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 14, fontFamily: 'Symbol', fontWeight: 'bold', marginVertical: 10, color: 'black', marginLeft: 12 }}>My info</Text>
                    <TouchableOpacity style={[styles.menuView, { backgroundColor: '#F5F5F5' }]}>
                        <Text style={styles.menuText}>Past Cleanings</Text>
                        <Icon style={styles.icons} name='ios-arrow-forward' size={30} color='#9ea0a4' />
                    </TouchableOpacity>
                    <View style={styles.BottomBorder} />
                    <TouchableOpacity style={[styles.menuView, { backgroundColor: '#F5F5F5' }]}>
                        <Text style={styles.menuText}>My Account</Text>
                        <Icon style={styles.icons} name='ios-arrow-forward' size={30} color='#9ea0a4' />
                    </TouchableOpacity>
                    <View style={styles.BottomBorder} />
                    <TouchableOpacity style={[styles.menuView, { backgroundColor: '#F5F5F5' }]}>
                        <Text style={styles.menuText}>Contact</Text>
                        <Icon style={styles.icons} name='ios-arrow-forward' size={30} color='#9ea0a4' />
                    </TouchableOpacity>
                    <View style={styles.BottomBorder} />
                    <TouchableOpacity style={[styles.menuView, { backgroundColor: '#F5F5F5' }]} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.menuText}>Sign out</Text>
                        <Icon style={styles.icons} name='ios-arrow-forward' size={30} color='#9ea0a4' />
                    </TouchableOpacity>
                    <View style={styles.BottomBorder} />
                </ScrollView> */}
            </View >
        )
    }
    Login() {
        this.props.navigation.navigate('Service')
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