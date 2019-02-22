/**
 * 全局状态
 */
interface IStore {
  loading: {
    effects: string[]
  }
  example: IExampleStore
}

interface IExampleStore {
  count: number
}

/**
 * dva异步方法调用
 */
type IDispatch = (object: { type: string; payload?: object; callback?: (res: any) => void }) => void

interface IEffectsAction {
  //参数
  payload?: any
  //回调
  callback?: (res?: any | boolean) => void
}
