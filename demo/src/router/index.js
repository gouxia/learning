// import Vue from 'vue'
import VueRouter from "vue-router";
const Goods = () => import("../components/goods/goods");
const Seller = () => import("../components/seller/seller");
const Ratings = () => import("../components/ratings/ratings");
//1.安装插件
// Vue.use(VueRouter)
//2.创建路有对象
const routes = [
  {
    path: "/",
    redirect: "/store",
  },
  {
    path: "/store",
    component: () => import("../routes/store.vue"),
    children: [
      {
        path: "/",
        redirect: "/goods",
      },
      {
        path: "/goods",
        component: () => import("../routes/goods.vue"),
      },
      {
        path: "/seller",
        component: () => import("../routes/seller.vue")
      },
      {
        path: "/ratings",
        component: () => import("../routes/ratings.vue")
      }
    ],
  },
  {
    path: "/goods",
    component: Goods,
  },
  {
    path: "/seller",
    component: Seller,
  },
  {
    path: "/ratings",
    component: Ratings,
  },
];
const router = new VueRouter({
  routes,
});
//3.导出router
export default router;
