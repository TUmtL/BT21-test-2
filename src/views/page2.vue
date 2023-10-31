<template>
  <div>
    <ul>
      <li v-for="quer of querys"> {{quer}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      querys:this.$route.query
    }
  }
}
</script>

<style>

</style>