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
    <div class="mengban" v-if='showMB'>
      <div class="proclassify" >
        <div class="classifyHeader">
          <span style="display:block;height:48px;line-height:48px;">操作提示</span>
        </div>
        <div class="tishi">
          若此订单同步生成防伪码，执行此操作会将防伪码一起删除，慎重！
        </div>
        <div style="text-align: right;margin-top: 40px;margin-right: 20px;">
          <input class="delbutton" type="button" name="" value="确认" @click='deletOrder'>
          <input class="delbutton" type="button" name="" value="取消" @click='hide'>
        </div>
        
      </div>
    </div>
    <div class="mengban" v-if='showSource'>
      <div class="proclassify" >
        <div class="classifyHeader">
          <span style="display:block;height:48px;line-height:48px;">操作提示</span>
        </div>
          <div class="tishi">
            <span class="message-name">一级包装数：</span>
            <input class="message-value" type="text" name="" v-model="rowCount"><br>
            <span class="message-name">二级包装数：</span>
            <input class="message-value" type="text" name="" v-model="boxCount">
            <p class="message-after">（小于等于此订单内的产品数）</p>
          </div>
        <div style="text-align: right;margin-top: 40px;margin-right: 20px;">
          <input class="delbutton" type="button" name="" value="确认" @click='source'>
          <input class="delbutton" type="button" name="" value="取消" @click='hide'>
        </div>
        
      </div>
    </div>
    <div class="right-main">
      <div class="right-main-bottom">
        <div class="button-group">
          <a href="javascript:void(0)" @click='addOrder'>
          <div class="add-pro">
            +&nbsp;新增订单
          </div>
          </a>
        </div>
        <div class="my-form">
          <ul class="pro-list">
            <li class="pro-li">
              <span class="pro-li-span">订单ID</span>
              <span class="pro-li-span">厂商ID</span>
              <span class="pro-li-span">厂商名称</span>
              <span class="pro-li-span">产品ID</span>
              <span class="pro-li-span">产品名称</span>
              <span class="pro-li-span">产品数量</span>
              <span class="pro-li-span">创建日期</span>
              <span class="pro-li-span">状态</span>
              <span class="pro-li-span">操作</span>

            </li>
            <li class="pro-li" v-for='item in proInfo'>
              <span class="pro-li-span">{{item.orderId}}</span>
              <span class="pro-li-span">{{item.vendorId}}</span>
              <span class="pro-li-span">{{item.vendorName}}</span>
              <span class="pro-li-span">{{item.productId}}</span>
              <span class="pro-li-span">{{item.productName}}</span>
              <span class="pro-li-span">{{item.productCount}}</span>
              <span class="pro-li-span">{{item.createDate}}</span>
              <span class="pro-li-span" v-if='item.tracingFlag==2'>已生成</span>
              <span class="pro-li-span" v-else>未生成</span>
              <span class="pro-li-span last"><a href="javascript:void(0)" v-bind:data-id='item.orderId' @click='toDetail'>详情</a>、<a href="javascript:void(0)" v-bind:data-id='item.orderId' @click='mengban'>删除订单、</a><a href="javascript:void(0)" v-bind:data-id='item.orderId' v-bind:data-num='item.productCount' @click='sourceBox'>生成溯源码</a>、<router-link to='/twoCode/briefCodeSu'>扫码页模板</router-link>、<router-link to='/twoCode/activitySu'>扫码活动管理</router-link>、<a href="javascript:void(0)" v-bind:data-id='item.orderId' @click='downLoad1'>导出溯源码</a>、<a href="javascript:void(0)" v-bind:data-id='item.orderId' @click='defined'>防窜货模式</a></span>

            </li>
          </ul>
        </div>
      </div>
      <div class="page-button">
        <div class="page-num">
          <ul class="page-num-ul">
            <a href="javascript:void(0)"><li class="page-num-li-arrow page-num-li" v-if='currentPage>1' @click='prevPage'><span class="arrow-left"></span></li></a>
            <a href="javascript:void(0)"><li class="page-num-li" v-if='currentPage>4&&totalPage.length!=1&&totalPage[0]!=1' v-bind:data-page='1' @click.self='changePage'>1</li></a>
            <a href="javascript:void(0)"><li class="page-num-li" v-if='currentPage>4&&totalPage.length!=1&&totalPage[0]!=1'>...</li></a>
            <a href="javascript:void(0)"><li class="page-num-li" v-for='item in totalPage' v-bind:class='{dangqianye:item==currentPage}' v-bind:data-page='item' @click.self='changePage'>{{item}}</li></a>
            <a href="javascript:void(0)"><li class="page-num-li" v-if='totalPages>5&&currentPage<totalPages-2'>...</li></a>
            <a href="javascript:void(0)"><li class="page-num-li" v-if='totalPages>5&&currentPage<totalPages-2' v-bind:data-page='resData.totalPages' @click.self='changePage'>{{resData.totalPages}}</li></a>

            <a href="javascript:void(0)"><li class="page-num-li page-num-li-arrow" v-if='currentPage<totalPages' @click='nextPage'><span class="arrow-right"></span></li></a>

          </ul>
        </div>
      </div>
    </div>
    <div class="modelBg modHid" id='info'>
      <div class="modelContent">
        正在加载请等待
      </div>
    </div>
  </div>
