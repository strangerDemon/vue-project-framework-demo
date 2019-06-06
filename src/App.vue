<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  html,
  body {
    position: absolute;
    height: 100%;
    width: 100%;
    margin: 0 0 0 0;
    overflow-y: hidden!important;
  }
  .app {
    width: 100%;
    height: 100%;
  }
</style>
