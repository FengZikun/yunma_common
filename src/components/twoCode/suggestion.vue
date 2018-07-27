<template>
  <div class="right-main">
    <!-- <div class="plzWait">
      <p class="plzp">此功能正在开发中，敬请等待......</p>
    </div> -->
            <div class='right-main-top'>
            <p class='right-main-top1'>
              <span class='right-main-top-icon1'></span>
              <span style="color: #b3b3b3;">查看V3.4版溯源码用户意见</span>
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
                    <span class="pro-li-span">意见编号</span>
                    <span class="pro-li-span">意见类型</span>
                    <span class="pro-li-span">意见编号</span>
                    <span class="pro-li-span">产品名</span>
                    <span class="pro-li-span">用户联系方式</span>
                  </li>
                  <li v-for="data in list">
                    <span class="pro-li-span">{{data.suggestioId}}</span>
                    <span class="pro-li-span span2" v-if="data.suggestType==='1'">产品质量</span>
                    <span class="pro-li-span span2" v-if="data.suggestType==='2'">服务态度</span>
                    <span class="pro-li-span span2" v-if="data.suggestType==='3'">产品包装</span>
                    <span class="pro-li-span span2" v-if="data.suggestType==='4'">其他</span>
                    <span class="pro-li-span">{{data.suggestInfo}}</span>
                    <span class="pro-li-span">{{data.productName}}</span>
                    <span class="pro-li-span">{{data.phoneNum}}</span>
                  </li>
                </ul>
              </div>
              <page v-on:finit='init'></page>
            </div>
          </div>
        </template>
        <style scoped>
         /*@import "../../assets/css/common.css";*/
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
          background: url("../../assets/img/icon_tishi.png") no-repeat;
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
          width: 20.6%;
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
      <!--<script src='../../assets/js/china.js'></script>-->
      <script>
        import '../../assets/js/echarts.js'
        import '../../assets/js/china.js'
        import common from '../../common.js'
        import {mapMutations} from 'vuex'
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
            ...mapMutations({
              getData:'page/getData'
            }),

            init:function(currentPage){
              var self=this;
              var data={
                vendorId:self.datas.vendorId,
                currentPage:currentPage
              };
              $.ajax({
                url: 'https://ym-a.top/cloud_code/GET/productTracing/getTracingSuggestionInfo.do',
                type:'get',
                data: data,
                dataType: 'json',
                success: function (res) {
                  self.list=res.result.data;
                  var totalPage=[];
                  totalPage = self.getPage(res.currentPage, res.totalPages);
                  self.getData({currentPage:res.currentPage, totalPages:res.totalPages, totalPage:totalPage})
                },
                error:function(res){
                  //console.log("error")
                }
              })
            },

            //获取页数
            getPage:common.getPage,
          },
          created:function(){
              this.init()
            }
        }
      </script>
