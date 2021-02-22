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
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

        const { loginType } = this.props.userinfo;
        const { params } = this.props.navigation.state;
        const email = params.email;
        const userInfo = params.userInfo;

        this.state = {
            bedrooms: '',
            bedroomsValid: false,
            bathrooms: '',
            bathroomsValid: false,
            size: '',
            sizeValid: false,

            loginVaid: false,
            loginType: loginType,
            applies: [],
            amet: [],
            modalVisible: false,
            email: email,
            userInfo: userInfo,
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ paddingHorizontal: 24 }}>
                    <View style={styles.buidings}>
                        <Image source={require('../../images/individual.png')} style={styles.buidingimage} />
                        <Text style={styles.buidingTitle}>Individual</Text>
                    </View>
                    <Text style={styles.pageInfo}>Apartment Details</Text>
                </View>
                <ScrollView style={{ paddingHorizontal: 24 }}>
                    <KeyboardAvoidingView behavior="position" >

                        <Text style={styles.PageTitle}>Choose the amount of rooms:</Text>

                        <View style={styles.inputTwoView}>
                            <View>
                                <Text style={[styles.inputTitle, { width: 150 }]}>{this.state.bedrooms === "" ? "" : "BEDROOMS"}</Text>
                                <View style={this.state.bedroomsValid || !this.state.loginVaid ? styles.inputView : styles.ErrorinputView}>
                                    <TextInput
                                        onChangeText={(bedrooms) => this.bedrooms(bedrooms)}
                                        underlineColorAndroid='transparent'
                                        value={this.state.bedrooms}
                                        style={[styles.textInput, { width: 150 }]}
                                        placeholder='Bedrooms'
                                        keyboardType='numeric'
                                    />
                                </View>
                            </View>
                            <View>
                                <Text style={[styles.inputTitle, { width: 150 }]}>{this.state.bathrooms === "" ? "" : "BATHROOMS"}</Text>
                                <View style={this.state.bathroomsValid || !this.state.loginVaid ? styles.inputView : styles.ErrorinputView}>
                                    <TextInput
                                        onChangeText={(bathrooms) => this.bathrooms(bathrooms)}
                                        underlineColorAndroid='transparent'
                                        value={this.state.bathrooms}
                                        style={[styles.textInput, { width: 150 }]}
                                        placeholder='Bathrooms'
                                        keyboardType='numeric'
                                    />
                                </View>
                            </View>
                        </View>
                        {/* {
                        this.state.menuActive == 3 ?
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
                    } */}
                        <Text style={[styles.inputTitle, { width: 150 }]}>{this.state.size === "" ? "" : "SIZE (Sq ft)"}</Text>
                        <View style={this.state.sizeValid || !this.state.loginVaid ? [styles.inputView, { width: 150 }] : styles.ErrorinputView}>
                            <TextInput
                                onChangeText={(size) => this.size(size)}
                                underlineColorAndroid='transparent'
                                value={this.state.size}
                                style={[styles.textInput, { width: 150 }]}
                                placeholder='Size (Sq ft)'
                                keyboardType='numeric'
                            />
                        </View>
                    </KeyboardAvoidingView>
                    <Text style={styles.PageTitle}>Check what applies to you:</Text>
                    <TouchableOpacity onPress={() => this.applies('floors')} style={styles.checkView}>
                        {
                            this.state.applies.indexOf('floors') > -1 ?
                            <Icon name={'ios-checkbox'} size={22} color='rgb(0, 140, 223)' />
                            :<Icon name={'ios-square-outline'} size={22} color='rgb(0, 140, 223)' />
                        }
                        <Text style={styles.checkName}>Carpeted floors</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.applies('pets')} style={styles.checkView}>
                        {
                            this.state.applies.indexOf('pets') > -1 ?
                            <Icon name={'ios-checkbox'} size={22} color='rgb(0, 140, 223)' />
                            :<Icon name={'ios-square-outline'} size={22} color='rgb(0, 140, 223)' />
                        }
                        <Text style={styles.checkName}>I have pets</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.applies('room sheets')} style={styles.checkView}>
                        {
                            this.state.applies.indexOf('room sheets') > -1 ?
                            <Icon name={'ios-checkbox'} size={22} color='rgb(0, 140, 223)' />
                            :<Icon name={'ios-square-outline'} size={22} color='rgb(0, 140, 223)' />
                        }
                        <Text style={styles.checkName}>Change my guest room sheets</Text>
                    </TouchableOpacity>

                    <Text style={styles.PageTitle}>Lorem ipsum dolor sit amet:</Text>
                    <TouchableOpacity onPress={() => this.amet('tortor')} style={styles.checkView}>
                        {
                            this.state.amet.indexOf('tortor') > -1 ?
                            <Icon name={'ios-checkbox'} size={22} color='rgb(0, 140, 223)' />
                            :<Icon name={'ios-square-outline'} size={22} color='rgb(0, 140, 223)' />
                        }
                        <Text style={styles.checkName}>Sed a dictum tortor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.amet('suspendisse')} style={styles.checkView}>
                        {
                            this.state.amet.indexOf('suspendisse') > -1 ?
                            <Icon name={'ios-checkbox'} size={22} color='rgb(0, 140, 223)' />
                            :<Icon name={'ios-square-outline'} size={22} color='rgb(0, 140, 223)' />
                        }
                        <Text style={styles.checkName}>Suspendisse</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.amet('malesuada')} style={styles.checkView}>
                        {
                            this.state.amet.indexOf('malesuada') > -1 ?
                            <Icon name={'ios-checkbox'} size={22} color='rgb(0, 140, 223)' />
                            :<Icon name={'ios-square-outline'} size={22} color='rgb(0, 140, 223)' />
                        }
                        <Text style={styles.checkName}>Vestibulum malesuada</Text>
                    </TouchableOpacity>
                    {
                        this.state.bedroomsValid && this.state.bathroomsValid && this.state.sizeValid ?
                            <Button text={'Continue'} style={{ marginVertical: 30 }} onPress={() => this.continue()} />
                            :
                            null
                    }
                    <View style={{ marginBottom: 230 }}></View>

                </ScrollView>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <View style={styles.popups}>
                        <View style={styles.popupView}>
                            <Image source={require('../../images/success.png')} style={styles.timerImag} />
                            <Text style={styles.ModalTitle}>Profile Complete!</Text>
                            <Text style={[styles.textArea, { marginTop: 20 }]}>Aliquam luctus dolor ut bibendum suscipit. Aliquam venenatis libero.</Text>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
    continue() {

        fetch('http://18.221.234.213/api/api_signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                firstname: this.state.userInfo.firstname,
                lastname: this.state.userInfo.lastname,
                phone: this.state.userInfo.phone,
                complex_id: this.state.userInfo.complex_id,
                apart_num: this.state.userInfo.unit,
                city: this.state.userInfo.city,
                zipcode: this.state.userInfo.zipcode,
                bedroom: this.state.bedrooms,
                bathroom: this.state.bathrooms,
                size: this.state.size,
                price: 200,
                applies: JSON.stringify(this.state.applies),
                sit_amet: JSON.stringify(this.state.amet)
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({ modalVisible: true })
                setTimeout(this.Goupcoimg, 3000)

            })
            .catch((error) => {
                alert(error);
            });

    }
    Goupcoimg = () => {
        this.setState({ modalVisible: false })
        this.props.navigation.navigate('Login');
    }
    applies(value) {
        
        let applies = this.state.applies
        console.log(applies)
        let index = applies.indexOf(value);
        if (index > -1) {
            applies.splice(index, 1);
            this.setState({ applies: applies });
        } else {
            applies.push(value);
            this.setState({ applies: applies });
        }
    }
    amet(value) {
        let amet = this.state.amet
        let index = amet.indexOf(value);
        if (index > -1) {
            amet.splice(index, 1);
            this.setState({ amet: amet });
        } else {
            amet.push(value);
            this.setState({ amet: amet });
        }
    }
    Login() {


        fetch('http://18.221.234.213/api/api_emailverify', {
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
                    if (this.state.loginType === 1) {
                        this.props.navigation.navigate('Address', { email: this.state.email });
                    }
                }
            })
            .catch((error) => {
                alert(error);
            });

    }

    bedrooms(bedrooms) {
        this.setState({ bedrooms: bedrooms })
        if (bedrooms == '')
            this.setState({ bedroomsValid: false })
        else
            this.setState({ bedroomsValid: true })
    }
    bathrooms(bathrooms) {
        this.setState({ bathrooms: bathrooms })
        if (bathrooms == '')
            this.setState({ bathroomsValid: false })
        else
            this.setState({ bathroomsValid: true })
    }
    size(size) {
        this.setState({ size: size })
        if (size == '')
            this.setState({ sizeValid: false })
        else
            this.setState({ sizeValid: true })
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