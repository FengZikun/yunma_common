<template>
  <div>
  
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
/*@import "../../assets/css/common.css";*/
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
import common from '../../common.js'
import {mapMutations} from 'vuex'
import md5 from 'js-md5'
let Base64 = require('js-base64').Base64;
  export default{
    data(){
      return{
        oldPassword:null,
        newPassword:null,
        checkPassword:null,
        passwordReg:/^([0-9]|[a-zA-Z]){8,16}$/
      }
    },
    props:['datas'],
    methods:{
      ...mapMutations({
        show:'warn/show'
      }),
      init:function(){
        var self=this;
      },
      //保存新密码
      saveNewPassword:function(){
        var self=this;
        let errormsg = common.validator([
            {value:self.oldPassword, name:'isEmpty',errormsg:'请输入原密码'},
            {value:[self.oldPassword, self.datas.passWord], name:'psDetection', errormsg:'请输入正确的原密码'},
            {value:self.newPassword, name:'isEmpty', errormsg:'请输入新密码'},
            {value:self.checkPassword, name:'isEmpty', errormsg:'请再次输入新密码'},
            ]);
          if(errormsg){
            self.show(errormsg);
            return
          }
        if(self.checkPassword!=self.newPassword){
          self.showWarn=true;
          self.show('请确保两次输入的密码一致');
          return
        }
        if(!self.passwordReg.test(self.newPassword)){
          self.showWarn=true;
          self.show('密码最少为8位，最多为16位');
          return
        }
        //发送请求
        var url='https://ym-a.top/cloud_code/POST/user/updatePasswd.do';
        var type='post';
        var data={
            userId:self.datas.userId,
            passwd:parseInt(self.newPassword)
        };
        var success=function(res){
          if(res.errorCode===0){
            self.showWarn=true;
            self.show('修改成功');
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
