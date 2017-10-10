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
					<input class="delbutton" type="button" name="" value="确定" @click='delThis'>
					<input class="delbutton" type="button" name="" value="取消" @click='showWarn=false'>
				</div>
			</div>
		</div>
		<div class="top-title">
			<a href="javascript:void(0)" class='title-one'>积分获取规则</a>
			<router-link to='/twoCode/IntegralUseRule' class='title-two'>积分使用规则</router-link>
			<router-link to='/twoCode/userInfomation' class='title-two'>用户信息</router-link>
			<router-link to='/twoCode/exchange' class='title-two'>兑换记录</router-link>
		</div>
		<div class="right-main">
			<div class="right-main-bottom">
				<div class="button-group">
					<a href="javascript:void(0)" @click='addRule'>
						<div class="add-pro">
							+新建积分获取规则
						</div>
					</a>
				</div>
				<div class="my-form">
					<ul class="pro-list">
						<li class="pro-li">
							<span class="pro-li-span">规则ID</span>
							<span class="pro-li-span">规则名称</span>
							<span class="pro-li-span">绑定产品/订单ID</span>
							<span class="pro-li-span">状态</span>
							<span class="pro-li-span">积分方式</span>
							<span class="pro-li-span">兑换次数</span>
							<span class="pro-li-span">有效时间</span>
							<span class="pro-li-span">创建时间</span>
							<span class="pro-li-span">操作</span>
						</li>
						<li class="pro-li" v-for='item in list' v-bind:class="{'turn-off':item.isUseing===1}">
							<span class="pro-li-span">{{item.inteRuleId}}</span>
							<span class="pro-li-span">{{item.ruleName}}</span>
							<span class="pro-li-span">{{item.productId}}</span>
							<span class="pro-li-span">
								<span v-if='item.isUseing===1' class="qidong" @click='changeState(item.inteRuleId)'></span>
								<span v-if='item.isUseing===2' class="zanting2" @click='changeState(item.inteRuleId)'></span>
							</span>
							<span class="pro-li-span">{{item.ruleType}}</span>
							<span class="pro-li-span">{{item.eveGetExchangesCount}}</span>
							<span class="pro-li-span">{{item.expireTime}}</span>
							<span class="pro-li-span">{{item.createTime}}</span>
							<span class="pro-li-span">
								<span class="bianji" @click='compile(item.inteRuleId)'></span>
								<span class="shanchu" @click='delInfo(item.inteRuleId)'></span>
							</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="page-button">
				<div class="page-num">
					<ul class="page-num-ul">
						<a href="javascript:void(0)"><li class="page-num-li-arrow page-num-li" v-if='currentPage>1' @click='prevPage'><span class="arrow-left"></span></li></a>
						<a href="javascript:void(0)"><li class="page-num-li" v-if='currentPage>4&&totalPage.length!=1&&totalPage[0]!=1' v-bind:data-page='1' @click.self='changePage'>1</li></a>
						<a href="javascript:void(0)"><li class="page-num-li" v-if='currentPage>4&&totalPage.length!=1&&totalPage[0]!=1'>...</li></a>
						<a href="javascript:void(0)"><li class="page-num-li" v-for='item in totalPage' v-bind:class='{dangqianye:item==currentPage}' v-bind:data-page='item' @click.self='changePage'>{{item}}</li></a>
						<a href="javascript:void(0)"><li class="page-num-li" v-if='totalPages>5&&currentPage<totalPages-2'>...</li></a>
						<a href="javascript:void(0)"><li class="page-num-li" v-if='totalPages>5&&currentPage<totalPages-2' v-bind:data-page='resData.totalPages' @click.self='changePage'>{{resData.totalPages}}</li></a>

						<a href="javascript:void(0)"><li class="page-num-li page-num-li-arrow" v-if='currentPage<totalPages' @click='nextPage'><span class="arrow-right"></span></li></a>

					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import common from '../../common.js'
import router from '../../router.js'
import {mapMutations} from 'vuex'
export default{
	data(){
		return{
			list:null,
				totalPage:[],    //页码数组
				currentPage:'',  //当前页
				totalPages:'',    //总页数
				showWarn:false,
				warnText:null,
				delId:null
			}
		},
		props:['datas'],
		methods:{
			...mapMutations({
				reset:'signIn/reset',
				addNew:'signIn/addNew'
			}),
			init(currentPage){
				var self=this;
				var url='https://ym-a.top/cloud_code/GET/vendorIntegral/vendorIntegralRuleList.do';
				var type='get';
				var data={
					vendorId:self.datas.vendorId,
					currentPage:currentPage,
					pageSize:10
				};
				var success=function(res){
					console.log(res)
					self.list=res.result.data;
					self.totalPages=res.totalPages;
					self.currentPage=res.currentPage;
					self.getPage();
				};
				common.Ajax(url,type,data,success)
			},

			//编辑
			compile(id){
				this.reset(id);
				router.push({path:'/twoCode/addIntegralRule'})
			},

			//新建规则
			addRule(){
				this.addNew();
				router.push({path:'/twoCode/addIntegralRule'})
			},

			//删除
			delInfo(id){
				this.delId=id;
				this.showWarn=true;
				this.warnText='是否确定删除此规则？'
			},

			//确定删除
			delThis(){
				var self=this;
				var url='https://ym-a.top/cloud_code/GET/vendorIntegral/deleteVendorIntegral.do';
				var type='get';
				var data={
					vendorId:self.datas.vendorId,
					inteRuleId:self.delId
				};
				var success=function(res){
					if(res.errorCode===0){
						self.showWarn=false;
					}
				};
				common.Ajax(url,type,data,success)
			},

			//改变规则状态
			changeState(id){
				var self=this;
				var url='https://ym-a.top/cloud_code/GET/vendorIntegral/updateRuleStatus.do';
				var type='get';
				var data={
					vendorId:self.datas.vendorId,
					inteRuleId:id
				};
				var success=(res)=>{
					self.init(self.currentPage);
				};
				common.Ajax(url,type,data,success)
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
		mounted(){
			this.init();
		}
	}
	</script>

	<style scoped>
	.right-main-bottom{
		width: 95%;
		margin:auto;
		text-align: left;
	}
	.search-button{
		float: none;
	}
	.message-value{
		border: 1px solid #ccc;
		height: 30px;
		padding-left: 5px;
		border-radius: 5px;
	}
	.add-pro{
		margin-top: 40px;
	}
	.pro-li-span{
		width: 10.5%;
	}
	.turn-off{
		color: #d0d0d0;
	}
	</style>