import { queryHomes } from '@services/home'

const home = {
  namespace: 'home',

  state: {
    count: 1,
  },

  effects: {
    *fetch(action: IEffectsAction, { call, put }) {
      const { payload, callback } = action
      const response = yield call(queryHomes, payload)
      yield put({
        type: 'save',
        payload: response,
      })
      if (callback) {
        callback(response)
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    },
  },
}

export default home
