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
			<!-- <div class="messagebox2">
				<span class="message-name">在店铺中公开领取：</span>
				<div v-bind:class='{turnOn:ifSwitch,turnOff:!ifSwitch}' @click='switchChange'>
					<div class="cell"></div>
				</div>
				<span class="message-name right">显示已领完的优惠券：</span>
				<div v-bind:class='{turnOn:ifSwitch2,turnOff:!ifSwitch2}' @click='switchChange2'>
					<div class="cell"></div>
				</div>
			</div> -->
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
					<span class="message-name">优惠券ID：</span>
					<input class="message-value" type="" name="">
					<span class="message-after">（优惠券ID可以从公众号商户平台的营销中心里获取）</span>
				</div>
			</div>

			<div class="bottom">
				<input class="next" type="button" name="" value="发布" @click='nextStep'>
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
				ifSwitch:true,
				openGet:1,
				ifSwitch2:true,
				showFinish:1,
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
				warnText:null
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
					return
				}
				if(self.weixin){
					self.step1=false;
					self.step3=true;
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
				var url='http://120.77.149.115/cloud_code/add/wd/coupon.do'
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
						self.warnText=res.msg+'，请先关联微店';
					}
				};
				if(self.queren){
					common.Ajax(url,type,data,success);
					self.queren=false;
				}else{
					self.queren=true;
				}
				
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
		margin-left: 30px;
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




