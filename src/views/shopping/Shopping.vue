<template>
  <div id="shopping">
    <div class="tab-nav">
      <div class="w">
        <top-navigation/>
      </div>
    </div>
    <div>
      <div class="w">
        <p class="p-shopping">我的购物车</p>
        <div v-if="pic.length">
          <shopping-cart v-for="(item, index) in pic">
            <img :src= item.src slot="img" />
            <span slot="title">{{item.title}}</span>
            <p slot="code">
              <span>{{item.price | showPrice}}</span>
              <button @click="increment(index)">+</button>
              {{item.count}}
              <button @click="decrement(index)" :disabled="item.count <= 1">-</button>
              <button @click="removeHandle(index)">删除</button>
            </p>
          </shopping-cart>
        </div>
        <!--<div v-else class="empty">购物车为空</div>-->
        <el-empty  v-else description="购物车为空"></el-empty>
        <div class="fool">
          <div class="total">总价：{{totalPrice | showPrice}}</div>
          <button class="place">立即支付</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopNavigation from "../../components/common/TopNavigation";
  import ShoppingCart from "./ShoppingCart";
  export default {
    name: "Shopping",
    components: {ShoppingCart, TopNavigation},
    data() {
      return {
        pic: [],

        // 购物车数量操作
        increment(index) {
          this.pic[index].count++
        },
        decrement(index) {
          this.pic[index].count--
        },
        // 移除操作
        removeHandle(index) {
          this.pic.splice(index, 1)

          let code = false
          sessionStorage.setItem('code', code);
          sessionStorage.setItem('num', this.pic.length);
          alert('删除成功！')
        },
        fn(code, rightImg, title, activity_price, amount){
          if (sessionStorage.getItem(code) == 'true') {
            console.log(11);
            this.pic.push({
              src: sessionStorage.getItem(rightImg),
              title: sessionStorage.getItem(title),
              price: parseFloat(sessionStorage.getItem(activity_price)),
              count: parseInt(sessionStorage.getItem(amount))
            })
            sessionStorage.setItem('num', this.pic.length);
          }
          if (!sessionStorage.getItem(code)) {
            console.log(11);
          }
          console.log(this.pic);
        }
      }
    },
    computed: {
      // 总价格计算
      totalPrice() {
        // 使用函数式编程 reduce
        return this.pic.reduce((preValue, wares) => {
          return preValue + wares.price * wares.count
        },0)
      }
    },
    filters: { // 定义过滤器
      showPrice(price) { // 使用过滤器方法
        return '￥' + price.toFixed(2)
      }
    },
    mounted: function (){
      this.fn('code', 'rightImg', 'title', 'activity_price', 'amount')
    }
  }
</script>

<style lang="less" scoped>
  #shopping {
    .tab-nav {
      background-color: #e3e4e5;
      border-top: 1px solid #666;
      border-bottom: 1px solid #ccc;
    }
  }

  .p-shopping {
    font-weight: bold;
    padding: 15px 0;
    border-bottom: 3px solid #ccc;
  }

  .fool {
    font-weight: bold;
    display: flex;
    flex-direction: row;
    height: 50px;
    margin-top: 30px;
    border: 1px solid #f814ff;
    background-color: #eee;
  }

  .total {
    flex: 1;
    font-weight: bold;
    margin: 15px 20px;
    color: #f814ff;
  }

  .place {
    width: 80px;
    height: 30px;
    line-height: 30px;
    font-weight: bold;
    text-align: center;
    margin: 10px 20px;
    background-color: #eee;
    cursor: pointer;
    border: 0;
    &:hover {
      background-color: #f814ff;
      color: #fff;
    }
  }


  .empty {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    height: 200px;
    line-height: 200px;
    border: 1px solid #ccc;
  }
</style>
