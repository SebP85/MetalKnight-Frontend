<template>
  <div id="app">
    <NavBar class="nav"/>
    <router-view id="views"/>
  </div>
</template>

<script>
  import NavBar from '@/components/navigation/NavBar.vue'
  export default {
    components: {
      NavBar
    }//test
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;

}

</style>
