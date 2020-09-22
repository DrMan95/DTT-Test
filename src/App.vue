<template>
  <div id="app">
    <Menu id="menu" />
    <router-view v-if="responseAvailable" id="main" :allData="allDataComputed"></router-view>
    <Footer id="footer" :allData="allDataComputed" />
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
      characters: [],
      locations: [],
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

    async getCharacters() {
      var url = "https://rickandmortyapi.com/api/character/";
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
              this.characters.push(element);
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

    async getLocations() {
      var url = "https://rickandmortyapi.com/api/location/";
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
              this.locations.push(element);
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
        characters: this.characters,
        locations: this.locations,
      };
    },
  },
  mounted: function () {
    this.getEpisodes();
    this.getCharacters();
    this.getLocations();
    this.responseAvailable = true;
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  min-height: 100vh;
  text-align: center;
  align-items: center;
  background-color: blanchedalmond;
}
#menu {
  position: fixed;
  z-index: 1;
  background-color: rgb(255, 223, 175);
  width: 100%;
}
#main {
  padding-top: 75px;
  overflow: hidden;
  padding-bottom: 200px;
}
#footer {
  background-color: gray;
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
}
.list-group-item {
  background-color: blanchedalmond !important;
}
</style>
