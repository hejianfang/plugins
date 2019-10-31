/**
 * @Author: hejianfang
 * @Description:
 * @date 2019-10-31
 * @Varsion: 1.0
 * @Last modified by: hejian
 * @Last modified time: 2019-10-31
 */
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
const requireComponent = require.context("./plugin", true, /\.vue$/);
const install = Vue => {
  if (install.installed) return;
  install.installed;
  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = upperFirst(
      camelCase(fileName.replace(/^\.\//, "").replace(/\.\w+$/, ""))
    );
    let name =
      "h-" + componentName.slice(0, 1).toLowerCase() + componentName.slice(1);
    Vue.component(name, componentConfig.default || componentConfig);
  });
};

export default {
  install
};
