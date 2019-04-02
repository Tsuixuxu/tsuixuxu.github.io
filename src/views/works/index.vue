<template>
  <div class="works">
    <div class="content-wrap" v-if="articles.length">
      <work-item
        v-for="item in articles"
        :work="item"
        :key="item.id"
      ></work-item>
    </div>
    <div class="no-data" v-else>
      暂无数据
    </div>
    <div class="copyright">Copyright © Tsui. All rights reserved.</div>
  </div>
</template>

<script>
// @ is an alias to /src
import WorkItem from "./WorkItem.vue";
import articles from "@/assets/detail.js";

export default {
  name: "works",
  components: {
    WorkItem
  },
  data() {
    return {
      articles: [...articles],
      tag: ""
    };
  },
  watch: {
    $route: function(val) {
      this.tag = val.query.tag;
      this.chooseType(this.tag);
    }
  },
  methods: {
    chooseType(tag) {
      if (!tag) {
        this.$set(this.$data, "articles", articles);
        return;
      }
      const arr = articles.filter(item => {
        return item.tag.includes(tag);
      });
      this.$set(this.$data, "articles", arr);
    }
  },
  mounted() {
    this.route = this.$route.name;
    let tag = this.$route.query.tag;
    this.chooseType(tag);
  }
};
</script>
<style lang="less" scoped>
.works {
  .types-wrap {
    width: 100px;

    .type-item {
      margin-bottom: 10px;
      cursor: pointer;

      &.active {
        margin-left: 10px;
        font-weight: 700;
      }
    }
  }
  .content-wrap {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
  }

  .no-data {
    text-align: center;
    margin-top: 40px;
  }
}
.copyright {
  margin: 100px 0 40px;
  font-size: 12px;
  color: rgb(167, 167, 167);
}
</style>
