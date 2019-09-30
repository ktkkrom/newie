import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import key from '../key.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    news: [],
    languages: [],
    word: ''
  },
  mutations: {
    searchInfo(state, word) {
      state.word = word
    },
    setData(state, data) {
      state.data = data
    },
    setNews(state, news) {
      state.news = news
    },
    setLang(state, languages) {
      state.languages = languages
    }
  },
  actions: {
    loadArticles(context, word) {
      context.commit('searchInfo', word)
      axios.get(`https://newsapi.org/v2/everything?qInTitle=${word}&apiKey=${key}`)
        .then(response => {
          let data = response.data.articles
          context.commit('setData', data)
        })
        .catch(error => {
          console.log(error);
        })
    },
    loadNews(context, word) {
      context.commit('searchInfo', word)
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${word}&apiKey=${key}`)
        .then(response => {
          let news = response.data.articles
          context.commit('setNews', news)
        })
        .catch(error => {
          console.log(error);
        })
    },
    loadLanguages(context, word) {
      context.commit('searchInfo', word)
      axios.get(`https://newsapi.org/v2/top-headlines?country=${word}&apiKey=${key}`)
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