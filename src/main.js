import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import RandomPage from "./pages/RandomPage";
import CharacterPage from "./pages/CharacterPage";

Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { name: "HomePage", path: "/", component: HomePage },
  { name: "DetailPage", path: "/pages/DetailPage", component: DetailPage },
  { name: "RandomPage", path: "/pages/RandomPage", component: RandomPage },
  {
    name: "CharacterPage",
    path: "/pages/CharacterPage",
    component: CharacterPage,
  },
];

const router = new VueRouter({
  routes: routes,
});

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
