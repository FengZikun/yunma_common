<template>
	<div>
		<div class="mengban" v-show='showMB'>
			<div class="proclassify" >
				<div class="classifyHeader">
					<span style="display:block;height:48px;line-height:48px;">关联微店</span>
				</div>
				<div class="messagebox">
					<span class="message-name">appKey：</span>
					<input class="message-value" type="text" name="" v-model='appKey'>
					<a href="javascript:void(0)" style="display: block;margin-left: 105px;" @click='showMB2=true;showMB=false'>如何获取appKey和secret</a>
					</div>
					<div class="messagebox">
						<span class="message-name">secret：</span>
						<input class="message-value" type="text" name="" v-model='secret'>
					</div>
					<div class="classifyFooter">
						<input class="delbutton" type="button" name="" value="确认" @click='connect'>
						<input class="delbutton" type="button" name="" value="取消" @click='hide'>
					</div>

				</div>
			</div>
			<div class="mengban" v-show='showMB2'>
				<div style="width: 1000px;height: 850px; overflow-y: scroll;margin: auto;position: absolute;top:100px;left: 220px;">
					<img style="width: 1000px" src="../../assets/img/2.jpg">
				</div>
				<img src="../../assets/img/icon_cha3.png" class="cha" @click='showMB=true;showMB2=false'>

			</div>
			<div class="right-main">
				<div class="right-main-top">
					<p class="right-main-top1">
						<span class="right-main-top-icon1"></span>
						<span style="display:inline-block;width:95%;">您可以设置不同的购物券领取活动，每个购物券活动均有独立的领取链接，您可将购物券的领取链接设置在商城自定义首页或自定义页面，让会员领取使用（促进转化），同时在商品详情页、购物车、活动中心均有领取入口。</span>

					</p>
				</div>
				<div class="right-main-bottom">
					<div class="button-group">
						<router-link to='/union/newActivities'>
							<div class="add-pro">
								+&nbsp;新建领券活动
							</div>
						</router-link>
						<router-link to='/union/newActivities'>
							<div class="add-pro2">
								同步信息
							</div>
						</router-link>
						<a href="javascript:void(0)" @click='search'>
							<div class="add-pro3">
								关联微店
							</div>
						</a>
					</div>
					<div class="my-form">
						<ul class="pro-list">
							<li class="pro-li">
								<span class="pro-li-span">优惠券名称</span>
								<span class="pro-li-span">活动时间</span>
								<span class="pro-li-span">优惠券价格</span>
								<span class="pro-li-span">领取限制</span>
								<span class="pro-li-span">适用范围</span>
								<!-- <span class="pro-li-span">操作</span> -->
							</li>
							<li class="pro-li" v-for="pro in proInfo">
								<span class="pro-li-span first" style="text-align: center;">{{pro.name}}</span>
								<span class="pro-li-span" style="text-align:center;line-height:24px;margin: 12px 0;">{{pro.beginTime}}<br>{{pro.endTime}}</span>
								<span class="pro-li-span">满 {{pro.leastCost}} 减 <span style="color:red;">{{pro.reduce}}</span></span>
								<span class="pro-li-span" style="line-height:24px;margin:12px 0;">每人限 {{pro.buyerLimit}} 张<br><span style="color: #c3c3c6">库存{{pro.stock}}</span></span>
								<span class="pro-li-span" v-if='pro.type==1'>微店优惠券</span>
								<span class="pro-li-span" v-else>商户号优惠券</span>
								<!-- <span class="pro-li-span">
									<router-link to='#'>
										<span class="bianji" @click.self='updata' v-bind:data-id='pro.id'></span>
									</router-link>
									<a href="javascript:void(0)">
										<span class="shanchu" @click.self='mengban2' v-bind:data-id='pro.id'></span>
									</a>
								</span> -->
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

	<script>
		import common from '../../common.js'
		export default{
			data(){
				return{
					childCon:'我是子页面',
		        chechednum:0,    //全选单选控制
		        proInfo:[],      //信息数组
		        totalPage:[],    //页码数组
		        resData:[],      //请求回的所有数据
		        showMB:false,    //蒙版开关
		        deleteArr:[],    //删除数组
		        currentPage:'',  //当前页
		        totalPages:'',    //总页数
		        keyword:'',
		        appKey:null,
		        secret:null,
		        showMB2:false
		    }
		},
		props:['vendorId'],
		methods:{
			//初始化
			init:function(currentPage){
				var self=this;
				var url='http://120.77.149.115/cloud_code/GET/wdCoupon/couponInfoList.do';
				var type='get';
				var data={
					vendorId:self.vendorId,
					pageSize:10,
					currentPage:currentPage
				};
				var success=function(res){
					console.log(res)
					var pagenum=res.totalPages;
					self.totalPage=[];
					self.resData=res;
					self.proInfo=res.result.data;
					self.totalPages=res.totalPages;
					self.currentPage=res.currentPage;
					self.getPage();
				}
		        //调用ajax
		        common.Ajax(url,type,data,success)
		    },


			//显示蒙版
			mengban2:function(){
				// this.showMB=true;
				// this.deleteArr.push($(event.target).attr('data-id'));
			},

			//获取
			search:function(){
				var self=this;
				self.showMB=true;
				var url='http://120.77.149.115/cloud_code/GET/wd/config.do';
				var type='get';
				var data={
					vendorId:self.vendorId
				};
				var success=function(res){
					if(res.statuscode===1){
						self.appKey=res.appKey;
						self.secret=res.secret;
					}
					
				};
				common.Ajax(url,type,data,success)
			},

			//关联微店
			connect:function(){
				var self=this;
				var url='http://120.77.149.115/cloud_code//ADD/wd/config.do';
				var type='post';
				var data={
					vendorId:self.vendorId,
					appKey:self.appKey,
					secret:self.secret
				};
				var success=function(res){
					if(res.statuscode===1||2){
						self.showMB=false
					}else{
						console.log(res.msg)
					}
				};
				common.Ajax(url,type,data,success)
			},

			//隐藏蒙版
			hide:function(){
				this.showMB=false;
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
		created:function(){
			this.init();
		}
	}
</script>

<style scoped>
	/*@import "../../assets/css/common.css";*/
	.pro-li-span{
		width: 19%;
	}
	.top-title{
		width: 95%;
		margin: auto;
		height: 36px;
		text-align: left;
		margin-top: 40px;
	}
	.right-main{
		width: 95%;
		height: 1310px;
		background: #fff;
		border-radius: 8px;
		margin: auto;
		margin-top: 44px;
	}
	.right-main-top{
		width: 95%;
		margin: auto;
		padding-top: 60px;
		text-align: left;
	}
	.right-main-top2,
	.right-main-top3{
		margin-left: 25px;
		color: #b3b3b3;
	}
	.right-main-top-icon1{
		width: 18px;
		height: 18px;
		background: url("../../assets/img/icon_tishi.png") no-repeat;
		float: left;
		margin-right: 8px;
	}
	.right-main-bottom{
		width: 95%;
		margin:auto;
		text-align: left;
		margin-top: 55px;
	}
	.page-num-ul a{
		display: inline-block;
	}
	.add-pro2{
		display: inline-block;
		text-align: center;
		width: 140px;
		height: 36px;
		line-height: 36px;
		border-radius: 8px;
		background-color: #ffa800;
		color: #fff;
		margin-left: 30px;
	}
	.add-pro3{
		float: right;
		display: inline-block;
		text-align: center;
		width: 140px;
		height: 36px;
		line-height: 36px;
		border-radius: 8px;
		background-color: #00baff;
		color: #fff;
		margin-left: 30px;
	}
	.classifyFooter{
		top: 34px;
	}
	.delbutton{
		margin-top: 15px;
	}
	.messagebox{
		margin-top: 30px;
		text-align: left;
	}
	.message-name{
		width: 100px;
		display: inline-block;
		text-align: right;
	}
	.message-value{
		border: 1px solid #ededed;
		height: 30px;
		padding-left: 5px;
		border-radius: 5px;
		text-align: left;
	}
	.cha{
		position: absolute;
		top: 70px;
		right: 100px;
	}
	.pro-li:nth-of-type(2){
		margin-top: 20px;
	}
	a:hover{
		text-decoration: none;
	}
</style>