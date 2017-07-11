<template>
	<div>
		<div class='right-top'>
            <p class="right-top-title">数据看板 <span class="gear"></span></p>
            <ul class="right-top-ul">
              <li class="right-top-li"><p>会员总数</p><p>{{wxVipCount}}</p></li>
              <li class="right-top-li"><p>昨天新增会员</p><p>{{wxAddVipCount}}</p></li>
              <li class="right-top-li"><p>扫码总量</p><p>{{vendorTotalScanCount}}</p></li>
              <li class="right-top-li"><p>微信粉丝总数</p><p>{{totalFuns}}</p></li>
<!--               <li class="right-top-li"><p>产品码扫码数</p><p>99</p></li> -->
              <li class="right-top-li"><p>昨日扫码量</p><p>{{dayTotalScanCount}}</p></li>

            </ul>
          </div>

          <div class="right-main">
            <p class="right-top-title">常用功能 <span class="gear"></span></p>
            <ul class="right-main-ul"> 
              <router-link to='/twoCode/hongbao'><li class="right-main-li">
                <img src="../../assets/img/icon_hongbao.png">
                <p>红包管理</p>
              </li>
              </router-link>
              <router-link to='/enterprise/trade'>
              <li class="right-main-li">
                <img src="../../assets/img/icon_zhanghao.png">
                <p>账号管理</p>
              </li>
              </router-link>
              <router-link to='/goods/updataproduct'>
              <li class="right-main-li">
                <img src="../../assets/img/icon_xinzeng.png">
                <p>新增产品</p>
              </li>
              </router-link>
              <router-link to='/twoCode/activity'>
              <li class="right-main-li">
                <img src="../../assets/img/icon_saoma.png">
                <p>扫码活动管理</p>
              </li>
              </router-link>
              <router-link to='/enterprise/revise'>
              <li class="right-main-li">
                <img src="../../assets/img/icon_mima.png">
                <p>修改密码</p>
              </li>
              </router-link>
              <router-link to='/union/newActivities'>
              <li class="right-main-li">
                <img src="../../assets/img/icon_youhuiquan (2).png">
                <p>新建优惠券</p>
              </li>
              </router-link>
            </ul>
          </div>
            
          <div class="right-bottom">
            <p class="right-top-title">系统公告 <span class="gear"></span></p>
            <ul class="right-bottom-ul">
              <li class="right-bottom-li">群发信息使用教程</li>
            </ul>
          </div>
	</div>
</template>

<script>
import common from '../../common.js'
	export default{
		data(){
			return{
        vendorId:'',
        userId:'',
        vendorTotalScanCount:'',//商家扫码总量
        dayTotalScanCount:'',//前一天扫码量
        wxAddVipCount:'',//昨日新增会员数
        wxVipCount:'',//会员数
        totalFuns:'',//总粉丝数
			}
		},
    props:['datas'],
		methods:{
      init:function(){
        var self=this;
        self.vendorId=self.datas.vendorId;
        self.userId=self.datas.userId;
        var data={
          vendorId:self.vendorId,
          userId:self.userId
        }
        $.ajax({
          url:'http://120.77.149.115/cloud_code/GET/mapCount/mapAntiProCount.do',
          type:'GET',
          data:data,
          dataType:'json',
          success:function(res){
            self.vendorTotalScanCount=res.vendorTotalScanCount;
            self.dayTotalScanCount=res.dayTotalScanCount;
            self.wxAddVipCount=res.wxAddVipCount;
            self.wxVipCount=res.wxVipCount;
            self.totalFuns=res.totalFuns;
          },
          error:function(res){
            console.log(res);
          }
        });
      },
		},
    created:function(){
      this.init();
    }	
  }
</script>

<style scoped>
	.right-top,
.right-main,
.right-bottom{
  width: 95%;
  background: #fff;
  border-radius: 8px;
  margin: auto;
  margin-top: 44px;
  border-bottom: 1px solid transparent;
}
.gear{
  display: inline-block;
  width: 25px;
  height: 25px;
  vertical-align: middle;
  float: right;
  background: url(../../assets/img/icon_qiye_shezhi.png);
  background-size: cover;
}
.right-top p,
.right-main p,
.right-bottom p{
  font-family: "Microsoft YaHei";
}
.right-top-title{
  text-align: left;
  font-size: 18px;
  width: 95%;
  margin: auto;
  padding-top: 59px;
}
.right-main-li p{
  font-size: 17px;
  color: #6e787e;
}
.right-top-ul{
  width: 95%;
  margin:78px auto;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
}
.right-main-ul{
  width: 85%;
  margin:78px auto;
  height: 170px;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
}
.right-bottom-ul{
  width: 95%;
  list-style: square;
}
.right-bottom-li{
  text-align: left;
}
.right-top-li{
  float: left;
  width: 187px;
  height: 187px;
  border-radius: 8px;
  font-size: 22px;
  color: #fff;
  background-size: cover;
}
.right-top-li p:nth-of-type(1){
  height: 22px;
  line-height: 22px;
  margin: 41px 0 36px 0;
}
.right-top-li p:nth-of-type(2){
  font-size: 32px;
  height: 32px;
  line-height: 32px;
}
.right-top-li:nth-of-type(1){
  background: url(../../assets/img/png_1.png);
}
.right-top-li:nth-of-type(2){
  background: url(../../assets/img/png_2.png);
}
.right-top-li:nth-of-type(3){
  background: url(../../assets/img/png_3.png);
}
.right-top-li:nth-of-type(4){
  background: url(../../assets/img/png_4.png);
}
.right-top-li:nth-of-type(5){
  background: url(../../assets/img/png_5.png);
}
.right-top-li:nth-of-type(6){
  background: url(../../assets/img/png_6.png);
}
.pro-li:nth-of-type(1) .pro-li-span:nth-of-type(5):after{
  content: "";
  display: inline-block;
  width: 5px;
  height: 5px;
  background-color: #000;
}
a:hover{
  text-decoration: none;
}
</style>