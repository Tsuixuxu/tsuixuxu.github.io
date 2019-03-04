<template>
  <div class="work-item">
    <img class="img" :src="work.src" alt="" />
    <div class="title">
      {{ work.title }}
    </div>
    <div class="tag-wrap">
      <span class="tag" @click="selectTag(work.tag)">{{ work.tag }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    work: {
      default: () => {},
      type: Object
    }
  },
  data() {
    return {};
  },
  methods: {
    selectTag(tag) {
      this.$emit("filter", tag);
    }
  }
};
</script>

<style lang="less" scoped>
.work-item {
  width: 25%;
  padding: 0 10px;
  box-sizing: border-box;
  .img {
    display: block;
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  .title {
    margin-top: 6px;
  }
  .tag-wrap {
    margin-top: 6px;
    .tag {
      font-size: 12px;
      padding: 4px 8px;
      border-radius: 3px;
      background-color: #409eff;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
