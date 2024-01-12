import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    contactInfoWrapper:{
        alignItems:'center',
        gap:5
    },
    transferWrapper:{
        alignItems:'center',
        gap:10,
        width:Dimensions.get('screen').width * 0.8,
        alignSelf:'center'
    },
    transferBtnWrapper:{
        alignItems:'center',
    }
})