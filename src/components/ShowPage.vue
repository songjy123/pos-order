<template>
  <div style="width:100%; height: 100vh;background-color: #fff">
    <div class="top">
      <van-icon name="star-o" size="30px" />
      <div class="home-font-size">首页</div>
      <van-icon name="setting-o" size="30px" />
    </div>
    <div class="slider">
      <van-tabs v-model="active" class="slider-style">
        <van-tab v-for="(item1, index1) in sliderData" :title="item1.name" :key="index">
          <div class="content">
            <div v-for="(item, index) in contentData" :key="index" class="content-item">
              <div class="content-item-head-w"><div class="content-item-head" >名称：{{item.name}}</div></div>
              <div class="content-item-all">
                <div class="content-word">使用数量：{{item.name}}</div>
                <div class="content-word">总数量：{{item.num}}</div>
                <div class="content-word">备注：{{item.memo}}</div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: '配送',
      sliderData: [{
        name: '安装',
        id: 1
      }, {
        name: '配送',
        id: 2
      }, {
        name: '维护',
        id: 3
      }, {
        name: '巡视',
        id: 4
      }, {
        name: '动户',
        id: 5
      }, {
        name: '其他',
        id: 5
      }],
      contentData: [{
        id: 1,
        name: '测试一',
        num: 20,
        memo: '备注'
      }, {
        id: 2,
        name: '测试二',
        num: 20,
        memo: '备注'
      }, {
        id: 3,
        name: '测试三',
        num: 20,
        memo: '备注'
      }, {
        id: 4,
        name: '测试四',
        num: 20,
        memo: '备注'
      }, {
        id: 4,
        name: '测试四',
        num: 20,
        memo: '备注'
      }, {
        id: 4,
        name: '测试四',
        num: 20,
        memo: '备注'
      }, {
        id: 4,
        name: '测试四',
        num: 20,
        memo: '备注'
      }, {
        id: 4,
        name: '测试四',
        num: 20,
        memo: '备注'
      }]
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" rel="stylesheet/less" >
.top {
  width: 100vw;
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.36rem;
  box-sizing: border-box;
  .home-font-size {
    font-size: 0.3rem;
  }
}
.slider {
  height: 92%;
  .slider-style{
    width: 100%;
    height: 100%;
  }
  .content {
    height: 12rem;
    /*background-color: #fff;*/
    overflow: auto;
    .content-item {
      height: 3rem;
      margin: 2% 3%;
      border: solid 0.02rem #9e9e9e;
      border-radius: 0.2rem;
      .content-item-head-w {
        border-top-radius: 0.2rem;
        border-bottom: 0.02rem solid #000;
        height: 25%;
        display: flex;
        align-items: center;
        padding-left: 3%;
        .content-item-head {
          font-size:0.35rem
        }
      }
      .content-item-all {
        height: 60%;
        margin: 2% 3%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .content-word{
          font-size: 0.3rem;
        }
      }
    }
  }
}
</style>
