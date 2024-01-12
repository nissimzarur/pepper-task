import React from 'react';
import Screen from '@app/src/components/base-screen/base-screen';
import Box from '@app/src/components/box/box';
import Text from '@app/src/components/controllers/text/text';
import usePreventGoBack from './hooks/usePreventGoBack';
import Styles from './error-screen.styles';
import Button from '@app/src/components/controllers/button/button';
import Spacer from '@app/src/components/controllers/spacer/spacer';
import {CommonActions} from '@react-navigation/native';

const ErrorScreen = ({navigation}: any) => {
  usePreventGoBack(navigation);

  const homeBtn = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Home'}],
      }),
    );
  };
  return (
    <Screen scroll={false}>
      <Box style={Styles.errorTextWrapper}>
        <Text status="danger" type="bold">
          מצטערים,
        </Text>
        <Text status="danger" type="bold">
          פעולה זו אינה זמינה כרגע
        </Text>
      </Box>
      <Spacer size="lg" />
      <Box style={Styles.backBtnWrapper}>
        <Button onPress={homeBtn}>חזור למסך הבית</Button>
      </Box>
    </Screen>
  );
};

export default ErrorScreen;
