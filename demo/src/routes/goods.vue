<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul class="caidan">
        <li v-for="item in goods" :key="item.name" class="caidan1">
          <span class="text">{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <div v-for="goodItem in goods" :key="goodItem.name">
        <div class="foods-title">
          <span>{{ goodItem.name }}</span>
        </div>
        <div
          class="foods-item"
          v-for="foodItem in goodItem.foods"
          :key="foodItem.name"
        >
          <div class="left" @click="toCheckDetail(foodItem)">
            <img :src="foodItem.image" />
          </div>
          <div class="right">
            <div class="foods-name">
              <span>{{ foodItem.name }}</span>
            </div>
            <div class="foods-description">
              <span>{{ foodItem.description }}</span>
            </div>
            <div class="foods-xiaoliang">
              <span>月售{{ foodItem.sellCount }}份</span>
              <span style="margin-left:12px;"
                >好评率{{ foodItem.rating }}%</span
              >
            </div>
            <div class="foods-jiage">
              <div class="price-info-wrapper">
                <div class="current-price">￥{{ foodItem.price }}</div>
                <div v-if="foodItem.oldPrice" class="old-price">
                  ￥{{ foodItem.oldPrice }}
                </div>
              </div>
              <div class="cartcontrol-wrapper">
                <cartcontrol :food="foodItem"></cartcontrol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shop">
        <div class="shopleft">
          <div class="shoplogo">
            <img src="../assets/gouwuche.png" />
          </div>
          <div class="lala">￥0</div>
        </div>
        <div class="shopcenter">
          <span>另需配送费￥4元</span>
        </div>
        <div class="shopright">
          <span>￥20元起送</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
import mockData from "../mock.json";
import cartcontrol from  "../components/cartcontrol"

export default {
  data() {
    return {
      goods: mockData.goods,
    };
  },
  components: {
    cartcontrol
  },
  methods: {
    //当点击时，进入食品的详情页
    toCheckDetail(goodDetail) {
      //saveGoodDetail，提交修改的食品详情信息
      store.commit("saveGoodDetail", {
        goodDetail,
      });
      this.$router.push({
        path: "/goodDetail",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.goods {
  display: flex;
  position: absolute;
  width: 100%;
  top: 180px;
  bottom: 50px;
  /* 超出部分隐藏 */
  overflow: hidden;
  left: 0px;
  .menu-wrapper {
    /* 第一个参数是等分，第二个参数是根据内容的缩放情况，第三个参数是占位大小 */
    // flex: 0 0 90px;
    width: 80px;
    background: #f3f5f7;
    text-align: center;
    .caidan {
      .caidan1 {
        height: 56px;
        width: 80px;
        border-bottom: 1px solid gainsboro;
        line-height: 14px;
        display: table;
        .text {
          font-size: 12px;
          font-weight: 200;
          line-height: 14px;
          color: rgb(77, 85, 93);
          display: table-cell;
          vertical-align: middle;
          padding-left: 12px;
        }
      }
    }
  }
  .foods-wrapper {
    flex: 1;
    overflow: scroll;
    .foods-title {
      height: 30px;
      background: #f3f5f7;
      color: rgb(77, 85, 93);
      border-left: 3px solid gray;
      padding-left: 20px;
      line-height: 2;
    }
    .foods-item {
      display: flex;
      width: 100%;
      height: 100px;
      border-bottom: 1px solid #f3f5f7;
      padding-right: 10px;
      box-sizing: border-box;
      .left {
        width: 60px;
        height: 60px;
        margin-right: 10px;
        img {
          width: 100%;
          margin-top: 18px;
          margin-left: 18px;
        }
      }
      .right {
        height: 60px;
        width: 210px;
        margin-top: 18px;
        margin-left: 20px;
        .foods-jiage {
          display: flex;
          height: 20px;
          color: red;
          font-weight: normal;
          font-size: 14px;
          line-height: 24px;
          // width: 40%;
          justify-content: space-between;
          .price-info-wrapper {
            display: flex;
            .current-price {
              color: red;
              font-weight: normal;
              font-size: 14px;
              line-height: 24px;
            }
            .old-price {
              text-decoration: line-through;
              color: rgb(147, 153, 159);
              line-height: 24px;
              font-size: 10px;
              font-weight: normal;
            }
          }
          .cartcontrol-wrapper {
            // background-color: gray;
            height: 20px;
            width: 60px;
          }
        }

        .foods-name span {
          font-size: 14px;
          color: rgb(16, 27, 37);
          line-height: 14px;
        }
        .foods-xiaoliang span {
          font-size: 10px;
          color: rgb(147, 153, 159);
          line-height: 10px;
        }
        .foods-description span {
          font-size: 10px;
          color: rgb(147, 153, 159);
          line-height: 10px;
        }
      }
    }
  }
  .shop {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 48px;
    display: flex;
    .shopleft {
      flex: 1;
      background-color: #141d27;
      display: flex;
      .shoplogo {
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
        font-size: 16px;
        color: #919396;
        font-weight: 700;
        line-height: 24px;
      }
    }
    .shopcenter {
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
    .shopright {
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
</style>
