<template>
  <div>
    <button name="button" @click="$emit('click')">{{record.entries[0].API}}</button>
  </div>
</template>

<script>
export default {
  name: "Record",
  props: {
    record: Object,
  },
};
</script>

<style scoped>
button {
  width: 64%;
  height: 25px;
  background-color: coral;
}
</style>