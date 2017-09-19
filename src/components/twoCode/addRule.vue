<template>
	<div>
		<div class="mengban" v-show='showWarn'>
				<div class="warn">
					<div class="classifyHeader">
						<span style="display:block;height:48px;line-height:48px;">操作提示</span>
					</div>
					<div class="warnmain">
						{{warnText}}
					</div>
					<div class="warnbottom">
						<input type="button" name="" value="确定" @click='showWarn=false'>
					</div>
				</div>
			</div>
		<div class="right-main">
			<div class="right-main-top">
				<p class="right-main-top1">
					<span class="right-main-top-icon1"></span>
					您可以根据需求设置规则，定义企业的红包发放规则管理。
					<router-link to='/twoCode/rule'><span class='returnBtn'>返回</span></router-link>
				</p>
				<div class="right-main-top2">
					<p style="color: red;">重要提示：</p>
					<p style="color: #cbcbcc">1、红包类型有：“普通红包”和“裂变红包”。红包可以设置层次。
					</p>
					<p style="color: #cbcbcc">
					2、“一等奖中奖概率”、“最小金额”、“最大金额”可以根据需求定义。
					</p>
				</div>
			</div>
			<div class="right-main-bottom">
				<div class="messagebox">
					<span class="message-name">规则名称：</span>
					<input class="message-value" type="text" name="" v-model='ruleName'>
				</div>
				<!-- <div class="messagebox">
					<span class="message-name">红包规则类型：</span>
					<select class="message-value" type="text" name="">
						<option>层次红包</option>
						<option>定量红包</option>
					</select>
				</div> -->
				<div class="messagebox" style="position:relative">
					<span class="message-name">限制地区：</span>
					<div id="mapContainer" v-show='false'></div>
					<div id="tip">
					    省：<select id='province' style="width:100px" @change='search'></select>
					    市：<select id='city' style="width:100px" @change='search'></select>
					    区：<select id='district' style="width:100px" @change='search'></select>
					    <select id='street' style="width:100px" onchange= 'setCenter(this)' v-show='false'></select>
					    <br>
						<a href="javascript:void(0)" class="queding" @click='areacomplete'>确定</a>
						<span style="margin-left:5px;color:#999;">已确定的区域</span><span style="margin-left:5px;" v-for="area in cityName">{{area}}</span>

					</div>
				</div>
				<div class="messagebox" style="margin-top:58px">
					<span class="message-name">红包层次：</span>
					<select class="message-value" v-model='ruleLvel'>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</div>
				<div class="messagebox" v-show='ruleLvel>=1'>
					<span class="message-name">一等奖中奖率(%)</span>
					<input class="short" type="text" name="" v-model='oneRate'>
					<span class="message-name">最小金额：</span>
					<input class="short" type="text" name="" v-model='oneMinMoney'>
					<span class="message-name">最大金额：</span>
					<input class="short" type="text" name="" v-model='oneMaxMoney'>
				</div>
				<div class="messagebox" v-show='ruleLvel>=2'>
					<span class="message-name">二等奖中奖率(%)</span>
					<input class="short" type="text" name="" v-model='twoRate'>
					<span class="message-name">最小金额：</span>
					<input class="short" type="text" name="" v-model='twoMinMoney'>
					<span class="message-name">最大金额：</span>
					<input class="short" type="text" name="" v-model='twoMaxMoney'>
				</div>
				<div class="messagebox" v-show='ruleLvel>=3'>
					<span class="message-name">三等奖中奖率(%)</span>
					<input class="short" type="text" name="" v-model='threeRate'>
					<span class="message-name">最小金额：</span>
					<input class="short" type="text" name="" v-model='threeMinMoney'>
					<span class="message-name">最大金额：</span>
					<input class="short" type="text" name="" v-model='threeMaxMoney'>
				</div>
				<div class="messagebox" v-show='ruleLvel>=4'>
					<span class="message-name">四等奖中奖率(%)</span>
					<input class="short" type="text" name="" v-model='fourRate'>
					<span class="message-name">最小金额：</span>
					<input class="short" type="text" name="" v-model='fourMinMoney'>
					<span class="message-name">最大金额：</span>
					<input class="short" type="text" name="" v-model='fourMaxMoney'>
				</div>
				<div class="messagebox" v-show='ruleLvel>=5'>
					<span class="message-name">五等奖中奖率(%)</span>
					<input class="short" type="text" name="" v-model='fiveRate'>
					<span class="message-name">最小金额：</span>
					<input class="short" type="text" name="" v-model='fiveMinMoney'>
					<span class="message-name">最大金额：</span>
					<input class="short" type="text" name="" v-model='fiveMaxMoney'>
				</div>
				<div class="messagebox">
					<span class="message-name">发放者名称：</span>
					<input class="message-value" type="text" name="" v-model='send_name'>
				</div>
				<div class="messagebox">
					<span class="message-name">发放祝福语：</span>
					<textarea class="" v-model='wishing'></textarea>
				</div>
				<div class="button-group">
					<input class="delbutton" type="button" name="" value='确定' @click='confirm'>
					<router-link to='/twoCode/rule'><input class="delbutton" type="button" name="" value='取消'></router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import common from '../../common.js'
	import router from '../../router.js'
	export default{
		data(){
			return{
				ruleLvel:null,
				oneRate:0,
				ruleName:null,
				oneMinMoney:0,
				oneMaxMoney:0,	//一等奖最大金额
				twoRate:0,		//二等奖中奖概率
				twoMinMoney:0,	//二等奖最小金额
				twoMaxMoney:0,	//二等奖最大金额
				threeRate:0,	//三等奖中奖概率
				threeMinMoney:0,//三等奖最小金额
				threeMaxMoney:0,//三等奖最大金额
				fourRate:0,		//四等奖中奖概率
				fourMinMoney:0,	//四等奖最小金额
				fourMaxMoney:0,	//四等奖最大金额
				fiveRate:0,		//五等奖中奖概率
				fiveMinMoney:0,	//五等奖最小金额
				fiveMaxMoney:0,		//五等奖最大金额
				send_name:null,
				wishing:null,
				showWarn:false,
				warnText:null,
				map:null,
				district:null,
				polygons:[],
				citycode:null,
				adcode:[],
				province:[],
				province2:'',
				city:[],
				city2:'',
				district2:[],
				district3:'',
				temp:'',
				citySelect:null,
				districtSelect:null,
				areaSelect:null,
				citySelect:null,
				initData:null,
				cityN:'',
				cityName:[],
			}
		},
		watch:{
			citycode:function(){
				console.log(this.citycode)
			}
		},
		props:['datas'],
		methods:{
      		init:function(){
      			var self=this;
      			$.getScript('https://webapi.amap.com/maps?v=1.4.0&key=7dea085abd95f70637b9359db6780585&plugin=AMap.DistrictSearch',self.area)
      			$.getScript('https://webapi.amap.com/demos/js/liteToolbar.js');
      		},
      		// 省市区
      		area:function(){
      			var self=this;
              	var AMap=require('AMap');
              	// console.log(AMap)
			    self.citySelect = document.getElementById('city');
			    self.districtSelect = document.getElementById('district');
			    self.areaSelect = document.getElementById('street');
			    self.map = new AMap.Map('mapContainer', {
			        resizeEnable: true,
			        center: [116.30946, 39.937629],
			        zoom: 3
			    });
			    AMap.service('AMap.DistrictSearch',function(){//回调函数
				    //实例化DistrictSearch
				    self.district = new AMap.DistrictSearch({
					        level : 1,   //返回下一级行政区
					        subdistrict :false  //最后一级返回街道信息  
						});
				    //TODO: 使用districtSearch对象调用行政区查询的功能
				    self.district.search('中国', function(status, result) {
				        if(status=='complete'){
				        	self.initData=result.districtList[0];
				            self.getData(result.districtList[0]);
				        }
				    });
				})
			},
			areacomplete:function(){
				var self=this;
				self.adcode.push(self.citycode);
				self.province.push(self.province2);
				self.city.push(self.city2);
				self.district2.push(self.district3);
				self.cityName.push(self.cityN);
				self.cityN='';
				self.polygons=[];
				document.getElementById('province').innerHTML='';
				self.getData(self.initData,'province');
			},
			    //注意：需要使用插件同步下发功能才能这样直接使用
			getData:function(data,level) {
				var self=this;
				// console.log(data)
		        var bounds = data.boundaries;
		        if (bounds) {
		            for (var i = 0, l = bounds.length; i < l; i++) {
		                var polygon = new AMap.Polygon({
		                    map: self.map,
		                    strokeWeight: 1,
		                    strokeColor: '#CC66CC',
		                    fillColor: '#CCF3FF',
		                    fillOpacity: 0.5,
		                    path: bounds[i]
		                });
		                // console.log(polygon);
		                self.polygons.push(polygon);
		            }
		            self.map.setFitView();//地图自适应
		        }
		       
		       
		        
		        //清空下一级别的下拉列表
		        if (level === 'province') {
		            self.citySelect.innerHTML = '';
		            self.districtSelect.innerHTML = '';
		            self.areaSelect.innerHTML = '';
		        } else if (level === 'city') {
		            self.districtSelect.innerHTML = '';
		            self.areaSelect.innerHTML = '';
		        } else if (level === 'district') {
		            self.areaSelect.innerHTML = '';
		        }

		        var subList = data.districtList;
		        // console.log(data.districtList)
		        if (subList) {
		            var contentSub = new Option('--请选择--');
		            var curlevel = subList[0].level;
		            var curList =  document.querySelector('#' + curlevel);
		            curList.add(contentSub);
		            for (var i = 0, l = subList.length; i < l; i++) {
		                var name = subList[i].name;
		                var levelSub = subList[i].level;
		                // self.cityCode = subList[i].citycode;
		                // console.log(self.citycode);
		                contentSub = new Option(name);
		                contentSub.setAttribute("value", levelSub);
		                contentSub.center = subList[i].center;
		                contentSub.adcode = subList[i].adcode;
		                curList.add(contentSub);
		            }
		        }
		    },
		    search:function(obj) {
		    	var self=this;
		    	obj=obj.target;
		        //清除地图上所有覆盖物
		        for (var i = 0, l =  self.polygons.length; i < l; i++) {
		            self.polygons[i].setMap(null);
		        }
		        var option = obj[obj.options.selectedIndex];
		        var keyword = option.text; //关键字
		        var adcode = option.adcode;
		        self.district.setLevel(option.value); //行政区级别
		        self.district.setExtensions('all');
		        //行政区查询
		        //按照adcode进行查询可以保证数据返回的唯一性
		        self.temp=keyword;
		        self.district.search(adcode, function(status, result) {
		        	if(result.districtList[0].districtList[0].level=='city'){
		        		self.province2=self.temp;
		        		self.cityN=self.temp;
		        		self.temp='';
		        	}else if(result.districtList[0].districtList[0].level=='district'){
		        		self.city2=self.temp;
		        		self.cityN+=self.temp;
		        		self.temp='';

		        	}else if(result.districtList[0].districtList[0].level=='street'){
		        		self.district3=self.temp;
		        		self.cityN+=self.temp;
		        		self.temp='';

		        	}
		        	self.citycode=result.districtList[0].adcode;
		        	// self.cityN+=result.districtList[0].name;
		        	console.log(result);
		            if(status === 'complete'){
		                self.getData(result.districtList[0],obj.id);
		            }
		        });
		    },
			//提交
			confirm:function(){
				var self=this;
				if(self.ruleName===null){
					self.showWarn=true;
					self.warnText="请输入规则名称";
					return
				}
				if(self.ruleLvel===null){
					self.showWarn=true;
					self.warnText="请选择红包层次";
					return
				}
				var url='http://192.168.1.108:8080/cloud_code/ADD/redEnv/rule.do';
				var type='post';
				var data={
					vendorId:self.datas.vendorId,
					ruleName:self.ruleName,
					ruleLvel:self.ruleLvel,
					oneRate:self.oneRate,
					oneMinMoney:self.oneMinMoney,
					oneMaxMoney:self.oneMaxMoney,
					twoRate:self.twoRate,
					twoMinMoney:self.twoMinMoney,
					twoMaxMoney:self.twoMaxMoney,
					threeRate:self.threeRate,
					threeMinMoney:self.threeMinMoney,
					threeMaxMoney:self.threeMaxMoney,
					fourRate:self.fourRate,
					fourMinMoney:self.fourMinMoney,
					fourMaxMoney:self.fourMaxMoney,
					fiveRate:self.fiveRate,
					fiveMinMoney:self.fiveMinMoney,
					fiveMaxMoney:self.fiveMaxMoney,
					send_name:self.send_name,
					wishing:self.wishing,
					adcode:self.adcode,
					province:self.province,
					city:self.city,
					district:self.district2
				};

				var success=function(res){
					if(res.statuscode===1){
						router.push({path:'rule'});
					}
				};
				common.Ajax(url,type,data,success)
			},

		},
	    mounted:function(){
		      this.init();
		    },
	}
