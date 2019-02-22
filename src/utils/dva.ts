import { create } from 'dva-core'
import createLoading from 'dva-loading'

let app: any
let store: any
let dispatch: any

function createApp(opt: any) {
  app = create(opt)
  app.use(createLoading({}))

  if (!(global as any).registered) {
    opt.models.forEach(model => app.model(model))
  }

  ;(global as any).registered = true

  app.start()

  store = app._store
  app.getStore = () => store

  dispatch = store.dispatch

  app.dispatch = dispatch
  return app
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch
  },
}
