import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import HomePage from "./pages/HomePage";
import Categories from "./pages/Categories";
import AllCharacters from "./pages/AllCharacters";
import AllLocations from "./pages/AllLocations";
import DetailPage from "./pages/DetailPage";
import CharacterPage from "./pages/CharacterPage";
import LocationPage from "./pages/LocationPage";
import RandomPage from "./pages/RandomPage";

Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { name: "HomePage", path: "/", component: HomePage },
  { name: "Categories", path: "/Categories", component: Categories },
  { name: "DetailPage", path: "/DetailPage", component: DetailPage },
  { name: "RandomPage", path: "/RandomPage", component: RandomPage },
  {
    name: "CharacterPage",
    path: "/CharacterPage",
    component: CharacterPage,
  },
  {
    name: "AllCharacters",
    path: "/AllCharacters",
    component: AllCharacters,
  },
  {
    name: "LocationPage",
    path: "/LocationPage",
    component: LocationPage,
  },
  {
    name: "AllLocations",
    path: "/AllLocations",
    component: AllLocations,
  },
];

const router = new VueRouter({
  routes: routes,
});

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
