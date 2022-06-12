<template>
  <div>
    <div id="tab-nav">
      <div class="w">
        <top-navigation>
          <span slot="login">唉您好，<i>请先登录！</i></span>
          <span slot="register">免费注册</span>
        </top-navigation>
      </div>
    </div>
    <div id="header">
      <div class="w">
        <home-header/>
      </div>
    </div>
    <div id="fs">
      <div class="w">
        <home-fs/>
        <seckill/>
        <more/>
      </div>
    </div>
    <footer id="footer">
      <div class="w">
        <mod-service/>
        <mod-help/>
        <mod-copyright/>
      </div>
    </footer>
  </div>
</template>

<script>
  import TopNavigation from "components/common/TopNavigation";
  import HomeHeader from "components/common/HomeHeader";
  import HomeFs from "../../components/common/HomeFs";
  import Seckill from "../../components/common/Seckill";
  import More from "../../components/content/More";
  import ModService from "../../components/content/footer/ModService";
  import ModCopyright from "../../components/content/footer/ModCopyright";
  import ModHelp from "../../components/content/footer/ModHelp";
  import HomeItem from "./HomeItem";
  export default {
    name: "HomeItem",
    components: {HomeItem, ModHelp, ModCopyright, ModService, More, Seckill, HomeFs, HomeHeader, TopNavigation}
  }
</script>

<style lang="less" scoped>
  #header {
    border-bottom: 1px solid #ddd;
  }

  #fs {
    padding-top: 15px;
    background-color: #eee;
    padding-bottom: 30px;
  }

  #footer {
    height: 300px;
    border-top: 2px solid #ddd;
  }

  #tab-nav {
    background-color: #e3e4e5;
    border-top: 1px solid #666;
    border-bottom: 1px solid #ccc;
  }
</style>
