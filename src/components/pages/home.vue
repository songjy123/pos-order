<template>
  <div class="whole">
    <div class="head-title">休息中</div>
    <!-- 个人订单数量 -->
    <div class="head-num">
      <div class="head-num-first">
        <div class="num-style">{{num.weekNum}}</div>
        <div class="word-style">本周接单</div>
        <div class="e-style">Weeks Order</div>
      </div>
      <div class="head-num-second">
        <div class="num-style">{{num.monthNum}}</div>
        <div class="word-style">本月接单</div>
        <div class="e-style">Weeks Order</div>
      </div>
      <div class="head-num-third">
        <div class="num-style">{{num.pmNum}}</div>
        <div class="word-style">当前排名</div>
        <div class="e-style">Weeks Order</div>
      </div>
    </div>
    <!-- 详细信息 -->
    <div class="content-info">
      <div>详细信息</div>
    </div>
    <div class="bottom-info">
      <div>
        <div><van-icon name="manager-o" size="30px" /></div>
        <div>个人中心</div>
      <div>
        <div >
          <div></div>
        </div>
      </div>
      <div>
        <div><van-icon name="manager-o" size="30px" /></div>
        <div>历史订单</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      num: {
        weekNum: 20,
        monthNum: 60,
        pmNum: 8
      }
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" rel="stylesheet/less">
.whole {
  width:100%;
  height: 100vh;
  background-color: #fff
  .head-title {
    width:100%;
    height: 5%;
  }
  .head-num {
    width:100%;
    height: 15%;
    padding-left: 0.05rem;
    padding-right: 0.05rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .num-style {
      font-size: 0.5rem;
    }
    .word-style {
      font-size: 0.2rem
    }
    .word-style: {
      font-size: 0.12rem
    }
    .head-num-first {
    }
    .head-num-second {
    }
    .head-num-third {
    }
  }
  .content-info{
    width:100%;
    height: 70%;
    overflow: auto;
  }
  .bottom-info{
    width:100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
