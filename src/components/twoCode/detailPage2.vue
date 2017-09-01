<template>
  <div class="right-main">
    <div style="min-height: 500px;padding: 45px 0 0 70px;">
      <div class="muban">
        <div class="header">

        </div>
        <div class="muban-title">

        </div>
        <div class="muban-main" @click="detailBox">
          <!-- 轮播图 -->
          <pic-ad class="template" data-type="picAd1" v-if='picAd1'>

          </pic-ad>
          <!-- 防伪验证 -->
          <text-nav class="template" data-type="verify" v-if='verify'>

          </text-nav>
          <!-- 快速通道 --> 
          <fast-track class="template" data-type="fastTrack" v-if='fastTrack'>

          </fast-track>
          <!-- 继续扫码 -->
          <!-- <is-continue class='template' data-type='continue' v-if='acontinue'>

          </is-continue> -->
          <!-- 宣传视频 -->
          <promotion-vedio class='template' data-type='promotionVedio' v-if='promotionVedio'>

          </promotion-vedio>
        </div>
        <ul class="muban-list" @click='addmuban'>
          <li><a class="muban-button" data-type='picAd'>轮播图</a></li>
          <li><a class="muban-button" data-type='verify'>防伪验证</a></li>
          <li><a class="muban-button" data-type='proInfo'>自定义链接</a></li>
          <li><a class="muban-button" data-type='fastTrack'>快速通道</a></li>
          <!-- <li><a class="muban-button" data-type='continue'>继续扫码</a></li> -->
          <li><a class="muban-button" data-type='promotionVedio'>宣传视频</a></li>
          <li><a class="muban-button" data-type='coupon'>优惠券</a></li>
        </ul>
      </div>
      <div class="box hidelist">
        <detail-module>

        </detail-module>
      </div>
    </div>
    

    
    <p style="text-align:center;">
      <router-link to='/twoCode/chosePage' class="nextBtn">上一步</router-link>
      <button type="button" class="nextBtn" @click="save">保存</button>
    </p>
  </div>
</template>

