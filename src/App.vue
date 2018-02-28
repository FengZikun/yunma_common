<template>
  <div id="app">
    <warn></warn>
    <hello v-if='vendorId!=""&&userType!=99&&vendorId!=undefined' v-bind:vendorId='vendorId' v-on:tuichu='logout'></hello>
    <admin v-if='userType==99' v-bind:vendorId='vendorId' v-on:tuichu='logout'></admin>
    <!---->
    <div class='linkStyle'>
      
      <router-view v-bind:datas='{vendorId:this.vendorId,
                                  userType:this.userType,
                                  userId:this.userId,
                                  passWord:this.password
                                  }' v-on:upvendorID='getvendorid'></router-view> 
    </div>

  </div>
</template>

<script>
  import hello from './components/Hello.vue'
  import admin from './components/HelloAdmin.vue'
  import common from './common.js'
  import md5 from 'js-md5'
  import router from './router'

  let Base64 = require('js-base64').Base64;
  export default {
    name: 'app',
    data(){
      return {
        username:null,
        password:sessionStorage.getItem('passWord'),
        captcha:null,
        vendorId:sessionStorage.getItem('vendorId'),
        userType:sessionStorage.getItem('userType'),
        userId:sessionStorage.getItem('userId'),
      }
    },
    methods:{
      logout:function(){
        var self=this;
        self.vendorId=null;
        self.userType=null;
        self.userId=null;
        sessionStorage.clear();
        router.replace('/login')
      },
      getvendorid:function(data){
        var self=this;
        sessionStorage.setItem('vendorName',data.vendorName);
        sessionStorage.setItem('userType',data.userType);
        sessionStorage.setItem('vendorId',data.vendorId);
        sessionStorage.setItem('userId',data.userId);
        sessionStorage.setItem('passWord',data.passWord);
        self.userType=sessionStorage.getItem('userType');
        self.vendorId=sessionStorage.getItem('vendorId');
        self.userId=sessionStorage.getItem('userId');
        self.password=sessionStorage.getItem('passWord');
        self.writeCookie('vendorId',data.vendorId);
        self.writeCookie('name',data.userName);
        self.writeCookie('pwd',data.passWord);
      },
      toWeiQing:function(url){
        document.cookie=`_755url=${url.slice(url.indexOf('web/')+4)};domain=ym-a.top;path=/web`;
        window.open(url,'_blank')
      },
      writeCookie:function(name,val){
        document.cookie=`_755${name}=${val};domain=ym-a.top;path=/web`;
      },
    },
    components:{
      hello,
      admin
    },
  }
</script>

<style>
@import "./assets/css/app.css";

</style>
