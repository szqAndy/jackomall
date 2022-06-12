<template>
  <div class="top-navigation">
    <div @click="goHome"><span><i class="el-icon-s-home"></i>杰哥商店</span></div>
    <div class="top-nav-right">
      <div @click="goLogin"><slot name="login"><span></span></slot></div>
      <div @click="goRegister"><slot name="register"><span class="selected"></span></slot></div>
      <div><span>我的订单</span></div>
      <el-dropdown>
        <span class="el-dropdown-link">
          客户服务<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>会员服务</el-dropdown-item>
          <el-dropdown-item>社区服务</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <span class="el-dropdown-link">
          二维码<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <img src="~assets/img/info.jpg" alt="" style="width: 90px; padding-top: 15px">
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopNavigation",
    methods: {
      goLogin() {
        this.$router.push('/login', () => {})
      },
      goHome() {
        this.$router.push('/home', () => {})
      },
      goRegister() {
        this.$router.push('/register', () => {})
      }
    }
  }
</script>

<style lang="less" scoped>
  .top-navigation {
    display: flex;
    height: 30px;
    line-height: 30px;
    justify-content: space-between;

    .el-icon-s-home {
      margin-right: 5px;
      vertical-align: baseline;
    }

    .top-nav-right {
      div {
        display: inline-block;
        position: relative;
        padding: 0 15px;
      }
    }

    span {
      cursor: pointer;
      &:hover {
        color: #f814ff;
      }
    }

    .top-nav-right {
      div {
        &::before {
          position: absolute;
          top: 7px;
          right: 0;
          content: '';
          width: 2px;
          height: 50%;
          background-color: #ccc;
        }

        &:last-child {
          padding-right: 0;
        }

        &:last-child::before {
          content: '';
          width: 0;
        }
      }
    }
  }

</style>
