import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./source/less/index.less";
// import errImg from "./assets/err.png";
import loadingImg from "./assets/loading.gif";

import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload);

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: errImg,
  loading: loadingImg,
  attempt: 3
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
