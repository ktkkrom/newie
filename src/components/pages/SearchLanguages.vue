<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
        <v-layout row wrap align-baseline>
          <v-flex xs12 md8 lg10>
          <v-select width="100"v-model="chosen" :options="['se','us','ua','de','ru','nl','il']"></v-select>
          </v-flex>
          <v-flex xs12 md4 lg2 text-center>
            <v-btn class="blue--text" @click="get()">search
            </v-btn>
          </v-flex>
        </v-layout>
  </v-container>
</template>


<script>
import vSelect from "vue-select"
export default {
  name: "SearchLanguages",
  data() {
    return {
      chosen: '',
    }
  },
  components: {
    vSelect
  },
  methods: {
    get() {
      this.$store.dispatch('loadLanguages', this.chosen)
    }
  },
}
</script>

<style lang="css" scoped>

</style>
