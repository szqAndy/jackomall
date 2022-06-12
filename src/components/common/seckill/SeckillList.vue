<template>
  <div class="threeImg">
    <div class="Containt">
      <div class="iconleft" @click="zuohua">
        <i class="el-icon-arrow-left"></i>
      </div>
      <ul :style="{'left':calleft + 'px'}" v-on:mouseover="stopmove()" v-on:mouseout="move()">
        <li v-for="(item,index) in superurl" :key="index">
          <div class="commodity-module" @click="DetailsClick(index, item)">
            <div class="commodity-module-img">
              <img :src="require('assets/img/' + item.img + '.webp')" alt="" style="width: 100%">
            </div>
            <div class="commodity-module-title">{{item.title}}</div>
            <div class="commodity-module-price">￥{{item.price}}</div>
          </div>
        </li>
      </ul>
      <div class="iconright" @click="youhua">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import {request} from "network/request";
  export default {
    name: "SeckillList",
    data() {
      return {
        superurl: [],
        calleft: 0
      };
    },
    created() {
      this.move();
      request({
        url: '/superurl'
      }, res => {
        this.superurl = res.data;
        console.log(this.superurl);
      }, err => {
        console.log(err);
      })
    },
    methods: {
      //移动
      move() {
        this.timer = setInterval(this.starmove, 5000);
      },
      //开始移动
      starmove() {
        this.calleft -= 240;
        if (this.calleft < -1200) {
          this.calleft = 0;
        }
      },
      //鼠标悬停时停止移动
      stopmove() {
        clearInterval(this.timer);
      },
      //点击按钮左移
      zuohua() {
        this.calleft -= 240;
        if (this.calleft < -1200) {
          this.calleft = 0;
        }
      },
      //点击按钮右移
      youhua() {
        this.calleft += 240;
        if (this.calleft > 0) {
          this.calleft = -1200;
        }
      },

      DetailsClick(index, item) {
        this.$router.push('/details/' + 'commodity_' + index, () => {})
        this.$store.commit('seckillList', item)
      }
    }
  }
</script>

<style lang="less" scoped>
  .threeImg {
    height: 260px;
    background: #fff;
    min-width: 1000px;
    margin-left: 10px;
    .Containt {
      position: relative;
      width: 1000px;
      height: 260px;
      overflow: hidden;
      margin: 0 auto;
      &:hover .iconleft,
      &:hover .iconright{
        display: block;
      }
      ul {
        /*margin: 0 auto;*/
        display: flex;
        width: 2400px;
        position: absolute;
        left: 0px;
        cursor: pointer;
        height: 260px;
        li {
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          &::before {
            position: absolute;
            top: 50%;
            right: 0;
            content: '';
            width: 1px;
            height: 120px;
            background-color: #ccc;
            transform: translateY(-50%);
          }
          .commodity-module {
            width: 240px;
            .commodity-module-img {
              width: 140px;
              height: 140px;
              margin: 20px auto;
            }
            .commodity-module-title {
              font-size: 14px;
              width: 140px;
              height: 18px;
              margin: 0 auto;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              color: #333;
            }
            .commodity-module-price {
              margin: 15px;
              font-weight: bold;
              text-align: center;
              color: #f814ff;
            }
          }
        }
      }
      .iconleft,
      .iconright {
        display: none;
        position: absolute;
        top: 50%;
        width: 28px;
        height: 40px;
        z-index: 99999;
        background-color: #f814ff;
        transform: translateY(-50%);
        i {
          font-size: 18px;
          font-weight: bold;
          margin: 10px 5px;
          color: #fff;
        }
      }
      .iconleft {
        left: 0;
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
      }

      .iconright {
        right: 0px;
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
      }
    }
  }


</style>
