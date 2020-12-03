import Vue from 'vue'
import App from './App.vue'
//全局面包屑的组件
import MyBread from './components/common/myBread.vue'
import router from './router'
import ElementUI from 'element-ui';
//import MyServerHttp from './plugins/http.js'
//引入需要的样式文件
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css'
import VueRouter from 'vue-router';
//import moment from 'moment';

Vue.config.productionTip = false
//适用Vue插件
Vue.use(ElementUI);
Vue.use(VueRouter);
//Vue.use(MyServerHttp);


// 全局过滤器 - 处理日期  全局过滤器要写在new Vue()之前
// Vue.filter('fmtdate', (v) => {
//   retuen moment(v).format('YYYY-MM-DD');
// });

//全局自定义组件 MyBread.name== 文件夹common中的myBread.vue中的name:'my-bread',
Vue.component('MyBread',MyBread)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
