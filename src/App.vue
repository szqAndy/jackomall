<template>
  <el-container id="app">
    <home></home>
  </el-container>
</template>

<script>
  import Home from "./views/home/Home";
  export default {
    components: {Home}
  }
</script>

<style lang="less">
  @import "assets/css/normalize";
  @import "assets/css/base";
</style>
