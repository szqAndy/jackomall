<template>
  <div id="jacko-commodity-item">
    <div class="commodity-item-img">
      <slot name="commodity-img"></slot>
    </div>
    <slot name="commodity-title"><h2 class="commodity-item-title"></h2></slot>
    <slot name="commodity-price"><h2 class="commodity-item-price"></h2></slot>
  </div>
</template>

<script>
  export default {
    name: "CommodityList"
  }
</script>

<style lang="less" scoped>
  #jacko-commodity-item {
    float: left;
    width: 220px;
    overflow: hidden;
    background-color: #fff;
    margin-right: 25px;
    margin-top: 25px;
    cursor: pointer;
    &:nth-child(5n) {
      margin-right: 0;
    }
    .commodity-item-img {
      width: 150px;
      height: 150px;
      background-color: #f814ff;
      margin: 20px auto;
    }
    .commodity-item-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
      padding: 0 15px;
    }
    .commodity-item-price {
      padding: 0 15px;
      font-size: 18px;
      color: #f814ff;
      span {
        font-weight: normal;
        color: #f814ff;
      }
    }
  }
</style>
