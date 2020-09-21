<template>
  <div>
    <div>
      <h3>Location details</h3>
      <LocationDetails :location="location" :allData="allData" />
    </div>
  </div>
</template>

<script>
import LocationDetails from "../components/LocationDetails";
export default {
  name: "LocationPage",
  components: {
    LocationDetails,
  },
  props: {
    allData: undefined,
  },
  computed: {
    location() {
      return this.$route.params.data;
    },
  },
};
</script>
<style scoped>
#goBack {
  background-color: black;
  color: white;
}
</style>