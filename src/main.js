import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import VueSpinners from "vue-spinners";

Vue.use(VueSpinners);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
