<template>
  <div id="app" :style="{height: this.screenHeight}">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      screenHeight: ''
    }
  },
  created(){
    this.screenHeight = window.screen.height

  }
}
</script>

<style>
#app {
  font-family:微软雅黑, 'Avenir', Helvetica, Arial, sans-serif,微软雅黑;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0 !important;
  font-family: 微软雅黑;overflow: hidden;
}
</style>
