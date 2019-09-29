<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-switch v-model="showData" label="Top business headlines from USA"></v-switch>
    <v-layout row>
      <v-flex justify-center xs18 sm10 md8 lg6 v-for="article in articles" :key="article.id">
        <v-hover v-slot:default="{ hover }">
        <v-card  flat class="text-xs-center ma-3 justify-center" :elevation="hover ? 6 : 2" width="90%">
          <Article
            :title="article.title"
            :description="article.description"
            :urlToImage="article.urlToImage"
            :author="article.author"
            :publishedAt="article.publishedAt"
            :url="article.url"
            :content="article.content"
          />
        </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Article from './Article.vue';
import axios from 'axios';
import key from '../../key.js';
export default {
  name: 'Trending',
  components: {
    Article
  },
  data: () => ({
    articles: [],
    showData: false,
    key: key
  }),
  methods: {
    fetchTrending() {
      let trendType;
      if (this.showData) {
        trendType = 'us';
      } else {
        trendType = 'gb';
      }
      axios.get(`https://newsapi.org/v2/top-headlines?country=${trendType}&apiKey=${this.key}`)
        .then(response => this.articles = response.data.articles)
    }
  },
  mounted() {
    this.fetchTrending();
  },
  watch: {
    showData() {
      this.fetchTrending();
    }
  }
}
</script>


<style lang="css" scoped>
</style>
