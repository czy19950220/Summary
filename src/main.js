// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'es6-promise/auto'
import router from './router'
import VueLazyload from 'vue-lazyload'//懒加载
import 'vue-easytable/libs/themes-base/index.css'// 导入vue-easytable的 css
import {VTable,VPagination} from 'vue-easytable'// 导入vue-easytable的 table 组件 和分页组件
import ElementUI from 'element-ui';//引入整个 Element，
import 'element-ui/lib/theme-chalk/index.css';
import $ from "jquery";//引入jquery
import {store} from './store/store' //引入store.js

Vue.config.productionTip = false;
//懒加载配置
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './../static/img/err.png',
  loading: './../static/img/loading.gif',
  attempt: 1
});
// 将vue-easytable组件注册到全局
Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);
//路由发生变化时改变title
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
});
//引入整个 Element，
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store:store,
  router,
  components: { App },
  template: '<App/>'
})
