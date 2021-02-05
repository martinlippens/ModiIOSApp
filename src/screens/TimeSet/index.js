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
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button'


class TimeSet extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        const { bookingdata } = this.props.userinfo;
        const { user } = this.props.userinfo;
        console.log(bookingdata)
        this.state={
           bookingdata:bookingdata,
           userInfo:user
        }
    }
    
    render(){
        const {goBack} = this.props.navigation;
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>goBack()} style={styles.backIcon}>
                        <Icon name='ios-arrow-back' size={40} color='#FFF'/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Scheduling</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Setting')} style={styles.CloseIcon}>
                        <Icon name='md-close' size={35} color='#FFF'/>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.servicetitle}>
                    <View style={styles.BarView}>
                    <Text style={styles.serviceText}>{moment(this.state.bookingdata.DateSet, "X").format("dddd, MMMM DD, YYYY")}</Text>
                    </View>
                </View>


                    <View style={styles.typeContainer}>
                        <Text style={styles.HelpText}>Time Of Cleaning</Text>
                        <TouchableOpacity onPress={()=>this.TimeSet("Morning")}>
                            <View style={styles.cleaningTypeView_active}>
                                <Text style={styles.typeText}>Morning</Text>
                                <Icon name='ios-arrow-forward' size={30} color='#212123'/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.TimeSet("Late morning")}>
                            <View style={styles.cleaningTypeView_active}>
                                <Text style={styles.typeText}>Late morning</Text>
                                <Icon name='ios-arrow-forward' size={30} color='#212123'/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.TimeSet("Afternoon")}>
                            <View style={styles.cleaningTypeView_active}>
                                <Text style={styles.typeText}>Afternoon</Text>
                                <Icon name='ios-arrow-forward' size={30} color='#212123'/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.TimeSet("Late afternoon")}>
                            <View style={styles.cleaningTypeView_active}>
                                <Text style={styles.typeText}>Late afternoon</Text>
                                <Icon name='ios-arrow-forward' size={30} color='#212123'/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* <Button text={'CONTINUE'} style={{marginVertical:15}} onPress={()=>this.Next()}/> */}
                
            </View>
        )
    }

    TimeSet(val){
        let data = this.state.bookingdata
        data.TimeSet = val
        this.props.BookingDataStore(data)
console.log(this.state.userInfo.userInfo.u_id)

        fetch('http://52.14.114.118/api/api_bookingstore', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.state.userInfo.token}`,
            },
            body: JSON.stringify({
                userID:this.state.userInfo.userInfo.u_id,
                CleanType: data.CleanType,
                Extra: JSON.stringify(data.Extra),
                DateSet:data.DateSet,
                TimeSet:data.TimeSet
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if(responseJson.flag === "success"){
                    data.ID=responseJson.BookingID
                    this.props.BookingInfoStore(data);
                    this.props.navigation.navigate('Success');
                }
            })
            .catch((error) => {
                alert(error);
            });
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
        BookingDataStore: (data) => {
            dispatch({
                type: 'BookingData_store',
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
export default connect(mapStateToProps, mapDispatchToProps)(TimeSet) 