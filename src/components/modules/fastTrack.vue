<template>
	<div>
		<div class="pic-ad" style="margin: 12px 0;">
			<div class="channel website" v-if='website'>
			<img src="../../assets/img/icon_guanwang.png">
				{{websiteVal}}
			</div>
			<div class="channel weiStore" v-if='weiStore'>
			<img src="../../assets/img/icon_shangcheng.png">
				{{weiStoreVal}}
			</div>
			<div class="channel noBottom" v-if='officialAccounts'>
			<img src="../../assets/img/icon_weixin.png">
				{{officialAccountsVal}}
			</div>
		</div>

		<div class="pic-ad" v-if='complain'>
			<div class="channel noBottom">
			<img src="../../assets/img/icon_tousu.png">
				{{complainVal}}
			</div>
		</div>
		<div class="border hidelist">
			<input class="modulerRedactButton" type="button" name="" value="编辑">
			<input class="moduleDelButton hidelist" type="button" name="" value="删除" @click='delFastTrack'>
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
				'delThis3'
				]),
			delFastTrack(){
				this.delThis3();
				$('.box').removeClass('detail');

			}
		},
		computed:{
			...mapState({
				website:state=>state.banner1.fastTrackData.website,
				websiteVal:state=>state.banner1.fastTrackData.websiteVal,
				officialAccounts:state=>state.banner1.fastTrackData.officialAccounts,
				officialAccountsVal:state=>state.banner1.fastTrackData.officialAccountsVal,
				complain:state=>state.banner1.fastTrackData.complain,
				complainVal:state=>state.banner1.fastTrackData.complainVal,
				weiStore:state=>state.banner1.fastTrackData.weiStore,
				weiStoreVal:state=>state.banner1.fastTrackData.weiStoreVal,
				})
		}
	}
</script>

<style scoped>
	.channel{
		height: 56px;
		line-height: 56px;
		padding: 0 5px;
		border-bottom: 1px solid #d1d1d1;
		width: 90%;
    	margin: 0 auto;
	}
	.noBottom{
		border-bottom: none;
	}
	.pic-ad{
		margin: 12px 0;
	}
</style>