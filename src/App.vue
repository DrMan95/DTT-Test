<template>
  <div id="app">
    <Menu />
    <HomePage />
  </div>
</template>

<script>
import Menu from "./components/Menu";
import HomePage from "./components/HomePage";

export default {
  name: "App",
  components: {
    Menu,
    HomePage,
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
  margin-top: 20px;
}
</style>
