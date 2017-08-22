<template>
  <div class="two_top">
    <div class="progressBar"></div>
    <div class="phoneModule">
      <div class="phoneHeader"></div>
      <div class="phoneTitle">
        <div class="tipOut modHid">
          <div class="tipArrow "></div>
          请输入标题： <input v-model="phoneTitle">
        </div>
        <h4 class="textCenter" v-on:click="showModule($event)">{{phoneTitle}}</h4>
      </div>
      <div class="phoneBody" v-bind:style="{backgroundImage: imgSrc}">
        <div class="bgSet">
          <div class="bgSet" v-on:click="showModule($event)"></div>
          <div class="tipOut modHid">
            <div class="tipArrow"></div>
            <span>上传背景图</span><br>
            <hr style="width:480px;border-top:1px solid #d1d1d1">
            <input type="file" @change="change($event)">
          </div>
        </div>
        <div class="btnSet">
          <div class="btnSet" v-on:click="showModule($event)" style="z-index:1000"></div>
          <div class="tipOut modHid">
            <div class="tipArrow "></div>
            <h4>功能定义</h4>
            <p><i class="infoIcon"></i>选择功能后请点编辑<i class="editHui"></i>完善各功能内容</p>
            <hr style="width:480px;border-top:1px solid #d1d1d1;margin-top:15px;">
            <p>
              <span class="editErea">大礼包:</span>
              <input type="radio" name="you" v-on:click="you=true" checked="true">&nbsp;显示&nbsp;&nbsp;
              <input type="radio" name="you" v-on:click="you=false">&nbsp;不显示
            </p>
            <p>
              <span class="editErea">防伪溯源:</span>
              <input type="radio" name="antifake" @click="antifake=true" checked="true">&nbsp;显示&nbsp;&nbsp;
              <input type="radio" name="antifake" @click="antifake=false">&nbsp;不显示
            </p>
            <p>
              <span class="editErea">微商城:</span>
              <input type="radio" name="shop" v-on:click="shop=true" checked="true">&nbsp;显示&nbsp;&nbsp;
              <input type="radio" name="shop" v-on:click="shop=false">&nbsp;不显示
              <i class="editIcon" v-on:click='showKuang("shopUrl")'></i>
            </p>
            <p>
              <span class="editErea">公司官网:</span>
              <input type="radio" name="keyOne" @click="keyOne=true" checked="true">&nbsp;显示&nbsp;&nbsp;
              <input type="radio" name="keyOne" @click="keyOne=false">&nbsp;不显示
              <i class="editIcon" v-on:click='showKuang("keyOne")'></i>
            </p>
            <p>
              <span class="editErea">{{keyTwoName}}:</span>
              <input type="radio" name="keyTwo" @click="keyTwo=true" checked="true">&nbsp;显示&nbsp;&nbsp;
              <input type="radio" name="keyTwo" @click="keyTwo=false">&nbsp;不显示
              <i class="editIcon" v-on:click="showKuang('one')"></i>
              <a href="javascript:void(0)" @click="showKuang('appurl')">选择应用</a>
            </p>
<!--             <p>
              <span class="editErea">{{keyThreeName}}:</span>
              <input type="radio" name="keyThree" @click="keyThree=true" checked="true">&nbsp;显示&nbsp;&nbsp;
              <input type="radio" name="keyThree" @click="keyThree=false" >&nbsp;不显示
              <i class="editIcon" v-on:click="showKuang('two')"></i>
            </p> -->
            <p>
              <span class="editErea">领取红包:</span>
              <input type="radio" name="keyThree" @click="keyThree=true" checked="true">&nbsp;显示&nbsp;&nbsp;
              <input type="radio" name="keyThree" @click="keyThree=false" >&nbsp;不显示
              <!--               <i class="editIcon" v-on:click="showKuang('three')"></i> -->
            </p>
<!--             <p>
              <span class="editErea">{{keyFourName}}:</span>
              <input type="radio" name="keyFour" @click="keyFour=true" checked="true">&nbsp;显示&nbsp;&nbsp;
              <input type="radio" name="keyFour" @click="keyFour=false" >&nbsp;不显示
              <i class="editIcon" v-on:click="showKuang('four')"></i>
            </p> -->
          </div>
          <div class="bodyBtn " v-if="you">大礼包</div>
          <div class="bodyBtn " v-show="antifake">防伪溯源</div>
          <div class="bodyBtn" v-show='shop'>微商城</div>
          <div class="bodyBtn " v-if="keyOne">公司官网</div>
          <div class="bodyBtn " v-if="keyTwo">{{keyTwoName}}</div>
          <div class="bodyBtn " v-if="keyThree">领取红包</div>
          
