import { axios } from '@/http'

export function getList2 () {
  return axios({
    url: '/api',
    method: 'get'
  })
}

export function getListP2 () {
  return axios({
    url: '/api',
    method: 'POST'
  })
}

export function getListC2 () {
  return axios({
    url: '/api',
    method: 'get',
    isCache: true
  })
}

export function mGetList2 () {
  return axios.get('/api')
}

export function mGetListP2 () {
  return axios.post('/api')
}

export function mGetListC2 () {
  return axios.get('/api', {
    isCache: true
  })
}
