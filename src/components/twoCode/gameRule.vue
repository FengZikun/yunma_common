<template>
	<div>
		<div class="top-title">
			<router-link to="/twoCode/game" class='title-two'>列表</router-link>
			<router-link to="/twoCode/gameRule" class='title-one'>规则</router-link>
			<router-link to="/twoCode/exhibitors" class='title-two'>中奖名单</router-link>
		</div>
		<div class="right-main">
			<div class="right-main-bottom">
				<div class="button-group">
					<router-link to='/twoCode/addGameRule'>
						<div class="add-pro">
							+&nbsp;新建规则
						</div>
					</router-link>
				</div>
				<div class="my-form">
					<ul class="pro-list">
						<li class="pro-li">
							<span class="pro-li-span head">规则ID</span>
							<span class="pro-li-span head">规则名称</span>
							<span class="pro-li-span head">中奖字</span>
							<span class="pro-li-span head">创建时间</span>
						</li>
						<li class="pro-li">
							<span class="pro-li-span">1</span>
							<span class="pro-li-span">啊实打实</span>
							<span class="pro-li-span">集、字、兑、大、奖</span>
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
		width: 24%;
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