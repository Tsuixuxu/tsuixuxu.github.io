<template>
  <div class="article-wrapper">
    <div class="detail">
      <div class="title">{{ article.title }}</div>
      <div class="designer">{{ article.designer }}</div>
      <div class="date">{{ article.date }}</div>
      <div class="client">{{ article.client }}</div>
    </div>
    <div class="img" v-for="(img, index) in article.imgs" :key="index">
      <img :src="img" alt="">
    </div>
    
  </div>
</template>
<script>
export default {
  props: {
    article: {
      default: () => {},
      type: Object
    }
  },
  watch: {
    article: {
      handler(val) {
        console.log(val)
      },
      deep: true
    }
  }
}
</script>
