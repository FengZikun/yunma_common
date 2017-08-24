<template>
  <div class="right-main">
  <div class="mengban" v-show='showMB'>
      <div class="proclassify" >
        <div class="tishi">
          确定将活动删除吗？
        </div>
        <input class="delbutton" type="button" name="" value="确认" @click='delactivity'>
        <input class="delbutton" type="button" name="" value="取消" @click='hide'>
      </div>
    </div>
          <div class='right-main-top'>
            <p class='right-main-top1'>
              <span class='right-main-top-icon1'></span>
              <span class='top_two'>创建扫码活动时，您可以根据需要设置扫码活动的主题、活动时间、活动3.4防伪码范围以及活动奖项等；</span>
            </p>
            <p class='right-main-top2'>
              <span style="color:red">重要提示：</span><br>
              <span>1、扫码活动创建成功后默认为禁用状态，请在列表中开启活动。</span><br>
              <span>2、为保证活动正常进行，请确保相关的码批次为开启状态（在【基础设置】-【码批次管理】中开启码批次）</span><br>
              <span>3、扫码活动开启后，当扫码记录为0时，可修改或删除整个活动；当扫码记录≥1时，被分配的活动码不能删除或修改，也不能参加其他活动，请谨慎操作！</span>
            </p>
          </div>
          <div class="right-main-bottom">
              <div class="button-group">
              <a href="javascript:void(0)">
                <div class="add-pro" @click='addActivity'>
                  +&nbsp;创建扫码活动
                </div>
                </a>
<!--                 <input type="button" name="" class="search-button" value="搜索">
                <input type="search" name="" class="search" placeholder="输入关键字"> -->
              </div>
              <div class="my-form">
                <ul class="pro-list">
                  <li class="pro-li">
                    <span class="pro-li-span">ID</span>
                    <span class="pro-li-span">扫码页名称</span>
                    <span class="pro-li-span">起止时间</span>
                    <span class="pro-li-span">状态</span>
                    <span class="pro-li-span">订单范围</span>
                    <span class="pro-li-span">功能需求</span>
                    <span class="pro-li-span">备注</span>
                    <span class="pro-li-span">操作</span>
                  </li>
                  <li class="pro-li" v-for='item in proInfo'>
                    <span class="pro-li-span">{{item.id}}</span>
                    <span class="pro-li-span">{{item.anti_fake_name}}</span>
                    <span class="pro-li-span time">{{item.start_time}}<br>{{item.end_time}}</span>
                    <span class="pro-li-span">
                      <span v-if='item.activity_status==0' class="zanting" @click='changeStatus(item.activity_status,item.id)'></span>
                      <span v-else class="qidong" @click='changeStatus(item.activity_status,item.id)'></span>
                    </span>
                    <span class="pro-li-span">
                      <a href="javascript:void(0)">
                      <span class="chakan" v-bind:data-order='item.orderId' @click='getOrderInfo'></span>
                      </a>
                    </span>
                    <span class="pro-li-span time" style="white-space:pre-wrap;">
                      <span v-if='item.vendorHttp!="false"'> 公司官网 </span><span v-if='item.securityAndTraceability==0'> 防伪 溯源 </span><span v-if='item.getRedEnv==0'> 红包 </span><span v-if='item.spree==0'> 大礼包 </span><span v-if='item.weShop!="false"'> 微商城 </span><span v-if='item.productInfo!="false"'> 产品简介 </span>
                    </span>
                    <span class="pro-li-span" v-bind:title="item.mark">{{item.mark}}</span>
                    <span class="pro-li-span">
                      <span title="编辑" class="bianji" v-bind:data-id='item.id' @click.self='revise'></span>
                      <span title="删除" class="shanchu" v-bind:data-id='item.id' @click.self='mengban'></span>
                      <span title="预览" class="chakan" v-bind:data-url='item.urlName' @click.self='showKuang($event)'></span>
                      <!-- <a href="javascript:void(0)"><img src="../assets/img/editHui.png" v-bind:data-id='item.id' @click='revise'></a>
                      <a href="javascript:void(0)"><img src="../assets/img/icon_chedishanchu.png" @click='mengban' v-bind:data-id='item.id'></a>
                      <a href="javascript:void(0)"><img src="../assets/img/icon_yulan.png" v-bind:data-url='item.urlName' @click='showKuang($event)'></a> -->

                    </span>
                  </li>
                </ul>
              </div>
            </div>
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
                <div class="modelBg modHid">
                  <div class="modelContent">
                    <div class="phoneHeader"></div>
                    <div class="phoneTitle"></div>
                    <img src="../assets/img/icon_cha3.png" class="cha3" @click="hideKuang">
                    <iframe v-bind:src="frameSrc" width="349px" height="663px"></iframe>
                  </div>
                </div>
  </div>
