<template>
  <div id="app">
    <v-header :seller="initData.seller"></v-header>

    <div class="tab">
      <div class="tab-item" @click="itemClick('/goods')">
        <a>商品</a>
      </div>
      <div class="tab-item" @click="itemClick('/ratings')">
        <a>评价</a>
      </div>
      <div class="tab-item" @click="itemClick('/seller')">
        <a>商家</a>
      </div>
    </div>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import header from "./components/header/header.vue";
// import goods from "./components/goods/goods.vue"
import mockData from "./mock.json";
export default {
  name: "App",
  data() {
    return {
      initData: mockData,
    };
  },
  props: {
    path: String,
  },
  components: {
    "v-header": header,
    // goods
  },
  methods: {
    itemClick(path) {
      console.log(this.$router);
      this.$router.replace({
        path,
      });
    },
  },
};
</script>

<style>
*{
  margin:0;
  padding: 0;
}
html, body{
  height: 100%;
}
#app{
  /* width: 750px;
  overflow: hidden; */
      display: flex;
    flex-direction: column;
}
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.tab-item {
  flex: 1;
  text-align: center;
}
.tab-item a {
  font-size: 14px;
  color: rgb(77, 85, 93);
}
.tab .tab > a.active {
  color: red;
}
</style>
