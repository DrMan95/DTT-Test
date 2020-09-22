<template>
  <div>
    <div>
      <h3>Location details</h3>
      <LocationDetails :location="$route.params.data" :allData="allData" />
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
};
</script>

<style scoped></style>