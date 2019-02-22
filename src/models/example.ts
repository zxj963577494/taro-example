import { queryExamples } from '@services/example'

const example = {
  namespace: 'example',

  state: {
    count: 1,
  },

  effects: {
    *fetch(action: IEffectsAction, { call, put }) {
      const { payload, callback } = action
      const response = yield call(queryExamples, payload)
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

export default example
