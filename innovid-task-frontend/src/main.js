import Vue from 'vue'
import App from './App.vue'

// Axios config
import axios from 'axios'

import vuetify from './plugins/vuetify';
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
