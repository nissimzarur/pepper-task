import {makeAutoObservable, runInAction} from 'mobx';
import IAccountInfo from './interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IContact} from '@app/src/api/contacts/interfaces';

class AccountStore {
  public info: IAccountInfo = {balance: 0, number: ''};
  public contacts: IContact[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setAccountInfo(info: Partial<IAccountInfo>) {
    if (!info) return;

    if (info?.balance) {
      runInAction(() => {
        this.info.balance = info.balance || 0;
        AsyncStorage.setItem('balance', String(this.info.balance));
      });
    }

    if (info?.number) {
      runInAction(() => {
        this.info.number = info.number || '';
        AsyncStorage.setItem('number', this.info.number);
      });
    }
  }
  updateBalance(action: 'add' | 'reduce', amount: number) {
    if (!amount) return;

    runInAction(() => {
      if (action === 'add') this.info.balance += amount;
      if (action === 'reduce') this.info.balance -= amount;
    });
  }

  setContacts(contacts: IContact[]) {
    if (!contacts || !contacts.length) return;

    runInAction(() => {
      this.contacts = contacts;
    });
  }
}
export default new AccountStore();
