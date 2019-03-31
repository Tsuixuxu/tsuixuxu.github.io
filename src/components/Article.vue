<template>
  <div class="article-wrapper">
    <div class="detail">
      <div class="title">
        {{ article.title }}
      </div>
      <div class="designer">
        {{ article.designer }}
      </div>
      <div class="date" v-if="article && article.date">
        {{ article.date }}
      </div>
      <div class="client" v-if="article && (article.client && !article.isNode)">
        {{ article.client }}
      </div>
      <component
        v-if="article && (article.client && article.isNode)"
        :is="article.client"
      />
      <div class="quick-wrapper">
        <i class="iconfont pre" @click="goPre" v-if="article.id > 1">
          &#xe618;
        </i>
        <i v-if="count > article.id" class="iconfont next" @click="goNext"
          >&#xe6ed;</i
        >
      </div>
    </div>
    <div class="img" v-for="(img, index) in article.imgs" :key="index">
      <img :src="img" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    article: {
      default: () => {},
      type: Object
    },
    count: {
      default: 0,
      type: Number
    }
  },
  watch: {
    article: {
      handler() {
        this.toTop();
      },
      deep: true
    }
  },
  methods: {
    toTop() {
      setTimeout(() => {
        scrollTo(0, 0);
      }, 100);
    },
    goPre() {
      this.$router.push({
        name: "article",
        query: { id: this.article.id - 1 }
      });
    },
    goNext() {
      this.$router.push({
        name: "article",
        query: { id: this.article.id + 1 }
      });
    }
  },
  mounted() {
    this.toTop();
  }
};
</script>
<style lang="less" scoped>
.detail {
  position: relative;
  .title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .designer,
  .date,
  .client {
    line-height: 1.5;
  }
  .quick-wrapper {
    position: absolute;
    right: 20px;
    top: 10px;
    .pre {
      margin-right: 10px;
      cursor: pointer;
    }
    .next {
      cursor: pointer;
    }
  }
}
.img {
  margin-top: 20px;

  img {
    width: 100%;
  }
}
</style>
