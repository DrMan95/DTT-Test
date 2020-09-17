<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div v-for="(record, index) in s01" :key="record.name">
            <b-link @click="() => Show(index)" :record="record">{{record.episode}}</b-link>
          </div>
        </b-col>
        <b-col>
          <div v-for="(record, index) in s02" :key="record.name">
            <b-link @click="() => Show(index+11)" :record="record">{{record.episode}}</b-link>
          </div>
        </b-col>
        <b-col>
          <div v-for="(record, index) in s03" :key="record.name">
            <b-link @click="() => Show(index+21)" :record="record">{{record.episode}}</b-link>
          </div>
        </b-col>
        <b-col>
          <div v-for="(record, index) in s04" :key="record.name">
            <b-link @click="() => Show(index+31)" :record="record">{{record.episode}}</b-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      s01: [],
      s02: [],
      s03: [],
      s04: [],
      selectedRecord: undefined,
    };
  },
  props: {
    allData: undefined,
  },
  components: {},
  methods: {
    Show(index) {
      this.selectedRecord = this.allData.episodes[index];
      this.$router.push({
        name: "DetailPage",
        params: { data: this.selectedRecord },
      });
    },
    seperateSeasons() {
      for (var i = 0; i < this.allData.episodes.length; i++) {
        if (this.allData.episodes[i].episode[2] == "1") {
          this.s01.push(this.allData.episodes[i]);
        } else if (this.allData.episodes[i].episode[2] == "2") {
          this.s02.push(this.allData.episodes[i]);
        } else if (this.allData.episodes[i].episode[2] == "3") {
          this.s03.push(this.allData.episodes[i]);
        } else if (this.allData.episodes[i].episode[2] == "4") {
          this.s04.push(this.allData.episodes[i]);
        }
      }
    },
  },
  created() {
    this.seperateSeasons();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
