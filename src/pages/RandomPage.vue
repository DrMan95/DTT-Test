<template>
  <div>
    <div>
      <h3>Random Location</h3>
      <button @click="SelectRandomRecords">Next</button>
      <p v-if="responseAvailable">
        <b-list-group>
          <b-list-group-item>
            <b>ID</b>
            : {{ selectedRecord.id }}
          </b-list-group-item>
          <b-list-group-item>
            <b>Name</b>
            : {{ selectedRecord.name }}
          </b-list-group-item>
          <b-list-group-item>
            <b>Type</b>
            : {{ selectedRecord.type }}
          </b-list-group-item>
          <b-list-group-item>
            <b>Dimension</b>
            : {{ selectedRecord.dimension }}
          </b-list-group-item>
        </b-list-group>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RandomPage",
  components: {},
  data() {
    return {
      responseAvailable: false,
      result: [],
      locations: [],
      selectedRecord: undefined,
    };
  },

  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    SelectRandomRecords() {
      this.selectedRecord = this.locations[
        this.getRandomInt(this.locations.length)
      ];
    },
    async getRandomItems() {
      this.responseAvailable = false;
      var url = "https://rickandmortyapi.com/api/location";
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
            this.result.push(response);
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
      this.SelectRandomRecords();
      this.responseAvailable = true;
    },
  },
  mounted: function() {
    this.getRandomItems();
  },
};
</script>

<style scoped></style>
