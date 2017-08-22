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
    <div class='row'>
      <div class='col-md-2'>
        <div class='goods_left'>
          <ul class='goods_menu'>
              <router-link tag='li' class='goods_li goods_li_1' to="/twoCode/gaikuang">
                <span class='img img1'></span><a>概况</a>
              </router-link>


            <li class='goods_li_1'>
              <div class="change_color" @click="showList">
                <span class='img img9'></span><a href="javascript:void(0)"><span>防伪码管理</span><span
                class='arrow'></span></a>
              </div>

              <ul class='goods_sub2 hidelist'>
              <router-link tag='li' to="/twoCode/enterprise_order">
                <a>防伪码生成</a>
                </router-link>
                <router-link tag='li' to="/twoCode/briefCode">
                  <a>防伪页模板</a>
                </router-link>
                <router-link tag='li' to="/twoCode/activity">
                  <a>扫码活动管理</a>
                </router-link>
                <router-link tag='li' to="/twoCode/scan">
                  <a>扫码明细</a>
                </router-link>
                
              </ul>
            </li>

            <li class='goods_li_1'>
              <div class="change_color" @click="showList">
                <span class='img img10'></span><a href="javascript:void(0)"><span>溯源码管理</span><span
                class='arrow'></span></a>
              </div>

              <ul class='goods_sub3 hidelist'>
              <router-link tag='li' to="/twoCode/sourceCode">
                <a>溯源码生成</a>
                </router-link>
                <router-link tag='li' to="/twoCode/briefCodeSu">
                  <a>溯源页模板</a>
                </router-link>
                <router-link tag='li' to="/twoCode/activitySu">
                  <a>溯源扫码活动管理</a>
                </router-link>
                <router-link tag='li' to="/twoCode/channel">
                  <a>渠道管理</a>
                </router-link>
                <router-link tag='li' to="/twoCode/analysis">
                  <a>渠道信息分析</a>
                </router-link>
              </ul>
            </li>

            <li class="goods_li_1">
              <div class="change_color" @click="showList">
                <a href="javascript:void(0)"><span class='img img11'></span><span>应用中心</span><span class='arrow'></span>
                </a>
              </div>

              <ul class='goods_sub3 hidelist'>
                <router-link tag='li' to="/twoCode/hongbao">
                  <a>发放红包</a>
                </router-link>
                <router-link tag='li' to="/twoCode/game">
                  <a>集字游戏</a>
                </router-link>
                <li v-if='appList!=""' v-for='app in appList'>
                  <a href="javascript:void(0)"><p @click='toWeiQing(app.weqUrl)' style="color:#fff;font-size:16px;">{{app.appName}}</p></a>
                </li>
                <li @click="WxGzhInfo('https://www.ym-b.top/web/index.php?c=profile&a=module&')" style="color:#fff;font-size:16px;" >
                <a href="javascript:void(0)">更多应用</a>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
      <div class='col-md-10'>
        <div class='two_right'>
          <router-view v-on:sub="saveData"
          v-on:upOrderId='getorderId'
          v-on:upActivityId='getActivityId'
          v-on:upvendorName='getvendorName'
                       v-bind:datas="{moduleName:this.moduleName,
                        moduleRemark:this.moduleRemark,
                        phoneTitle: this.phoneTitle, 
                        imgSrc: '',
                        you:this.you,
                        antifake:this.antifake,
                        shop:this.shop,
                        shopUrl:this.shopUrl,
                        keyOne:this.keyOne,
                        keyOneName:this.keyOneName,
                        keyOneContent:this.keyOneContent,
                        keyOneURL:this.keyOneURL,
                        keyTwo:this.keyTwo,
                        keyTwoName:this.keyTwoName,
                        keyTwoContent:this.keyTwoContent,
                        keyTwoURL:this.keyTwoURL,
                        keyThree:this.keyThree,
                        keyThreeName:this.keyThreeName,
                        keyThreeContent:this.keyThreeContent,
                        keyThreeURL:this.keyThreeURL,
                        keyFour:this.keyFour,
                        keyFourName:this.keyFourName,
                        keyFourContent:this.keyFourContent,
                        keyFourURL:this.keyFourURL,
                        keyFive:this.keyFive,
                        keyFiveName:this.keyFiveName,
                        keyFiveContent:this.keyFiveContent,
                        keyFiveURL:this.keyFiveURL,
                        vendorId:this.vendorId,
                        vendorName:this.vendorName,
                        orderId:this.orderId,
                        activityId:this.activityId,
                        userId:this.userId}"></router-view>
          <div class='gongz'>
            <p>版权所有©2017 深圳市云码互联数字技术有限公司 All Rights Reserved. 粤ICP备17040526号</p>
          </div>
        </div>
      </div>
    </div>
    <div class='space3'></div>
  </div>
