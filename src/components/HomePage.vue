<template>
  <div>
    <h1>Welcome to my Home page</h1>
    <br />
    <HourglassLoader v-if="!responseAvailable" :color="'coral'" />

    <div v-if="responseAvailable === true">
      <div v-for="(record, index) in records" :key="record">
        <Record @click="() => Show(index)" :record="record" />
      </div>
    </div>
    <div v-if="selectedRecord">
      <h3>Details</h3>
      <p id="details">{{ selectedRecord }}</p>
      <button @click="selectedRecord = undefined">Close</button>
    </div>
  </div>
</template>

<script>
import Record from "./Record";
import HourglassLoader from "@bit/joshk.vue-spinners-css.hourglass-loader";

export default {
  name: "HomePage",
  components: {
    Record,
    HourglassLoader,
  },
  data() {
    return {
      responseAvailable: false,
      result: [],
      records: [],
      selectedRecord: undefined,
    };
  },
  methods: {
    Show(index) {
      this.selectedRecord = this.records[index];
    },
  },
  created: function() {},
  mounted: async function() {
    this.responseAvailable = false;

    for (var i = 0; i < 10; i++) {
      await fetch("https://api.publicapis.org/random", {
        method: "GET",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            alert(
              "Server returned " + response.status + " : " + response.statusText
            );
          }
        })
        .then((response) => {
          this.records.push(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    this.responseAvailable = true;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
