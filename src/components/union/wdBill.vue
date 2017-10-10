<template>
	<div>
		<div class="top-title">
			<router-link to='/union/bill' class='title-two'>微信小店</router-link>
			<router-link to='/union/wdBill' class='title-one'>微店</router-link>
		</div>
		<div class="right-main">
			<div class="right-main-bottom">
				<div class="button-group">
					<span>筛选时间：</span>
					<input class="message-value" type="month" name="" v-model='searchMonth'>
					<input type="button" class="search-button" name="" value="搜索" @click='search(searchMonth)'>
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
							<span class="pro-li-span"><span v-for='pro in item.items'>{{pro.item_name}} </span></span>
							<span class="pro-li-span">{{item.couponId}}</span>
							<span class="pro-li-span">{{item.name}}</span>
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
			searchMonth:null,
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

				//微店
				var url2='https://ym-a.top/cloud_code/wdcouponorder/getBill.do';
				var type2='post';
				var data2={
					vendorId:this.vendorId,
					startTime:firstDay,
					endTime:lastDay,
				}
				var success2=function(res){
					console.log(res);
					self.resData=res;
					self.list=res.data;
				};
				common.Ajax(url2,type2,data2,success2)
			},

		//搜索
		search(month){
			var self=this;
			var year=parseInt(month.split('-')[0]);
			var selmonth=parseInt(month.split('-')[1]);
			var myDate = new Date(year, selmonth, 0);
			var firstDay=month+"-"+"01";
			var lastDay=month+"-"+myDate.getDate();
			var url2='https://ym-a.top/cloud_code/wdcouponorder/getBill.do';
				var type2='post';
				var data2={
					vendorId:this.vendorId,
					startTime:firstDay,
					endTime:lastDay,
				}
				var success2=function(res){
					console.log(res);
					self.resData=res;
					self.list=res.data;
				};
				common.Ajax(url2,type2,data2,success2)
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
.count{
	display: inline-block;
	float: right;
}
.button-group{
	margin-top: 20px;
}
</style>