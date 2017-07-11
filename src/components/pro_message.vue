<template>
  <div>
    <div class="mengban" v-show='showMB'>
      <div class="proclassify" >
        <div class="tishi">
          确定将活动删除到回收站吗？
        </div>
        <input class="delbutton" type="button" name="" value="确认" @click='deletePro'>
        <input class="delbutton" type="button" name="" value="取消" @click='hide'>
      </div>
    </div>
          <div class='top-title'>
            <router-link to="/goods/pro_message" class='title-one'>产品库</router-link>
            <router-link to="/goods/recycle" class='title-two'>回收站</router-link>
          </div>
          <div class="right-main">
            <div class="right-main-top">
              <p class="right-main-top1">
                <span class="right-main-top-icon1"></span>
                什么是产品库？
              </p>
              <p class="right-main-top2">
                1、统一管理商家的总库产品，可用于各个业务板块的关联调用，也可以上架到微商城进行线上销售，但需要完善商城相关的内容描述。
              </p>
              <p class="right-main-top3">
                2、把产品加入回收站后，业务板块将不能再进行调用， 但不影响之前已调用的产品状态，如果进行彻底删除操作，已有业务关联的产品将会一并删除。
              </p>
            </div>
            <div class="right-main-bottom">
              <div class="button-group">
              <router-link to='/goods/updataproduct'>
                <div class="add-pro" @click='updata'>
                  +&nbsp;上传产品
                </div>
              </router-link>
                <input type="button" name="" class="search-button" value="搜索" @click='search'>
                <input type="search" name="" class="search" placeholder="输入关键字" v-model='keyword' @input='search'>
              </div>
              <div class="my-form">
                <ul class="pro-list">
                  <li class="pro-li">
                    <span class="pro-li-span">ID</span>
                    <span class="pro-li-span">产品名称</span>
                    <span class="pro-li-span">产品类型</span>
                    <span class="pro-li-span">产品库分类</span>
                    <span class="pro-li-span">价格/元</span>
                    <span class="pro-li-span">排序</span>
                    <span class="pro-li-span">更新时间</span>
                    <span class="pro-li-span">操作</span>
                  </li>
                  <li class="pro-li" v-for="pro in proInfo">
                    <span class="pro-li-span first"><span class="check-box checkshu" @click='selectThis'></span><span style="display: inline-block;vertical-align: middle">{{pro.id}}</span></span>
                    <span class="pro-li-span" style="text-align:left;"><img style="width:45px;margin-left:20px;" v-bind:src="'http://120.77.149.115/'+pro.productImg">{{pro.productName}}</span>
                    <span class="pro-li-span">{{pro.productSpe}}</span>
                    <span class="pro-li-span">{{pro.rowName}}</span>
                    <span class="pro-li-span">{{pro.productPrice}}</span>
                    <span class="pro-li-span">{{pro.sortNum}}</span>
                    <span class="pro-li-span wordbreak">{{pro.lastUpdateTime}}</span>
                    <span class="pro-li-span">
                      <router-link to='/goods/updataproduct'>
                        <span class="bianji" @click.self='updata' v-bind:data-id='pro.id'></span>
                      </router-link>
                      <a href="javascript:void(0)">
                        <span class="shanchu" @click.self='mengban' v-bind:data-id='pro.id'></span>
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="page-button">
            <div class="page-button-checkbox">
              <span class="pro-li-span last">
                <span class="allselect" v-bind:class='{"check-box":chechednum<proInfo.length,"has-select":chechednum==proInfo.length}' @click='selectAll'>
                </span>
                全选
              </span>
              <input type="button" name="" value="删除" class="delbutton" @click='mengban'>
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
            </div>
          </div>
  </div>
