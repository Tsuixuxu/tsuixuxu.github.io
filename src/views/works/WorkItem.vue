<template>
  <div class="work-item">
    <div class="content-wrapper" @click="goDetail">
      <div class="img-wrapper">
        <img class="img" :src="work.imgs[0] || ''" alt="" />
      </div>
      <div class="title">
        {{ work.title }}
      </div>
    </div>
    <div class="tag-wrap">
      <span
        class="tag"
        v-for="(i, index) in work.tag"
        @click="selectTag(i)"
        :key="i"
      >
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
      this.$router.push({ name: "works", query: { tag: tag } });
    },
    goDetail() {
      this.$router.push({ name: "article", query: { id: this.work.id } });
    }
  }
};
</script>

<style lang="less" scoped>
.work-item {
  box-sizing: border-box;
  width: 300px;
  margin-bottom: 30px;
  margin-right: 10px;

  .img-wrapper {
    padding: 5px;
    border: 1px solid transparent;
    cursor: pointer;
    .img {
      display: block;
      width: 290px;
      height: 139px;
      object-fit: cover;
    }
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

  .content-wrapper:hover {
    .img-wrapper {
      border: 1px solid #ccc;
    }
    .title {
      text-decoration: underline;
    }
  }
}
</style>
