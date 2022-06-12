<template>
  <div id="more2">
    <div class="grid">特价频道</div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="猜你喜欢" name="first">
        <commodity-list v-for="item in list" :title="item.title">
          <img :src="require('assets/img/' + item.url + '.webp')" :alt="item.title" style="width: 100%" slot="commodity-img">
          <h2 slot="commodity-title" :class="as">{{item.title}}</h2>
          <h2 slot="commodity-price" :class="as1"><span>￥</span>{{item.price}}</h2>
        </commodity-list>
      </el-tab-pane>
      <el-tab-pane label="品质生活" name="second">
        <commodity-list v-for="item in list2">
          <img :src="require('assets/img/' + item.url + '.webp')" :alt="item.title" style="width: 100%" slot="commodity-img">
          <h2 slot="commodity-title" :class="as">{{item.title}}</h2>
          <h2 slot="commodity-price" :class="as1"><span>￥</span>{{item.price}}</h2>
        </commodity-list>
      </el-tab-pane>
      <el-tab-pane label="时代先锋" name="third">
        <commodity-list v-for="item in list3">
          <img :src="require('assets/img/' + item.url + '.webp')" :alt="item.title" style="width: 100%" slot="commodity-img">
          <h2 slot="commodity-title" :class="as">{{item.title}}</h2>
          <h2 slot="commodity-price" :class="as1"><span>￥</span>{{item.price}}</h2>
        </commodity-list>
      </el-tab-pane>
      <el-tab-pane label="最佳穿搭" name="third2">
        <commodity-list v-for="item in list4">
          <img :src="require('assets/img/' + item.url + '.webp')" :alt="item.title" style="width: 100%" slot="commodity-img">
          <h2 slot="commodity-title" :class="as">{{item.title}}</h2>
          <h2 slot="commodity-price" :class="as1"><span>￥</span>{{item.price}}</h2>
        </commodity-list>
      </el-tab-pane>
      <el-tab-pane label="百货超商" name="third3">
        <commodity-list v-for="item in list5">
          <img :src="require('assets/img/' + item.url + '.webp')" :alt="item.title" style="width: 100%" slot="commodity-img">
          <h2 slot="commodity-title" :class="as">{{item.title}}</h2>
          <h2 slot="commodity-price" :class="as1"><span>￥</span>{{item.price}}</h2>
        </commodity-list>
      </el-tab-pane>
      <el-tab-pane label="供应食品" name="fourth">
        <commodity-list v-for="item in list6">
          <img :src="require('assets/img/' + item.url + '.webp')" :alt="item.title" style="width: 100%" slot="commodity-img">
          <h2 slot="commodity-title" :class="as">{{item.title}}</h2>
          <h2 slot="commodity-price" :class="as1"><span>￥</span>{{item.price}}</h2>
        </commodity-list>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import {request} from "network/request";
  import CommodityList from "./commodity/CommodityList";
  export default {
    name: "More",
    components: {CommodityList},
    data() {
      return {
        activeName: 'second',
        as: 'commodity-item-title',
        as1: 'commodity-item-price',
        list: [],
        list2: [],
        list3: [],
        list4: [],
        list5: [],
        list6: []
      };
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      }
    },
    created() {
      request({
        url: '/second'
      }, res => {
        this.list = res.data[0]
        this.list2 = res.data[1]
        this.list3 = res.data[2]
        this.list4 = res.data[3]
        this.list5 = res.data[4]
        this.list6 = res.data[5]


      }, err => {

      })
    }
  }
</script>

<style lang="less" scoped>
  #more2 {
    margin-top: 30px;
    .grid {
      font-size: 26px;
      text-align: center;
      height: 60px;
      line-height: 60px;
      font-weight: bold;
      color: #fff;
      background: #FC466B;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #3F5EFB, #FC466B);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #3F5EFB, #FC466B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

     /deep/ .el-tabs__nav-scroll {
       margin-top: 30px;
       display: flex;
       justify-content: center;
       background-color: #fff;

       .el-tabs__item {
         width: 120px;
         height: 60px;
         text-align: center;
         line-height: 60px;
         font-weight: bold;

         &:hover {
           color: #f814ff;
         }
       }

       .is-active {
         color: #f814ff;
       }
    }

  }

</style>
