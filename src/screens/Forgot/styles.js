import {StyleSheet } from 'react-native';
import {Dimensions} from 'react-native'
let {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    viewContents:{
        width:width,
        paddingHorizontal:28
    },
    backIcon: {
        marginTop:53
    },
    pageTitle: {
        fontSize: 32,
        color: 'rgb(0, 18, 11)', 
        paddingBottom :15 
    },
    inputView: {
        height: 57,
        backgroundColor:'transparent',
        borderRadius: 5,
        borderBottomColor: 'rgba(78,80,83,0.19)',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    inputErrorView:{
        height: 57,
        backgroundColor:'transparent',
        borderRadius: 5,
        borderBottomColor: 'rgb(255, 0, 0)',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    textInput: {
        width: width-76,
        fontSize: 14,
        color: 'rgb(0, 18, 11)',
        paddingHorizontal:2
    },
    iconShow :{
        marginTop: 16,
        marginRight: 5,
        color: 'rgba(0,0,0,0.4)'
    },
    logoView:{
        width:250,
        height:250,
        alignSelf:'center',
    },
    errorText:{
        fontSize: 12,
        lineHeight:20,
        color: 'rgb(255, 0, 0)',      
    },
})