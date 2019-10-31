import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/main.less";
import plugin from "h-plugins";
import "h-plugins/dist/h-plugin.css";
Vue.use(plugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
