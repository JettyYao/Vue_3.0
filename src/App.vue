<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  width: 100vw;
  max-width: 1366px;
  height: 100vh;
  max-height: 657px;
  overflow: hidden;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
