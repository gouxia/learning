// import Vue from 'vue'
import VueRouter from 'vue-router'
const Goods = () => import('../components/goods/goods')
const Seller = () => import('../components/seller/seller')
const Ratings = () => import('../components/ratings/ratings')
//1.安装插件
// Vue.use(VueRouter)
//2.创建路有对象
const routes = [
{
    path: '/',
    redirect: '/goods'
},
{
    path: '/goods',
    components:Goods
},
{
    path: '/seller',
    components:Seller
},
{
    path: '/ratings',
    components:Ratings
}


]
const router = new VueRouter({
    routes
})
//3.导出router
export default router