<template>
  <div class="article-detail">
    <Article :article="article" :count="count"></Article>
    <article-footer></article-footer>
  </div>
</template>
<script>
import Article from "@/components/Article";
import ArticleFooter from "@/components/ArticleFooter";
import articles from "@/assets/detail";

export default {
  components: {
    Article,
    ArticleFooter
  },
  data() {
    return {
      article: {
        title: "111"
      },
      count: 0,
      id: ""
    };
  },
  watch: {
    $route: {
      handler() {
        this.id = this.$route.query.id;
        this.count = articles.length;
        articles.forEach(item => {
          if (String(item.id) === String(this.id)) {
            this.$set(this.$data, "article", { ...item });
            return;
          }
        });
      }
    },
    deep: true
  },
  mounted() {
    this.id = this.$route.query.id;

    articles.forEach(item => {
      if (String(item.id) === String(this.id)) {
        this.$set(this.$data, "article", { ...item });
        return;
      }
    });

    this.count = articles.length;
  }
};
</script>
