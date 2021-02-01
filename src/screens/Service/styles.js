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
    serviceView:{
        width: width-48,
        justifyContent:  'center',
        alignItems: 'center',
    },
    serviceText:{        
        fontSize: 28,
        fontFamily:"Montserrat-Medium",
        color: 'rgb(52,45,52)',
        letterSpacing:-0.75,
        lineHeight:36,
        textAlign: 'center',
        marginTop:80,
        marginBottom:4
    },
    HelpText:{
        fontSize: 16,
        fontFamily:"Montserrat-Light",
        color: 'rgb(73,71,73)',
        letterSpacing:0.25,
        lineHeight:24,
        textAlign:'center',
    },
    addBtn:{
        fontSize: 16,
        fontFamily:"Montserrat-Regular",
        color: 'rgb(0,140,223)',
        letterSpacing:0.25,
        lineHeight:24,
        textAlign:'center',
    },
    cleanTypeView:{
        width: width-48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:35
    },
    btnT:{
        shadowColor: 'rgb(0,0,0)',      
        shadowOffset:{
            width:0,
            height:3
        },        
        shadowRadius: 14,
        shadowOpacity:0.08
    },
    btnTypeView:{
        width:152,
        height:168,
        alignItems: 'center',
        backgroundColor:'rgb(255,255,255)',
    },
    cleanImag:{
        marginTop:19,
        height:72,
        width:72
    },
    typeText: {
        marginTop:14,
        fontSize: 16,
        color: 'rgb(52,45,52)',
        fontFamily:"Montserrat-Medium",
        letterSpacing:-0.25,
    },
    costText:{
        marginTop:8,
        fontSize: 18,
        color: 'rgb(119,119,119)',
        fontFamily:"Montserrat-Light",
        letterSpacing:0.25,
    },    
})