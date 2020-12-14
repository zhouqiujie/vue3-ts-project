import { createStore, ModuleTree } from "vuex";
import UserModule, { UserStateModel } from './user'

export interface RootState {
  user: UserStateModel,

}

export default createStore<RootState>({
  state: {} as any,
  mutations: {},
  actions: {},
  modules: {
    user: UserModule
  }
});
