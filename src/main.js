import Vue from 'vue'
import router from './plugins/router'
import store from './vuex/store'
import './registerServiceWorker'
import App from './layouts/App'

// import plugins
import './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
