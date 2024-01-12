import {View, Text} from 'react-native';
import {ILoginForm} from '../interfaces';
import getBalance from '@app/src/api/account/get-balance';
import userStore from '@app/src/stores/user/user-store';
import accountStore from '@app/src/stores/account/account-store';
import appStore from '@app/src/stores/app/app-store';

const useLoginClick = (loginForm: ILoginForm, navigation: any) => {
  /*
    loginForm - Not in use.
    Eliran mentioned that the username will be stored based on the API request rather than the input from the form.
  */

  const handleLoginClick = async () => {
    if (!loginForm.password || !loginForm.username) {
      appStore.setError('יש למלא את כל פרטי הכניסה');
      return;
    }

    appStore.setLoading(true);

    const {
      balance,
      acount: number,
      username,
    } = await getBalance().catch(error => {
      appStore.setError(error);
      appStore.setLoading(false);
      throw false;
    });



    userStore.setUsername(username);
    accountStore.setAccountInfo({balance, number});
    appStore.setLoading(false);

    navigation.replace('Home');
  };

  return {
    handleLoginClick,
  };
};

export default useLoginClick;
