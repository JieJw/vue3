const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/assets/css/variable.less')],
    })
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@components': resolve('./src/components'),
        src: resolve('./src'),
        modules: resolve('./src/modules'),
      },
    },
  },
  chainWebpack: (config) => {
    const types = ['vue', 'vue-modules']
    types.forEach((type) =>
      addStyleResource(config.module.rule('less').oneOf(type))
    )
  },
}
