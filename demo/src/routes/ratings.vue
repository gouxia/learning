<template>
  <div class="ratings">
    <!-- 上 -->
    <div class="ratings-title">
      <div class="pingfen">
        <div class="pingfen1">3.9</div>
        <div class="pingfen2">综合评分</div>
        <div class="pingfen3">高于周边商家69.2%</div>
      </div>
      <div class="fuwu">
        <div class="fuwu1">
          <span>服务态度</span>
          <div class="star">
            <img src="../assets/star24_on@2x.png" />
          </div>
          <div class="star">
            <img src="../assets/star24_on@2x.png" />
          </div>
          <div class="star">
            <img src="../assets/star24_on@2x.png" />
          </div>
          <div class="star">
            <img src="../assets/star24_on@2x.png" />
          </div>
          <div class="star">
            <img src="../assets/star24_off@2x.png" />
          </div>
          <span>4.0</span>
        </div>
        <div class="fuwu1">
          <span>服务态度</span>
          <div class="star">
            <img src="../assets/star24_on@2x.png" />
          </div>
          <div class="star">
            <img src="../assets/star24_on@2x.png" />
          </div>
          <div class="star">
            <img src="../assets/star24_on@2x.png" />
          </div>
          <div class="star">
            <img src="../assets/star24_on@2x.png" />
          </div>
          <div class="star">
            <img src="../assets/star24_off@2x.png" />
          </div>
          <span>3.9</span>
        </div>
        <div class="fuwu1">
          送达时间
          <div class="time">44分钟</div>
        </div>
      </div>
    </div>
    <!-- 中 -->
    <div class="ratings-content">
      <div class="content-item"></div>
      <div class="manyi">
        <div class="manyi1" style="background-color: #00a0dc;">全部57</div>
        <div class="manyi1" style="background-color: #ccecf8;">满意47</div>
        <div class="manyi1" style="background-color: #e9ebec;">不满意10</div>
      </div>
      <div class="neirong">
        <img src="../assets/duihao.png" />
        <span>只看有内容的评价</span>
      </div>


            <!-- 模板字符串（template string）是增强版的字符串，用反引号（`）标识。
           模板字符串中嵌入变量，需要将变量名写在${}之中。 -->
      <div
        class="pingjia"
        v-for="(ratingItem, ratingIndex) in ratings"
          :key="`rating ${ratingItem.username}${ratingIndex}`"     
      >
        <div class="pingjia-item1">
          <div class="touxiang">
            <img class="touxiang-item" :src="ratingItem.avatar" />
          </div>
          <div class="username">
            <p>{{ ratingItem.username }}</p>
            <p>
              <img src="../assets/star24_on@2x.png" />
              <img src="../assets/star24_on@2x.png" />
              <img src="../assets/star24_on@2x.png" />
              <img src="../assets/star24_on@2x.png" />
              <img src="../assets/star24_off@2x.png" />
            </p>
          </div>
          <div class="songda">
            <span>{{ ratingItem.deliveryTime }}分钟送达</span>
          </div>
          <div class="shijian">
            <span style="padding-left: 60px;">2016-07-13</span>
            <span style="padding-left: 10px;">20:33</span>
          </div>
        </div>

        <div class="pingjia-item2">
          {{ ratingItem.text }}
        </div>

        <div class="pingjia-item3">
          <div class="dianzan">
            <img src="../assets/dianzan.png" />
          </div>
          <div
            class="shiwu"
            v-for="recommendItem in ratingItem.recommend"
            :key="recommendItem"
          >
            {{ recommendItem }}
          </div>
        </div>
      </div>
      <!-- 下 -->
      <div class="ratings-gouwu">
        <div class="gouwuleft">
          <div class="gouwulogo">
            <img src="../assets/gouwuche.png" />
          </div>
          <div class="lala">￥0</div>
        </div>
        <div class="gouwucenter">
          <span>另需配送费￥4元</span>
        </div>
        <div class="gouwuright">
          <span>￥20元起送</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mockData from "../mock.json";
export default {
  data() {
    return {
      ratings: mockData.ratings,
    };
  },
};
</script>

<style lang="scss" scoped>
.ratings {
  .ratings-title {
    display: flex;
    width: 100%;
    height: 100px;
    margin-top: 18px;
    .pingfen {
      width: 137px;
      height: 100%;
      text-align: center;
      border-right: 1px solid rgba(78, 76, 76, 0.1);
      .pingfen1 {
        font-size: 24px;
        color: rgb(255, 153, 0);
        line-height: 28px;
        padding-bottom: 6px;
      }
      .pingfen2 {
        font-size: 10px;
        color: rgb(7, 17, 27);
        line-height: 10px;
        padding-bottom: 8px;
      }
      .pingfen3 {
        font-size: 12px;
        color: rgba(72, 103, 134, 0.9);
        line-height: 12px;
      }
    }
    .fuwu {
      width: 237px;
      height: 100%;
      margin-left: 24px;
      margin-right: 24px;
      .fuwu1 {
        height: 25px;
        width: 90%;
        margin-bottom: 8px;
        display: flex;
        span {
          padding-right: 6px;
          padding-left: 6px;
        }
        .star {
          flex: 1;
          width: 15px;
          height: 24px;
        }
      }
    }
  }
  .ratings-content {
    .content-item {
      height: 20px;
      background-color: #f3f5f7;
    }
    .manyi {
      display: flex;
      width: 60%;
      margin-bottom: 18px;
      margin-top: 18px;
      margin-left: 16px;
      height: 34px;
      text-align: center;
      line-height: 35px;
      .manyi1 {
        flex: 1;
        margin-right: 10px;
      }
    }
    .neirong {
      width: 100%;
      height: 49px;
      margin-left: 18px;
      padding-top: 18px;
      color: #93999f;
      border-top: 1px solid #e6e7e8;
      img {
        width: 20px;
        height: 20px;
      }
      span {
        font-size: 16px;
        padding-left: 10px;
      }
    }
    .pingjia {
      width: 100%;
      height: 132px;
      border-bottom: 1px solid #e6e7e8;
      border-top: 1px solid #e6e7e8;
      .pingjia-item1 {
        display: flex;
        width: 100%;
        height: 45px;
        margin-left: 18px;
        padding-top: 18px;
        .touxiang {
            width: 8%;
            height: 75%;
            .touxiang-item{
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
         
        }
        .username {
          width: 20%;
          font-size: 10px;
          color: #93999f;
          line-height: 12px;
          p img {
            width: 15px;
            padding-top: 8px;
          }
        }
        .songda {
          height: 20px;
          font-size: 10px;
          font-weight: 200;
          color: #93999f;
          line-height: 12px;
          padding-top: 20px;
        }
        .shijian {
          height: 20px;
          font-size: 10px;
          font-weight: 200;
          color: #93999f;
          line-height: 12px;
          padding-top: 5px;
        }
      }
      .pingjia-item2 {
        margin-left: 60px;
      }
      .pingjia-item3 {
        display: flex;
        margin-top: 8px;
        .dianzan {
          margin-left: 60px;
        }
        .shiwu {
          border: 1px solid #e6e7e8;
          margin-left: 8px;
          font-size: 9px;
          line-height: 16px;
          color: #93999f;
        }
      }
    }
  }
  .ratings-gouwu {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 48px;
    display: flex;
    .gouwuleft {
      /* flex:1; */
      background-color: #141d27;
      width: 30%;
      display: flex;
      .gouwulogo {
        background-color: rgba(255, 255, 255, 0.4);
        position: relative;
        top: -10px;
        margin: 0 12px;
        width: 56px;
        height: 56px;
        box-sizing: border-box;
        vertical-align: top;
        border-radius: 50%;
        img {
          width: 56px;
          height: 56px;
        }
      }
      .lala {
        padding-top: 12px;
        display: inline-block;
        font-size: 16px;
        color: #919396;
        font-weight: 700;
        line-height: 24px;
      }
    }
    .gouwucenter {
      background-color: #141d27;
      border-left: 1px solid rgba(255, 255, 255, 0.1);
      width: 150px;
      span {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.4);
        font-weight: 700;
        line-height: 3;
        text-align: center;
      }
    }
    .gouwuright {
      background-color: rgb(77, 85, 93);
      text-align: center;
      width: 105px;
      span {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.4);
        font-weight: 700;
        line-height: 4;
      }
    }
  }
}

.time {
  margin-left: 12px;
}
</style>
