<template lang="html">
  <div>
    <v-toolbar>
      <v-toolbar-title >
        <v-btn fab icon >
          <router-link class="indigo--text router-link" to="/main">
            <v-avatar size="45">
              <img width="10" src="https://img.icons8.com/bubbles/50/000000/news.png">
            </v-avatar>
          </router-link>
      </v-btn>
    </v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-toolbar-items>
      <v-btn text><router-link class="blue--text router-link" to="/main">Main</router-link></v-btn>
      <v-btn text ><router-link class="blue--text router-link" to="/articles">articles</router-link></v-btn>
      <v-btn text ><router-link class="blue--text router-link" to="/headlines">Top Headlines</router-link></v-btn>
      <v-btn text ><router-link class="blue--text router-link" to="/categories">Categories</router-link></v-btn>
      <v-btn text><router-link class="blue--text router-link" to="/languages">languages</router-link></v-btn>
    </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="css" scoped>
a {  text-decoration: none;}
</style>
