<template>
  <div>
          <div class='right-main'>
          <div class="plzWait">
            <p class="plzp">此功能正在开发中，敬请等待......</p>
          </div>
            <!-- <div class='title'><span>账户登录信息</span></div>
            <div class='text'>
              <p class="textname">用户名：13925192837</p>
              <p class="textname">上次登录时间：2017-04-1209:34:23</p>
              <p class="textname">您的账户当前安全等级为<span style='color:#FF6767'>低，</span>您可以通过以下方式提高等级。</p>
            </div>
            <div class='title'><span>账户安全信息</span></div>
            <ul class='list'>
              <li class="list-cell">
                <span class='one'>绑定微信号</span>
                <span class='two'>未绑定</span>
                <span class='three'>通过微信扫描二维码注册的用户，系统会自动绑定该微信号，用户可<br>以通过该微信号找回密码。已完成手机验证的用户可以修改绑定。</span>
                <span class='four'><a href="javascript:void(0)">设置</a></span>
              </li>
              <li class="list-cell">
                <span class='one'>登录密码</span>
                <span class='two'><span>强度:</span><span style='color:#FF6767'>低</span></span>
                <span class='three'>安全性高的密码可以使账号更安全，建议您定期更换密码，且设置一<br>个包含数字和字母，长度超过6位以上的密码。</span>
                <span class='four'><a href="javascript:void(0)">修改</a></span>
              </li>
              <li class="list-cell">
                <span class='one'>手机验证</span>
                <span class='two'>未绑定</span>
                <span class='three'>完成手机绑定可以提升账户安全等级，也是识别最高管理员身份的有<br>效途径，绑定后可以修改。</span>
                <span class='four'><a href="javascript:void(0)">设置</a></span>
              </li>
            </ul> -->
          </div>
  </div>
</template>
<style scoped>
/*@import "../assets/css/common.css";*/
 .title{
  text-align: left;
  margin: 60px 0 0 60px;
  font-size: 18px;
  font-family: 'Microsoft YaHei';
 }
 .text{
  margin-top: 40px;
 }
 .textname{
  text-align: left;
  color: #b7b7b9;
  margin: 10px 100px 0 100px;
 }
 .textname:last-of-type{
  border-bottom: 1px solid #b7b7b9;
  padding-bottom: 60px;
 }
 .list{
  margin-left: 60px;
  text-align: left;
 }
 .list-cell{
  display: flex;
  margin-right: 100px;
  justify-content: space-between;
  border-bottom: 1px dashed #c8c8c9;
 }
 .list-cell a{
  text-decoration: none;
 }
 .one,
 .two,
 .four{
  line-height: 100px;
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
