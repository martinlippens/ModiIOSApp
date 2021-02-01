import React, { Component } from 'react';
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
export default class Schedule extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backIcon}>
                    <Image source={require('../../images/back.png')} style={styles.meunIcon} />
                </TouchableOpacity>
                    <View style={styles.content}>
                        <Image source={require('../../images/deepCleaning.png')} style={styles.cleanImag} />
                        <Text style={styles.serviceText}>Basic Cleaning</Text>
                        <View style={styles.helpView}>
                            <Text style={styles.helptitle}>1 hour service</Text>
                            <Text style={styles.costtitle}>1 credit</Text>
                        </View>
                        <View style={styles.helpTextView}>
                            <Text style={styles.helpText}>The perfect option to keep your living space in tip-top shape. You will return to an apartment that sparkles and shines and will put you in a cheerful mood, no matter what your day hands you.</Text>
                        </View>

                        <Button text={'Schedule appointment'} onPress={() => this.Next()} />
                    </View>
            </View>
        )
    }
    Next() {
        this.props.navigation.navigate('DateSet')
    }

}