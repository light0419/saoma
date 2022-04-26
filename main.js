import App from './App'

import $app from "./common/common.js";
Vue.prototype.app = $app

// #ifndef VUE3
import Vue from 'vue'

import request from './common/request.js'
import api from './api/index.js'
import url from './common/config.js'

// Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$api = api
Vue.prototype.$url = url

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif