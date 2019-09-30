<template lang="html">
<v-container grid-list-xs,sm,md,lg,xl>
  <SearchLanguages />
  <v-layout row>
    <v-flex justify-center xs18 sm10 md8 lg6 v-for="data in languages">
      <v-hover v-slot:default="{ hover }">
        <v-card flat class="text-xs-center ma-3 justify-center" :elevation="hover ? 6 : 2" width="90%">
          <v-expansion-panels :accordion="accordion">
            <v-expansion-panel>
              <v-expansion-panel-header>
                <h3> {{ data.title}} </h3>
              </v-expansion-panel-header>
              <div class="search-border">
                <v-expansion-panel-content>
                  <p> <span class="search-border__in"> date: </span> {{data.publishedAt}}</p>
                  <p>{{data.description}}</p>
                </v-expansion-panel-content>
              </div>
              <v-img :src="`${data.urlToImage}`" position class="text-center" height="250" width="500" ></v-img>
              <p class="blockquote">  <a v-bind:href="`${data.url}`"> {{ data.url }} </a></p>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import SearchLanguages from './SearchLanguages.vue'
import vSelect from "vue-select"
import axios from 'axios';
import {
  mapState
} from 'vuex'
import key from '../../key.js'
export default {
  data: () => ({
    accordion: false
  }),
  name: 'Language',
  components: {
    vSelect,
    SearchLanguages
  },
  computed: mapState([
    'languages'
  ])
}
</script>

<style lang="css" scoped>
h3 {
  border: 2px solid white;
  height: 40px;
  font-family: 'Lato', sans-serif, 700;
}
.blockquote {
  font-size: 10px;
  max-height: 10px;
}
.search-border__in {
  font-weight: bold
}
.text-center {
 margin-left: 30px;
}
</style>
