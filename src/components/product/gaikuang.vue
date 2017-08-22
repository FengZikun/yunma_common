<template>
	<div class='rig'>
            <div class="page-ckp-showNum f-c">
              <router-link to='/goods/pro_message' style='float: left'>
                <div class="numIcon">
                  <span class="ui-chanpinku-num ui-chanpinku-num1"></span>
                </div>
                <p class="name">
                  已上传产品</p>
                <p class="number">
                  {{countPro}}</p>
              </router-link>
              <router-link to='/goods/pro_message'>
                <div class="numIcon">
                  <span class="ui-chanpinku-num ui-chanpinku-num2"></span>
                </div>
                <p class="name">
                  未分类产品</p>
                <p class="number">
                  {{count}}</p>
              </router-link>
              <router-link to='/goods/gift'>
                <div class="numIcon">
                  <span class="ui-chanpinku-num ui-chanpinku-num3"></span>
                </div>
                <p class="name">
                  已上传礼品</p>
                <p class="number">
                  {{countPresent}}</p>
              </router-link>
            </div>
            <div class="page-ckp-jinjie">
              <h3 class="f-c">
                <span class="f-l">产品库管理进阶</span>
              </h3>
              <ul style='margin-top:50px;'>
                <li>
                  <div class="left-icon">
                    <span class="flower"></span>
                  </div>
                  <div class="right-text">
                    <strong class="intro">
                    什么是产品库？</strong>
                  <p>
                    产品库是系统内通用的产品管理仓库，可用于各个业务版块的关联调用，也可上架到微商城进行线上销售，彻底删除后关联调用的产品也会失效。</p>
                  </div>
                  
                </li>
                <li>
                  <div class="left-icon">
                    <span class="flower"></span>
                  </div>
                  <div class="right-text">
                    <strong class="intro">产品命名规范？</strong>
                  <p>
                    产品命名由品牌名称+商品名称组成，品牌名称可选择性显示，商品名称不能超过50字，且不得带有任何与商品真实信息无关的文字或符号。</p>
                  </div>
                  
                </li>
                <li>
                  <div class="left-icon">
                    <span class="flower"></span>
                  </div>
                  <div class="right-text">
                     <strong class="intro">
                    如何合理应用产品分类？</strong>
                  <p>
                    产品分类是一种通过给产品分组来管理产品的方式。当商品种类繁多或者系统分类无法满足需求时，可以按照不同标准给商品进行自定义分类。</p>
                  </div>
                 
                </li>
                <li>
                  <div class="left-icon">
                    <span class="flower"></span>
                  </div>
                  <div class="right-text">
                     <strong class="intro">
                    礼品的作用？</strong>
                  <p>
                    商家可以统一上传和管理礼品，礼品主要用于微商城促销赠品，积分商城兑换礼品，或营销抽奖扫码活动等的奖品，不能直接上架到微商城销售。</p>
                  </div>
                 
                </li>
              </ul>
            </div>
          </div>
