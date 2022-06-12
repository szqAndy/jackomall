<template>
  <div id="jac_fs_col">
    <div class="user-info">
      <div class="user-up">
        <div class="user-img"></div>
        <div @click="drawer = true" class="user-nameID" type="primary">未登录</div>
        <el-drawer
          title="我是标题"
          :visible.sync="drawer"
          :with-header="false">
         <div class="userImg">
           <div class="img"></div>
         </div>
          <p class="userName" style="font-weight: bold; text-align: center; font-size: 24px;">未登录</p>
          <div class="state">
            <a href="#" v-for="item in state">
              <div :class="item.ico" style="font-size: 22px;"></div>
              <div>{{item.title}}</div>
            </a>
          </div>
        </el-drawer>
      </div>
      <div class="user-code">
        <a href="#" v-for="item in user">
          <p v-if="!item.code">0</p>
          <p>{{item.code}}</p>
          <span>{{item.title}}</span>
        </a>
      </div>
      <div class="notice">
        <p class="title">公告 最近新鲜事！~</p>
        <ul>
          <li v-for="item in notice"><span>{{item.type}}</span>{{item.content}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FsCol",
    props: {
      initialSpeed: {
        type: Number,
        default: 20
      }, // 图片移动速度
      initialInterval: {
        type: Number,
        default: 1
      } // 如果是一个组件 接受外部传入的切换周期
    },
    data () {
      return {
        drawer: false,
        state: [
          {
            ico: 'el-icon-suitcase',
            title: '待付款'
          },
          {
            ico: 'el-icon-truck',
            title: '待发货'
          },
          {
            ico: 'el-icon-suitcase-1',
            title: '待收款'
          },
          {
            ico: 'el-icon-s-comment',
            title:'待评价'
          },
          {
            ico: 'el-icon-dish',
            title: '退款'
          }
        ],
        user: [
          {
            code: sessionStorage.getItem('num'),
            title: '购物车'
          },{
            title: '待收款'
          },{
            title: '待发货'
          },{
            title: '待付款'
          },{
            title: '待评论'
          }
          ],
        notice: [
          {
            type: '热点',
            content: '商店平台打击流量造假公告'
          },
          {
            type: '活动',
            content: '鞋子全场5折 快点来看看吧！！'
          },
          {
            type: '活动',
            content: '鞋子全场5折 快点来看看吧！！'
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  #jac_fs_col {
    width: 280px;
    margin-left: 10px;
    background-color: #fff;
    .user-img {
      width: 80px;
      height: 80px;
      background-color: #000;
      border-radius: 50%;
      margin: 15px auto;
    }
    .user-nameID {
      color: #f814ff;
      text-align: center;
      cursor: pointer;
    }
    .user-code>a {
      display: inline-block;
      width: 20%;
      height: 50px;
      text-decoration: none;
    }
    .user-code> a p {
      font-weight: bold;
      text-align: center;
      color: #f814ff;
    }
    .user-code> a span {
      display: block;
      text-align: center;
      color: #000;
    }
    .notice {
      padding: 10px 10px;
    }
    .notice li {
      font-size: 14px;
      overflow: hidden;
    }
    .notice .title {
      font-family: '宋体';
      font-size: 14px;
      font-weight: bold;
      height: 25px;
      border-bottom: 2px solid #f814ff;;
    }
    .notice span {
      font-weight: bold;
      margin: 10px 15px 0 0;
      color: #f814ff;
    }
    .userImg {
      height: 100px;
      .img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #000;
        margin: 30px auto;
      }
    }

    .state {
      display: flex;
      flex-direction: row;
      justify-content: center;
      a {
        display: inline-block;
        text-align: center;
        width: 100px;
        text-decoration: none;
        color: #f814ff;
      }
    }
  }
</style>
