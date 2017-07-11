<template>
  <div>
    <div class="mengban" v-show='showMB'>
      <div class="proclassify" >
        <input class="delbutton" type="button" name="" value="确认">
        <input class="delbutton" type="button" name="" value="取消">
      </div>
    </div>
          <div class="right-main">
            <div class="right-main-bottom">
              <div class="button-group">
              <router-link to='/admin/addCorporate'>
                <div class="add-pro">
                  +&nbsp;新增厂商
                </div>
              </router-link>
              </div>
              <div class="my-form">
                <ul class="pro-list">
                  <li class="pro-li">
                    <span class="pro-li-span">ID</span>
                    <span class="pro-li-span">厂商名称</span>
                    <span class="pro-li-span">所属行业</span>
                    <span class="pro-li-span">联系方式</span>
                    <span class="pro-li-span">功能需求</span>
                    <span class="pro-li-span">邮箱</span>
                    <span class="pro-li-span">官网/微商城/公众号</span>
                    <span class="pro-li-span">备注</span>
                    <span class="pro-li-span">查看更多</span>
                  </li>
                  <li class="pro-li" v-for="pro in proInfo">
                    <span class="pro-li-span" style="display: inline-block;vertical-align: middle">{{pro.vendorId}}</span>
                    <span class="pro-li-span">{{pro.brand_name}}</span>
                    <span class="pro-li-span">{{pro.industryName}}</span>
                    <span class="pro-li-span">{{pro.customPhone}}</span>
                    <span class="pro-li-span">{{pro.functionType}}</span>
                    <span class="pro-li-span">{{pro.vendorEmail}}</span>
                    <span class="pro-li-span" style="line-height: 24px;text-align:left;overflow: hidden;text-overflow: ellipsis;min-width: 100px;">官网：{{pro.link}}<br>微商城：{{pro.vendor_mall}}<br>公众号：{{pro.officialAccounts}}</span>
                    <span class="pro-li-span">{{pro.comment}}</span>
                    <span class="pro-li-span"><a href='javascript:void(0)' @click='upVendorId' v-bind:data-id='pro.detail_id'>详情</a></span>
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
.pro-li .pro-li-span:nth-of-type(1),
.pro-li .pro-li-span:nth-of-type(8),
.pro-li .pro-li-span:nth-of-type(9){
  width: 6%;
}
.pro-li-span{
  text-align: center;
  width: 13%;
  vertical-align: top;
}
.pro-li{
  border-bottom: 1px solid #e1e1e1;
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
</style>
<script>
import common from '../../common.js'
import router from '../../router.js'
  export default{
    data(){ 
      return{
        childCon:'我是子页面',
        proInfo:[],      //信息数组
        totalPage:[],    //页码数组
        resData:[],      //请求回的所有数据
        showMB:false,    //蒙版开关
        currentPage:'',  //当前页
        totalPages:''    //总页数
      }
    },
    methods:{
      //初始化
      init:function(currentPage){
        var self=this;
        var url='http://120.77.149.115/cloud_code/GET/vendor/info.do';
        var type='get';
        var data={
                  deleteFlag:0,
                  currentPage:currentPage
                };
        var success=function(res){
          var pagenum=res.totalPages;
          console.log(res);
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
      },

      //隐藏蒙版
      hide:function(){
        this.showMB=false;
      },

      //上传id
      upVendorId:function(){
        var self=this;
        var id=$(event.target).attr('data-id');
        self.$emit('upId',id);
        router.push({path:'corporateDetail'})
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
