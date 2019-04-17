// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css';
import fullCalendar from 'vue-fullcalendar'

Vue.use(Vant)
Vue.use(ElementUI)
Vue.component('full-calendar', fullCalendar)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
