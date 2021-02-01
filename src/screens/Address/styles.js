import {StyleSheet } from 'react-native';
import {Dimensions} from 'react-native'
let {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        //paddingHorizontal:24,
        paddingTop:33
        
    },
    bodyview:{
        width:width
    },
    buidingimage:{
        width:32,
        height:32,
        paddingTop:9,
        marginRight:9
    },
    buidings:{
        width: width - 24*2,
        height:28,
        flexDirection:"row",
        marginTop:40,
        marginBottom:10
    },
    checkView:{
        width: width-48,
        flexDirection: 'row',
        justifyContent: 'flex-start',        
        marginVertical:12,
        alignItems:'center'
    },
    checkName:{
        fontFamily:"Montserrat-Light",
        fontSize:14,
        color: 'rgb(73, 71, 73)',
        letterSpacing:0.25,
        marginLeft:9,
    },
    pageInfo:{
        fontFamily:"Montserrat-Medium",
        fontSize:32,
        color: 'rgb(52, 45, 52)',
        letterSpacing:-0.5
    },
    PageTitle:{
        marginTop:28,
        height:42,
        fontFamily:"Montserrat-Light",
        fontSize:16,
        color: 'rgb(73, 71, 73)',
        letterSpacing:0.25
    },
    buidingTitle:{
        fontFamily:"Montserrat-Light",
        fontSize:24,
        color: 'rgb(52, 45, 52)',
        letterSpacing:0.23
    },
    inputTitle:{
        width: width - 24*2,
        fontFamily:"Montserrat-Regular",
        height:30,
        fontSize: 12,
        color: 'rgb(97, 95, 97)',
        marginTop:17,        
        letterSpacing:1.25
    },
    inputTwoView:{
        width: width-48,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputView: {
        height: 34,
        backgroundColor: 'white',
        borderBottomColor: 'rgb(255, 218, 225)',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    ErrorinputView: {
        height: 34,
        backgroundColor: 'white',
        borderBottomColor: 'rgb(255, 0, 0)',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    textInput: {
        width: width- 24*2-40,
        fontFamily:"Montserrat-Regular",
        fontSize: 18,
        color: 'rgb(24, 23, 25)',
        letterSpacing:0.25,
        marginBottom:8
    },
    iconShow :{
        // marginTop: 16,
        // marginRight: 5,
        color: 'rgba(0,0,0,0.4)'
    },
    conpassInput:{
        width: width- 24*2-32,
        fontFamily:"Montserrat-Light",
        fontSize: 22,
        color: 'rgb(24, 23, 25)',
        letterSpacing:0.25
    },
    confirmIcon:{
        width:32,
        height:32
    },
    header: {
        paddingTop: 30,
        height: 90,
        width: width,
        backgroundColor:'#000',
        flexDirection: 'row',
        justifyContent:  'center',
        alignItems: 'center',
        marginBottom: 33,
        borderBottomColor: 'rgba(33,33,33,0.4)',
        borderBottomWidth:0.5
    },
    backIcon: {
        position: 'absolute',
        top:35,
        left: 16
    },
    logoText:{
        fontSize: 30,
        fontWeight: '500',
        color: '#FFF',
        fontFamily: 'Times New Roman'
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '500',
        color: '#212123'
    },
    title: {
        fontSize: 16,
        fontWeight:'300',
        color: 'black',
        marginLeft: 16,
        marginVertical: 16
    },
    TitleText:{
        width: width,
        justifyContent:  'center',
        alignItems: 'center',
        marginTop:20
    },
    Welcome:{
        fontSize: 24,
        fontWeight: '700',
        color: '#000',
        alignItems: 'center',
        textAlign:'center'
    },
    forgotTitle: {
        fontSize: 16,
        fontWeight:'300',
        color: '#41cab7',
        
        marginVertical: 16,
        alignSelf:'center'
    },
    createText: {
        fontSize: 16,
        fontWeight:'300',
        color: '#41cab7',       
        marginTop: 30,
        alignSelf: 'center'
    },
    validView: {
        width: width-32,
        //fontFamily:"Montserrat-Light",
        fontSize: 14,
        color: 'rgb(255, 0, 0)',
        letterSpacing:0.5,
        marginTop:9,
        fontStyle:'italic'
    },
    loadinView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    popups:{
        flex:1,
        width:width,
        height:height,
        flexDirection:"row",
        alignItems: 'center',
        paddingHorizontal:24
    },
    ModalTitle:{
        fontSize: 28,
        textAlign: "center",        
        color: 'rgb(52, 25, 53)',
        fontFamily: "Montserrat-Medium",
        letterSpacing: -0.75,
        lineHeight: 36,        
        marginBottom : 5,
        marginTop:20
    },
    textArea:{
        fontSize: 16,
        textAlign: "center",        
        color: 'rgb(73, 71, 73)',
        fontFamily: "Montserrat-Light",
        letterSpacing: 0.25,
        lineHeight: 24, 

    },
    popupView:{
        width:width-48,
        alignItems: 'center'
    },
    timerImag:{
        width:160,
        height:160
    },






    ModalView:{
        flex:1,
        backgroundColor: 'rgba(74, 74, 74, 0.7)',
        height:height,
        justifyContent:'flex-end',
        flexDirection:'column' ,
    },

    DriverModalContant:{
        backgroundColor:'rgb(255,255,255)',
        width:width-20,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        paddingHorizontal:23,
        alignSelf:'center',
        paddingBottom:20

    },
    dirverName:{
        height:35,
        paddingTop:15,
        fontSize: 14,
        color: 'rgba(78, 80, 83, 0.6)',       
    },
    addressName:{
        fontSize: 10,
        color: 'rgba(78, 80, 83, 0.6)',
        paddingBottom:5,
    },
    dirverBtns:{
        borderBottomColor:'rgb(29,51,92)',
        borderBottomWidth:1
    },
    logoimage:{
        position:'absolute',
        right:24,
        top:20,
        width:102,
        height:48, 
    }
})