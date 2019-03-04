<template>
  <div class="blog-navbar">
    <div class="logo">TSUI.</div>
    <div class="link-item">
      <router-link class="link" to="/works">WORKS</router-link>
    </div>
    <div class="link-item">
      <router-link class="link" to="/about">ABOUT</router-link>
    </div>
  </div>
</template>
<script>
export default {};
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
    font-size: 24px;
    font-weight: 700;
  }

  .link-item {
    text-decoration: none;
    margin-left: 20px;
    font-weight: 600;
    width: 70px;
    text-align: center;

    .router-link-active {
      font-weight: 900;
    }

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
