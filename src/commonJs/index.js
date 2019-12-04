/**
 * @Author: hejianfang
 * @Description:
 * @date 2019-12-04
 * @Varsion: 1.0
 * @Last modified by: hejian
 * @Last modified time: 2019-12-04
 */
const requireCommon = require.context(".", false, /.js$/);

const install = Vue => {
  if (install.installed) return;
  install.installed;
  requireCommon.keys().forEach(r => {
    let name = r.replace(/^\.\//, "").replace(/\.\w+$/, "");
    if (name === "index") return;
    let commonName = "$" + [name];
    Vue.prototype[commonName] = requireCommon(r).default;
  });
};
export default {
  install
};
