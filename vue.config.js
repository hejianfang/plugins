// vue.config.js
const path = require("path");
module.exports = {
  devServer: {
    host: "0.0.0.0",
    port: 8088,
    https: false
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/assets/css/mixin.less")]
    }
  },
  parallel: require("os").cpus().length > 1,
  configureWebpack: {
    // 警告 webpack 的性能提示
    performance: {
      hints: false,
      // 入口起点的最大体积
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith(".js");
      }
    }
  }
};