</template>
<style scoped>
/*@import "../assets/css/common.css";*/
.top-title{
  width: 95%;
  margin: auto;
  height: 36px;
  text-align: left;
  margin-top: 40px;
}
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
  background: url("../assets/img/icon_tishi.png") no-repeat;
  float: left;
  margin-right: 8px;
}
.right-main-bottom{
  width: 95%;
  margin:auto;
  text-align: left;
}
.page-num-ul a{
  display: inline-block;
}
.pro-li:nth-of-type(1) .pro-li-span:nth-of-type(5):after{
  content: "";
  display: inline-block;
  width: 5px;
  height: 5px;
  background-color: #000;
}
</style>
<script>
import common from '../common.js'
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
        keyword:''
      }
    },
    props:['vendorId'],
    methods:{
      //初始化
      init:function(currentPage){
        var self=this;
        var url='http://120.77.149.115/cloud_code/GET/product/info.do';
        var type='get';
        var data={
                  vendorId:self.vendorId,
                  deleteFlag:0,
                  currentPage:currentPage
                };
        var success=function(res){
          var pagenum=res.totalPages;
          self.totalPage=[];
          self.resData=res;
          self.proInfo=res.result.data;
          self.totalPages=res.totalPages;
          self.currentPage=res.currentPage;
          self.getPage();
        }
        //调用ajax
        common.Ajax(url,type,data,success)
      },

      //获取页数
      getPage:common.getPage,

      //选择
      selectThis:function(event){
        var self=this;
        var checkBox=$(event.target);
        var length=$('.checkshu').length;
        if(checkBox.hasClass('check-box')){
          checkBox.removeClass('check-box').addClass('has-select');
          self.chechednum++;
          self.deleteArr.push(checkBox.parent().text());
        }else{
          checkBox.addClass('check-box').removeClass('has-select');
          self.chechednum--;
          self.deleteArr.pop(checkBox.parent().text());

        };
      },

      //全选
      selectAll:function(event){ 
        var self=this;
        var checkall=$(event.target);
        var length=$('.checkshu').length;
        if(checkall.hasClass('check-box')){
          checkall.removeClass('check-box').addClass('has-select');
          $('.checkshu').removeClass('check-box').addClass('has-select');
          self.chechednum=length;
          self.deleteArr=[];
          for(var i=0,len=self.proInfo.length;i<len;i++){
            self.proInfo.index=i;
            self.deleteArr.push(self.proInfo[i].id);
          }
        }else{
          checkall.addClass('check-box').removeClass('has-select');
          $('.checkshu').addClass('check-box').removeClass('has-select');
          self.chechednum=0;
          self.deleteArr=[];

        }
      },

      //显示蒙版
      mengban:function(){
        this.showMB=true;
        this.deleteArr.push($(event.target).attr('data-id'));
      },

      //隐藏蒙版
      hide:function(){
        this.showMB=false;
      },

      //删除到回收站
      deletePro:function(){
        var self=this;
        var deletedata=self.deleteArr;
        var url='http://120.77.149.115/cloud_code/DELETE/product/batch.do';
        var type='post';
        var data={
            id:deletedata,
            deleteFlag:1
          };
        var success=function(res){
            self.init(self.currentPage);
            self.showMB=false;
            self.deleteArr=[];
            $('.checkshu').addClass('check-box').removeClass('has-select');
            self.chechednum=0;
        };
        //调用ajax
        common.Ajax(url,type,data,success)
      },

      //修改
      updata:function(){
        if($(event.target).hasClass('add-pro')){
          this.$emit('updata','');
          return
        }
        var id=$(event.target).attr('data-id');
        this.$emit('updata',id);
      },

      //搜索
      search:function(){
        var self=this;
        var url='http://120.77.149.115/cloud_code/GET/product/info.do';
        var type='post';
        var data={
                  vendorId:self.vendorId,
                  deleteFlag:0,
                  keyword:self.keyword
                };
        var success=function(res){
          var pagenum=res.totalPages;
          self.totalPage=[];
          self.resData=res;
          self.proInfo=res.result.data;
          self.totalPages=res.totalPages;
          self.currentPage=res.currentPage;
          self.getPage();
        }
        //调用ajax
        common.Ajax(url,type,data,success)
      },

      //翻页
      changePage:common.changePage,

      //上一页
      prevPage:common.prevPage,

      //下一页
      nextPage:common.nextPage,
  },
  created:function(){
      this.init()
    }
  }
</script>
