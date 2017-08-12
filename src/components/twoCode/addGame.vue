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
					<span class="message-name">选择订单：</span>
					<input class="message-value" type="text">
				</div>
				<div class="gameMessage">
					<span class="message-name">选择规则：</span>
					<input class="message-value" type="text">
				</div>
				<div class="gameMessage">
					<span class="message-name">生效时间：</span>
					<input class="message-value" type="date">
				</div>
				<div class="gameMessage">
					<span class="message-name">失效时间：</span>
					<input class="message-value" type="date">
				</div>
				<input class="next" type="button" name="" value="完成">
			</div>
		</div>
	</div>
	
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				showWarn:false,
				warnText:null,
			}
		},
		methods:{

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
</style>