import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/main.less";
import plugin from "./plugins";
Vue.use(plugin);
import common from "./commonJs";
Vue.use(common);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
