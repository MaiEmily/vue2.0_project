import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import axios from 'axios'
import Mint from 'mint-ui'
import $ from 'zepto'
//import Vuex from 'vuex'  //已在data.js中导入

//引入外部的路由
import router from './js/router.js'

//引入外部的数据
import store from './js/data.js'

import 'mint-ui/lib/style.min.css'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'

import './assets/css/cssreset.css'
import './assets/css/style.css'
import './assets/css/animate.min.css'

import './assets/font/iconfont.css'

Vue.prototype.$axios=axios;//在vue中使用axios，全局aixos
//每个vue实例都有一个$axios属性

Vue.use(VueRouter)
Vue.use(Mint)
//Vue.use(Vuex)



new Vue({
  el: '#app',
  render: h => h(App),//渲染页面
  router,  //或router:router  挂载
	store
})
