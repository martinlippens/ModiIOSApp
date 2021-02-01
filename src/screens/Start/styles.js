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
    logoimage:{
        width:102,
        height:48,
        marginBottom:54
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
        width: width-48,
        fontFamily:"Montserrat-Light",
        color: 'rgb(73,71,73)',
        letterSpacing:0.25,
        lineHeight:24,
    },
    serviceText:{
        fontSize: 14,
        fontFamily:"Montserrat-Light",
        color: 'rgb(73,71,73)',
        letterSpacing:0.25,
        lineHeight:24,
        textAlign:'center',
        marginTop:31
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
        shadowOpacity:0.08,
    },
    ActivebtnT:{
        shadowColor: 'rgb(0,0,0)',      
        shadowOffset:{
            width:0,
            height:3
        },        
        shadowRadius: 14,
        shadowOpacity:0.08,
        borderColor:'rgb(52,45,52)',
        borderWidth:3,
        borderRadius:4
    },
    btnTypeView:{
        width:152,
        height:144,
        alignItems: 'center',
        backgroundColor:'rgb(255,255,255)',
    },
    iconAnimation:{
        position:"absolute",
        height:160,
        width:160
    },
    typeText: {
        marginTop:14,
        fontSize: 16,
        color: 'rgb(52,45,52)',
        fontFamily:"Montserrat-Medium",
        letterSpacing:-0.25,
    },
    versionText:{
        position:'absolute',
        top:height/2+42,
        left:24,
        width:width-48,
        fontSize: 14,
        color: 'rgb(73,71,73)',
        fontFamily:"Montserrat-Light",
        letterSpacing:0.25,
        textAlign:'center'
    },    
})