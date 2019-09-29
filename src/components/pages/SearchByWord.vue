<template>
<v-container grid-list-xs,sm,md,lg,xl>
  <SearchBar />
  <v-layout row>
    <v-flex justify-center xs18 sm10 md8 lg6 v-for="item in articles">
      <v-hover v-slot:default="{ hover }">
        <v-card flat class="text-xs-center ma-3 justify-center" :elevation="hover ? 6 : 2" width="90%">
          <v-expansion-panels :accordion="accordion">
            <v-expansion-panel>
              <v-expansion-panel-header>
                <h3 class="text-center"> {{ item.title }} </h3>
              </v-expansion-panel-header>
              <div class="search-border">
                <v-expansion-panel-content>
                  <p class="search-border__content text-center">{{ item.description }}</p>
                  <span class="search-border__extra"> <span class="search-border__in">author:</span> {{ item.author }}</span> <br>
                  <span class="search-border__extra"><span class="search-border__in"> date: </span> {{ item.publishedAt }}</span>
                </v-expansion-panel-content>
              </div>
              <img position class="text-center" height="250" width="500" :src="item.urlToImage" alt="">
              <p class="blockquote"> <a v-bind:href="`${item.url}`"> {{ item.url }} </a></p>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>

</v-container>
</template>

<script>
import SearchBar from './SearchBar.vue'
import axios from 'axios';
import key from '../../key.js'
import {
  mapState
} from 'vuex'
export default {
  data: () => ({
    accordion: false
  }),
  name: 'SearchByWord',
  components: {
    SearchBar
  },
  computed: mapState([
    'articles'
  ])
}
</script>

<style lang="css" scoped>
h3 {
  border: 2px solid white;
  height: 40px;
}
.search-border__extra {
  margin-left: 25px;
}
.search-border__content {
  border: 2px solid white;
  margin-top: 40px;
  max-height: 150px;
  height: 100px;
  text-align: center;
}
.search-border__in {
  font-weight: bold
}
img {
 margin-left: 30px;
}
.blockquote {
  font-size: 13px;
}
</style>
