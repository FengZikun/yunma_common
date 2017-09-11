<template>
	<div>
		<div class="right-main">
			<div class="right-main-top">
				<p class="right-main-top1">
					<span class="right-main-top-icon1"></span>
					您可以根据需求，发布一条积分规则表。
					<router-link to='/twoCode/signIn'><span class='returnBtn'>返回</span></router-link>
				</p>
				<div class="right-main-top2">
					<p style="color: red;">重要提示：</p>
					<p style="color: #cbcbcc">1、新建积分规则表需要选择一条或多条“产品/订单”进行绑定
					</p>
					<p style="color: #cbcbcc">
						2、新建积分规则表需要设置用户获取积分的方式
					</p>
					<p style="color: #cbcbcc">
						3、新建积分规则表需要设置“生效时间”和“结束时间”
					</p>
				</div>
			</div>
			<div class="right-main-bottom">
				<div class="messagebox">
					<span class="message-name">规则名：</span>
					<input class="message-value" type="text" maxlength="20" name="">
					<span class="after">（限20字内）</span>
				</div>
				<div class="messagebox">
					<span class="message-name">绑定产品/订单：</span>
					<select class="message-value">
						
					</select>
				</div>
				<div class="messagebox">
					<span class="message-name">积分获取方式：</span>
					<select class="message-value">
						
					</select>
				</div>
				<div class="messagebox">
					<span class="message-name">生效时间：</span>
					<input class="message-value" type="date" maxlength="20" name="">
				</div>
				<div class="messagebox">
					<span class="message-name">失效时间：</span>
					<input class="message-value" type="date" maxlength="20" name="">
				</div>
				<div class="button-group">
					<input class="delbutton" type="button" name="" value='完成'>
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

			}
		},
		props:['vendorId'],
		methods:{

		},
	}
</script>

<style scoped>
	.right-main-top{
		width: 90%;
		margin: auto;
		padding-top: 60px;
		padding-bottom: 40px;
		border-bottom: 1px solid #e7ebee;
		text-align: left;
	}
	.right-main-top-icon1{
		width: 18px;
		height: 18px;
		background: url("../../assets/img/icon_tishi.png") no-repeat;
		float: left;
		margin-right: 8px;
	}
	.messagebox{
		margin-top: 20px;
		
	}
	.message-name{
		display: inline-block;
		width: 115px;
		text-align: right;
	}
	.message-value{
		width: 230px;
		height: 36px;
		border-radius: 5px;
		border: 1px solid #e7e7eb;
		margin-left: 30px;
		padding-left: 10px;
	}
	.after{
		display: inline-block;
		color:#b3b3b7;
	}
	.button-group{
		margin-left: 149px;
		margin-top: 100px;
		margin-bottom: 40px;
	}
	.delbutton{
		width: 90px;
		height: 34px;
	}
</style>