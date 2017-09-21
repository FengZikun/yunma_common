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
					<input class="delbutton" type="button" name="" value="确定" @click='showWarn=false'>
				</div>
			</div>
		</div>
		<div class="mengban" v-if='showMB'>
			<div class="choosepro" >
				<div class="choosepro-top">
					选择<span v-if='rule'>规则</span><span v-if='gift'>礼品</span>
					<span class="returnBtn" @click='hide'>返回</span>
					<!-- <router-link class="returnBtn" to='/twoCode/addRule'>新增规则</router-link> -->
					
				</div>

				<!-- 规则 -->
				<ul class="choosepro-main" v-show='rule'>
					<li class="pro-li">
						<span class="pro-li-span">规则ID</span>
						<span class="pro-li-span">规则名称</span>
						<span class="pro-li-span">绑定产品/订单ID</span>
						<span class="pro-li-span">积分方式</span>
						<span class="pro-li-span">兑换次数</span>
						<span class="pro-li-span">有效时间</span>
						<span class="pro-li-span">创建时间</span>
					</li>
					<li class="pro-li" v-for='(item,index) in info'>
						<span class="pro-li-span"><span class="check-box checkshu" style="margin-right: 10px;margin-left: 10px;" @click='selectThis'></span>{{item.inteRuleId}}</span>
						<span class="pro-li-span">{{item.ruleName}}</span>
						<span class="pro-li-span">{{item.productId}}</span>
						<span class="pro-li-span">{{item.ruleType}}</span>
						<span class="pro-li-span">{{item.eveGetExchangesCount}}</span>
						<span class="pro-li-span">{{item.expireTime}}</span>
						<span class="pro-li-span wordbreak">{{item.createTime}}</span>
					</li>
				</ul>
				<div class="page-num" v-if='rule'>
					<ul class="page-num-ul" style="height: 70px;">
						<a href="javascript:void(0)"><li class="page-num-li-arrow page-num-li" v-if='currentPage>1' @click='prevPage'><span class="arrow-left"></span></li></a>
						<a href="javascript:void(0)"><li class="page-num-li" v-if='currentPage>4&&totalPage.length!=1&&totalPage[0]!=1' v-bind:data-page='1' @click.self='changePage'>1</li></a>
						<a href="javascript:void(0)"><li class="page-num-li" v-if='currentPage>4&&totalPage.length!=1&&totalPage[0]!=1'>...</li></a>
						<a href="javascript:void(0)"><li class="page-num-li" v-for='item in totalPage' v-bind:class='{dangqianye:item==currentPage}' v-bind:data-page='item' @click.self='changePage'>{{item}}</li></a>
						<a href="javascript:void(0)"><li class="page-num-li" v-if='totalPages>5&&currentPage<totalPages-2'>...</li></a>
						<a href="javascript:void(0)"><li class="page-num-li" v-if='totalPages>5&&currentPage<totalPages-2' v-bind:data-page='resData.totalPages' @click.self='changePage'>{{resData.totalPages}}</li></a>

						<a href="javascript:void(0)"><li class="page-num-li page-num-li-arrow" v-if='currentPage<totalPages' @click='nextPage'><span class="arrow-right"></span></li></a>

					</ul>
				</div>

				<!-- 礼品 -->
				<ul class="choosepro-main" v-show='gift' :class='{gift:gift}'>
					<li class="pro-li">
						<span class="pro-li-span">礼品名称</span>
						<span class="pro-li-span">礼品分组</span>
						<span class="pro-li-span">价格/元</span>
						<span class="pro-li-span">更新时间</span>
					</li>
					<li class="pro-li" v-for='item in gifts'>
						<span class="pro-li-span first" v-bind:data-id='item.id'><span class="check-box checkshu" @click='selectThis' style="margin-left:10%;margin-right:5%;"></span><span style="display: inline-block;vertical-align: middle;overflow: hidden"><img style="width:45px;margin-left:20px;" v-bind:src="'https://ym-a.top'+item.presentImg">{{item.presentName}}</span></span>
						<span class="pro-li-span">{{item.rowName}}</span>
						<span class="pro-li-span">{{item.presentPrice}}</span>
						<span class="pro-li-span">{{item.lastUpdateTime}}</span>
					</li>
				</ul>
				<div class="page-num" v-if='gift'>
					<ul class="page-num-ul" style="height: 70px;">
						<a href="javascript:void(0)"><li class="page-num-li-arrow page-num-li" v-if='currentPage>1' @click='prevPage'><span class="arrow-left"></span></li></a>
						<a href="javascript:void(0)"><li class="page-num-li" v-if='currentPage>4&&totalPage.length!=1&&totalPage[0]!=1' v-bind:data-page='1' @click.self='changePage'>1</li></a>
						<a href="javascript:void(0)"><li class="page-num-li" v-if='currentPage>4&&totalPage.length!=1&&totalPage[0]!=1'>...</li></a>
						<a href="javascript:void(0)"><li class="page-num-li" v-for='item in totalPage' v-bind:class='{dangqianye:item==currentPage}' v-bind:data-page='item' @click.self='changePage'>{{item}}</li></a>
						<a href="javascript:void(0)"><li class="page-num-li" v-if='totalPages>5&&currentPage<totalPages-2'>...</li></a>
						<a href="javascript:void(0)"><li class="page-num-li" v-if='totalPages>5&&currentPage<totalPages-2' v-bind:data-page='resData.totalPages' @click.self='changePage'>{{resData.totalPages}}</li></a>

						<a href="javascript:void(0)"><li class="page-num-li page-num-li-arrow" v-if='currentPage<totalPages' @click='nextPage'><span class="arrow-right"></span></li></a>

					</ul>
				</div>
				<div style="text-align:center;">
					<input type="button" class="delbutton" name="" value="确定" @click='confirm'>
				</div>
			</div>
		</div>
		<div class="right-main">
			<div class="right-main-top">
				<p class="right-main-top1">
					<span class="right-main-top-icon1"></span>
					您可以根据需求，发布一条积分使用规则。
					<router-link to='/twoCode/IntegralUseRule'><span class='returnBtn'>返回</span></router-link>
				</p>
				<div class="right-main-top2">
					<p style="color: red;">重要提示：</p>
					<p style="color: #cbcbcc">1、新建积分使用表需要选择一条或多条“规则”进行绑定
					</p>
					<p style="color: #cbcbcc">
						2、新建积分使用表需要设置“礼品兑换、积分”与“兑换条件”
					</p>
					<p style="color: #cbcbcc">
						3、新建积分使用表需要设置“生效时间”和“失效时间”
					</p>
				</div>
			</div>
			<div class="right-main-bottom">
				<div class="messagebox">
					<span class="message-name star">绑定规则：</span>
					<input class="message-value" type="text" name="" @focus='init(1)' v-model='ruleId'>
				</div>
				<div class="messagebox">
					<span class="message-name star">兑换礼品：</span>
					<input class="message-value" type="text" name="" v-model='exchangesName' @focus='getGift(1)'>
				</div>
				<div class="messagebox">
					<span class="message-name star">所需积分：</span>
					<input class="message-value" type="text" name="" v-model='integralExchangeCostCount'>
				</div>
				<div class="messagebox">
					<span class="message-name star">礼品库存：</span>
					<input class="message-value" type="text" name="" v-model='exchangesCount'>
				</div>
				<div class="messagebox">
					<span class="message-name star">兑换物类型：</span>
					<select class="message-value" name="" v-model='exchangeType'>
						<option value='1'>实物</option>
						<option value='2'>虚拟</option>
					</select>
				</div>
				<div class="messagebox">
					<span class="message-name star">失效时间：</span>
					<input class="message-value" type="date" maxlength="20" name="" v-model='expireTime'>
				</div>
				<div class="button-group">
					<input class="delbutton" type="button" name="" value='完成' @click='complete'>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import common from '../../common.js'
