<template>
  <div>
    <div>
      <div v-if="records.length > 1">
        <b-button
          pill
          variant="outline-secondary"
          :pressed.sync="IDToggle"
          @click="SortByID"
          >Sort by ID</b-button
        >
        <b-button
          pill
          variant="outline-secondary"
          :pressed.sync="NameToggle"
          @click="SortByName"
          >Sort by Name</b-button
        >
      </div>
    </div>
    <div v-for="(record, index) in sortedRecords" :key="record.id">
      <Record @click="() => Show(index)" :record="record" />
    </div>
    <b-link v-if="records.length == 10" @click="ShowAll = true"
      >Show All</b-link
    >
    <b-link v-else-if="records.length > 10" @click="ShowAll = false"
      >Show Less</b-link
    >
  </div>
</template>

<script>
import Record from "../components/Record";
export default {
  name: "RecordHolder",
  components: {
    Record,
  },
  data() {
    return {
      IDToggle: true,
      NameToggle: false,
      ShowAll: false,
    };
  },
  props: {
    recordsProp: undefined,
  },
  methods: {
    //depending on the selected record rendering the corresponding page at the router-view tag in the App.vue
    Show(index) {
      var selected = this.sortedRecords[index];
      if (selected.dimension != undefined) {
        this.$router.push({
          name: "LocationPage",
          params: { data: selected },
        });
      } else if (selected.image != undefined) {
        this.$router.push({
          name: "CharacterPage",
          params: { data: selected },
        });
      } else {
        this.$router.push({
          name: "DetailPage",
          params: { data: selected },
        });
      }
    },
    // toggleing between sorting the record by ID or name.
    SortByID() {
      this.IDToggle = true;
      this.NameToggle = false;
    },
    SortByName() {
      this.IDToggle = false;
      this.NameToggle = true;
    },
  },
  computed: {
    records() {
      if (this.ShowAll) {
        return this.recordsProp; //return all records to be showed
      } else {
        return this.recordsProp.filter((elem, index) => index < 10); //return the 10 first records to be showed
      }
    },
    //sorting depending on the choise of the user
    sortedRecords() {
      var array = [...this.records];
      if (this.IDToggle) {
        //by ID
        return array.sort((a, b) => {
          if (a.id < b.id) return -1;
          else if (a.id > b.id) return 1;
          else return 0;
        });
      } else {
        //by name
        return array.sort((a, b) => {
          if (a.name < b.name) return -1;
          else if (a.name > b.name) return 1;
          else return 0;
        });
      }
    },
  },
};
</script>

<style scoped>
a {
  color: black;
}
</style>
