// console.log('构建NODE_ENV：' + process.env.NODE_ENV)
// console.log('构建VUE_APP_NODE_ENV：' + process.env.VUE_APP_NODE_ENV)
const CompressionWebpackPlugin = require("compression-webpack-plugin");
var path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
// 使用 webpack
var webpack = require('webpack')
var isproduction = function () {
  return process.env.VUE_APP_NODE_ENV === 'production' || process.env.VUE_APP_NODE_ENV === 'productionTest'
}
var assetsPath = function (_path) {
  const assetsSubDirectory = isproduction() ? "static" : "static"
  return path.posix.join(assetsSubDirectory, _path)
}
module.exports = {
  baseUrl: isproduction() ? "./" : "/",
  assetsDir: "static",
  //修改全局路径
  chainWebpack: (config) => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
    if (isproduction()) {
      var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
      config.plugin("webpack-report").use(BundleAnalyzerPlugin, [{}]);
    }
  },
  productionSourceMap: false,
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    // sourceMap: false,
    // css预设器配置项
    // loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    // modules: false
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json']
    },
    output: {
      filename: assetsPath('js/[name].file.[hash:6].js'),
      chunkFilename: assetsPath('js/[name].chunk.[hash:6].js')
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
        'jWeixin': 'weixin-js-sdk',
        'pubsub': 'pubsub-js'
      }),
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(js|css)$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  }
}