import router from '../../router.js'
import {mapState} from 'vuex'
export default{
	data(){
		return{
			showWarn:false,
			warnText:null,
			rule:false,
			gift:false,
			showMB:false,
			info:null,
			resData:null,
				totalPage:[],    //页码数组
				currentPage:'',  //当前页
				totalPages:'',    //总页数
				ruleId:null,
				exchangesName:null,
				gifts:null,
				integralExchangeCostCount:null,
				exchangesCount:null,
				expireTime:null,
				exchangeType:null
			}
		},
		props:['datas'],
		computed:{
			...mapState({
				'isNew':state=>state.IntegralUseRule.isNew,
				'inteExchangeId':state=>state.IntegralUseRule.ruleId,
			})
		},
		mounted(){
			this.star()
		},
		methods:{
			//判断是否编辑
			star(){
				var self=this;
				if(!self.isNew){
					var url='https://ym-a.top/cloud_code/GET/vendorIntegral/getVendorSingleIntegralExchange.do';
					var type='get';
					var data={
						vendorId:self.datas.vendorId,
						inteExchangeId:self.inteExchangeId,
					};
					var success=function(res){
						console.log(res);
						self.ruleId=res.ruleId;
						self.exchangesName=res.exchangesName;
						self.integralExchangeCostCount=res.integralExchangeCostCount;
						self.exchangesCount=res.exchangesCount;
						self.exchangeType=res.exchangeType;
						self.expireTime=res.expireTime;
					};
					common.Ajax(url,type,data,success)
				}
			},
			//请求规则
			init(currentPage){
				var self=this;
				$('.has-select').removeClass('has-select');
				self.showMB=true;
				self.rule=true;
				self.gift=false;
				var url='https://ym-a.top/cloud_code/GET/vendorIntegral/vendorIntegralRuleList.do';
				var type='get';
				var data={
					vendorId:self.datas.vendorId,
					currentPage:currentPage,
					pageSize:10,
				};
				var success=function(res){
					var pagenum=res.totalPages;
					self.totalPage=[];
					self.resData=res;
					self.info=res.result.data;
					self.totalPages=res.totalPages;
					self.currentPage=res.currentPage;
					self.getPage();
					var vendorName=res.result.data[0].vendorName;
					self.$emit('upvendorName',vendorName);
				}
		        //调用ajax
		        common.Ajax(url,type,data,success)
		    },

			// 请求礼品列表
			getGift(currentPage){
				var self=this;
				$('.has-select').removeClass('has-select');
				self.showMB=true;
				self.rule=false;
				self.gift=true;
				var url='https://ym-a.top/cloud_code/GET/product/present.do';
				var type='get';
				var data={
					vendorId:self.datas.vendorId,
					currentPage:currentPage,
					deleteFlag:0,
				};
				var success=function(res){
					self.gifts=res.result.data;
					self.totalPages=res.totalPages;
					self.currentPage=res.currentPage;
					self.resData=res;
					self.totalPage=[];
					self.getPage()
					console.log(res)
				}
				common.Ajax(url,type,data,success)
			},

			// 完成
			complete(){
				var self=this;
				if(self.ruleId===null){
					self.showWarn=true;
					self.warnText='请选择绑定规则';
					return
				}
				if(self.exchangesName===null){
					self.showWarn=true;
					self.warnText='请选择兑换礼品';
					return
				}
				if(self.integralExchangeCostCount===null){
					self.showWarn=true;
					self.warnText='请设置所需积分';
					return
				}
				if(self.exchangesCount===null){
					self.showWarn=true;
					self.warnText='请设置礼品库存';
					return
				}
				if(self.exchangeType===null){
					self.showWarn=true;
					self.warnText='请选择兑换物类型';
					return
				}

				if(self.expireTime===null){
					self.showWarn=true;
					self.warnText='请设置失效时间';
					return
				}
				if(!self.isNew){
					var url='https://ym-a.top/cloud_code/GET/vendorIntegral/updateExchangesInfo.do';
					var type='post';
					var data={
						ruleId:self.ruleId,
						vendorId:self.datas.vendorId,
						exchangesName:self.exchangesName,
						expireTime:self.expireTime,
						integralExchangeCostCount:self.integralExchangeCostCount,
						exchangeType:self.exchangeType,
						exchangesCount:self.exchangesCount

					}
					console.log(data)
					var success=function(res){
						if(res.errorCode===0){
							router.push({path:'/twoCode/IntegralUseRule'})
						}else{
							self.showWarn=true;
							self.warnText=res.mag;
						}
					}
					common.Ajax(url,type,data,success)
					return
				}
				var url='https://ym-a.top/cloud_code/GET/vendorIntegral/addExchangesInfo.do';
				var type='post';
				var data={
					ruleId:self.ruleId,
					vendorId:self.datas.vendorId,
					exchangesName:self.exchangesName,
					expireTime:self.expireTime,
					integralExchangeCostCount:self.integralExchangeCostCount,
					exchangeType:self.exchangeType,
					exchangesCount:self.exchangesCount

				}
				console.log(data)
				var success=function(res){
					if(res.errorCode===0){
						router.push({path:'/twoCode/IntegralUseRule'})
					}else{
						self.showWarn=true;
						self.warnText=res.mag;
					}
				}
				common.Ajax(url,type,data,success)
			},
		    //隐藏蒙版
		    hide:function(){
		    	var self=this;
		    	self.showMB=false;
		    	self.rule=false;
		    	self.gift=false;
		    },

			//确认
			confirm:function(){
				var self=this;
				if(self.rule){
					self.ruleId=$('.has-select').parent().text();
				}
				if(self.gift){
					self.exchangesName=$('.has-select').parent().text();
				}
				self.showMB=false;
				self.rule=false;
				self.gift=false;
			},


			selectThis:function(event){
				var self=this;
				var checkBox=$(event.target);
				var length=$('.checkshu').length;
				if(checkBox.hasClass('check-box')){
					checkBox.removeClass('check-box').addClass('has-select');
					checkBox.parents('li').siblings().find('.checkshu').addClass('check-box').removeClass('has-select')
				}else{
					checkBox.addClass('check-box').removeClass('has-select');
				};
			},

			//获取页数
			getPage:common.getPage,

			//翻页
			changePage:common.changePage,

			//上一页
			prevPage:common.prevPage,

			//下一页
			nextPage:common.nextPage,
		},
	}
	</script>

	<style scoped>
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
	.messagebox{
		margin-top: 20px;
		
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
		margin-left: 30px;
		padding-left: 10px;
	}
	.after{
		display: inline-block;
		color:#b3b3b7;
	}
	.button-group{
		margin-left: 149px;
		margin-top: 100px;
		margin-bottom: 40px;
	}
	.delbutton{
		width: 90px;
		height: 34px;
	}
	.gift .pro-li-span{
		width: 24.6%;
	}
	</style>