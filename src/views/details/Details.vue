<template>
  <div id="details">
    <div id="tab-nav">
      <div class="w">
        <top-navigation/>
      </div>
    </div>
      <div class="imgMerror">
        <div class="w">
          <div class="magnifier">
            <div class="left">
              <img class="leftImg" :src="require('assets/img/' + $store.state.seckill.img + '.webp')" alt="" />
              <!-- 鼠标层罩 -->
              <div v-show="topShow" class="top" :style="topStyle"></div>
              <!-- 最顶层覆盖了整个原图空间的透明层罩 -->
              <div class="maskTop"
                   @mouseenter="enterHandler"
                   @mousemove="moveHandler"
                   @mouseout="outHandler"
              ></div>
            </div>
            <div v-show="rShow" class="right">
              <img :style="r_img"
                   class="rightImg"
                   :src="require('assets/img/' + $store.state.seckill.img + '.webp')"
                   alt=""
              />
            </div>
          </div>
          <div class="goods">
            <div class="goods_title">{{$store.state.seckill.title}}</div>
            <div class="activity">
              <p>价格 <slot name="price"><span style="margin-left: 30px; text-decoration: line-through">￥{{$store.state.seckill.originalprice}}</span></slot></p>
              <p>促销价<span class="activity_price">￥{{price[0]}}</span></p>
              <p>优惠<span class="favourable"> {{$store.state.seckill.discount}}<i>领取</i></span></p>
            </div>
            <p class="express">快递：{{$store.state.seckill.toll}}</p>
            <div class="flavor">
              <div style="float: left; font-size: 14px;">选择</div>
              <ul>
                <li v-for="(item, index) in flavor">
                  <a href="#" :class="{active: index===currentIndex}" @click="itemClick(index)">{{item}}</a>
                </li>
              </ul>
              <div style="float: left; font-size: 14px;">数量</div>
              <div class="amount">
                <input type="text" id="amount" :value="message" @input="message = $event.target.value" @blur="isblur">
                <i style="display: inline-block;">
                  <div class="code">
                    <button @click="increment">+</button>
                    <button style="margin-top: 5px" @click="decrement">-</button>
                  </div>
                </i>
                <span>件</span>
                <span>有货</span>
                <p style="font-size: 10px; color: #f00" v-if="message > 200">数量不能超过200件！</p>
                <p style="font-size: 10px; color: #f00" v-if="message < 1">数量不能少于1件！</p>
              </div>
              <div class="btn">
                <button>立即购买</button>
                <button style="margin-left: 15px" @click="addShopping">加入购物车</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import TopNavigation from "../../components/common/TopNavigation";
  export default {
    name: "Details",
    components: {TopNavigation},
    data() {
      return {
        topStyle: { transform: "" },
        r_img: {},
        topShow: false,
        rShow: false,
        flavor: this.$store.state.seckill.flavor,
        message: 1,
        currentIndex: 0,
        price: this.$store.state.seckill.pricelist,
        priceInitial: this.$store.state.seckill.price
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index
        if (this.price[index] == this.price[0]) {
          this.price[index] = this.priceInitial
          console.log(11);
        } else {
          this.price[0] = this.price[index]
        }
      },
      increment() {
        if (this.message >= 200) {
          this.message = 200
        }else {
          this.message++;
        }

      },
      decrement() {
        if (this.message <= 1) {
          this.message = 1
        } else {
          this.message--;
        }
      },
      isblur() {
        if (this.message >= 200) {
          this.message = 200
        }
        if (this.message < 1 ) {
          this.message = 1
        }
      },
      // 鼠标进入原图空间函数
      enterHandler() {
        // 层罩及放大空间的显示
        this.topShow = true;
        this.rShow = true;
      },
      // 鼠标移动函数
      moveHandler(event) {
        // 鼠标的坐标位置
        let x = event.offsetX;
        let y = event.offsetY;
        // 层罩的左上角坐标位置，并对其进行限制：无法超出原图区域左上角
        let topX = x - 100 < 0 ? 0 : x - 100;
        let topY = y - 100 < 0 ? 0 : y - 100;
        // 对层罩位置再一次限制，保证层罩只能在原图区域空间内
        if (topX > 200) {
          topX = 200;
        }
        if (topY > 200) {
          topY = 200;
        }
        // 通过 transform 进行移动控制
        this.topStyle.transform = `translate(${topX}px,${topY}px)`;
        this.r_img.transform = `translate(-${2 * topX}px,-${2 * topY}px)`;
      },
      // 鼠标移出函数
      outHandler() {
        // 控制层罩与放大空间的隐藏
        this.topShow = false;
        this.rShow = false;
      },
      // 添加购物车
      addShopping() {
        let title = document.querySelector('.goods_title').innerHTML;
        let rightImg = document.querySelector('.rightImg').src;
        let activity_price = document.querySelector('.activity_price').innerHTML;
        let amount = document.querySelector('#amount').value;
        let code = true
        console.log(title);
        activity_price = activity_price.slice(1,)
        sessionStorage.setItem('title', title);
        sessionStorage.setItem('rightImg', rightImg);
        sessionStorage.setItem('activity_price', activity_price);
        sessionStorage.setItem('amount', amount);
        sessionStorage.setItem('code', code);
        alert('添加成功！')
      }
    }
  }
