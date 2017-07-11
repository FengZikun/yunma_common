<template>
  <div>
    <h3>{{childCon}}</h3>
    <div class='space'></div>
  </div>
</template>
<style scoped>
.space {
  width: 100%;
  height: 700px;
}
</style>
<script>
  export default{
    data(){
      return{
        childCon:'我是商城',
      }
    }
  }
</script>
