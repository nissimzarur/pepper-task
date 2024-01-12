import React, { useEffect } from 'react';
import Screen from '@app/src/components/base-screen/base-screen';
import accountStore from '@app/src/stores/account/account-store';
import useNavigationHeader from '@app/src/hooks/useNavigationHeader';
import Box from '@app/src/components/box/box';
import Text from '@app/src/components/controllers/text/text';
import Styles from './new-contact-screen.styles';
import Spacer from '@app/src/components/controllers/spacer/spacer';
import TextInput from '@app/src/components/controllers/text-input/text-input';
import Button from '@app/src/components/controllers/button/button';

const NewContactScreen = ({navigation}: any) => {
  const title = `${accountStore.info.number}`;
  useNavigationHeader(navigation, {title});

  const approveBtn = ()=>navigation.push('Error');
  
  return (
    <Screen scroll={false}>
      <Box style={Styles.formWrapper}>
        <Text>הוספת מוטב חדש</Text>
        <Spacer size="lg" />
        <Box style={Styles.fieldsWrapper}>
          <TextInput placeholder="שם מלא" />
          <TextInput placeholder="מספר חשבון" />
        </Box>
        <Spacer size='lg'/>
        <Button status='success' onPress={approveBtn}>אישור</Button>
      </Box>
    </Screen>
  );
};

export default NewContactScreen;
