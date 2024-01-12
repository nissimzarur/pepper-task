import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  formWrapper: {
    alignItems: 'center',
  },
  fieldsWrapper:{
    alignItems:'center',
    width:Dimensions.get('screen').width * 0.8,
    gap:10
  }
});
