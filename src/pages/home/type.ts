export type StoreState = {
  home: IHomestore
  loading: boolean
}

export type StoreDispatch = {
  getData: () => any
}

export type OwnProps = {}

export type Props = StoreState & StoreDispatch & OwnProps

export type State = {
  readonly isFetched: boolean
}
