export type IStoreState = {
  example: IExampleStore
  loading: boolean
}

export type IStoreDispatch = {
  getData: () => any
}

export type IOwnProps = {}

export type IProps = IStoreState & IStoreDispatch & IOwnProps

export type IState = {
  readonly isFetched: boolean
}