<!--           <div class="bodyBtn w6" v-if="keyThree">{{keyThreeName}}</div>
  <div class="bodyBtn w7" v-if="keyFour">{{keyFourName}}</div> -->
</div>
</div>
</div>
<p style="text-align:center;">
  <router-link to='/twoCode/chosePage' class="nextBtn">上一步</router-link>
  <button type="button" class="nextBtn" @click="tobaba">保存</button>
</p>
<!-- 微商城URL -->
<div class="modelBg modHid" defName="shopUrl">
 <div class="modelContentkeyOne">
   请输入URL <input type="text" name="shopUrl" v-model="shopUrl"><span class="modelbackBtn" @click="hideKuang">返回</span>
 </div>
</div>
<!-- 公司官网URL -->
<div class="modelBg modHid" defName="keyOne">
 <div class="modelContentkeyOne">
   请输入URL <input type="text" name="keyOneURL" v-model="keyOneURL"><span class="modelbackBtn" @click="hideKuang">返回</span>
 </div>
</div>
<!-- 产品介绍 -->
<div class="mengban modHid" defName="modsone">
  <div class="modelContent">
    编辑窗口 <span class="modelbackBtn" @click="hideKuang">返回</span>
    <hr style="width:540px;border-top:1px solid #d1d1d1;margin-top:5px;">
    功能名称<input v-model="keyTwoName" class="modelInput">
    <p style="padding:1px 89px;margin-bottom:30px;">字数不能超过5个字</p>
    内容模块&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="radio" name="oneContent" class="editOn"  @click="editOnline" checked="true">&nbsp;在线编辑&nbsp;&nbsp;
    <input type="radio" name="oneContent" class="editOff" @click="editOffline" >&nbsp;输入URL
    <div style="width:100%;" class="H5edit">

      <vue-html5-editor :content="keyTwoContent" :height="500" :show-module-name="showModuleName"
      @change="updateDataone" ref="editor" :auto-height="false"></vue-html5-editor>
    </div>
    <input type="text" name="modelURL" class="modHid" v-model="keyTwoURL">
    <button type="button" @click="savemod" class="modelBtn">确定</button></div>
  </div>
  <!-- 按钮关联APP -->
  <div class="modelBg modHid" defName="appurl">
   <div class="modelContentkeyOne1">
     请选择应用
     <ul>
      <li  v-if='appList!=""' v-for='app in appList'>
        
        <p  style="margin-bottom:5px" >
          <input type="radio" name="appurl" @click='appurl' checked="false" v-bind:wqUrl="app.weChatUrl" v-bind:wqName="app.appName">
          <span class="photo1" ><img v-bind:src="app.appImg" style="width:100%"/></span>{{app.appName}}</p>
        </li>
      </ul>
      <span class="modelbackBtn" @click="hideKuang">确定</span>
    </div>
  </div>
  <!-- 再次编辑模态框 -->
