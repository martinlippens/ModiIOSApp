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
    Modal,
    ActivityIndicator,
    AsyncStorage
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import Swiper from 'react-native-swiper';
class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)

        //const { loginType } = this.props.userinfo;
        loginType=1;
        this.state = {
            email: '',
            password: '123456',
            emailValid: true,
            passwordValid: true,
            validStart: false,
            loginVaid: true,
            modalVisble: false,
            modalexitflag: false,
            loginType:loginType
            
        }
    }


    componentWillMount() {
        AsyncStorage.getItem('email', (err, result) => {
            this.setState({ email: result })
        })
        AsyncStorage.getItem('modalVisble', (err, result) => {
            if (result == "false")
                this.setState({ modalVisble: false })
            else
                this.setState({ modalVisble: true })
        })
    }
    setModalVisible(visible) {
        this.setState({ modalVisble: visible });
    }
    render() {
        return (
            <View style={this.state.modalVisble ? styles.containerModal : styles.container}>

                <Image source={require('../../images/black.png')} style={styles.logoimage} />
                {
                    this.state.loginType === 1 ?
                        <View style={styles.buidings}>
                            <Image source={require('../../images/individual.png')} style={styles.buidingimage} />
                            <Text style={styles.buidingTitle}>Individual</Text>
                        </View>
                        :
                        <View style={styles.buidings}>
                            <Image source={require('../../images/buildings.png')} style={styles.buidingimage} />
                            <Text style={styles.buidingTitle}>Complex</Text>
                        </View>
                }


                
                <Text style={styles.inputTitle}>{this.state.email === "" ? "" : "EMAIL ADDRESS"}</Text>
                <View style={this.state.loginVaid?styles.inputView:styles.ErrorinputView}>
                    <TextInput
                        onChangeText={(email) => this.email(email)}
                        underlineColorAndroid='transparent'
                        value={this.state.email}
                        style={styles.textInput}
                        placeholder='Enter you email address'
                    />
                </View>
                {
                    !this.state.loginVaid?
                    <View>
                        <Text  style={styles.validView}>Invalid email address</Text>
                    </View>:null
                }
                {
                    this.state.emailValid && this.state.loginVaid ?
                        <Button text={'Continue'} style={{ marginTop: 38 }} onPress={() => this.Login()} />
                        : null
                }
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisble}
                >
                    <View style={styles.modalView}>
                        <View style={styles.modalcontain}>
                            <Swiper style={styles.wrapper} height={350} autoplayTimeout={5} >

                                <View style={styles.slide}>
                                    <Image resizeMode='stretch' style={styles.swiperimage} source={require('../../images/deepCleaningPale.png')} />
                                    <Text style={styles.slideTtile}>Lorem ipsum dolor</Text>
                                    <Text style={styles.slideText}>Lorem ipsum dolor sit amet,</Text>
                                    <Text style={styles.slideText}>consectetur adipiscing elit.</Text>
                                </View>
                                <View style={styles.slide}>
                                    <Image resizeMode='stretch' style={styles.swiperimage} source={require('../../images/basicCleaningPale.png')} />
                                    <Text style={styles.slideTtile}>Lorem ipsum dolor</Text>
                                    <Text style={styles.slideText}>Lorem ipsum dolor sit amet,</Text>
                                    <Text style={styles.slideText}>consectetur adipiscing elit.</Text>
                                </View>

                                <View style={styles.slide}>
                                    <Image resizeMode='stretch' style={styles.swiperimage} source={require('../../images/deepCleaningPale.png')} />
                                    <Text style={styles.slideTtile}>Lorem ipsum dolor</Text>
                                    <Text style={styles.slideText}>Lorem ipsum dolor sit amet,</Text>
                                    <Text style={styles.slideText}>consectetur adipiscing elit.</Text>
                                </View>
                            </Swiper>
                            <View style={styles.modalBtnView}>
                                <TouchableOpacity style={styles.checkView} onPress={() => { this.setState({ modalexitflag: !this.state.modalexitflag }) }}>
                                    {
                                        this.state.modalexitflag ?
                                            <Icon name='ios-checkbox-outline' size={25} color='rgb(0,140,223)' />
                                            : <Icon name='ios-square-outline' size={25} color='rgb(0,140,223)' />
                                    }
                                    <Text style={styles.checkbtn}>Don't show again.</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.modalskip()}>
                                    <Text style={styles.skipbtn}>Skip tour</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

    modalskip() {
        if (this.state.modalexitflag)
            AsyncStorage.setItem('modalVisble', "false", () => { });
        else
            AsyncStorage.setItem('modalVisble', "true", () => { });

        this.setModalVisible(!this.state.modalVisble)
    }

    Login() {
        // this.setState({validStart: true})
        // if(this.state.emailValid||this.state.passwordValid) return
        console.log(this.state.email, this.state.password)

        fetch('http://3.16.29.143/api/api_emailverify', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.data === "setpass") {
                    this.props.navigation.navigate('Setpass', { email: this.state.email, userID: responseJson.userID });
                } else if (responseJson.data === "sinin") {
                    this.props.navigation.navigate('Password', { email: this.state.email });
                }
                else {
                    if(this.state.loginType === 1){
                        this.props.navigation.navigate('Address', { email: this.state.email });
                    }
                }
            })
            .catch((error) => {
                alert(error);
            });

    }
    email(email) {
        this.setState({ email: email })
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            this.setState({ emailValid: true, login_failed: false, loginVaid: true })
        } else {
            this.setState({ emailValid: true, login_failed: false, loginVaid: false })
        }

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
        },
        BookingInfoStore: (data) => {
            dispatch({
                type: 'Bookinginfo_store',
                value: data
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login) 