import {StyleSheet } from 'react-native';
import {Dimensions} from 'react-native'
let {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF',
        paddingTop: 90
        
    },
    mapViews:{
        position: 'absolute',
        flexDirection: 'row',
        justifyContent:  'center',
        height: height,
        width: width,
    },
    header: {
        paddingTop: 30,
        height: 90,
        position:"absolute",
        left:0,
        top:0,
        zIndex:1000,
        paddingBottom: 10,
        width: width,
        backgroundColor:'#000',
        flexDirection: 'row',
        justifyContent:  'center',
        alignItems: 'center',
        borderBottomColor: 'rgba(33,33,33,0.4)',
        borderBottomWidth:0.5
    },
    Zipeheader: {
        height: 60,
        width: width,
        backgroundColor:'#FFFFFF',
        flexDirection: 'row',
        justifyContent:  'center',
        alignItems: 'center',
    },
    helpTitle:{
        height: 40,
        width: width,
        flexDirection: 'row',
        justifyContent:  'center',
        alignItems: 'center',
        backgroundColor:'#f7f7f7',
    },
    helpText:{
        fontSize: 18,
        fontWeight: '500',
        color: '#212123'
    },
    backIcon: {
        position: 'absolute',
        left: 16,
        zIndex: 10
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
    inputView: {
        height: 60,
        paddingHorizontal: 8,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomColor: 'rgba(0,0,0,0.3)',
        borderBottomWidth: 1,
        justifyContent: 'center',
        marginVertical:5
    },
    zipeinputView: {
        height: 40,
        paddingHorizontal: 2,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 8,   
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:20,
    },
    textInput: {
        width: width-48,
        fontSize: 22,
        marginBottom: -6
    },
    zipcodeInput: {
        width: width-56,
        fontSize: 15,
    },
    phoneInput: {
        width: width-158,
        fontSize: 22,
        marginBottom: 0,
        marginLeft: 30,
    },
    phoneup: {
        width: 80,
        fontSize: 22,
        marginTop: 14,        
        alignItems: 'center',
        textAlign: 'center',        
        borderRightColor: 'rgba(0,0,0,0.3)',
        borderRightWidth: 1, 
    },
    forgotTitle: {
        fontSize: 16,
        fontWeight:'300',
        color: '#41cab7',
        marginLeft: 32,
        marginVertical: 16
    },
    createText: {
        fontSize: 16,
        fontWeight:'300',
        color: '#41cab7',       
        marginTop: 30,
        alignSelf: 'center'
    },
    headerRight: {
        fontSize: 17,
        fontWeight: '400',
        color: 'white'
    },
    login: {
        position: 'absolute',
        right: 16
    },
    validView: {
        width: width-32,
        height: 40,
        backgroundColor: '#FEF9B7',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        alignSelf: 'center'
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
    image: {
        width:width-80,
        height:180,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 8, 
    },
    buttonContainer: {
        backgroundColor: 'transparent',
    },
    btnStyle: {
        position: 'absolute',
        top: height-180,
        zIndex: 10
    },
    btnBooking:{
        zIndex:20000,
        width:150,
        height:60,
        marginTop:5,
        marginBottom:5
    },
    popView:{
        width: width-100,
        height:300,
        position:"absolute",
        top:0,
        left:0,
        flex:1,
        zIndex:20

    },
    popImage:{
        width: width-100, 
        height:200,
        resizeMode:'contain',
        flex:1
    },
    bubbleTitle:{
        fontSize: 18,
    },
    bubbleStreet:{
        fontSize: 14,
        marginTop:5,
        marginBottom:10
    },
    btnBedRow:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingVertical: 4
    },
    btnBedRoom:{
        width:80,
        height:30,
        backgroundColor: '#e3fff9',  
        shadowColor: 'black',      
        shadowOffset:{
            width:0,
            height:5
        },        
        shadowRadius: 5,
        shadowOpacity:0.2,
        borderRadius: 10,
    },
    BedRoomText:{
        fontSize: 10,
        fontWeight:'300',
        textAlign:'center'
    },
    BedRoomTextCost:{
        fontSize: 12,
        fontWeight:'300',
        textAlign:'center'
    },
    WiperView:{
        position: 'absolute',
        top: height-400,
        zIndex: 10
    },
    paginationStyle: {
        position: 'absolute',
        bottom: 10,
        right: 60
    },
    AptTilte:{
        position: 'absolute',
        color:'#FFF',
        fontSize: 18,
        fontWeight:'300',
        bottom: 35,
        left: 50
    },
    AptAddress:{
        position: 'absolute',
        color:'#FFF',
        bottom: 15,
        left: 50       
    },
    paginationText: {
        color: 'red',
        fontSize: 20
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    Activslide:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        shadowColor: '#EA13ED',      
        shadowOffset:{
            width:0,
            height:5
        },        
        shadowRadius: 5,
        shadowOpacity:0.8,
        elevation:3,
    },
    BtnView:{
        marginBottom:10
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
    MsgText:{
        fontSize: 18,
        fontWeight: '500',
        color: '#000',
        alignItems: 'center',
        textAlign:'center',
        padding:20
        
    }
    
})