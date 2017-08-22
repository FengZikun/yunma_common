<template>
	<div class="right-main">
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
		<div class="mengban" v-show='queren'>
			<div class="queren">
				<p style="color:red;text-align:center;height:30px;line-height:30px;">优惠券生成后无法修改和删除，请确认输入的信息</p>
				<div class="messagebox">
					<span class="message-name">优惠券名称：</span>
					<span class="message-value">{{name}}</span>
				</div>
				<div class="messagebox">
					<span class="message-name">最低使用限额：</span>
					<span class="message-value">{{leastCost}}元</span>
				</div>
				<div class="messagebox">
					<span class="message-name">优惠券面值：</span>
					<span class="message-value">{{reduce}}元</span>
				</div>
				<div class="messagebox">
					<span class="message-name">优惠券总数量：</span>
					<span class="message-value">{{stock}}张</span>
				</div>
				<div class="messagebox">
					<span class="message-name">每人限领数量：</span>
					<span class="message-value">{{buyerLimit}}张</span>
				</div>
				<div class="messagebox">
					<span class="message-name">优惠券有效期：</span>
					<span class="message-value">{{beginTime}}</span>
					<span>至</span>
					<span class="message-value">{{endTime}}</span>
				</div>
			<div class="messagebox last">
				<input class="querenButton" type="button" name="" value="发布" @click='confirm'>
				<input class="querenButton" type="button" name="" value="取消" @click='queren=false'>
			</div>


		</div>
	</div>

	<div class="mengban" v-show='showMB2'>
		<div style="width: 1000px;height: 850px; overflow-y: scroll;margin: auto;position: absolute;top:100px;left: 220px;">
			<img style="width: 1000px" src="../../assets/img/2.jpg">
		</div>
		<img src="../../assets/img/icon_cha3.png" class="cha" @click='showMB=true;showMB2=false'>

	</div>
	<div class="step1" v-show='step1'>
		<div class="top">
			<img src="../../assets/img/buzhou1.png">
			<span class="return"><router-link to='/union/coupon' style="text-decoration: none">返回</router-link></span>
		</div>

		<div class="main">
			<div class="option" v-bind:class='{hasSelect:weidian}' @click='selectType'>微店优惠券</div>
			<div class="option" v-bind:class='{hasSelect:weixin}' @click='selectType'>微信商户号优惠券</div>
		</div>

		<div class="bottom">
			<input class="next" type="button" name="" value="下一步" @click='nextStep'>
		</div>
	</div>
	<div class="step2" v-show='step2'>
		<div class="top">
			<img src="../../assets/img/buzhou2.png">
			<a href="javascript:void(0)"><span class="return" @click='toStep1'>返回</span></a>
		</div>
		<div class="main">
			<div class="message-name title">
				优惠券信息：
			</div>
			<div class="messagebox2">
				<span class="message-name">优惠券名称：</span>
				<input class="message-value" type="" name="" v-model='name'>
				<span class="message-after">（该优惠券名字会显示在大礼包页面，例：输入“蛋白粉”则显示“蛋白粉优惠券”）</span>
			</div>
			<div class="messagebox2">
				<span class="message-name">最低使用限额：</span>
				<input class="message-value" type="" name="" v-model='leastCost' @input='comparison'>
				<span class="message-after">（必须大于优惠券面值）</span>
			</div>
			<div class="messagebox2">
				<span class="message-name">优惠券面值：</span>
				<input class="message-value" type="" name="" v-model='reduce' @input='comparison'>
				<span class="message-after">（设置优惠券的金额）</span>
				<span class='message-warn' v-if='showWarn'>面值必须小于最低使用限额</span>
			</div>
			<div class="messagebox2">
				<span class="message-name">优惠券总数量：</span>
				<input class="message-value" type="" name="" v-model='stock'>
				<span class="message-after">（设置发放优惠券的总数量）</span>
			</div>
			<div class="messagebox2">
				<span class="message-name">每人限领数量：</span>
				<input class="message-value" type="" name="" v-model='buyerLimit'>
				<span class="message-after">（每人限领张数，最多十张）</span>
				<span class="message-warn" v-if='buyerLimit>10'>最多十张</span>
			</div>
			<div class="messagebox2">
				<span class="message-name">优惠券有效期：</span>
				<input class="message-value short2" type="date" name="" v-model='beginTime'>
				<span>至</span>
				<input class="message-value short2" type="date" name="" v-model='endTime'>
				<span class="message-after">（设置开始结束时间）</span>
			</div>
				<!-- <div class="messagebox2">
					<span class="message-name">appKey：</span>
					<input class="message-value" type="" name="">
				</div>
				<div class="messagebox2">
					<span class="message-name">secret：</span>
					<input class="message-value" type="" name="">
				</div>
				<span class="right-main-top-icon1"></span>
				<a href="javascript:void(0)" style="display: block;margin-left: 115px;" @click='showMB2=true'>如何获取appKey和secret</a> -->
				<div class="messagebox">
					<span class="message-name">在店铺中公开领取：</span>
					<div v-bind:class='{turnOn:ifSwitch,turnOff:!ifSwitch}' @click='switchChange'>
						<div class="cell"></div>
					</div>
					<span class="message-name right">显示已领完的优惠券：</span>
					<div v-bind:class='{turnOn:ifSwitch2,turnOff:!ifSwitch2}' @click='switchChange2'>
						<div class="cell"></div>
					</div>
				</div>
			</div>
			<div class="bottom">
				<input class="next" type="button" name="" value="发布" @click='confirm'>
			</div>
		</div>
		<div class="step3" v-show='step3'>
			<div class="top">
				<img src="../../assets/img/buzhou2.png">
				<a href="javascript:void(0)"><span class="return" @click='toStep1'>返回</span></a>
			</div>
			<div class="main">
				<div class="title">
					填写资料
				</div>
				<div class="messagebox2">
					<span class="message-name">最低使用限额：</span>
					<input class="message-value" type="" name="" v-model='leastCost' @input='comparison'>
					<span class="message-after">（必须大于优惠券面值）</span>
				</div>
				<div class="messagebox2">
					<span class="message-name">代金券面值：</span>
					<input class="message-value" type="" name="" v-model='reduce' @input='comparison'>
					<span class="message-after">（设置优惠券的金额）</span>
					<span class='message-warn' v-if='showWarn'>面值必须小于最低使用限额</span>
				</div>
				<div class="messagebox2">
					<span class="message-name">优惠券ID：</span>
					<input class="message-value" type="" name="" v-model='couponStockId'>
					<span class="message-after">（优惠券ID可以从公众号商户平台的营销中心里获取）</span>
				</div>
				
			</div>

			<div class="bottom">
				<input class="next" type="button" name="" value="发布" @click='confirm2'>
			</div>
		</div>
		<div class="step4" v-show='step4'>
			<div class="top">
				<img src="../../assets/img/buzhou3.png">
				<a href="javascript:void(0)" @click='comeBack'><span class="return">返回</span></a>
			</div>
			<div class="main">
				<div class="bottom">
					<router-link to='/union/coupon'><input class="next" type="button" name="" value="完成"></router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import common from '../../common.js'
	export default{
		data(){
			return{
				step1:true,
				step2:false,
				step3:false,
				step4:false,
				weidian:false,
				weixin:false,
				ifSwitch:false,
				openGet:0,
				ifSwitch2:false,
				showFinish:0,
				name:null,
				reduce:null,
				leastCost:null,
				stock:null,
				buyerLimit:null,
				beginTime:null,
				endTime:null,
				showWarn:false,
				showMB2:false,
				queren:false,
				showWarn2:false,
				warnText:null,
				couponStockId:null
			}
		},
		props:['vendorId'],
		methods:{
			//选择优惠券类型
			selectType:function(){
				var self=this;
				if($(event.target).text()=='微店优惠券'){
					self.weidian=true;
					self.weixin=false;
				}else{
					self.weidian=false;
					self.weixin=true;
				}
			},

			//下一步
			nextStep:function(){
				var self=this;
				if(self.weidian){
					self.step1=false;
					self.step2=true;
					self.leastCost=null;
					self.buyerLimit=null;
					self.name=null;
					self.reduce=null;
					return
				}
				if(self.weixin){
					self.step1=false;
					self.step3=true;
					self.leastCost=null;
					self.buyerLimit=null;
					self.name=null;
					self.reduce=null;
					return
				}
			},

			//回到第一步
			toStep1:function(){
				var self=this;
				self.step2=false;
				self.step3=false;
				self.step1=true;
			},

			//开关
			switchChange:function(){
				var self=this;
				self.ifSwitch=!self.ifSwitch;
				if(self.ifSwitch){
					$('.cell').eq(0).css('margin-left','30px')
					self.openGet=1;

				}else{
					$('.cell').eq(0).css('margin-left','0')
					self.openGet=0;
				}
			},

			//开关2
			switchChange2:function(){
				var self=this;
				self.ifSwitch2=!self.ifSwitch2;
				if(self.ifSwitch2){
					$('.cell').eq(1).css('margin-left','30px')
					self.showFinish=1;

				}else{
					$('.cell').eq(1).css('margin-left','0')
					self.showFinish=0;
				}
			},

			//比较
			comparison:function(){
				var self=this;
				self.leastCost=self.leastCost.replace(/\D/g,'');
				self.reduce=self.reduce.replace(/\D/g,'');
				var leastCost=parseInt(self.leastCost);
				var reduce=parseInt(self.reduce);
				if(leastCost<=reduce){
					self.showWarn=true;
				}else{
					self.showWarn=false;
				}
			},

			//发布
			confirm:function(){
				var self=this;
				if(self.name===null){
					self.showWarn2=true;
					self.warnText="请输入优惠券名称";
					return
				}
				if(self.leastCost===null){
					self.showWarn2=true;
					self.warnText="请输入最低使用限额";
					return
				}
				if(self.reduce===null){
					self.showWarn2=true;
					self.warnText="请输入优惠券面值";
					return
				}
				if(self.stock===null){
					self.showWarn2=true;
					self.warnText="请输入优惠券总数量";
					return
				}
				if(self.buyerLimit===null){
					self.showWarn2=true;
					self.warnText="请输入每人限领数量";
					return
				}
				if(self.buyerLimit>=self.stock){
					self.showWarn2=true;
					self.warnText="限领数量必须小于总数量";
					return
				}
				if(self.beginTime===null){
					self.showWarn2=true;
					self.warnText="请设置开始时间";
					return
				}
				if(self.endTime===null){
					self.showWarn2=true;
					self.warnText="请设置结束时间";
					return
				}
				var url='https://ym-a.top/cloud_code/add/wd/coupon.do'
				var data={
					vendorId:self.vendorId,
					openGet:self.openGet,
					showFinish:self.showFinish,
					name:self.name,
					reduce:self.reduce,
					leastCost:self.leastCost,
					stock:self.stock,
					buyerLimit:self.buyerLimit,
					beginTime:self.beginTime+' 00:00:00',
					endTime:self.endTime+' 00:00:00'
				}
				var type='post';
				var success=function(res){
					if(res.statuscode===1){
						self.step2=false;
						self.step4=true;
					}else if(res.statuscode===-1){
						self.showWarn2=true;
						self.warnText=res.msg;
					}
				};
				if(self.queren){
					common.Ajax(url,type,data,success);
					self.queren=false;
				}else{
					self.queren=true;
				}
				
			},

			// //提交微店
			// confirm2:function(){
			// 	var self=this;
			// 	var url='https://ym-a.top/cloud_code/openweixin/getAuthByVendorId.do';
			// 	var type='get';
			// 	var data={
			// 		vendorId:self.vendorId,
			// 	};
			// 	var success=function(res){
			// 		//console.log(res)
			// 		if(res.is_auth===1){
			// 			if(self.leastCost===null){
			// 				self.showWarn2=true;
			// 				self.warnText="请输入最低使用限额";
			// 				return
			// 			}
			// 			if(self.reduce===null){
			// 				self.showWarn2=true;
			// 				self.warnText="请输入代金券面值";
			// 				return
			// 			}
			// 			if(self.couponStockId===null){
			// 				self.showWarn2=true;
			// 				self.warnText="请输入优惠券ID";
			// 				return
			// 			}
			// 			var url='https://ym-a.top/cloud_code/weChatCoupon/create.do';
			// 			var type='get';
			// 			var data={
			// 				vendorId:self.vendorId,
			// 				couponStockId:self.couponStockId,
			// 				couponValue:self.reduce,
			// 				couponMininumn:self.leastCost
			// 			};
			// 			var success=function(res){
			// 				if(res.statuscode===1){
			// 					self.step3=false;
			// 					self.step4=true;
			// 				}else{
			// 					self.showWarn2=true;
			// 					self.warnText=res.msg;
			// 				}
			// 			};
			// 			common.Ajax(url,type,data,success)
			// 		}else{
			// 			self.showWarn2=true;
			// 			self.warnText="请先点击授权链接";
			// 		}
			// 	};
			// 	common.Ajax(url,type,data,success)
				
			// },
			//提交微店
			confirm2:function(){
				var self=this;
						if(self.leastCost===null){
							self.showWarn2=true;
							self.warnText="请输入最低使用限额";
							return
						}
						if(self.reduce===null){
							self.showWarn2=true;
							self.warnText="请输入代金券面值";
							return
						}
						if(self.couponStockId===null){
							self.showWarn2=true;
							self.warnText="请输入优惠券ID";
							return
						}
						var url='https://ym-a.top/cloud_code/weChatCoupon/create.do';
						var type='get';
						var data={
							vendorId:self.vendorId,
							couponStockId:self.couponStockId,
							couponValue:self.reduce,
							couponMininumn:self.leastCost
						};
						var success=function(res){
							if(res.statuscode===1){
								self.step3=false;
								self.step4=true;
							}else{
								self.showWarn2=true;
								self.warnText=res.msg;
							}
						};
						common.Ajax(url,type,data,success)
			},

			//返回第二阶段
			comeBack:function(){
				var self=this;
				self.step4=false
				if(self.weidian){
					self.step2=true;
				}else{
					self.step3=true;
				}
			}
		}
	}
