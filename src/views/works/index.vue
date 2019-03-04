<template>
  <div class="works">
    <div class="types-wrap">
      <div
        class="type-item"
        :class="{ active: actived === type.tag }"
        v-for="type in types"
        :key="type.tag"
        @click="chooseType(type.tag)"
      >
        {{ type.name }}
      </div>
    </div>
    <div class="content-wrap">
      <template v-for="item in works">
        <work-item
          :work="item"
          :key="item.src"
          @filter="chooseType"
        ></work-item>
      </template>
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
const types = [
  {
    name: "全部",
    tag: "all"
  },
  {
    name: "海报",
    tag: "poster"
  },
  {
    name: "展览",
    tag: "exhibition"
  }
];
const works = [
  {
    title: "广东省疾控很高的教科书十访九空",
    src: pg1,
    tag: "poster"
  },
  {
    title: "古交市发iljkasgjsfkl",
    src: pg2,
    tag: "exhibition"
  },
  {
    title: "广东省疾控很高的教科书十访九空",
    src: pg3,
    tag: "poster"
  },
  {
    title: "古交市发iljkasgjsfkl",
    src: pg4,
    tag: "exhibition"
  }
];
export default {
  name: "works",
  components: {
    WorkItem
  },
  data() {
    return {
      types: [...types],
      works: [...works],
      actived: "all"
    };
  },
  methods: {
    chooseType(tag) {
      this.actived = tag;
      if (tag === "all") {
        this.$set(this.$data, "works", works);
        return;
      }
      const arr = works.filter(item => {
        return item.tag.includes(tag);
      });
      this.$set(this.$data, "works", arr);
    }
  }
};
</script>
<style lang="less" scoped>
.works {
  display: flex;
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
}
</style>
