<template>
  <div class="home-header">
    <div id="logo">
      <img src="~assets/img/logo.png" alt="">
    </div>
    <search/>
    <nav-items/>
    <div id="treasure">
      <img src="~assets/img/treasure.webp" alt="">
    </div>
  </div>
</template>

<script>
  import Search from "./header/Search";
  import NavItems from "./header/NavItems";
  export default {
    name: "HomeHeader",
    components: {NavItems, Search}
  }
</script>

<style lang="less" scoped>
  .home-header {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    #logo {
      position: absolute;
      top: 0;
      left: 0;
      width: 120px;
      height: 120px;

      img {
        width: 100%;
      }
    }
    #treasure {
      position: absolute;
      top: 10px;
      right: 0;
      width: 180px;
      height: 120px;

      img {
        width: 100%;
      }

      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 120px;
        margin: 0;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
      }

      /deep/ .el-carousel__indicators {
        display: none;
      }
    }
  }




</style>
