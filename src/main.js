import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap'; // libreria bootstrap js'   // css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'  // css bootstrap

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
