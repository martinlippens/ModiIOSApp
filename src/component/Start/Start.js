import React, { Component } from 'react';
import { View, Dimensions, StatusBar } from 'react-native';
let { width, height } = Dimensions.get('window')
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import { getApiToken } from "../../Utils/Helpers";
import Storage from '../../Utils/Storage';

class Start extends Component {
    constructor(props) {
        super(props)
        this.state = {
            SetOption: null,
            animationFlag: true,
            loggedIn: null,
            welcome: null,
        }
    }

    async componentDidMount() {
        const token = await getApiToken();
        StatusBar.setHidden(true);
        const welcome = await Storage.get('welcome');
        if (token) {
            this.setState({ loggedIn: true })
        } else {
            this.setState({ loggedIn: false })
        }
        this.setState({ welcome })
        setTimeout(this.animationFun, 2500);
        setTimeout(this.Goupcoimg, 4000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Animatable.Image animation={this.state.animationFlag ? "bounceInDown" : "bounceOutUp"} duration={1000} source={require('../../assets/images/icon6.png')} style={[styles.iconAnimation, { top: 10, left: width / 2 - 80 }]} />
                <Animatable.Image animation={this.state.animationFlag ? "bounceInLeft" : "bounceOutLeft"} duration={1500} source={require('../../assets/images/icon2.png')} style={[styles.iconAnimation, { top: height / 2 - 160 - 24, left: -50 }]} />
                <Animatable.Image animation={this.state.animationFlag ? "bounceInRight" : "bounceOutRight"} duration={1800} source={require('../../assets/images/icon1.png')} style={[styles.iconAnimation, { top: height / 2 - 160 - 24, right: -35 }]} />
                <Animatable.Image animation={this.state.animationFlag ? "bounceInLeft" : "bounceOutLeft"} duration={1200} source={require('../../assets/images/icon5.png')} style={[styles.iconAnimation, { bottom: height / 2 - 160 - 24, left: -27 }]} />
                <Animatable.Image animation={this.state.animationFlag ? "bounceInRight" : "bounceOutRight"} duration={1700} source={require('../../assets/images/icon3.png')} style={[styles.iconAnimation, { bottom: height / 2 - 160 - 24, right: -35 }]} />
                <Animatable.Image animation={this.state.animationFlag ? "bounceInUp" : "bounceOutDown"} duration={1000} source={require('../../assets/images/icon4.png')} style={[styles.iconAnimation, { bottom: 10, left: width / 2 - 80 }]} />

                <Animatable.Image animation="fadeOut" iterationDelay={2500} duration={1000} source={require('../../assets/images/logo-black.png')} style={[styles.iconAnimation, { width: 152, height: 72, top: height / 2 - 36, left: width / 2 - 76 }]} />
                <Animatable.Text animation="fadeOut" iterationDelay={2500} duration={1000} style={styles.versionText}>Version 1.04</Animatable.Text>
            </View>
        )
    }

    goLogin() {
        this.props.navigation.navigate('Login')
    }
    animationFun = () => {
        this.setState({ animationFlag: false });
    }

    Goupcoimg = () => {
        this.setState({ modalVisible: false }, () => {
            if (this.state.welcome !== "true") {
                this.props.navigation.replace('Welcome');
            } else {
                StatusBar.setHidden(false);
                if (this.state.loggedIn) {
                    this.props.navigation.replace('Main');
                } else {
                    this.props.navigation.replace('Auth');
                }
            }
        });
    }
}

export default Start;