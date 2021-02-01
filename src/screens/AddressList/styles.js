import {StyleSheet } from 'react-native';
import {Dimensions} from 'react-native'
let {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fcf7f0',
        paddingTop: 30
    },
    header: {
        height: 40,
        width: width,
        backgroundColor:'black',
        flexDirection: 'row',
       // justifyContent:  'center',
        alignItems: 'center',
        marginBottom: 3
    },
    backIcon: {
        position: 'absolute',
        left: 16
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white'
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
    locationView:{
        width:width-36,
        borderColor: '#000',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 60
    },
    dupView: {
        width: width-44,
        height: 52,
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 1,
        paddingLeft:16
    }
    
    
})