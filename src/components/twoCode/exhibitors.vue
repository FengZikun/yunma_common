<template>
	<div>
		<div class="top-title">
			<router-link to="/twoCode/game" class='title-two'>列表</router-link>
			<router-link to="/twoCode/gameRule" class='title-two'>规则</router-link>
			<router-link to="/twoCode/exhibitors" class='title-one'>中奖名单</router-link>
		</div>
		<div class="right-main">
			<div class="right-main-bottom">
				<div class="my-form">
					<ul class="pro-list">
						<li class="pro-li">
							<span class="pro-li-span head">订单/产品ID</span>
							<span class="pro-li-span head">兑换微信名</span>
							<span class="pro-li-span head">兑换奖项</span>
							<span class="pro-li-span head">联系电话</span>
							<span class="pro-li-span head">收货地址</span>
							<span class="pro-li-span head">兑换时间</span>
							<span class="pro-li-span head">是否发货</span>
						</li>
						<li class="pro-li">
							<span class="pro-li-span">1</span>
							<span class="pro-li-span">啊实打实</span>
							<span class="pro-li-span">集、字、兑、大、奖</span>
							<span class="pro-li-span"></span>
							<span class="pro-li-span"></span>
							<span class="pro-li-span"></span>
							<span class="pro-li-span"></span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{

			}
		}
	}
</script>

<style scoped>
	.right-main-bottom{
		width: 95%;
		margin:auto;
		text-align: left;
	}
	.button-group{
		margin-top: 40px;
	}
	.pro-li-span{
		width: 13%;
		height: 72px;
		line-height: 72px;
		vertical-align: middle;
	}
	.head{
		height: 60px;
		line-height: 60px;
	}
	.time{
		height: 52px;
	}
</style>