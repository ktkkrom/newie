<template>
<v-app>
  <v-content>
    <Header />
    <router-view></router-view>
  </v-content>
  </v-app-bar>
</v-app>
</template>

<script>
import Header from './components/Header';
export default {
  name: 'App',
  components: {
    Header
  },
  data: () => ({
    //
  }),
};
</script>
