import {makeAutoObservable, runInAction} from 'mobx';
import IUser from './interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';

class UserStore {
  public loggedUser: IUser = {username: ''};

  constructor() {
    makeAutoObservable(this);
  }

  setUsername(username: string) {
    if (!username) return;

    runInAction(() => {
      this.loggedUser.username = username;
      AsyncStorage.setItem('username', this.loggedUser.username);
    });
  }
}
export default new UserStore();
