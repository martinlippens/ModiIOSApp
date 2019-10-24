import {StyleSheet } from 'react-native';
import {Dimensions} from 'react-native'
let {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        paddingTop: 54
    },
    CloseIcon: {
        position: 'absolute',
        top: 54,
        right: 24
    },    
    content:{
        width: width,
        //justifyContent:  'center',
        //alignItems: 'center',
    },
    headerTitle:{
        fontSize: 18,
        fontFamily:"Montserrat-Medium",
        color: 'rgb(52,45,52)',
        letterSpacing:0.25,
        lineHeight:36,
        textAlign: 'center',
        height:48,
        marginBottom:23
    },
    menuView:{
        width: width-24,
        height:72,
        marginLeft:24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        borderTopColor:"rgb(240,236,240)",
        borderTopWidth:1        
    },
    menuBtn:{
        flexDirection: 'row',
        alignItems:'center',
    },
    meunIcon:{
        width:32,
        height:32
    },
    menuTitle:{
        marginLeft:10,
        fontSize:18,
        fontFamily:"Montserrat-Light",
        color: 'rgb(52,45,52)',
        letterSpacing:0.28,
    },
    menuValue:{
        marginRight:24,
        fontSize:14,
        fontFamily:"Montserrat-Light",
        color: 'rgb(0,140,223)',
        letterSpacing:0,
    },
    dateView:{
        width:width,
        paddingHorizontal: 42,
    },
    timeimage:{
        width:80,
        height:80,
        marginTop:15
    },
    setTimeView:{
        shadowColor: 'rgb(0,0,0)',      
        shadowOffset:{
            width:0,
            height:3
        },        
        shadowRadius: 14,
        shadowOpacity:0.05,
    },
    activeItem:{
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:"rgb(255, 255, 255)",
        borderColor:"rgb(0, 140, 223)",
        borderWidth:3,
        width:152,
        marginHorizontal:11
    },
    itmeView:{
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:"rgb(255, 255, 255)",
        width:152,
        marginHorizontal:11
        
    },
    setTimeTtile:{
        marginTop:10,
        fontSize:16,
        fontFamily:"Montserrat-Medium",
        color: 'rgb(52,45,52)',
        letterSpacing:-0.25,
    },
    setTimeTimes:{
        marginTop:8,
        marginBottom:21,
        fontSize:12,
        fontFamily:"Montserrat-Light",
        color: 'rgb(119, 119, 119)',
        letterSpacing:-0.19,
    },
    detailView:{
        marginVertical:20,
        
    },
    detailTitle:{
        marginTop:6,
        fontSize:16,
        fontFamily:"Montserrat-Light",
        color: 'rgb(73, 71, 73)',
        letterSpacing:0.25,
        marginLeft:24
    },
    activetext:{
        fontSize:14,
        fontFamily:"Montserrat-Regular",
        color: 'rgb(52, 45, 52)',
        marginLeft:20,
        marginRight:20,
        marginVertical:10  
    },
    detailoption:{
        fontSize:14,
        fontFamily:"Montserrat-Regular",
        color: 'rgb(0, 140, 223)',
        marginLeft:20,
        marginRight:20,
        marginVertical:10        
    },
    activeoption:{
        height:43,
        marginLeft:8,
        marginRight:8,
        flexDirection:'column',
        alignItems:"center",
        backgroundColor:"rgb(255, 255, 255)", 
        borderColor:"rgb(0, 140, 223)",
        borderWidth:2,
        borderRadius:5,
    },
    optionbtn:{
        height:43,
        marginLeft:8,
        marginRight:8,
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:"rgb(255, 255, 255)", 
        borderColor:"rgb(255, 255, 255)",
        borderWidth:2,
        borderRadius:5,  
    },
    optionbtnView:{
        height:60
    },
    TimesbtnView:{
        height:200,
        marginHorizontal:22,
    },
    textAreaView:{
        flexDirection: 'row',
        marginTop : 10,
        borderColor : 'rgb(76,76,76)',
        borderWidth : 1,
        width:width-48,
        borderRadius:5,
        marginHorizontal:24,
        marginBottom:30
    },
    textArea:{
        height:100,
        fontSize:14,
        fontFamily:"Montserrat-Light",
        color: 'rgb(73, 71, 73)',
        lineHeight:24,
        justifyContent : 'flex-start',
        marginHorizontal:22,
        marginVertical:16        
    },




    serviceText:{        
        fontSize: 28,
        fontFamily:"Montserrat-Medium",
        color: 'rgb(52,45,52)',
        letterSpacing:-0.75,
        lineHeight:36,
        textAlign: 'center',
        marginTop:20,
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