</template>
<style scoped>
/*@import "../../assets/css/common.css";*/
  .space3 {
    width: 100%;
    height: 100px;
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
  .goods_menu .two_sub2 li {
    line-height: 100%;
    margin-top: 10px;
  }
  .goods_menu .sub3 {
    width: 100%;
  }
  .goods_menu .sub3 li {
    line-height: 100%;
    margin-top: 10px;
  }
  .goods_menu .goods_li_2 .goods_sub2 {
    width: 100%;
    display: none;
  }
  /*.goods_menu .goods_li_2 .goods_sub2 li {
    margin-top: -14px;
  }*/
  .goods_menu .goods_li_3 .goods_sub3 {
    width: 100%;
    display: none;
  }
  /*.goods_menu .goods_li_3 .goods_sub3 li {
    margin-top: -14px;
  }*/
  /*.rig {
    width: 100%;
    height: 1000px;
    margin:0;
    border-radius: 10px;
    background-color: #f0f4fa;
    margin-top: 0;
    border: 1px solid white;
  }*/
  .page-ckp-showNum {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    border-radius: 8px 8px 0 0;
    background-color: #f0f4fa;
    margin-top: 40px;
    margin-bottom: 40px;

  }
  .f-c:before, .f-c:after {
    content: "";
    display: table;
  }
  .page-ckp-showNum a {
    width: 30%;
    display: block;
    background-color: #fff;
    height: 365px;
    text-align: center;
    border-radius: 8px;
  }
  .page-ckp-showNum a:hover{
    box-shadow: 0 0 50px rgba(175,186,203,0.23);
  }
  .page-ckp-showNum .numIcon {
    height: 44px;
    padding-top: 60px;
  }
  .ui-chanpinku-num {
    display: inline-block;
    vertical-align: middle;
    background: url(../../assets/img/chnpku.png) no-repeat;
    width: 92px;
    height: 99px;
  }
  .ui-chanpinku-num1 {
    background: url(../../assets/img/icon_1.png) no-repeat;
  }
  .ui-chanpinku-num2 {
    background: url(../../assets/img/icon_2.png) no-repeat;
  }
  .ui-chanpinku-num3 {
    background: url(../../assets/img/icon_3.png) no-repeat;
  }
  .page-ckp-showNum .name {
    color: #000;
    padding-top: 161px;
    font-size: 21px;
  }
  .page-ckp-showNum .number {
    color: #333;
    padding-top: 3px;
    font-size: 32px;
  }
  p:hover {
    text-decoration: none;
  }
  .page-ckp-jinjie {
    width: 95%;
    height: 1055px;
    margin:0 auto;
    background-color: #fff;
    border-radius: 8px
  }
  .page-ckp-jinjie h3 {
    margin:0;
    padding-top: 60px;
    padding-left: 60px;
  }
  .f-l {
    display: inline;
    float: left;
  }
  .page-ckp-jinjie h3 .f-l {
    line-height: 30px;
    color: #333;
    font-size: 16px;
    font-weight: 400;
  }
  .btBig, .btBig:visited, .btBig:hover {
    background: #44bb44;
    color: #fff;
    display: inline-block;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    padding: 0 24px;
    border: 0;
    border-radius: 3px;
    /*padding-left: 42px;*/
  }
  .btBig:before {
    /*border-left: 2px solid #fff;
    left: 29px;
    top: 9px;*/
    position: absolute;
    width: 12px;
    height: 12px;
    content: "";
  }
  .page-ckp-jinjie ul {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .page-ckp-jinjie ul li {
    width: 100%;
    height: 200px;
    float: left;
    transition: all .3s ease;
    margin-bottom: 10px;
    box-sizing: border-box;
    /*padding-right: 20px;*/
    margin-top: 20px;
  }
  .page-ckp-jinjie ul li .left-icon {
    display: inline-block;
    vertical-align: middle;
    width: 20%;
    height: 119px;
    float: left;
    vertical-align: middle;
    text-align: center;
  }
  .flower{
    display: block;
    width: 119px;
    height: 119px;
    margin: auto;
    background: url(../../assets/img/icon_hua.png) no-repeat;
  }
  .right-text{
    display: inline-block;
    width: 80%;
  }
  .intro{
    display: block;
    color: #000;
    text-align: left;
    font-family: 'Microsoft YaHei';
  }
  .page-ckp-jinjie ul li .circle {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background-color: #f4f5f9;
    display: block;
    margin: 26px auto 0;
    position: relative;
  }
  .page-ckp-jinjie ul li .circle .ui-chanpinku-jinjie {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
  .page-ckp-jinjie ul li p {
    font-size: 14px;
    color: #888;
    line-height: 143%;
    padding-top: 12px;
    text-align: left;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus {
    text-decoration: none;
  }
  p:hover {
    text-decoration: none;
  }
</style>
<script>
  import common from '../../common.js'

  export default{
    data(){
      return{
        childCon:'我是子页面',
        count:null,
        countPresent:null,
        countPro:null,
      }
    },
    props:['vendorId'],
    methods:{
      init:function(){
        var self=this;
        var url='https://ym-a.top/cloud_code/GET/product/getProCountByVendorId.do';
        var type='get';
        var data={
          vendorId:self.vendorId
        }
        var success=function(res){
          self.count=res.count;
          self.countPresent=res.countPresent;
          self.countPro=res.countPro;
        }
        common.Ajax(url,type,data,success)
      },
      showList:function(event){
        // //console.log();
        $(event.target).parents("li").find("ul").toggleClass("hidelist");
        $(event.target).parents("li").siblings().find("ul").addClass("hidelist")
      }
    },
    created:function(){
      this.init();
    }
  }
</script>