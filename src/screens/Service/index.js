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
import HttpClient from '../../utils/HttpClient';


class Service extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        const userInfo = this.props.userinfo;
        this.state = {
            isLoading: true,
            userInfo: userInfo,
            services: [],
        }
    }

    componentDidMount() {
        this.getSevicesWithAllPackages();
    }

    async getSevicesWithAllPackages() {
        const { data } = await HttpClient.get('/services');
        console.log(data);

        this.setState({
            isLoading: false,
            services: data,
        });
    }

    render() {
        //const { goBack } = this.props.navigation;
        const { services } = this.state;

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backIcon}>
                    <Image source={require('../../images/back.png')} style={styles.meunIcon} />
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={styles.serviceView}>
                        <Text style={styles.serviceText}>What type of service do you want?</Text>
                        {/* <Text style={styles.HelpText}>You have 2 credit left this month. </Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.HelpText}>You can always </Text>
                            <TouchableOpacity><Text style={styles.addBtn}> add more.</Text></TouchableOpacity>                    
                        </View> */}

                        {services.map((service) => (
                            <View key={service.id} style={{marginBottom: 50}}>
                                <Text style={styles.serviceText}>{service.name}</Text>
                                <View style={[styles.cleanTypeView, { flexWrap: 'wrap', }]}>
                                    {service?.packages?.map((_package) => (
                                        <TouchableOpacity key={_package.id} onPress={() => this.service(_package)} style={styles.btnT}>
                                            <View style={[styles.btnTypeView, { marginBottom: 20 }]}>
                                                <Image source={{ uri: HttpClient.BASE_URL + '/storage/' + _package?.image }} style={styles.cleanImag} />
                                                <Text style={styles.typeText}>{_package?.name}</Text>
                                                <Text style={styles.costText}>${_package?.price}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        ))}
                        

                        {/* <View style={styles.cleanTypeView}>
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
                        </View> */}
                    </View>
                </ScrollView>
            </View>
        )
    }
    service(_package) {
        this.props.navigation.navigate('ServiceDetails', { _package: _package });

        // if (id === 1) {
        //     let data = {
        //         CleanType: "Basic Cleaning"
        //     }
        //     this.props.BookingDataStore(data)
        //     this.props.navigation.navigate('BasicDetail')
        // } else {
        //     let data = {
        //         CleanType: "Deep Cleaning"
        //     }
        //     this.props.BookingDataStore(data)
        //     this.props.navigation.navigate('DeepDetail')
        // }

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