import { AxiosStatic } from 'axios';
import axios from 'axios/dist/axios.min.js';
import handler from './helper/baseHandler';
import CacheModule from './core';
import { AxiosCache } from '../index';


function createAxiosCache(axiosInstance: AxiosStatic) {
  const cacheInstance = new CacheModule();
  Object.assign(axiosInstance, {
    _CACHE: cacheInstance,
  })
  return new Proxy(axiosInstance, handler);
}

const axiosCache = createAxiosCache(axios) as AxiosCache;

export {
  axiosCache,
  AxiosCache,
}
