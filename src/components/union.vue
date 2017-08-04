<template>
  <div>
    <div class='row'>
      <div class='col-md-2'>
        <div class='goods_left'>
          <ul class='goods_menu'>
            <li class='goods_li_1'>
              <div class="change_color" @click="showList">
                <span class='img img12'></span><a href="javascript:void(0)"><span>企业优惠券</span></a><span class='arrow' style="color: #fff;"></span>
              </div>

              <ul class='goods_sub2 hidelist'>
                <router-link tag='li' to="/union/coupon"><a>新建优惠券</a></router-link>
                <router-link tag='li' to="/union/couponRule"><a>发放规则</a></router-link>
              </ul>
            </li>
              
                <!-- <router-link tag='li' class='goods_li_1 goods_li' to='#'><span class='img img13'></span><a>企业广告</a></router-link>
              
              
              
              
                <router-link tag='li' class='goods_li_1 goods_li' to='/union/bulletinBoard'><span class='img img14'></span><a>公告板</a></router-link> -->
              
          </ul>
        </div>
      </div>
      <div class='col-md-10'>
        <div class='goods_right'>
          <router-view v-on:updata='getdata' v-bind:productid='goodsid' v-bind:vendorId='vendorId'>
            
          </router-view>
          <div class="footer">
            <p class="footer_p">版权所有©2017 深圳市云码互联数字技术有限公司 All Rights Reserved. 粤ICP备17040526号</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  /*@import "../assets/css/common.css";*/
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
  .goods_menu .goods_li_3 .goods_sub3 {
    width: 100%;
    display: none;
  }
  .f-c:before, .f-c:after {
    content: "";
    display: table;
  }
  p:hover {
    text-decoration: none;
  }
  .flower{
    display: block;
    width: 119px;
    height: 119px;
    margin: auto;
    background: url(../assets/img/icon_hua.png) no-repeat;
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
  a:hover {
    text-decoration: none;
  }
  p:hover {
    text-decoration: none;
  }
  .router-link-active{
    color: #fff!important;
    background-color: #00baff!important;
  }
</style>
<script>
  import router from '../router.js'
  export default{
    data(){
      return{
        childCon:'我是子页面',
        goodsid:'',
        vendorId:''
      }
    },
    props:['datas'],
    methods:{
      init:function(){
        var self=this;
        self.vendorId=self.datas.vendorId
        if(self.datas.userType==99){
          router.push({path:'/admin'});
        }else{
          router.push({path:'/union'});
        }
        if(self.datas.userType==undefined){
          router.push({path:'/login'});
        }
      },
      showList:function(event){
        $(event.target).parents("li").find("ul").toggleClass("hidelist");
        $(event.target).parents("li").find('.arrow').toggleClass("upArrow");
      },
      getdata:function(id){
        this.goodsid=id;
      }
    },
    created:function(){
      this.init();
    }
  }
</script>
