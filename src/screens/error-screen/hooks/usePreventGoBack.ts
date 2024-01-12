import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const usePreventGoBack = (navigation: any) => {
  useEffect(() => {
    navigation.addListener('beforeRemove', (e: any) => {
        if(e.data.action.type === 'GO_BACK') e.preventDefault();
    });
  }, [navigation]);
};

export default usePreventGoBack;
