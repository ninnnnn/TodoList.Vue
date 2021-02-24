import Vue from 'vue'
import Router from 'vue-router'
import router from '@/router/index.js'
// import App from './App.vue'
import TodoList from '@/components/TodoList.vue'

Vue.use(Router)

new Vue({
  el: '#app',
  router: router,
  render: (h) => h(TodoList),
}).$mount('#app')