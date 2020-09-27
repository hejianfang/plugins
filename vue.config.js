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
  parallel: require("os").cpus().length > 1
};
