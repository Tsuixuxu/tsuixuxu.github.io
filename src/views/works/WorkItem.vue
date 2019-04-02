<template>
  <div class="work-item">
    <div class="content-wrapper" @click="goDetail">
      <div class="img-wrapper">
        <img class="img" v-lazy="work.banner || work.imgs[0] || ''" alt="" />
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
    return {
      timer: ""
    };
  },
  methods: {
    selectTag(tag) {
      this.$router.push({ name: "works", query: { tag: tag } });
    },
    goDetail() {
      this.$router.push({ name: "article", query: { id: this.work.id } });
    },
    async createWarning(e) {
      let c = await document.querySelector(".protect-text");
      c && document.body.removeChild(c);
      let x = e.x;
      let y = e.y;
      let dom = document.createElement("div");
      dom.innerText = "版权保护，请勿保存下载";
      dom.classList = "protect-text";
      dom.style.left = x + "px";
      dom.style.top = y + "px";
      document.body.append(dom);
      this.clearTimer();
    },
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        let c = document.querySelector(".protect-text");
        c && document.body.removeChild(c);
      }, 2000);
    }
  },
  mounted() {
    this.$nextTick(() => {
      let doms = document.querySelectorAll(".img");
      doms.forEach(i => {
        i.oncontextmenu = e => {
          // console.log("object");
          e.preventDefault();
          this.createWarning(e);
          return false;
        };
      });
      document.body.onclick = () => {
        let c = document.querySelector(".protect-text");
        c && document.body.removeChild(c);
      };
    });
  }
};
</script>

<style lang="less" scoped>
.work-item {
  box-sizing: border-box;
  width: 330px;
  margin-bottom: 30px;
  margin-right: 10px;

  .img-wrapper {
    padding: 5px;
    border: 1px solid transparent;
    cursor: pointer;
    .img {
      display: block;
      width: 320px;
      height: 240px;
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

<style lang="less">
.protect-text {
  position: fixed;
  z-index: 100;
  background-color: #000;
  padding: 6px 10px;
  color: #ffffff;
  border-radius: 3px;
  line-height: 1.5;
}
</style>
