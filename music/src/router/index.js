import Vue from "vue";
import Router from "vue-router";
import Login from "../components/login";
import Home from "../components/home";
import Users from "../components/users";
import Role from "../components/rights/role.vue";
import Rights from "../components/rights";
import Goods from "../components/goods";
import Goodsadd from "../components/common/goodsadd.vue";
import Sort from "../components/sort";
import ProductSort from "../components/productSort";
import Order from "../components/order";
import Reports from "../components/reports";
Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "login",
      path: "/login",
      component: Login,
    },
    {
      name: "home",
      path: "/",
      component: Home,
      children: [
        {
          name: "users",
          path: "users",
          component: Users,
        },
        {
          name: "role",
          path: "role",
          component: Role,
        },
        {
          name: "rights",
          path: "rights",
          component: Rights,
        },
        {
          name: "goods",
          path: "goods",
          component: Goods,
        },
        {
          name: "goodsadd",
          path: "goodsadd",
          component: Goodsadd,
        },
        {
          name: "sort",
          path: "sort",
          component: Sort,
        },
        {
          name: "productSort",
          path: "productSort",
          component: ProductSort,
        },
        {
          name: "order",
          path: "order",
          component: Order,
        },
        {
          name: "reports",
          path: "reports",
          component: Reports,
        },
      ],
    },
  ],
});
