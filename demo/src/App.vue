<template>
  <div id="app">
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
      <ShopCart />
    </div>
  </div>
</template>

<script>
import ShopCart from "./components/ShopCart";
export default {
  name: "App",
  components: {
    ShopCart
  },
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
  }
  .footer {
    // background: crimson;
    height: 50px;
  }
}
</style>
