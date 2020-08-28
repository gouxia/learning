<template>
  <div class="ratings-gouwu" @click="foldDetail">
    <div class="gouwuleft">
      <div class="gouwulogo" @click="foldDetail">
        <!-- ：class 为动态切换多个class，原来的class不会被覆盖，也可以根据条件切换class -->
        <div :class="['logo', { 'logo-highlight': totalCount > 0 }]"></div>
        <!--v-show="totalCount > 0" 表示购物车商品数量大于0的时候，商品数量会显示，购物车没有商品时，商品数量会隐藏  -->
        <div class="num" v-show="totalCount > 0">{{ totalCount }}</div>
      </div>
      <!-- 价格大于0的时候，价格显示为高亮状态 -->
      <div class="price" :class="{ highlight: totalPrice > 0 }">
        ￥{{ totalPrice }}
      </div>
    </div>
    <div class="desc">
      <span>另需配送费￥{{ deliveryPrice }}元</span>
    </div>
    <div class="pay" :class="payClass">
      {{ payDesc }}
    </div>
    <!-- 购物车详情页(列表) -->
    <div class="shopcart-detail" v-if="detailFold">
      <div class="shopcart-list">
        <div class="list-header">
          <h1 class="title">购物车</h1>
          <span class="empty">清空</span>
        </div>
        <div class="list-content">
          <ul>
            <!-- <li class="food" v-for="item in selectFoods" :key="item.price">
            <span class="name">{{ item.name }}</span>
            <div class="price">
              <span>￥{{ item.price * item.num }}</span>
            </div>
          </li> -->
            <li class="food">
              <div class="food-name">莲子核桃黑米粥</div>
              <div class="food-price">￥10</div>
              <div class="food-shop">
                <div
                  class="cart-decrease"
                  v-show="getGoodNum > 0"
                  @click="descreaseCart(foodItem)"
                ></div>
                <div class="cart-count" v-show="getGoodNum > 0">
                  {{getGoodNum}}
                </div>
                <div class="cart-add" @click="addCart(foodItem)"></div>
              </div>
            </li>
            <li class="food">
              <div class="food-name">莲子核桃黑米粥</div>
              <div class="food-price">￥10</div>
              <div class="food-shop">
                <div class="cart-decrease">
                  
                </div>
                <div class="cart-count">
                  0
                </div>
                <div class="cart-add">
                  
                </div>
              </div>
            </li>
            <li class="food">
              <div class="food-name">莲子核桃黑米粥</div>
              <div class="food-price">￥10</div>
              <div class="food-shop">
                <div class="cart-decrease">
                  
                </div>
                <div class="cart-count">
                  0
                </div>
                <div class="cart-add">
                  
                </div>
              </div>
            </li>
            <li class="food">
              <div class="food-name">莲子核桃黑米粥</div>
              <div class="food-price">￥10</div>
              <div class="food-shop">
                <div class="cart-decrease">
                  
                </div>
                <div class="cart-count">
                  0
                </div>
                <div class="cart-add">
                  
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import GoodItem from "../GoodItem";
import store from "../../store";
export default {
  components: {
    // GoodItem,
  },
  data() {
    return {
      detailFold: false,
    };
  },
  props: {
    //选购商品，购物车所有的状态变化都依赖于selectFoods，selectFoods是通过父组件传过来的
    selectFoods: {
      type: Array,
      default() {
        return [
          {
            price: 5,
            count: 8,
          },
        ];
      },
    },
    //配送费
    deliveryPrice: {
      type: Number,
      default: 4,
    },
    //最低起送价格
    minPrice: {
      type: Number,
      default: 20,
    },
    foodItem: {
      type: Object,
      default: () => ({}),
    },
  },

  //计算属性中放一些复杂的逻辑
  //计算购物车商品的总价格
  computed: {
    totalPrice() {
      let total = 0;
      this.selectFoods.forEach((foodItem) => {
        total += foodItem.price * foodItem.count;
      });
      return total;
    },
    //计算购物车选择商品数量的总和
    totalCount() {
      let count = 0;
      this.selectFoods.forEach((foodItem) => {
        count += foodItem.count;
      });
      return count;
    },
    // 结算时，利用条件语句，分为三种情况
    //1：当购物车中商品总价格为0时，小于起送价格，返回最小起送价格
    //2：当购物车中商品总价格大于0且小于最小起送价格时，返回四送价格差
    //3：当购物车中商品总价格大于最小起送价格时，返回 “去结算”
    payDesc() {
      if (this.totalPrice === 0) {
        //用来ES6中的字符串的模板字符串
        return `￥${this.minPrice}元起送`;
      } else if (this.totalPrice < this.minPrice) {
        //定义一个起送的差价为diff
        let diff = this.minPrice - this.totalPrice;
        return `还差￥${diff}元起送`;
      } else {
        return "去结算";
      }
    },
    payClass() {
      if (this.totalPrice < this.minPrice) {
        return "not-enough";
      } else {
        return "enough";
      }
    },
    selectedgood() {
      return store.state.selectedgood;
    },
    getGoodNum() {
      //console.log('selectedgood', this.selectedgood);
      const { name } = this.foodItem;
      const curIndex = this.selectedgood.findIndex(
        (item) => item.name === name
      );
      if (curIndex > -1) {
        return this.selectedgood[curIndex].num;
      } else {
        return 0;
      }
    },
  },
  methods: {
    // 当点击时，购物车详情页显示
    foldDetail() {
      this.detailFold = true;
    },
    addCart(foodItem) {
      //console.log(foodItem);
      store.commit("changeselectedGood", {
        type: "add",
        goodinfo: foodItem,
      });
    },
    descreaseCart(foodItem) {
      store.commit("changeselectedGood", {
        type: "desc",
        goodinfo: foodItem,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
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
      z-index: 999;
      .logo {
        width: 100%;
        height: 100%;
        text-align: center;
        border-radius: 50%;
        background: #2b343c;
        background-image: url("../../assets/gouwuche-icon.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 30px;
        &-highlight {
          background: rgb(0, 160, 220);
          background-image: url("../../assets/gouwuche-icon-active.png");
          background-size: 30px;
          background-repeat: no-repeat;
          background-position: center;
          img {
            padding-top: 11px;
            // width: 10%;
            // height: 10%;
            &.highlight {
              color: #ffffff;
            }
          }
        }
      }
      .num {
        position: absolute;
        top: 0;
        right: 0;
        width: 24px;
        height: 16px;
        text-align: center;
        line-height: 16px;
        font-size: 9px;
        font-weight: 700;
        color: #ffffff;
        background: rgb(240, 20, 20);
        border-radius: 16px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
      }
    }

    .price {
      padding-top: 12px;
      display: inline-block;
      font-size: 16px;
      color: #919396;
      font-weight: 700;
      line-height: 24px;
      &.highlight {
        color: beige;
      }
    }
  }
  .desc {
    background-color: #141d27;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    width: 150px;
    span {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.4);
      font-weight: 700;
      line-height: 3;
      padding-left: 12px;
    }
  }
  .pay {
    background-color: rgb(77, 85, 93);
    text-align: center;
    width: 120px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.4);
    font-weight: 700;
    line-height: 4;
    &.not-enough {
      background: #2b333b;
    }
    &.enough {
      background: #00b43c;
      color: #ffffff;
    }
  }
  .shopcart-detail {
    position: fixed;
    z-index: 100;
    width: 100%;
    background-color: rgba(7, 17, 27, 0.8);
    top: 0;
    left: 0;
    bottom: 100px;
    .shopcart-list {
      position: fixed;
      left: 0;
      bottom: 50px;
      z-index: -1;
      width: 100%;
      background: #fff;
      .list-header {
        display: flex;
        height: 50px;
        background: #f3f5f7;
        border-bottom: 1px solid #dbdee1;
        padding-left: 26px;
        .title {
          font-size: 18px;
          color: rgb(7, 17, 27);
          line-height: 50px;
          font-weight: 200;
        }
        .empty {
          font-size: 15px;
          color: rgb(0, 160, 220);
          line-height: 50px;
          margin-left: 220px;
        }
      }
      .list-content {
        padding-left: 26px;
        padding-right: 26px;
        .food {
          display: flex;
          height: 60px;
          width: 100%;
          border-bottom: 1px solid #dbdee1;
          .food-name {
            line-height: 60px;
            font-size: 15px;
            color: rgb(7, 17, 27);
            font-weight: 500;
          }
          .food-price {
            line-height: 60px;
            font-size: 15px;
            color: rgb(240, 20, 20);
            font-weight: bold;
            margin-left: 80px;
          }
          .food-shop {
            display: flex;
            line-height: 60px;
            margin-left: 10px;
            width: 83px;
            .cart-decrease {
              flex: 1;
              margin-left: 5px;
              background-image: url("../../assets/jian.png");
              background-size: 20px;
              background-repeat: no-repeat;
              background-position: center;
            }
            .cart-count {
              flex: 1;
              margin-left: 20px;
              font-size: 15px;
              color: #93999f;
              margin-left: 10px;
            }
            .cart-add {
              flex: 1;
              margin-left: 10px;
              background-image: url("../../assets/jia.png");
              background-size: 20px;
              background-repeat: no-repeat;
              background-position: center;
            }
          }
        }
      }
    }
  }
}
</style>
