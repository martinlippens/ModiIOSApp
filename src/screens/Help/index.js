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
class Help extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        const userInfo = this.props.userinfo;
        this.state = {
            userInfo: userInfo,
            name: '',
            email: '',
            comment: '',
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

        if(this.state.name === ''){
            alert('Please enter your full name.')
        }else if(this.email(this.state.email)){
            alert('Please enter correct email.')
        }else if (this.state.comment === ''){
            alert('Please enter comment.')
        }else{
            alert('Api hit')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{ paddingHorizontal: 24 }}>
                    {/* <KeyboardAvoidingView behavior="position" > */}
                    <Image source={require('../../images/black.png')} style={styles.logoimage} />

                    <View style={styles.buidings}>
                        <Image source={require('../../images/individual.png')} style={styles.buidingimage} />
                        <Text style={styles.buidingTitle}>Help</Text>
                    </View>
                    <Text style={styles.inputTitle}>{"NAME"}</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            onChangeText={(name) => this.setState({
                                name
                            })}
                            underlineColorAndroid='transparent'
                            value={this.state.name}
                            style={styles.textInput}
                            placeholder='Please enter your full name'
                        />
                    </View>
                    {/* Bottom Border View */}
                    <View style={{
                        width: '100%',
                        height: 0.5,
                        backgroundColor: '#825082',
                        marginTop: 5
                    }} />

                    <Text style={[styles.inputTitle, { marginTop: 30 }]}>{"EMAIL ADDRESS"}</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            onChangeText={(email) => this.setState({
                                email
                            })}
                            underlineColorAndroid='transparent'
                            value={this.state.email}
                            style={styles.textInput}
                            placeholder='Enter you email address'
                        />
                    </View>
                    {/* Bottom Border View */}
                    <View style={{
                        width: '100%',
                        height: 0.5,
                        backgroundColor: '#825082',
                        marginTop: 5
                    }} />

                    <Text style={[styles.inputTitle, { marginTop: 30 }]}>{this.state.password === "" ? "" : "COMMENT"}</Text>
                    <View style={{
                        backgroundColor: 'white',
                        height: 100,
                    }}>
                        <TextInput
                            onChangeText={(comment) => this.setState({
                                comment
                            })}
                            underlineColorAndroid='transparent'
                            value={this.state.comment}
                            style={{
                                width: width - 88,
                                padding: 10,
                                fontSize: 16,
                                height: 100,
                                textAlign: 'left',
                                textAlignVertical: 'top',
                                alignSelf: 'flex-start',
                            }}
                            multiline
                            placeholder='Comment...'
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
                               fontFamily:"Montserrat-Regular",
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
export default connect(mapStateToProps, mapDispatchToProps)(Help) 