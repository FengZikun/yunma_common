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
			<router-link to='/twoCode/signIn' class='title-two'>积分获取规则</router-link>
			<a href="javascript:void(0)" class='title-one'>积分使用规则</a>
			<router-link to='/twoCode/userInfomation' class='title-two'>用户信息</router-link>
			<router-link to='/twoCode/exchange' class='title-two'>兑换记录</router-link>
		</div>
		<div class="right-main">
			<div class="right-main-bottom">
				<div class="button-group">
					<router-link to='/twoCode/addIntegralUseRule'>
						<div class="add-pro">
							+新建积分使用规则
						</div>
					</router-link>
				</div>
				<div class="my-form">
					<ul class="pro-list">
						<li class="pro-li">
							<span class="pro-li-span">使用规则ID</span>
							<span class="pro-li-span">绑定规则ID</span>
							<span class="pro-li-span">兑换礼品</span>
							<span class="pro-li-span">所需积分</span>
							<span class="pro-li-span">状态</span>
							<span class="pro-li-span">库存</span>
							<span class="pro-li-span">有效时间</span>
							<span class="pro-li-span">创建时间</span>
							<span class="pro-li-span">操作</span>
						</li>
						<li class="pro-li" v-for='item in list'>
							<span class="pro-li-span">{{item.inteExchangeId}}</span>
							<span class="pro-li-span">{{item.ruleId}}</span>
							<span class="pro-li-span">{{item.exchangesName }}</span>
							<span class="pro-li-span">{{item.integralExchangeCostCount}}</span>
							<span class="pro-li-span">{{item.status}}</span>
							<span class="pro-li-span">{{item.exchangesCount}}</span>
							<span class="pro-li-span">{{item.expireTime}}</span>
							<span class="pro-li-span">{{item.createTime}}</span>
							<span class="pro-li-span">
								<span class="bianji" @click='compile(item.inteExchangeId)'></span>
								<span class="shanchu" @click='delInfo(item.inteExchangeId)'></span>
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
				reset:'IntegralUseRule/reset',
				addNew:'IntegralUseRule/addNew'
			}),
			init(currentPage){
				var self=this;
				var url='https://ym-a.top/cloud_code/GET/vendorIntegral/vendorIntegralExchangesHistoryList.do';
				var type='get';
				var data={
					vendorId:self.datas.vendorId,
					currentPage:currentPage,
					pageSize:10
				};
				var success=function(res){
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
				router.push({path:'/twoCode/addIntegralUseRule'})
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
				var url='https://ym-a.top/cloud_code/GET/vendorIntegral/deleteExchangesInfo.do';
				var type='get';
				var data={
					vendorId:self.datas.vendorId,
					inteExchangeId:self.delId
				};
				var success=function(res){
					if(res.errorCode===0){
						self.showWarn=false;
					}
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
		width: 10.6%;
	}
</style>