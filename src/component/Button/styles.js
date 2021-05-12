

import {StyleSheet } from 'react-native';
import {Dimensions} from 'react-native'
let {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        width: width-48,
        //backgroundColor:'#524552',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf :'center',
        paddingVertical: 16
    },
   
    buttonText: {
      color: '#FFF',
      fontFamily:"Montserrat-Regular",
      fontSize: 16,
      fontWeight: '400',
    },
   
})