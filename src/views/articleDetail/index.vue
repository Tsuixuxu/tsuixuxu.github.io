<template>
  <div class="article-detail">
    <article :article="article"></article>
    <article-footer></article-footer>
  </div>
</template>
<script>
import Article from '@/components/Article'
import ArticleFooter from '@/components/ArticleFooter'
import articles from '@/assets/detail'

export default {
  components: {
    Article,
    ArticleFooter
  },
  data() {
    return {
      article: {
        title: '111'
      },
      id: ''
    }
  },
  // watch: {
  //   '$router': function (val) {
  //     articles.forEach(item => {
  //       if (String(item.id) === String(this.id)) {
  //         this.article = {...JSON.parse(item)}
  //         this.$set(this.$data, 'article', {...item})
  //         return
  //       }
  //   })
  //   }
  // },
  // mounted() {
  //   this.id = this.$route.query.id

  //   articles.forEach(item => {
  //     if (String(item.id) === String(this.id)) {
  //       this.article = {...item}
  //       this.$set(this.$data, 'article', {...item})
  //       return
  //     }
  //   })

  // }
}
</script>
