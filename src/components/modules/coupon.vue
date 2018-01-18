<template>
	<div>
	<a href="func/you.html">
		<div class="pic-ad myCoupon" style="height: 140px;line-height: 140px;text-align: center;">
			<img style="width: 100%" src="https://ym-a.top/wx/img/banner_youhuiquan.jpg">
		</div>
	</a>
		

		<div class="border hidelist">
			<input class="modulerRedactButton" data-type='1' type="button" name="" value="编辑">
			<input class="moduleDelButton hidelist" type="button" name="" value="删除" @click='delCoupon'>
		</div>
	</div>
</template>

<script type="text/javascript">
import {mapMutations} from 'vuex'
	export default{
		data(){
			return{

			}
		},
		methods:{
			...mapMutations({
				delThis6:'banner1/delThis6'
				}),
			delCoupon(){
				this.delThis6();
			}
		}
	}
</script>

<style scoped>
	
</style>