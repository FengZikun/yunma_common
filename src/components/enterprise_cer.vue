<template>
  <div>
          <div class="right-main">
            <div class="right-main-top">
              <p class="top">
                <span class="icon1"></span>
                1、开通云码大数据引擎系统必须为公司、工厂或个人工商户业主，为了配合使用系统功能如扫码查询、质量鉴证等，请先完成企业资质认证。
              </p>
              <p class="top">
                2、所有提交的资质认证书需为清晰彩色原件扫描件，复印件则需加盖公司红章，我们将在两个工作日内完成处理。
              </p>
            </div>
            <div class="right-main-bottom">
              <div class="my-form">
                <ul class="pro-list">
                  <li class="pro-li">
                    <span class="pro-li-span">资质名称</span>
                    <span class="pro-li-span">状态</span>
                    <span class="pro-li-span">说明</span>
                    <span class="pro-li-span">操作</span>
                  </li>
                  <li class="pro-li">
                    <span class="pro-li-span">企业营业执照</span>
                    <span class="pro-li-span"><span class="icon2"></span></span>
                    <span class="pro-li-span span2">认证后的企业资料将作为商户的通用名片，可在版权、防伪查询等地方进行应用。</span>
                    <span class="pro-li-span"><button class="renew" name="" @click='mengban'>更新</button></span>
                  </li>
                  <li class="pro-li">
                    <span class="pro-li-span">中国商标权证书</span>
                    <span class="pro-li-span"><span class="icon3"></span></span>
                    <span class="pro-li-span span2">认证品牌可以提升品牌的知名度和交易信任级别，认证后品牌名称可以在查询页显示。</span>
                    <span class="pro-li-span"><button class="renew" name="" >提交</button></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 模态框 -->
          <div class="mengban" v-show='showMB'>
          <div class="imgbox">
            <div class="localUp">
            <form name='myform' id="myform1" enctype="multipart/form-data">
              <span class="message-name star">产品图片：</span>
              <span style="display:inline-block;width:86px;height:86px;background-repeat:no-repeat;background-size: contain" v-if='imgUrl!=""'  v-bind:style="{backgroundImage: imgUrl}"></span>
              <input class="hidelist" type="file" id="productImg" name="qualificationImg " @change='change($event)' form="myform1">
              <label class="productImg" for="productImg"></label>
              <input type="text" name="vendorId" v-bind:value='vendorId' form="myform1" class="hidelist">
            </form>
            <div class="imgbottom">
              <input class="delbutton" type="button" name="" value="确定" @click='submitImg'>
            </div>
          </div>
          </div>
          </div>
  </div>
</template>
<style scoped>
/*@import "../assets/css/common.css";*/
label{
  margin-bottom: 0;
}
.localUp{
    height: 450px;
    padding: 50px 0;
  }
  .message-name{
    display: inline-block;
    width: 120px;
    margin-left: -290px;
    text-align: right;
    color: #666;
    vertical-align: top;
  }
    .delbutton{
    margin-top: 13px;
  }
    .imgbox{
    margin: auto;
    top: 50%;
    margin-top: -327.5px;
    height: 655px;
    border-radius: 2px;
    background: #fff;
    width: 685px;
    position: relative;
  }
.right-main{
  width: 95%;
  height: 1310px;
  background: #fff;
  border-radius: 8px;
  margin: auto;
  margin-top: 44px;
  border-top: 1px solid transparent;
}
.pro-li{
  height: 80px;
  line-height: 80px;
}
.pro-li:nth-of-type(1){
  height: 42px;
  line-height: 42px;
}
.right-main-top{
  width: 95%;
  margin: auto;
  margin-top: 58px;
}
.icon1{
  width: 18px;
  height: 18px;
  background: url("../assets/img/icon_tishi.png") no-repeat;
  float: left;
  margin-right: 8px;
}
.icon2{
  display: inline-block;
  width: 28px;
  height: 28px;
  background: url("../assets/img/icon_dagou.png") no-repeat;
  line-height: 40px;
  text-align: center;
}
.icon3{
  display: inline-block;
  width: 28px;
  height: 28px;
  background: url("../assets/img/icon_cuowu.png") no-repeat;
  line-height: 40px;
  text-align: center;
}
.pro-li-span{
  width: 24%;
  overflow-wrap: break-word;
  font-size: 16px;
  font-family: 'Microsoft YaHei'
}
.span2{
  text-align: left;
  line-height: 20px;
}
.right-main-bottom{
  width: 95%;
  margin:auto;
  text-align: left;
}
.top{
  text-align: left;
  font-family: 'Microsoft YaHei';
  margin-left: 26px;
}
.top:nth-of-type(2){
  margin-left: 50px;
}
.renew{
  display: inline-block;
  width: 80px;
  height: 30px;
  line-height: 30px;
  color: #00baff;
  border: 1px solid #00baff;
  appearance: none;
  background-color: #fff;
  outline: none;
  border-radius: 6px;
}
</style>
<script>
  import common from '../common.js'

  export default{
    data(){
      return{
        showMB:false,
        imgUrl:'',
      }
    },
    props:['vendorId'],
    methods:{
      // init:function(){
      //   this.$http.get("../assets/img/json.json").then(function(res){
      //     //console.log("请求成功")
      //   },
      //   function(res){
      //     //console.log("请求失败")
      //   })
      // },
      showList:function(event){
        $(event.target).parents("li").find("ul").toggleClass("hidelist");
        $(event.target).parents("li").siblings().find("ul").addClass("hidelist")
      },
      // 模态框显示与隐藏
      mengban:function(){
        this.showMB=!this.showMB;
      },
      // 提交
      submitImg:function(){
        var self=this;
        var data=new FormData($('#myform1')[0]);
        $.ajax({
          url: 'https://ym-a.top/cloud_code/ADD/vendor/qualificationImg.do',
          type:'post',
          data: data,
          cache: false,
          dataType: 'json',
          processData: false,
          contentType: false,
          success: function (res) {
            //console.log(data);
            //console.log(res); 
          },
          error:function(res){
            //console.log("error")
          }
        });
        this.showMB=!this.showMB;
      },
      //同步显示图片
      change:function(eImg){
        const reader = new FileReader();
        reader.onloadend = (e) =>
        {
          this.imgUrl = `url('${e.target.result}')`;
        }
        reader.readAsDataURL(eImg.target.files[0]);
      },
    },
    // created:function(){
    //   this.init();
    // }
  }
</script>
