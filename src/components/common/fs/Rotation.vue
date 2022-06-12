<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in src" :key="item">
      <img :src="require('assets/img/' + item + '.jpg')" alt="" style="width: 100%">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  import {request} from "network/request";

  export default {
    name: "Rotation",
    data() {
      return {
        src: []
      }
    },
    methods: {

    },
    created() {
      request({
        url: '/brr'
      }, res => {
        this.src = res.data[0].src
      }, err => {
        console.log(err);
      })
    }
  }
</script>

<style lang="less" scoped>
  /deep/ .el-carousel__container {
    width: 680px;
    height: 360px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
