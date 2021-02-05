import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  ScrollView,
  InputAccessoryView,
  ActivityIndicator,
  Keyboard
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import axios from 'axios';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import flagPinkImg from '../../images/pin.png';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image'

const stylesY = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
  },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
});

const renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationStyle}>
        <Text style={{ color: 'red' }}>
          <Text style={styles.paginationText}>{index + 1}</Text>/{total}
        </Text>
      </View>
    )
  }

export default class ZipCode extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        this.state={
            zipcode: '',            
            zipcodeValid: true,
            validStart: false,            
            loading: false,
            select_photo:null,
            markers:null,
            region: {
                latitude: 34.0399963,
                longitude: -118.255141,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            },
        }
    }
    // handleSwipeIndexChange(){
    //     Swiper.prototype.componentWillUpdate = (nextProps, nextState) => {
    //         var key = nextState.index;
    //         var newregion = {
    //                 latitude: (this.state.markers[key].lat-0.001),
    //                 longitude: (this.state.markers[key].lon),
    //                 latitudeDelta: 0.005,
    //                 longitudeDelta: 0.0021,
    //             }
    //         this.setState({region:newregion})
    //         alert("123");
    //     }
    // }

    onIndexChanged(index){
        console.log('Swiper Index: ', index);
        var key = index;
            var newregion = {
                    latitude: (this.state.markers[key].lat-0.001),
                    longitude: (this.state.markers[key].lon),
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.0021,
                }
            this.setState({region:newregion,select_photo:null})
    }
    componentDidMount(){

    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.Zipeheader}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.backIcon}>
                        <Icon name='ios-arrow-back' size={40} color='#212123'/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Location / Complex</Text>
                    
                </View>
                <View style={styles.helpTitle}>
                        <Text style={styles.helpText}>Where do you live?</Text>
                </View>               
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 30}}>

                    <View style ={styles.mapViews}>
                            <MapView
                            provider={PROVIDER_GOOGLE}
                            style={stylesY.map}
                            region={this.state.region}
                            >
                                {
                                    this.state.markers?
                                    this.state.markers.map((value, key) => (
                                        
                                        <MapView.Marker
                                        coordinate={{latitude:value.lat, longitude:value.lon}}
                                        image={flagPinkImg}
                                        //title={value.disply_name}
                                        //description={value.street_address}
                                        onPress={() => { this.onMarkerPress(key)}}
                                        >
                                                {/* <MapView.Callout>
                                                <View>
                                                    <FastImage
                                                        source={{
                                                            uri: value.photo,
                                                            priority: FastImage.priority.normal
                                                            }}
                                                        style={styles.popImage}
                                                        resizeMode={FastImage.resizeMode.contain}
                                                    />
                                                    <Text style={styles.bubbleTitle}>{value.display_name}</Text>
                                                    <Text style={styles.bubbleStreet}>{value.street_address}</Text> */}
                                                        {/* <View style = {styles.btnBedRow}>
                                                            <TouchableHighlight style={styles.btnBedRoom} onPress= {()=>console.log("Clicked")} >
                                                                <View>
                                                                <Text style={styles.BedRoomText}>STUDIO</Text>
                                                                <Text style={styles.BedRoomTextCost}>$150</Text>
                                                                </View>
                                                            </TouchableHighlight>
                                                            <TouchableHighlight style={styles.btnBedRoom} onPress= {()=>this.markerClick()} > 
                                                                <View>
                                                                <Text style={styles.BedRoomText}>1 BEDROOM</Text>
                                                                <Text style={styles.BedRoomTextCost}>$250</Text>
                                                                </View>
                                                            </TouchableHighlight>
                                                            <TouchableHighlight style={styles.btnBedRoom} onPress= {()=>this.markerClick()} >
                                                                <View>
                                                                <Text style={styles.BedRoomText}>2 BEDROOM</Text>
                                                                <Text style={styles.BedRoomTextCost}>$500</Text>
                                                                </View>
                                                            </TouchableHighlight>
                                                        </View>
                                                    
                                                    <Button text={'BOOKING'} style={styles.btnBooking} onPress={()=>this.Signup()}/> */}
                                                {/* </View>
                                                </MapView.Callout> */}
                                        </MapView.Marker>
                                    ))
                                    :null
                                }
                            </MapView>
                    </View> 
                    <View style={styles.buttonContainer}>
                        <View style={[styles.zipeinputView,{marginVertical:20,flexDirection:'row',alignItems:'center'}]}>
                            <Icon name='ios-pin' size={20} color='rgba(0,0,0,0.3)' style={{marginHorizontal:15,marginBottom:-7}} />
                            <TextInput 
                                placeholder='ZIP Code'
                                onChangeText={(name)=>this.firstname(name)}
                                underlineColorAndroid = 'transparent'
                                value = {this.state.zipcode}
                                style = {styles.zipcodeInput}
                                keyboardType='numeric'
                            />
                        </View>
                    </View>                               
                    {
                            this.state.markers?
                            <View style={styles.WiperView}>
                                <Swiper style={styles.wrapper} height={200}
                                renderPagination={renderPagination}
                                onIndexChanged={this.onIndexChanged.bind(this)}
                                ref={component => this.swiper = component}
                                loop={false}
                                showsButtons>
                                {
                                    this.state.markers.map((value, key) => (
                                        
                                        <TouchableOpacity style={this.state.select_photo===key?styles.Activslide:styles.slide} onPress= {()=>this.photoSel(key)}>
                                            <FastImage resizeMode='stretch' style={styles.image} source={{uri: value.photo}} />
                                            <Text style={styles.AptTilte}>{value.display_name}</Text>
                                            <Text style={styles.AptAddress}>{value.street_address}</Text>
                                        </TouchableOpacity>
                                        
                                    ))
                                }
                                </Swiper>
                                {
                                    this.state.select_photo!=null?
                                    <Button text={'Next'} onPress={()=>this.submitBtn()}/>
                                    :null
                                }
                                
                            </View>
                            :null
                    }
                    
                </ScrollView>
                
            </View>
        )
    }
   
    firstname(name){
        let self = this
        
        if(name.length>=6){
            this.setState({zipcode: ''})
            return
        }
        if(name.length!==5 ) return
       
        Keyboard.dismiss()
       this.setState({zipcode: name})
       
        fetch('http://52.14.114.118/api/api_getzipcode', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        zipcode_valid:name
                    }),
                })
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.error){
                    this.setState({login_failed: true})
                    return;
                }
                if(responseJson.data==="false"){
                    alert("Please enter correct zipcode.");
                }
                else{
                    this.setState({markers:responseJson.data})

                    var newregion = {
                        latitude: (this.state.markers[0].lat),
                        longitude: (this.state.markers[0].lon),
                        latitudeDelta: 0.025,
                        longitudeDelta: 0.0221,
                    }
                    this.setState({region:newregion})
                }
                    console.log(responseJson) 

            })
            .catch((error) => {
                alert(error);
            });
        
    }
    onMarkerPress(key){
        console.log(this.state.markers[key].photo.replace('t_fullsize','t_r_thumb_msg'));
        var newregion = {
            latitude: (this.state.markers[key].lat-0.001),
            longitude: (this.state.markers[key].lon),
            latitudeDelta: 0.005,
            longitudeDelta: 0.0021,
        }
        this.setState({region:newregion,select_photo:null})
        
        const currentIndex = this.swiper.state.index;
        const offset = key - currentIndex;
        this.swiper.scrollBy(offset);
    }
   
    photoSel(key){
        this.setState({select_photo:key})
        
    }
    testswiper(){        
 
    }
    submitBtn(){
        this.props.navigation.navigate('Address')        
    }
}