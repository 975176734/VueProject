<template>
  <div id="app">
    <TopNav></TopNav>
    <router-view></router-view>
    <LogAndReg></LogAndReg>
    <Scoll></Scoll>
  </div>
</template>

<script>
import LogAndReg from "./components/LogAndReg.vue"
import Scoll from "./components/Scoll.vue"
export default {
  //判断用户是否登录
  components:{
    LogAndReg,
    TopNav:()=>import('./components/TopNav.vue'),
    Scoll
  },
  created(){
    var userName = localStorage.getItem("userName");
    if(userName!=null){
      this.$store.state.a.isLogin=true;
      this.$store.state.a.userName=userName;
    }
  }
}
</script>

<style>

</style>
