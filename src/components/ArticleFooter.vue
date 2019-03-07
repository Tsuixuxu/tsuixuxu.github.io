<template>
  <div class="article-footer">
    <div class="work-children">
      <div class="back">返回</div>
      <div
        v-for="child in types"
        class="child"
        :key="child.tag"
        @click="selectChid(child.tag)"
      >
        {{ child.name }}
      </div>
    </div>
  </div>
</template>
<script>
const types = [
  {
    name: "品牌",
    tag: "brand"
  },
  {
    name: "海报",
    tag: "poster"
  },
  {
    name: "包装",
    tag: "package"
  },
  {
    name: "书籍",
    tag: "book"
  },
  {
    name: "logo",
    tag: "logo"
  },
  {
    name: "C4D",
    tag: "c4d"
  },
  {
    name: "UI",
    tag: "ui"
  }
];
export default {
  data() {
    return {
      types: [...types]
    };
  },
  methods: {
    selectChid(val) {
      this.$router.push({ name: "works", query: { tag: val } });
    }
  }
}
</script>
<style lang="less" scoped>
.work-children {
  margin-top: 30px;
  display: flex;
  .child {
    margin-left: 10px;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      font-weight: 700;
    }
  }

  .back {
    border-right: 1px solid #000;
    padding-right: 6px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      font-weight: 700;
    }
  }
}
</style>
