<template>
  <div class="blog-navbar">
    <router-link class="link" to="/"
      ><div class="logo blog-font-bold">TSUI.</div></router-link
    >
    <div class="link-item link-work" :class="{ active: route !== 'works' }">
      <div class="route-wrap">
        <router-link
          class="link"
          :class="{ 'blog-font-bold': route === 'works' }"
          @click.native="changeRoute()"
          to="/works"
          >WORKS</router-link
        >
      </div>
      <div class="work-children" :class="{ show: route === 'works' }">
        <div
          v-for="child in types"
          class="child"
          :class="{ active: active === child.tag }"
          :key="child.tag"
          @click="selectChid(child.tag)"
        >
          {{ child.name }}
        </div>
      </div>
    </div>
    <div class="link-item">
      <router-link
        class="link"
        :class="{ 'blog-font-bold': route === 'about' }"
        to="/about"
        @click="changeRoute()"
        >ABOUT</router-link
      >
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
      types: [...types],
      active: "",
      route: ""
    };
  },
  watch: {
    $route: function(val) {
      this.route = val.name;
    }
  },
  methods: {
    changeRoute() {
      console.log("object");
      this.active = "";
    },
    selectChid(val) {
      this.active = val;
      this.$router.push({ name: "works", query: { tag: val } });
    }
  },
  mounted() {
    this.route = this.$route.name;
    let tag = this.$route.query.tag;
    this.active = tag || "";
  }
};
</script>
<style lang="less" scoped>
.blog-navbar {
  position: fixed;
  width: 100%;
  height: 60px;
  line-height: 1;
  padding: 40px 80px 30px;
  display: flex;
  align-items: baseline;
  background-color: rgba(256, 256, 256, 1);
  z-index: 10;

  .logo {
    font-size: 30px;
    font-weight: 700;
    margin-right: 40px;
  }

  .link-item {
    // margin-left: 20px;
    font-weight: 600;
    text-align: center;
    display: inline-block;

    .router-link-active {
      font-weight: 900;
    }

    .link {
      font-size: 18px;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .link-work {
    display: flex;
    align-items: baseline;
    transition: all 1s;
    &.active {
      margin-right: 40px;
    }
  }
  .work-children {
    display: flex;
    width: 0px;
    overflow: hidden;
    transition: width 1s;
    white-space: nowrap;
    align-items: center;
    line-height: 1.5;
    .child {
      display: inline-block;
      margin-left: 10px;
      font-size: 12px;
      font-weight: 400;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }

      &.active {
        font-weight: 700;
      }
    }

    &.show {
      width: 240px;
    }
  }
}
</style>
