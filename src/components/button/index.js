import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
export default class Button extends Component {

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <LinearGradient
                    colors={['#524552', '#825082']}
                    start={{ x: 0.0, y: 0.5 }}
                    end={{ x: 1, y: 0.8 }}
                    style={[styles.container, this.props.style]}
                >
                    <Text style={styles.buttonText}>{this.props.text}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
}