<template>
  <div id="mod-service">
    <div class="mod-service-unit" v-for="item in list">
      <div class="mod-service-ico">{{item.ico}}</div>
      <div class="mod-service-text">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ModService",
    data() {
      return {
        list: [
          {
            ico: '多',
            text: '品类齐全，轻松购物'
          },
          {
            ico: '快',
            text: '多仓直发，极速配送'
          },
          {
            ico: '好',
            text: '正品行货，精致服务'
          },
          {
            ico: '省',
            text: '天天低价，畅选无忧'
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  #mod-service {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .mod-service-unit {
      display: flex;
      align-items: center;
      margin-right: 50px;
      .mod-service-ico {
        font-weight: bold;
        font-size: 22px;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        border-radius: 30%;
        border: 3px solid #f814ff;
        margin-right: 8px;
        color: #f814ff;
      }
    }
    .mod-service-text {
      font-weight: bold;
      font-size: 18px;
    }

  }

</style>
