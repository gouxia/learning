<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" />
      </div>
      <div class="content">
        <div class="title">
          <div class="brand">
            <img src="../../../src/assets/brand@2x.png" />
          </div>
          <div class="name">{{ seller.name }}</div>
        </div>
        <div class="description">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <div class="icon">
            <img src="../../../src/assets/decrease_1@2x.png" />
          </div>
          <div class="text">{{ seller.supports[0].description }}</div>
        </div>
        <div v-if="seller.supports" class="support-count" @click="showDetail">
          <span class="count">{{ seller.supports.length }}个</span>
          <i class="tubiao"> > </i>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <div class="bulletin-title">
        <img src="../../../src/assets/bulletin@2x.png" />
      </div>
      <div class="bulletin-text">{{ seller.bulletin }}</div>
      <i class="bulletin-jiantou">></i>
    </div>
    <div v-show="detailShow" class="detail">
      <div class="detail-wrapper">
        <div class="detail-main">
          <div class="main-name">
            粥品香坊（大运村）
          </div>
          <div class="main-star">
            <div class="star">
              <img src="../../../src/assets/star24_on@2x.png" />
            </div>
            <div class="star">
              <img src="../../../src/assets/star24_on@2x.png" />
            </div>
            <div class="star">
              <img src="../../../src/assets/star24_on@2x.png" />
            </div>
            <div class="star">
              <img src="../../../src/assets/star24_on@2x.png" />
            </div>
            <div class="star">
              <img src="../../../src/assets/star24_off@2x.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="detail-content">
        <div class="main-title">
          <div class="title-left"></div>
          <div class="title-center">优惠信息</div>
          <div class="title-right"></div>
        </div>
        <div class="main-menu">
          <div class="menu-item">
            <img src="../../../src/assets/decrease_1@2x.png" />
            在线支付满28减5，满50减10
          </div>
          <div class="menu-item">
            <img src="../../../src/assets/discount_1@2x.png" />
            单人精彩赛
          </div>
          <div class="menu-item">
            <img src="../../../src/assets/discount_1@2x.png" />
            清肺雪梨汤8折抢购
          </div>
          <div class="menu-item">
            <img src="../../../src/assets/special_1@2x.png" />
            特价饮品八折抢购
          </div>
          <div class="menu-item">
            <img src="../../../src/assets/special_1@2x.png" />
            单人特色套餐
          </div>
        </div>
        <div class="main-title">
          <div class="title-left"></div>
          <div class="title-center">商家公告</div>
          <div class="title-right"></div>
        </div>
        <div class="main-menu2">
          <div class="menu-item2">
            粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。
            坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
          </div>
        </div>
      </div>
      <div class="detail-closed" @click="hideDetail">
        <div class="icon-closed"><img src="../../../src/assets/06.png" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object,
    },
  },
  data() {
    return {
      detailShow: false,
    };
  },
  methods: {
    // 当点击时，详情页显示
    showDetail() {
      this.detailShow = true;
    },
    hideDetail() {
      this.detailShow = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: #999;
  color: #fff;
  .content-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size: 0;
    display: flex;
    .avatar {
      display: inline-block;
      vertical-align: top;
      img {
        border-radius: 2px;
      }
    }
    .content {
      font-size: 14px;
      flex: 1;
      overflow: hidden;
      .title {
        margin-left: 16px;
        display: flex;
        width: 100%;
        height: 20px;
        .brand {
          display: inline-block;
          width: 30px;
          height: 20px;
          vertical-align: top;
          img {
            height: 20px;
            width: 30px;
          }
        }
        .name {
          font-size: 16px;
          color: rgb(255, 255, 255);
          line-height: 18px;
          font-weight: bold;
          margin-left: 6px;
        }
      }
      .description {
        font-size: 12px;
        color: rgb(255, 255, 255);
        line-height: 12px;
        font-weight: 200;
        margin-left: 16px;
        margin-top: 8px;
      }
      .support {
        display: flex;
        .icon img {
          width: 15px;
          height: 15px;
          margin-top: 10px;
          margin-left: 16px;

        }
        .text {
          font-size: 10px;
          color: rgb(255, 255, 255);
          line-height: 12px;
          font-weight: 200;
          margin-left: 4px;
          margin-top: 10px;
        }
      }
      .support-count {
        position: absolute;
        right: 12px;
        bottom: 18px;
        padding: 0 8px;
        height: 24px;
        line-height: 24px;
        border-radius: 14px;
        background: rgba(0, 0, 0, 0.2);
        text-align: center;
        .count {
          font-size: 10px;
        }
        .tubiao {
          font-size: 10px;
        }
      }
    }
  }
  .bulletin-wrapper {
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    background-color: rgba(7, 17, 27, 0.2);
    display: flex;
    .bulletin-title img {
      width: 28px;
      height: 18px;
    }
    .bulletin-text {
      font-size: 10px;
      margin-left: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
       white-space: nowrap;
    }
  }
  .detail {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(7, 17, 27, 0.8);
    top: 0;
    left: 0;
    .detail-wrapper {
      .detail-main {
        padding-top: 30px;
        .main-name {
          font-size: 16px;
          font-weight: 700;
          color: rgb(255, 255, 255);
          line-height: 16px;
          /* margin-top: 64px; */
          text-align: center;
        }
        .main-star {
          width: 55%;
          height: 24px;
          margin-top: 16px;
          margin-left: 25%;
          display: flex;
          .star {
            flex: 1;
          }
        }
      }
    }
    .detail-content {
      flex: 1;
      .main-title {
        display: flex;
        margin-top: 15px;
        width: 100%;
        margin-bottom: 32px;
        .title-left {
          width: 150px;
          height: 2px;
          background-color: rgba(255, 255, 255, 0.2);
          margin-left: 20px;
          margin-top: 12px;
        }
        .title-center {
          width: 90px;
          height: 22px;
          margin-left: 12px;
          margin-right: 12px;
        }
        .title-right {
          width: 150px;
          height: 2px;
          background-color: rgba(255, 255, 255, 0.2);
          margin-top: 12px;
          margin-right: 20px;
        }
      }
      .main-menu {
        width: 100%;
        height: 180px;
        .menu-item {
          height: 25px;
          width: 100%;
          margin-left: 40px;
          margin-bottom: 12px;
          font-size: 12px;
          font-weight: 200;
          color: rgb(255, 255, 255);
          line-height: 12px;
        }
      }
      .main-menu2 {
        width: 100%;
        height: 180px;
        .menu-item2 {
          height: 180px;
          width: 80%;
          margin-left: 40px;
          margin-bottom: 12px;
          font-size: 12px;
          font-weight: 200;
          color: rgb(255, 255, 255);
          line-height: 24px;
        }
      }
    }
    .detail-closed {
      height: 52px;
      .icon-closed {
        width: max-content;
        margin: auto;
      }
    }
  }
}
</style>
