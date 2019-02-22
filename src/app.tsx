import '@tarojs/async-await'
import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import dva from '@utils/dva'
import 'taro-ui/dist/style/index.scss'
import models from '@models/index'
import IndexPage from '@pages/index'
import './app.less'

const dvaApp = dva.createApp({
  initialState: {},
  models,
})

const store = dvaApp.getStore()

class App extends Component {
  config: Config = {
    pages: ['pages/index/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    return (
      <Provider store={store}>
        <IndexPage />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
