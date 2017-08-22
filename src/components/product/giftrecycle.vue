<template>
  <div>
    <div class="mengban" v-show='showMB'>
      <div class="proclassify" >
      <div class="tishi">
          确定将礼品彻底删除吗？
        </div>
        <input class="delbutton" type="button" name="" value="确认" @click='deleteGift'>
        <input class="delbutton" type="button" name="" value="取消" @click='hide'>
      </div>
    </div>
    <div class="mengban" v-show='showMB2'>
      <div class="proclassify" >
      <div class="tishi">
          确定将礼品还原到列表吗？
        </div>
        <input class="delbutton" type="button" name="" value="确认" @click='huanyuan'>
        <input class="delbutton" type="button" name="" value="取消" @click='hide'>
      </div>
    </div>
          <div class='top-title'>
            <router-link to="/goods/gift" class='title-two'>礼品库</router-link>
            <router-link to="/goods/recycle" class='title-one'>回收站</router-link>
          </div>
          <div class="right-main">
            <div class="right-main-bottom">
              <div class="button-group">
                <div class="add-pro">
                  +&nbsp;上传礼品
                </div>
                <input type="button" name="" class="search-button" value="搜索">
                <input type="search" name="" class="search" placeholder="输入关键字">
              </div>
              <div class="my-form">
                <ul class="pro-list">
                  <li class="pro-li">
                    <span class="pro-li-span">礼品名称</span>
                    <span class="pro-li-span">礼品分组</span>
                    <span class="pro-li-span">价格/元</span>
                    <span class="pro-li-span">更新时间</span>
                    <span class="pro-li-span">操作</span>
                  </li>
                  <li class="pro-li" v-for='gift in gifts'>
                    <span class="pro-li-span first" v-bind:data-id='gift.id'><span class="check-box checkshu" @click='selectThis' style="margin-left:10%;margin-right:5%;"></span><span style="display: inline-block;vertical-align: middle;overflow: hidden"><img style="width:45px;margin-left:20px;" v-bind:src="'https://ym-a.top'+gift.presentImg">{{gift.presentName}}</span></span>
                    <span class="pro-li-span">{{gift.rowName}}</span>
                    <span class="pro-li-span">{{gift.presentPrice}}</span>
                    <span class="pro-li-span"></span>
                    <span class="pro-li-span">
                      <router-link to='#'>
                        <span class="huanyuan" v-bind:data-id='gift.id' @click='mengban2'></span>
                      </router-link>
                      <a href="javascript:void(0)">
                        <span class="shanchu" v-bind:data-id='gift.id' @click='mengban'></span>
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="page-button">
            <div class="page-button-checkbox">
              <span class="pro-li-span last">
                <span class="allselect" v-bind:class='{"check-box":chechednum<gifts.length,"has-select":chechednum==gifts.length}' @click='selectAll'>
                </span>
                全选
              </span>
              <input type="button" name="" value="还原" class="delbutton" @click='mengban2'>
              <input type="button" name="" value="彻底删除" class="delbutton" @click='mengban'>
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
/*@import "../../assets/css/common.css";*/
.top-title{
  width: 95%;
  margin: auto;
  height: 36px;
  text-align: left;
  margin-top: 40px;
}
.button-group{
  padding-top: 60px;
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
  background: url("../../assets/img/icon_tishi.png") no-repeat;
  float: left;
  margin-right: 8px;
}
.right-main-bottom{
  width: 95%;
  margin:auto;
  text-align: left;
}
.pro-li-span{
  width: 19%;
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
import common from '../../common.js'
  export default{
    data(){
      return{
        childCon:'我是子页面',
        chechednum:0,    //全选单选控制
        totalPage:[],
        resData:[],
        gifts:[],
        totalPage:[],
        deleteArr:[],
        showMB:false,
        showMB2:false,
        currentPage:'',  //当前页
        totalPages:'',   //总页数
        huanyuanArr:[],
      }
    },
    props:['vendorId'],
    methods:{
      //初始化
      init:function(currentPage){
        var self=this;
        var url='https://ym-a.top/cloud_code/GET/product/present.do';
        var type='get';
        var data={
            vendorId:self.vendorId,
            deleteFlag:1,
            currentPage:currentPage
          };
        var success=function(res){
            var pagenum=res.totalPages;
            self.totalPage=[];
            self.resData=res;
            self.gifts=res.result.data;
            self.totalPages=res.totalPages;
            self.currentPage=res.currentPage;
            self.getPage();
          }
        //调用ajax
        common.Ajax(url,type,data,success)
      },
      //获取页数
      getPage:common.getPage,

      //单选
      selectThis:function(event){
        var self=this;
        var checkBox=$(event.target);
        var length=$('.checkshu').length;
        if(checkBox.hasClass('check-box')){
          checkBox.removeClass('check-box').addClass('has-select');
          self.chechednum++;
          self.deleteArr.push(checkBox.parent().attr('data-id'));
          self.huanyuanArr.push(checkBox.parent().attr('data-id'));
          //console.log(self.huanyuanArr);
        }else{
          checkBox.addClass('check-box').removeClass('has-select');
          self.chechednum--;
          self.deleteArr.pop(checkBox.parent().attr('data-id'));
          self.huanyuanArr.pop(checkBox.parent().attr('data-id'));
          //console.log(self.huanyuanArr);

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
          self.huanyuanArr=[];
          for(var i=0,len=self.gifts.length;i<len;i++){
            self.gifts.index=i;
            self.deleteArr.push(self.gifts[i].id);
            self.huanyuanArr.push(self.gifts[i].id);
          }
          //console.log(self.deleteArr)
        }else{
          checkall.addClass('check-box').removeClass('has-select');
          $('.checkshu').addClass('check-box').removeClass('has-select');
          self.chechednum=0;
          self.deleteArr=[];
          self.huanyuanArr=[];
        }
      },

      //显示删除蒙版
      mengban:function(){
        this.showMB=true;
        if($(event.target).attr('data-id')!=undefined){
          this.deleteArr.push($(event.target).attr('data-id'));
        }
        
      },

      //显示还原蒙版
      mengban2:function(){
        this.showMB2=true;
        if($(event.target).attr('data-id')!=undefined){
          this.huanyuanArr.push($(event.target).attr('data-id'));
        }
        
      },

      //隐藏蒙版
      hide:function(){
        this.showMB=false;
        this.showMB2=false;
        this.huanyuanArr=[];
        this.deleteArr=[];
      },

      //删除
      deleteGift:function(){
        var self=this;
        var deletedata=self.deleteArr;
        //console.log(deletedata);
        var url='https://ym-a.top/cloud_code/DELETE/product/present.do';
        var type='post';
        var data={
            id:deletedata
          };
        var success=function(res){
            self.init(self.currentPage);
            self.showMB=false;
            self.deleteArr=[];
            $('.checkshu').addClass('check-box').removeClass('has-select');
            self.chechednum=0;
          }
        //调用ajax
        common.Ajax(url,type,data,success)
      },

      //还原
      huanyuan:function(){
        var self=this;
        var huanyuandata=self.huanyuanArr;
        var url='https://ym-a.top/cloud_code/DELETE/product/batchPresent.do';
        var type='post';
        var data={
            id:huanyuandata,
            deleteFlag:0
          };
        var success=function(res){
            self.init(self.currentPage);
            self.showMB2=false;
            self.huanyuanArr=[];
            $('.checkshu').addClass('check-box').removeClass('has-select');
            self.chechednum=0;
        };
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
      this.init();
    }
  }
</script>
