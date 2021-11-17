<template>
  <div id="app">
    <HeadWrapper/>
    <router-view/>
  </div>
</template>

<script>
import HeadWrapper from './components/headWrapper.vue'
import getApi from './lib/Authorization.js'
export default {
  name: "App",
  components: {
    HeadWrapper,
  },
  
};
</script>

<style>
  html,body {
    padding: 0;
    margin: 0;
  }
</style>