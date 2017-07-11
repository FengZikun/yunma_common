<template>
  <div class="two_top">
    <router-link to='/twoCode/setupPage' class="title-one">新建扫描页面</router-link>
    <img src="../../assets/img/setupPage.jpg" class="img-ex">
  </div>
</template>
<style type="text/css">
  /*@import "../../assets/css/common.css";*/

  .img-ex {
    display: block;
    width: 95%;
    margin: 0 auto;
  }
</style>
<script>
  export default{
    data(){
      return {
        childCon: '我是子页面',
      }
    },

  }
</script>
