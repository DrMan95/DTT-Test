<template>
  <div id="app">
    <Menu id="menu" />
    <router-view v-if="responseAvailable" id="main" :allData="allDataComputed"></router-view>
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
  data() {
    return {
      episodes: [],
      responseAvailable: false,
    };
  },
  methods: {
    async getEpisodes() {
      var url = "https://rickandmortyapi.com/api/episode";
      do {
        var hasNextPage = false;
        await fetch(url, {
          method: "GET",
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              alert(
                "Server returned " +
                  response.status +
                  " : " +
                  response.statusText
              );
            }
          })
          .then((response) => {
            response.results.forEach((element) => {
              this.episodes.push(element);
            });
            hasNextPage = response.info.next != null;
            if (hasNextPage) {
              url = response.info.next;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } while (hasNextPage);
    },
  },
  computed: {
    allDataComputed() {
      return {
        episodes: this.episodes,
      };
    },
  },
  mounted: function () {
    this.getEpisodes();
    this.responseAvailable = true;
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
