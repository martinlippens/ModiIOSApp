import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native'
let { width, height } = Dimensions.get('window')
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
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

    content: {
        width: width - 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    serviceText: {
        fontSize: 28,
        fontFamily: "Montserrat-Medium",
        color: 'rgb(52,45,52)',
        letterSpacing: -0.75,
        lineHeight: 36,
        textAlign: 'center',
        marginTop: 10,
    },
    helptitle: {
        marginTop: 4,
        fontSize: 16,
        fontFamily: "Montserrat-Light",
        color: 'rgb(73,71,73)',
        letterSpacing: 0.25,
        textAlign: 'center',
        lineHeight: 24,
    },
    costtitle: {
        fontSize: 16,
        fontFamily: "Montserrat-Regular",
        color: 'rgb(125,122,125)',
        lineHeight: 24,
        letterSpacing: 0.25,
    },
    helpText: {
        fontSize: 16,
        fontFamily: "Montserrat-Light",
        color: 'rgb(73,71,73)',
        lineHeight: 24,
        height: 138
    },
    btnT: {
        shadowColor: 'rgb(0,0,0)',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 14,
        shadowOpacity: 0.08
    },
    btnTypeView: {
        marginTop: 23,
        width: width - 48,
        height: 270,
        alignItems: 'center',
        backgroundColor: 'rgb(255,255,255)',
        marginBottom:30,
        borderRadius: 5,
        padding: 20,
        alignItems: 'center',
    },
    cleanImag: {
        marginTop: 30,
        height: 100,
        width: 100
    },
    typeText: {
        fontSize: 22,
        color: 'rgb(52,45,52)',
        fontFamily: "Montserrat-Medium",
        letterSpacing: 0.23,
        marginBottom: 8
    },
    contentText: {
        marginTop: 5,
        fontSize: 14,
        color: 'rgb(73,71,73)',
        fontFamily: "Montserrat-Light",
        letterSpacing: 0.25,
    },
    locationIcon: {
        width: 24,
        height: 22,
        marginRight: 9,
        opacity:0.5
    },
    locationView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lineView:{
        width:width-48,
        height:1,
        borderTopColor:"rgb(240, 236, 240)",
        borderTopWidth:1,
        marginVertical:10
    },
    closebtn:{
        marginVertical: 25,
        fontSize: 16,
        color: 'rgb(0,140,223)',
        fontFamily: "Montserrat-Regular",
        letterSpacing: 0.25,
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
    }


})