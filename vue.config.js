const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  publicPath: '/recriando-youtube'
}

chainWebpack: config => {
  config.module.rule('eslint').use('eslint-loader').options({
    fix: true
  })
}