<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>
<script>
let VueRouter = require('vue-router')

let router = new VueRouter({
  routes: [
    { path: '/', component: require('./routes/dashboard.vue') }
  ]
})
export default {
  router
}
</script>
