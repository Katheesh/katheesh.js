import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toasted from 'vue-toasted';
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(Toasted)
Vue.config.productionTip = false;


new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
