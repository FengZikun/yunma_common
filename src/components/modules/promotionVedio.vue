<template>
	<div>
		<div class="pic-ad">
			<div class="header">
				{{title}}
			</div>
			<div v-if='/embed/.test(videoSrc)||/iframe/.test(videoSrc)' v-html='videoSrc'>
				
			</div>
			<div v-if='/width/.test(videoSrc)===false&&videoSrc!==null&&videoSrc!==""'>
				<iframe :src='videoSrc' controls="controls"></iframe>
			</div>
			<div v-if='videoSrc===null||videoSrc===""'>
				<img style="width: 318px;" src="../../assets/img/s8.jpg">
			</div>
			<div class="footer">
				温馨提示：请在wifi环境下观看。
			</div>
		</div>
		<div class="border hidelist">
			<input class="modulerRedactButton" type="button" name="" value="编辑">
			<input class="moduleDelButton hidelist" type="button" name="" value="删除" @click='delPicPromotionVedio'>
		</div>
	</div>
</template>

<script type="text/javascript">
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
	export default{
		data(){
			return {

			}
		},
		methods:{
			...mapMutations([
				'delThis5'
				]),
			delPicPromotionVedio(){
				this.delThis5();
				$('.box').removeClass('detail');
			}
		},
		computed:{
			...mapState({
				title:state=>state.banner1.promotionVedioData.title,
				videoSrc:state=>state.banner1.promotionVedioData.videoSrc,
			})
		}
	}
</script>

<style scoped>
	.header{
		padding-left: 20px;
		padding-top: 10px;
	}
	.header:before{
		content: '';
		width: 4px;
		height: 17px;
		display: block;
		background-color: #dd2726;
		position: absolute;
		left: 10px;
	}
	.footer{
		height: 36px;
		padding-left: 20px;
	}
	embed{
		width: 100%;
	}
</style>