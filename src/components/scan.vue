<template>
  <div class="right-main">
            <div class='right-main-top'>
            <p class='right-main-top1'>
              <span class='right-main-top-icon1'></span>
              <span style="color: #b3b3b3;">查看V3.4版防伪码扫码明细记录；默认显示近30天内的扫码记录</span>
            </p>
          </div>
          <div class="right-main-bottom">
              <div class="button-group">
                <input type="search" name="" class="search" placeholder="输入经销商名称或编号">
                <input type="button" name="" class="search-button" value="搜索">
              </div>
              <div class="my-form">
                <ul class="pro-list">
                  <li class="pro-li">
                    <span class="pro-li-span">扫码者昵称</span>
                    <span class="pro-li-span">防伪码</span>
                    <span class="pro-li-span">扫码结果</span>
                    <span class="pro-li-span">商品名称</span>
                    <span class="pro-li-span">投诉反馈</span>
                    <span class="pro-li-span">扫码时间</span>
                    <span class="pro-li-span">所属经销商</span>
                    <span class="pro-li-span">扫码地区</span>
                  </li>
                  <li>
                    <span class="pro-li-span">aa_Joan</span>
                    <span class="pro-li-span span2">124556124556124556124556124556</span>
                    <span class="pro-li-span">正确</span>
                    <span class="pro-li-span">商品名称</span>
                    <span class="pro-li-span">投诉反馈</span>
                    <span class="pro-li-span">扫码时间</span>
                    <span class="pro-li-span">所属经销商</span>
                    <span class="pro-li-span">扫码地区</span>
                  </li>
                </ul>
              </div>
            </div>
  </div>
</template>
<style scoped>
 /*@import "../assets/css/common.css";*/
.right-main-top{
  width: 95%;
  margin: auto;
  padding-top: 60px;
  text-align: left;
}
.right-main-top-icon1{
  width: 18px;
  height: 18px;
  background: url("../assets/img/icon_tishi.png") no-repeat;
  float: left;
  margin-right: 8px;
}
.right-main-top2{
  margin-left: 25px;
  color: #b3b3b3;
}
.right-main-bottom{
  width: 95%;
  margin:auto;
  text-align: left;
}
.pro-li-span:nth-of-type(2){
  width: 12%;
}
.pro-li-span:nth-of-type(7){
  width: 12%;
}
.button-group{
  margin-top: 48px;
}
.button-group input{
  float: none;
}
.span2{
  height: 70px;
  line-height: 35px;
  overflow: hidden;
  
}
</style>
<!--<script src='../assets/js/china.js'></script>-->
<script>
  import '../assets/js/echarts.js'
  import '../assets/js/china.js'
  export default{
    data(){
      return{
        childCon:'我是子页面',
      }
    },
    methods:{
      
    }
  }
</script>
