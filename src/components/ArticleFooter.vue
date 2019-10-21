<template>
  <div class="article-footer">
    <div class="work-children">
      <div class="back" @click="back">返回</div>
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
    name: "项目",
    tag: "project"
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
    name: "logo",
    tag: "logo"
  },
  {
    name: "UI",
    tag: "UI"
  },
  {
    name: "手绘",
    tag: "hand drawn"
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
    },
    back() {
      this.$router.push({ name: "works" });
    }
  }
};
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
