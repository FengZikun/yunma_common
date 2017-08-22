<template>
  <div @keyup.13='login'>
  <div class="father">
    <div class="login">
    <div class="login-title">
      <span class="span1">登录</span>
      <span class="span2">LOGIN</span>
    </div>
      <div class="promessage">
        <span class="message-name star">用户名：</span>
        <input class="message-value" type="text" name="" v-model='username'>
      </div>
      <div class="promessage">
        <span class="message-name star">密码：</span>
        <input class="message-value" type="password" name="" v-model='password' @blur='passwdTest'>
        <p class="pswWarn hidelist">密码长度至少为8位</p>
      </div>
      <div class="buttongroup">
        <input class="jumpbutton" type="button" name="" value="登录" @click='login'>

      </div>
    </div>
  </div>
    
  </div>
</template>
<style scoped>
  /*@import "../assets/css/common.css";*/
  .login{
    width: 500px;
    height: 500px;
    border: 0;
    z-index: 999;
    position: absolute;
    left: 35%;
    top: 20%;
    background-color: rgba(255,255,255,0.9);
    border-radius: 10px;
  }
  .login-title{
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .father{
        background-image: url(../assets/img/register.1b64fb3.jpg);
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: top center;
    background-attachment: fixed;
    min-width: 1px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .span1{
    font: 28px 'microsoft yahei';
    color: #989fa6;
  }
  .span2{
    font: 24px 'microsoft yahei';
    color: #c7cacd;
  }
  .promessage{
    font: 16px 'microsoft yahei';
    text-align: left;
    margin-top: 10px;
  }
  .message-name{
    display: inline-block;
    width: 100px;
    text-align: right;
    margin-left: 80px;
  }
  .message-value{
    display: table-cell;
    height: 46px;
    max-width: 290px;
    padding-left: 12px;
    border: 1px solid #d0d9e0;
  }
  .jumpbutton{
    width: 250px;
    height: 43px;
    cursor: pointer;
    border: 0;
    background-color: #46b8da;
    border-radius: 5px;
    font: 18px 'microsoft yahei';
    color: #fff;
    margin-top: 20px;
  }
  .pswWarn{
    color: red;
    text-align: center;
  }
</style>
<script>
  import hello from '../components/Hello.vue'
  import admin from '../components/HelloAdmin.vue'
  import common from '../common.js'
  import md5 from 'js-md5'
  import router from '../router'
  let Base64 = require('js-base64').Base64;

  export default{
    data(){
      return{
        childCon:'我是子页面',
        username:'',
        password:'',
        captcha:'',
        userId:'',
        
      }
    },
    props:['datas'],
    methods:{
      //判断登录状态
      init:function(){
        var self=this;
        //console.log(self.datas.userType);
        if(self.datas.userType==undefined||self.datas.userType==''){
          return
        }else if(self.datas.userType==99){
          router.push({path:'/admin'});
        }else if(self.datas.userType!=99){
          router.push({path:'/enterprise'});
        }
      },

      changecapcha:function(){
        $(".cap").attr("src", "https://ym-a.top/cloud_code/GET/user/captcha.do?timestamp=" + (new Date()).valueOf());
      },
      login:function(){
        var self=this;
        if(self.username==''){
          alert('请输入用户名')
          return
        }else if(self.password==''){
          alert('请输入密码')
          return
        }else{

          var url='https://ym-a.top/cloud_code/POST/user/login.do';
          var type='post';
          var pswd=Base64.encode(md5(self.password));
          var data={
            username:self.username,
            passwd:pswd,
          };
          var success=function(res){
            if(res.statuscode==1){
              self.userId=res.id;
              self.vendorId=res.vendorId;
              self.userType=res.userType;
              var data={vendorId:self.vendorId,
                userType:self.userType,
                userId:self.userId,
                userName:res.userName,
                passWord:pswd,
                vendorName:res.vendorName}
                self.$emit('upvendorID',data);
                self.isLogin=true;
                if(res.userType===99){
                  router.replace({path:'/admin'});
                }else{
                  router.replace({path:'/enterprise'});
                }
              }else{
                //console.log(res)
                alert(res.msg)
              }

            };
            common.Ajax(url,type,data,success)
          }

        },

        //验证密码
        passwdTest:function(){
          var self=this;
          var passwordReg=/^\d{8,16}$/;
          if(!passwordReg.test(self.password)){
            $('.pswWarn').removeClass('hidelist');
          }else{
            $('.pswWarn').addClass('hidelist');
          }
        }
      },
      created:function(){
        this.init();
      }
    }
  </script>
