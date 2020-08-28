<template>
  <div class="foods-item">
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
        <span style="margin-left:12px;">好评率{{ foodItem.rating }}%</span>
      </div>
      <div class="foods-jiage">
        <div class="price-info-wrapper">
          <div class="current-price">￥{{ foodItem.price }}</div>
          <div v-if="foodItem.oldPrice" class="old-price">
            ￥{{ foodItem.oldPrice }}
          </div>
        </div>

        <div class="cartcontrol-wrapper">
          <div class="cart-decrease" @click="descreaseCart(foodItem)">
            -
          </div>
          <div class="cart-count">
            {{ getGoodNum }}
          </div>
          <div class="cart-add" @click="addCart(foodItem)">+</div>

          <!-- <cartcontrol></cartcontrol> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../store";
// import { mapGetters } from 'vuex'
export default {
  name: "good-item",
  props: {
    foodItem: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    // ...mapGetters({
    //   selectedgood: 'getter_selectedgood'
    // }),
    selectedgood(){
      return store.state.selectedgood
    },
    getGoodNum() {
      console.log('selectedgood', this.selectedgood);
      const { name } = this.foodItem;
      const curIndex = this.selectedgood.findIndex(
        (item) => item.name === name
      );
      if (curIndex > -1) {
        console.log(
          "this.selectedgood[curIndex].num",
          this.selectedgood[curIndex].num
        );
        return this.selectedgood[curIndex].num;
      } else {
        return 0;
      }
    },
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
    addCart(foodItem) {
      console.log(foodItem);
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
        // bottom: 12px;
        display: flex;
        .cart-count {
          padding: 0 8px;
          font-weight: bold;
        }
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
</style>
