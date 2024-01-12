import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  default: {

  },
  loading:{
    position:'absolute',
    alignSelf:'center',
    justifyContent:'center',
    height:Dimensions.get('screen').height / 3,
    zIndex:10
  }
});
