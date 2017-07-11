<template>
	<div>
          <div class='right-top'>
            <ul class="right-top-ul">
              <li class="right-top-li"><p>订单量</p><p>{{orderCount}}</p></li>
              <li class="right-top-li"><p>扫码次数</p><p>{{sysScanCount}}</p></li>
              <li class="right-top-li"><p>扫码异常</p><p>{{excepScanCount}}</p></li>
              <li class="right-top-li"><p>新增订单</p><p>{{addDayOrder}}</p></li>

            </ul>
          </div>

          <div class="right-main">
          
          </div>
            
          <div class="right-bottom">
            <p class="right-top-title">系统公告 <span class="gear"></span></p>
            <ul class="right-bottom-ul">
              <li class="right-bottom-li">群发信息使用教程</li>
            </ul>
          </div>
          </div>
</template>
<style scoped>
/*@import "../../assets/css/common.css";*/
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
</style>
<script>
  export default{
    data(){
      return{
        childCon:'我是子页面',
        orderCount:'',
        sysScanCount:'',
        excepScanCount:'',
        addDayOrder:''
      }
    },
    props:['userId'],
    methods:{
      init:function(){
        var self=this;
        // self.userId=self.datas.userId;
        var data={
          userId:self.userId
        }
        $.ajax({
          url:'http://120.77.149.115/cloud_code/GET/mapCount/sysMapCount.do',
          type:'GET',
          data:data,
          dataType:'json',
          success:function(res){
            self.orderCount=res.orderCount;//订单总数
            self.sysScanCount=res.sysScanCount;//总商家扫码数
            self.excepScanCount=res.excepScanCount;//异常扫码数
            self.addDayOrder=res.addDayOrder;//昨日增加订单数  
          },
          error:function(res){
            console.log(res);
          }
        });
      },
      showList:function(event){
        // console.log();
        $(event.target).parents("li").find("ul").toggleClass("hidelist");
        $(event.target).parents("li").siblings().find("ul").addClass("hidelist")
      }
    },
    created:function(){
      this.init();
    }
  }
</script>