</script>

<style lang="less" scoped>
  #tab-nav {
    background-color: #e3e4e5;
    border-top: 1px solid #666;
    border-bottom: 1px solid #ccc;
  }
    ul {
      list-style: none;
    }

    .active {
      border: 1px solid #f00 !important;
    }

    .imgMerror {
      position: relative;
      margin-top: 30px;

    }

    /* 放大的图片，通过定位将左上角定位到(0,0) */
    .rightImg {
      display: inline-block;
      width: 800px;
      height: 800px;
      position: absolute;
      top: 0;
      left: 0;
    } /* 右边的区域图片放大空间 */
    .right {
      /*position: absolute;*/
      /*left: 412px;*/
      margin-left: 412px;
      width: 400px;
      height: 400px;
      border: 1px solid red;
      position: relative;
      overflow: hidden;
      z-index: 1;
    } /* 一个最高层层罩 */
    .maskTop {
      width: 400px;
      height: 400px;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
    } /* 层罩，通过定位将左上角定位到(0,0) */
    .top {
      width: 200px;
      height: 200px;
      background-color: lightcoral;
      opacity: 0.4;
      position: absolute;
      top: 0;
      left: 0;
    } /* 原图的显示 */
    .leftImg {
      width: 400px;
      height: 400px;
      display: inline-block;
    } /* 原图的容器 */
    .left {
      position: relative;
      width: 400px;
      height: 400px;
      border: 1px solid teal;
      cursor: move;
      float: left;
    }

    .goods {
      position: absolute;
      left: 540px;
      top: 0;
      width: 588px;
      .goods_title {
        font-weight: bold;
        font-size: 18px;
      }

      .activity {
        padding: 8px;
        background-color: #eee;
        margin-top: 10px;
        p{
          font-size: 14px;
          color: #333;
        }
      }

      .activity_price {
        font-weight: bold;
        font-size: 24px;
        color: #f00b6c;
        margin-left: 15px;
      }

      .favourable {
        font-family: 宋体;
        margin-left: 30px;
        i {
          font-style: normal;
          text-decoration: underline;
          margin-left: 10px;
          color: #f09c1f;
          cursor: pointer;
        }
      }


      .express {
        font-size: 10px;
      }

      .flavor {
        li {
          margin-bottom: 3px;
          height: 50px;
          margin-left: 50px;
          overflow: hidden;
        }
        a {
          display: inline-block;
          font-size: 12px;
          text-decoration: none;
          color: #000;
          line-height: 30px;
          border: 1px solid #ccc;
          overflow: hidden;
          padding: 0 15px;
          &:hover {
            border: 1px solid #f00;
          }
        }
      }


      .amount {
        input {
          width: 60px;
          height: 30px;
          margin: -12px 0 0 25px;
        }
        span {
          font-size: 14px;
          margin-left: 20px;
          color: #968787;
        }
      }

      .code {
        display: flex;
        flex-direction: column;
        margin-left: 8px;
        transform: translateY(-8px);
        button {
          width: 22px;
          height: 16px;
          line-height: 16px;
          cursor: pointer;
        }
      }

      .btn {
        margin-top: 20px;
        transform: translateX(9%);
        button {
          width: 160px;
          height: 40px;
          background-color: #ffeded;
          border: 1px solid #ff0036;
          cursor: pointer;
        }
      }
    }



</style>
