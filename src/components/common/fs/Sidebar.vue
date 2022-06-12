<template>
  <div id="sidebar">
    <ul>
      <li><a href="#">{{list[0]}}</a></li>
      <li><a href="#">{{list[1]}}</a><span>/</span><a href="#">{{list[2]}}</a><span>/</span><a href="#">{{list[3]}}</a></li>
      <li><a href="#">{{list[4]}}</a><span>/</span><a href="#">{{list[5]}}</a><span>/</span><a href="#">{{list[6]}}</a></li>
      <li><a href="#">{{list[7]}}</a><span>/</span><a href="#">{{list[8]}}</a><span>/</span><a href="#">{{list[9]}}</a><span>/</span><a href="#">{{list[10]}}</a></li>
      <li><a href="#">{{list[11]}}</a><span>/</span><a href="#">{{list[12]}}</a><span>/</span><a href="#">{{list[13]}}</a><span>/</span><a href="#">{{list[14]}}</a></li>
      <li><a href="#">{{list[15]}}</a><span>/</span><a href="#">{{list[16]}}</a><span>/</span><a href="#">{{list[17]}}</a><span>/</span><a href="#">{{list[18]}}</a></li>
      <li><a href="#">{{list[19]}}</a><span>/</span><a href="#">{{list[20]}}</a><span>/</span><a href="#">{{list[21]}}</a></li>
      <li><a href="#">{{list[22]}}</a><span>/</span><a href="#">{{list[23]}}</a><span>/</span><a href="#">{{list[24]}}</a><span>/</span><a href="#">{{list[25]}}</a></li>
      <li><a href="#">{{list[26]}}</a><span>/</span><a href="#">{{list[27]}}</a><span>/</span><a href="#">{{list[28]}}</a><span>/</span><a href="#">{{list[29]}}</a></li>

    </ul>
  </div>
</template>

<script>
  import {request} from "network/request";

  export default {
    name: "Sidebar",
    data() {
      return {
        list: []
      }
    },
    created() {
      request({
        url: '/sidebar'
      }, res => {
        console.log(res.data);
        let arr = []
        function fn(n) {
          for (let k of n) {
            arr.push(k.name)
          }
        }

        fn(res.data.col_1)
        fn(res.data.col_2)
        fn(res.data.col_3)
        fn(res.data.col_4)
        fn(res.data.col_5)
        fn(res.data.col_6)
        fn(res.data.col_7)
        fn(res.data.col_8)
        fn(res.data.col_9)

        this.list = arr

      }, err => {

      })
    }
  }
</script>

<style lang="less" scoped>
  #sidebar {
    width: 210px;
    margin-right: 10px;
    background-color: #fff;

    ul {
      width: 100%;
      li {
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        transition-duration: .5s;
        &:hover {

          background-color: #ff69f0;
        }

        span {
          margin: 0 5px;
        }

        a {
          text-decoration: none;
          color: #000;
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
</style>
