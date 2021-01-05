<template>
  <div class="hello">
    <ul>
      <li class="spec">
        <pre><code class="lang-js">
import { axiosCache as axios } from 'axios-cache'
const instance = axios.create({
  timeout: 10 * 1000
})

instance.defaults.baseURL = './'
export default instance

instance({method: 'get', url: 'xxx'})

// 以下示例是处于这样使用的场景
        </code></pre>
      </li>
      <li><button @click="handle(getList)"> 点击发送一个 axiosInstance({ method: 'get'} )请求 </button></li>
      <li><button @click="handle(getListP)"> 点击发送一个 axiosInstance({ method: 'post'} ) 请求 </button></li>
      <li><button @click="handle(getListC)"> 点击发送一个 axiosInstance({ method: 'get', isCache: true} ) 请求 </button></li>
      <li>使用别名调用 axiosInstance </li>
      <li><button @click="handle(mGetList)"> 点击发送一个 axiosInstance.get(url)请求 </button></li>
      <li><button @click="handle(mGetListP)"> 点击发送一个 axiosInstance.post(url) 请求 </button></li>
      <li><button @click="handle(mGetListC)"> 点击发送一个 axiosInstance.get(url, { isCache: true }) 请求 </button></li>
    </ul>
    <ul>
      <li class="spec">
              <pre><code class="lang-js">
import { axiosCache as axios } from 'axios-cache'

export default axios

axios({method: 'get', url: 'xxx'})
// 以下示例是处于这样使用的场景
        </code></pre>
      </li>
      <li><button @click="handle(getList2)"> 点击发送一个 axios({ method: 'get'} )请求 </button></li>
      <li><button @click="handle(getListP2)"> 点击发送一个 axios({ method: 'post'} ) 请求 </button></li>
      <li><button @click="handle(getListC2)"> 点击发送一个 axios({ method: 'get', isCache: true} ) 请求 </button></li>
      <li>使用别名调用 axios </li>
      <li><button @click="handle(mGetList2)"> 点击发送一个 axios.get(url)请求 </button></li>
      <li><button @click="handle(mGetListP2)"> 点击发送一个 axios.post(url) 请求 </button></li>
      <li><button @click="handle(mGetListC2)"> 点击发送一个 axios.get(url, { isCache: true }) 请求 </button></li>
    </ul>
  </div>
</template>

<script>
import {
  getList,
  getListP,
  getListC,
  mGetList,
  mGetListP,
  mGetListC
} from '@/api'

import {
  getList2,
  getListP2,
  getListC2,
  mGetList2,
  mGetListP2,
  mGetListC2
} from '@/api/index2'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    getList,
    getListP,
    getListC,
    getList2,
    getListP2,
    getListC2,
    mGetList,
    mGetListP,
    mGetListC,
    mGetList2,
    mGetListP2,
    mGetListC2,
    async handle (fn) {
      const res = await fn()
      console.log('页面收到的数据', res)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 10px 10px;
}
a {
  color: #42b983;
}

.hello {
  display: flex;
  justify-content: center;
}

code {
  text-align: left !important;
  padding: 1em 2em !important;
}

.spec code {
  height: 15em;
}
</style>
