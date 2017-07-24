<template>
  <div>
    <div class='top-title'>
    <router-link to="/enterprise/trade" class='title-two'>我的账户</router-link>
      <router-link to="/enterprise/passward" class='title-two'>支付密码</router-link>
      <router-link to="/enterprise/account" class='title-one'>充值</router-link>
    </div>
    <div class='right-main'>
      <div class="plzWait">
        <p class="plzp">此功能正在开发中，敬请等待......</p>
      </div>
      <!-- <div class="right-main-top">
        <div class='message-box'>

          <span class='textname'>账户余额:</span>
          <span class='mysum-two'>￥40.00</span>
        </div>
        <div class='message-box'>

          <span class='textname'><span class='xing'>*</span>充值金额:</span>
          <input class="textvalue" type="text">
        </div>
        <div class='message-box'>

          <span class='textname'><span class='xing'>*</span>验证码:</span>
          <input class="textvalue" type="text">
        </div>
        <div class='message-box'>
          <input id='submit' type="submit" value='确定充值'>
        </div>
      </div>
      <div class='right-bottom'>
        <div class='bottom-top'>
          <span class='top-left'></span><span class='top-right'>充值帮助</span>
        </div>
        <div class='bottom-center'>
          <p class='quas'>1、什么是云币？</p>
          <p class='answer'>答：云币是一种在云码系统内通用的可用于购买云码产品、系统、服务的虚拟货币。云币可以通过在线充值或者完成新手任务获得，云币永久有效，只适用于云码的注册商户。</p><br>
        </div>
        <div class='bottom-center'>
          <p class='quas'>2、充值云币支持什么支付方式？</p>
          <p class='answer'>答：目前支持微信支付和支付宝，如果您需要购买大笔订单的服务系统费用，建议您采用多次充值方式。</p><br>
        </div>
        <div class='bottom-bottom'>
          <p class='quas'>3、云币充值失败怎么办？</p>
          <span class='answer'>答：</span><span class="one">(1)请确认支付账户的余额是否充足，支付密码是否正确；</span><br>
          <span class='center-three'>(2)请查看支付账户是否设置了限额，如限制支付金额不能超过2000，超过2000的金额则无法支付成功，您可重新设置支付限额的额度；</span><br>
          <span class='center-three'>(3)支付系统数据可能出现异常，建议您刷新页面或者稍后重启电脑再进行支付。</span><br>
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
  .top-title{
    width: 95%;
    margin: auto;
    height: 36px;
    text-align: left;
    margin-top: 40px;
  }

  .right-main-top{
    margin: auto;
    margin-top: 58px;
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
  .mysum-two{
    font-size: 29px;
    color: #ff9937;
    padding-left: 10px;
    vertical-align: middle;
  }
  .top-left{
    display: inline-block;
    width: 24px;
    height: 25px;
    background: url("../assets/img/icon_bangzhu-.png") no-repeat;
    vertical-align: middle;
    margin-left: 65px;
  }
  .top-right{
    font-size: 18px;
    vertical-align: middle;
    margin-left: 20px;
  }
  .quas{
    margin-left: 87px;
    text-align: left;
  }
  .answer{
    color: #b3b3b3;
    margin-left: 87px;
    text-align: left;

  }
  .center-three{
    margin-left: 115px;
    color: #b3b3b3;
  }
  .bottom-top{
    margin-bottom: 56px;
    padding-top: 56px;
    border-top: 1px solid #b7b7b9;
  }
  .one{
    color: #b3b3b3;
  }
  .bottom-bottom{
    margin-bottom: 210px;
    text-align: left;
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
