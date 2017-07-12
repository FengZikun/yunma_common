<template>
  <div class="right-main">
    <div class='two_top'>
      <div class='two_top_left'>
        <div class='one'>
          <p class="p1">{{securityCodeScanCount}}</p>
          <p class="p2">扫码总量</p>
        </div>
        <div class='two'>
          <p class="p1">{{joinActivCount}}</p>
          <p class="p2">活动参与总量</p>
        </div>
      </div>
      <div class='two_top_right'>
        <ul>
          <li>昨日扫码量：<span>{{dayTotalScanCount}}</span></li>
          <li>标识被扫量：<span>16</span></li>
          <li>昨日活动参与量：<span>{{daylyJoinActivCount}}</span></li>
          <li>标识总量：<span>599</span></li>
        </ul>
      </div>
    </div>
    <div class='two_center'>
      <div class='two_center_tit'>
        <p><span class='p_left'>近7天扫码量曲线图</span><span class='p_right'>(2017-04-10至2017-04-16)</span></p>
      </div>
      <div class='zhex' id='zhex' style='width: 100%;height: 300px;' v-on:load="hans"></div>
      <div class='two_center_tit'>
        <p><span class='p_left'>扫码总量分布图</span><span class='p_right'>(截至日期:2017-04-16)</span></p>
      </div>
      <div class='map' id='map' style='width: 100%;height: 400px;' v-on:load="maph"></div>
    </div>
  </div>

