<template>
	<div>
    <div class="mengban" v-if='showMB'>
      <div class="contentBox" style="width: 950px;margin-left: -475px;">
        <div class="contentTop">
          <span class="titleFont">详情</span>
          <span class="cha" @click='showMB=false'></span>
        </div>
        <div class="contentMain">
          <ul style="padding-left: 0;margin-bottom: 0;">
            <li class="header">
              <span class="pro-li-span" style="width: 49%">厂商名</span>
              <span class="pro-li-span" style="width: 49%">扫码次数</span>
            </li>
          </ul>
          <ul class="choosepro-main">
            <li class="pro-li" v-for='item in detailInfo'>
              <span class="pro-li-span" style="width: 49%">{{item.vendorName}}</span>
              <span class="pro-li-span" style="width: 49%">{{item.count}}</span>
            </li>
          </ul>
        </div>
        <div class="contentBottom">
          <input class="content-botton" type="button" name="" value="确定" @click='showMB=false'>
        </div>
      </div>
    </div>
    <div class='right-top'>
      <ul class="right-top-ul">
        <li class="right-top-li"><p>订单量</p><p>{{orderCount}}</p></li>
        <li class="right-top-li"><p>商品成交量</p><p>{{shopOrder}}</p></li>
        <li class="right-top-li"><p>扫码次数</p><p>{{sysScanCount}}</p></li>
        <li class="right-top-li"><p>扫码异常</p><p>{{excepScanCount}}</p></li>
        <li class="right-top-li"><p>净扫码量</p><p>{{sysScanCount-excepScanCount}}</p></li>
        <li class="right-top-li"><p>新增订单</p><p>{{addDayOrder}}</p></li>

      </ul>
      <div class='map' id='scanmap' style='width: 80%;height: 440px;margin:20px auto'></div>
      <div class='map' id='shopmap' style='width: 80%;height: 440px;margin:20px auto'></div>
    </div>
        </div>
      </template>
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
      .content-botton{
        background-color: #00baff;
        color: #fff;
        border: 1px solid transparent;
        width: 110px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        border-radius: 5px;
        margin: 40px 30px;
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
      .choosepro-main{
        height: 288px;
      }
      .contentBox{
        height: 60%;
        top: 20%;
      }
      .pro-li:nth-of-type(1){
        background: #fff;
      }
      .header{
        height: 72px;
        line-height: 72px;
        background-color: #e7ebee;
      }
      </style>
      <script>
      import '../../assets/js/echarts.js'
      import common from '../../common.js'
      export default{
        data(){
          return{
            childCon:'我是子页面',
            orderCount:'',
            sysScanCount:'',
            excepScanCount:'',
            addDayOrder:'',
            shopOrder:'',
            shopList:'',
            scanList:'',
            showMB:false,
            detailInfo:null
          }
        },
        props:['userId'],
        methods:{
          init:function(){
            var self=this;
            var data={
              userId:self.userId
            }
            $.ajax({
              url:'https://ym-a.top/cloud_code/GET/mapCount/sysMapCount.do',
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
            console.log('error');
          }
        });
            $.ajax({
              url:'https://ym-a.top/cloud_code/wdcouponorder/getAllOrderCount.do',
              type:'GET',
              success:function(res){
                self.shopOrder=res.data; 
              },
              error:function(res){
                console.log('error');
              }
            });
            $.ajax({
              url:'https://ym-a.top/cloud_code/wdcouponorder/getDetailCount.do',
              type:'GET',
              success:function(res){
                self.shopList=res;
                self.hans(); 
              },
              error:function(res){
                console.log('error');
              }
            });
            $.ajax({
              url:'https://ym-a.top/cloud_code/GET/mapCount/getSystemScanCountByStartTimeAndEndTime.do',
              type:'GET',
              data:{
                userId:1
              },
              datatype:'json',
              success:function(res){
                self.scanList=res.scanCount;
                self.scans(); 
              },
              error:function(res){
                console.log('error');
              }
            });
          },
      // 商品扫码量
      scans:function() {
        var self=this;
        var date = [];
        var data = [];
        let length=Object.keys(self.scanList).length;
        for(let i=length-1;i>-1;i--){
          date.push(self.scanList[i]['days']);
          data.push(self.scanList[i]['coun']);
        }
        var echarts = require('echarts');
        var myChart = echarts.init(document.getElementById('scanmap'));
        var option = {
          tooltip: {
            trigger: 'axis',
            position: function (pt) {
              return [pt[0], '10%'];
            }
          },
          title: {
            left: 'center',
            text: '商品扫码量',
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
          },
          dataZoom: [{
            type: 'inside',
            start: length-31,
            end: length-1
          }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
              color: '#fff',
              shadowBlur: 3,
              shadowColor: 'rgba(0, 0, 0, 0.6)',
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }],
          series: [
          {
            name:'单日商品扫码量',
            type:'line',
            smooth:true,
            // symbol: 'none',
            symbolSize: 8,
            sampling: 'average',
            itemStyle: {
              normal: {
                color: 'rgb(255, 70, 131)'
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgb(255, 158, 68)'
                }, {
                  offset: 1,
                  color: 'rgb(255, 70, 131)'
                }])
              }
            },
            data: data
          }
          ]
        };
        myChart.setOption(option);

        //折线图的点击事件只有在点击折线上的具体时间点时才会触发，点击折线下方区域无法触发
        //配置series时，折线图的symbol属性不能为‘none’，否则鼠标无法点击到折线上的拐点

        myChart.on('click', function (params) {
          // console.log(params.name)
          self.showMB=true;
          var cliDay = params.name.split('-');
          var year = parseInt(cliDay[0]);
          var month = parseInt(cliDay[1])-1;
          var day = parseInt(cliDay[2]);
          var cliDate = new Date(year, month, day);
          var infoDay = new Date(cliDate.getTime() + 1000*60*60*24);
          if((infoDay.getMonth()+1)<10){
            var infoMonth = '0' + (infoDay.getMonth()+1);
          }else{
            var infoMonth = (infoDay.getMonth()+1).toString();
          }
          if(infoDay.getDate()<10){
            var infoD = '0' + infoDay.getDate();
          }else{
            var infoD = infoDay.getDate().toString();
          }
          var infoDate = infoDay.getFullYear() + '-' + infoMonth + '-' + infoD;
          var url='https://ym-a.top/cloud_code/GET/mapCount/getSystemScanInfo.do';
          var type='get';
          var data={
            userId:1,
            sTime:infoDate
          };
          var success=function(res){
            if(res.errorCode===0){
              self.detailInfo=res.data;
            }
          };
          common.Ajax(url,type,data,success)
        });
      },
      // 商品订单成交量
      hans:function() {
        var self=this;
        var date = self.shopList.time;
        let length1=date.length;
        var data = self.shopList.count;
        var echarts = require('echarts');
        var myChart = echarts.init(document.getElementById('shopmap'));

        var option = {
          tooltip: {
            trigger: 'axis',
            position: function (pt) {
              return [pt[0], '10%'];
            }
          },
          title: {
            left: 'center',
            text: '商品成交量（总量'+self.shopOrder+'）',
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
          },
          dataZoom: [{
            type: 'inside',
            start: length1-19,
            end: length1+16
          }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
              color: '#fff',
              shadowBlur: 3,
              shadowColor: 'rgba(0, 0, 0, 0.6)',
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }],
          series: [
          {
            name:'单日商品成交量',
            type:'line',
            smooth:true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              normal: {
                color: 'rgb(255, 70, 131)'
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgb(255, 158, 68)'
                }, {
                  offset: 1,
                  color: 'rgb(255, 70, 131)'
                }])
              }
            },
            data: data
          }
          ]
        };
        myChart.setOption(option);
      },
      showList:function(event){
        // //console.log();
        $(event.target).parents("li").find("ul").toggleClass("hidelist");
        $(event.target).parents("li").siblings().find("ul").addClass("hidelist")
      }
    },
    created:function(){
      this.init();
    }
  }
  </script>