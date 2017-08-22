<template>
  <div class='fixed'>
      <div class="mengban" v-show='showWarn'>
        <div class="warn">
          <div class="classifyHeader">
            <span style="display:block;height:48px;line-height:48px;">操作提示</span>
          </div>
          <div class="warnmain">
            {{warnText}}
          </div>
          <div class="warnbottom">
            <input type="button" name="" value="确定" @click='showWarn=false'>
          </div>
        </div>
      </div>
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
      <div class="col-md-2">
        <div class="img-responsive">
          <router-link to="/enterprise"><img src="../assets/img/logofinalversion6.png"></router-link>
          <!--<span class='logoR'>打造一流平台</span>-->
        </div>
      </div>
      <div class="col-md-7">
        <ul class='navi'>
          <li class='top_nav li_01' @click='changeColor'><router-link to="/enterprise/shouyegaikuang">企业</router-link></li>
          <li class='top_nav li_03' @click='changeColor'><router-link to="/goods/progaikuang">产品</router-link></li>
          <li class='top_nav li_02' @click='changeColor'><router-link to="/twoCode/gaikuang">二维码</router-link></li>
          <ul class="personal1 top_nav">
            <li>
              用户<span class='xiajiantou'></span>
            </li>
            <li class="change_color" style="margin-top:6px">
              <a href="javascript:void(0)" @click="WxGzhInfo('http://mp.ym-a.top/web/index.php?c=mc&a=fans&',0)"><span>粉丝管理</span></a>
            </li>
            <li class="change_color">
              <a href="javascript:void(0)" @click="WxGzhInfo('http://mp.ym-a.top/web/index.php?c=mc&a=member&',0)"><span>会员管理</span></a>
            </li>
          </ul>
          <li class='top_nav li_04' @click='changeColor'><a href="javascript:void(0);" @click="WxGzhInfo('http://mp.ym-a.top',1)">公众号</a></li>
          <li class='top_nav li_05' @click='changeColor'><router-link to="/union">企业联盟</router-link></li>
          <li class='top_nav li_06' @click='changeColor'><a href="javascript:void(0);" @click="WxGzhInfo('http://mp.ym-a.top/web/index.php?c=platform&a=cover&eid=39',0)">商城</a></li>
        </ul>
      </div>
      <div class='username'>
        <span class='span_one'></span>
        <!-- <span class='span_two'>Evan</span> -->
        <ul class="personal">
          <li>
            {{vendorName}}
          </li>
          <li class="change_color">
            个人中心
          </li><li class="change_color">
          <a href="javascript:void(0)" @click='tuichu' style="text-decoration:none;">
            退出登录
          </a></li>
        </ul>
        <!-- <span class='span_three'></span> -->
        <!-- <span class='span_four'></span> -->
        
      </div>
      <div class='col-ma-2'></div>
    </div>

  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*@import '../assets/css/common.css'*/
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
    vertical-align: top;
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
    height: 90px;
    /* overflow: hidden; */
    position: absolute;
    left:10px;
    top: 0;
    margin-bottom: 0;
  }
  .top_nav {
    float: left;
    height: 90px;
    line-height: 75px;
    list-style: none;
    padding: 0 25px;
    font-size: 16px;
    border-top: 4px solid transparent;
    font-family:'microsoft yahei';
    border-bottom: 2px solid transparent;
    transition: .25s;
  }
  .top_nav a {
    color:#0f0f12;
  }
  .top_nav:hover {
    border-top: 4px solid #00baff;
    box-shadow: 0px 0 3px rgba(0,0,0,.1);
  }
  .top_nav a:hover {
    color:#00BAFF;
    text-decoration: none;
  }
  .top_nav a:focus{
    text-decoration: none;
  }
  .logo .username {
    width: 23%;
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
    height: 90px;
    line-height: 75px;
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
    position: relative;
    left: -40px;
    width: 28px;
    height: 9px;
    background: url("../assets/img/icon_xia.png") no-repeat;
    /*float: left;*/
    margin-top: 41px;
    vertical-align: top;
  }
  .logo .username .span_four {
    display: inline-block;
    position: relative;
    left: -40px;
    width: 50px;
    height: 85px;
    background: url("../assets/img/icon_touxiang.png") no-repeat;
    /*float: left;*/
    background-position: center;
    background-size: contain;

  }
  .personal{
    display: inline-block;
    min-width: 130px;
    padding-left: 0;
    border-radius: 5px;
    overflow: hidden;
    position: absolute;
    left: 31px;
    top: 20px;
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
  .change_color:hover{
    background: rgb(239, 243, 245)

  }
  #wqUser{
    width: 86px;
  }
  #wqUser:hover{
    height: 550px;
  }
  .personal1{
    display: inline-block;
    width: 95px;
    padding: 0 0px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    font-size: 16px;
    height: 90px;
    padding-top: 12px;
    transition: 0.2s;
    background: #fff;
    color: #0f0f12;
  }
  .personal1:hover{
    height: 180px;
    color: #00BAFF;
  }
  .xiajiantou{
    display: inline-block;
    width: 15px;
    height: 9px;
    background: url('../assets/img/icon_xia.png');
    background-repeat: no-repeat;
    position: relative;
    left: 7px;
  }
</style>
<script>
  import common from '../common.js'
  import router from '../router'
  export default {
    name: 'hello',
    data () {
      return {
        msg: '',
        vendorName:null,
        showWarn:false,
        warnText:''

      }
    },
    props:['vendorId'],
    methods:{
      init:function(){
        var self=this;
        self.vendorName=sessionStorage.getItem('vendorName');
      },
      tuichu:function(){
        var self=this;
        var url='https://ym-a.top/cloud_code/POST/user/logout.do';
        var type='post';
        var data={
          userId:self.vendorId
        };

        var success=function(res){
          self.$emit('tuichu')
        };
        common.Ajax(url,type,data,success)
      },
      changeColor:function(){
        var self=this;
        $(event.target).css('color','#00BAFF');
        $(event.target).parent().siblings().children().css('color','#6d7776')

      },
      toWeiQing:function(url){
        document.cookie=`_755url=${url.slice(url.indexOf('web/')+4)};domain=ym-a.top;path=/web`;
        let aa=window.open();
        setTimeout(function(){
        aa.location='http://mp.ym-a.top';
        }, 100);
      },
      toWeiQing1:function(url){
        document.cookie=`_755url=;domain=ym-a.top;path=/web`;
                let aa=window.open();
        setTimeout(function(){
        aa.location='http://mp.ym-a.top';
        }, 100);
      },
      WxGzhInfo:function(url,num){
        var self=this;
        $.ajax({
          url: 'https://ym-a.top/cloud_code/GET/wxConfig/getWxGzhInfo.do',
          type:'get',
          data: {vendorId:self.vendorId},
          dataType: 'json',
          success: function (res) {
            if(res.status == "-1"){
              self.showWarn=true;
          self.warnText='请先绑定公众号'
              router.push('/enterprise/en_public');
            }
            else{
              if(num==0){
                self.toWeiQing(url);
              }
              else if(num==1){
                self.toWeiQing(url);
              }
            }
          },
          error:function(res){
            //console.log(res);
          }
        });
      },
    },
    created:function(){
      this.init()
    }
  }
</script>
