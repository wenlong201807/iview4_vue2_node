<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang="less">
@import './libs/styles/reset.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // min-width: 1100px;
  // max-width: 1500px;
  // padding: 10px 20px;
  // margin: 0 auto;
  // overflow-x: scroll;
}
</style>
