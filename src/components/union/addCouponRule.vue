<template>
	<div>
		<div class="mengban" v-show='showWarn2'>
			<div class="warn">
				<div class="classifyHeader">
					<span style="display:block;height:48px;line-height:48px;">操作提示</span>
				</div>
				<div class="warnmain">
					{{warnText}}
				</div>
				<div class="warnbottom">
					<input type="button" name="" value="确定" @click='showWarn2=false'>
				</div>
			</div>
		</div>
		<div class="mengban" v-show='showMB1'>
			<div class="proclassify">
				<ul class="ul5" @click='selOrder'>
					<li v-for='item in otherVendor'><span class="check-box checkshu" v-bind:data-id='item.id'></span>{{item.vendorName}}</li>
				</ul>
				<input class="delbutton" type="button" name="" value="确认" @click='confirmOrder'>
				<input class="delbutton" type="button" name="" value="取消" @click='hide'>
			</div>
		</div>
		<div class="right-main">
			<div class='right-main-top'>
				<p class='right-main-top1'>
					<span class='right-main-top-icon1'></span>
					<span class='top_two'>发放规则是一个以您公司产品为业务的投放平台，设置您想投放的合作公司的优惠券</span>
				</p>
				<p class='right-main-top2'>
					<span style="color:red">重要提示：</span><br>
					<span>1、发放周期可以选择默认，或者自定义时间。</span><br>
					<span>2、选择企业可以定义模块标签，方便以后管理，设置黑名单以后自动屏蔽该名单的所有企业。</span><br>
					<span>3、发放范围可以设置您的产品或批次的单项或者多项投放。</span>
				</p>
			</div>
			<div class="right-main-bottom">
				<div class="messagebox">
					<span class="message-name">规则名：</span>
					<input class="message-value" type="text" maxlength="20" name="" v-model='ruleName'>

					<span class="after">（限20字内）</span>
				</div>
				<div class="messagebox">
					<span class="message-name">发放周期：</span>
					<div style="display:inline-block;margin-left:20px;">
						<input type="radio" name="time" id="a" class="radios" v-model='myTime' v-bind:value='0'><label for="a" class="radios">长期</label>
						<input type="radio" name="time" id="b" class="radios" v-model='myTime' v-bind:value='1'><label for="b" class="radios">自定义</label>
						<div style="display:inline-block;" v-show='myTime==1'>
							<input class="message-value" type="date" name="" v-model='startTime'>至
							<input class="message-value" type="date" name="" v-model='endTime'>
							<span class="after">（结束时间不选择则为无限期）</span>
						</div>
						
					</div>
				</div>
				<div class="CcontentBox">
					<div class="contentTitle">
						<span class="message-name">发放内容：</span>
						<span class="after2">（选择需要在扫码界面发放那些其他厂商优惠券）</span>
					</div>
					<div class="content1">
						<div class="content1-top">
							<a href="javascript:void(0)">
								<div v-bind:class='{initClass:isBlack,button:!isBlack}' @click='changeBlack'>
									黑名单
								</div></a>
								<a href="javascript:void(0)">
									<div @click='changeWhite' v-bind:class='{initClass:isWhite,button:!isWhite}'>
										白名单
									</div></a>
									<br>
									<span class="after" style="line-height:27px;">注：黑名单表示名单内内容不会发放，其他均可；白名单表示在名单内内容发放（白名单最少设置三个商家）。</span>
								</div>
								<div class="content1-bottom">
									<div class="content1-left">
										<div class="left-cell" v-for='(item,index) in vendorArr' v-if='vendorArr.length!=0'>
											<!-- <div class="quan" @click='delVendor' v-bind:data-index='index'></div> -->
											{{item.vendorName}}
										</div>
									</div>
									<div class="content1-right">
										<ul class="ul1">
											<a href="javascript:void(0)" @click='mengban1'><li style="background-color:#3896ff;color:#fff;border-color:#3896ff">添加</li></a>
											<!-- <a href="javascript:void(0)" @click='queren'><li>确认</li></a> -->
											<a href="javascript:void(0)" @click='clearVendor'><li>清空</li></a>
										</ul>
									</div>
								</div>
							</div>
							<!-- <div class="content2">
								<div class="content1-top2">
									已选择
								</div>
								<ul class="ul4">
									<li v-for='item in showList'>{{item.vendorName}}</li>
								</ul>
							</div> -->
						</div>
						<div class="CcontentBox">
							<div class="contentTitle">
								<span class="message-name">发放载体：</span>
								<span class="after2">（选择在指定产品的扫码页面投放其他厂商的优惠券）</span>
							</div>
							<div class="content1">
								<div class="content1-top2">
									选择产品
								</div>
								<div class="content1-bottom2">
									<div class="content1-left2">
										<ul class="ul2">
											<li><span class="check-box checkshu" @click='selectThis'></span>全部</li>
											<li><span class="check-box checkshu" @click='selectThis'></span>产品</li>
											<li><span class="check-box checkshu" @click='selectThis'></span>订单</li>
										</ul>
									</div>
									<div class="content1-right2">
										<ul class="ul3" @click='selectPro'>
											<li v-for='item in proArr'><span class="check-box checkshu" v-bind:data-id='item.id'></span>{{item.productName||item.id}}</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="content2">
								<div class="content1-top2">
									<span>已选择（{{selectedPro.length}}）</span>
									<input class="clear" type="button" name="" value="清空" @click='clearPro'>
								</div>
								<ul class="ul4">
									<li v-for='(item,index) in selectedPro'>
										{{item}}
										<!-- <div class="quan2" v-bind:data-index='index'></div> -->
									</li>
								</ul>
							</div>
						</div>
						<div class="right-main-bottom">
							<input class="next" type="button" name="" value="确认" @click='tijiao'>
						</div>
					</div>
				</div>
			</div>
		</template>

		<script>
			import common from '../../common.js'
			import router from '../../router.js'
			import _ from 'underscore'
			export default{
				data(){
					return{
						showWarn2:false,
						myTime:0,
						proArr:[],
						selectedPro:[],
						proIndex:0,
						otherVendor:null,
						showMB1:false,
						vendorArr:[],
						showList:[],
						isBlack:true,
						isWhite:false,
						ruleName:null,
						startTime:'1970-01-01',
						endTime:'2100-01-01',
						blackList:[],
						whiteList:[],
						isBlackWhite:1,
						isScope:null,
						productList:[],
						orderList:[],
						warnText:null
					}
				},
				props:['vendorId'],
				methods:{
					init:function(){
						var self=this;
				//黑名单
				var url='https://ym-a.top/cloud_code/GET/couponRule/vendorOther.do';
				var type='get';
				var data={
					vendorId:self.vendorId
				}
				var success=function(res){
					self.otherVendor=res.data;
				}
				common.Ajax(url,type,data,success)
			},

			//选择载体
			selectThis:function(){
				var self=this;
				var checkBox=$(event.target);
				if(checkBox.hasClass('check-box')){
					checkBox.removeClass('check-box').addClass('has-select');
					checkBox.parent().siblings().find('.checkshu').addClass('check-box').removeClass('has-select');

					if($(checkBox).parent().text()==='产品'){
						self.getProInfo();
						self.isScope=4;
					}else if($(checkBox).parent().text()==='订单'){
						self.getOrder();
						self.isScope=5;
					}else if($(checkBox).parent().text()==='全部'){
						self.isScope=3;
						self.clearPro();
						self.proArr=null;
					}
				}else{
					checkBox.addClass('check-box').removeClass('has-select');
					self.isScope=null;
					self.proArr=null;
				};

			},

			//选择产品
			selectPro:function(){
				var self=this;
				var cdom=$(event.target)[0];
				if(cdom.nodeName=='LI'){
					if($(cdom).children().hasClass('has-select')){
						// $(cdom).children().removeClass('has-select').addClass('check-box')
						return
						// var a=$(cdom).attr('data-index');
						// self.selectedPro.splice(a,1)
						// self.proIndex-=1;
					}else{
						$(cdom).children().addClass('has-select')
						self.selectedPro.push($(cdom).text())
						// var thisIndex=self.proIndex;
						// $(cdom).attr('data-index',thisIndex);
						// self.proIndex+=1;
					}
				}else{
					if(!$(cdom).hasClass('has-select')){
						$(cdom).addClass('has-select')
						self.selectedPro.push($(cdom).parent().text())
					}
				}
			},

			//获取所有产品
			getProInfo:function(){
				var self=this;
				var url='https://ym-a.top/cloud_code/GET/couponRule/product.do';
				var type='get';
				var data={
					vendorId:self.vendorId
				};
				var success=function(res){
					self.proArr=res.data;
					self.clearPro();
				};
				common.Ajax(url,type,data,success);
			},

			//获取订单
			getOrder:function(){
				var self=this;
				var url='https://ym-a.top/cloud_code/GET/couponRule/order.do';
				var type='get';
				var data={
					vendorId:self.vendorId
				};
				var success=function(res){
					self.proArr=res.data;
					self.clearPro();
				};
				common.Ajax(url,type,data,success);
			},

			//清空
			clearPro:function(){
				var self=this;
				self.selectedPro=[];
				$('.ul3 .checkshu').removeClass('has-select').addClass('check-box');
			},

			//蒙版
			mengban1:function(){
				var self=this;
				self.showMB1=true;
			},

			hide:function(){
				var self=this;
				self.showMB1=false;
			},

			//选商家
			selOrder:function(){
				var self=this;
				var selVen=$(event.target)[0];
				if(selVen.nodeName=='LI'){
					if($(selVen).find('.checkshu').hasClass('has-select')){
						$(selVen).find('.checkshu').removeClass('has-select').addClass('check-box');
					}else{
						$(selVen).find('.checkshu').addClass('has-select').removeClass('check-box');
					}
				}else{
					if($(selVen).hasClass('has-select')){
						$(selVen).removeClass('has-select').addClass('check-box');
					}else{
						$(selVen).addClass('has-select').removeClass('check-box');
					}
				}
				
				
			},

			//确认已选
			confirmOrder:function(){
				var self=this;
				self.vendorArr=[];
				for(var i=0,len=$('.ul5 .has-select').length;i<len;i++){
					var obj={
						id:parseInt($('.has-select').eq(i).attr('data-id')),
						vendorName:$('.has-select').eq(i).parent().text()
					};
					self.vendorArr.push(obj);
					$('.has-select').eq(i).parent().addClass('hidelist');
				};
				if(self.isBlack){
					self.blackList=_.pluck(self.vendorArr,'id');
				}else{
					self.whiteList=_.pluck(self.vendorArr,'id');
				}
				self.showMB1=false;
			},

			//删除已选
			delVendor:function(){
				var self=this;
				//console.log($(event.target).attr('data-index'))
			},

			//清空
			clearVendor:function(){
				var self=this;
				self.vendorArr=[];
				self.showList=[];
				$('.ul5 .checkshu').parent().removeClass('hidelist')
				$('.ul5 .has-select').removeClass('has-select').addClass('check-box')

			},

			//确认
			// queren:function(){
			// 	var self=this;
			// 	self.showList=self.vendorArr;
			// 	if(self.isBlack){
			// 		self.blackList=_.pluck(self.vendorArr,'id');
			// 	}else{
			// 		self.whiteList=_.pluck(self.vendorArr,'id');
			// 	}
				
				
			// },

			//黑名单
			changeBlack:function(){
				var self=this;
				self.isBlack=true;
				self.isWhite=false;
				self.isBlackWhite=1
				self.clearVendor();
				self.whiteList=[];
			},

			//白名单
			changeWhite:function(){
				var self=this;
				self.isBlack=false;
				self.isWhite=true;
				self.isBlackWhite=2;
				self.clearVendor();
				self.blackList=[];
			},

			//提交创建
			tijiao:function(){
				var self=this;
				self.productList=[];
				self.orderList=[];
				if(self.ruleName===null){
					self.showWarn2=true;
					self.warnText='请填写规则名'
					return
				}
				if(self.isWhite&&self.whiteList.length<3){
					self.showWarn2=true;
					self.warnText='如设置白名单，请至少选择三个商家';
					return
				}
				if(self.isScope===null){
					self.showWarn2=true;
					self.warnText='请选择发放载体';
					return
				}
				var url='https://ym-a.top/cloud_code/ADD/couponRule/info.do';
				var type='post';
				if(self.isScope==4){
					for(var i=0,len=$('.ul3 .has-select').length;i<len;i++){
						self.productList.push(parseInt($('.ul3 .has-select').eq(i).attr('data-id')))
					}
				};
				if(self.isScope==5){
					for(var i=0,len=$('.ul3 .has-select').length;i<len;i++){
						self.orderList.push(parseInt($('.ul3 .has-select').eq(i).attr('data-id')))
					}
				};
				var data={
					vendorId:self.vendorId,
					ruleName:self.ruleName,
					startTime:self.startTime,
					endTime:self.endTime,
					blackList:self.blackList,
					whiteList:self.whiteList,
					isBlackWhite:self.isBlackWhite,
					isScope:self.isScope,
					productList:self.productList,
					orderList:self.orderList,
					timeType:self.myTime,
				}

				var success=function(res){
					//console.log(res);
					if(res.statuscode===1){
						router.push({path:'couponRule'})
					}else{
						self.showWarn2=true;
						self.warnText=res.msg
					}
				}
				common.Ajax(url,type,data,success)
			}
		},
		created:function(){
			this.init();
		}
	}
