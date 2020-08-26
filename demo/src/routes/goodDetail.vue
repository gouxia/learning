<template>
  <div>
    <div class="food">
      <div class="food-item1">
        <img :src="goodDetail.image" />
      </div>
      <div class="food-item2">
        <div class="item2-1">
          {{ goodDetail.name }}
        </div>
        <div class="item2-2">
          <div class="xiaoliang">月售{{ goodDetail.sellCount }}份</div>
          <div class="haoping">好评率{{ goodDetail.rating }}%</div>
        </div>
        <div class="item2-3">
          <div class="newjiage">￥{{ goodDetail.price }}</div>
          <div class="oldjiage">￥{{ goodDetail.oldPrice }}</div>
          <div class="gouwuche">加入购物车</div>
        </div>
      </div>
      <div class="food-item3">
        <div class="item3-4"></div>
        <div class="jieshao">商品介绍</div>
        <div class="xiangxi">
          {{ goodDetail.info }}
        </div>
        <div class="item3-4"></div>
      </div>
      <div class="food-item4">
        <div class="content-item">商品评价</div>
        <div class="manyi">
          <div class="manyi1" style="background-color: #00a0dc;">全部57</div>
          <div class="manyi1" style="background-color: #ccecf8;">推荐47</div>
          <div class="manyi1" style="background-color: #e9ebec;">吐槽10</div>
        </div>
        <div class="neirong">
          <img src="../assets/duihao.png" />
          <span>只看有内容的评价</span>
        </div>
        <div
          class="pingjia"
          v-for="ratingItem in goodDetail.ratings"
          :key="ratingItem.username"
        >
          <div class="pingjia-item1">
            <div class="time2">
              {{ ratingItem.rateTime | formtData}}
            </div>
            <div class="songda">
              21:52
            </div>
            <div class="id">
              {{ ratingItem.username }}
            </div>
          </div>
          <div class="pingjia-item2">
            <div class="dianzan">
              <img src="../assets/chaping.png" />
            </div>
            <div class="userpingjia">
              {{ ratingItem.text }}
            </div>
          </div>
        </div>
      </div>
      <div class="food-gouwu">
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
      <!-- 将food页隐藏 -->
      <div class="food-close" @click="hideFood">
        <div class="icon-close">
          <img src="../assets/06.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import store from "../store";
import mockData from "../mock.json";
export default {
  data() {
    return {
      goods: mockData.goods,
      foodShow: false,
    };
  },
  //从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态
  computed: {
    goodDetail() {
      //读取store中的状态
      return store.state.goodDetail;
    },
  },
  //过滤器来处理时间问题
  filters: {
    formtData(dataTime =1469261964000 ) {
      let dataStr = "";
      const curDate = new Date(dataTime);
      const YYYY = curDate.getFullYear();
      const MM = curDate.getMonth() + 1;
      const DD = curDate.getDate();
      const HH = curDate.getHours();
      const FF = curDate.getMinutes();
      dataStr = `${YYYY}-${MM < 10 ? "0" + MM : MM}-${DD < 10 ? "0" + DD : DD}  ${HH < 10 ? "0" + HH : HH}:${FF < 10 ? "0" + FF : FF}`;
      return dataStr;
    },
  },
  methods: {
    // 当点击时，详情页消失
    hideFood() {
      this.foodShow = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.food {
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: white;
  top: 0;
  left: 0;
  .food-item1 {
    img {
      width: 100%;
      height: 375px;
    }
  }
  .food-item2 {
    width: 100%;
    height: 108px;
    margin-left: 18px;
    .item2-1 {
      font-size: 14px;
      font-weight: 700;
      color: #07111b;
      line-height: 14px;
    }
    .item2-2 {
      display: flex;
      .xiaoliang {
        font-size: 10px;
        color: #93999f;
        line-height: 10px;
        margin-top: 8px;
      }
      .haoping {
        font-size: 10px;
        color: #93999f;
        line-height: 20px;
        text-decoration: line-through;
        margin-left: 12px;
        margin-top: 8px;
      }
    }
    .item2-3 {
      display: flex;
      .newjiage {
        font-size: 14px;
        font-weight: 700;
        color: red;
        line-height: 24px;
        margin-top: 18px;
      }
      .oldjiage {
        font-size: 10px;
        font-weight: 700;
        color: #93999f;
        line-height: 24px;
        text-decoration: line-through;
        margin-left: 14px;
        margin-top: 18px;
      }
      .gouwuche {
        width: 74px;
        height: 24px;
        background-color: #00a0dc;
        border-radius: 24px;
        margin-left: 195px;
        margin-top: 20px;
      }
    }
  }
  .food-item3 {
    .item3-4 {
      height: 16px;
      background-color: #f3f5f7;
      border-bottom: 1px solid #e6e7e8;
      border-top: 1px solid #e6e7e8;
      margin-top: 18px;
    }
    .jieshao {
      color: #464a4f;
      font-size: 14px;
      font-weight: 700;
      line-height: 14px;
      margin-top: 36px;
      margin-left: 18px;
    }
    .xiangxi {
      font-size: 12px;
      font-weight: 200;
      color: #979a9e;
      line-height: 24px;
      margin-top: 6px;
      margin-left: 20px;
      margin-bottom: 18px;
    }
  }
  .food-item4 {
    .content-item {
      color: #464a4f;
      font-size: 14px;
      font-weight: 700;
      line-height: 14px;
      margin-top: 18px;
      margin-left: 18px;
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
      height: 90px;
      border-bottom: 1px solid #e6e7e8;
      border-top: 1px solid #e6e7e8;
      .pingjia-item1 {
        display: flex;
        width: 100%;
        height: 25px;
        margin-left: 18px;
        padding-top: 18px;
        .time2 {
          width: 20%;
          font-size: 10px;
          color: #93999f;
          line-height: 12px;
        }
        .songda {
          height: 20px;
          font-size: 10px;
          font-weight: 200;
          color: #93999f;
          line-height: 12px;
        }
        .id {
          height: 20px;
          font-size: 10px;
          font-weight: 200;
          color: #93999f;
          line-height: 12px;
          margin-left: 170px;
        }
      }
      .pingjia-item2 {
        margin-left: 18px;
        display: flex;
        .userpingjia {
          margin-left: 4px;
          font-size: 12px;
          color: #07111b;
          line-height: 16px;
        }
      }
    }
  }
  .food-gouwu {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 48px;
    display: flex;
    .gouwuleft {
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
  .food-close {
    height: 52px;
    .icon-close {
      width: max-content;
      margin: auto;
      position: fixed;
      bottom: 80px;
      left: 90%;
    }
  }
}
</style>
