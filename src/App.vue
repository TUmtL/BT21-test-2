<template>
  <header>
    <router-link :to="{name:'home'}">home</router-link> <router-link :to="{name:'about', query:enterData}">About</router-link>
  </header>
  <router-view @submitM="enter"/>
</template>

<script>
export default {
  data(){
    return{
      enterData:[]
    }
  },
  computed:{
    lastRout(){
      return this.$route.path
    }
  },
  methods:{
    enter(s){
      this.enterData = s
    }
  }
}
</script>

<style>
a{
  background-color: wheat;
}
.router-link-exact-active{
  background-color: rgb(165, 143, 103);
}
</style>