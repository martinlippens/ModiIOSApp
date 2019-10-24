import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import Home from '../Home';
import Login from '../Login';
import Setting from '../Setting';
export default class AppScreen extends Component {
    render(){
        const Drawer = createDrawerNavigator({
            Home: { screen: Home},
            Login: {screen: Login},
            Setting: {screen: Setting}
            },
            {
                initialRouteName: 'Setting'
            }
        )
        return (<Drawer />)
    }
}