<template lang="html">
  <v-carousel cycle  height="600" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item width="100%" v-for="(item,i) in items" :key="i" :src="item.src">
  </v-carousel-item>
  </v-carousel>

</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      items: [{
          src: require('@/assets/main1.jpg'),
        },
        {
          src: require('@/assets/main3.jpg'),
        },
        {
          src: require('@/assets/main2.jpg'),
        }
      ]
    }
  },
}
</script>

<style lang="css" scoped>
</style>
