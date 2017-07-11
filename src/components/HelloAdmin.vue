<template>
  <div class='fixed'>
    <!--顶部功能区-->
    <!--<div class="row navBar">
      <div class="col-md-2"></div>
      <div class="col-md-3">
        <div class="row navL">
          <span>销售热线：0755-2653-1153</span>
          <a href="#">帮助中心</a>
        </div>
      </div>
      <div class="col-md-5 text-right text-danger"><router-link class='register' to="/register">注册</router-link><router-link to="/login" class='reg'>登录</router-link></div>
      <div class="col-md-2"></div>
    </div>-->
    <!--logo和导航栏-->
    <div class="row logo">
      <div class="col-md-3">
        <div class="img-responsive">
          <router-link to="/enterprise"><img src="../assets/img/logofinalversion6.png"></router-link>
          <!--<span class='logoR'>打造一流平台</span>-->
        </div>
      </div>
      <div class="col-md-7 text-right">
        
      </div>
      <div class='username'>
        <span class='span_one'></span>
        <!-- <span class='span_two'>Evan</span> -->
        <ul class="personal">
          <li>
            {{userName}}
          </li>
          <li class="change_color">
            个人中心
          </li>
          <a href="javascript:void(0)" @click='tuichu' style="text-decoration:none;"><li class="change_color">
            退出登录
          </li></a>
        </ul>
        <span class='span_three'></span>
        <span class='span_four'></span>
        
      </div>
      <div class='col-ma-2'></div>
    </div>

  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  a:hover{
    text-decoration: none;
  }
  /* {
    margin: 0;
    padding: 0;
  }*/
  /*无圆角*/
  /*  * {
      border-radius: 0;
    }*/

  /*栅格系统去除padding*/
  /*.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
    padding-right: 0;
    padding-left: 0;
  }*/
  /*顶部功能区背景边框*/
  .navBar {
    padding: 3px;
    background-color: #333;
    color: #fff;
    border-bottom: 1px solid #ccc;
    height: 50px;
    font-size: 14px;
  }
  .navL {
    margin-top: 13px;
    font-size: 14px;
    color:#fff;
  }
  .navL span {
    padding-right: 10px;
    position: absolute;
    left:10px;
    top: 13px;
  }
  .navL a {
    color:#fff;
    padding-left:10px;
    border-left:1px solid rgb(204, 204, 204);
    position: absolute;
    left:197px;
    top: 13px;
  }
  .btn {
    border-radius: 0;
  }
  /*<!--logo和搜索框-->*/
  .img-responsive  img{
    width: 204px;
    height: 75px;
    float: left;
  }
  .img-responsive span {
    font-size: 18px;
    color: #00BAFF;
    padding-left: 12px;
    border-left: 1px solid #00BAFF;
  }
  .text-right {
    margin-top:10px;
  }
  .text-right:after{
    content: "";
    display: block;
    clear: both;
  }
  .text-danger {
    margin-top:14px;
    color:#fff;
  }
  .text-danger a {
    color:#fff;
    padding-right:15px;
  }
  .text-danger .reg {
    padding: 0 6px 0 15px;
    border-left: 1px solid rgb(204, 204, 204);
    border-right: none;
  }
  .text-danger a:hover {
    text-decoration: none;
    color: #00BAFF;
  }
  .logo {
    width: 100%;
    height: 90px;
  }
  .logoR {
    position: absolute;
    left:210px;
    top:32px;
  }
  .search {
    width: 400px;
    height: 50px;
    float: right;
    margin-right:170px;
    vert-align: top;
  }
  .search input {
    width: 250px;
    height: 34px;
    margin-right:-4px;
    border:1px solid #ccc;
    border-right:0;
  }
  .search a {
    margin-top:-3px;
  }
  .navi {
    width: 755px;
    height: 81px;
    overflow: hidden;
    position: absolute;
    left:10px;
    top: 0;
    margin-bottom: 0;
  }
  .top_nav {
    float: left;
    height: 62px;
    line-height: 60px;
    list-style: none;
    margin-right: 50px;
    font-size: 20px;
    font-family:'microsoft yahei';
    border-bottom: 2px solid transparent;
    transition: .25s;
  }
  .top_nav a {
    color:#6d7776;
  }
  .top_nav:hover {
    border-bottom: 2px solid #00baff;
  }
  .top_nav a:hover {
    color:#00BAFF;
    text-decoration: none;
  }
  .top_nav a:focus{
    text-decoration: none;
  }
  .logo .username {
    width: 20%;
    float: right;
    position: relative;
  }
  .logo .username .span_one {
    display: inline-block;
    width: 28px;
    height: 33px;
    background: url("../assets/img/icon_xinxi_2.png") no-repeat;
    float: left;
    background-position: center;
    height: 60px;
    line-height: 60px;
  }
  .logo .username .span_two {
    float: left;
    padding-left: 20px;
    font-size: 18px;
    padding-right: 20px;
    height: 60px;
    line-height: 60px;
  }
  .logo .username .span_three {
    display: inline-block;
    width: 28px;
    height: 7px;
    background: url("../assets/img/submenu_arrow.png") 0 -63px no-repeat;
    /*float: left;*/
    margin-top: 25px;
    vertical-align: top;
  }
  .logo .username .span_four {
    display: inline-block;
    width: 60px;
    height: 60px;
    background: url("../assets/img/icon_touxiang.png") no-repeat;
    /*float: left;*/
    vertical-align: top;

  }
  .personal{
    display: inline-block;
    width: 100px;
    padding-left: 0;
    border-radius: 5px;
    overflow: hidden;
    position: absolute;
    left: 14px;
    top: 5px;
    z-index: 1;
    font-size: 18px;
    height: 50px;
    transition: 0.2s;
  }
  .personal:hover{
    height: 150px;
  }
  .change_color{
    background-color: #fff;
  }
</style>
<script>
import common from '../common.js'
  export default {
    name: 'hello',
    data () {
      return {
        msg: '',
        userName:null
      }
    },
    props:['vendorId'],
    methods:{
      init:function(){
        var self=this;
        self.userName=sessionStorage.getItem('userName');
      },
      tuichu:function(){
        var self=this;
        var url='http://120.77.149.115/cloud_code/POST/user/logout.do';
        var type='post';
        var data={
          userId:self.vendorId
        };
        var success=function(res){
          self.$emit('tuichu')
        };
        common.Ajax(url,type,data,success)
      }
    },
    created:function(){
      this.init()
    }
  }
</script>
