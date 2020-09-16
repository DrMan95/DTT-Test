<template>
  <div>
    <button name="button" @click="$emit('click')">{{ record.name }}</button>
  </div>
</template>

<script>
export default {
  name: "Record",
  props: {
    record: Object,
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style scoped>
button {
  width: 64%;
  height: 30px;
  background-color: coral;
}
button:hover {
  background-color: chocolate;
}
</style>
