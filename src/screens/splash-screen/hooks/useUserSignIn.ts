import accountStore from '@app/src/stores/account/account-store';
import userStore from '@app/src/stores/user/user-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
const useUserSignIn = (navigation: any) => {
  useEffect(() => {
    (async () => {
      const username = await AsyncStorage.getItem('username');
      const balance = await AsyncStorage.getItem('balance');
      const number = await AsyncStorage.getItem('number');

      if (username) userStore.setUsername(username);
      if (balance) accountStore.setAccountInfo({balance: parseInt(balance)});
      if (number) accountStore.setAccountInfo({number});

      setTimeout(() => {
        if (username) navigation.replace('Home');
        else navigation.replace('Login');
      }, 2000);
    })();
  }, []);
};

export default useUserSignIn;
