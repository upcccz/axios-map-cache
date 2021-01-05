module.exports = {
  chainWebpack (config) {
    const entry = config.entry('app')
    if (process.env.VUE_APP_MOCK === 'true') {
      entry
        .add('@/mock/index.js')
        .end()
    }
  }
}
