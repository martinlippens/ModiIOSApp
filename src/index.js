import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import { fadeIn, fromRight } from 'react-navigation-transitions'

import Home from './screens/Home';
import Login from './screens/Login';
import Setpass from './screens/Login/setpass';
import Password from './screens/Login/password';
import Setting from './screens/Setting';
import Upcoming from './screens/Upcoming';
import Service from './screens/Service';
import Extras from './screens/Extras';
import DeepDetail from './screens/Extras/DeepDetail';
import BasicDetail from './screens/Extras/BasicDetail';
import DateSet from './screens/DateSet';
import TimeSet from './screens/TimeSet';
import Address from './screens/Address';
import AptDetails from './screens/Address/aptDetails';
import Start from './screens/Start';
import Drawermenu from './screens/DrawMenu'



import Signup from './screens/Signup';
import Forgot from './screens/Forgot';

import Schedule from './screens/Schedule';
import Special from './screens/Special';
import Success from './screens/Success';
import AddressList from './screens/AddressList';
import ZipCode from './screens/Signup/ZipCode';
import Payment from './screens/Payment';
import ServiceForLogin from './screens/Service/serviceforLogin';
import ExtraForLogin from './screens/Extras/ExtrasForLogin';
import ScheduleForLogin from './screens/Schedule/ScheduleforLogin';
import PaymentForLogin from './screens/Payment/PaymentforLogin';
import CleanerSignIn from './screens/Login/cleanerSignIn';
import SelectCleaner from './screens/SelectCleaner';
import SelectCleanerForLogin from './screens/SelectCleaner/SelectCleanerForLogin';
import Feedback from './screens/Setting/Feedback'
export default class App extends Component {
    render(){
       
        return (<AppScreen />)
    }
}
const handleCustomTransition = ({ scenes }) => {
    const nextScene = scenes[scenes.length-1];
    if(nextScene.route.routeName === 'Start' || nextScene.route.routeName === 'Login')
        return fadeIn();
    else
        return  fromRight();
}
const Drawer = createDrawerNavigator({
    Setting: {screen: Setting},

},{
drawerPosition: 'right',
useNativeAnimations : false
})
const AppScreen = createStackNavigator({
        Home: { screen: Home},
        Login: {
            screen: Login,
            navigationOptions:{
                gesturesEnabled:false
            }
        },
        Setpass: {screen: Setpass},
        Password: {screen: Password},
        Setting: {screen: Setting},
        Upcoming: {screen: Upcoming},
        Service: {screen: Service},
        Extras: {screen: Extras},
        DeepDetail: {screen: DeepDetail},
        DateSet: {screen: DateSet},
        TimeSet: {screen: TimeSet},
        BasicDetail : { screen: BasicDetail},
        Address: {screen: Address},
        AptDetails :{screen : AptDetails},
        Start :{
            screen : Start,
            navigationOptions:{
                gesturesEnabled:false
            }
        },


        Signup: {screen: Signup},
        Forgot: {screen: Forgot},
        
        
        Schedule: {screen: Schedule},
        
        AddressList: {screen: AddressList},
        ZipCode: {screen: ZipCode},
        Special: {screen: Special},
        Success: {screen: Success},
        Payment: {screen: Payment},      
        ServiceForLogin: {screen: ServiceForLogin},
        ScheduleForLogin: {screen: ScheduleForLogin},
        ExtrasForLogin: {screen: ExtraForLogin},
        PaymentForLogin: {screen: PaymentForLogin},
        CleanerSignIn: {screen: CleanerSignIn},
        SelectCleaner: {screen: SelectCleaner},
        SelectCleanerForLogin: {screen: SelectCleanerForLogin},
        Feedback: {screen: Feedback}
    },
    {
               //drawerBackgroundColor :'black',
        initialRouteName: 'Start',
        transitionConfig:(nav) => handleCustomTransition(nav)
        
    }

)
