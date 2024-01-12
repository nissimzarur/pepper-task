import React from 'react';
import Screen from '@app/src/components/base-screen/base-screen';
import {observer} from 'mobx-react';
import userStore from '@app/src/stores/user/user-store';
import Text from '@app/src/components/controllers/text/text';
import Box from '@app/src/components/box/box';
import accountStore from '@app/src/stores/account/account-store';
import Styles from './home-screen.styles';
import moment from 'moment';
import Spacer from '@app/src/components/controllers/spacer/spacer';
import Button from '@app/src/components/controllers/button/button';
import useGetContacts from './hooks/useGetContacts';
import { CommonActions } from '@react-navigation/native';

const HomeScreen = observer(({navigation}: any) => {
  // navigation.dispatch(
  //   CommonActions.reset({
  //     index: 0,
  //     routes: [{ name: 'Home' }],
  //   })
  // );
  useGetContacts()
  const username = userStore.loggedUser.username || '';
  const balance = accountStore.info.balance || 0;

  const date = moment().format('DD/MM/YYYY');
  const welcome = `שלום ${username}`;
  const balanceText = `יתרתך נכון ל- ${date} היא: `;
  const balancePrice = `${balance} ש״ח`;

  const processPayment = () => {
    navigation.push('Contacts');
  };

  return (
    <Screen scroll={false}>
      <Box>
        <Box style={Styles.welcomeWrapper}>
          <Text style={Styles.welcomeText}>{welcome}</Text>
        </Box>
        <Spacer size="sm" />
        <Box style={Styles.balanceWrapper}>
          <Text>{balanceText}</Text>
          <Spacer size="sm" />
          <Text type="bold">{balancePrice}</Text>
        </Box>
        <Spacer size="xlg" />
        <Box style={Styles.buttonWrapper}>
          <Button onPress={processPayment}>העברת תשלום</Button>
        </Box>
      </Box>
    </Screen>
  );
});

export default HomeScreen;
