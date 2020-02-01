import Vue from 'vue'
import App from './App.vue'
import { Swipe, SwipeItem } from 'vant'
import 'vant/lib/index.css';
import 'amfe-flexible/index.js'

Vue.use(Swipe);
Vue.use(SwipeItem);

import router from './router'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
