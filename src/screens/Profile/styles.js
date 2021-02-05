import {StyleSheet } from 'react-native';
import {Dimensions} from 'react-native'
let {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        paddingTop:100,
        paddingHorizontal:10
        
    },
    containerModal:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:100,
        opacity:0.5
    },
    modalView:{
        flex:1, 
        flexDirection:'column', 
        justifyContent:'center', 
        alignItems:'center',
    },
    modalcontain:{
        width:width-24*2,
        height:550,        
        backgroundColor: 'rgb(0, 194, 255)',
        borderRadius:5
        
    },
    slide:{
        flexDirection:'column', 
        justifyContent:'center', 
        alignItems:'center',
        paddingHorizontal:24
    },
    swiperimage:{
        width:152,
        height:144,
        marginTop:70
    },
    slideTtile:{
        marginTop:14,
        fontFamily:"Montserrat-Medium",
        fontSize:22,
        lineHeight:24,
        color: 'rgb(255, 255, 255)',
        letterSpacing:0.27,
        textAlign:'center'
    },
    slideText:{
        marginTop:7,
        fontFamily:"Montserrat-Light",
        fontSize:14,
        lineHeight:24,
        textAlign:'center',
        color: 'rgb(255, 255, 255)',
        letterSpacing:0.29
    },
    slideStep:{
        marginTop:10,
        fontFamily:"Montserrat-Regular",
        fontSize:10,
        lineHeight:24,
        textAlign:'center',
        color: 'rgb(255, 255, 255)',
        letterSpacing:1.04
    },
    modalBtnView:{
        flexDirection:'row', 
        justifyContent:"space-between", 
        alignItems:'center',
        height:47,
        marginBottom:14,
        width:width-2*24,
        borderTopColor:"rgb(240,236,240)",
        borderTopWidth:1,
    },
    skipbtn:{
        fontFamily:"Montserrat-Regular",
        fontSize:14,
        color: 'rgb(255, 255, 255)',
        lineHeight:24,
        letterSpacing:0.25,
        marginRight:18
    },
    checkView:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:18
    },
    checkbtn:{
        fontFamily:"Montserrat-Light",
        fontSize:14,
        color: 'rgb(255, 255, 255)',
        letterSpacing:0.25,
        marginLeft:9
    },
    logoimage:{
        width:102,
        height:48,
        marginBottom:24
    },
    buidingimage:{
        width:32,
        height:32,
        paddingTop:9,
        marginRight:9
    },
    buidings:{
        width: width - 24*2,
        height:48,
        flexDirection:"row",
        marginBottom:8
    },
    buidingTitle:{
        fontFamily:"Montserrat-Light",
        fontSize:24,
        color: 'rgb(52, 45, 52)',
        letterSpacing:0.23
    },
    inputTitle:{
        width: width - 24*2,
        fontFamily:"Montserrat-SemiBold",
        height:30,
        fontSize: 12,
        color: 'rgb(97, 95, 97)',
        letterSpacing:1.25,
    },
    inputView: {
        height: 34,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    ErrorinputView: {
        height: 34,
        backgroundColor: 'white',
        borderBottomColor: 'rgb(255, 0, 0)',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    // textInput: {
    //     width: width- 24*2-50,
    //     fontFamily:"Montserrat-Light",
    //     fontSize: 20,
    //     color: 'rgb(24, 23, 25)',
    //     letterSpacing:0.25
    // },
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
    textInput: {
        
        width: width-88,
        height:45,
        padding:10,
        fontSize: 16,
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
    forgot: {
        marginTop:10,
        fontSize: 14,
        lineHeight:30,
        color: 'rgb(114, 115, 118)',
        alignSelf:'stretch',
        textAlign:'right',
        marginBottom:36
    },
    signupHelp:{
        marginTop:40,
        fontSize: 14,
        lineHeight:30,
        color: 'rgb(226, 28, 41)',
        textAlign:'center',
    },
    signup:{
        fontSize: 14,
        lineHeight:30,
        color: 'rgb(226, 28, 41)',
        textAlign:'center',
        marginBottom:250
    }
    
    
})