<!--     <div class="modelBg">
      <div class="modelContent">
        <iframe src="https://ym-a.top/cloud_code/wx/1/red.html" width="349px" height="663px"></iframe>
        <div class="tipOut" style="left: 362px;top: 270px;width:330px">
            <div class="tipArrow"></div>
            领取大礼包： <input >

          </div>
      </div>
    </div> -->
    <!-- 产品介绍模板 -->
    <div class="test modHid">
      <h1 style="text-align: center;">仁正（烟台）商贸有限公司</h1>
      <p style="text-align: center;text-indent: 2em;">成立于2004年，公司坐落于美丽的海滨城市--山东烟台。</p>
      <img src="https://www.ym-a.top/img/640.jpg" style="width: 700px;">
      <p style="text-indent: 4em;">公司自成立以来，一直专注于化妆品、美容美发产品及设备等行业的进出口贸易，与韩国、日本、越南等东亚、东南亚国家的品牌商交流合作，在东亚等国家享有较高的声誉及影响秉承“高品质、高服务、高形象”的企业文化理念，融合韩国SCABIOLA的先进技术和科学的经营管理方法，经营国际一流的、具高知名度、高品质的  “Cloud9” “SCABIOLA” “Clinie” “RopleRopler” 化妆品以适应中国市场的需求。
        仁正（烟台）商贸有限公司是斯卡贝拉、可莱丝、爱茉莉等公司在中国的唯一品牌代理商。</p>
        <img src="https://www.ym-a.top/img/640(3).jpg" style="width: 700px;">
        <p style="text-indent: 4em;">公司团队多次访问周边国家，与各大品牌商洽谈合作只为把世界上最好的最真的美容美体产品带给您
          烟台政仁工贸有限公司--进出口株式会社，实力雄厚，重信用、守合同、保证产品质量，以多品种经营特色和薄利多销的原则，赢得了广大客户的信任。烟台政仁工贸有限公司本着“客户第一，诚信至上”的原则，与多家企业建立了长期的合作关系。</p>
          <img src="https://www.ym-a.top/img/640(4).jpg" style="width: 700px;">
        </div>
        <!-- 生成扫码页模板 -->
        <div class="modHid" id="baba">
          <!-- loading圈圈 -->
          <div class="loadingCir" style="display: block;z-index: 1000">
          </div>
          <!-- 正文 -->
          <div class="content" v-bind:style="{backgroundImage: imgSrc}">
            <!-- 内码真 -->
            <div class="info innerCodeTure hideMod">
              <p style="color: #eca100;font-family:'微软雅黑';height: 15vw;line-height: 7.5vw;font-size: 4vw;font-weight: bold;">
                <img style="width: 12vw;height: 12vw;vertical-align:middle;float: left;" src="img/icon/icon_suyuan1.png"/>&nbsp;&nbsp;
                该产品为正品<br>&nbsp;&nbsp;请放心使用！
              </p>
            </div>
            <!-- 内码假 -->
            <div class="info innerCodeFalse hideMod">
              <img src="img/icon/fang-zhengshi.png"/>
            </div>
            <!-- 按钮 -->
            <div id="btn1" class="tap-btn btn-tag btn1 hideMod" >
              领取大礼包
            </div>
            <div id="btn2" class="tap-btn btn-tag btn2 hideMod" >
              防伪溯源
            </div>
            <div id="btn3" class="tap-btn btn-tag btn3 hideMod" >
              微商城
            </div>
            <div id="btn4" class="tap-btn btn-tag btn4 hideMod" >
              公司官网
            </div>
            <div id="btn5" class="tap-btn btn-tag btn5 hideMod" >
              {{this.keyTwoName}}
            </div>
            <div id="btn6" class="tap-btn btn-tag btn6 hideMod" >
              领取红包
            </div>
          </div>
        </div>
      </div>
    </template>
    <script>
      import router from '../../router.js'
      import Vue from 'vue'
      import VueHtml5Editor from 'vue-html5-editor'
      $('.modelBg').width($(document.body).outerWidth(true)).height($(document.body).outerHeight(true));
      Vue.use(VueHtml5Editor, {
        showModuleName: true,
        image: {
          sizeLimit: 512 * 1024,
          compress: true,
          width: 500,
          height: 500,
          quality: 80
        },
        language: "zh-cn",
    // 自定义语言
    i18n: {
      //specify your language here
      "zh-cn": {
        "align": "对齐方式",
        "image": "图片",
        "list": "列表",
        "link": "链接",
        "unlink": "去除链接",
        "table": "表格",
        "font": "文字",
        "full screen": "全屏",
        "text": "排版",
        "eraser": "格式清除",
        "info": "关于",
        "color": "颜色",
        "please enter a url": "请输入地址",
        "create link": "创建链接",
        "bold": "加粗",
        "italic": "倾斜",
        "underline": "下划线",
        "strike through": "删除线",
        "subscript": "上标",
        "superscript": "下标",
        "heading": "标题",
        "font name": "字体",
        "font size": "文字大小",
        "left justify": "左对齐",
        "center justify": "居中",
        "right justify": "右对齐",
        "ordered list": "有序列表",
        "unordered list": "无序列表",
        "fore color": "前景色",
        "background color": "背景色",
        "row count": "行数",
        "column count": "列数",
        "save": "确定",
        "upload": "上传",
        "progress": "进度",
        "unknown": "未知",
        "please wait": "请稍等",
        "error": "错误",
        "abort": "中断",
        "reset": "重置"
      }
    },
  });
      export default{
        data(){
          return {
            vueReady:true,
            phoneTitle: this.datas.phoneTitle, 
            imgSrc: require("../../assets/img/phoneBody.jpg"), 
            you:this.datas.you,
            antifake:this.datas.antifake,
            shop:this.datas.shop,
            shopUrl:this.datas.shopUrl,
            keyOne:this.datas.keyOne,
            keyOneURL:this.datas.keyOneURL,
            keyTwo:this.datas.keyTwo,
            keyTwoName:this.datas.keyTwoName,
            keyTwoContent:this.datas.keyTwoContent,
            keyTwoURL:this.datas.keyTwoURL,
            keyThree:this.datas.keyThree,
            keyThreeName:this.datas.keyThreeName,
            keyThreeContent:this.datas.keyThreeContent,
            keyThreeURL:this.datas.keyThreeURL,
            keyThree:this.datas.keyThree,
            keyThreeName:this.datas.keyThreeName,
            keyThreeContent:this.datas.keyThreeContent,
            keyThreeURL:this.datas.keyThreeURL,
            keyFour:this.datas.keyFour,
            keyFourName:this.datas.keyFourName,
            keyFourContent:this.datas.keyFourContent,
            keyFourURL:this.datas.keyFourURL,
            keyFive:this.datas.keyFive,
            keyFiveName:this.datas.keyFiveName,
            keyFiveContent:this.datas.keyFiveContentt,
            keyFiveURL:this.datas.keyFiveURL,
            showModuleName: false,
            appList:''
          }
        },
        props: ['datas'],
        methods: {
          init:function(){
            this.getApp();
          },
          change(eImg){
            const reader = new FileReader();
            reader.onloadend = (e) =>
            {
              this.imgSrc = `url('${e.target.result}')`;
            }
            ;
            reader.readAsDataURL(eImg.target.files[0]);
          },
          showModule(mod){
            $('.tipOut').addClass('modHid');
            $(mod.target).parent().children('.tipOut').toggleClass('modHid');
          },
          showKuang(name){
            if(this.vueReady){
              this.keyTwoContent=$('.test').html();
              this.vueReady=false;
            }
            if(name==="keyOne"){
              $("[defName=keyOne]").removeClass('modHid');
              return;
            }
            if(name==="shopUrl"){
              $("[defName=shopUrl]").removeClass('modHid');
              return;
            }
            if(name==="appurl"){
              $("[defName=appurl]").removeClass('modHid');
              return;
            }
            name = 'mods' + name;
            $("[defName=" + name + "]").removeClass('modHid');
          },
          hideKuang(event){
            $(event.target).parent().parent().addClass('modHid');
          },
          updateDataone: function (data) {
            this.keyTwoContent= data;
            this.$emit('sub', "keyTwoContent", data);
          },
          updateDatatwo: function (data) {
            this.keyThreeContent= data;
            this.$emit('sub', "keyThreeContent", data);
          },
          updateDatathree: function (data) {
            this.keyThreeContent= data;
            this.$emit('sub', "keyThreeContent", data);
          },
          updateDatafour: function (data) {
            this.keyFourContent= data;
            this.$emit('sub', "keyFourContent", data);
          },
          updateDatafive: function (data) {
            this.keyFiveContent= data;
            this.$emit('sub', "keyFiveContent", data);
          },
          fullScreen: function () {
            this.$refs.editor.enableFullScreen()
          },
          focus: function () {
            this.$refs.editor.focus()
          },
          editOnline(event){
            //console.log($(event.target).siblings('.H5edit'));
            if($(event.target).prop('checked')===true){
              $(event.target).siblings('.H5edit').removeClass('modHid');
              $(event.target).siblings('[name=modelURL]').addClass('modHid');
            }
          },
          editOffline(){
            if($(event.target).prop('checked')===true){
              $(event.target).siblings('.H5edit').addClass('modHid');
              $(event.target).siblings('[name=modelURL]').removeClass('modHid');
            }
          },
          savemod(){
            $(event.target).parent().parent().addClass('modHid');
            var self=this;
            var str=`<!DOCTYPE html>
            <html>
            <head>
              <meta charset="UTF-8">
              <title>${self.keyTwoName}</title>
              <style>
                *{
                  padding: 0;
                  margin: 0;
                }
              </style>
            </head>
            
            <body>
              ${self.keyTwoContent}
            </body>
            </html>`;
            $.ajax({
              url: 'https://ym-a.top/cloud_code/SAVE/codeManager/saveFileFunType.do',
              data: {
                html:str
              },
              type: 'POST',
              dataType: 'json',
              success: function (res) {
                if(res.statuscode==1){
                  self.keyTwoURL=res.fileUrl
                }
              },
              error: function (err) {
                alert(JSON.stringify(err));
              }
            })

          },
          tobaba(){
            var self=this;
            var str=`<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport"
              content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
              <title>${this.phoneTitle}</title>
              <style>
                * {
                  margin: 0;
                  padding: 0;
                }
                /* 载入画面 */
                .loadIn {
                  width: 100vw;
                  height: 100vh;
                  position: relative;
                }

                .loadIn img {
                  width: 100%;
                  height: 100vh;
                }

                /* 载入旋转圆圈 */
                .loadingCir {
                  position: absolute;
                  top: 50%;
                  margin-top: -5vw;
                  left: 50%;
                  margin-left: -5vw;
                  width: 10vw;
                  height: 10vw;
                  border-radius: 50%;
                  border: 10px solid rgba(241, 241, 241, 0.8);
                  border-bottom-color: transparent;
                  animation: circle 1s linear infinite;
                  -webkit-animation: circle 1s linear infinite;
                  -ms-animation: circle 1s linear infinite;
                  -o-animation: circle 1s linear infinite;
                }

                /* 圆圈动画 */
                @keyframes circle {
                  0% {
                    -webkit-transform: rotate(0deg);
                    -ms-transform: rotate(0deg);
                    -o-transform: rotate(0deg);
                    transform: rotate(0deg);
                  }
                  50% {
                    -webkit-transform: rotate(180deg);
                    -ms-transform: rotate(180deg);
                    -o-transform: rotate(180deg);
                    transform: rotate(180deg);
                  }
                  100% {
                    -webkit-transform: rotate(360deg);
                    -ms-transform: rotate(360deg);
                    -o-transform: rotate(360deg);
                    transform: rotate(360deg);
                  }
                }
                /* 外层模块 */
                .baba{
                  position: relative;
                  width: 100vw;
                  height: 100vh;
                  overflow: hidden;
                }
                /* 隐藏模块 */
                .hideMod{
                  display: none;
                }

                /* 正文 */
                .content {
                  width: 100vw;
                  height: 100vh;
                  position: relative;
                  background-repeat: no-repeat;
                  background-size: 100vw 100vh;
                  background-position: center;
                  overflow: hidden;
                  background-image: url(img/phoneBody.jpg);
                }

                /*内码真图片*/
                .innerCodeTure{
                  position: absolute;
                  left: 26vw;
                  top: 27vh;
                }

                /*内码假图片*/
                .innerCodeFalse img {
                  width: 76vw;
                  position: absolute;
                  left: 15vw;
                  top: 28vh;
                }

                /*按钮*/
                .btn-tag {
                  border: hidden;
                  position: absolute;
                  width: 30vw;
                  height: 9vw;
                  text-align: center;
                  line-height: 9vw;
                  color:#575757;
                  background-image:url(img/button2.png);
                  background-size: contain;
                  background-repeat: no-repeat;
                  
                  /* display: none; */
                }

                .btn1 {
                  left: 68%;
                  top: 46%;
                }

                .btn2 {
                  left: 68%;
                  top: 55%;
                }

                .btn3 {
                  left: 68%;
                  top: 64%;
                }

                .btn4{
                  left: 68%;
                  top: 73%;
                }

                .btn5 {
                  left: 68%;
                  top: 82%;
                }

                .btn6 {
                  left: 68%;
                  top: 91%;
                }
              </style>
            </head>
            <body>
              ${$('#baba').html()}
            </body>
            <script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js">`+"</scr" + "ipt>"+`
              <script src="js/zepto_1.1.3.min.js" type="text/javascript" charset="utf-8">`+"</scr" + "ipt>"+`
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
                  var spree=0;
                  var securityAndTraceability=0;
                  var weShop=false;
                  var vendorHttp=false;
                  var productInfo=false;
                  var getRedEnv=0;
                  if(this.you==false){
                    spree=1
                  }
                  if(this.antifake==false){
                    securityAndTraceability=1
                  }
                  if(this.shop==true&&this.shopUrl!=''){
                    weShop=this.shopUrl
                  }
                  if(this.keyOne==true&&this.keyOneURL!=''){
                    vendorHttp=this.keyOneURL
                  }
                  if(this.keyTwoURL!=''){
                    productInfo=this.keyTwoURL
                  }
                  if(this.keyThree==false){
                    getRedEnv=1
                  }
                  $.ajax({
                    url: 'https://ym-a.top/cloud_code/POST/antiFake/html.do',
                    data: {
                      templateName:self.datas.moduleName,
                      comment:self.datas.moduleRemark,
                      vendorId: self.datas.vendorId,
                      html:str,
                      getRedEnv: getRedEnv,
                      productInfo: productInfo,
                      vendorHttp: vendorHttp,
                      weShop: weShop,
                      spree: spree,
                      securityAndTraceability:securityAndTraceability,
                      
                    },
                    type: 'POST',
                    dataType: 'json',
                    success: function (res) {
                      //console.log(res);
                      alert('创建成功')
                      router.push({path:'/twoCode/briefCode'})
                    },
                    error: function (err) {
                      alert(JSON.stringify(err));
                    }
                  })
                },   
      // 获取app信息
      getApp:function(){
        var self=this;
        $.ajax({
          url:'https://ym-a.top/cloud_code//GET/wqapp/getAllAppInfo.do',
          type:'get',
          data:{vendorId:self.datas.vendorId},
          datatype:'json',
          success:function(res){
            self.appList=res.data;
          },
          error:function(res){
            //console.log(res);
          }
        })
      },
      // 给按钮赋值
      appurl:function(event){
        var self=this;
        self.keyTwoName=$(event.target).attr('wqName');
        self.keyTwoURL=$(event.target).attr('wqUrl');
      },
    },
    created:function(){
     this.init();
   },
   watch: {
    datas(){
        // //console.log(this.datas)
      },
      phoneTitle(){
        this.$emit('sub',"phoneTitle",this.phoneTitle);
      },
      imgSrc(){
        // //console.log(this.imgSrc);
        this.$emit('sub',"imgSrc",this.imgSrc);
      },
      you(){
        this.$emit('sub','you',this.you);
      },
      antifake(){
        this.$emit('sub','antifake',this.antifake);
      },
      keyOne(){
        this.$emit('sub','keyOne',this.keyOne);
      },
      keyOneURL(){
        this.$emit('sub','keyOneURL',this.keyOneURL);
        //console.log(keyOneURL)
      },
      keyTwo(){
        this.$emit('sub', "keyTwo", this.keyTwo);
      },
      keyTwoName(){
        this.$emit('sub',"keyTwoName",this.keyTwoName);
      },
      keyTwoURL(){
        this.$emit('sub',"keyTwoURL",this.keyTwoURL);
      },
      keyThree(){
        this.$emit('sub', "keyThree", this.keyThree);
      },
      keyThreeName(){
        this.$emit('sub',"keyThreeName",this.keyThreeName);
      },
      keyThreeURL(){
        this.$emit('sub',"keyThreeURL",this.keyThreeURL);
      },
      keyThree(){
        this.$emit('sub', "keyThree", this.keyThree);
      },
      keyThreeName(){
        this.$emit('sub',"keyThreeName",this.keyThreeName);
      },
      keyThreeURL(){
        this.$emit('sub',"keyThreeURL",this.keyThreeURL);
      },
      keyFour(){
        this.$emit('sub', "keyFour", this.keyFour);
      },
      keyFourName(){
        this.$emit('sub',"keyFourName",this.keyFourName);
      },
      keyFourURL(){
        this.$emit('sub',"keyFourURL",this.keyFourURL);
      },
    }
  }
</script>
<style scoped>
  *{
    box-sizing: border-box
  }
  .modelBg{
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 2000;
   background: rgba(0, 0, 0, 0.6);
 }
 .modelContent{
   position: absolute;
   left: 33%;
   top: 13%;
   width: 800px;
   min-height: 700px;
   background: #fff;
   z-index: 2001;
   padding: 15px 30px;
   font-size: 16px;
 }
 .modelContentkeyOne{
   position: absolute;
   left: 50%;
   top: 43%;
   width: 300px;
   min-height: 70px;
   background: #fff;
   z-index: 2001;
   padding: 15px 30px;
   font-size: 16px;
 }
 .modelBtn {
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
  border: 1px solid transparent;
}
.modelbackBtn{
  float: right;
  color: #56A1E9;
}
.modelInput{
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  border: 1px solid #E9E9ED;
  border-radius: 3px;
  height: 35px;
  line-height: 35px;
  width: 330px;
  font-size: 16px;
  margin-left: 25px;
}
.progressBar {
  background-image: url("../../assets/img/progressBar3.png");
}

input, label {
  color: #0f0f12;
  font-weight: 400;
}

p {
  margin: 0;
  /* line-height: 26px; */
}

.modHid {
  display: none;
}

.phoneModule {
  height: 663px;
  width: 349px;
  padding: 0 14px;
  margin-left: 35px;
  border: 1px solid #ededed;
  border-radius: 15px;
}

.phoneHeader {
  height: 75px;
  width: 321px;
  background: url(../../assets/img/phoneHeader.png) no-repeat center center;
}

.phoneTitle {
  height: 55px;
  width: 321px;
  border: 1px solid transparent;
  padding-top: 1px;
  background-image: url(../../assets/img/phoneTitle.png);
  background-size: cover;
  position: relative;
}

.phoneBody {
  height: 514px;
  width: 321px;
  background-size: cover;
  background-image: url(../../assets/img/phoneBody.jpg);
  position: relative;
}

  /*  .phoneBody:after{
          content: "";
          display: table;
        } */
        .textCenter {
          text-align: center;
          line-height: 38px;
          margin: 0;
          margin-top: 15px;
          color: #fff;
        }

        .bodyBtn {
          position: relative;
          top: -264px;
          left: 202px;
          width: 109px;
          height: 39px;
          margin-bottom: 4px;
          text-align: center;
          line-height: 34px;
          z-index: 70;
          font-size: x-small;
          color: #575757;
          background-image: url(../../assets/img/button2.png);
          background-repeat: no-repeat;
          background-size: contain;
          /* -webkit-animation: w1 2s ease-in-out infinite alternate; */
        }

        .tipOut {
          width: 560px;
          min-height: 65px;
          border-radius: 5px;
          margin-left: 30px;
          background-color: #f6f8fc;
          position: absolute;
          left: 340px;
          top: 10px;
          padding: 15px 25px;
          text-align: left

        }

        /*内层*/
        .tipArrow {
          width: 0px;
          height: 0px;
          border-top: 10px solid transparent;
          border-right: 10px solid;
          border-bottom: 10px solid transparent;
          position: absolute;
          margin-left: -35px;
          border-right-color: #f6f8fc;
        }

        .bgSet {
          border: 1px solid transparent;
          height: 140px;
        }

        .btnSet {
          border: 1px solid transparent;

          height: 374px;
          position: relative;
        }
        .btnSet:hover,.bgSet:hover,.phoneTitle:hover{
          border: 1px dotted red;
        }
        .w1 {
          top: 38px;
          left: 186px;
        }

        .w2 {
          top: 78px;
          left: 248px;
        }

        .w3 {
          top: 118px;
          left: 186px;
        }

        .w4 {
          top: 158px;
          left: 248px;
        }

        .w5 {
          top: 198px;
          left: 186px;
        }

        .w6 {
          top: 238px;
          left: 248px;
        }

        .w7 {
          top: 278px;
          left: 186px;
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

        .nextBtn:hover {
          background: #fff;
          color: #00baff;
          border: 1px solid #00baff;
        }

        .infoIcon {
          display: inline-block;
          height: 21px;
          width: 21px;
          background-image: url('../../assets/img/info.png');
          background-repeat: no-repeat;
          position: relative;
          top: 5px;
        }

        .editHui {
          display: inline-block;
          height: 21px;
          width: 21px;
          background-image: url('../../assets/img/editHui.png');
          background-repeat: no-repeat;
          position: relative;
          top: 7px;
          margin-left: 8px;
          margin-right: 1px;
        }

        .editIcon {
          display: inline-block;
          height: 21px;
          width: 21px;
          background-image: url('../../assets/img/edit.png');
          background-repeat: no-repeat;
          position: relative;
          top: 7px;
          margin-left: 8px;
        }

        .editIcon:hover {
          background-image: url('../../assets/img/editHui.png')
        }

        .editErea {
          display: inline-block;
          width: 130px;
          text-align: right;
          margin-right: 5px;
        }
        .photo1{
          display: inline-block;
          width: 35px;
          height: 35px;
        }
        .modelContentkeyOne1{
         position: absolute;
         left: 50%;
         top: 30%;
         width: 300px;
         min-height: 70px;
         background: #fff;
         z-index: 2001;
         padding: 15px 30px;
         font-size: 16px;
       }
     </style>
