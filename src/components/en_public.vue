<template>
  <div>
          <div class="top-message">
          <div v-show='addmessage1' class="add">
            <p class="top">
                <span class="icon1"></span>
                此功能针对于已开通公众号企业，输入信息可以绑定公众号进行操作等服务
              </p>
            <input type="button" name="" value="+新增公众号" class="addpublic" @click='toWeiQing1("http://mp.ym-a.top/web/index.php?c=account&a=post-step&step=2")'>
          </div>
          <div v-if='addmessage'>
              <div class='message-box3 dubBtn' @click='toWeiQing("http://mp.ym-a.top/web/index.php?c=account&a=manage&")' style="margin-left:0">
                <span class="bianji2"></span>编辑
              </div>
              <p style="margin-bottom:50px;font-family: 'Microsoft YaHei';font-size:18px;color:#0f0f12;text-align:left;">基本信息</p>
              <div class='message-box'>
                <span class='textname'>公众号名称</span><span class="wxInfo">{{gzhName}}</span>
              </div>
              <div class='message-box'>
                <span class='textname'>公众号账号</span><span class="wxInfo">{{gzhAccount}}</span>
              </div>
              <div class='message-box1'>
                <span class='textname1'>公众号头像</span>
                <span class="wxInfo"><span class='photo1' v-bind:style="{backgroundImage: gzhHeadImg}"></span></span>
                
              </div>
              <div class='message-box'>
                <span class='textname'>公众号描述</span><span class="wxInfo">{{gzhMark}}</span>
              </div>
              <div class='message-box1'>
                <span class='textname1'>公众号二维码</span>
                <span class="wxInfo"><span class='photo1' v-bind:style="{backgroundImage: wxQrCodePath}"></span></span>
                
              </div>  
              <div class='message-box'>
                <span class='textname'>原始ID</span><span class="wxInfo">{{gzhId}}</span>
              </div>  
              <div class='message-box'>
                <span class='textname'>APP ID</span><span class="wxInfo">{{appid}}</span>
              </div>
              <div class='message-box'>
                <span class='textname'>创建时间</span><span class="wxInfo">{{createTime}}</span>
              </div>
          </div>
        </div>
        <div class="bottom-message">
          <p style="margin-bottom:50px;font-family: 'Microsoft YaHei';font-size:18px;color:#0f0f12;text-align:left;">参数配置</p>
          <div class='message-box'>
            <span class='textname'>APP Secret<br><span style="color:#999">（应用密钥）</span></span><span class="wxInfo">{{appsecret}}</span>
          </div>
          <div class='message-box'>
            <span class='textname'>URL<br><span style="color:#999">（服务器地址）</span></span><span class="wxInfo">{{url}}</span>
          </div>
          <div class='message-box'>
            <span class='textname' style="width:144px;margin-left:-4px;">EncodingAESKey<br><span style="color:#999">（消息加解密密钥）</span></span><span class="wxInfo">{{encodingAESKey}}</span>
          </div> 
          <div class='message-box'>
            <span class='textname'>APP Token<br><span style="color:#999">（应用Token）</span></span><span class="wxInfo">{{token}}</span>
          </div>
        </div>
  </div>
