import { AxiosCacheRequestConfig, CacheConfig, SetConfigParam } from '../../index';
import { CACHE_MAX_SIZE, CACHE_DEFAULT_SIZE } from '../utils';

const isEqual = require('lodash/isEqual');

// 将 methods: 'GET' 和 method: 'get' 转换为一致
function formatConfigMethod(key: AxiosCacheRequestConfig) {
  if (key?.method) {
    return {
      ...key,
      method: key.method.toLowerCase()
    }
  }
  return key
}

function compare(key: AxiosCacheRequestConfig, otherKey: AxiosCacheRequestConfig ) {
  return isEqual(formatConfigMethod(key), formatConfigMethod(otherKey))
}

const storeSymbol = Symbol('store');
const configSymbol = Symbol('config');

const defaultConfig: CacheConfig = {
  size: 20,
  showLog: false,
}

class CacheModule {

  constructor() {
    this[storeSymbol] = new Map();
    this[configSymbol] = defaultConfig;
  }

  setCacheConfig(config: CacheConfig, param?: SetConfigParam) {
    this[configSymbol] = config;
    if (!param?.force) { // 不是强制设置，则修正size最大为50
      this[configSymbol].size = Math.min(config.size || CACHE_DEFAULT_SIZE, CACHE_MAX_SIZE)
    }
  }

  getCacheConfig(): CacheConfig {
    return this[configSymbol];
  }

  hasCache(cacheKey: AxiosCacheRequestConfig): boolean {
    return [...this[storeSymbol].keys()].filter(key => compare(key, cacheKey)).length === 1;
  }

  setCache(cacheKey:AxiosCacheRequestConfig, data: any) {
    if (this[storeSymbol].size >= (this[configSymbol].size)) {
      const key0 = [...this[storeSymbol].keys()][0];
      this[storeSymbol].delete(key0);
    }
    this[storeSymbol].set(cacheKey, data);
  }

  getCache(cacheKey: AxiosCacheRequestConfig): any {
    let result = null;
    // 找到对应的 config
    [...this[storeSymbol].keys()].forEach(key => {
      if (compare(key, cacheKey)) {
        result = this[storeSymbol].get(key);
      }
    })
    return result;
  }

  getCacheSize(): number {
    return this[storeSymbol].size;
  }

  getShowLog(): boolean {
    return this[configSymbol].showLog;
  }

  removeCache(cacheKey: AxiosCacheRequestConfig) {
    // 找到对应的 config
    [...this[configSymbol].keys()].forEach(key => {
      if (compare(key, cacheKey)) {
        this[configSymbol].delete(key);
      }
    })
  }

  removeAllCache() {
    this[configSymbol].clear();
  }
}

export default CacheModule;