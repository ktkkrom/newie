<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-layout row wrap align-baseline>
      <v-flex xs12 md8 lg10>
        <v-select width="100" v-model="selected" :options="['entertainment','general','health','science','sports','technology']"></v-select>
      </v-flex>
      <v-flex xs12 md4 lg2 text-center>
        <v-btn class="blue--text" @click="search()">search
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
  </template>

</v-container>
<script>
import vSelect from "vue-select"
export default {
  name: "SearchCategories",
  data() {
    return {
      selected: '',
    }
  },
  components: {
    vSelect
  },
  methods: {
    search() {
      this.$store.dispatch('loadNews', this.selected)
    }
  },
}
</script>

<style lang="css" scoped>
</style>
