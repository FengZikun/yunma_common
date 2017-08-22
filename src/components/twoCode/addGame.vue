<template>
	<div>
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

				<!-- 规则 -->
				<ul class="choosepro-main" v-show='rule'>
					<li class="pro-li">
						<span class="pro-li-span head">规则ID</span>
						<span class="pro-li-span head">规则名称</span>
						<span class="pro-li-span head">中奖字</span>
						<span class="pro-li-span head">创建时间</span>

					</li>
					<li class="pro-li" v-for='item in ruleInfo'>
						<span class="pro-li-span"><span class="check-box checkshu" @click='selectThis'></span>{{item.id}}</span>
						<span class="pro-li-span">{{item.name}}</span>
						<span class="pro-li-span">{{item.prize_item}}</span>
						<span class="pro-li-span">{{item.createTime}}</span>
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
		<div class="top-title">
			<router-link to="/twoCode/game" class='title-one'>列表</router-link>
			<router-link to="/twoCode/gameRule" class='title-two'>规则</router-link>
			<router-link to="/twoCode/exhibitors" class='title-two'>中奖名单</router-link>
		</div>
		<div class="right-main">
			<div class='right-main-top'>
				<p class='right-main-top1'>
					<span class='right-main-top-icon1'></span>
					<span class='top_two'>您可以根据需求，选择产品或订单设置集字游戏</span>
				</p>
				<p class='right-main-top2'>
					<span style="color:red">重要提示：</span><br>
					<span>1、新建集字游戏需要选择“产品/订单”和“规则”。</span><br>
					<span>2、新建集字游戏需要设置“生效时间”和“失效时间”。</span>
				</p>
			</div>
			<div class="right-main-bottom">
				<div class="gameMessage">
					<span class="message-name">选择产品/订单：</span>
					<input class="message-value" type="text" @focus='init(1)' v-model='selectId'>
				</div>
				<div class="gameMessage">
					<span class="message-name">选择规则：</span>
					<input class="message-value" type="text" @focus='chooseRule' v-model='ruleId'>
				</div>
				<div class="gameMessage">
					<span class="message-name">生效时间：</span>
					<input class="message-value" type="date" v-model='create_time'>
				</div>
				<div class="gameMessage">
					<span class="message-name">失效时间：</span>
					<input class="message-value" type="date" v-model='invalid_time'>
				</div>
				<input class="next" type="button" name="" value="完成" @click='complete'>
			</div>
		</div>
	</div>

</template>

<script type="text/javascript">
	import common from '../../common.js'
	import router from '../../router.js'
	export default{
		data(){
			return{
				showWarn:false,
				warnText:null,
				showMB:false,
				totalPages:'',    //总页数
        		currentPage:'',  //当前页
        		resData:[],      //请求回的所有数据
        		totalPage:[],    //页码数组
       			proInfo:[],      //信息数组
       			order:false,
       			product:false,
       			info:[],
       			selectId:null,
       			orderId:null,
       			product:null,
       			rule:false,
       			ruleInfo:[],
       			ruleId:null,
       			create_time:null,
				invalid_time:null,
	       		}
	       	},
	       	props:['datas'],
	       	methods:{
			//选择订单
			init:function(currentPage){
				var self=this;
				$('.has-select').removeClass('has-select');
				self.showMB=true;
				self.order=true;
				self.product=false;
				self.rule=false;
				var url='https://ym-a.top/cloud_code/GET/product/productEnvInfoList.do';
				var type='get';
				var data={
					vendorId:self.datas.vendorId,
					currentPage:currentPage,
					envFlag:0
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
		    	var url='https://ym-a.top/cloud_code/GET/product/info.do';
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

		    //选择规则
		    chooseRule:function(){
		    	var self=this;
		    	self.showMB=true;
		    	self.product=false;
		    	self.order=false;
		    	self.rule=true;
		    	var url='https://ym-a.top/cloud_code/GET/CollectWord/getRuleList.do';
		    	var type='get';
		    	var data={
		    		vendorId:parseInt(self.datas.vendorId),
		    	};
		    	var success=function(res){
		    		self.ruleInfo=res.data;
		    		self.resData=res;
		    	};
		    	common.Ajax(url,type,data,success)
		    },

		    //确认
			confirm:function(){
				var self=this;
				if(self.order){
					self.selectId=$('.has-select').parent().text();
					self.orderId=self.selectId;
					self.productId=null
				}
				if(self.product){
					self.selectId=$('.has-select').parent().text();
					self.productId=self.selectId;
					self.orderId=null
				}
				if(self.rule){
					self.ruleId=$('.has-select').parent().text();
				}
				self.showMB=false;
				self.order=false;
				self.rule=false;
				self.product=false;
				// self.proInfo=[];
			},

			//完成
			complete(){
				var self=this;
				if(self.selectId===null||self.selectId===''){
					self.showWarn=true;
					self.warnText='请选择产品/订单'
					return
				}
				if(self.ruleId===null){
					self.showWarn=true;
					self.warnText='请选择规则'
					return
				}
				if(self.create_time===null){
					self.showWarn=true;
					self.warnText='请设置生效时间'
					return
				}
				if(self.invalid_time===null){
					self.showWarn=true;
					self.warnText='请设置失效时间'
					return
				}
		    	var url='https://ym-a.top/cloud_code/ADD/CollectWord/addCollectWordGame.do';
		    	var type='post';
		    	var data={
		    		vendor_id:self.datas.vendorId,
		    		order_id:self.orderId,
		    		product_id:self.productId,
		    		rule_id:self.ruleId,
		    		effect_time:self.create_time,
		    		invalid_time:self.invalid_time,
		    	};
		    	var success=function(res){
		    		if(res.status===1){
		    			router.push({path:'/twoCode/game'})
		    		}else{
		    			self.showWarn=true;
		    			self.warnText=res.msg;
		    		}
		    	};
		    	common.Ajax(url,type,data,success)

			},
			//隐藏蒙版
			hide:function(){
				var self=this;
				self.showMB=false;
				self.order=false;
				self.rule=false;
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
  }
}
</script>

<style scoped>
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
	.gameMessage{
		margin-top: 40px;
	}
	.message-name{
		display: inline-block;
		width: 120px;
		text-align: right;
		color: #000;
		vertical-align: middle;
	}
	.message-value{
		border: 1px solid #e8e8ec;
		width: 333px;
		height: 36px;
		padding-left: 5px;
	}
	.next{
		width: 130px;
		height: 36px;
		display: block;
		color: #fff;
		background-color: #00baff;
		outline: none;
		border: none;
		border-radius: 3px;
		padding: 0 10px;
		margin-left: 70px;
		margin-top: 80px;
		margin-bottom: 100px;
	}
	.choosepro-main:nth-of-type(3) .pro-li-span{
		width: 24%;
	}
	.choosepro-main:nth-of-type(2) .pro-li-span{
		width: 13%;
	}
</style>