import {StyleSheet } from 'react-native';
import {Dimensions} from 'react-native'
let {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        paddingHorizontal: 24,
        paddingTop: 84
    },
    backIcon: {
        position: 'absolute',
        top: 60,
        left: 24
    },
    meunIcon: {
        width: 24,
        height: 24
    },
    
    content:{
        width: width-48,
        justifyContent:  'center',
        alignItems: 'center',
    },
    cleanImag:{
        marginTop:25,
        width:153,
        height:153
    },
    serviceText:{        
        fontSize: 28,
        fontFamily:"Montserrat-Medium",
        color: 'rgb(52,45,52)',
        letterSpacing:-0.75,
        lineHeight:36,
        textAlign: 'center',
        marginBottom:20
    },
    helpView:{
        width: width-48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:20
    },
    helpTextView:{
        width: width-48,
        marginTop:26,
        marginBottom:52
    },
    helptitle:{
        fontSize: 16,
        fontFamily:"Montserrat-Medium",
        color: 'rgb(52,45,52)',
        letterSpacing:0.25,
    },
    costtitle:{
        fontSize: 16,
        fontFamily:"Montserrat-Regular",
        color: 'rgb(125,122,125)',
        lineHeight:24,
        letterSpacing:0.25,
    },
    helpText:{
        fontSize: 16,
        fontFamily:"Montserrat-Light",
        color: 'rgb(73,71,73)',
        lineHeight:24,
        height:138
    },
    
})