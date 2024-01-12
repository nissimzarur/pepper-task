import {View, Text} from 'react-native';
import React, {useState} from 'react';
import accountStore from '@app/src/stores/account/account-store';
import appStore from '@app/src/stores/app/app-store';

const useHandleTransfer = () => {
  const [transferAmount, setTransferAmount] = useState<string>('');

  const handleTransferInput = (input: string) => {
    if (!input) return setTransferAmount('0');

    const amount = parseInt(input);
    setTransferAmount(String(amount));

    if (amount > accountStore.info.balance)
      appStore.setError('סכום העברה אינו יכול להיות מעל סך היתרה');
  };

  return {
    handleTransferInput,
    transferAmount,
    isBtnDisabled: parseInt(transferAmount) > accountStore.info.balance,
  };
};

export default useHandleTransfer;
