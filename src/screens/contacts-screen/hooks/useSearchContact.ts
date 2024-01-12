import React, {useState} from 'react';
import accountStore from '@app/src/stores/account/account-store';
import {IContact} from '@app/src/api/contacts/interfaces';

const useSearchContact = () => {
  const contacts = accountStore.contacts;
  const [filteredContacts, setFilteredContacts] =
    useState<IContact[]>(contacts);

  const onSearch = (contactValue: string) => {
    if (!contactValue.length) return setFilteredContacts(contacts);

    const tempContacts = contacts.filter(contact =>
      contact.name.includes(contactValue),
    );

    setFilteredContacts(tempContacts);
  };

  return {
    contactsList: filteredContacts,
    onSearch,
  };
};

export default useSearchContact;
