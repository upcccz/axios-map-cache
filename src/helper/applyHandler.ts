import { methods, Target } from '../utils';
import { AxiosResponse } from 'axios'

export interface CacheResponse extends AxiosResponse<any> {
  _CACHE_FLAG: boolean;
}

export default async function applyHandler(target: Target, ctx: any, args, axiosCache: Target, type?: string) {
  let _config;
  const isShowLog = axiosCache.mapCache.getShowLog();
  if (typeof args[0] === 'string') {
    // 参数格式 (url,data,config) => post put patch  
    if (type && methods.withData.includes(type)) {
      _config = {
        url: args[0],
        method: type,
        data: args[1],
        ...args[2]
      }
    } else {
      // 参数格式 (url,config) => delete get head options,  axios(url, config)
      _config = {
        url: args[0],
        method: type,
        ...args[1]
      }
    }
  } else {
    // 参数格式 (config) => axios.request(config)  axios(config)
    _config = args[0];
  }

  isShowLog && console.log('key -> config', _config);
  // 实例直接调用 axiosInstance(config), 默认只缓存GET请求，除非传入 isCache 为true
  if (_config.isCache) {
    if (axiosCache.mapCache.hasCache(_config)) {
      // 缓存有
      isShowLog && console.log('%c从缓存拿到的，数据', 'color:green',axiosCache.mapCache.getCache(_config));
      isShowLog && console.log('当前缓存size', axiosCache.mapCache.getCacheSize());
      return Promise.resolve(axiosCache.mapCache.getCache(_config))
    } else {
      isShowLog && console.log('%c缓存中没有', 'color:#b29400');
      let response = await target.apply(ctx, args);
      if (response.status === 200) {
        // 插入缓存标识
        response = {
          ...response,
          _CACHE_FLAG: true,
        } as CacheResponse;
        // 进行缓存
        isShowLog && console.log('请求成功插入缓存', response);
        axiosCache.mapCache.setCache(_config, response);
        return Promise.resolve(response);
      }
    }
  }
  isShowLog && console.log('%c不走缓存', 'color:red');
  return target.apply(ctx, args);
}