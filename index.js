let Vue = require('vue')
let VueRouter = require('vue-router')

Vue.use(VueRouter)

Vue.component('app-header', require('./components/header.vue'))
Vue.component('app-reddit', require('./components/reddit.vue'))

window.vm = new Vue(require('./app.vue')).$mount('#app')
