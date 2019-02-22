import Taro, { Component, Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Image } from '@tarojs/components'
import './index.less'

interface IProps {
  example: IExampleStore
  loading: boolean
  getData: () => any
}

interface IState {
  readonly isFetched: boolean
}

class IndexPage extends Component<IProps, IState> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页',
  }

  readonly state: IState = {
    isFetched: false,
  }

  componentWillMount() {}

  componentDidMount() {
    this.props.getData().then(() => {
      this.setState({
        isFetched: true,
      })
    })
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { example, loading } = this.props
    const { isFetched } = this.state
    return (
      <View className='at-article'>
        <View className='at-article__content'>加载中:{loading ? '是' : '否'}</View>
        <View className='at-article__content'>默认值:{example.count}</View>
        <View className='at-article__content'>是否异步请求:{isFetched ? '是' : '否'}</View>
        <View className='at-article__h1'>这是一级标题这是一级标题</View>
        <View className='at-article__info'>2017-05-07&nbsp;&nbsp;&nbsp;这是作者</View>
        <View className='at-article__content'>
          <View className='at-article__section'>
            <View className='at-article__h2'>这是二级标题</View>
            <View className='at-article__h3'>这是三级标题</View>
            <View className='at-article__p'>
              这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </View>
            <View className='at-article__p'>这是文本段落。这是文本段落。</View>
            <Image
              className='at-article__img'
              src='https://jdc.jd.com/img/400x400'
              mode='widthFix'
            />
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state: IStore) => ({
  example: state.example,
  loading: state.loading.effects['example/fetch'],
})

const mapDispatchToProps = (dispatch: IDispatch) => ({
  getData: () =>
    dispatch({
      type: 'example/fetch',
    }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage)