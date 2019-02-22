/**
 * 全局状态
 */
declare interface IStore {
  loading: {
    effects: string[]
  }
  example: IExampleStore
}

declare interface IExampleStore {
  count: number
}

/**
 * dva异步方法调用
 */
declare type IDispatch = (object: {
  type: string
  payload?: object
  callback?: (res: any) => void
}) => void

declare interface IEffectsAction {
  //参数
  payload?: any
  //回调
  callback?: (res?: any | boolean) => void
}
