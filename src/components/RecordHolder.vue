<template>
  <div>
    <div>
      <b-button
        pill
        variant="outline-secondary"
        :pressed.sync="IDToggle"
        @click="SortByID"
      >Sort by ID</b-button>
      <b-button
        pill
        variant="outline-secondary"
        :pressed.sync="NameToggle"
        @click="SortByName"
      >Sort by Name</b-button>
    </div>
    <div v-for="(record, index) in sortedRecords" :key="record.id">
      <Record @click="() => Show(index)" :record="record" />
    </div>
    <b-link v-if="records.length == 10" @click="ShowAll = true">Show All</b-link>
    <b-link v-else @click="ShowAll = false">Show Less</b-link>
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
      selectedRecord: undefined,
      IDToggle: true,
      NameToggle: false,
      ShowAll: false,
    };
  },
  props: {
    recordsProp: undefined,
  },
  methods: {
    Show(index) {
      this.selectedRecord = this.sortedRecords[index];
      if (this.selectedRecord.dimension != undefined) {
        this.$router.push({
          name: "LocationPage",
          params: { data: this.selectedRecord },
        });
      } else if (this.selectedRecord.image != undefined) {
        this.$router.push({
          name: "CharacterPage",
          params: { data: this.selectedRecord },
        });
      } else {
        this.$router.push({
          name: "DetailPage",
          params: { data: this.selectedRecord },
        });
      }
    },
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
        return this.recordsProp;
      } else {
        return this.recordsProp.filter((elem, index) => index < 10);
      }
    },
    sortedRecords() {
      var array = [...this.records];

      if (this.IDToggle) {
        return array.sort((a, b) => {
          if (a.id < b.id) return -1;
          else if (a.id > b.id) return 1;
          else return 0;
        });
      } else {
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