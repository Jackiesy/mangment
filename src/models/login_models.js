import { routerRedux } from 'dva/router';
import { login_services } from '../services/login_services';
import $$ from 'cmn-utils';

export default {
  namespace: 'login_services',

  state: {
    loggedIn: false,
    message: '',
    user: {},
  },

  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        if (pathname.indexOf('/sign/login_services') !== -1) {
          $$.removeStore('user');
        }
      });
    }
  },

  effects: {
    *login({ payload }, { call, put }) {
      const { status, message, data } = yield call(login_services, payload);
      if (status) {
        $$.setStore('user', data);
        yield put(routerRedux.replace('/home'));
      } else {
        yield put({
          type: 'loginError',
          payload: { message }
        });
      }
    },
    *logout(_, { put }) {}
  },

  reducers: {
    loginSuccess(state, { payload }) {
      return {
        ...state,
        loggedIn: true,
        message: '',
        user: payload
      };
    },
    loginError(state, { payload }) {
      return {
        ...state,
        loggedIn: false,
        message: payload.message
      };
    },
  }
};
