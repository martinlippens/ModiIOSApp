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
    ScrollView,
    Modal
} from 'react-native';
let { width, height } = Dimensions.get('window')
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button'
import * as Animatable from 'react-native-animatable';


class Start extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = {
            SetOption: null,
            animationFlag:true
        }
    }
    componentWillMount(){
        setTimeout(this.animationFun, 2500)
        setTimeout(this.Goupcoimg, 4000)
    }
    
    render() {
        //const { goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Animatable.Image animation={this.state.animationFlag?"bounceInDown":"bounceOutUp"} duration={1000} source={require('../../images/icon6.png')} style={[styles.iconAnimation, { top: 10, left: width / 2 - 80 }]} />
                <Animatable.Image animation={this.state.animationFlag?"bounceInLeft":"bounceOutLeft"} duration={1500} source={require('../../images/icon2.png')} style={[styles.iconAnimation, { top: height / 2 - 160 - 24, left: -50 }]} />
                <Animatable.Image animation={this.state.animationFlag?"bounceInRight":"bounceOutRight"} duration={1800} source={require('../../images/icon1.png')} style={[styles.iconAnimation, { top: height / 2 - 160 - 24, right: -35 }]} />
                <Animatable.Image animation={this.state.animationFlag?"bounceInLeft":"bounceOutLeft"} duration={1200} source={require('../../images/icon5.png')} style={[styles.iconAnimation, { bottom: height / 2 - 160 - 24, left: -27 }]} />
                <Animatable.Image animation={this.state.animationFlag?"bounceInRight":"bounceOutRight"} duration={1700} source={require('../../images/icon3.png')} style={[styles.iconAnimation, { bottom: height / 2 - 160 - 24, right: -35 }]} />
                <Animatable.Image animation={this.state.animationFlag?"bounceInUp":"bounceOutDown"}  duration={1000} source={require('../../images/icon4.png')} style={[styles.iconAnimation, { bottom: 10, left: width / 2 - 80 }]} />

                <Animatable.Image animation="fadeOut" iterationDelay={2500} duration={1000} source={require('../../images/black.png')} style={[styles.iconAnimation, { width: 152, height: 72, top: height / 2 - 36, left: width / 2 - 76 }]} />
                <Animatable.Text animation="fadeOut" iterationDelay={2500} duration={1000} style={styles.versionText}>Version 1.04</Animatable.Text>
            </View>
        )
    }
    service(id) {
        if (id === 1) {
            this.setState({ SetOption: 1 })
        } else {
            this.setState({ SetOption: 2 })
        }

    }
    goLogin() {
        //this.props.navigation.navigate('Login')
        this.props.navigation.navigate('Schedule')
    }   
    animationFun = ()=>{
        this.setState({animationFlag:false})
    }
    Goupcoimg = () => {
        this.setState({ modalVisible: false })
        //this.props.navigation.navigate('Login');
        this.props.navigation.navigate('Schedule')
    }
}


const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo.user
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
        LoginTypeStore: (data) => {
            dispatch({
                type: 'LoginType_store',
                value: data
            })
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Start) 