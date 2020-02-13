<template>
  <div id="app">
    <router-link to="/">Hello</router-link>
    <router-link to="/list">List</router-link>
    <router-link to="/tsc">TS-Component</router-link>
    <router-link to="/decorator">装饰器@-Component</router-link>
    <router-link to="/vuex">Vuex-page</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
