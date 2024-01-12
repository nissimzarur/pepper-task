import React, { useContext } from 'react';
import Screen from '@app/src/components/base-screen/base-screen';
import Box from '@app/src/components/box/box';
import Styles from './login-screen.styles';
import TextInput from '@app/src/components/controllers/text-input/text-input';
import Button from '@app/src/components/controllers/button/button';
import useLoginForm from './hooks/useLoginForm';
import useLoginClick from './hooks/useLoginClick';
import Text from '@app/src/components/controllers/text/text';
import Spacer from '@app/src/components/controllers/spacer/spacer';

const LoginScreen = ({navigation}:any) => {
  const {handleUpdateForm, loginForm} = useLoginForm();
  const {handleLoginClick} = useLoginClick(loginForm, navigation);

  return (
    <Screen scroll={false}>
      <Box style={Styles.loginForm}>
        <TextInput
          placeholder="שם משתמש"
          onChangeText={username => handleUpdateForm('username', username)}
        />
        <TextInput
          placeholder="סיסמא"
          onChangeText={password => handleUpdateForm('password', password)}
        />
      </Box>
      <Box style={Styles.buttonWrapper}>
        <Button onPress={handleLoginClick}>כניסה</Button>
      </Box>
    </Screen>
  );
};

export default LoginScreen;
