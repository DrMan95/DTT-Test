<template>
  <div>
    <p>
      <b-list-group>
        <b-list-group-item>
          <b>ID</b>
          : {{ location.id }}
        </b-list-group-item>
        <b-list-group-item>
          <b>Name</b>
          : {{ location.name }}
        </b-list-group-item>
        <b-list-group-item>
          <b>Type</b>
          : {{ location.type }}
        </b-list-group-item>
        <b-list-group-item>
          <b>Residents</b>
          <RecordHolder
            v-if="CharactersComputed.length > 0"
            :recordsProp="CharactersComputed"
          />
          <p v-else>This Planet has no residents.</p>
        </b-list-group-item>
        <b-list-group-item>
          <b>Created</b>
          : {{ location.created }}
        </b-list-group-item>
      </b-list-group>
    </p>
  </div>
</template>

<script>
import RecordHolder from "../components/RecordHolder";

export default {
  name: "LocationDetails",
  props: {
    location: undefined,
    allData: undefined,
  },
  components: {
    RecordHolder,
  },
  computed: {
    //find the characters the are from this location, from the locations array.
    characters() {
      var tmp;
      var characters = [];
      for (var i = 0; i < this.location.residents.length; i++) {
        tmp = this.location.residents[i].split("/");
        characters.push(this.allData.characters[tmp[tmp.length - 1] - 1]);
      }
      return characters;
    },
    CharactersComputed() {
      return this.characters;
    },
  },
};
</script>
<style scoped></style>
