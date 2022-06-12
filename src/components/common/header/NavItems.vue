<template>
  <div id="navitems">
    <span v-for="item in navitemsList">{{item}}</span>
  </div>
</template>

<script>
  export default {
    name: "NavItems",
    data() {
      return {
        navitemsList: ['秒杀', '优惠劵','杰哥会员', '二手拍卖市场', '品牌闪购', '杰哥超商', '我要打电动', '好图', '最佳搭档', '图书馆']
      }
    }
  }
</script>

<style lang="less" scoped>
  @themeColor: #f814ff;
  #navitems {
    margin: 0 auto;

    span {
      display: inline-block;
      font-size: 16px;
      margin: 15px 15px 15px 0;
      cursor: pointer;
      &:hover {
        color:@themeColor;
      }

      &:nth-child(-n+2) {
        font-weight: bold;
        color: #ff45ed;
        &:hover {
          color: @themeColor;
        }
      }
    }
  }

</style>
