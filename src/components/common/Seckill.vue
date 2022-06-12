<template>
  <div id="seckill_m">
    <count-down/>
    <seckill-list/>
  </div>
</template>

<script>
  import CountDown from "./seckill/CountDown";
  import SeckillList from "./seckill/SeckillList";
  export default {
    name: "Seckill",
    components: {SeckillList, CountDown}
  }
</script>

<style lang="less" scoped>
  #seckill_m {
    display: flex;
    margin-top: 20px;
  }
</style>
