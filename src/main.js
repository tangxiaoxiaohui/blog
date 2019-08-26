// Vue
import Vue from 'vue'
// App 主键
import App from './App'
// 路由
import router from './router'
// vuex状态管理
import store from './store'
// mock 模拟数据接口
import './mock/index'
// normalize:统一css Reset:初始化css
import '../static/css/public.css'
// 字体图标
import '../static/css/iconfont/iconfont.css'

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
