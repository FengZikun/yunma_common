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
					选择产品/订单
					<span class="returnBtn" @click='hide'>返回</span>
					<!-- <router-link class="returnBtn" to='/twoCode/addRule'>新增规则</router-link> -->
					
				</div>
				<div class="top-title" style="margin-top: 0;margin-bottom: 20px;" v-if='order||product'>
					<a href="javascript:void(0)" v-bind:class='{"title-one":product,"title-two":!product}' @click=choosePro(1)>产品</a>
					<a href="javascript:void(0)" v-bind:class='{"title-one":order,"title-two":!order}' @click=init(1)>订单</a>
				</div>

				<!-- 订单 -->
				<ul class="choosepro-main" v-show='order'>
					<li class="pro-li header">
						<span class="pro-li-span">订单ID</span>
						<span class="pro-li-span">厂商ID</span>
						<span class="pro-li-span">厂商名称</span>
						<span class="pro-li-span">产品ID</span>
						<span class="pro-li-span">产品名称</span>
						<span class="pro-li-span">产品数量</span>
						<span class="pro-li-span">创建日期</span>
						<span class="pro-li-span">状态</span>

					</li>
					<li class="pro-li" v-for='item in proInfo'>
						<span class="pro-li-span"><span class="check-box checkshu" @click='selectThis'></span>{{item.orderId}}</span>
						<span class="pro-li-span">{{item.vendorId}}</span>
						<span class="pro-li-span">{{item.vendorName}}</span>
						<span class="pro-li-span">{{item.productId}}</span>
						<span class="pro-li-span">{{item.productName}}</span>
						<span class="pro-li-span">{{item.productCount}}</span>
						<span class="pro-li-span">{{item.createDate}}</span>
						<span class="pro-li-span">{{item.status}}</span>

					</li>
				</ul>

				<!-- 产品 -->
				<ul class="choosepro-main" v-show='product'>
					<li class="pro-li">
						<span class="pro-li-span head">产品ID</span>
						<span class="pro-li-span head">产品名称</span>
						<span class="pro-li-span head">产品类型</span>
						<span class="pro-li-span head">产品库分类</span>
						<span class="pro-li-span head">价格/元</span>
						<span class="pro-li-span head">排序</span>
						<span class="pro-li-span head">更新时间</span>

					</li>
					<li class="pro-li" v-for='(item,index) in info'>
						<span class="pro-li-span"><span class="check-box checkshu" @click='selectThis'></span>{{item.id}}</span>
						<span class="pro-li-span" style="text-align:left;"><img style="width:45px;margin-left:20px;" v-bind:src="'https://ym-a.top/'+item.productImg">{{item.productName}}</span>
						<span class="pro-li-span">{{item.productSpe}}</span>
						<span class="pro-li-span">{{item.rowName}}</span>
						<span class="pro-li-span">{{item.productPrice}}</span>
						<span class="pro-li-span">{{item.sortNum}}</span>
						<span class="pro-li-span wordbreak">{{item.lastUpdateTime}}</span>
					</li>
				</ul>
				<div class="page-num" v-if='order'>
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
					您可以根据需求，发布一条积分规则表。
					<router-link to='/twoCode/signIn'><span class='returnBtn'>返回</span></router-link>
				</p>
				<div class="right-main-top2">
					<p style="color: red;">重要提示：</p>
					<p style="color: #cbcbcc">1、新建积分规则表需要选择一条或多条“产品/订单”进行绑定
					</p>
					<p style="color: #cbcbcc">
						2、新建积分规则表需要设置用户获取积分的方式
					</p>
					<p style="color: #cbcbcc">
						3、新建积分规则表需要设置“生效时间”和“结束时间”
					</p>
				</div>
			</div>
			<div class="right-main-bottom">
				<div class="messagebox">
					<span class="message-name star">规则名：</span>
					<input class="message-value" type="text" maxlength="20" name="" v-model='ruleName'>
					<span class="after">（限20字内）</span>
				</div>
				<div class="messagebox">
					<span class="message-name">绑定产品/订单：</span>
					<input class="message-value" @focus='init(1)' v-model='selectId'>
				</div>
				<div class="messagebox">
					<span class="message-name">积分获取方式：</span>
					<select class="message-value">
						<option>扫码获取积分</option>
					</select>
				</div>
				<div class="messagebox">
					<span class="message-name">每次追加积分数：</span>
					<input class="message-value" v-model='eveAddIntegralCount'>
					<span class="after">（默认值为1）</span>
				</div>
				<div class="messagebox">
					<span class="message-name star">积分扣除方式：</span>
					<select class="message-value" v-model='autoFlag'>
						<option value="1">手动兑换扣除积分</option>
						<option value="2">积分自动扣除</option>
					</select>
				</div>
				<div class="messagebox">
					<span class="message-name">兑换限制：</span>
					<input class="message-value" type="text" name="" v-model='eveGetExchangesCount'>
					<span class="after">（每人可兑换的数量，默认无上限）</span>
				</div>
				<div class="messagebox">
					<span class="message-name star">生效时间：</span>
					<input class="message-value" type="date" maxlength="20" name="" v-model='startTime'>
				</div>
				<div class="messagebox">
					<span class="message-name star">失效时间：</span>
					<input class="message-value" type="date" maxlength="20" name="" v-model='expireTime'>
				</div>
				<div class="button-group">
					<input class="delbutton" style="width: 90px;height: 34px;" type="button" name="" value='完成' @click='complete'>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import {mapState} from 'vuex'
	import common from '../../common.js'
	import router from '../../router.js'
	export default{
		data(){
			return{
				ruleName:null,
				productId:null,
				orderId:null,
				startTime:null,
				expireTime:null,
				showMB:false,
				totalPage:[],
				resData:[],
				totalPages:'',
				currentPage:'',
				info:[],
				order:false,
				product:false,
				selectId:null,
				proInfo:[],
				startTime:null,
				expireTime:null,
				autoFlag:null,
				integralActionScope:0,
				eveAddIntegralCount:1,
				eveGetExchangesCount:null,
				showWarn:false,
				warnText:null
			}
		},
		props:['datas'],
		methods:{
			start(){
				var self=this;
				if(this.ruleId){
					var url='https://ym-a.top/cloud_code/GET/vendorIntegral/findRuleByInteRuleId.do';
					var type='get';
					var data={
						inteRuleId:self.ruleId,
						vendorId:self.datas.vendorId
					};
					var success=function(res){
						console.log(res);
						self.ruleName=res.ruleName;
						self.selectId=res.productId||res.orderId;
						self.ruleType=res.ruleType;
						self.eveGetExchangesCount=res.eveGetExchangesCount;
						self.startTime=res.createTime;
						self.expireTime=res.expireTime;
						self.createTime=res.createTime;
						self.autoFlag=res.autoFlag;
					};
					common.Ajax(url,type,data,success)
				}
			},
			//选择订单
			init:function(currentPage){
				var self=this;
				$('.has-select').removeClass('has-select');
				self.showMB=true;
				self.order=true;
				self.product=false;
				self.rule=false;
				var url='https://ym-a.top/cloud_code/GET/CollectWord/getCollectWordOrder.do';
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
					self.proInfo=res.result.data;
					self.totalPages=res.totalPages;
					self.currentPage=res.currentPage;
					self.getPage();
					var vendorName=res.result.data[0].vendorName;
					self.$emit('upvendorName',vendorName);
				}
		        //调用ajax
		        common.Ajax(url,type,data,success)
		    },

		    //选择产品
		    choosePro:function(currentPage){
		    	var self=this;
		    	$('.has-select').removeClass('has-select');
		    	self.showMB=true;
		    	self.product=true;
		    	self.order=false;
		    	self.rule=false;
		    	var url='https://ym-a.top/cloud_code/GET/CollectWord/getProductForCollectWord.do';
		    	var type='get';
		    	var data={
		    		vendorId:parseInt(self.datas.vendorId),
		    		currentPage:currentPage,
		    		pageSize:0
		    	};
		    	var success=function(res){
		    		self.info=res.result.data;
		    		self.resData=res;
		    		self.totalPages=res.totalPages;
		    		self.currentPage=res.currentPage;
		    		self.getPage();
		    	};
		    	common.Ajax(url,type,data,success)
		    },

		    //确认
		    confirm:function(){
		    	var self=this;
		    	if(self.order){
		    		self.selectId=$('.has-select').parent().text();
		    		self.orderId=self.selectId;
		    		self.productId=null;
		    		self.integralActionScope=3
		    	}
		    	if(self.product){
		    		self.selectId=$('.has-select').parent().text();
		    		self.productId=self.selectId;
		    		self.orderId=null;
		    		self.integralActionScope=1
		    	}
		    	self.showMB=false;
		    	self.order=false;
		    	self.product=false;
		    },

		    //隐藏蒙版
		    hide:function(){
		    	var self=this;
		    	self.showMB=false;
		    	self.order=false;
		    	self.product=false;

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

		    complete(){
		    	var self=this;
		    	if(self.ruleName===null||self.ruleName===''){
		    		self.showWarn=true;
		    		self.warnText='请填写规则名';
		    		return
		    	}
		    	if(self.autoFlag===null){
		    		self.showWarn=true;
		    		self.warnText='请选择积分扣除方式';
		    		return
		    	}
		    	if(self.startTime===null){
		    		self.showWarn=true;
		    		self.warnText='请设置生效时间';
		    		return
		    	}
		    	if(self.expireTime===null){
		    		self.showWarn=true;
		    		self.warnText='请设置失效时间';
		    		return
		    	}
		    	if(self.ruleId){
		    		var url='https://ym-a.top/cloud_code/GET/vendorIntegral/updateVendorIntegralRule.do';
		    		var type='post';
		    		var data={
		    			ruleName:self.ruleName,
		    			vendorId:self.datas.vendorId,
		    			ruleType:1,
		    			startTime:self.startTime,
		    			expireTime:self.expireTime,
		    			productId:self.productId,
		    			orderId:166,
		    			autoFlag:self.autoFlag,
		    			integralActionScope:self.integralActionScope,
		    			eveAddIntegralCount:self.eveAddIntegralCount,
		    			eveGetExchangesCount:self.eveGetExchangesCount
		    		}
		    		console.log(data)
		    		var success=function(res){
		    			if(res.errorCode===0){
		    				router.push({path:'/twoCode/signIn'})
		    			}else{
		    				self.showWarn=true;
		    				self.warnText=res.mag;
		    			}
		    		}
		    		common.Ajax(url,type,data,success)
		    		return
		    	}
		    	var url='https://ym-a.top/cloud_code/GET/vendorIntegral/CreateVendorIntegralRule.do';
		    	var type='post';
		    	var data={
		    		ruleName:self.ruleName,
		    		vendorId:self.datas.vendorId,
		    		ruleType:1,
		    		startTime:self.startTime,
		    		expireTime:self.expireTime,
		    		productId:self.productId,
		    		orderId:166,
		    		autoFlag:self.autoFlag,
		    		integralActionScope:self.integralActionScope,
		    		eveAddIntegralCount:self.eveAddIntegralCount,
		    		eveGetExchangesCount:self.eveGetExchangesCount
		    	}
		    	console.log(data)
		    	var success=function(res){
		    		if(res.errorCode===0){
		    			router.push({path:'/twoCode/signIn'})
		    		}else{
		    			self.showWarn=true;
		    			self.warnText=res.mag;
		    		}
		    	}
		    	common.Ajax(url,type,data,success)
		    },

		    //获取页数
		    getPage:common.getPage,
      		//翻页
      		changePage:function(){
      			var self=this;
      			self.currentPage=$(event.target).attr('data-page');
      			if(self.order){

      				self.init(self.currentPage);
      				$('.checkshu').addClass('check-box').removeClass('has-select');
      				self.chechednum=0;
      			}else{
      				self.currentPage=$(event.target).attr('data-page');
      				self.chooseRule(self.currentPage);
      				$('.checkshu').addClass('check-box').removeClass('has-select');
      				self.chechednum=0;
      			}


      		},

      //上一页
      prevPage:common.prevPage,

      //下一页
      nextPage:common.nextPage,
  },
  computed:{
  	...mapState({
  		isNew:state=>state.signIn.isNew,
  		ruleId:state=>state.signIn.ruleId,
  	})
  },
  mounted(){
  	this.start()
  }
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
	.right-main-bottom{
		padding-left: 20px;
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
</style>