import {StyleSheet } from 'react-native';
import {Dimensions} from 'react-native'
let {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        paddingTop: 30
    },
    header: {
        height: 60,
        width: width,
        backgroundColor:'#fff',
        flexDirection: 'row',
        justifyContent:  'center',
        alignItems: 'center',
        borderBottomColor: 'rgba(33,33,33,0.4)',
        borderBottomWidth:0.5
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
    helpText:{
        fontSize: 14,
        fontWeight: '500',
        color: '#686868',
        width: width,
        paddingLeft:20,
        paddingRight:20,
        marginVertical:5
    },
    serviceText:{        
        fontSize: 20,
        fontWeight: '500',
        color: '#686868',
        width: width-50,
        textAlign: 'center'

    },
    backIcon: {
        position: 'absolute',
        left: 16
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
        
        width: width-48,
        fontSize: 16,
        marginBottom: -6
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
    text: {
        fontSize: 15,
        fontWeight: 'bold',        
        color:'#212123'
    },
    cleaningTypeView: {
        width: width-60,
        height: 60,
        borderBottomColor: '#212123',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',        
        borderRadius: 20,     
        marginBottom: 7,
        opacity: 0.8
    },
    cleaningTypeView_active: {
        width: width-60,
        height: 60,
        borderBottomColor: '#e3fff9',
        borderBottomWidth: 1,
        flexDirection: 'row',
        borderRadius: 20,        
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 7,        
        backgroundColor: '#e3fff9',  
        shadowColor: '#e3fff9',      
        shadowOffset:{
            width:0,
            height:5
        },        
        shadowRadius: 5,
        shadowOpacity:1,
        elevation:2       
    },
    typeText: {
        fontSize: 20,
        fontWeight:'400',
        color: '#212123',
        width:width-160,
    },
    typeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingVertical: 10
    },
    typeDescription: {
        color: '#212123',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        alignSelf:'center',
        lineHeight: 19,

    },
    howOften:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 5
    },
    howOftenView: {
        width: (width-36)/4-7,
        height: ((width-36)/4-7)*2/3,
        borderRadius: 4,
        borderColor: '#212123',
        borderWidth: 1,
        borderStyle:'dashed',
        justifyContent:'center',
        alignItems: 'center'
    },
    howOftenView_active: {
        width: (width-36)/4-7,
        height: ((width-36)/4-7)*2/3,
        borderRadius: 4,
        borderColor: '#212123',
        borderWidth: 1,
        borderStyle:'dashed',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#e3fff9',  
        shadowColor: 'black',      
        shadowOffset:{
            width:0,
            height:5
        },        
        shadowRadius: 5,
        shadowOpacity:1,
        elevation:3 
    },
    oftenText: {
        color:'#212123',
        fontSize:13,
        fontWeight:'300',
        textAlign:'center'
    },
    oftenText_active: {
        color:'#212123',
        fontSize:13,
        fontWeight:'400',
        textAlign:'center'
    },
    FirstTime: {
        width: (width-36)/3-7,
        height: ((width-36)/3-7)*2/3,
        borderRadius: 4,
        borderColor: '#212123',
        borderWidth: 1,
        borderStyle:'dashed',
        justifyContent:'center',
        alignItems: 'center'
    },
    FirstTime_active: {
        width: (width-36)/3-7,
        height: ((width-36)/3-7)*2/3,
        borderRadius: 4,
        borderColor: '#212123',
        borderWidth: 1,
        borderStyle:'dashed',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#e3fff9',  
        shadowColor: 'black',      
        shadowOffset:{
            width:0,
            height:5
        },        
        shadowRadius: 5,
        shadowOpacity:1,
        elevation:3 
    },
    cleanerView: {
        flexDirection:'row',
        alignItems:'center',
        marginVertical: 10,
        paddingVertical:7,
        paddingHorizontal:10
        // justifyContent: 'space-around'
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
    selectedCleanerView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#5ea2e8',
        paddingVertical:7,
        borderRadius: 20,
        marginVertical:10,
        paddingHorizontal:10
    }
    
    
})