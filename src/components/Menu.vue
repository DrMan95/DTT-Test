<template>
  <div id="menu-div">
    <nav>
      <button>Home</button>
      <button>Categories</button>
      <button>Random</button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  width: 20%;
  height: 30px;
  color: aliceblue;
  font-weight: bold;
  background-color: rgb(255, 0, 0);
  margin: 0 1%;
}
#menu-div {
  background: inherit;
  width: 100%;
}
</style>