<script>
  import displayAd from '../modules/display-advertising.vue'
  import textNav from '../modules/text-nav.vue'
  import detailModule from '../modules/detailModule.vue'
  import fastTrack from '../modules/fastTrack.vue'
  import isContinue from '../modules/isContinue.vue'
  import promotionVedio from '../modules/promotionVedio.vue'
  import {mapState} from 'vuex'
  import {mapActions} from 'vuex'
  import {mapMutations} from 'vuex'
  export default{
    data(){
      return{
        isPicAd:false,
      }
    },
    props:['datas'],
    components:{
      'pic-ad':displayAd,
      'text-nav':textNav,
      'detail-module':detailModule,
      'fast-track':fastTrack,
      'is-continue':isContinue,
      'promotion-vedio':promotionVedio
    },
    methods:{
      ...mapMutations([
        'addFastTrack',
        'addContinue',
        'addPromotionVedio',
        'addCoupon'
        ]),
      ...mapActions([
        'showPicAd1',
        'module',
        'addVerify',
        ]),
      init(event){
        var self=this;
        $('.template').mouseenter(function(e){
          $(e.delegateTarget).find('.border').removeClass('hidelist')
        })
        $('.template').mouseleave(function(e){
          // console.log($(e.delegateTarget).hasClass('editor'))
          if(!$(e.delegateTarget).hasClass('editor')){
            $(e.delegateTarget).find('.border').addClass('hidelist')

          }
        })
      },
      //添加模板
      addmuban:function(){
        var self=this;
        
        //判断
        var elementType=$(event.target).attr('data-type')
        if(elementType==='picAd'){
          self.addPicAd()
        }
        if(elementType==='verify'){
          self.addVerify()
        }
        if(elementType==='fastTrack'){
          self.addFastTrack()
        }
        if(elementType==='continue'){
          self.addContinue()
        }
        if(elementType==='promotionVedio'){
          self.addPromotionVedio()
        }
        if(elementType==='coupon'){
          self.addCoupon()
        }

        
      },

      //添加图片广告
      addPicAd:function(){
        var self=this;
        if(!self.picAd1){
          self.showPicAd1();
          return
        }
        
      },

      getPosition(){
        var topElement=$('.border').not('.hidelist').parent().prev();
        console.log(topElement)
        $('.box').css('top',topPosition);
        console.log($('.box'))
      },

      //配置
      detailBox:function(){
        var self=this;
        var bianji=$(event.target);
        var element=$(event.target).parents('.border');
        if(bianji[0].className==='modulerRedactButton'){
          //显示删除键
          bianji.next().removeClass('hidelist');
          //显示操作框
          $(element).removeClass('hidelist');
          //其余模块隐藏操作框
          $(element).parent().siblings().find('.border').addClass('hidelist').find('.moduleDelButton').addClass('hidelist');
          var thisElement=$(element).parent();
          //被选中的模块右边出现编辑框
          $(thisElement).addClass('editor').siblings().removeClass('editor');
          var topPosition=$(thisElement)[0].offsetTop;
          $('.box').removeClass('hidelist').addClass('detail').css('top',topPosition);
          //根据模块名称显示相应组件
          var type=$(thisElement).attr('data-type')
          self.module(type);
        }



      },

      //获取高度
      getTopPosition:function(){
        var self=this;
        if($('.editor').length==1){
          var topPosition1=$('.editor')[0].offsetTop+140;
          console.log($('.editor'));
          $('.box').css('top',topPosition1);
        }
      },

      //保存
      save(){
        var self=this;
        var str=`<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
          <title>${this.phoneTitle}</title>
          <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
          <style>
            * {
              margin: 0;
              padding: 0;
            }
            .template{
              position: relative;
            }
            .hidelist{
              display: none!important;
            }
            .border{
              width: 100%;
              position: absolute;
              top: 0;
              height: 100%;
              border: 2px dashed rgba(255,0,0,0.5);
            }
            .pic-ad{
              width: 100%;
              border-left: 1px solid #e5e5e5;
              border-right: 1px solid #e5e5e5;
              background-color: #fff;
            }
            .messageBox{
              min-height: 36px;
              line-height: 36px;
            }
            .muban-main{
              width: 100%;
              min-height: 150px;
              margin: auto;
              padding-bottom: 11px;
              background-color: #f7f7f7;
            }
            .channel{
              height: 56px;
              line-height: 56px;
              padding: 0 10px;
              border-bottom: 1px solid #d1d1d1;
              width: 90%;
              margin: 0 auto;
            }
            .noBottom{
              border-bottom: none;
            }
            .header{
              padding-left: 20px;
              padding-top: 10px;
            }
            .header:before{
              content: '';
              width: 4px;
              height: 17px;
              display: block;
              background-color: #dd2726;
              position: absolute;
              left: 10px;
            }
            .footer{
              height: 36px;
              padding-left: 20px;
            }
            .AmessageBoxP:before{
              content: '';
              width: 4px;
              height: 17px;
              display: block;
              background-color: #dd2726;
              position: absolute;
              top: 10px;
              left: 10px;
            }
            .AmessageBoxP{
              padding-left: 10px;
            }
            .CmessageBox{
              position: absolute;
              right: 10px;
              font-size: 15px;
              text-align: center;
              color: #585858;
              border: 1px solid #e8e8e8;
              border-radius: 4px;
              height: 31px;
              line-height: 31px;
              outline: none;
              background: #fafafa;
              font-family: "Microsoft YaHei";
              width: 85px;
            }


          </style>
        </head>
        <body class="muban-main">
          ${$('.muban-main').html()}
        </body>
        <script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js">`+"</scr" + "ipt>"+`
          <script
          src="https://code.jquery.com/jquery-3.2.1.js"
          integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
          crossorigin="anonymous">`+"</scr" + "ipt>"+`
          <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous">`+"</scr" + "ipt>"+`
            <script type="text/javascript">
              (function () {
                var _937 = {
                  // 初始化
                  init: function () {
                    this.openId = this.getParams('openId');
                    this.securityCode = this.getParams('securityCode');
                    this.orderId=this.getParams('orderId');
                    this.securityCodeId=this.getParams('securityCodeId');
                    this.shortCode=this.getParams('shortCode');
                    this.securityFlag=this.getParams('securityFlag');
                    this.codeType=this.getParams('codeType');
                    window.localStorage.setItem('openId', this.openId);
                    window.localStorage.setItem('securityCode', this.securityCode);
                    window.localStorage.setItem('orderId', this.orderId);
                    window.localStorage.setItem('securityCodeId', this.securityCodeId);
                    this.vendorId='';
                    this.latitude = '';
                    this.longitude = '';
                    this.urlOne='';
                    this.urlTwo='';
                    this.urlThree='';
                    this.getSign();
                    this.fastTrackEvent();
                    this.delBorder();
                  },
                  bindEvents: function () {
                    var self = this;
                    $('.tap-btn').on('click', function () {
                      self.jumpTo($(this).attr('id'))
                    });
                  },
                  jumpTo: function (id) {
                    var self = this;
                    if (id === 'btn1') {
                      setTimeout(function () {
                        window.location.href = 'func/you.html'
                      }, 500)
                      return
                    }
                    if (id === 'btn2') {
                      setTimeout(function () {
                        if(self.securityFlag=='true'){
                          window.location.href = 'func/antiFake.html'
                        }
                        else if(self.securityFlag=='false'){
                         window.location.href = 'func/customerSuyuan.html'
                       }
                     }, 500)
                     return
                   }
                   if (id === 'btn3') {
                    setTimeout(function () {
                      window.location.href = self.urlOne
                    }, 500)
                    return
                  }
                  if (id === 'btn4') {
                    setTimeout(function () {
                      window.location.href = self.urlTwo
                    }, 500)
                    return
                  }
                  if (id === 'btn5') {
                    if(self.urlThree.indexOf('http')!='-1'){
                      setTimeout(function () {
                        window.location.href = self.urlThree
                      }, 500)
                      return
                    }
                    else {
                      setTimeout(function () {
                        window.location.href = 'mode_fun/'+self.urlThree
                      }, 500)
                      return
                    }

                  }
                  if (id === 'btn6') {
                    setTimeout(function () {
                      window.location.href = 'func/red.html'
                    }, 500)
                    return
                  }

                },
                // 获取js-sdk地址签名
                getSign: function () {
                  var _this = this;
                  if (window.frames.length != parent.frames.length){ 
                    $('.content').siblings('div').hide();
                    _this.pushfunc({
                      spree:0,
                      securityAndTraceability:0,
                      weShop:'true',
                      vendorHttp:'true',
                      productInfo:'true',
                      getRedEnv:0
                    });
                    return  
                  }
                  if(sessionStorage.getItem('_755wx')==1){
                    _this.render(JSON.parse(localStorage.getItem('infodata')))
                    return
                  }
                  $.ajax({
                    url: "/cloud_code/POST/weChat/signature.do",
                    data: {url: window.location.href},
                    type: 'GET',
                    dataType: 'json',//here
                    success: function (res) {
                      _this.wxConfig(res)
                    }
                  });
                },
                // 设置js-sdk配置
                wxConfig: function (params) {
                  var _this = this;
                  wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: params.appId, // 必填，公众号的唯一标识
                    timestamp: params.timestamp, // 必填，生成签名的时间戳
                    nonceStr: params.noncestr, // 必填，生成签名的随机串
                    signature: params.signature,// 必填，签名，见附录1
                    jsApiList: ['getLocation'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                  });
                  wx.ready(function () {
                    wx.getLocation({
                      type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                      success: function (res) {
                        _this.latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                        _this.longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                        _this.wechatHome();
                      },
                      cancel: function () {
                        _this.latitude = ''; // 纬度，浮点数，范围为90 ~ -90
                        _this.longitude = ''; // 经度，浮点数，范围为180 ~ -180。
                        _this.wechatHome();
                      },
                      fail: function () {
                        _this.latitude = ''; // 纬度，浮点数，范围为90 ~ -90
                        _this.longitude = ''; // 经度，浮点数，范围为180 ~ -180。
                        _this.wechatHome();
                      }
                    });
                  });
                  // 防止出错时阻塞
                  wx.error(function (res) {
                    alert('无法获取位置信息');
                    _this.latitude = ''; // 纬度，浮点数，范围为90 ~ -90
                    _this.longitude = ''; // 经度，浮点数，范围为180 ~ -180。
                    _this.wechatHome();
                  });
                },
                // 获取基本信息
                wechatHome: function () {
                  var self = this;
                  if(this.securityFlag=='true'){
                    $.ajax({
                      url: '/cloud_code/POST/weChat/antiFakeCodeHome.do',
                      data: {
                        securityCode: self.securityCode,
                        openId: self.openId,
                        latitude: self.latitude,
                        longitude: self.longitude
                      },
                      type: 'POST',
                      dataType: 'json',
                      success: function (res) {
                        console.log(res);
                        sessionStorage.setItem('_755wx',1);
                        self.render(res);
                      },
                      error: function (err) {
                        //console.log(JSON.stringify(err));
                        self.render(res);
                      }
                    })
                  }
                  else if(this.securityFlag=='false'){
                    $.ajax({
                      url:'/cloud_code/POST/weChat/productCustomerTracingHome.do',
                      data:{
                        openId:this.openId,
                        tracingCode:self.shortCode,
                        codeType:self.codeType,
                        latitude: self.latitude,
                        longitude: self.longitude
                      },
                      type: 'POST',
                      dataType: 'json',
                      success: function (res) {
                        //console.log(res);
                        sessionStorage.setItem('_755wx',1);
                        self.render(res);
                      },
                      error: function (err) {
                        //console.log(err);
                        self.render(err);
                      }
                    })
                  }
                },
                // 渲染
                render:function(data){
                  var self=this;
                  //扫码验证信息
                  $('.messageBoxB').text(data.resultMsg);
                  //地址
                  $('.messageBoxH').text(data.location.address);
                  //企业名称
                  $('.messageBoxE').text(data.vendorName);
                  if(this.securityFlag=='true'){
                    if (data.scanFlag=='true') {
                      $('.innerCodeTure').removeClass('hideMod');
                    }
                    else {
                      $('.innerCodeFalse').removeClass('hideMod');
                    }
                  }
                  else if(this.securityFlag=='false'){
                    //console.log('应该替换溯源按钮和删除红包按钮')
                  }
                  $('.content').siblings('div').hide();
                  // 判断是真是假
                  //console.log(data);
                  self.vendorId=data.vendorId;
                  window.localStorage.setItem('vendorId', JSON.stringify(data.vendorId));
                  window.localStorage.setItem('infodata', JSON.stringify(data));
                  self.pushfunc(data.activInfo[0]);
                },
                // 设置按键功能
                pushfunc:function(data){
                  var self=this;
                  if(data.spree==0){
                    $('#btn1').removeClass('hideMod');
                  }
                  if(data.spree==1){
                    $('#btn1').remove();
                  }
                  if(data.securityAndTraceability==0){
                    $('#btn2').removeClass('hideMod');
                  }
                  if(data.securityAndTraceability==1){
                    $('#btn2').remove();
                  }
                  if(data.weShop=="false"){
                    $('#btn3').remove();
                  }
                  if(data.weShop!="false"){
                    $('#btn3').removeClass('hideMod');
                    self.urlOne=data.weShop
                  }               
                  if(data.vendorHttp=="false"){
                    $('#btn4').remove();
                  }
                  if(data.vendorHttp!="false"){
                    $('#btn4').removeClass('hideMod');
                    self.urlTwo=data.vendorHttp
                  }   
                  if(data.productInfo=="false"){
                    $('#btn5').remove();
                  }
                  if(data.productInfo!="false"){
                    $('#btn5').removeClass('hideMod');
                    self.urlThree=data.productInfo
                  }   
                  if(data.getRedEnv==0){
                    $('#btn6').removeClass('hideMod');
                  }
                  if(data.getRedEnv==1||self.securityFlag=='false'){
                    $('#btn6').remove();
                  }
                  self.bindEvents();
                },
                //快速通道
                fastTrackEvent: function(){
                  var self=this;
                  $('.website').on('click',function(){
                    window.location.href='http://mp.weixin.qq.com/s?__biz=MzIwMjc5MTYwMA==&mid=2247483686&idx=1&sn=9e85cb59101730a8902527d0abd4de90&chksm=96d80ef9a1af87ef035a625131cc4b50ec3bb4075489fd9ecfac4d970336a331c74fc55d8b26&mpshare=1&scene=1&srcid=0815p2L1tbyEUoxMMetknoDH#rd';
                  });
                  $('.weiStore').on('click',function(){
                    window.location.href='http://mp.ym-a.top/app/index.php?i=4&c=entry&eid=39';
                  })
                },
                //删除编辑框
                delBorder: function(){
                  var self=this;
                  $('.border').remove();
                },
                // 获取url参数
                getParams: function (name) {
                  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                  var r = window.location.search.substr(1).match(reg);
                  if (r != null)return unescape(r[2]);
                  return null;
                }
              }
              _937.init()
            })()
            `+"</scr" + "ipt>"+`
            </html>
            `;

            $.ajax({
              url: 'https://ym-a.top/cloud_code/POST/antiFake/html.do',
              data: {
                templateName:self.datas.moduleName,
                comment:"test",
                vendorId: self.datas.vendorId,
                html:str,
                getRedEnv: 1,
                productInfo: 'test',
                vendorHttp: 'test',
                weShop: 'test',
                spree: 1,
                securityAndTraceability: 1,

              },
              type: 'POST',
              dataType: 'json',
              success: function (res) {
                console.log(res);
                alert('创建成功')
                router.push({path:'/twoCode/briefCode'})
              },
              error: function (err) {
                alert(JSON.stringify(err));
              }
            })
          }
        },
        computed:mapState({
          picAd1:state=>state.banner1.data.picAd1,
          verify:state=>state.banner1.verifyData.verify,
          fastTrack:state=>state.banner1.fastTrackData.fastTrack,
          acontinue:state=>state.banner1.continueData.continue,
          promotionVedio:state=>state.banner1.promotionVedioData.promotionVedio,
        }),
        mounted(){
          this.init();
        },
        updated(){
          this.init();
        }
      }
    </script>

    <style scoped>
      .muban{
        width: 350px;
        border: 1px solid #e5e5e5;
        border-radius: 18px 18px 0 0;
        display: inline-block;
      }
      .header{
        width: 350px;
        height: 70px;
        background-image: url(../../assets/img/phoneHeader.png);
        background-repeat: no-repeat;
        background-position: 50% 50%;
      }
      .muban-title{
        width: 320px;
        height: 64px;
        background-image: url(../../assets/img/phoneTitle.png);
        margin: auto;
      }
      .muban-main{
        width: 320px;
        min-height: 150px;
        margin: auto;
        padding-bottom: 11px;
        background-color: #f7f7f7;
      }
      .muban-list{
        width: 350px;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        left: -1px;
        top: -1px;
        border: 1px solid #ddd;
        padding: 10px 14px 4px 14px;
        background: #f7f7f7;
        box-sizing: border-box;
        margin: 0 auto;
      }
      .muban-list:after{
        position: absolute;
        content: ' ';
        border: 8px solid transparent;
        border-bottom-width: 10px;
        border-bottom-color: #f7f7f7;
        top: -18px;
        left: 167px;
      }
      .muban-list:before{
        top: -19px;
        border-bottom-color: #ddd;
        position: absolute;
        content: ' ';
        border: 8px solid transparent;
        border-bottom-width: 10px;
        border-bottom-color: #f8f8f8;
        top: -18px;
        left: 167px;
      }
      .muban-list li{
        display: table;
        margin: 0 0 10px 5px;
        background: #fff;
      }
      .muban-button{
        display: table-cell;
        text-decoration: none;
        color: #000;
        width: 75px;
        height: 40px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border: 1px solid #d1d1d1;
        line-height: 14px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        background-color: transparent;
      }
      .template{
        position: relative;
      }
      .detail{
        width: 470px;
        min-height: 200px;
        background-color: #f6f8fc;
        display: inline-block;
        border-radius: 18px;
        margin-left: 30px;
        position: absolute;
      }
      .detail:before{
        content: '';
        width: 30px;
        height: 30px;
        display: inline-block;
        position: absolute;
        left: -30px;
        top: 40px;
        border-right:15px solid #f6f8fc;
        border-top:15px solid transparent;
        border-left:15px solid transparent;
        border-bottom:15px solid transparent;
      }
      .nextBtn {
        display: inline-block;
        text-decoration: none;
        background: #00baff;
        color: #fff;
        /*width: 86px;*/
        padding: 0 40px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border-radius: 5px;
        margin-left: 35px;
        margin-bottom: 55px;
        position: relative;
        top: 33px;
        border: 1px solid transparent;
      }
    </style>