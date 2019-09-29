<template lang="html">
  <div>
  <SearchCategories />
  <v-layout row>
    <v-flex justify-center xs16 sm8 md6 lg4 v-for="info in news">
      <v-card flat class="text-xs-center ma-3" height="98%">
        <h3> {{ info.name}} </h3>
        <p> {{ info.id}} </p>
        <p> {{info.category}}</p>
        <p>{{info.description}}</p>
        <p>country:{{info.country}}</p>
        <p>language: {{info.language}}</p>
        <p class="blockquote">  <a v-bind:href="`${info.url}`"> {{ info.url }} </a></p>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import SearchCategories from './SearchCategories.vue'
import vSelect from "vue-select"
import axios from 'axios';
import {
  mapState
} from 'vuex'
import key from '../../key.js'
export default {
  name: 'Categories',
  components: {
    vSelect,
    SearchCategories
  },
  computed: mapState([
    'news'
  ])
}
</script>

<style lang="css" scoped>
</style>
