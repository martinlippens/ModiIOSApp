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
const data = [
    {
        type: 1,
        title: 'Oven',
    },
    {
        type: 2,
        title: 'Interior windows',
    },
    {
        type: 3,
        title: 'Refrigerator',
    },
    {
        type: 4,
        title: 'Pantry',
    }
]
class Extras extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        const { bookingdata } = this.props.userinfo;
        this.state={
            extra: [],
            bookingdata:bookingdata
        }
    }
    selectExtra(type){
        var extra_count = 4;
        extras=this.state.extra;
        var index = extras.indexOf(type);
        if(index>-1){
            extras.splice(index,1);
            this.setState({extra:extras});
            return
        }
        if( this.state.extra.length===extra_count) return
        
        extras.push(type)
        this.setState({extra:extras});
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.backIcon}>
                        <Icon name='ios-arrow-back' size={40} color='#FFF'/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Deep cleaning</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Setting')} style={styles.CloseIcon}>
                        <Icon name='md-close' size={35} color='#FFF'/>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.servicetitle}>
                    <Text style={styles.serviceText}>You've chosen a Late Afternoon Deep Cleaning next on Wed, Sept 26th.</Text>
                </View> */}
                <Text style={styles.serviceText}>Specifically, what would you like deep cleaned?</Text>
                
                
                    <View style={styles.typeContainer}>
                        {
                            data.map(d=>{
                                return(
                                     <TouchableOpacity onPress={()=>this.selectExtra(d.type)}>
                                        <View style={styles.cleaningTypeView}>
                                            {
                                               this.state.extra.indexOf(d.type)>-1?
                                               <Icon name='ios-checkbox-outline' size={20} color='#212123'/>
                                               :<Icon name='ios-square-outline' size={20} color='#212123'/>
                                            }
                                            <Text style={styles.typeText}>{d.title}</Text>
                                        </View>
                                    </TouchableOpacity>   
                                )
                            })
                        }
                    </View> 
                    <View style={styles.BarView}></View>
                    <Text style={styles.helpText}>Check what applies to you below:</Text> 
                    <TouchableOpacity onPress={()=>this.selectExtra(5)}>
                        <View style={styles.cleaningTypeView_active}>
                            {
                                this.state.extra.indexOf(5)>-1?
                                <Icon name='ios-checkbox-outline' size={25} color='#212123'/>
                                :<Icon name='ios-square-outline' size={25} color='#212123'/>
                            }
                            <Text style={styles.typeText}>Do you have pets</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.selectExtra(6)}>
                        <View style={styles.cleaningTypeView_active}>
                            {
                                this.state.extra.indexOf(6)>-1?
                                <Icon name='ios-checkbox-outline' size={25} color='#212123'/>
                                :<Icon name='ios-square-outline' size={25} color='#212123'/>
                            }
                            <Text style={styles.typeText}>Does your appartment have carpet?</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.selectExtra(7)}>
                        <View style={styles.cleaningTypeView_active}>
                            {
                                this.state.extra.indexOf(7)>-1?
                                <Icon name='ios-checkbox-outline' size={25} color='#212123'/>
                                :<Icon name='ios-square-outline' size={25} color='#212123'/>
                            }
                            <Text style={styles.typeText}>Do you need your guest room sheets changed?</Text>
                        </View>
                    </TouchableOpacity>  


                <View style={styles.BtnView}>
                    <Button text={'Next'} onPress={()=>this.Next()}/>
                </View>
                
            </View>
        )
    }
    Next(){
        if( this.state.extra.length===0){
            alert("please select options")
            return
        }
         let data = this.state.bookingdata
         data.Extra = this.state.extra
         this.props.BookingDataStore(data)
         this.props.navigation.navigate('DateSet')
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Extras) 