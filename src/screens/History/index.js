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
import moment from 'moment';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import Timeline from 'react-native-timeline-flatlist'
import HttpClient from '../../utils/HttpClient';

class History extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        const userInfo = this.props.userinfo;
        this.state = {
            userInfo: userInfo,
            // timelineData: [
            //     {
            //         time: "Tue, Dec 22 09:00 AM",
            //         title: "Deep Cleaning",
            //         icon: require('../../images/basicCleaning.png'),
            //         lineColor:"#009688",
            //         description:"My gradma might be sleeping on the patio, so don't be alarmed. call me if you have any problems with the old bat."
            //     },
            //     {
            //         time: "Tue, Dec 22 10:00 AM",
            //         title: "Deep Cleaning",
            //         icon: require('../../images/basicCleaning.png'),
            //         description:"My gradma might be sleeping on the patio, so don't be alarmed. call me if you have any problems with the old bat."
            //     },
            //     {
            //         time: "Tue, Dec 22 01:00 PM",
            //         title: "Basic Cleaning",
            //         icon: require('../../images/deepCleaning.png'),
            //         description:"My gradma might be sleeping on the patio, so don't be alarmed. call me if you have any problems with the old bat."
            //     },
            //     {
            //         time: "Tue, Dec 22 05:00 PM",
            //         title: "Deep Cleaning",
            //         icon: require('../../images/basicCleaning.png'),
            //         description:"My gradma might be sleeping on the patio, so don't be alarmed. call me if you have any problems with the old bat."
            //     }
            // ],
            bookings: [],
        }
    }

    componentDidMount() {
        this.getBookingHistory();
    }

    getBookingHistory = async () => {
        const { userinfo: user } = this.props;
        const { data } = await HttpClient.get('/customers/' + user.id + '/bookings');

        const bookings = data.map(booking => {
            return {
                title: booking?.package?.name,
                description: booking?.package?.description,
                icon: HttpClient.BASE_URL + '/storage/' + booking?.package?.image,
                time: moment(booking?.created_at, 'YYYY-MM-DD HH:mm:ss').format('Do MMM YYYY hh A'),
            }
        });

        this.setState({ bookings });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.serviceText}>History</Text>
                </View>
                
                <Timeline data={this.state.bookings} timeContainerStyle={{minWidth:72, maxWidth:90}} innerCircle={'icon'} />
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
export default connect(mapStateToProps, mapDispatchToProps)(History) 