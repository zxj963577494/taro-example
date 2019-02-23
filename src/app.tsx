import '@tarojs/async-await'
import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import dva from '@utils/dva'
import 'taro-ui/dist/style/index.scss'
import models from '@models/index'
import HomePage from '@pages/home/'
import './app.less'

const dvaApp = dva.createApp({
  initialState: {},
  models,
})

const store = dvaApp.getStore()

class App extends Component {
  config: Config = {
    pages: ['pages/home/index'],
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
        <HomePage />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
