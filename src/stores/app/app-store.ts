import {makeAutoObservable, runInAction} from 'mobx';

class AppStore {
  public error: string = "";
  public loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(loading: boolean) {
    runInAction(() => {
      this.loading = loading;
    });
  }

  setError(error: string) {
    if (!error || !error.length) return;

    runInAction(() => {
      this.error = error;
    });
  }

  clearError(){
    runInAction(()=>{
      this.error = ""
    })
  }
}
export default new AppStore();
