<template>
  <div id="app">
    <navbar></navbar>
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>

<style lang="less">
.main-content {
  padding: 60px 40px;
}
</style>
