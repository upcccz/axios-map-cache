import { axiosCache as axios } from 'axios-map-cache'

// const { axiosCache: axios } = require('axios-map-cache')

axios.mapCache.setCacheConfig({ size: 100, showLog: true })

const instance = axios.create({
  timeout: 10 * 1000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})

console.log('当前axiosCache配置为', instance.mapCache.getCacheConfig()) // 访问的等同是 axios.mapCache.getCacheConfig()
instance.defaults.baseURL = './'
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

instance.interceptors.request.use((config) => {
  // console.log(config)
  // if (config.method === 'test') {
  //   config.method = 'get'
  // }
  return config
}, (error) => {
  return Promise.reject(error)
})

export default instance

export {
  axios
}
