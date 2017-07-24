<template>
  <div>
    <div class='top-title'>
    <router-link to="/enterprise/trade" class='title-two'>我的账户</router-link>
      <router-link to="/enterprise/passward" class='title-one'>支付密码</router-link>
      <router-link to="/enterprise/account" class='title-two'>充值</router-link>
    </div>
    <div class='right-main'>
      <div class="plzWait">
            <p class="plzp">此功能正在开发中，敬请等待......</p>
      </div>
      <!-- <div class="right-main-top">
        <p class="top">
          <span class="icon1"></span>
          1、什么是支付密码？在账户资金变动，或修改账户相关信息时需要输入的密码。
        </p>
        <p class="top">
          2、为了提高账户的安全性，首次设置支付密码需要先进行手机验证。
        </p>
      </div>
      <div class='bottom'>
        <div class='message-box'>

          <span class='textname'><span class='xing'>*</span>请输入登录密码:</span>
          <input class="textvalue" type="text">
        </div>
        <div class='message-box'>

          <span class='textname'><span class='xing'>*</span>设置密码:</span>
          <input class="textvalue" type="text">
        </div>
        <div class='message-box'>

          <span class='textname'><span class='xing'>*</span>确认支付密码:</span>
          <input class="textvalue" type="text">
        </div>
        <div class='message-box'>

          <span class='textname'><span class='xing'>*</span>已绑定手机:</span>
          <a class='jump' href="javascript:void(0)"><span>您未绑定手机，马上去绑定</span></a>
        </div>
        <div class='message-box'>

          <span class='textname'><span class='xing'>*</span>验证码:</span>
          <input class="textvalue" type="text">
        </div>
        <div class='message-box'>
          <input id='submit' type="submit" value='保存'>
        </div>
      </div> -->
    </div>
  </div>
</template>
<style scoped>
  /*@import "../assets/css/common.css";*/
  .xing{
    color: #ff4646;
  }
  .right-top,
  .right-main,
  .right-bottom{
    width: 95%;
    background: #fff;
    border-radius: 8px;
    margin: auto;
    margin-top: 44px;
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }
  .right-main-top{
    width: 95%;
    margin: auto;
    margin-top: 58px;
  }
  .icon1{
    width: 18px;
    height: 18px;
    background: url("../assets/img/icon_tishi.png") no-repeat;
    float: left;
    margin-right: 8px;
  }
  .top{
    text-align: left;
    font-family: 'Microsoft YaHei';
    color: #b3b3b7;
  }
  .top:nth-of-type(2){
    margin-left: 26px;
  }
  .message-box{
    text-align: left;
    min-height: 38px;
    font-family: 'Microsoft YaHei';
    margin-top: 40px;
  }
  .textname{
    text-align: right;
    display: inline-block;
    width:150px;
    margin-left: 60px;
    font-family: 'Microsoft YaHei';
    font-size: 18px;
    vertical-align: middle;
  }
  .textvalue{
    outline: none;
    display: inline-block;
    height: 36px;
    width: 280px;
    margin-left: 10px;
    border: 1px solid #e7e7eb;
    padding-left: 10px;
    border-radius: 3px; 
  }
  .jump{
    display: inline-block;
    margin-left: 10px;
    color: #00baff;
    font-size: 18px;
    text-decoration: none;
    vertical-align: middle;
  }
  #submit{
    outline: none;
    padding: 0;
    border: 0;
    width: 120px;
    height: 36px;
    background-color: #00baff;
    color: #fff;
    border-radius: 8px;
    margin-left: 224px;
    margin-bottom: 83px;
  }
</style>
<script>
  export default{
    data(){
      return{
      }
    },
    methods:{
      showList:function(event){
        $(event.target).parents("li").find("ul").toggleClass("hidelist");
        $(event.target).parents("li").siblings().find("ul").addClass("hidelist")
      }
    }
  }
</script>
