<template>
  <div>
    <div v-show='showMB' @click='hide' style="position:fixed;top:0;right:0;bottom: 0;left:0;">
      <div class="moinfo">
      {{data}}
      </div>
      
    </div>
    <div class="right-main">
      <div class="right-main-bottom">
        <div class="button-group">
        </div>
        <div class="my-form">
          <ul class="pro-list">
            <li class="pro-li">
              <span class="pro-li-span" title="点击 more">厂商ID</span>
              <span class="pro-li-span">APP ID</span>
              <span class="pro-li-span">APP Secret</span>
              <span class="pro-li-span">公众号账号</span>
              <span class="pro-li-span">引导关注素材</span>
              <span class="pro-li-span">微信商务支付号</span>
              <span class="pro-li-span">公众号二维码转URL</span>
              <span class="pro-li-span">红包发送者</span>
              <span class="pro-li-span">红包祝福语</span>
              <span class="pro-li-span">创建时间</span>
            </li>
            <li class="pro-li" v-for="pro in proInfo">
              <span class="pro-li-span" style="display: inline-block;vertical-align: middle">{{pro.vendorId}}</span>
              <span class="pro-li-span" @click='showMore'>{{pro.appid}}</span>
              <span class="pro-li-span" @click='showMore'>{{pro.appsecret}}</span>
              <span class="pro-li-span" @click='showMore'>{{pro.gzhAccount}}</span>
              <span class="pro-li-span" @click='showMore'>{{pro.suCaiUrl}}</span>
              <span class="pro-li-span" @click='showMore'>{{pro.mchId}}</span>
              <span class="pro-li-span wordbreak" @click='showMore'></span>
              <span class="pro-li-span">{{pro.sendName}}</span>
              <span class="pro-li-span">{{pro.wishing}}</span>
              <span class="pro-li-span">{{pro.createTime}}</span>
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
  </div>
</template>
<style scoped>
  /*@import "../../assets/css/common.css";*/
  .pro-li-span{
    text-align: center;
    width: 9%;
    vertical-align:middle;
  }
  .pro-li .pro-li-span:nth-of-type(4),
  .pro-li .pro-li-span:nth-of-type(5),
  .pro-li .pro-li-span:nth-of-type(6),
  .pro-li .pro-li-span:nth-of-type(7){
    height: 60px;
    line-height: 30px;
  }
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
  .right-main-bottom{
    width: 95%;
    margin:auto;
    text-align: left;
  }
  .page-num-ul a{
    display: inline-block;
  }
  .button-group{
    margin-top: 40px;
  }
  .pro-li:hover{
    background: #eefaff;
  }
  .moinfo{
    width: 190px;
    height: 250px;
    background: #fff;
    position: absolute;
    z-index: 100;
    box-shadow: 0 0 50px rgba(175,186,203,0.23);
  }
</style>
<script>
  import common from '../../common.js'
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
        data:null
      }
    },
    methods:{
      //初始化
      init:function(currentPage){
        var self=this;
        var url='https://ym-a.top/cloud_code/GET/wxConfig/getAllWxGzhInfo.do';
        var type='get';
        var data={
          currentPage:currentPage
        };
        var success=function(res){
          //console.log(res);
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


      //显示蒙版
      mengban:function(){
        this.showMB=true;
        this.deleteArr.push($(event.target).attr('data-id'));
      },

      //隐藏蒙版
      hide:function(){
        if($(event.target)[0].className!='moinfo'){
          this.showMB=false;
        }
        
      },

      //获取位置
      showMore:function(){
        var self=this;
        self.showMB=true;
        var li=$(event.target).parents('li');
        var positionX=parseInt($(event.pageX)[0])-95;
        var positionY=parseInt($(li).offset().top);
        $('.moinfo').css('top',positionY);
        $('.moinfo').css('left',positionX);
        //获取data
        self.data=$(event.target).text();
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
