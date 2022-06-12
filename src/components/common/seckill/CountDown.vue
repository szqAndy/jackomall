<template>
  <div id="countdown-m">
    <div class="countdown-title">商品秒杀</div>
    <div class="el-icon-s-goods"></div>
    <div class="countdown-date">
      <span>{{day}}</span> - <span>{{hour}}</span> - <span>{{time}}</span> - <span>{{sec}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CountDown",
    data() {
      return {
        day: '0',
        hour: "0",
        time: "0",
        sec: "0",
        timer: null,
      };
    },
    methods: {
      seckill() {
        //获取当前事件
        let now = new Date();
        //设置目标事件
        let newtime = new Date("2022-06-14 00:00:00");
        //时间差
        let timecha = (newtime - now) / 1000;
        //计算天数
        this.day =  Math.floor((timecha / 3600) / 24)
        this.day = this.day < 10 ? '0' + this.day : '' + this.day
        //计算小时
        this.hour = Math.floor((timecha / 3600) % 24);
        this.hour = this.hour < 10 ? '0' + this.hour : '' + this.hour
        //计算分钟
        this.time = Math.floor((timecha % 3600) / 60);
        this.time = this.time < 10 ? '0' + this.time : '' + this.time
        //计算秒
        this.sec = Math.floor(timecha % 60);
        this.sec = this.sec < 10 ? '0' + this.sec : '' + this.sec
      }
    },
    mounted() {
      this.timer = setInterval(this.seckill, 1000);
    },
    destroyed() {
      clearInterval(this.timer);
    }
  }
</script>

<style lang="less" scoped>
  #countdown-m {
    position: relative;
    width: 190px;
    height: 260px;
    color: #fff;
    background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
    -webkit-background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);;
    .countdown-title,
    .el-icon-s-goods {
      position: absolute;
      font-weight: bold;
      transform: translateX(-50%);
    }
    .countdown-title{
      top: 30px;
      left: 50%;
      font-size: 22px;
    }
    .el-icon-s-goods {
      top: 90px;
      left: 50%;
      font-size: 80px;
    }
    .countdown-date {
      position: absolute;
      left: 6px;
      bottom: 15px;
      font-weight: bold;
      span {
        display: inline-block;
        width: 30px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        background-color: #fff;
        border: 1px solid #ee9adb;
        font-weight: bold;
        color: #f814ff;
        font-size: 18px;
      }
    }
  }
</style>
