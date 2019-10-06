import VueRouter from 'vue-router';
import SearchByWord from './components/pages/SearchByWord.vue';
import TopHeadlines from './components/pages/TopHeadlines.vue';
import Categories from './components/pages/Categories.vue';
import Language from './components/pages/Language.vue';
import Main from './components/pages/Main.vue';

export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: {
        name: "Main"
      }
    },
    {
      path: '/articles',
      component: SearchByWord,
      name: "SearchByWord"
    },
    {
      path: '/headlines',
      component: TopHeadlines,
      name: "TopHeadlines"
    },
    {
      path: '/categories',
      component: Categories,
      name: "Categories"
    },
    {
      path: '/languages',
      component: Language,
      name: "Language"
    },
    {
      path: '/main',
      component: Main,
      name: "Main"
    }
  ]
});