import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import key from '../key.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    news: [],
    languages: []
  },
  mutations: {
    setArticles(state, articles) {
      state.articles = articles
    },
    searchArticles(state, word) {
      state.word = word
    },
    setNews(state, news) {
      state.news = news
    },
    searchNews(state, category) {
      state.category = category
    },
    searchLang(state, name) {
      state.name = name
    },
    setLang(state, languages) {
      state.languages = languages
    }
  },
  actions: {
    loadArticles(context, word) {
      context.commit('searchArticles', word)
      axios.get(`https://newsapi.org/v2/everything?qInTitle=${word}&apiKey=${key}`)
        .then(response => {
          let articles = response.data.articles
          context.commit('setArticles', articles)
        })
        .catch(error => {
          console.log(error);
        })
    },
    loadNews(context, category) {
      context.commit('searchNews', category)
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`)
        .then(response => {
          let news = response.data.articles
          context.commit('setNews', news)
        })
        .catch(error => {
          console.log(error);
        })
    },
    loadLanguages(context, name) {
      context.commit('searchLang', name)
      axios.get(`https://newsapi.org/v2/top-headlines?country=${name}&apiKey=${key}`)
        .then(response => {
          let languages = response.data.articles
          context.commit('setLang', languages)
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
})