</template>
<style scoped>
  .two_left {
    width: 102%;
    float: left;
    background-color: #313541;
    height: 1300px;
  }
  .two_right {
    width: 102%;
    float: right;
    background-color: #e8e8e8;
    height: 1300px;
  }
  .two_menu {
    width: 100%;
    margin-top: 40px;
  }
  .two_menu li {
    width: 100%;
  }
  .two_menu li a {
    color:#fff;
    font-size: 16px;
  }
  .two_menu li .arrow {
    margin-left: 40px;
    font-family: 'simsun';
  }
  .two_menu li a:hover {
    text-decoration: none;
    color:#00BAFF;
  }
  .two_menu .sub1 {
    width: 100%;
  }
  .two_menu .sub1 li {
    line-height: 100%;
    margin-top: 10px;
  }
  .two_menu .two_sub2 {
    width: 100%;
  }
  .two_menu .two_sub2 li {
    line-height: 100%;
    margin-top: 18px;
    text-align: left;
    margin-left: 37%;
  }
  .two_menu .sub3 {
    width: 100%;
  }
  .two_menu .sub3 li {
    line-height: 100%;
    margin-top: 10px;
    /*text-align: left;*/
  }
  .two_menu .two_li_1 a {
    margin-right: 31%;
  }
  @media screen and (max-width:1366px) {
    .two_menu .two_li_1 a {
      padding-right:16%;
    }
  }
  .two_menu .two_li_2 .two_sub2 {
    display: none;
  }
  .two_menu .two_li_3 .two_sub2 {
    display: none;
  }
  .two_right .two_top {
    width: 90%;
    height: 200px;
    margin:0 auto;
    border-radius: 10px;
    background-color: #fff;
    margin-top: 40px;
  }
  .two_top_left {
    display: flex;
    justify-content: space-around;
    width: 40%;
    height: 200px;
    color:#fff;
    float: left;
  }
  .two_right .two_top .two_top_right {
    width: 58%;
    height: 150px;
    margin-top: 25px;
    border-left: 1px solid #ccc;
    float: right;
  }
  .two_right .two_top .two_top_right ul {
    width: 100%;
    margin-left: 20px;
    margin-top: 20px;
  }
  .two_right .two_top .two_top_right ul li {
    width: 50%;
    float: left;
    text-align: left;
    font-size: 16px;
    font-family: 'microsoft yahei';
  }
  .two_center {
    width: 90%;
    margin: 0 auto;
    height: 900px;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 20px;
  }
  .two_center .two_center_tit {
    border-bottom: 1px solid #ccc;
  }
  .two_center .two_center_tit p {
    text-align: left;
    padding-top: 20px;
  }
  .two_center .two_center_tit p .p_left {
    padding-top: 30px;
    text-align: left;
    padding-left:20px;
    font-size: 16px;
    color:#00BAFF;
  }
  .two_center .two_center_tit p .p_right {
    color: #6d7776;
    padding-left: 5px;
  }
  .two_center .zhex {
    margin-top: 20px;
  }
  .two_center .map {
    margin-top: 20px;
  }
  .two_menu li .img {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  .two_menu li .img1 {
    background: url(../assets/img/icon_gaikuang.png) no-repeat;
  }
  .two_menu li .img2 {
    background: url(../assets/img/icon_qiye_xinxi.png) no-repeat;
  }
  .two_menu li .img3 {
    background: url(../assets/img/icon_dingdan.png) no-repeat;
  }
  .two_menu li .img4 {
    background: url(../assets/img/icon_chanpin.png) no-repeat;
  }
  .gongz {
    width: 60%;
    margin:0 auto;
    margin-top: 40px;
    padding-top: 20px;
  }
  .gongz p {
    color:#6d7776;
  }
  .one,.two{
    width: 170px;
    height: 170px;
    border-radius: 50%;
  }
  .one{
    background-color: #58cf9b;
  }
  .two{
    background-color: #f8bb46;
  }
  .p1{
    height: 32px;
    line-height: 32px;
    color: #fff;
    text-align: center;
    margin-top: 45px;
    font-size: 28px;
    font-weight: 600px;
  }
  .p2{
    height: 22px;
    line-height: 22px;
    color: #fff;
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
  }
</style>
<!--<script src='../assets/js/china.js'></script>-->
<script>
  import '../assets/js/echarts.js'
  import '../assets/js/china.js'
  import common from '../common.js'
  export default{
    data(){
      return{
        childCon:'我是子页面',
        securityCodeScanCount:null,
        joinActivCount:null,
        daylyJoinActivCount:null,
        dayTotalScanCount:null,
        edata:'',
      }
    },
    mounted(){
      this.maph();
    },
    props:['datas'],
    methods:{
      init:function(){
        var self=this;
        var url='http://120.77.149.115/cloud_code/GET/mapCount/mapSecurityCount.do';
        var type='get';
        var data={
          userId:self.datas.userId,
          vendorId:self.datas.vendorId
        };
        var success=function(res){
          console.log(res);
          self.securityCodeScanCount=res.securityCodeScanCount;
          self.joinActivCount=res.joinActivCount;
          self.daylyJoinActivCount=res.daylyJoinActivCount;
          self.dayTotalScanCount=res.dayTotalScanCount;
        };

        common.Ajax(url,type,data,success)
        $.ajax({
          url:'http://project.ym-b.top/cloud_code/GET/mapCount/vendorWeekMapCount.do',
          type:'post',
          data:{
            userId:self.datas.userId,
            vendorId:self.datas.vendorId
          },
          datatype:'json',
          success:function(res){
            // console.log(res.weekScanCount[1]);
            self.edata=res.weekScanCount;
            self.hans();
          },
          error:function(res){
            console.log(res)
          }
        })
      },
      hans:function() {
        var self=this;
        var date=[];
        var dateVal=[];
        var length=Object.keys(self.edata).length;
        var echarts = require('echarts');
        for(var i=length-1;i>-1;i--){
          date.push(self.edata[i]['scanTime']);
          dateVal.push(self.edata[i]['coun']);
        }
        // console.log(date);
        // console.log(dateVal)
        var myChart = echarts.init(document.getElementById('zhex'));

        var option = {
          tooltip: {
            trigger: 'axis'
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: date
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} '
            }
          },
          series: [
          {
            name:'扫码',
            type:'line',
            data:dateVal,
            markPoint: {
              data: [
              {type: 'max', name: '最大值'},
              {type: 'min', name: '最小值'}
              ]
            },
            markLine: {
              data: [
              {type: 'average', name: '平均值'}
              ]
            }
          },
          ]
        };
        myChart.setOption(option);
      },
      maph:function () {
        var echarts = require('echarts');
        var chart = echarts.init(document.getElementById('map'));
        chart.setOption({
          series: [{
            type: 'map',
            map: 'china'
          }]
        });
        var option = {
          tooltip: {
            trigger: 'item',
            formatter: '{b}'
          },
          series: [
          {
            name: '中国',
            type: 'map',
            mapType: 'china',
            selectedMode : 'multiple',
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            data:[
            {name:'广东', selected:true}
            ]
          }
          ]
        };
        chart.setOption(option);
      }
    },
    created:function(){
      this.init();
    }
  }
</script>
