import {View, Text} from 'react-native';
import React, {useLayoutEffect} from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

const useNavigationHeader = (navigation: any, params:NativeStackNavigationOptions) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign:'center',
      ...params,
    });
  }, []);
};

export default useNavigationHeader;
