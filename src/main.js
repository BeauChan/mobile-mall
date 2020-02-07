import Vue from 'vue'
import App from './App.vue'
import { Swipe, SwipeItem } from 'vant'
import 'vant/lib/index.css';
import 'amfe-flexible/index.js'
import store from './store'
import toast from './toast'
import FastClick from 'fastclick'
import lazyload from 'vue-lazyload'

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(toast)
Vue.use(lazyload,{
  loading:require('assets/img/common/loading.gif')
})

import router from './router'
FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
