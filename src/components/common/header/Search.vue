<template>
  <div id="header-top">
    <div id="search">
      <el-input :placeholder="recommendArr" v-model="input" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <seach-howords id="hotwords"/>
    </div>
    <div id="shopping-cart">
      <span @click="goShopping"><i class="el-icon-shopping-cart-2"></i>购物车</span>
      <em class="num">{{cart}}</em>
    </div>
  </div>

</template>

<script>
  import SeachHowords from "./SeachHowords";
  export default {
    name: "Search",
    components: {SeachHowords},
    data() {
      return {
        input: '',
        recommendArr: '周年狂欢杰优惠券',
      }
    },
    methods: {
      goShopping() {
        this.$router.push('/shopping', () => {})
      }
    },
    computed: {
      cart() {
        return sessionStorage.getItem('num')
      }
    },
    created() {
      let getArr = ['高级养生茶套餐', '杰哥T恤满2件送啊伟', '周年狂欢杰最新优惠券', '家电最新大减价', '最新款超时尚服装任你挑']
      setInterval(() => {
        let i = Math.floor(Math.random() * getArr.length)
        return this.recommendArr = getArr[i]
      },5000)
    }
  }
</script>

<style lang="less" scoped>
  @themeColor: #f814ff;
  #header-top {
    display: flex;
    height: 70px;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 10px;
    #search {
      position: relative;
      width: 550px;
      height: 36px;

      #hotwords {
        position: absolute;
        top: 46px;
        left: 0;
      }
    }

    .el-select {
      .el-input {
        width: 130px;
      }
    }

    /deep/ .el-input__inner {
      border: 1px solid @themeColor;
    }

    /deep/ .el-input-group__append {
      background-color: @themeColor;
      border: 1px solid @themeColor;
    }

    /deep/ .el-icon-search {
      color: #fff;
    }

    #shopping-cart {
      position: relative;
      display: flex;
      justify-content: center;
      width: 120px;
      height: 36px;
      border: 1px solid #ccc;
      margin-left: 30px;
      cursor: pointer;

      &:hover {
        border: 1px solid @themeColor;
      }

      span {
        font-size: 14px;
        margin-top: 8px;
        color: @themeColor;

        i {
          font-size: 16px;
          font-weight: bold;
          margin-right: 8px;
        }
      }

      em {
        position: absolute;
        top: -8px;
        right: -8px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        font-style: normal;
        font-size: 9px;
        text-align: center;
        background-color: @themeColor;
        color: #fff;
        border-radius: 50%;
      }
    }

  }



</style>
