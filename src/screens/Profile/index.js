import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Dimensions,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Modal
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
let { width, height } = Dimensions.get('window')
class Profile extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        const userInfo = this.props.userinfo;
        this.state = {
            userInfo: userInfo,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            aptNumber: '',
            complexName: '',
        }
    }

    email(email) {
        this.setState({ email: email })
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            return false
        } else {
            return true
        }
    }

    callSubmitApi = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{ paddingHorizontal: 24 }}>
                    {/* <KeyboardAvoidingView behavior="position" > */}
                    <Image source={require('../../images/black.png')} style={styles.logoimage} />

                    <View style={styles.buidings}>
                        <Image source={require('../../images/individual.png')} style={styles.buidingimage} />
                        <Text style={styles.buidingTitle}>Profile</Text>
                    </View>
                    {/* First name */}
                    <Text style={styles.inputTitle}>{"FIRST NAME"}</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            onChangeText={(firstName) => this.setState({
                                firstName
                            })}
                            underlineColorAndroid='transparent'
                            value={this.state.firstName}
                            style={styles.textInput}
                            placeholder='First name'
                        />
                    </View>
                    {/* Bottom Border View */}
                    <View style={{
                        width: '100%',
                        height: 0.5,
                        backgroundColor: '#825082',
                        marginTop: 5
                    }} />
                    {/* Last name */}
                    <Text style={[styles.inputTitle,{marginTop: 30}]}>{"LAST NAME"}</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            onChangeText={(lastName) => this.setState({
                                lastName
                            })}
                            underlineColorAndroid='transparent'
                            value={this.state.lastName}
                            style={styles.textInput}
                            placeholder='Last name'
                        />
                    </View>
                    {/* Bottom Border View */}
                    <View style={{
                        width: '100%',
                        height: 0.5,
                        backgroundColor: '#825082',
                        marginTop: 5
                    }} />
                    {/* Email */}
                    <Text style={[styles.inputTitle, { marginTop: 30 }]}>{"EMAIL ADDRESS"}</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            onChangeText={(email) => this.setState({
                                email
                            })}
                            underlineColorAndroid='transparent'
                            value={this.state.email}
                            style={styles.textInput}
                            placeholder='Email Address'
                        />
                    </View>
                    {/* Bottom Border View */}
                    <View style={{
                        width: '100%',
                        height: 0.5,
                        backgroundColor: '#825082',
                        marginTop: 5
                    }} />

                    {/* Phone number */}
                    <Text style={[styles.inputTitle, { marginTop: 30 }]}>{"PHONE NUMBER"}</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            onChangeText={(phone) => this.setState({
                                phone
                            })}
                            keyboardType={'phone-pad'}
                            underlineColorAndroid='transparent'
                            value={this.state.phone}
                            style={styles.textInput}
                            placeholder='Phone Number'
                        />
                    </View>
                    {/* Bottom Border View */}
                    <View style={{
                        width: '100%',
                        height: 0.5,
                        backgroundColor: '#825082',
                        marginTop: 5
                    }} />

                    {/* Apt Number */}
                    <Text style={[styles.inputTitle, { marginTop: 30 }]}>{"APT NUMBER"}</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            onChangeText={(aptNumber) => this.setState({
                                aptNumber
                            })}
                            keyboardType={'phone-pad'}
                            underlineColorAndroid='transparent'
                            value={this.state.aptNumber}
                            style={styles.textInput}
                            placeholder='Apt Number'
                        />
                    </View>
                    {/* Bottom Border View */}
                    <View style={{
                        width: '100%',
                        height: 0.5,
                        backgroundColor: '#825082',
                        marginTop: 5
                    }} />

                    {/* Complex Name */}
                    <Text style={[styles.inputTitle, { marginTop: 30 }]}>{"COMPLEX NAME"}</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            onChangeText={(complexName) => this.setState({
                                complexName
                            })}
                            keyboardType={'phone-pad'}
                            underlineColorAndroid='transparent'
                            value={this.state.complexName}
                            style={styles.textInput}
                            placeholder='Complex Name'
                        />
                    </View>
                    {/* Bottom Border View */}
                    <View style={{
                        width: '100%',
                        height: 0.5,
                        backgroundColor: '#825082',
                        marginTop: 5
                    }} />

                    <TouchableOpacity
                        onPress={() => {
                            this.callSubmitApi()
                        }}>
                        <LinearGradient
                            colors={['#524552', '#825082']}
                            start={{ x: 0.0, y: 0.5 }}
                            end={{ x: 1, y: 0.8 }}
                            style={{
                                width: width - 48,
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center',
                                paddingVertical: 16,
                                marginTop: 50
                            }}
                        >
                            <Text style={{
                                color: '#FFF',
                                fontFamily: "Montserrat-Regular",
                                fontSize: 16,
                                fontWeight: '400',
                            }}>{'Submit'}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </ScrollView>
                {/* Back button */}
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={[styles.backIcon, { marginTop: 15 }]}>
                    <Image source={require('../../images/back.png')} style={styles.meunIcon} />
                </TouchableOpacity>
            </View>

        )
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile) 