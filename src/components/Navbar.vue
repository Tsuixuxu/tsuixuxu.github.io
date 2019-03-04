<template>
  <div class="blog-navbar">
    <div class="logo">TSUI.</div>
    <div class="link-item link-work" :class="{ active : route !== 'works' }">
      <div class="route-wrap">
        <router-link class="link" @click="changeRoute('works')" to="/works">WORKS</router-link>
      </div>
      <div class="work-children" :class="{ show : route === 'works' }">
        <div
          v-for="child in types"
          class="child"
          :class="{ active : active === child.tag }"
          :key="child.tag"
          @click="selectChid(child.tag)"
        >
          {{ child.name }}
        </div>
      </div>
    </div>
    <div class="link-item">
      <router-link class="link" to="/about" @click="changeRoute('about')">ABOUT</router-link>
    </div>
  </div>
</template>
<script>
const types = [
  {
    name: '品牌',
    tag: 'brand'
  },
  {
    name: '海报',
    tag: 'poster'
  },
  {
    name: '包装',
    tag: 'package'
  },
  {
    name: '书籍',
    tag: 'book'
  },
  {
    name: 'logo',
    tag: 'logo'
  },
  {
    name: 'C4D',
    tag: 'c4d'
  },
  {
    name: 'UI',
    tag: 'ui'
  }
]
export default {
  data () {
    return {
      types: [...types],
      active: '',
      route: ''
    }
  },
  watch: {
    '$route': function (val) {
      this.route = val.name
    }
  },
  methods: {
    changeRoute(val) {
      this.active = ''
    },
    selectChid(val) {
      this.active = val
      this.$router.push({ name: 'works', query: { tag: val } })
    }
  },
  mounted() {
    this.route = this.$route.name
  }
};
</script>
<style lang="less" scoped>
.blog-navbar {
  position: fixed;
  height: 60px;
  line-height: 60px;
  padding: 0 40px;
  display: flex;
  align-items: baseline;

  .logo {
    font-size: 30px;
    font-weight: 700;
    margin-right: 58px;
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
    // .route-wrap {
    //   }
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
