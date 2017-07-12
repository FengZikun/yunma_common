<template>
	<div class="right-main">
		<div class="right-main-main" id="pic">
			
		</div>
	</div>
</template>

<script>
	import common from '../../common.js';
	export default{
		data(){
			return{

			}
		},
		methods:{
			init:function(){
				var echarts = require('echarts');
				var myChart = echarts.init(document.getElementById('pic'));
				// myChart.showLoading();
			}
		},
		mounted:function(){
			this.init();
		}
	}
	
</script>

<style scoped>
	.right-main-main{
		widows: 95%;
		height: 500px;
	}
</style>