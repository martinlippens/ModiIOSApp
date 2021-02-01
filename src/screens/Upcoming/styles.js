import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native'
let { width, height } = Dimensions.get('window')
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingHorizontal: 24,
        opacity:0.9,
        paddingTop: 55,
    },
    containerOFF:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 55,
        opacity:0.85
    },
    headerText:{
        color: 'rgb(255,255,255)', 
        fontFamily:'Montserrat-Medium', 
        fontSize:18,        
        textAlign: 'center',        
        letterSpacing: 0.25,
        lineHeight: 36,
    },
    backIcon: {
        position: 'absolute',
        top: 60,
        left: 24
    },
    clockIcon: {
        position: 'absolute',
        top: 60,
        right: 24
    },
    meunIcon: {
        width: 24,
        height: 24
    },
    logoView:{
        width: 250,
        position:"absolute",
        marginTop:150, 
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor:"rgb(52, 45, 52)",
        borderRadius:30
    },
    logoText:{
        color: 'rgb(255,255,255)', 
        fontFamily:'Montserrat-Medium', 
        fontSize:12,        
        textAlign: 'center',        
        letterSpacing: 2.75,
        lineHeight: 24,        
    },
    body: {
        width: width - 48,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
    TitleText: {
        width: width,
        justifyContent: 'center',
    },
    image: {
        width: 285,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    Welcome:{
        fontSize: 24,
        textAlign: "center",        
        color: 'rgb(255, 255, 255)',
        fontFamily: "Montserrat-Medium",
        letterSpacing: -0.75,
        lineHeight: 36,        
        marginBottom : 5,
        marginTop:50
    },
    weekName:{
        fontSize: 48,
        textAlign: "center",        
        color: 'rgb(255, 255, 255)',
        fontFamily: "Montserrat-Medium",
        letterSpacing: -0.3,
        lineHeight: 44,        
        marginBottom : 15,
        marginTop:80
    },
    menuheader_view:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        marginTop:35,
        paddingHorizontal:5
    },
    btn_view:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:width-48,        
        marginTop:5,
        height:72,
        paddingHorizontal:24
    },
    btn_con: {
        fontSize: 18,
        color: 'rgb(255, 255, 255)',
        fontFamily: "Montserrat-Regular",
        letterSpacing: 0.25,
        lineHeight: 24,
    },
    btn_credit: {
        fontSize: 12,
        color: 'rgb(255, 255, 255)',
        fontFamily: "Montserrat-Light",
        letterSpacing: 0.25,
        lineHeight: 24,
    },
    headerbtn_con:{
        fontSize: 18,
        color: 'rgb(255, 255, 255)',
        fontFamily: "Montserrat-Regular",
        letterSpacing: 0.25,
        lineHeight: 24,
    },
    headerbtn_credit:{
        fontSize: 12,
        color: 'rgb(255, 255, 255)',
        fontFamily: "Montserrat-Light",
        letterSpacing: 0.25,
        lineHeight: 24,
    },
    MsgText: {
        fontSize: 16,
        color: '#000',
        textAlign: "center",
        color: 'rgb(255, 255, 255)',
        fontFamily: "Montserrat-Light",
        letterSpacing: 0.25,
        lineHeight: 24
    },
    BookBtn:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:"center",
        borderRadius:5,
        position:"absolute",
        bottom:35,
        marginHorizontal:24,
    },
    menuheader:{
        height:120,
        alignItems:"center",
    },
    menucontent:{
        height:height-188,
        paddingTop:15
    },
    headerTitle: {
        fontSize: 38,
        fontWeight: '500',
        color: '#000',
        marginLeft: 30,
        marginVertical: 15,        
        fontFamily: 'Times New Roman'
    },
    headerTitle_home: {
        fontSize: 30,
        fontWeight: '500',
        color: '#FFF',
        fontFamily: 'Times New Roman'
    },
    title: {
        fontWeight: '300',
        color: 'black',
        marginLeft: 40,
        marginVertical: 16,
        //alignSelf: 'center',
        fontSize: 20,
        fontFamily: 'bold'
    },
    locationPreview: {
        alignSelf: 'center',
        width: width - 32,
        height: 42,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 0.5,
        backgroundColor: 'white',
        paddingLeft: 10,
        borderRightWidth: 0.5,
        borderRightColor: 'rgba(0,0,0,0.2)',
        borderLeftWidth: 0.5,
        borderLeftColor: 'rgba(0,0,0,0.2)',
    },
    locationName: {
        fontSize: 24,
        color: '#616163',
        fontWeight: '400',
        marginLeft: 3
    },
    schedulename: {
        fontSize: 18,
        color: '#616163',
        fontWeight: '400',
        marginLeft: 8,
        textAlignVertical: 'bottom'
    },
    dupView: {
        width: width - 44,
        height: 42,
        justifyContent: 'space-around',
        borderBottomColor: 'rgba(33,33,33,0.4)',
        borderBottomWidth: 1,
        paddingLeft: 8,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    inputView: {
        height: 40,
        paddingHorizontal: 8,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: 'rgba(0,0,0,0.3)',
        borderWidth: 1,
        justifyContent: 'center',

    },
    textInput: {

        width: width - 48,
        fontSize: 16,
        marginBottom: -6
    },
    forgotTitle: {
        fontSize: 16,
        fontWeight: '300',
        color: '#41cab7',
        marginLeft: 32,
        marginVertical: 16
    },
    createText: {
        fontSize: 16,
        fontWeight: '300',
        color: '#41cab7',
        marginTop: 30,
        alignSelf: 'center'
    },
    drawerContent: {
        //width:200,
        marginTop:48,
        height: height-68,
        //backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOffset: {
            width: -5,
            height: 0
        },
        shadowRadius: -5,
        shadowOpacity: 1,
        elevation: 10,
        borderRadius:5
    },
    drawerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 12
    },
    icons: {
        marginRight: 15,
        marginTop: 5
    },
    menuView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //width:200,
        paddingVertical: 5,
        backgroundColor: 'white',
        paddingLeft: 20
    },
    BottomBorder: {
        borderBottomColor: 'rgba(0,0,0,0.3)',
        borderBottomWidth: 0.5,
        width: '100%',
        //width:width*2/3-40,
        alignSelf: 'flex-end'
    },
    menuText: {
        fontSize: 20,
        width:250,
        color: 'rgb(52,45,52)', 
        fontFamily:'Montserrat-Light', 
        lineHeight: 30,
        paddingVertical:10 
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
    reportView: {
        width: width - 32,
        borderColor: 'rgba(33,33,33,0.6)',
        borderWidth: 1,
        alignSelf: 'center',
        padding: 8
    },
    TextArea: {
        width: width - 40,
        height: height / 2
    },
    starView: {
        width: width - 150,
        marginTop: 20,
        alignSelf: 'center'
    },
    addressView: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        marginVertical: 35
    },
    AptTilte: {
        position: 'absolute',
        color: '#FF0000',
        fontSize: 18,
        fontWeight: '300',
        bottom: 35,
        left: 50,
    },
    AptAddress: {
        position: 'absolute',
        color: '#FF0000',
        bottom: 15,
        left: 50
    },
    BtnView: {
        height: 100
    },
    cleaningTypeView_active: {
        width: width,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e3fff9',
        paddingLeft: 26,
        paddingRight: 26,
    },
    typeText: {
        fontSize: 20,
        fontWeight: '400',
        color: '#212123',
    },
    timerImag:{
        width:160,
        height:160,        
    }

})