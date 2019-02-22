import Taro from '@tarojs/taro'

/**
 * 代理服务
 */
const baseUrl = 'https://m.veryeast.cn/s'

const toRealUrl = uri => {
  // h5-new的是新接口，旧接口加上/client
  let url
  if (/^:/.test(uri)) {
    url = /^:/.test(uri) ? `${baseUrl}/${uri.replace(':', '')}` : uri
    if (url.indexOf('user/login') !== -1) {
      // url = url.replace('ve.mobile.interface','ve.sso')
    } else if (url.indexOf('h5-new/') !== -1) {
      // url = url.replace('ve.mobile.interface','ve.m')
    } else if (url.indexOf('data/options') !== -1) {
      // url = 'http://mobile.interface.veryeast.cn/data/options'
    }
  } else {
    url = uri
  }
  return url
}

/**
 * 请求参数处理
 * @param {object} params
 */
const parseBody = (params = {}) => {
  const auth = Taro.getStorageSync('m:auth') || {}

  if (Taro.getStorageSync('ticket') || auth.user_ticket) {
    Taro.setStorageSync('ticket', Taro.getStorageSync('ticket') || auth.user_ticket)
  }

  params = {
    ...params,
    user_ticket: Taro.getStorageSync('ticket'),
  }

  return params
}

export const request = (url, params) => {
  const paramsed = Object.assign(params, { appchannel: 'web' })
  const sUrl = toRealUrl(url)
  return Taro.request({
    url: sUrl,
    data: parseBody(paramsed),
    method: 'POST',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then(res => {
    const { statusCode, data } = res
    if (statusCode >= 200 && statusCode < 300) {
      return data
    }
    throw new Error(`网络请求错误，状态码${statusCode}`)
  })
}
