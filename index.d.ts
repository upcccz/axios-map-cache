import { AxiosStatic, AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';

export interface AxiosCacheRequestConfig extends AxiosRequestConfig {
  isCache?: boolean;
}

export interface AxiosCacheInstance extends AxiosInstance {
  (config: AxiosCacheRequestConfig): AxiosPromise;
  (url: string, config?: AxiosCacheRequestConfig): AxiosPromise;
  _CACHE: CacheModule;
}

export interface CacheConfig {
  size?: number;
  showLog?: boolean;
}

export interface SetConfigParam {
  force?: boolean;
}

export interface CacheModule {
  setCacheConfig(config: CacheConfig, param?: SetConfigParam): void;
  getCacheConfig(): CacheConfig;
  setCache(cacheKey:AxiosCacheRequestConfig, data: any): void;
  getCache(cacheKey: AxiosCacheRequestConfig): any
  getCacheSize(): number;
  getShowLog(): boolean;
  hasCache(cacheKey: AxiosCacheRequestConfig): boolean;
  removeCache(cacheKey: AxiosCacheRequestConfig): void;
  removeAllCache(): void;
}

export interface AxiosCache extends AxiosStatic, CacheModule {
  _CACHE: CacheModule;
  create(config?: AxiosRequestConfig): AxiosCacheInstance & CacheModule;
}


declare const axiosCache: AxiosCache;

// 和主文件保持一样的export写法
export {
  axiosCache,
  AxiosCache,
};