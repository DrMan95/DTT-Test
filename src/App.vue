<template>
  <div id="app">
    <Menu id="menu" />
    <router-view id="main"></router-view>
    <Footer id="footer" />
  </div>
</template>

<script>
import Menu from "./components/Menu";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Footer,
    Menu,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: blanchedalmond;
}
#menu {
  position: fixed;
  background-color: rgb(255, 223, 175);
  width: 100%;
}
#main {
  padding-top: 5%;
  overflow: hidden;
}
#footer {
  background-color: darkgoldenrod;
  color: white;
}
</style>
