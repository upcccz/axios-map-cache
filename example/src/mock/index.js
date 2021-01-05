import Mock from 'mockjs'

Mock.setup({
  timeout: 100
})

function apiMock () {
  return Mock.mock({
    code: 0,
    message: 'success',
    'data|6': [
      {
        id: '@guid',
        name: '@cname()'
      }
    ]
  })
}

Mock.mock(new RegExp('/api'), apiMock)
