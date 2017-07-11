<template>
  <div>
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
          <div class="message">
            <div class='message-box'>
              <span class='textname'>输入原密码：</span>
              <input class='textvalue' type="text" v-model='oldPassword'>
            </div>
            <div class='message-box'>
              <span class='textname'>输入新密码：</span>
              <input class='textvalue' type="text" v-model='newPassword'>
            </div>
            <div class='message-box'>
              <span class='textname'>再次输入新密码：</span>
              <input class='textvalue' type="text" v-model='checkPassword'>
            </div>
            
            <div class='message-box'>
                <input id='submit' type="submit" value='保存' @click='saveNewPassword'>
              </div>
          </div>
  </div>
</template>
<style scoped>
/*@import "../assets/css/common.css";*/
  .message{
    width: 95%;
    height: 1082px;
    background: #fff;
    border-radius: 8px;
    margin: auto;
    margin-top: 44px;
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
    text-align: left;
  }
  .message-box{
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
    display: inline-block;
    width: 240px;
    height: 36px;
    margin-left: 40px;
    border: 1px solid #e7e7eb;
    padding-left: 10px;
  }
  input,
  select{
    border-radius: 3px;
    border: 1px solid #e7e7eb;
    font-family: 'Microsoft YaHei';
    outline: none;
  }
  #submit{
    width: 120px;
    height: 36px;
    background-color: #00baff;
    color: #fff;
    border-radius: 8px;
    margin-left: 254px;
    margin-bottom: 83px;
  }
</style>
<script>
import common from '../common.js'
import md5 from 'js-md5'
let Base64 = require('js-base64').Base64;

  export default{
    data(){
      return{
        oldPassword:null,
        newPassword:null,
        checkPassword:null,
        showWarn:false,
        warnText:null,
        passwordReg:/^\d{8,16}$/
      }
    },
    props:['datas'],
    methods:{
      init:function(){
        var self=this;
      },
      //保存新密码
      saveNewPassword:function(){
        var self=this;
        if(self.oldPassword===null){
          self.showWarn=true;
          self.warnText='请输入原密码';
          return
        }else if(Base64.encode(md5(self.oldPassword))!=self.datas.passWord){
          self.showWarn=true;
          self.warnText='请输入正确的原密码';
          return
        }
        if(self.newPassword===null){
          self.showWarn=true;
          self.warnText='请输入新密码';
          return
        }
        if(self.checkPassword===null){
          self.showWarn=true;
          self.warnText='请再次输入新密码';
          return
        }else if(self.checkPassword!=self.newPassword){
          self.showWarn=true;
          self.warnText='请确保两次输入的密码一致';
          return
        }
        if(!self.passwordReg.test(self.newPassword)){
          self.showWarn=true;
          self.warnText='密码最少为8位，最多为16位';
          return
        }
        //发送请求
        var url='http://120.77.149.115/cloud_code/POST/user/updatePasswd.do';
        var type='post';
        var data={
            userId:self.datas.userId,
            passwd:parseInt(self.newPassword)
        };
        var success=function(res){
          if(res.errorCode===0){
            self.showWarn=true;
            self.warnText='修改成功';
          }
        };
        common.Ajax(url,type,data,success)
      }
    },
    created:function(){
      // this.init();
    }
  }
</script>
