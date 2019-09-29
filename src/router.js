import VueRouter from 'vue-router';
import SearchByWord from './components/pages/SearchByWord.vue';
import Trending from './components/pages/Trending.vue';
import Categories from './components/pages/Categories.vue';
import Language from './components/pages/Language.vue';
import Main from './components/pages/Main.vue';

export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: {
        name: "SearchByWord"
      }
    },
    {
      path: '/articles',
      component: SearchByWord,
      name: "SearchByWord"
    },
    {
      path: '/trending',
      component: Trending,
      name: "Trending"
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