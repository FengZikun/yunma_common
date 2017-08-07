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
        <p><span class='p_left'>近7天扫码量曲线图</span><span class='p_right'>({{startTime}}至{{endTime}})</span></p>
      </div>
      <div class='zhex' id='zhex' style='width: 100%;height: 300px;' v-on:load="hans"></div>
      <div class='two_center_tit'>
        <p><span class='p_left'>扫码总量分布图</span><span class='p_right'>(截至日期:{{endTime}})</span></p>
      </div>
      <div class='map' id='map' style='width: 100%;height: 640px;' v-on:load="maph"></div>
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
    min-height: 900px;
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
  import cityMap from '../china-main-city-map.js'
  import province from '../province.js'
  import haha from '../hah.js'
  // import _ from 'underscore'

  export default{
    data(){
      return{
        childCon:'我是子页面',
        securityCodeScanCount:null,
        joinActivCount:null,
        daylyJoinActivCount:null,
        dayTotalScanCount:null,
        edata:'',
        emap:'',
        startTime:null,
        endTime:null
      }
    },
    mounted(){
    },
    props:['datas'],
    methods:{
      init:function(){
        var self=this;
        var url='https://ym-a.top/cloud_code/GET/mapCount/mapSecurityCount.do';
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
          url:'https://ym-a.top/cloud_code/GET/mapCount/vendorWeekMapCount.do',
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
        $.ajax({
          url:'https://ym-a.top/cloud_code/GET/mapCount/count.do',
          type:'post',
          data:{
            vendorId:self.datas.vendorId
          },
          datatype:'json',
          success:function(res){
            console.log(res);
            self.emap=res;
            console.log(res)
            self.maph();
          },
          error:function(res){
            self.maph();  
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
          if(i==0){self.endTime=self.edata[i]['scanTime']}
            if(i==length-1){self.startTime=self.edata[i]['scanTime']}
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
            trigger: 'item'
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
            data:this.emap.data
            // data:[
            // {name:'广东', selected:true}
            // ]
          }
          ],
          toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {},
            }
          },
          
        };
        chart.setOption(option);
        chart.on('click',function(params){
          //从中国地图进省地图
          if(params.seriesName=='中国'){
            var thisName=params.name
            var code=province[thisName];
            var url='http://192.168.1.107:8080/cloud_code/GET/agent/getCityData.do';
            var type='get';
            var data={
              NameOrCode:code
            }
            var success=function(data){
              var cityArr=[]
              for(var i=0,len=data.features.length;i<len;i++){
                var cityObj={name:data.features[i].properties.name, selected:false, value:10}
                cityArr.push(cityObj);
              }
              echarts.registerMap('sheng', data);
              chart.setOption({
                series: [{
                  name:thisName+'省',
                  type: 'map',
                  mapType: 'shanxi1',
                  map: 'sheng',
                  data:cityArr
                  // data:[{name:'渭南市',selected:true}]
                }]
              });
            }
            common.Ajax(url,type,data,success)
          }

          //省地图进市地图
          if(params.seriesName.match('省')=='省'){
            var thisName=params.name;
            var code=cityMap[thisName];
            var url='http://192.168.1.107:8080/cloud_code/GET/agent/getMainCityData.do';
            var type='get';
            var data={
              code:code
            }
            var success=function(data){
              var cityArr=[]
              for(var i=0,len=data.features.length;i<len;i++){
                var cityObj={name:data.features[i].properties.name, selected:false}
                cityArr.push(cityObj);
              }
              echarts.registerMap('shi', data);
              chart.setOption({
                series: [{
                  name:'市',
                  type: 'map',
                  map: 'shi',
                  data:cityArr
                }]
              });
            }
            common.Ajax(url,type,data,success)
          }

          //热力图
          if(params.seriesName=='市'){
            // console.log(haha)

              var points = [].concat.apply([], haha.map(function (track) {
                return track.map(function (seg) {
                  return seg.coord.concat([1]);
                });
              }));
              chart.setOption(option = {
                animation: false,
                bmap: {
                  center: [120.13066322374, 30.240018034923],
                  zoom: 14,
                  roam: true
                },
                visualMap: {
                  show: false,
                  top: 'top',
                  min: 0,
                  max: 5,
                  seriesIndex: 0,
                  calculable: true,
                  inRange: {
                    color: ['blue', 'blue', 'green', 'yellow', 'red']
                  }
                },
                series: [{
                  type: 'heatmap',
                  coordinateSystem: 'bmap',
                  data: points,
                  pointSize: 5,
                  blurSize: 6
                }]
              });
              if (!app.inNode) {
        var bmap = chart.getModel().getComponent('bmap').getBMap();
        console.log(bmap)
        bmap.addControl(new BMap.MapTypeControl());
      }
          }
          
        });

        //重置按钮
        chart.on('restore',function(params){
          chart.setOption(option);
          chart.setOption(option);
        })
      },
    },
    mounted:function(){
      this.init();
    },
    // updated(){
    //   this.init();

    // }
  }
</script>