</template>
<style scoped>
/*@import "../assets/css/common.css";*/
  .xing{
    color: #ff4646;
  }
  .top-message{
    width: 95%;
    height: 766px;
    padding: 60px 70px;
    background: #fff;
    border-radius: 8px;
    margin: auto;
    margin-top: 44px;
    position: relative;
    text-align: left;
  }
  .bottom-message{
    width: 95%;
    height: 513px;
    padding: 60px 70px;
    background: #fff;
    border-radius: 8px;
    margin: auto;
    margin-top: 40px;
    position: relative;
    text-align: left;
  }
  .message-box{
    min-height: 16px;
    font-family: 'Microsoft YaHei';
    margin-top: 40px;
  }
  
  .message-box1{
    min-height: 60px;
    font-family: 'Microsoft YaHei';
    margin-top: 40px;
    vertical-align: top;
  }
  .message-box3{
    font-family: 'Microsoft YaHei';
  }
  .dubBtn{
    text-align: center;
    line-height: 36px;
    width: 120px;
    height: 36px;
    background-color: #00baff;
    color: #fff;
    border-radius: 8px;
    position: absolute;
    top: 60px;
    right: 70px;
  }
  .textname{
    text-align: left;
    display: inline-block;
    width: 140px;
    font-family: 'Microsoft YaHei';
    vertical-align: top;
    font-size: 16px;
    color: #666;

  }
  .textname1{
    text-align: left;
    display: inline-block;
    width: 140px;
    font-family: 'Microsoft YaHei';
    font-size: 16px;
    color: #666;
    vertical-align: top;
  }
  .wxInfo{
    display: inline-block;
    margin-left: 50px;
    font-family: 'Microsoft YaHei';
    font-size: 16px;
    color: #333;
    text-align: left;
  }
  .textvalue{
    display: inline-block;
    width: 450px;
    height: 36px;
    margin-left: 10px;
    border: 1px solid #e7e7eb;
    padding-left: 10px;
  }
  .phone{
    display: inline-block;
    width: 200px;
    height: 36px;
    margin-left: 10px;
    border: 1px solid #e7e7eb;
    padding-left: 10px;
  }
  .sendname{
    display: inline-block;
    width: 180px;
    height: 36px;
    margin-left: 10px;
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
  #textarea{
    margin-left: 10px;
    border-radius: 3px;
    border: 1px solid #e7e7eb;
    width: 319px;
    height: 90px;
    resize: none;
    outline: none;
  }
  #submit{
    width: 120px;
    height: 36px;
    background-color: #00baff;
    color: #fff;
    border-radius: 8px;
    margin-left: 275px;
    margin-bottom: 83px;
  }
  .photoafter{
    display: inline-block;
    line-height: 35px;
    vertical-align: middle;
    margin-left: 20px;
  }
  .photoafter p{
    margin: 0;
  }
  .updatetwo{
    color: #67a9ec;
  }
  .pic{
    color: #b3b3b3;
  }
  .add{
    width: 90%;
    margin: auto;
    height: 700px;
    margin-top: 60px;
  }
  .addpublic{
    width: 164px;
    height: 48px;
    color: #fff;
    font-family: 'Microsoft YaHei';
    background: url(../assets/img/button_xinzeng.png) no-repeat;
    border: 0;
  }
  .top{
    text-align: left;
    font-family: 'Microsoft YaHei';
    font-size: 16px;
    margin-bottom: 60px;
    margin-left: 0;
  }
  .icon1{
    width: 18px;
    height: 18px;
    background: url("../assets/img/icon_tishi.png") no-repeat;
    float: left;
    margin-right: 8px;
  }
  .photo1{
  display: inline-block;
  width: 80px;
  height: 80px;
  vertical-align: middle;
  background-size: cover;
  background-repeat: no-repeat;
  }

  [v-cloak] {
    display: none;
}
</style>
<script>
  export default{
    data(){
      return{
        addmessage:false,
        addmessage1:false,
        gzhName:'',
        gzhAccount:'',
        gzhMark:'',
        gzhType:'',
        appid:'',
        appsecret:'',
        wxQrCodePath:'',
        gzhHeadImg:'',
        url:'',
        encodingAESKey:'',
        createTime:'',
        token:'',
        gzhId:'',
      }
    },
    props:['vendorId'],
    methods:{
      init:function(){
        var self=this;
        $.ajax({
          url: 'https://ym-a.top/cloud_code/GET/wxConfig/getWxGzhInfo.do',
          type:'get',
          data: {vendorId:self.vendorId},
          dataType: 'json',
          success: function (res) {
            //console.log(res,parseInt(self.vendorId)); 
            if(res.status == "-1"){
              self.addmessage1=true;
              return
            }
            else{
              self.gzhName =res.gzhName;//公众号名称
              self.gzhAccount =res.gzhAccount;//公众号账号
              self.gzhId =res.gzhId;//公众号原始id
              self.gzhMark =res.gzhMark;//描述
              self.gzhType =res.gzhType;//公众号类型
              self.appid  =res.appid;
              self.appsecret  =res.appsecret;
              self.wxQrCodePath=`url(${res.wxQrCodePath})`;//二维码图片
              self.gzhHeadImg =`url(${res.gzhHeadImg})`;//公众号头像
              self.url  =res.url;//服务器路径
              self.encodingAESKey =res.encodingAESKey;
              self.createTime =res.createTime;
              self.token =res.token;
              self.addmessage=true;
            }
          },
          error:function(res){
            //console.log("error")
          }
        });
      },
      toWeiQing:function(url){
        //console.log(url.slice(url.indexOf('web/')+4))
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
    },
        created:function(){
      this.init();
    }
  }
</script>
