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
      <pre
        class="client"
        v-if="article && (article.client && !article.isNode)"
        >{{ article.client }}</pre
      >
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
    <div class="img" v-for="(img, index) in imgs" :key="index">
      <img class="protectImg" v-lazy="img" alt="" />
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
  data() {
    return {
      timer: "",
      imgs: this.article.imgs || []
    };
  },
  watch: {
    article: {
      handler() {
        this.imgs = [];
        this.toTop();
        this.$nextTick(() => {
          this.imgs = this.article.imgs;
          setTimeout(() => {
            this.preventHandler();
          }, 100);
        });
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
    },
    preventHandler() {
      let doms = document.querySelectorAll(".protectImg");
      doms.forEach(i => {
        i.oncontextmenu = e => {
          e.preventDefault();
          this.createWarning(e);
          return false;
        };
      });
    }
  },
  mounted() {
    this.toTop();
    this.$nextTick(() => {
      this.preventHandler();
    });
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
    left: 910px;
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
  max-width: 960px;

  img {
    width: 100%;
  }
}
</style>
