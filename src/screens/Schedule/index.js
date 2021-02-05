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
import Timeline from 'react-native-timeline-flatlist'
class timeline extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        //const userInfo = this.props.userinfo;
        this.state = {
            //userInfo: userInfo,
            timelineData: [
                {
                    time: "Tue, Dec 22 09:00 AM",
                    title: "Deep Cleaning",
                    icon: require('../../images/basicCleaning.png'),
                    lineColor:"#009688",
                    description:"My gradma might be sleeping on the patio, so don't be alarmed. call me if you have any problems with the old bat."
                },
                {
                    time: "Tue, Dec 22 10:00 AM",
                    title: "Deep Cleaning",
                    icon: require('../../images/basicCleaning.png'),
                    description:"My gradma might be sleeping on the patio, so don't be alarmed. call me if you have any problems with the old bat."
                },
                {
                    time: "Tue, Dec 22 01:00 PM",
                    title: "Basic Cleaning",
                    icon: require('../../images/deepCleaning.png'),
                    description:"My gradma might be sleeping on the patio, so don't be alarmed. call me if you have any problems with the old bat."
                },
                {
                    time: "Tue, Dec 22 05:00 PM",
                    title: "Deep Cleaning",
                    icon: require('../../images/basicCleaning.png'),
                    description:"My gradma might be sleeping on the patio, so don't be alarmed. call me if you have any problems with the old bat."
                }
            ],
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.serviceText}>Schedule</Text>
                </View>
                
                <Timeline data={this.state.timelineData} timeContainerStyle={{minWidth:72, maxWidth:90}} innerCircle={'icon'} />
                </ScrollView>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backIcon}>
                    <Image source={require('../../images/back.png')} style={styles.meunIcon} />
                </TouchableOpacity>
            </View>
            
        )
    }

}


const mapStateToProps = (state) => {
    return {
        //userinfo: state.userinfo.user
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
export default connect(mapStateToProps, mapDispatchToProps)(timeline) 