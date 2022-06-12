<template>
  <div>
    <span>{{howordsCode}}</span>
    <span v-for="item in howordsList">{{item}}</span>
  </div>
</template>

<script>
  export default {
    name: "SeachHowords",
    data() {
      return {
        howordsCode: '买一送一',
        howordsList: ['OPPO手机', '潮流服饰', '家用电器', '电脑整机', '云南白药']
      }
    },
    created() {
      let getArr = ['买一送一', '百亿补贴', '周年狂欢杰大派送', '任你挑']
      setInterval(() => {
        let i = Math.floor(Math.random() * getArr.length)
        return this.howordsCode = getArr[i]
      },3000)
    }
  }
</script>

<style lang="less" scoped>
  span {
    font-size: 14px;
    margin-right: 15px;
    color: #bbb;
    cursor: pointer;
    &:first-child {
      font-weight: bold;
      color: #f814ff;
    }
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      color: #f814ff;
    }
  }
</style>
