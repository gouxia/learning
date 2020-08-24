<template>
  <div>
    <!-- :seller="seller"   进行数据间的传递  ：子组件数据="父组件数据"   进行这一步之后，
    子组件中的props中就有父组件从接口获取到的数据了，然后在子组件中就可以将获取到的数据进行渲染了
    -->
    <Header :seller="seller" />
    <div class="tab">
      <!-- 在大的路由里面放置三个小的路由页面数据 -->
      <router-link
        :to="{ path: '/goods' }"
        :class="['tab-item', { 'tab-item-active': $route.path === '/goods' }]"
        >商品</router-link
      >
      <router-link
        :to="{ path: '/ratings' }"
        :class="['tab-item', { 'tab-item-active': $route.path === '/ratings' }]"
        >评价</router-link
      >
      <router-link
        :to="{ path: '/seller' }"
        :class="['tab-item', { 'tab-item-active': $route.path === '/seller' }]"
        >商家</router-link
      >
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../components/Header";
import mockData from "../mock.json";
export default {
  components: {
    Header,
  },
  data() {
    return {
      seller: mockData.seller,
      curPath: "goods",
    };
  },
  methods: {
    jump(name) {
      this.curPath = name;
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  // width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.tab-item {
  flex: 1;
  text-align: center;
  &-active {
    color: red;
  }
}
.tab-item a {
  font-size: 14px;
  color: rgb(77, 85, 93);
}
</style>
