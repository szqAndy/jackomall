<template>
  <div id="mod-copyright">
    <div class="mod-copyright-info">
      <p>网站友谊声明</p>
      <p>本站所有的网络资源部分来自于“京东商城”，源码已开放在GitHub中</p>
      <p>如有侵权！！请联系站长，并承诺在24小时内删除</p>
      <p>邮箱：2108772030@qq.com | 2108772030@gmail.com</p>
    </div>
    <div class="mod-copyright-links">
      <span v-for="item in lists"><a :href="item.url">{{item.title}}</a></span>
    </div>
  </div>
</template>

<script>
  import {request} from "network/request";
  export default {
    name: "ModCopyright",
    data() {
      return {
        lists: []
      }
    },
    created() {
      request({
        url: '/ModCopyreight'
      }, res => {
        this.lists = res.data
      }, err => {

      })
    }
  }
</script>

<style lang="less" scoped>
  #mod-copyright {
    margin-top: 50px;
    .mod-copyright-links {
      margin-top: 50px;
      display: flex;
      justify-content: center;
      span {
        position: relative;
        display: inline-block;
        margin-right: 50px;
        &::before {
          position: absolute;
          top: 0;
          right: -25px;
          content: '';
          width: 2px;
          height: 20px;
          background-color: #ccc;
        }
        &:last-child::before {
          display: none;
        }
      }
      a {
        text-decoration: none;
        color: #666;
        &:hover {
          color: #f814ff;
        }
      }
    }
    .mod-copyright-info {
      p {
        font-size: 14px;
        display: flex;
        justify-content: center;
        color: #666;
      }
    }
  }

</style>
