<template>
  <div>
    <div class="mengban" v-show='showMB'>
      <div class="proclassify" >
        <div class="tishi">
          确定将产品彻底删除吗？
        </div>
        <input class="delbutton" type="button" name="" value="确认" @click='deletePro'>
        <input class="delbutton" type="button" name="" value="取消" @click='hide'>
      </div>
    </div>
    <div class="mengban" v-show='showMB2'>
      <div class="proclassify" >
        <div class="tishi">
          确定将产品还原到列表吗？
        </div>
        <input class="delbutton" type="button" name="" value="确认" @click='huanyuan'>
        <input class="delbutton" type="button" name="" value="取消" @click='hide'>
      </div>
    </div>
          <div class='top-title'>
            <router-link to="/goods/pro_message" class='title-two'>产品库</router-link>
            <router-link to="/goods/recycle" class='title-one'>回收站</router-link>
          </div>
          <div class="right-main">
            <div class="right-main-bottom">
              <div class="button-group">
              <router-link to='/goods/updataproduct'>
                <div class="add-pro" @click='updata'>
                  +&nbsp;上传产品
                </div>
              </router-link>
                <input type="button" name="" class="search-button" value="搜索">
                <input type="search" name="" class="search" placeholder="输入关键字">
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
                    <span class="pro-li-span" style="text-align:left;"><img style="width:45px;margin-left:20px;" v-bind:src="'http://120.77.149.115'+pro.productImg">{{pro.productName}}</span>
                    <span class="pro-li-span">{{pro.productSpe}}</span>
                    <span class="pro-li-span">{{pro.rowName}}</span>
                    <span class="pro-li-span">{{pro.productPrice}}</span>
                    <span class="pro-li-span">{{pro.sortNum}}</span>
                    <span class="pro-li-span wordbreak">{{pro.lastUpdateTime}}</span>
                    <span class="pro-li-span">
                      <a href="javascript:void(0)">
                        <span class="huanyuan" @click.self='mengban2' v-bind:data-id='pro.id'></span>
                      </a>
                      <a href="javascript:void(0)">
                        <span class="totaldel" @click.self='mengban' v-bind:data-id='pro.id'></span>
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
/*@import "../assets/css/common.css";*/
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
  background: url("../assets/img/icon_tishi.png") no-repeat;
  float: left;
  margin-right: 8px;
}
.right-main-bottom{
  width: 95%;
  margin:auto;
  text-align: left;
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
        totalPage:[],
        resData:[],
        proInfo:[],
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
        var url='http://120.77.149.115/cloud_code/GET/product/info.do';
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

      //单选
      selectThis:function(event){
        var self=this;
        var checkBox=$(event.target);
        var length=$('.checkshu').length;
        if(checkBox.hasClass('check-box')){
          checkBox.removeClass('check-box').addClass('has-select');
          self.chechednum++;
          self.deleteArr.push(checkBox.parent().text());
          self.huanyuanArr.push(checkBox.parent().text());
          console.log(self.huanyuanArr);
        }else{
          checkBox.addClass('check-box').removeClass('has-select');
          self.chechednum--;
          self.deleteArr.pop(checkBox.parent().text());
          self.huanyuanArr.pop(checkBox.parent().text());
          console.log(self.huanyuanArr);

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
          for(var i=0,len=self.proInfo.length;i<len;i++){
            self.proInfo.index=i;
            self.deleteArr.push(self.proInfo[i].id);
            self.huanyuanArr.push(self.proInfo[i].id);
          }
          console.log(self.deleteArr)
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
        this.deleteArr.push($(event.target).attr('data-id'));
      },

      //显示还原蒙版
      mengban2:function(){
        this.showMB2=true;
        this.huanyuanArr.push($(event.target).attr('data-id'));
      },

      //隐藏蒙版
      hide:function(){
        this.showMB=false;
        this.showMB2=false;
        this.huanyuanArr=[];
        this.deleteArr=[];
      },

      //删除
      deletePro:function(){
        var self=this;
        var deletedata=self.deleteArr;
        console.log(deletedata);
        var url='http://120.77.149.115/cloud_code/DELETE/product/info.do';
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
        var url='http://120.77.149.115/cloud_code/DELETE/product/batch.do';
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

      //上传
      updata:function(){
        if($(event.target).hasClass('add-pro')){
          this.$emit('updata','');
          return
        }
        var id=$(event.target).attr('data-id');
        this.$emit('updata',id);
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
