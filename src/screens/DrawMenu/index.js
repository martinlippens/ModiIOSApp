import React, {Component} from 'react';
import { StyleSheet,Text,Image,View,ScrollView,TouchableOpacity,Dimensions,Switch,Alert,
  TouchableHighlight,FlatList,Modal,AsyncStorage,Platform} from 'react-native';
import { DrawerActions,NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

export default class Drawermenu extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // navigateToScreen = (route) => () => {
  //   const navigateAction = NavigationActions.navigate({
  //     routeName: route
  //   });
  //   this.props.navigation.dispatch(DrawerActions.closeDrawer());
  //   this.props.navigation.dispatch(navigateAction);
  // }

  render() {
    return(
        <View style={styles.linearGradient}>
            <View style={{flex:1, justifyContent:'center', alignItems:'flex-start'}} >
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginLeft:40}} >
                {/* <Image source={require('../src/avatar.jpg')} style={{height:60, width:60,borderRadius:80,resizeMode:'contain'}} /> */}
                <Text style={{marginLeft:10,color:'#fff',fontSize:16, fontWeight:'bold'}} >John Doe</Text>
              </View>
            </View>
            <View style={{flex:3.5}} >
              <TouchableOpacity style={{paddingHorizontal:10,paddingVertical:10,borderColor:'#61A282', borderTopWidth:0.5, borderBottomWidth:0.5, flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}
                onPress={() => this.props.navigation.navigate("QuizAlertScreen")}>
                {/* <Icon name="globe" color="#fff" size={19} family="Entypo" /> */}
                {/* <Image source={require('../src/tour.png')} style={{height:20,width:20,resizeMode:'contain'}} /> */}
                <Text style={{marginLeft:10,color:'#fff', fontSize:15}}>Tour</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate("SettingScreen")}
                style={{paddingHorizontal:10,paddingVertical:10,borderColor:'#61A282', borderTopWidth:0.5, borderBottomWidth:0.5, flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
                <Icon name="settings" color="#fff" size={20} family="SimpleLineIcons" />
                <Text style={{marginLeft:10,color:'#fff', fontSize:15}}>Settings</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{paddingHorizontal:10,paddingVertical:10,borderColor:'#61A282', borderTopWidth:0.5, borderBottomWidth:0.5, flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
                <Icon name="ios-information-circle" color="#fff" size={20} family="Ionicons" />
                <Text style={{marginLeft:10,color:'#fff', fontSize:15}}>About</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{paddingHorizontal:10,paddingVertical:10,borderColor:'#61A282', borderTopWidth:0.5, borderBottomWidth:0.5, flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
                <Icon name="lock-open" color="#fff" size={20} family="MaterialIcons" />
                <Text style={{marginLeft:10,color:'#fff', fontSize:15}}>Privacy Policy</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{paddingHorizontal:10,paddingVertical:10,borderColor:'#61A282', borderTopWidth:0.5, borderBottomWidth:0.5, flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
                <Icon name="ios-list" color="#fff" size={24} family="Ionicons" />
                <Text style={{marginLeft:10,color:'#fff', fontSize:15}}>Terms & Conditions</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() =>{}}
                style={{paddingHorizontal:10,paddingVertical:10,borderColor:'#61A282', borderTopWidth:0.5, borderBottomWidth:0.5, flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
                <Icon name="headset-mic" color="#fff" size={20} family="MaterialIcons" />
                <Text style={{marginLeft:10,color:'#fff', fontSize:15}}>Support</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{paddingHorizontal:10,paddingVertical:10,borderColor:'#61A282', borderTopWidth:0.5, borderBottomWidth:0.5, flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
                <Icon name="star-o" color="#fff" size={20} family="FontAwesome" />
                <Text style={{marginLeft:10,color:'#fff', fontSize:15}}>Rate Us</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{paddingHorizontal:10,paddingVertical:10,borderColor:'#61A282', borderTopWidth:0.5, borderBottomWidth:0.5, flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
                <View style={{transform: [{ rotate: '90deg'}]}} >
                  <Icon name="upload" color="#fff" size={20} family="Feather" />
                </View>
                <Text style={{marginLeft:10,color:'#fff', fontSize:15}}>Logout</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
    },
    container:{
        flex:1,
    },
    section1: {
        flex: 0.35,
        backgroundColor: '#72c6a4',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    section2: {
        flex: 0.75,
    },
    part01: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagestyle: {
        height: 100,
        width: 100,
        borderRadius: 50,
        resizeMode:'cover'
    },
    partrow: {
        alignItems: 'center',
        paddingVertical: Platform.OS === 'ios' ? 17 : 7,
    },
    scroll: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical:10
    },
});
