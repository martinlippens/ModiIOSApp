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
import Button from '../../components/button'
const data = [
    {
        type: 1,
        title: 'Clean inside cabinets'
    },
    {
        type: 2,
        title: 'Oven'
    },
    {
        type: 3,
        title: 'Fridge'
    },
    {
        type: 4,
        title: 'Interior Windows'
    },
    {
        type: 5,
        title: 'Laundry wash & dry'
    },
]
export default class Schedule extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: '',
            cleaningType: 2,
            howoften: 0,
            moreOptionModal: false,
            addone1:false,
            addone2:false,
            addone3:false,
            addone4:false,
            addone5:false,
            extra:[]
        }
    }
    componentWillMount(){
        const {loginData} = this.props.navigation.state.params;
        loginData.extra.forEach(e=>{
            if(e===1) this.setState({addone1: true})
            if(e===2) this.setState({addone2: true})
            if(e===3) this.setState({addone3: true})
            if(e===4) this.setState({addone4: true})
            if(e===5) this.setState({addone5: true})
        })
            // alert(loginData.cleaningType)
        this.setState({cleaningType: loginData.cleaningType, extra: loginData.extra})
    }
    selectExtra(type){
        let extraArray = [...this.state.extra];
        let index = extraArray.indexOf(type);
        if(this.state.cleaningType === 2){
            if(extraArray.length===2&& index>-1){
                if(type===1) this.setState({addone1: !this.state.addone1})
                if(type===2) this.setState({addone2: !this.state.addone2})
                if(type===3) this.setState({addone3: !this.state.addone3})
                if(type===4) this.setState({addone4: !this.state.addone4})
                if(type===5) this.setState({addone5: !this.state.addone5})
                extraArray.splice(index,1)
            }
            if(extraArray.length<2&&index<0){
                if(type===1) this.setState({addone1: !this.state.addone1})
                if(type===2) this.setState({addone2: !this.state.addone2})
                if(type===3) this.setState({addone3: !this.state.addone3})
                if(type===4) this.setState({addone4: !this.state.addone4})
                if(type===5) this.setState({addone5: !this.state.addone5})
                extraArray.push(type)
            }
            if(extraArray.length<2&& index>-1){
                if(type===1) this.setState({addone1: !this.state.addone1})
                if(type===2) this.setState({addone2: !this.state.addone2})
                if(type===3) this.setState({addone3: !this.state.addone3})
                if(type===4) this.setState({addone4: !this.state.addone4})
                if(type===5) this.setState({addone5: !this.state.addone5})
                extraArray.splice(index,1)
            }
            this.setState({extra: extraArray})
        }else{
            if(extraArray.length===4&& index>-1){
                if(type===1) this.setState({addone1: !this.state.addone1})
                if(type===2) this.setState({addone2: !this.state.addone2})
                if(type===3) this.setState({addone3: !this.state.addone3})
                if(type===4) this.setState({addone4: !this.state.addone4})
                if(type===5) this.setState({addone5: !this.state.addone5})
                extraArray.splice(index,1)
            }
            if(extraArray.length<4&&index<0){
                if(type===1) this.setState({addone1: !this.state.addone1})
                if(type===2) this.setState({addone2: !this.state.addone2})
                if(type===3) this.setState({addone3: !this.state.addone3})
                if(type===4) this.setState({addone4: !this.state.addone4})
                if(type===5) this.setState({addone5: !this.state.addone5})
                extraArray.push(type)
            }
            if(extraArray.length<4&& index>-1){
                if(type===1) this.setState({addone1: !this.state.addone1})
                if(type===2) this.setState({addone2: !this.state.addone2})
                if(type===3) this.setState({addone3: !this.state.addone3})
                if(type===4) this.setState({addone4: !this.state.addone4})
                if(type===5) this.setState({addone5: !this.state.addone5})
                extraArray.splice(index,1)
            }
            this.setState({extra: extraArray})
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.backIcon}>
                        <Icon name='ios-arrow-back' size={40} color='#212123'/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Extras</Text>
                </View>
                <View style={styles.servicetitle}>
                    <Text style={styles.serviceText}>Add-Ons and Special requests</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:18}}>
                    <View style={styles.typeContainer}>
                        {
                            data.map(d=>{
                                return(
                                     <TouchableOpacity onPress={()=>this.selectExtra(d.type)}>
                                        <View style={this.state.extra.indexOf(d.type)>-1?styles.cleaningTypeView_active:styles.cleaningTypeView}>
                                            <Icon name='ios-woman' size={40}  />
                                            <Text style={styles.typeText}>{d.title}</Text>
                                        </View>
                                    </TouchableOpacity>   
                                )
                            })
                        }
                        
                        
                    </View>
                    <Button text={'CONTINUE'} style={{marginVertical:15}} onPress={()=>this.Next()}/>
                </ScrollView>
                
            </View>
        )
    }
    Next(){
       
        const {loginData} = this.props.navigation.state.params;        
        loginData.extra = this.state.extra;
        this.props.navigation.navigate('ScheduleForLogin',{loginData: loginData})
    }

}