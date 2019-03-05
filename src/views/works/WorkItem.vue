<template>
  <div class="work-item">
    <img class="img" :src="work.src" alt="" />
    <div class="title">
      {{ work.title }}
    </div>
    <div class="tag-wrap">
      <span class="tag" v-for="(i, index) in work.tag" @click="selectTag(i)" :key="i">
        {{ i }}
        <template v-if="index !== work.tag.length - 1">
           ,
        </template>
      </span>
      <!-- <span class="tag" @click="selectTag(work.tag)">{{ work.tag }}</span> -->
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
  padding: 0 10px;
  box-sizing: border-box;
  width: 300px;
  margin-bottom: 30px;
  .img {
    display: block;
    width: 100%;
    height: 194px;
    object-fit: cover;
  }

  .title {
    margin-top: 16px;
    font-size: 14px;
    font-weight: 700;
  }
  .tag-wrap {
    margin-top: 4px;
    line-height: 1;
    .tag {
      font-size: 12px;
      margin-right: 6px;
      color: #000;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