<!-- <template>
	<div>
		<div class="mengban" v-show='showMB'>
			<div class="choosepro" >
				<div class="choosepro-top">
					选择商品
					<span class="returnBtn" @click='hide'>返回</span>
				</div>
				<ul class="choosepro-main">
					<li class="pro-li header">
						<span class="pro-li-span">ID</span>
						<span class="pro-li-span">产品名称</span>
						<span class="pro-li-span">产品类型</span>
						<span class="pro-li-span">产品库分类</span>
						<span class="pro-li-span">价格/元</span>
						<span class="pro-li-span">排序</span>
						<span class="pro-li-span">更新时间</span>
					</li>
					<li class="pro-li" v-for="pro in proInfo">
						<span class="pro-li-span first"><span class="check-box checkshu" @click='selectThis'></span><span style="display: inline-block;vertical-align: middle">{{pro.id}}</span></span>
						<span class="pro-li-span" style="text-align:left;"><img style="width:45px;margin-left:20px;" v-bind:src="'http://120.77.149.115/'+pro.productImg">{{pro.productName}}</span>
						<span class="pro-li-span">{{pro.productSpe}}</span>
						<span class="pro-li-span">{{pro.rowName}}</span>
						<span class="pro-li-span">{{pro.productPrice}}</span>
						<span class="pro-li-span">{{pro.sortNum}}</span>
						<span class="pro-li-span wordbreak">{{pro.lastUpdateTime}}</span>
					</li>
				</ul>
				<div class="page-button-checkbox">
	              <span class="pro-li-span last">
	                <span class="allselect" v-bind:class='{"check-box":chechednum<proInfo.length,"has-select":chechednum==proInfo.length}' @click='selectAll'>
	                </span>
	                全选商品
	              </span>
	            </div>
	            <div>
	              	<input type="button" class="delbutton" name="" value="确定">
	              </div>
			</div>
		</div>
		<div class="right-main">
			<div class="pictrue">
				<div class="phoneHeader">
					
				</div>
				<div class="phoneTitle">
					<p class="title">
						优惠券设置
					</p>
				</div>
				<div class="phoneMain">
					<div class="mainTop">
						满{{price}}减{{lessprice}}
					</div>
					<div class="mainMid">
						<div class="coupon">
							<div class="coupon-top">{{couponName}}优惠券</div>
							<div class="coupon-bottom">
								<div class="coupon-left">
									{{lessprice}}
								</div>
								<div class="coupon-right">
									<p class="top-p">满{{price}}使用</p>
									<p class="fixed">元优惠券</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="tipOut">
				<div class="tipArrow"></div>
				<p class="couponMessage">
					优惠券信息：
				</p>
				<div class="couponInfo">
					<span class="message-name">优惠券名称：</span>
					<input class="message-value" type="text" name="" v-model='couponName'>
					<span class="message-after">（限20字内）</span>
				</div>
				<div class="couponInfo">
					<span class="message-name star">优惠活动：</span>
					<span>满</span>
					<input class="message-value short" type="number" name="" v-model='price'>
					<span>减</span>
					<input class="message-value short red" type="number" name="" v-model='lessprice'>
					<span class="message-after">（元）</span>
				</div>
				<div class="couponInfo">
					<span class="message-name star">活动时间：</span>
					<input class="message-value short2" type="date" name="">
					<span>---</span>
					<input class="message-value short2" type="date" name="">
					<span class="message-after">（设置开始结束时间）</span>
				</div>
				<div class="couponInfo">
					<span class="message-name star">适用范围：</span>
					<label for="all"><input type="radio" name="range" id="all" v-model='range' v-bind:value='1'>全店通用</label>
					<label for="part"><input type="radio" name="range" id="part" v-model='range' v-bind:value='2'>部分商品</label>
					<a href="javascript:void(0)" @click='mengban'><span class="bianji" v-show='range==2'>编辑></span></a>
				</div>
				<div class="couponInfo">
					<span class="message-name star">发放数量：</span>
					<input class="message-value short3" type="text" name="">
					<span>张</span>
					<span class="message-after">（可被领取的总数量）</span>
				</div>
				<div class="couponInfo">
					<span class="message-name star">每人限领：</span>
					<input class="message-value short3" type="text" name="">
					<span>张</span>
					<span class="message-after">（最大值为99,0表示不限制领取数量）</span>
				</div>
				<div class="couponInfo">
					<span class="message-name-last star">活动说明</span>
					<textarea class="textarea"></textarea>
					<span class="message-after-last">（限50个字内）</span>
				</div>
				<div class="buttonGroup">
					<input type="button" name="" class="delbutton" value="确认">
					<input type="button" name="" class="delbutton" value="取消">
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
				price:null,
				lessprice:null,
				couponName:null,
				range:null,
				showMB:false,
				proInfo:[],
       			chechednum:0,    //全选单选控制

       		}
       	},
       	props:['vendorId'],
       	methods:{
			//初始化
			init:function(){
				var self=this;
				var url='http://120.77.149.115/cloud_code/GET/product/info.do';
				var type='post';
				var data={
					vendorId:self.vendorId,
					pageSize:0,
					deleteFlag:0,
					currentPage:1
				};
				var success=function(res){
					self.proInfo=res.result.data;
					console.log(res.result.data);
				};
				common.Ajax(url,type,data,success)
			},
			//显示蒙版
			mengban:function(){
				var self=this;
				self.showMB=true;
			},

			//选择
			selectThis:function(event){
				var self=this;
				var checkBox=$(event.target);
				var length=$('.checkshu').length;
				if(checkBox.hasClass('check-box')){
					checkBox.removeClass('check-box').addClass('has-select');
					self.chechednum++;
				}else{
					checkBox.addClass('check-box').removeClass('has-select');
					self.chechednum--;

				};
			},

			//全选
			selectAll:function(event){ 
				var self=this;
				var checkall=$(event.target);
				var length=$('.checkshu').length;
				if(checkall.hasClass('check-box')){
					checkall.removeClass('check-box').addClass('has-select');
					$('.checkshu').removeClass('check-box').addClass('has-select');
					self.chechednum=length;
					self.deleteArr=[];
					for(var i=0,len=self.proInfo.length;i<len;i++){
						self.proInfo.index=i;
						self.deleteArr.push(self.proInfo[i].id);
					}
				}else{
					checkall.addClass('check-box').removeClass('has-select');
					$('.checkshu').addClass('check-box').removeClass('has-select');
					self.chechednum=0;
					self.deleteArr=[];

				}
			},

			//隐藏蒙版
			hide:function(){
				var self=this;
				self.showMB=false;
			}
		},
		created:function(){
			this.init();
		}
	}
</script>

