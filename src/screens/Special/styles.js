import {StyleSheet } from 'react-native';
import {Dimensions} from 'react-native'
let {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        paddingTop: 90
    },
    header: {
        height: 90,
        paddingTop:30,
        width: width,
        position:"absolute",
        left:0,
        top:0,
        zIndex:1000,
        backgroundColor:'#fff',
        flexDirection: 'row',
        justifyContent:  'center',
        alignItems: 'center',
        borderBottomColor: 'rgba(33,33,33,0.4)',
        borderBottomWidth:0.5
    },
    textAreaView:{
        flexDirection: 'row',
        justifyContent:  'center',
        marginTop : 30,
        padding : 5
    },
    textArea:{
        height:220,
        fontSize:16,
        justifyContent : 'flex-start',
        width:width-60,
        borderColor : 'grey',
        borderWidth : 1,
        
    },
    backIcon: {
        position: 'absolute',
        left: 16,
        top:40
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '500',
        color: '#212123'
    },
    servicetitle: {
        height: 60,
        width: width,
        backgroundColor:'#f7f7f7',
        flexDirection: 'row',
        justifyContent:  'center',
        alignItems: 'center',
        marginBottom: 10,     
    },
    serviceText:{        
        fontSize: 20,
        fontWeight: '500',
        color: '#686868',
        width: width-50,
        textAlign: 'center'

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
        borderBottomColor: 'rgba(0,0,0,0.3)',
        borderBottomWidth: 1,
        justifyContent: 'center',
        width: width-48,
       
        
    },
    textInput: {
        
        width: width-48,
        fontSize: 22,
        marginBottom: -6,
        color: '#212123'
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
    locationPreview: {
        alignSelf: 'center',
        width: width-32,
        height:42,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 0.5,
        backgroundColor:'white',
        paddingLeft: 10,
        borderRightWidth:0.5,
        borderRightColor: 'rgba(0,0,0,0.2)',
        borderLeftWidth: 0.5,
        borderLeftColor: 'rgba(0,0,0,0.2)',
    },
    locationName: {
        fontSize: 15,
        color: '#212123',
        fontWeight: '400',
        marginLeft: 8
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
    addressView:{
        width: width,
        justifyContent:  'center',
        alignItems: 'center',
        backgroundColor:'#f7f7f7',
        marginVertical:35
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
    BtnView:{
        position: 'absolute',
        width:width-40,
        flexDirection: 'row',
        justifyContent:  'center',
        alignItems: 'center',
        bottom: 50,
        marginLeft:20,
        marginRight:20
    }
})