<template>
  <div class="works">
    <div class="content-wrap"  v-if="works.length">
      <work-item
        v-for="item in works" 
        :work="item"
        :key="item.src"
        @filter="chooseType"
      ></work-item>
    </div>
    <div class="no-data" v-else>
      暂无数据
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WorkItem from "./WorkItem.vue";
import pg1 from "./imgs/1.jpg";
import pg2 from "./imgs/2.jpg";
import pg3 from "./imgs/3.jpg";
import pg4 from "./imgs/4.jpg";

const works = [
  {
    title: "广东省疾控很高的教科书十访九空",
    src: pg1,
    tag: "brand"
  },
  {
    title: "古交市发iljkasgjsfkl",
    src: pg2,
    tag: "package"
  },
  {
    title: "广东省疾控很高的教科书十访九空",
    src: pg3,
    tag: "poster"
  },
  {
    title: "古交市发iljkasgjsfkl",
    src: pg4,
    tag: "book"
  }
];
export default {
  name: "works",
  components: {
    WorkItem
  },
  data() {
    return {
      works: [...works],
      tag: ''
    };
  },
  watch: {
    '$route': function (val) {
      console.log(val)
      this.tag = val.query.tag
      this.chooseType(this.tag)
    }
  },
  methods: {
    chooseType(tag) {
      if (tag === "all") {
        this.$set(this.$data, "works", works);
        return;
      }
      const arr = works.filter(item => {
        return item.tag.includes(tag);
      });
      this.$set(this.$data, "works", arr);
    }
  },
  mounted() {
    this.route = this.$route.name
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
</style>
