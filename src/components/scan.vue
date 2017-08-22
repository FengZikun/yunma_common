<template>
  <div class="right-main">
    <!-- <div class="plzWait">
      <p class="plzp">此功能正在开发中，敬请等待......</p>
    </div> -->
            <div class='right-main-top'>
            <p class='right-main-top1'>
              <span class='right-main-top-icon1'></span>
              <span style="color: #b3b3b3;">查看V3.4版防伪码扫码明细记录</span>
            </p>
          </div>
          <div class="right-main-bottom">
              <!-- <div class="button-group">
                <input type="search" name="" class="search" placeholder="输入经销商名称或编号">
                <input type="button" name="" class="search-button" value="搜索">
              </div> -->
              <div class="my-form">
                <ul class="pro-list" style="overflow-y:auto">
                  <li class="pro-li">
                    <span class="pro-li-span">头像</span>
                    <span class="pro-li-span">扫码者昵称</span>
                    <span class="pro-li-span">防伪码</span>
                    <span class="pro-li-span">扫码结果</span>
                    <span class="pro-li-span">商品名称</span>
                    <!-- <span class="pro-li-span">投诉反馈</span> -->
                    <span class="pro-li-span">扫码时间</span>
                    <!-- <span class="pro-li-span">所属经销商</span> -->
                    <span class="pro-li-span">扫码地区</span>
                  </li>
                  <li v-for="data in list">
                    <span class="pro-li-span"><span class='photo1' v-bind:style="{backgroundImage: 'url(' + data.picUrl + ')'}"></span></span>
                    <span class="pro-li-span">{{data.nickName}}</span>
                    <span class="pro-li-span span2">{{data.securityCode}}</span>
                    <span class="pro-li-span" v-if="data.count==1">正常</span>
                    <span class="pro-li-span" v-if="data.count>1">扫码次数过多</span>
                    <span class="pro-li-span">{{data.productName}}</span>
                    <!-- <span class="pro-li-span">投诉反馈</span> -->
                    <span class="pro-li-span">{{data.scanTime}}</span>
                    <!-- <span class="pro-li-span">所属经销商</span> -->
                    <span class="pro-li-span">{{data.address}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </template>
        <style scoped>
         /*@import "../assets/css/common.css";*/
                 .photo1{
        display: inline-block;
        width: 80px;
        height: 80px;
        vertical-align: middle;
        background-size: cover;
        background-repeat: no-repeat;
        }
         .right-main-top{
          width: 95%;
          margin: auto;
          padding-top: 60px;
          text-align: left;
        }
        .right-main-top-icon1{
          width: 18px;
          height: 18px;
          background: url("../assets/img/icon_tishi.png") no-repeat;
          float: left;
          margin-right: 8px;
        }
        .right-main-top2{
          margin-left: 25px;
          color: #b3b3b3;
        }
        .right-main-bottom{
          width: 95%;
          margin:auto;
          text-align: left;
        }
        .pro-li-span{
          width: 14.6%;
        }
        .pro-li-span:nth-of-type(2){
          width: 12%;
        }
        .pro-li-span:nth-of-type(7){
          width: 12%;
        }
        .button-group{
          margin-top: 48px;
        }
        .button-group input{
          float: none;
        }
        .span2{
          height: 70px;
          line-height: 95px;
          overflow: hidden;
          
        }
      </style>
      <!--<script src='../assets/js/china.js'></script>-->
      <script>
        import '../assets/js/echarts.js'
        import '../assets/js/china.js'
        export default{
          data(){
            return{
              childCon:'我是子页面',
              list:null,
              urll:'http://ym-b.top/static/img/logofinalversion6.0a53eab.png'
            }
          },
          props:['datas'],
          methods:{
            init:function(){
              var self=this;
              var data={vendorId:self.datas.vendorId};
              $.ajax({
                url: 'https://ym-a.top/cloud_code/GET/mapCount/countInfo.do',
                type:'get',
                data: data,
                dataType: 'json',
                success: function (res) {
                  self.list=res.data;
                },
                error:function(res){
                  //console.log("error")
                }
              })
            },
          },
          created:function(){
              this.init()
            }
        }
      </script>
