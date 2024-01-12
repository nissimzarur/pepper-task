import {View, Text} from 'react-native';
import React, {useLayoutEffect} from 'react';
import getContacts from '@app/src/api/contacts/get-contacts';
import appStore from '@app/src/stores/app/app-store';
import accountStore from '@app/src/stores/account/account-store';

const useGetContacts = () => {
  useLayoutEffect(() => {
    (async () => {
      const {contacts} = await getContacts().catch(error => {
        appStore.setError(error);
        appStore.setLoading(false);
        throw false;
      });

      if(contacts && contacts.length){
        accountStore.setContacts(contacts);
      }
    })();
  }, []);
};

export default useGetContacts;
