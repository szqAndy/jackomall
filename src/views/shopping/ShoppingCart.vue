<template>
  <div class="pic">
    <div class="pic-img">
      <slot name="img">
        <img src="" alt="">
      </slot>
    </div>
    <div class="pic-title"><slot name="title"></slot></div>
    <div class="pic-code">
      <slot name="code">
        <p>
          <span>￥85.00</span>
          <button>+</button>1<button>-</button><button>删除</button>
        </p>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Shopping-cart"
  }
</script>

<style lang="less" scoped>
  .pic {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    border: 1px solid #eee;
    margin: 10px 0;
  }

  .pic-img {
    width: 100px;
    margin: 5px 5px;
  }

  img {
    width: 100%;
  }


  .pic-title {
    flex: 2;
    margin: 0 15px;
    padding: 10px 0;
  }

  .pic-code {
    margin-top: 30px;
  }

  .pic-code span{
    font-weight: bold;
    font-size: 22px;
    text-align: center;
    color: #f814ff;
  }

  .pic-code button {
    margin: 0 15px;
  }
</style>