</template>
<style scoped>
/*@import "../assets/css/common.css";*/
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
.proclassify{
  text-align: center;
}
.right-main-bottom{
  width: 95%;
  margin:auto;
  text-align: left;
}
.pro-li-span:nth-of-type(2){
  width: 12%;
}
.pro-li-span:nth-of-type(7){
  width: 12%;
  white-space: nowrap;
}
.time{
  line-height: 26px;
  overflow: hidden;
  height: 52px;
  margin: 10px 0;
}
.time:nth-of-type(2){
  white-space:pre-wrap; 
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
    top: 5%;
    width: 384px;
    min-height: 708px;
    background: #fff;
    z-index: 2001;
    font-size: 16px;
    padding: 0 14px;
    border: 1px solid #ededed;
    border-radius: 15px;
  }
    .phoneHeader {
    height: 75px;
    width: 349px;
    background: url(../assets/img/phoneHeader.png) no-repeat center center;
  }

  .phoneTitle {
    height: 55px;
    width: 349px;
    border: 1px solid transparent;
    padding-top: 1px;
    background-image: url(../assets/img/phoneTitle.png);
    background-size: cover;
    position: relative;
  }
  .cha3{
  position: absolute;
  top: 2px;
  right: -93px;
}
  .modHid{
    display: none
  }
</style>
<!--<script src='../assets/js/china.js'></script>-->
<script>
  import '../assets/js/echarts.js'
  import '../assets/js/china.js'
  import common from '../common.js'
  import router from '../router.js'
  import {mapMutations} from 'vuex'
  export default{
    data(){
      return{
        childCon:'我是子页面',
        totalPage:[],    //页码数组
        resData:[],      //请求回的所有数据
        currentPage:'',  //当前页
        totalPages:'',    //总页数
        proInfo:null,
        showMB:false,
        delinfo:null,
        frameSrc:''
      }
    },
    props:['datas'],
    methods:{
      ...mapMutations([
        'changeType'
      ]),
      //初始化
      init:function(currentPage){
        var self=this;
        var url='https://ym-a.top/cloud_code/GET/codeManager/getCodeManagerAll.do';
        var type='get';
        var data={
          pageSize:10,
          currentPage:currentPage,
          vendorId:self.datas.vendorId
        };
        var success=function(res){
          self.totalPage=[];
          self.resData=res;
          self.proInfo=res.result.data;
          self.totalPages=res.totalPages;
          self.currentPage=res.currentPage;
          self.getPage();

        };
        common.Ajax(url,type,data,success);
      },

      //删除提示
      mengban:function(){
        var self=this;
        self.showMB=true;
        self.delinfo=$(event.target).attr('data-id');
      },

      //隐藏蒙版
      hide:function(){
        var self=this;
        self.showMB=false;
      },

      //删除
      delactivity:function(){
        var self=this;
        var url='https://ym-a.top/cloud_code/DELETE/codeManager/deleteCodeManager.do';
        var type='post';
        var data={
          id:self.delinfo
        };
        var success=function(res){
          if(res.status){
            self.showMB=false;
            self.delinfo=null;
            self.init();
          }else{
            //console.log(res);
          }
          
        };
        common.Ajax(url,type,data,success)
      },

      //获取订单范围
      getOrderInfo:function(){
        var self=this;
        var id=$(event.target).attr('data-order');
        var url='https://ym-a.top/cloud_code/GET/product/productOrderInfo.do';
        var type='get';
        var data={
          orderId:id
        };
        var success=function(res){
          console.log(res);
        };
        common.Ajax(url,type,data,success)
      },

      //修改
      revise:function(){
        var self=this;
        var id=$(event.target).attr('data-id');
        self.$emit('upActivityId',id);
        self.changeType('b');
        router.push({path:'addActivity'})
      },

      //新增
      addActivity:function(){
        var self=this;
        self.$emit('upActivityId',null);
        self.changeType('b');
        router.push({path:'addActivity'})
      },

      //改变状态
      changeStatus:function(status,id){
        var self=this;
        var url='https://ym-a.top/cloud_code/UPDATE/codeManager/updateScaPageStatus.do';
        var type='post';
        var data={
          id:parseInt(id),
          currentStatus:parseInt(status)
        };
        var success=function(res){
          if(res.status===1){
            self.init();
          }
        };
        common.Ajax(url,type,data,success)
      },

      //获取页数
      getPage:common.getPage,

      //翻页
      changePage:common.changePage,

      //上一页
      prevPage:common.prevPage,

      //下一页
      nextPage:common.nextPage,
      // 预览
      showKuang(event){
        this.frameSrc='https://ym-a.top/wx/'+$(event.target).attr('data-url');
        $('.modelBg').removeClass('modHid');
      },
      // 隐藏预览
      hideKuang(event){
        $(event.target).parent().parent().addClass('modHid');
      },
    },
    created:function(){
      this.init();
    }
  }
</script>
