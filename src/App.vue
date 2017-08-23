<template>
  <div id="app">
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
        console.log(data.vendorName)
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
*{
  font-family: 'Microsoft YaHei'!important;
}
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  ul {
    display: block;
    list-style: none;
    margin:0 auto;
  }
  li {
    line-height: 50px;
  }
  li:hover {
    text-decoration: none;
  }
  .linkStyle {
    width: 100%;
    height: 100%;
  }
.goods_left {
  width: 102%;
  float: left;
  background-color: #313541;
  height: 1617px;
}
.col-md-2{
  padding-right: 0;
}
.goods_menu {
  padding-left: 0;
  width: 100%;
  margin-top: 113px;
}
.goods_menu li {
  width: 100%;
}
.goods_li_1{
  text-align: left;
}
.goods_menu li a {
  color:#fff;
  font-size: 16px;
  font-family: 'Microsoft YaHei';
}
.arrow {
  margin-left: 20px;
  margin-bottom: 1px;
  display: inline-block;
  width: 15.75px;
  background-image: url(./assets/img/icon_xiajiantou.png);
  background-repeat: no-repeat;
  height: 9px;
  background-size: contain;
}
.upArrow{
  
  background-image: url(./assets/img/icon_shangjiantou.png);
}
.goods_menu li a:focus{
  text-decoration: none;
}
.goods_menu .sub1 {
  width: 100%;
}
.goods_menu .sub1 li {
  line-height: 100%;
  margin-top: 10px;
}
.goods_menu .two_sub2 {
  width: 100%;
}
.goods_sub2,.goods_sub3{
  padding-left: 0;
}
.goods_sub2 li,
.goods_sub3 li{
  width: 100%;
  padding-left: 50px;
}
/*.goods_sub2 li:hover,
.goods_sub3 li:hover{
  background-color:#00baff;
  color:#fff; 
}*/
.goods_menu .two_sub2 li {
  line-height: 100%;
  margin-top: 10px;
}
.change_color:hover{
  background-color: rgba(255,255,255,0.2);
}
.goods_menu a:hover{
  text-decoration: none;
}
.goods_li{
  height: 51px;
}
.goods_menu li .img {
  display: inline-block;
  width: 50px;
  height: 20px;
  vertical-align: middle;
}
.goods_menu li .img1 {
  background: url(./assets/img/icon_gaikuang.png) 15px 0 no-repeat;
}
.goods_menu li .img2 {
  background: url(./assets/img/icon_qiye_xinxi.png) 15px 0 no-repeat;
}
.goods_menu li .img3 {
  background: url(./assets/img/icon_qiye_user.png) 15px 0 no-repeat;
}
.goods_menu li .img4 {
  background: url(./assets/img/icon_chanpin.png) 15px 0 no-repeat;
}
.goods_menu li .img5 {
  background: url(./assets/img/icon_qiye_xiaoxi.png) 15px 0 no-repeat;
}
.goods_menu li .img6 {
  background: url(./assets/img/icon_dingdan.png) 15px 0 no-repeat;
}
.goods_menu li .img7 {
  background: url(./assets/img/icon_chanping.png) 15px 0 no-repeat;
}
.goods_menu li .img8 {
  background: url(./assets/img/icon_liping.png) 15px 0 no-repeat;
}
.goods_menu li .img9 {
  background: url(./assets/img/icon_saomiao-.png) 15px 0 no-repeat;
}
.goods_menu li .img10 {
  background: url(./assets/img/icon_suyuan.png) 15px 0 no-repeat;
}
.goods_menu li .img11 {
  background: url(./assets/img/icon_yingyong.png) 15px 0 no-repeat;
}
.goods_menu li .img12 {
  background: url(./assets/img/icon_youhuiquan.png) 15px 0 no-repeat;
}
.goods_menu li .img13 {
  background: url(./assets/img/icon_guanggao.png) 15px 0 no-repeat;
  height: 25px;
}
.goods_menu li .img14 {
  background: url(./assets/img/icon_gonggaolan.png) 15px 0 no-repeat;
  height: 25px;
}
.rig {
  width: 100%;
  margin:0;
  border-radius: 10px;
  background-color: #f0f4fa;
  margin-top: 0;
  border: 1px solid white;
}
.goods_right {
  width: 102.5%;
  float: right;
  background-color: #f0f4fa;
  height: 1617px;
}
.footer{
  position: relative;

}
.footer_p{
  clear: both;
  height: 100px;
  line-height: 100px;
  color: #d5d7db;
  font-size: 16px;
}
.selected{
  background-color: #00baff;
  color: #fff;
}
.my-form{
  width: 100%;
  margin: auto;
  margin-top: 30px;
}
.pro-list{
  width: 100%;
  max-height: 780px;
  overflow: hidden;
  padding: 0;
  border: 1px solid #e7ebee;
  border-radius: 10px;
}
.pro-li{
  height: 72px;
  line-height: 72px;
}
.pro-li:hover{
  background: #eefaff;
}
.pro-li-span{
  display: inline-block;
  width: 11.6%;
  text-align: center;
  max-height: 72px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pro-li:nth-of-type(1){
  background-color: #e7ebee; 
  height: 60px;
  line-height: 60px;
}
.search{
  width: 195px;
  height: 36px;
  outline: none;
  float: right;
  border-radius: 8px;
  border: 1px solid #e7ebee;
  margin-right: 10px;
}
.search-button{
  float: right;
  width: 69px;
  height: 36px;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  background-color: #00baff;
  color: #fff;
  border: 1px solid #00baff;
  border-radius: 8px;
}
.add-pro{
  display: inline-block;
  text-align: center;
  width: 140px;
  height: 36px;
  line-height: 36px;
  border-radius: 8px;
  background-color: #43c343;
  color: #fff;
}
.title-one{
  display: inline-block;
  text-decoration: none;
  background: #00baff;
  color: #fff;
  padding: 0 20px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid transparent;
  margin: 0 5px 0 5px;
}
.title-two{
  display: inline-block;
  text-decoration: none;
  color: #000;
  border: 1px solid transparent;
  padding: 0 20px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 20px;
  margin: 0 5px 0 5px;
}
.title-two:hover{
  text-decoration: none;
  border:1px solid #00baff;
  color: #00baff;
}
.title-one:hover{
  text-decoration: none;
  color: #fff;
}
.title-one:focus{
  text-decoration: none;
  color: #fff;
}
.title-two:focus{
  text-decoration: none;
  color: #fff;
}
.page-button{
  width: 95%;
  text-align: left;
  margin: auto;
  margin-top: 60px;
}
.page-button-checkbox{ 
  margin-bottom: 40px;
}
.delbutton{
  color: #00baff;
  border: 1px solid #00baff;
  appearance: none;
  background-color: #fff;
  outline: none;
  border-radius: 3px;
}
.delbutton:hover{
  color: #fff;
  background: #00baff;
}
.page-num{
  width: 100%;
}
.page-num-ul{
  height: 100px;
  margin: auto;
  max-width: 617px;
  text-align: center;
}
.page-num-li{
  float: left;
  margin: 0 5px;
  text-align: center;
  line-height: 36px;
  font-size: 13px;
  font-weight: 2px;
  color: #b7b7b9;
  width: 36px;
  height: 36px;
  border-radius: 3px;
  border: 1px solid #f1f3f5;
}
.page-num-li:hover{
  color: #fff;
  background-color: #00baff;
}
.dangqianye{
  color: #fff;
  background-color: #00baff;
}
.arrow-left{
  display: inline-block;
  width: 10px;
  height: 10px;
  border-top: 2px solid #b7b7b9;
  border-left: 2px solid #b7b7b9;
  transform: rotate(-45deg);
  margin-left: 4px;
  margin-top: 4px;
}
.arrow-right{
  display: inline-block;
  width: 10px;
  height: 10px;
  border-top: 2px solid #b7b7b9;
  border-right: 2px solid #b7b7b9;
  transform: rotate(45deg);
  margin-right: 4px;
  margin-top: 4px;
}
.page-num-li-arrow:hover .arrow-left{
  border-color: #fff; 
}
.page-num-li-arrow:hover .arrow-right{
  border-color: #fff; 
}
.hidelist{
  display: none;
}
.photo{
  display: inline-block;
  margin-left: 10px;
  width: 75px;
  height: 75px;
  vertical-align: middle;
  background: url(./assets/img/touxiang_png.png);
  background-size: contain;
  background-repeat: no-repeat;
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
.check-box{
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url(./assets/img/icon_xuanzhekuang.png);
  vertical-align: middle;
}
.has-select{
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url(./assets/img/icon_xuanzhong.png);
  vertical-align: middle;
}
.checkshu{
  margin-left: 29px;
  margin-right: 36px;
}
.allselect{
  margin-left: 29px;
  margin-right: 36px;
}
.first,
.last{
  text-align: left;
}
.top-title{
  width: 95%;
  margin: auto;
  height: 36px;
  text-align: left;
  margin-top: 40px;
}
.notread{
  display: inline-block;
  width: 7px;
  height: 7px;
  background: url(./assets/img/icon_yuan2.png);
  margin: 0 5px 0 5px;
  vertical-align: middle;
}
.readed{
  display: inline-block;
  width: 7px;
  height: 7px;
  background: url(./assets/img/icon_yuan.png);
  margin: 0 5px 0 5px;
  vertical-align: middle;
}
.right-top p,
.right-main p,
.right-bottom p{
  font-family: "Microsoft YaHei";
}
.mengban{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.6);
  overflow-y: scroll;
}
.proclassify{
  width: 420px;
  min-height: 250px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -210px;
  margin-top: -125px;
}
.wordbreak{
  word-break: break-all;
  height: 72px;
  line-height: 72px;
  overflow: hidden;
  vertical-align: top;
}
.shanchu{
  width: 19px;
  height: 20px;
  display: inline-block;
  background: url(./assets/img/icon_shanchu.png) no-repeat;
  margin-right: 10px;
  vertical-align: middle;
}
.shanchu:hover{
  background: url(./assets/img/icon_shanchu2.png) no-repeat;
}
.bianji{
  width: 19px;
  height: 20px;
  display: inline-block;
  background: url(./assets/img/icon_bianji.png) no-repeat;
  vertical-align: middle;
  margin-right: 10px;
  
}
.bianji:hover{
  background: url(./assets/img/icon_bianji2.png) no-repeat;
}
.chakan{
  width: 29px;
  height: 20px;
  display: inline-block;
  background: url(./assets/img/icon_yulan.png) no-repeat;
  vertical-align: middle;
  margin-right: 10px;
}
.chakan:hover{
  background: url(./assets/img/icon_yulan2.png) no-repeat;
}
.huanyuan{
  width: 18px;
  height: 18px;
  display: inline-block;
  background: url(./assets/img/icon_huanyuan.png) no-repeat;
  vertical-align: middle;
  margin-right: 10px;
}
.huanyuan:hover{
  background: url(./assets/img/icon_huanyuan2.png) no-repeat;
}
.zanting{
  width: 20px;
  height: 20px;
  display: inline-block;
  background: url(./assets/img/icon_zanting-copy-3.png) no-repeat;
  vertical-align: middle;
}
.qidong{
  width: 20px;
  height: 20px;
  display: inline-block;
  background: url(./assets/img/icon_kaishi-copy-7.png) no-repeat;
  vertical-align: middle;
}
.totaldel{
  width: 16px;
  height: 20px;
  display: inline-block;
  background: url(./assets/img/icon_chedishanchu.png);
  vertical-align: middle;
}
.totaldel:hover{
  background: url(./assets/img/icon_chedishanchu2.png);
}
.bianji2{
  width: 19px;
  height: 20px;
  display: inline-block;
  background: url(./assets/img/icon_bianji710.png) no-repeat;
  vertical-align: middle;
  margin-right: 10px;
  
}
.mbtitle{
  text-align: left;
  padding: 0 15px;
  height: 38px;
  line-height: 38px;
  border-bottom: 1px solid #edeff3;
  font-size: 13px;
  color: #41484f;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: #f6f8fc;
  border-radius: 3px 3px 0 0;
}
.star:before{
  content: '*';
  color: red;
}
.myimg{
  border:1px solid transparent;
}
.myimg:hover{
  border:1px solid red;
}
.myimg:after{
  width: 20px;
  height: 20px;
  background-color: red;
  position: absolute;
  top: 435px;
  left: 273px;
  border-radius: 50%;
  text-align: center;
  color: #fff;
  display: none;
}
  .imgbox{
    left: 50%;
    top: 20%;
    margin-left: -342.5px;
    height: 655px;
    border-radius: 2px;
    background: #fff;
    width: 685px;
    position: absolute;
  }
  .imgheader{
    width: 100%;
    height: 48px;
    background: #f6f8fc;
    padding: 0 20px;
    box-sizing: border-box;
    position: relative;
  }
  .single-img{
    float: left;
    width: 110px;
    height: 110px;
    margin: 15px;
    position: relative;
  }
  .proimg{
    border: 2px solid transparent;
  }
  .proimg:hover{
    border-color: #00baff;
  }
  .imgmain{
    height: 500px;
  }
  .imgbottom{
    text-align: center;
  }
  .size{
    display: block;
    width: 106px;
    height: 25px;
    line-height: 25px;
    position: absolute;
    top: 83px;
    left: 2px;
    text-align: center;
    background-color: rgba(0,0,0,.2);
    color: #fff;
  }
  .imgname{
    display: block;
    height: 25px;
    line-height: 25px;
    width: 110px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .shangchuan{
    display: block;
    clear: both;
    margin-left: 55px;
  }
  .localUp{
    height: 450px;
  }
  #productImg{
    display: none;
  }
  .productImg{
    display: inline-block;
    width: 86px;
    height: 86px;
    background: url(./assets/img/group7.png);
  }
  .pro-parameter{
    width: 95%;
    padding: 10px 20px;
      margin: 20px;
      color: #333;
      background-color: #f4f5f9;
      max-height: 120px;
      overflow-y: scroll
  }
  .tishi{
    height: 100px;
    line-height: 100px;
  }
.page-num-ul a{
  display: inline-block;
}
.choosepro{
    width: 1000px;
    height: 620px;
    background: #fff;
    margin-left: 15%;
    margin-top: 73px;
    border-radius: 10px;
  }
  .choosepro-top{
    height: 75px;
    line-height: 75px;
    text-align: left;
    padding-left: 72px;
    font-size: 20px;
  }
  .choosepro-main{
    padding-left: 0;
    height: 60%;
    overflow-y: scroll;
  }
  .returnBtn{
    float: right;
    margin-right: 50px;
  }
  .classifyHeader{
    width: 100%;
    height: 48px;
    background: #f6f8fc;
    padding: 0 20px;
    box-sizing: border-box;
    position: relative;
  }
  .classifyFooter{
    width: 100%;
    height: 48px;
    background: #f6f8fc;
    padding: 0 20px;
    box-sizing: border-box;
    position: relative;
    top: 68px;
    text-align: center;
  }
  .warn{
    width: 420px;
    height: 250px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -210px;
    margin-top: -125px;
  }
  .warnmain{
    position: relative;
    top: 70px;
    text-align: center!important;
  }
  .warnbottom{
    text-align: right!important;
    position: relative;
    top: 140px;
    right: 50px;
  }
  .goods_sub2 li:hover,
  .goods_sub3 li:hover,
  .goods_li:hover{
    background-color: rgba(255,255,255,0.2);
  }
  .cha{
    display: inline-block;
    width: 18px;
    height: 18px;
    background-image: url(./assets/img/icon_cha_75.png);
    float: right;
    margin-right: 40px;
    margin-top: 21px;
  }
  .cha:hover{
    background-image: url(./assets/img/icon_cha_76.png);
  }
  .contentBox{
    width: 900px;
    height: 300px;
    position: relative;
    top: 30%;
    left: 50%;
    margin-left: -450px;
    border-radius: 10px;
    background-color: #fff;
  }
  .contentTop{
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f6f8fc;
    border-radius: 10px 10px 0 0;
    text-align: left;
  }
  .titleFont{
    margin-left: 40px;
    font-size: 18px;
    font-family: 'Microsoft YaHei';
  }
  .contentBox .message-value{
    border: 1px solid #ccc;
    height: 30px;
    padding-left: 5px;
    vertical-align: middle;
  }
  .contentBox .message-name{
    display: inline-block;
    width: 120px;
    margin-left: 60px;
    text-align: right;
    /*color: #666;*/
    vertical-align: middle;
  }
  .plzWait{
    width: 100%;
    height: 1215px;
    background-image: url(./assets/img/img_kaifa.png);
    background-repeat: no-repeat;
    background-position: 50% 10%;
  }
  .plzp{
    color: #999999;
    font-size: 16px;
    position: relative;
    top: 30%;
    text-align: center;
  }
  .time{
    line-height:26px;
    margin:10px 0;
    vertical-align: top;
  }

</style>
