import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
const s = StyleSheet.create({
 
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
});


export default class Example extends Component {
    static navigationOptions = {
        header: null
    }
  state = { useLiteCreditCardInput: false,valid: false,name:'',number:'',expiry:'',cvc:'',postalCode:'',type:'' };

  _onChange = (formData) => {
      console.log(formData)
      this.setState({
          valid: formData.valid,
          number: formData.values.number,
          expiry: formData.values.expiry,
          cvc: formData.values.cvc,
          name: formData.values.name,
          postalcode: formData.values.postalCode,
          type: formData.values.type
      })
    };
  _onFocus = (field) => console.log("focusing", field);
  _setUseLiteCreditCardInput = (useLiteCreditCardInput) => this.setState({ useLiteCreditCardInput });

  render() {
    return (
      <View style={styles.container}> 
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.backIcon}>
                <Icon name='ios-arrow-back' size={40} color='#212123'/>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Payment</Text>
        </View>       
        <ScrollView contentContainerStyle={{paddingTop:20}}>

            { this.state.useLiteCreditCardInput ?
            (
                <LiteCreditCardInput
                autoFocus
                inputStyle={s.input}

                validColor={"black"}
                invalidColor={"red"}
                placeholderColor={"darkgray"}

                onFocus={this._onFocus}
                onChange={this._onChange} />
            ) : (
                <CreditCardInput
                autoFocus

                requiresName
                requiresCVC
                requiresPostalCode

                labelStyle={s.label}
                inputStyle={s.input}
                validColor={"black"}
                invalidColor={"red"}
                placeholderColor={"darkgray"}

                onFocus={this._onFocus}
                onChange={this._onChange} />
            )
            }
            {
                this.state.valid?
                <Button text={'SUBMIT'} style={{marginVertical:35}} onPress={()=>this.Next()}/>:null
            }
        </ScrollView>
      </View>
    );
  }
  Next(){
    this.props.navigation.navigate('Setting')
  }
}