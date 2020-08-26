<template>
  <div class="cartcontrol">
    <!-- 减少按钮有可能不显示，所以要设置其显示的条件 -->
     <div class="cart-decrease" v-show="food.count > 0" @click="descreaseCart">-</div>
    <div class="cart-count" v-show="food.count > 0">{{ food.count }}</div>
    <div class="cart-add" @click="addCart">+</div> 
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props: {
    food: {
      type: Object,
    },
  },
  
  methods: {
    addCart() {
      if (!this.food.count) {
        //利用set就可以对加购商品的数量进行观测
        Vue.set(this.food, 'count', 1);
      } else {
        this.food.count++;
      }
    },
   descreaseCart() {  
      if (this.food.count) {
        this.food.count--;
      }
  }
  }
};
</script>

<style lang="scss" scoped>
.cartcontrol {
  font-size: 0;
  .cart-decrease {
    display: inline-block;
    padding: 6px;
    font-size: 24px;
    line-height: 24px;
  }
  .cart-add {
    display: inline-block;
    font-size: 24px;
    line-height: 24px;
    padding: 6px;
    color: rgb(0,160,220);
  }
  .cart-count{
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: rag(147,153,159);

  }
  .cart-decrease {
    display: inline-block;
    font-size: 24px;
    line-height: 24px;
    padding: 6px;
    color: rgb(0,160,220);
  }
  

}
</style>
