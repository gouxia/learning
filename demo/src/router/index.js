// import Vue from 'vue'
import VueRouter from "vue-router";
// const Goods = () => import("../components/goods/goods");
// const Seller = () => import("../components/seller/seller");
// const Ratings = () => import("../components/ratings/ratings");
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
    //嵌套式路由，在store中嵌套三个子路由
    children: [
      {
        path: "/",
        redirect: "/store/goods",
      },
      {
        path: "/store/goods",
        component: () => import("../routes/goods.vue"),
      },
      {
        path: "/store/seller",
        component: () => import("../routes/seller.vue")
      },
      {
        path: "/store/ratings",
        component: () => import("../routes/ratings.vue")
      }
    ],
  },
  {
    path: "/goodDetail",
    component: () => import("../routes/goodDetail.vue")
  }
];
const router = new VueRouter({
  routes,
});
//3.导出router
export default router;
