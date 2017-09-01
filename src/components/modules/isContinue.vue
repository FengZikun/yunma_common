<template>
	<div>
		<div class="pic-ad" style="width: 100%;height: 86px;text-align: center;line-height: 86px;background-color: #f7f7f7;">
			继续扫码
		</div>
		<div class="border hidelist">
			<input class="moduleDelButton" style="right: 0;" type="button" name="" value="删除" @click='delContinue'>
		</div>
	</div>
</template>

<script type="text/javascript">
import {mapMutations} from 'vuex'
	export default{
		data(){
			return {

			}
		},
		methods:{
			...mapMutations([
				'delThis4'
				]),
			delContinue(){
				this.delThis4()
			}
		}
	}
</script>

<style scoped>
	.pic-ad{
		width: 320px;
		height: 86px;
		text-align: center;
		line-height: 86px;
		background-color: #f7f7f7;
	}
	.moduleDelButton{
		right: 0;
	}
</style>