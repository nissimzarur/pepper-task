import React from 'react';
import Screen from '@app/src/components/base-screen/base-screen';
import {IContact} from '@app/src/api/contacts/interfaces';
import Box from '@app/src/components/box/box';
import Text from '@app/src/components/controllers/text/text';
import Styles from './transfer-screen.styles';
import accountStore from '@app/src/stores/account/account-store';
import Spacer from '@app/src/components/controllers/spacer/spacer';
import TextInput from '@app/src/components/controllers/text-input/text-input';
import useHandleTransfer from './hooks/useHandleTransfer';
import Button from '@app/src/components/controllers/button/button';

const TransferScreen = ({navigation, route}: any) => {
  const {handleTransferInput, transferAmount, isBtnDisabled} =
    useHandleTransfer();
  const {name, acount}: IContact = route.params;
  const transferLimitText = `הכנס סכום עד ${accountStore.info.balance} ש״ח`;
  const confirmTransferBtn = () => navigation.push('Error');

  return (
    <Screen scroll={false}>
      <Box style={Styles.contactInfoWrapper}>
        <Text type="bold">{name}</Text>
        <Text>{acount}</Text>
      </Box>
      <Spacer size="xlg" />
      <Box style={Styles.transferWrapper}>
        <Text>{transferLimitText}</Text>
        <TextInput
          value={transferAmount}
          placeholder="הכנס סכום להעברה"
          keyboardType="number-pad"
          onChangeText={handleTransferInput}
        />
      </Box>
      <Spacer size="xlg" />
      <Box style={Styles.transferBtnWrapper}>
        <Button disabled={isBtnDisabled} onPress={confirmTransferBtn}>
          בצע העברה
        </Button>
      </Box>
    </Screen>
  );
};

export default TransferScreen;
