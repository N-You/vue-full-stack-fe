<template>
  <router-view></router-view>
</template>

<script>
export default {
  data(){
    return {}
  },
  mounted(){
    this.$storage.setItem('userInfo',{age:66,name:'lisi'})
  }
}
</script>

<style>
@import "./assets/style/reset.css";
@import "./assets/style/index.scss";
</style>
