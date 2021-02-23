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
import styles from './Extras/styles.js';
import Button from '../components/button';
import HttpClient from '../utils/HttpClient.js';

export default class ServiceDetails extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = {
        }
    }

  render() {
    const { navigation: { state: { params: { _package } } } } = this.props;

    console.log(_package);

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backIcon}>
            <Image source={require('../images/back.png')} style={styles.meunIcon} />
        </TouchableOpacity>
        <View style={styles.content}>
            <Image source={{ uri: HttpClient.BASE_URL + '/storage/' + _package.image}} style={styles.cleanImag} />
          <Text style={styles.serviceText}>{ _package.name}</Text>
            <View style={styles.helpView}>
                <Text style={styles.helptitle}>1 hour service</Text>
            <Text style={styles.costtitle}>${_package.price}</Text>
            </View>
            <View style={styles.helpTextView}>
            <Text style={styles.helpText}>{_package.description}</Text>
            </View>

            <Button text={'Schedule appointment'} onPress={() => this.Next(_package)} />
        </View>
      </View>
    )
    }
    Next(_package) {
      this.props.navigation.navigate('DateSet', { _package });
    }

}