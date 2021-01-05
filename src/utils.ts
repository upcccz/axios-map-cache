import { AxiosCache, AxiosCacheInstance } from '../index';

export const methods = {
  withData: ['post', 'put', 'patch'],
  withNoData: ['delete', 'get', 'head', 'options', 'request']
}

export type Target = AxiosCache | AxiosCacheInstance;

export const CACHE_MAX_SIZE = 50;
export const CACHE_DEFAULT_SIZE = 20;
