<template>
  <div>
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item" @click="itemClick('/goods')">
        <h2>商品</h2>
      </div>
      <div class="tab-item" @click="itemClick('/ratings')">
        <h2>评价</h2>
      </div>
      <div class="tab-item" @click="itemClick('/seller')">
        <h2>商家</h2>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import header from "./components/header/header.vue";
export default {
  name: "App",
  props: {
    path: String,
  },
  components: {
    "v-header": header,
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
#app {
  margin: auto;
}
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.tab-item {
  flex: 1;
  text-align: center;
}
</style>