</script>

<style scoped>
	a{
		color: #000;
		text-decoration: none;
	}
	a:active{
		text-decoration: none;
	}
	a:hover{
		text-decoration: none;
	}
	a:focus{
		text-decoration: none!important;
		outline: none!important;
		color: #000;
	}
	.right-main-top{
		width: 95%;
		margin: auto;
		padding-top: 60px;
		text-align: left;
		border-bottom: 1px solid #e8e8ec;
		padding-bottom: 20px;
	}
	.right-main-top-icon1{
		width: 18px;
		height: 18px;
		background: url("../../assets/img/icon_tishi.png") no-repeat;
		float: left;
		margin-right: 8px;
	}
	.right-main-top2{
		margin-left: 25px;
		color: #b3b3b3;
	}
	.right-main-bottom{
		width: 95%;
		margin:auto;
		text-align: left;
	}
	.messagebox{
		margin-top: 20px;
		min-height: 36px;
		line-height: 36px;
	}
	.message-name{
		display: inline-block;
		width: 115px;
		text-align: right;
	}
	.message-value{
		width: 230px;
		height: 36px;
		border-radius: 5px;
		border: 1px solid #e7e7eb;
		margin-left: 20px;
		padding-left: 10px;
	}
	.after{
		display: inline-block;
		color:#b3b3b7;
	}
	.after2{
		color:#b3b3b7;
		display: block;
		width: 100px;
		margin-left: 10px;
	}
	.radios{
		display: inline-block;
		vertical-align: middle;
		margin: 0;
	}
	.CcontentBox{
		margin-top: 20px;
	}
	.contentTitle,.content1,.content2,.content1-left,.content1-left2,.content1-right,.content1-right2{
		display: inline-block;
	}
	.content1{
		margin-left: 20px;
		vertical-align: top;
		width: 560px;
		height: 335px;
		border: 1px solid #e7e7eb;
		border-radius: 3px;
	}
	.content1-top{
		height: 113px;
		background: #f4f5f9;
		padding: 12px 27px 0 27px;
	}
	.content1-bottom{
		height: 222px;
	}
	.content1-top2{
		padding: 0 27px;
		height: 63px;
		line-height: 63px;
		background: #f4f5f9;

	}
	.button{
		display: inline-block;
		width: 75px;
		height: 36px;
		background: #e7e7eb;
		border: 1px solid #d8d8dd;
		border-radius: 3px;
		line-height: 36px;
		text-align: center;
		vertical-align: top;
		margin-bottom: 10px;
		margin-right: 15px;
	}
	.button:hover{
		color:#fff;
		background: #3896ff;
		border-color: #3896ff;
	}
	.content1-left{
		vertical-align: top;
		width: 450px;
		overflow-y: scroll;
		height: 222px;
		padding: 25px 30px 0 30px; 
	}
	.ul1{
		padding: 0;
	}
	.ul1 li{
		width: 75px;
		height: 36px;
		background: #e7e7eb;
		border: 1px solid #d8d8dd;
		border-radius: 3px;
		line-height: 36px;
		text-align: center;
		margin: 25px 12px;
	}
	.ul1 li:hover{
		color:#fff;
		background: #3896ff;
		border-color: #3896ff;
	}
	.left-cell{
		display: inline-block;
		width: 120px;
		min-height: 36px;
		border: 1px solid transparent;
		margin: 16px 60px 0 0;
		background-color: #e4f0ff;
		position: relative;
		text-align: center;
		line-height: 26px;
		padding: 5px;
		vertical-align: middle;
	}
	.quan{
		content:'';
		display: inline-block;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background-image: url(../../assets/img/icon_cha.png);
		background-repeat: no-repeat;
		background-position: 5px 5px;
		background-color: #8e8e8e;
		position: absolute;
		top: -9px;
		right: -9px;
	}
	.quan2{
		display: inline-block;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background-image: url(../../assets/img/icon_cha.png);
		background-repeat: no-repeat;
		background-position: 5px 5px;
		background-color: #fe3131;
		float: right;
		margin-top: 16px;
	}
	.left-cell:hover>.quan{
		background-color: #fe3131;
	}
	.content1-bottom2{
		height: 272px;
	}
	.content1-left2{
		width: 136px;
		height: 272px;
		border-right: 1px solid #e7e7e7;
		vertical-align: top;
	}
	.content1-right2{
		width: 417px;
		height: 272px;
		overflow-y: scroll;
	}
	.ul2{
		padding: 0;
	}
	.checkshu{
		margin-right: 20px;
	}
	.ul3 li{
		float: left;
		margin-right: 40px;
		width: 140px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.ul3 .checkshu{
		margin-left: 10px;
	}
	.next{
		width: 100px;
		height: 36px;
		display: block;
		color: #fff;
		background-color: #00baff;
		outline: none;
		border: none;
		border-radius: 3px;
		padding: 0 10px;
		margin-top: 80px;
		margin-left: 112px;
		margin-bottom: 34px;
	}
	.content2{
		margin-left: 20px;
		vertical-align: top;
		width: 212px;
		height: 335px;
		border: 1px solid #e7e7eb;
		border-radius: 3px;
	}
	.ul4{
		width: 212px;
		height: 272px;
		overflow-y: scroll;
	}
	.ul4 li{
		margin: 20px 0;
		width: 110px;
	}
	.clear{
		width: 53px;
		height: 30px;
		background: #fff;
		border-radius: 4px;
		border: 1px solid transparent;
		line-height: 30px;
		outline: none;
	}
	.initClass{
		background: #3896ff;
		color: #fff;
		display: inline-block;
		width: 75px;
		height: 36px;
		border: 1px solid #d8d8dd;
		border-radius: 3px;
		line-height: 36px;
		text-align: center;
		vertical-align: top;
		margin-bottom: 10px;
		margin-right: 15px;
	}
	.proclassify{
		top: 50%;
		margin-top: -300px;
		height: 600px;
	}
	.ul5{
		height: 500px;
		overflow-y: scroll;
		text-align: left;
	}
</style>