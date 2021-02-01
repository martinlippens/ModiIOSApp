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


class Home extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = {
            SetOption: null
        }
    }
    render() {
        //const { goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image source={require('../../images/black.png')} style={styles.logoimage} />
                <View style={styles.serviceView}>
                    <Text style={styles.HelpText}>Select your orem ipsum dolor:</Text>
                    <View style={styles.cleanTypeView}>
                        <TouchableOpacity onPress={() => this.service(1)} style={this.state.SetOption==1?styles.ActivebtnT:styles.btnT}>
                            <View style={styles.btnTypeView}>
                                <Image source={require('../../images/individual.png')} style={styles.cleanImag} />
                                <Text style={styles.typeText}>Individual</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.service(2)} style={this.state.SetOption==2?styles.ActivebtnT:styles.btnT}>
                            <View style={styles.btnTypeView}>
                                <Image source={require('../../images/complex.png')} style={styles.cleanImag} />
                                <Text style={styles.typeText}>Complex</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                    {
                        this.state.SetOption===1?
                            <View>
                                <Text style={styles.serviceText}>Lorem ipsum dolor. sit amet, consectetur adipiscing elit lorem ipsum dolor.</Text>
                                <Button text={'Continue'} style={{ marginTop: 38 }} onPress={() => this.goLogin()} />
                            </View>
                            : null
                    }
                    {
                        this.state.SetOption===2?
                            <View>
                                <Text style={styles.serviceText}>The apartment complex will require your login information to verify lorem ipsum dolor</Text>
                                <Button text={'Continue'} style={{ marginTop: 38 }} onPress={() => this.goLogin()} />
                            </View>
                            : null
                    }

                </View>
            </View>
        )
    }
    service(id) {
        if (id === 1) {
            this.setState({ SetOption: 1 })
        } else {
            this.setState({ SetOption: 2 })
        }

    }
    goLogin(){
        if(this.state.SetOption==1)
            this.props.LoginTypeStore(1);
        else
            this.props.LoginTypeStore(2);            
        

        this.props.navigation.navigate('Login')
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
        },
        LoginTypeStore: (data) => {
            dispatch({
                type: 'LoginType_store',
                value: data
            })
        }
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home) 