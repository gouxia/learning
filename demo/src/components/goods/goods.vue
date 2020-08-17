<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" :key="item.name" class="caidan">
          {{item.name}}
        </li>
      </ul>
      <div class="foods-wrapper"></div>
    </div>
  </div>
</template>

<script>
import mockData from "../../mock.json";
export default {
  data() {
    return {
      goods: mockData.goods,
    };
  },
};
</script>

<style>
.goods {
  display: flex;
  position: absolute;
  width: 100%;
  top: 174px;
  bottom: 46px;
  /* 超出部分隐藏 */
  overflow: hidden;
}
.menu-wrapper {
  /* 第一个参数是等分，第二个参数是根据内容的缩放情况，第三个参数是占位大小 */
  flex: 0 0 80px;
  width: 80px;
  background: #f3f5f7;
}
.foods-wrapper {
  flex: 1;
}

</style>
