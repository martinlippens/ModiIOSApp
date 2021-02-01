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

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
class deepcleaning extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        const userInfo = this.props.userinfo;
        this.state={
            userInfo:userInfo
        }
    }
    
    render(){
        return(
            <View style={styles.container}>

                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backIcon}>
                    <Image source={require('../../images/back.png')} style={styles.meunIcon} />
                </TouchableOpacity>
                    <View style={styles.content}>
                        <Image source={require('../../images/basicCleaning.png')} style={styles.cleanImag} />
                        <Text style={styles.serviceText}>Deep Cleaning</Text>
                        <View style={styles.helpView}>
                            <Text style={styles.helptitle}>2 hour service</Text>
                            <Text style={styles.costtitle}>2 credit</Text>
                        </View>
                        <View style={styles.helpTextView}>
                            <Text style={styles.helpText}>A deep cleaning will remove dust from your apartment that harms lungs and give you a cleaner evironment to live in with your love ones.</Text>
                        </View>

                        <Button text={'Schedule appointment'} onPress={() => this.Next()} />
                    </View>
            </View>            
            
        )
    }
    Next(){
        this.props.navigation.navigate('DateSet')
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
export default connect(mapStateToProps, mapDispatchToProps)(deepcleaning) 