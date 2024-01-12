import React from 'react';
import Box from '@app/src/components/box/box';
import Text from '@app/src/components/controllers/text/text';
import { IContact } from '@app/src/api/contacts/interfaces';
import { Divider } from '@ui-kitten/components';
import Button from '@app/src/components/controllers/button/button';

const useContactItem = (navigation:any) => {
  const onContactPress = (contact:IContact)=>{
    navigation.push('Transfer', {...contact})
  }
  const renderContactItem = ({item}: {item: IContact}) => (
    <Button onPress={()=>onContactPress(item)}>
      <Text status='primary'>{item.name}</Text>
    </Button>
  );
  return {
    renderContactItem
  };
};

export default useContactItem;
