import axios from '@/http'

export function getList () {
  return axios({
    url: '/api',
    method: 'GET'
  })
}

export function getListP () {
  return axios({
    url: '/api',
    method: 'POST'
  })
}

export function getListC () {
  return axios({
    url: '/api',
    method: 'get',
    isCache: true
  })
}

export function mGetList () {
  return axios.get('/api')
}

export function mGetListP () {
  return axios.post('/api')
}

export function mGetListC () {
  return axios.get('/api', {
    isCache: true
  })
}
