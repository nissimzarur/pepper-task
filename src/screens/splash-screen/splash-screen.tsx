import React from 'react';
import Screen from '@app/src/components/base-screen/base-screen';
import AppSplashLogo from '@app/src/assets/svg/slpash-logo.svg';
import useUserSignIn from './hooks/useUserSignIn';
import Box from '@app/src/components/box/box';
import Styles from './splash-screen.styles';
const SplashScreen = ({navigation}: any) => {
  useUserSignIn(navigation);

  return (
    <Screen scroll={false}>
      <Box style={Styles.logo}>
        <AppSplashLogo width={300} height={400} />
      </Box>
    </Screen>
  );
};

export default SplashScreen;
