<template>
	<div>
		<div class="top-title">
			<a href="javascript:void(0)" class='title-one'>微信小店</a>
			<router-link to='/union/wdBill' class='title-two'>微店</router-link>
		</div>
		<div class="right-main">
			<div class="right-main-bottom">
				<div class="button-group">
					<span>筛选时间：</span>
					<input class="message-value" type="date" name="" v-model='startTime' @input='setTime'>
					<span>至</span>
					<input class="message-value" type="date" name="" v-model='endTime' :min='maxDate'>
					<input type="button" class="search-button" name="" value="搜索" @click='search'>
					<div class="count">
						<span>实付合计：￥</span>
						<span v-if='resData!==null'>{{resData.sum}}</span>
					</div>
				</div>
				<div class="my-form">
					<ul class="pro-list">
						<li class="pro-li">
							<span class="pro-li-span">订单ID</span>
							<span class="pro-li-span">商品名</span>
							<span class="pro-li-span">优惠券ID</span>
							<span class="pro-li-span">优惠券名</span>
							<span class="pro-li-span">最低消费</span>
							<span class="pro-li-span">优惠金额</span>
							<span class="pro-li-span">实付</span>
							<span class="pro-li-span">交易时间</span>
						</li>
						<li class="pro-li" v-for='item in list'>
							<span class="pro-li-span">{{item.orderId}}</span>
							<span class="pro-li-span">{{item.name}}</span>
							<span class="pro-li-span">{{item.couponId}}</span>
							<span class="pro-li-span">{{item.couponName}}</span>
							<span class="pro-li-span">{{item.leastCost}}</span>
							<span class="pro-li-span">{{item.reduce}}</span>
							<span class="pro-li-span">{{item.price}}</span>
							<span class="pro-li-span">{{item.payTime}}</span>
						</li>
					</ul>
				</div>
			</div>

		</div>
	</div>
</template>

<script type="text/javascript">
	import common from '../../common.js'
	export default{
		data(){
			return{
				list:null,
				resData:null,
				startTime:null,
				endTime:null,
				maxDate:null
			}
		},
		props:['vendorId'],
		methods:{
			init(){
				var self=this;
				var nowdays = new Date();
				var year = nowdays.getFullYear();
				var month = nowdays.getMonth();
				if(month==0)
				{
					month=12;
					year=year-1;
				}
				if (month < 10) {
					month = "0" + month;
				}
				var firstDay = year + "-" + month + "-" + "01";
				var myDate = new Date(year, month, 0);
				var lastDay = year + "-" + month + "-" + myDate.getDate();
				var thisMonth='0'+(parseInt(month)+1);
				self.maxDate=year+'-'+thisMonth+'-'+(nowdays.getDate()-1);
			//微信小店
			var url='https://ym-a.top/cloud_code/wechatcouponorder/getBillV2.do';
			var type='post';
			var data={
				vendorId:self.vendorId,
				type:5,
				startTime:firstDay,
				endTime:lastDay,
			}
			var success=function(res){
				self.list=res.data;
				self.resData=res;
				console.log(res);
			};
			common.Ajax(url,type,data,success)
		},

		//搜索
		search(){
			var url='https://ym-a.top/cloud_code/wechatcouponorder/getBillV2.do';
			var type='post';
			var data={
				vendorId:self.vendorId,
				type:5,
				startTime:self.startTime,
				endTime:self.endTime,
			}
			var success=function(res){
				self.list=res.data;
				self.resData=res;
				console.log(res);
			};
			common.Ajax(url,type,data,success)
		},

		//设置日期
		setTime(){
			this.maxDate=this.startTime;
		}
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
	.button-group{
		margin-top: 20px;
	}
	.count{
		display: inline-block;
		float: right;
	}
</style>