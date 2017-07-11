<template>
	<div class="right-main">
	<div class="step3">
		<div class="top">
			<img src="../../assets/img/step3.png">
			<span class="return"><router-link to='/goods/proinfo' style="text-decoration: none">返回</router-link></span>
		</div>
		<div class="main">
			<div class="bianji">
				<img src="../../assets/img/imglevel11.png">
			</div>
			<div class="buttongroup">
				<router-link to='/goods/proinfo' style="text-decoration: none"><input class="jumpbutton" type="button" name="" value="上一步"></router-link>
				<input class="jumpbutton" type="button" name="" value="完成">

			</div>
		</div>
	</div>
		
	</div>
</template>

<style scoped>
@import "goodscommon.css";
div{
		text-align: left;
	}
	.main{
		margin-top: 70px;
	}
	.jumpbutton{
		color: #00baff;
		border: 1px solid #00baff;
		appearance: none;
		background-color: #fff;
		outline: none;
		border-radius: 3px;
		padding: 9px 38px;
		margin-right: 26px;
	}
	.buttongroup{
		margin: 85px 0 34px 185px;
	}
	.jumpbutton:hover{
		background-color: #00baff;
		color: #fff;
	}
</style>

<script>
	
</script>