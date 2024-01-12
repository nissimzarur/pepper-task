import React from 'react';
import Screen from '@app/src/components/base-screen/base-screen';
import useNavigationHeader from '@app/src/hooks/useNavigationHeader';
import accountStore from '@app/src/stores/account/account-store';
import TextInput from '@app/src/components/controllers/text-input/text-input';
import Box from '@app/src/components/box/box';
import Styles from './contacts-screen.styles';
import {FlatList} from 'react-native';
import useContactItem from './hooks/useContactItem';
import {observer} from 'mobx-react';
import Spacer from '@app/src/components/controllers/spacer/spacer';
import useSearchContact from './hooks/useSearchContact';
import Button from '@app/src/components/controllers/button/button';

const ContactsScreen = observer(({navigation}: any) => {
  const title = `${accountStore.info.number}`;
  useNavigationHeader(navigation, {title});
  const {onSearch, contactsList} = useSearchContact();
  const {renderContactItem} = useContactItem(navigation);

  const addContactBtn = () => navigation.push('NewContact');

  return (
    <Screen scroll={false}>
      <Box style={Styles.searchWrapper}>
        <TextInput placeholder="חפש מוטב" onChangeText={onSearch} />
      </Box>
      <Spacer size="lg" />
      <FlatList
        data={contactsList}
        renderItem={renderContactItem}
        keyExtractor={item => item.acount}
        contentContainerStyle={Styles.listContainerStyle}
      />
      <Spacer size="lg" />
      <Box style={Styles.addContactWrapper}>
        <Button status="success" size="large" onPress={addContactBtn}>
          הוסף מוטב
        </Button>
      </Box>
    </Screen>
  );
});

export default ContactsScreen;
