<template>
  <div id="app">
    <!-- Menu always on top and fixed -->
    <Menu id="menu" />
    <!--Here will render all the pages -->
    <router-view
      v-if="responseAvailable"
      id="main"
      :allData="allDataComputed"
    ></router-view>
    <!-- footer always at the bottom of all -->
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
    //Getting all the episodes from the API
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

    //Getting all the characters from the API
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

    //Getting all the locations from the API
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
    //merging all the data i am going to need at my child components, so i can pass them to them.
    allDataComputed() {
      return {
        episodes: this.episodes,
        characters: this.characters,
        locations: this.locations,
        video: this.videoEpisode,
      };
    },
  },
  //make sure the data are received before the elements are mounted.
  created: function() {
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