</script>

<style scoped>
	/*@import '../../assets/css/common.css'*/
	.right-main-top{
			width: 90%;
			margin: auto;
			padding-top: 60px;
			padding-bottom: 40px;
			border-bottom: 1px solid #e7ebee;
			text-align: left;
		}
		.right-main-top-icon1{
			width: 18px;
			height: 18px;
			background: url("../../assets/img/icon_tishi.png") no-repeat;
			float: left;
			margin-right: 8px;
		}
		.returnBtn{
			float: right;
		}
		.right-main-bottom{
			text-align: left;
		}
		.right-main-bottom{
			margin-top: 70px
		}
		.message-name{
			display: inline-block;
			width: 115px;
			text-align: right;
		}
		.messagebox{
			margin-top: 20px;
			margin-left: 40px;
		}
		.message-value{
			width: 230px;
			height: 36px;
			border-radius: 5px;
			border: 1px solid #e7e7eb;
			margin-left: 30px;
			padding-left: 10px;
		}
		.sanjiao:after{
			content: "";
		    display: inline-block;
		    width: 5px;
		    height: 5px;
		    background-color: #000;
		}
		.choosepro{
		width: 1000px;
		height: 755px;
		background: #fff;
		margin-left: 15%;
		margin-top: 73px;
		border-radius: 10px;
	}
	.choosepro-top{
		height: 75px;
		line-height: 75px;
		text-align: left;
		padding-left: 72px;
		font-size: 20px;
	}
	.choosepro-main{
		padding-left: 0;
		height: 495px;
		overflow-y: scroll;
	}
	.pro-li{
		height: 45px;

	}
	.pro-li-span{
		width: 13%;
		height: 45px;
		line-height: 45px;
	}
	.header .pro-li-span{
		height: 45px;
		line-height: 45px;
	}
	.page-button-checkbox{
		text-align: left;
		padding-left: 33px;
		background:#e7ebee;
	}
	.allselect{
		margin-right: 30px;
	}
	.last{
		width: 150px;
	}
	.returnBtn{
		float: right;
		margin-right: 50px;
	}
	.button-group{
		margin-left: 190px;
		margin-top: 100px;
		margin-bottom: 40px;
	}
	.delbutton{
		width: 90px;
		height: 34px;
		margin-right: 40px;
	}
	.delbutton:hover{
		background: #00baff;
		color: #fff;
	}
	.right-main-top2{
		margin-left: 25px;
	}
	.short{
		width: 84px;
		height: 36px;
		border-radius: 5px;
		border: 1px solid #e7e7eb;
		margin-left: 30px;
		padding-left: 10px;

	}
	textarea{
		width: 230px;
		height: 127px;
		resize: none;
		border-radius: 5px;
		border: 1px solid #e7e7eb;
		padding-left: 10px;
		margin-left: 30px;
		vertical-align: top;
	}
	#mapContainer{
		width: 60%;
		height: 500px
	}
    #tip {
        background-color: #fff;
        padding:0 10px;
        border-radius: 5px;
    	border: 1px solid #e7e7eb;
        position: absolute;
        font-size: 12px;
        left: 148px;
        top: -9px;
        border-radius: 3px;
        line-height: 36px;
    }
    #tip>select{
        border-radius: 5px;
   		border: 1px solid #e7e7eb;
    }
    .queding{
    	text-align: center;
    	text-decoration: none;
    	display: inline-block;
    	width: 40px;
    	line-height: 20px;
	    color: #00baff;
	    border: 1px solid #00baff;
	    -webkit-appearance: none;
	    -moz-appearance: none;
	    appearance: none;
	    background-color: #fff;
	    outline: none;
	    border-radius: 3px;
    }
</style>