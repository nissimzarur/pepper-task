import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  searchWrapper: {
    width: Dimensions.get('screen').width * 0.8,
    alignSelf: 'center',
  },
  listContainerStyle: {
    gap: 10,
    alignItems: 'center',
  },
  addContactWrapper:{
    alignItems:'center'
  }
});