</script>

<style scoped>
	div{
		text-align: left;
	}
	.main{
		margin-top: 100px;
		margin-left: 70px;
	}
	.option{
		display: inline-block;
		border: 1px solid #e7e7eb;
		width: 148px;
		height: 54px;
		line-height: 54px;
		text-align: center;
		margin-right: 40px;
	}
	.option:hover{
		border: 1px solid #00baff;
	}
	.bottom{
		margin-left: 70px;
		margin-top: 115px;
		text-align: left;
	}
	.next{
		width: 189px;
		height: 36px;
		display: block;
		color: #fff;
		background-color: #00baff;
		outline: none;
		border: none;
		border-radius: 3px;
		padding: 0 10px;
		margin-top: 80px;
		margin-bottom: 34px;
	}
	.querenButton{
		width: 100px;
		height: 36px;
		color: #fff;
		background-color: #00baff;
		outline: none;
		border: none;
		border-radius: 3px;
		padding: 0 10px;
	}
	.hasSelect{
		display: inline-block;
		width: 148px;
		height: 54px;
		line-height: 54px;
		text-align: center;
		margin-right: 40px;
		background-image: url(../../assets/img/button_xuanzhong.png);
	}
	.message-value{
		widows: 333px;
		border: 1px solid #ededed;
		height: 30px;
		padding-left: 5px;
		border-radius: 5px;
		text-align: left;
	}
	.message-name{
		margin-left: -20px;
		display: inline-block;
		width: 130px;
		text-align: right;
		color: #000;
		vertical-align: middle;
	}
	.message-warn{
		display: block;
		color: red;
		margin-left: 114px;
	}
	.messagebox{
		margin-top: 50px
	}
	.messagebox2{
		margin-top: 30px;
		height:50px;
	}
	.message-after{
		color: #c3c3c6;
	}
	.turnOn{
		display: inline-block;
		width: 60px;
		height: 30px;
		vertical-align: middle;
		background: #00baff;
		border-radius: 15px;
		border: 1px solid transparent;
	}
	.turnOff{
		display: inline-block;
		width: 60px;
		height: 30px;
		vertical-align: middle;
		background: #fff;
		border-radius: 15px;
		border: 1px solid #e7e7e7;
	}
	.cell{
		display: inline-block;
		width: 28px;
		height: 28px;
		background: #e7e7e7;
		border-radius: 50%;
		margin-left: 0;
		transition: 0.3s;
	}
	.right{
		width: 150px;
		margin-left: 50px;
	}
	.title{
		height: 30px;
		line-height: 30px;
		font-size: 16px;
	}
	/*.messagebox2 .message-name{
		color: #666666;
		width:100px;
	}*/
	a:hover{
		text-decoration: none;
	}
	.cha{
		position: absolute;
		top: 70px;
		right: 100px;
	}
	.queren{
		width: 400px;
		height: 500px;
		background: #fff;
		box-shadow: 0 0 50px rgba(175,186,203,0.23);
		position: absolute;
		top: 20%;
		left: 50%;
		margin-left: -200px;

	}
	.queren .messagebox{
		margin-top: 20px;
	}
	.queren .messagebox .message-name{
		margin-left: 10px;
	}
	.queren .messagebox .message-value{
		border: none;
	}
	.last{
		text-align: center;
		margin-top: 80px!important;
	}
	/*.right-main-top-icon1{
		width: 18px;
		height: 18px;
		background: url("../../assets/img/icon_tishi.png") no-repeat;
		float: left;
		margin-right: 8px;
	}*/
</style>



