/* eslint-disable no-unused-vars */
import { AxiosCacheRequestConfig } from '../../index';
import applyHandler from './applyHandler';
import getHandler from './getHandler';
import { methods, Target } from '../utils';
import { AxiosStatic } from 'axios';

export default {
  apply: function (target: Target, ctx: any, args: any) {
    return applyHandler(target, ctx, args, target);
  },
  get: function(target: Target | AxiosStatic, propKey: string, receiver: Target) { // 这里的 receiver都是同一个 就是使用时  import { axiosCache as axios } from 'axios-cache' 的 axios
    if (propKey === 'create') {
      // 代理 create 返回的实例
      return (config?: AxiosCacheRequestConfig) => {
        return new Proxy(target[propKey](config), {
          apply: (target: Target, ctx: any, args: any) => {
            return applyHandler(target, ctx, args, receiver);
          },
          get: (target: Target, propKey: string) => {
            // 向实例暴露_CACHE
            if (propKey === '_CACHE') {
              return receiver._CACHE;
            }

            if (methods.withData.includes(propKey as string) || methods.withNoData.includes(propKey as string)) {
              return getHandler(target, propKey, receiver);
            }

            return Reflect.get(target, propKey);
          }
        });
      }
    }
    if (methods.withData.includes(propKey as string) || methods.withNoData.includes(propKey as string)) {
      return getHandler(target as Target, propKey, receiver);
    }
    
    return Reflect.get(target, propKey);
  }
}