</template>
<style scoped>
  /*@import "../assets/css/common.css";*/
*{
  text-align: left;
}
  .space3 {
    width: 100%;
    height: 100px;
  }

  .two_left {
    width: 102%;
    float: left;
    background-color: #313541;
    height: 1300px;
  }

  .two_right {
    width: 102.5%;
    float: right;
    background-color: #f0f4fa;
    height: 1617px;
    position: relative;
  }

  .two_menu {
    width: 100%;
    margin-top: 40px;
  }

  .two_menu li {
    width: 100%;
  }

  .two_menu li a {
    color: #fff;
    font-size: 16px;
  }

  .two_menu li .arrow {
    margin-left: 40px;
    font-family: 'simsun';
  }

  .two_menu li a:hover {
    text-decoration: none;
    color: #00BAFF;
  }

  .two_menu .sub1 {
    width: 100%;
  }

  .two_menu .sub1 li {
    line-height: 100%;
    margin-top: 10px;
  }

  .two_menu .two_sub2 {
    width: 100%;
  }

  .two_menu .two_sub2 li {
    line-height: 100%;
    margin-top: 18px;
    text-align: left;
    margin-left: 37%;
  }

  .two_menu .sub3 {
    width: 100%;
  }

  .two_menu .sub3 li {
    line-height: 100%;
    margin-top: 10px;
    /*text-align: left;*/
  }

  .two_menu .two_li_1 a {
    margin-right: 31%;
  }

  @media screen and (max-width: 1366px) {
    .two_menu .two_li_1 a {
      padding-right: 16%;
    }
  }

  .two_menu .two_li_2 .two_sub2 {
    display: none;
  }

  .two_menu .two_li_3 .two_sub2 {
    display: none;
  }

  .two_right .two_top {
    width: 90%;
    min-height: 200px;
    margin: 0 auto;
    border-radius: 10px;
    background-color: #fff;
    margin-top: 40px;
    padding-top: 45px;
    padding-left: 35px;
    min-height: 1400px;
  }

  .two_right .two_top .two_top_left {
    width: 40%;
    height: 200px;
    padding-top: 50px;
    color: #fff;
    float: left;
  }

  .two_right .two_top .two_top_left .one {
    display: inline-block;
    width: 100px;
    height: 100px;
    line-height: 150px;
    border-radius: 50px;
    background-color: #00BAFF;
  }

  .two_right .two_top .two_top_left .two {
    display: inline-block;
    width: 100px;
    height: 100px;
    line-height: 150px;
    border-radius: 50px;
    background-color: #ffc72f;
    float: right;
    margin-right: 10%;
  }

  .two_right .two_top .two_top_left span {
    margin: 0;
    padding: 0;
    /*margin-top: -10px;*/
  }

  .two_right .two_top .two_top_left p {
    margin: 0;
    padding: 0;
    line-height: 20px;
    margin-top: -109px;
  }

  .two_right .two_top .two_top_right {
    width: 58%;
    height: 150px;
    margin-top: 25px;
    border-left: 1px solid #ccc;
    float: right;
  }

  .two_right .two_top .two_top_right ul {
    width: 100%;
    margin-left: 20px;
    margin-top: 20px;
  }

  .two_right .two_top .two_top_right ul li {
    width: 50%;
    float: left;
    text-align: left;
    font-size: 16px;
    font-family: 'microsoft yahei';
  }

  .two_center {
    width: 90%;
    margin: 0 auto;
    height: 900px;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 20px;
  }

  .two_center .two_center_tit {
    border-bottom: 1px solid #ccc;
  }

  .two_center .two_center_tit p {
    text-align: left;
    padding-top: 20px;
  }

  .two_center .two_center_tit p .p_left {
    padding-top: 30px;
    text-align: left;
    padding-left: 20px;
    font-size: 16px;
    color: #00BAFF;
  }

  .two_center .two_center_tit p .p_right {
    color: #6d7776;
    padding-left: 5px;
  }

  .two_center .zhex {
    margin-top: 20px;
  }

  .two_center .map {
    margin-top: 20px;
  }

  .two_menu li .img {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  .two_menu li .img1 {
    background: url(../assets/img/icon_gaikuang.png) no-repeat;
  }

  .two_menu li .img2 {
    background: url(../assets/img/icon_qiye_xinxi.png) no-repeat;
  }

  .two_menu li .img3 {
    background: url(../assets/img/icon_dingdan.png) no-repeat;
  }

  .two_menu li .img4 {
    background: url(../assets/img/icon_chanpin.png) no-repeat;
  }

  .gongz {
    width: 60%;
    margin: 0 auto;
    margin-top: 40px;
    padding-top: 20px;
  }

  .gongz p {
    color: #6d7776;
  }
  .photo1{
  display: inline-block;
  width: 35px;
  height: 35px;
  margin-left:-20px;
  }
  .router-link-active{
    color: #fff!important;
    background-color: #00baff!important;
  }
</style>
<!--<script src='../assets/js/china.js'></script>-->
<script>
  import router from '../router'
  export default{
    data(){
      return {
        moduleName: '模板名称', 
        moduleRemark: '备注信息', 
        phoneTitle: "公司名称", 
        imgSrc: '', 
        you:true,
        antifake:true,
        shop:true,
        shopUrl:'http://mp.ym-a.top/app/index.php?i=4&c=entry&eid=39',
        keyOne:true,
        keyOneName:'公司官网',
        keyOneContent:'公司官网页面',
        keyOneURL:'http://mp.weixin.qq.com/s?__biz=MzIwMjc5MTYwMA==&mid=2247483686&idx=1&sn=9e85cb59101730a8902527d0abd4de90&chksm=96d80ef9a1af87ef035a625131cc4b50ec3bb4075489fd9ecfac4d970336a331c74fc55d8b26&mpshare=1&scene=1&srcid=0815p2L1tbyEUoxMMetknoDH#rd',
        keyTwo:true,
        keyTwoName:'产品介绍',
        keyTwoContent:'产品介绍页面',
        keyTwoURL:'http://mp.weixin.qq.com/s?__biz=MzIwMjc5MTYwMA==&mid=2247483686&idx=1&sn=9e85cb59101730a8902527d0abd4de90&chksm=96d80ef9a1af87ef035a625131cc4b50ec3bb4075489fd9ecfac4d970336a331c74fc55d8b26&mpshare=1&scene=1&srcid=0815p2L1tbyEUoxMMetknoDH#rd',
        keyThree:true,
        keyThreeName:'取蜜视频',
        keyThreeContent:'取蜜视频页面',
        keyThreeURL:'www.abc.com',
        keyFour:true,
        keyFourName:'公司文化',
        keyFourContent:'公司文化页面',
        keyFourURL:'www.abc.com',
        keyFive:true,
        keyFiveName:'开心游戏',
        keyFiveContent:'开心游戏页面',
        keyFiveURL:'www.abc.com',
        vendorId:null,
        vendorName:null,
        orderId:null,
        activityId:null,
        userId:null,
        appList:'',
        showWarn:false,
        warnText:''
      }
    },
    props:['datas'],
    methods: {
      //初始化
      init:function(){
        var self=this;
        self.vendorId=self.datas.vendorId;
        self.userId=self.datas.userId;
        self.moduleName='模板名称'; 
        self.moduleRemark='备注信息'; 
        self.phoneTitle="公司名称"; 
        self.imgSrc= ''; 
        self.you=true;
        self.antifake=true;
        self.shop=true;
        self.shopUrl='http://mp.ym-a.top/app/index.php?i=4&c=entry&eid=39';
        self.keyOne=true;
        self.keyOneName='公司官网';
        self.keyOneContent='公司官网页面';
        self.keyOneURL='http://mp.weixin.qq.com/s?__biz=MzIwMjc5MTYwMA==&mid=2247483686&idx=1&sn=9e85cb59101730a8902527d0abd4de90&chksm=96d80ef9a1af87ef035a625131cc4b50ec3bb4075489fd9ecfac4d970336a331c74fc55d8b26&mpshare=1&scene=1&srcid=0815p2L1tbyEUoxMMetknoDH#rd';
        self.keyTwo=true;
        self.keyTwoName='产品介绍';
        self.keyTwoContent='产品介绍页面';
        self.keyTwoURL='http://mp.weixin.qq.com/s?__biz=MzIwMjc5MTYwMA==&mid=2247483686&idx=1&sn=9e85cb59101730a8902527d0abd4de90&chksm=96d80ef9a1af87ef035a625131cc4b50ec3bb4075489fd9ecfac4d970336a331c74fc55d8b26&mpshare=1&scene=1&srcid=0815p2L1tbyEUoxMMetknoDH#rd';
        self.keyThree=true;
        self.keyThreeName='取蜜视频';
        self.keyThreeContent='取蜜视频页面';
        self.keyThreeURL='www.abc.com';
        self.keyFour=true;
        self.keyFourName='公司文化';
        self.keyFourContent='公司文化页面';
        self.keyFourURL='www.abc.com';
        self.keyFive=true;
        self.keyFiveName='开心游戏';
        self.keyFiveContent='开心游戏页面';
        self.keyFiveURL='www.abc.com';
        self.vendorName=null;
        self.orderId=null;
        self.activityId=null;
        self.getApp();
      },

      //获取用户名称
      getvendorName:function(data){
        var self=this;
        self.vendorName=data;
      },

      //获取订单id
      getorderId:function(id){
        var self=this;
        self.orderId=id;
      },
      saveData: function (keys, val) {
        if(keys=='refresh'){
          this.init();
        }
        this[keys] = val;
      },
      //获取活动ID
      getActivityId:function(id){
        var self=this;
        self.activityId=id
      },
      showList:function(event){
        $(event.target).parents("li").find("ul").toggleClass("hidelist");
        $(event.target).parents("li").find('.arrow').toggleClass("upArrow");
      },
      getApp:function(){
        var self=this;
        $.ajax({
          url:'https://ym-a.top/cloud_code/GET/wqapp/getAllAppInfo.do',
          type:'get',
          data:{vendorId:self.vendorId},
          datatype:'json',
          success:function(res){
            self.appList=res.data;
          },
          error:function(res){
            //console.log(res);
          }
        })
      },
      toWeiQing:function(url){
        document.cookie=`_755url=${url.slice(url.indexOf('web/')+4)};domain=ym-a.top;path=/web`;
        let aa=window.open();
        setTimeout(function(){
        aa.location='http://mp.ym-a.top';
        }, 100);
      },
      WxGzhInfo:function(url){
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
              self.toWeiQing(url);
            }
          },
          error:function(res){
            //console.log(res);
          }
        });
      },
    },
    created:function(){
      this.init();
    }
  }
</script>