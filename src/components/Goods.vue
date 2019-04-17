<template>
  <div class="goods">
    <div class="top">
      <!-- 轮播图 商品信息-->
      <div class="top-pic">
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" class="goods-swipe" style="height: 80%">
          <van-swipe-item><img :src="thumb" ></van-swipe-item>
          <van-swipe-item><img :src="thumb" ></van-swipe-item>
          <van-swipe-item><img :src="thumb" ></van-swipe-item>
          <van-swipe-item><img :src="thumb" ></van-swipe-item>
        </van-swipe>
        <!-- 信息 -->
        <div class="top-word">
          <div class="name">
            <div class="name-one">云南小菠萝</div>
            <div class="name-two">￥13.4元/kg</div>
          </div>
          <div class="num">
            <div style="width: 50%">运费：15元/次</div>
            <div style="width: 50%">剩余：300箱</div>
          </div>
        </div>
      </div>
      <!-- 店铺信息 -->
      <div class="center-content">
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item title="松下问童子" name="1">
            本店
          </van-collapse-item>
          <van-collapse-item title="其他门店" name="2">
            其他门店
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
    <!-- 购物信息 fixed在底部 -->
    <div class="botton-goods">
      <van-goods-action>
        <van-goods-action-mini-btn
          icon="chat-o"
          text="客服"
        />
        <van-goods-action-mini-btn
          info="5"
          icon="cart-o"
          text="购物车"
        />
        <van-goods-action-mini-btn
          icon="shop-o"
          text="店铺"
        />
        <van-goods-action-big-btn text="加入购物车" />
        <van-goods-action-big-btn
          primary
          text="立即购买"
        />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: null,
      thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg'
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" rel="stylesheet/less">
.goods {
  width:100%;
  height: 100vh;
  .top {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 50px); ;
    .top-pic {
      height: 84%;
      .goods-swipe {
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      .top-word {
        height: 20%;
        font-size: 0.2rem;
        background-color: #fff;
        .name {
          .name-one {
            padding-top: 0.15rem;
            padding-left: 0.15rem;
            font-size: 0.25rem;
          }
          .name-two {
            margin-top: 0.05rem;
            margin-left: 0.15rem;
            font-size: 0.15rem;
            font-weight: bolder;
            color: red;
          }
        }
        .num {
          padding-left: 0.15rem;
          padding-top: 0.05rem;
          font-size: 0.18rem;
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .center-content {
      height: 15%;
      overflow: auto;
    }
  }
  .botton-goods {
    border: solid 1px #000
  }
}
</style>