</template>
<style scoped>
  /*@import "../assets/css/common.css";*/
  .right-main{
    width: 95%;
    height: 1310px;
    background: #fff;
    border-radius: 8px;
    margin: auto;
    margin-top: 44px;
  }
  .right-main-top{
    width: 90%;
    margin: auto;
    padding-top: 60px;
    text-align: left;
  }
  .right-main-top2,
  .right-main-top3{
    margin-left: 25px;
    color: #b3b3b3;
  }
  .right-main-top-icon1{
    width: 18px;
    height: 18px;
    background: url("../../assets/img/icon_tishi.png") no-repeat;
    float: left;
    margin-right: 8px;
  }
  .right-main-bottom{
    width: 95%;
    margin:auto;
    text-align: left;
  }
  .button-group{
    margin-top: 40px;
  }
  .pro-li:nth-of-type(1){
    height: 60px;
    line-height: 60px;
  }
  .pro-li:first-of-type .pro-li-span{
    height: 60px;
    line-height: 60px;
  }
  .pro-li-span{
    width: 9%;
  }
  .last{
    width: 18%;
    overflow-wrap: break-word;
    height: 72px;
    line-height: 24px;
    white-space: pre-wrap;
  }
  .warnbottom{
    text-align: right;
    position: relative;
    top: 140px;
    right: 50px;
  }
  .warnmain{
    position: relative;
    top: 70px;
    text-align: center;
  }
  .classifyHeader{
    width: 100%;
    height: 48px;
    background: #f6f8fc;
    padding: 0 20px;
    box-sizing: border-box;
    position: relative;
  }
  .tishi{
    text-align: center;
    line-height: 58px;
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
  width: 420px;
  height: 250px;
  background: #fff;
  position: relative;
  top: 50%;
  margin: auto;
  margin-top: -125px;
  text-align: center;
  line-height: 250px;
}
.modHid {
  display: none;
}
.message-value{
  line-height: 18px;
  padding-left: 10px;
}
.message-after{
  line-height: 18px;
  font-size: 16px;
  color: #666;
}
</style>
<script>
  import common from '../../common.js'
  import router from '../../router.js'
  import {mapMutations} from 'vuex'
  export default{
    data(){
      return{
        childCon:'我是子页面',
        chechednum:0,    //全选单选控制
        proInfo:[],      //信息数组
        totalPage:[],    //页码数组
        resData:[],      //请求回的所有数据
        showMB:false,    //蒙版开关
        deleteArr:[],    //删除数组
        currentPage:'',  //当前页
        totalPages:'',    //总页数
        keyword:'',
        delOrder:null,
        showWarn:false,
        warnText:null,
        showSource:false,
        orderId:null,
        proNum:null,
        proCount:null,
        rowCount:null,
        boxCount:null
      }
    },
    props:['datas'],
    methods:{
      ...mapMutations([
        'changeType'
      ]),
      init:function(currentPage){
        var self=this;
        var url='https://ym-a.top/cloud_code/GET/product/productInfoList.do';
        var type='get';
        var data={
          vendorId:self.datas.vendorId,
          currentPage:currentPage,
          connecTracingAndSecurty:3
        };
        var success=function(res){
          //console.log(res)
          var pagenum=res.totalPages;
          self.totalPage=[];
          self.resData=res;
          self.proInfo=res.result.data;
          self.totalPages=res.totalPages;
          self.currentPage=res.currentPage;
          self.getPage();
          var vendorName=res.result.data[0].vendorName;
          self.$emit('upvendorName',vendorName);
        }
        //调用ajax
        common.Ajax(url,type,data,success)
      },
      showList:function(event){
        // //console.log();
        $(event.target).parents("li").find("ul").toggleClass("hidelist");
        $(event.target).parents("li").siblings().find("ul").addClass("hidelist")
      },
      //进入详情页
      toDetail:function(){
        var self=this;
        var id=$(event.target).attr('data-id');
        var state=$(event.target).parents('.pro-li-span').prev().text();
        if(state==='已生成'){
          self.$emit('upOrderId',id);
          self.changeType('a');
          router.push({path:'detail'})
        }else{
          self.showWarn=true;
          self.warnText='请先生成二维码'
        }
      },
      //新增
      addOrder(){
        this.changeType('a');
        router.push({path:'/twoCode/addOrder'})
      },
      //隐藏蒙版
      hide:function(){
        this.showMB=false;
        this.showSource=false;
      },
      //显示蒙版
      mengban:function(){
        var self=this;
        self.showMB=true;
        self.delOrder=$(event.target).attr('data-id');
      },
      //确定删除订单
      deletOrder:function(){
        var self=this;
        var url='https://ym-a.top/cloud_code/DELETE/product/productOrder.do';
        var type='post';
        var data={
          orderId:self.delOrder
        };
        var success=function(res){
          //console.log(res);
          self.init();
          self.delOrder=null;
          self.showMB=false;
        }
        common.Ajax(url,type,data,success)
      },
      //溯源码弹窗
      sourceBox:function(){
        var self=this;
        self.showSource=true;
        self.orderId=$(event.target).attr('data-id');
        self.proCount=$(event.target).attr('data-num');
      },
      //生成溯源码
      source:function(){
        var self=this;
        // if(parseInt(self.proNum)<=parseInt(self.proCount)){
          $('#info').removeClass('modHid')
          self.showSource=false;
          var url='https://ym-a.top/cloud_code/POST/productTracing/createProductTracingCode.do';
          var type='post';
          var data={
            orderId:self.orderId,
            rowCount:self.rowCount,
            boxCount:self.boxCount
          };
          var success=function(res){
            //console.log(res);
            $('#info').addClass('modHid');
            if(res.errorCode===0){
              self.showWarn=true;
              self.warnText='已成功生成二维码';
              self.orderId=null;
              self.rowCount=null;
              self.boxCount=null;
              self.init();
            }else{
              self.showWarn=true;
              self.warnText=res.msg;
            }
          };
          common.Ajax(url,type,data,success)
        // }
        
      },
      downLoad1:function(){
        var id=$(event.target).attr('data-id');
        var downloadURL = "https://ym-a.top/cloud_code//POST/securityCode/exportProductTracingCode.do";  
        var form = $("<form>");   //定义一个form表单  
        form.attr('style','display:none');   //在form表单中添加查询参数  
        form.attr('target','');  
        form.attr('method','post');  
        form.attr('action',downloadURL);  
                              
        var input1 = $('<input>');   
        input1.attr('type','hidden');   
        input1.attr('name','orderId');   
        input1.attr('value',id);    
          
        $('body').append(form);  //将表单放置在web中  
        form.append(input1);   //将查询参数控件提交到表单上  
        form.submit();   //表单提交  
        alert('正在下载请勿关闭窗口');
      },
        // 升级防窜货
        defined:function(){
          var self=this;
          var orderId=$(event.target).attr('data-id');
          $.ajax({
            url:'https://ym-a.top/cloud_code/GET/productTracingGroupcode/upperTracingDegree.do',
            type:'POST',
            data:{
              orderId:orderId
            },
            datatype:'json',
            success: function (res) {
                if(res.statuscode==0){
                  self.showWarn=true;
                  self.warnText='此订单已升级为防窜货模式'
                }
                else{
                  self.showWarn=true;
                  self.warnText=res.msg
                }
              },
              error:function(res){
               self.showWarn=true;
                  self.warnText='升级失败'
              }
          })
        },
      //获取页数
      getPage:common.getPage,
      //翻页
      changePage:common.changePage,
      //上一页
      prevPage:common.prevPage,
      //下一页
      nextPage:common.nextPage,
    },
    created:function(){
      this.init();
    }
  }
</script>