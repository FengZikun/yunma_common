<template>
	<div>
		<div class="top-title">
			<a href="javascript:void(0)" class='title-one'>积分获取规则</a>
			<router-link to='/union/wdBill' class='title-two'>积分使用规则</router-link>
			<router-link to='/union/wdBill' class='title-two'>积分使用规则</router-link>
			<router-link to='/union/wdBill' class='title-two'>兑换记录</router-link>
		</div>
		<div class="right-main">
			<div class="right-main-bottom">
				<div class="button-group">
					<router-link to='/twoCode/addIntegralRule'>
						<div class="add-pro">
							+新建积分获取规则
						</div>
					</router-link>
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
						</li>
						<li class="pro-li" v-for='item in list'>
							<span class="pro-li-span">{{item.orderId}}</span>
							<span class="pro-li-span">{{item.name}}</span>
							<span class="pro-li-span">{{item.couponId}}</span>
							<span class="pro-li-span">{{item.couponName}}</span>
							<span class="pro-li-span">{{item.leastCost}}</span>
							<span class="pro-li-span">{{item.reduce}}</span>
							<span class="pro-li-span">{{item.realMoney}}</span>
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
			}
		},
		props:['vendorId'],
		methods:{
			init(){
				
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
	.add-pro{
		margin-top: 40px;
	}
</style>