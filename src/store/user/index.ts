import { Module } from 'vuex';
import { RootState } from '..';

export interface UserStateModel {
  isLogin: boolean;
  detail: any;
}


export default {
  namespaceed: true,
  state: {
    isLogin: false,
    detail: null
  } as UserStateModel,
  mutations: {
    login(state: UserStateModel, info: any) {
      state.isLogin = true;
      state.detail = info;
    },
    logout(state: UserStateModel) {
      state.isLogin = false;
      state.detail = null;
    }
  },
  actions: {}

} as Module<UserStateModel, RootState>