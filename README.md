
基于 axios 的网络请求前端缓存，代理 axios 将请求的结果缓存在一个Map对象上。 

建议：

+ 应只对不常变动的数据进行缓存，如报表，资讯之类，用户不需要对这些数据进行增删改。

### Install

```sh
npm install --save axios-map-cache
```

### Usage

#### es6

```js
import { axiosCache as axios } from 'axios-map-cache'

// 之后像使用 axios 一样使用
```

#### commonJS

```js
const { axiosCache: axios } = require('axios-map-cache')
```

### Example

使用 `axios.create()` 创建实例的用法

```js
// http/index.js
import { axiosCache as axios } from 'axios-map-cache'

// 同 axios 一样的使用
const instance = axios.create({
  timeout: 10 * 1000,
})

instance.defaults.baseURL = './'

export default instance

// Usage
import axios from 'http/index.js'

export function getData() {
  return axios({
    url: '/path/api',
    method: 'get'
  })
}
```

直接使用 `axios` 的用法

```js
// http/index.js
import { axiosCache as axios } from 'axios-map-cache'

axios.defaults.baseURL = './'

export default axios

// Usage
import axios from 'http/index.js'

export function getData() {
  return axios({
    url: '/path/api',
    method: 'get'
  })
}
```

### Introduction

以 requestConfig 请求配置做为 Map cache 的 key 值，如果 requestConfig 配置一样视为同一个请求，如果缓存中有，就从缓存中取出结果返回，如果没有就发送请求并缓存结果。

#### 设置需要缓存的请求

```js
axios({
  url: '/path/api',
  method: 'post', // 默认只缓存get请求，如果想缓存post请求，需要传入参数 isCache
  isCache: true,
})

// 之后的请求

// 命中缓存
axios({
  url: '/path/api',
  method: 'post',
  isCache: true,
})

// 不会命中缓存 也不会进行主动缓存 因为 isCache不是true
axios({
  url: '/path/api',
  method: 'post',
})

// 不会命中缓存 但是会进行主动缓存处理
// {
//   url: '/path/api',
//   method: 'post',
//   isCache: true,
//   data: {}
// }
axios.post('url', {}, { isCache: true });

// 会命中 axios.post('url', {}, { isCache: true }); 的缓存
axios({
  url: '/path/api',
  method: 'post',
  isCache: true,
  data: {},
})
```

### Cache API

Cache 的机制是在 axios 上增加一个 `axios.mapCache`，这是一个 `CacheModule` (自定义类) 对象，通过这个对象可以对缓存进行操作或配置。

#### setCacheConfig(config, options)

```js
axios.mapCache.setCacheConfig({ size: 30, showLog: true })
```

说明：
  + 默认 size 为 20，最大值为 50 条，如想设置一个大于 50 的值，除非传入 `options.force` 为 `true`。如 `axios.mapCache.setCacheConfig({ size: 100 }, { force: true })`
  + showLog: 默认不会在打印台输出缓存相关信息，设置为 true，会在打印台输出缓存相关信息(当前请求是否走缓存了、目前存在多少条缓存、缓存的key值)

#### getCacheConfig

```js
axios.mapCache.getConfig();
// 返回当前对缓存的配置
```

####  hasCache(cacheKey): boolean

判断某个配置的请求是否被缓存，返回一个布尔值。

```js
const requestConfig = {
  method: 'get',
  url: 'path/api/user'
}

axios(requestConfig);

axios.mapCache.hasCache(requestConfig) // true

axios.mapCache.hasCache({
  method: 'get',
  url: 'path/api/user'
}) // true

axios.mapCache.hasCache({
  method: 'get',
  url: 'path/api/data'
}) // false
```

#### setCache(cacheKey, data)

手动添加缓存

```js
axios.mapCache.setCache(1, { data: 'I am test data'});

axios.mapCache.hasCache(1); // true
axios.mapCache.getCache(1); // { data: 'I am test data'}

axios.mapCache.setCache({
  url: 'path/api/test',
  method: 'get'
}, { data: 'test data'}); // 手动设置缓存

axios.get('path/api/test'); // 命中缓存 不会发起网络请求
```

#### getCache(cacheKey)

根据 key 值读取对应的缓存，如果没有，返回 `null`

```js
axios.mapCache.getCache({
  method: 'get',
  url: 'path/api/user'
});
```

#### getCacheSize

返回当前缓存了多少条。

```js
axios.mapCache.getCacheSize()
```

#### removeCache(cacheKey)

根据 key 值删除对应的缓存。

```js
axios.mapCache.removeCache({
  method: 'get',
  url: 'path/api/user'
});
```

#### removeAllCache

清空所有缓存

```js
axios.mapCache.removeAllCache();
```

#### getShowLog():boolean

获取当前是否在控制台打印缓存相关输出

```js
axios.mapCache.getShowLog();
```

#### response._CACHE_FLAG

```js
const response = await axios({
  url: 'path/api',
  method: get
})

// 可以通过 response._CACHE_FLAG 来获知当前的数据是否是从缓存中取出来的
if (response._CACHE_FLAG) {
  // ...
}
```

### Demo

```sh
cd example

npm i

npm run serve:mock

# 所有的数据都是mock的，当开启 isCache 的时候，会发现数据会被缓存，再次请求的数据不会触发mock，因为不会触发网络请求
```