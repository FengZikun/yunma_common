<template>
	<div>
	<a href="func/you.html">
		<div class="pic-ad myCoupon" style="height: 140px;line-height: 140px;text-align: center;">
			优惠券
		</div>
	</a>
		

		<div class="border hidelist">
			<input class="moduleDelButton" style="right: 0;" type="button" name="" value="删除" @click='delCoupon'>
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
			...mapMutations([
				'delThis6'
				]),
			delCoupon(){
				this.delThis6();
			}
		}
	}
</script>

<style scoped>
	
</style>