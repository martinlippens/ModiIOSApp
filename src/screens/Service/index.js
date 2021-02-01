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
import Button from '../../components/button'


class Service extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        const userInfo = this.props.userinfo;
        this.state = {
            userInfo: userInfo
        }
    }
    render() {
        //const { goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backIcon}>
                    <Image source={require('../../images/back.png')} style={styles.meunIcon} />
                </TouchableOpacity>
                <View style={styles.serviceView}>
                    <Text style={styles.serviceText}>What type of cleaning do you want?</Text>
                    <Text style={styles.HelpText}>You have 2 credit left this month. </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.HelpText}>You can always </Text>
                        <TouchableOpacity><Text style={styles.addBtn}> add more.</Text></TouchableOpacity>                    
                    </View>
                    

                    <View style={styles.cleanTypeView}>
                        <TouchableOpacity onPress={() => this.service(1)} style={styles.btnT}>
                            <View style={styles.btnTypeView}>
                                <Image source={require('../../images/deepCleaningPale.png')} style={styles.cleanImag} />
                                <Text style={styles.typeText}>Basic Cleaning</Text>
                                <Text style={styles.costText}>1 credit</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.service(2)} style={styles.btnT}>
                            <View style={styles.btnTypeView}>
                                <Image source={require('../../images/basicCleaningPale.png')} style={styles.cleanImag} />
                                <Text style={styles.typeText}>Deep Cleaning</Text>
                                <Text style={styles.costText}>2 credit</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    service(id) {
        if (id === 1) {
            let data = {
                CleanType: "Basic Cleaning"
            }
            this.props.BookingDataStore(data)
            this.props.navigation.navigate('BasicDetail')
        } else {
            let data = {
                CleanType: "Deep Cleaning"
            }
            this.props.BookingDataStore(data)
            this.props.navigation.navigate('DeepDetail')
        }

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
export default connect(mapStateToProps, mapDispatchToProps)(Service) 