<template>
  <div id="mod-help-list">
    <div class="mod-help-nav" v-for="item in lists">
      <h5 class="mo-help-nav-tit">{{item.title}}</h5>
      <ul class="mod-help-nav-con">
        <li v-for="items in item.items"><a :href="items.url">{{items.name}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {request} from "network/request";
  export default {
    name: "ModHelp",
    data() {
      return {
        lists: []
      }
    },
    created() {
      request({
        url: '/help'
      }, res => {
        this.lists = res.data
        console.log(res.data);

      }, err => {

      })
    }
  }
</script>

<style lang="less" scoped>
  #mod-help-list {
    display: flex;
    justify-content: center;
    .mod-help-nav {
      width: 200px;
      a {
        display: inline-block;
        text-decoration: none;
        font-size: 14px;
        color: #666;
        margin: 5px 0;
        &:hover {
          color: #f814ff;
        }
      }
    }
  }
</style>