<style scoped>
	/*@import "../../assets/css/common.css";*/
	.right-main{
		position: relative;
	}
	.pictrue{
		height: 663px;
		width: 349px;
		padding: 0 14px;
		margin-top: 138px;
		margin-left: 146px;
		border: 2px solid #ededed;
		border-radius: 15px;
	}
	.phoneHeader{
		height: 75px;
		width: 321px;
		background: url(../../assets/img/phoneHeader.png) no-repeat center center;
	}
	.phoneTitle{
		height: 55px;
		width: 321px;
		padding-top: 1px;
		background-image: url(../../assets/img/phoneTitle.png);
		background-size: cover;
		position: relative;
	}
	.phoneMain{
		width: 289px;
		margin: 14px auto;
		border: 1px solid #e7e7e7;
	}
	.title{
		color: #fff;
		height: 43px;
		line-height: 43px;
		padding-top: 15px;
		margin: 0 auto;
		font-size: 17px;
	}
	.mainTop{
		width: 289px;
		height: 46px;
		line-height: 46px;
		color: #f7f7f7;
		font-size: 18px;
		background: url(../../assets/img/youhuiquan1.png);
	}
	.mainTop:before{
		content: '';
		display: inline-block;
		width: 22px;
		height: 22px;
		left: -110px;
		top: 30px;
		background: #f7f7f7;
		border-radius: 50%;
		position: relative;
	}
	.mainTop:after{
		content: '';
		display: inline-block;
		width: 22px;
		height: 22px;
		left: 110px;
		top: 30px;
		background: #f7f7f7;
		border-radius: 50%;
		position: relative;
	}
	.coupon{
		margin: 35px auto; 
		width: 250px;
		height: 68px;
		background: url(../../assets/img/youhuiquan2.png);
		background-repeat: no-repeat;
		background-size: contain;
	}
	.tipOut{
		width: 560px;
		min-height: 65px;
		border-radius: 5px;
		margin-left: 30px;
		background-color: #f6f8fc;
		position: absolute;
		left: 500px;
		top: 262px;
		padding: 15px 25px;
		text-align: left;
	}
	.tipArrow{
		width: 0px;
		height: 0px;
		border-top: 10px solid transparent;
		border-right: 10px solid;
		border-bottom: 10px solid transparent;
		position: absolute;
		margin-left: -35px;
		border-right-color: #f6f8fc;
	}
	.couponMessage{
		padding-bottom: 26px;
		border-bottom: 1px solid #d1d1d1;
		font-size: 18px;
	}
	.couponInfo{
		margin-top: 23px
	}
	.message-name{
		display: inline-block;
		width: 90px;
		text-align: right;
		color: #000;
		vertical-align: middle;
	}
	.message-name-last{
		display: inline-block;
		width: 90px;
		text-align: right;
		color: #000;
		vertical-align: top;
	}
	.message-value{
		border: 1px solid #ededed;
		height: 30px;
		padding-left: 5px;
		border-radius: 5px;
		text-align: center;
	}
	.short{
		width: 66px;
	}
	.short2{
		width: 109px;
	}
	.short3{
		width: 90px;
	}
	.textarea{
		border: 1px solid #ededed;
		border-radius: 5px;
		width: 294px;
		height: 84px;
		resize: none;
	}
	.message-after-last{
		display: inline-block;
		vertical-align: top
	}
	.red{
		color: #ff5454;
	}
	.buttonGroup{
		text-align: center;
	}
	.coupon-top{
		width: 190px;
		height: 30px;
		padding-top: 10px;
		line-height: 20px;
		color: #fff;
		font-size: 20px;
		font-weight: 700;
		text-align: left;
		margin-left: 30px;
	}
	.coupon-left{
		position: absolute;
		left: -10px;
		display: inline-block;
		width: 57px;
		height: 38px;
		color:#fff;
		font-size: 38px;
		line-height: 38px;
		font-weight: 700;
	}
	.coupon-bottom{
		position: relative;
		width: 190px;
		height: 38px;
		margin-left: 30px;
	}
	.coupon-right{
		position: relative;
		display: inline-block;
		color: #fff;
		left: -10px;
	}
	.coupon-right p{
		text-align: left;
		margin: 0
	}
	.fixed{
		height: 20px;
		line-height: 20px;
		font-size: 20px;
		font-weight: 700;
	}
	.top-p{
		height: 15px;
	}
	#all,#part{
		vertical-align: middle;
		margin-top: 0;
	}
	.bianji{
		display: inline-block;
		width: 69px;
		height: 28px;
		line-height: 24px;
		border: 2px solid #f1f1f3;
		border-radius: 3px;
		background: #fff;
		text-align: center;
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
</style> -->