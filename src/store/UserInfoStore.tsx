import { action, observable, configure, runInAction } from 'mobx'
import http from '../utils/http'

configure({ enforceActions: 'observed'});

class UserInfoStore {
  @observable departments: string[]	 = []
  @observable linhui_users: string[] = []

  @action.bound
  async setUserInfo() {
    const { result: { departments, linhui_users }} = await http.get('/inner/selections')
    runInAction(()=> {
      this.departments = departments
      this.linhui_users = linhui_users
    })
  }

  @action.bound
  setIslinhui(user: string[]) {
    this.linhui_users = user
  }
}
export default UserInfoStore;
