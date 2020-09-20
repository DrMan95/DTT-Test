<template>
  <div>
    <b-container class="bv-example-row" v-if="responseAvailable">
      <b-row>
        <b-col>
          <div v-for="(record, index) in seasons[0]" :key="record.id">
            <b-link @click="() => Show(index)" :record="record">{{record.episode}}</b-link>
          </div>
        </b-col>
        <b-col>
          <div v-for="(record, index) in seasons[1]" :key="record.id">
            <b-link @click="() => Show(index+11)" :record="record">{{record.episode}}</b-link>
          </div>
        </b-col>
        <b-col>
          <div v-for="(record, index) in seasons[2]" :key="record.id">
            <b-link @click="() => Show(index+21)" :record="record">{{record.episode}}</b-link>
          </div>
        </b-col>
        <b-col>
          <div v-for="(record, index) in seasons[3]" :key="record.id">
            <b-link @click="() => Show(index+31)" :record="record">{{record.episode}}</b-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Footer1",
  data() {
    return {
      s01: [],
      s02: [],
      s03: [],
      s04: [],
      responseAvailable: false,
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
      this.responseAvailable = true;
    },
  },
  mounted() {
    this.seperateSeasons();
  },
  computed: {
    seasons() {
      return [[...this.s01], [...this.s02], [...this.s03], [...this.s04]];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
