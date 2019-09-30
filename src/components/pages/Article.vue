<template lang="html">
  <v-expansion-panels :accordion="accordion">
    <v-expansion-panel>
      <v-expansion-panel-header>
        <h3 class="text-center"> {{ title }} </h3>
        </v-expansion-panel-header>
        <div class="search-border">
          <v-expansion-panel-content>
            <p class="search-border__content text-center"> {{ description }} </p>
            <p class="search-border__content"> {{ content }} </p>
            <span><span class="search-border__in"> author: </span> {{ author }} </span><br>
            <span><span class="search-border__in"> publishedAt: </span> {{ publishedAt }} </span>
          </v-expansion-panel-content>
        </div>
        <v-img :src="`${urlToImage}`" position class="text-center" height="250" width="500"></v-img>
        <p class="blockquote">  <a v-bind:href="`${url}`"> {{ url }} </a></p>
      </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
export default {
  name: 'Article',
  data: () => ({
    accordion: false
  }),
  props: {
    title: String,
    description: String,
    urlToImage: String,
    url: String,
    publishedAt: String,
    author: String,
    content: String
  }
}
</script>

<style lang="css" scoped>
.text-center {
 margin-left: 30px;
}
h3 {
  border: 2px solid white;
  height: 40px;
  font-weight: bold;
  font-family: 'Lato', sans-serif, 700;
}
.blockquote {
  font-size: 10px;
  height: 10px;
}
.search-border__in {
  font-weight: bold
}
</style>
