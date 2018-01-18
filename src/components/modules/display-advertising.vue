<template>
	<div>
		<div class="pic-ad" style="width: 100%;">
			<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
				<!-- Indicators -->
				<ol class="carousel-indicators" style="bottom: 0;">
					<li v-for='item in picNum' data-target="#carousel-example-generic" data-slide-to="item" class="active"></li>
				</ol>

				<!-- Wrapper for slides -->
				<div class="carousel-inner" role="listbox">
					<div class="item" v-for='(item,index) in bannerPic' :class='{active:index==0}' v-if='index<picNum'>
						<a :href='item.address'>
						<img v-if='item.src!=null' style="width: 100%;height: 140px;" v-bind:src='item.src' alt="...">
						
						<img v-else style="width: 100%;height: 140px;" v-bind:src="item.img" alt="...">
						</a>
						<div class="carousel-caption">
							
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="border hidelist">
			<input class="modulerRedactButton" type="button" name="" value="编辑">
			<input class="moduleDelButton hidelist" type="button" name="" value="删除" @click='delPicAd'>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import {mapActions} from 'vuex'
	export default{
		data(){
			return{
				showDel:false,
			}
		},
		methods:{
			...mapActions({
				delThis1:'banner1/delThis1'
				}),
			init(){
				
			},
			delPicAd(){
				var self=this;
				var type=$(event.target).parents('.template').attr('data-type');
				self.delThis1();
				$('.box').removeClass('detail');
			}
		},
		computed: mapState({
			picAd1:state=>state.banner1.data.picAd1,
			bannerPic:state=>state.banner1.data.bannerPic,
			picNum:state=>state.banner1.data.picNum,
		}),
		mounted(){
			$('.carousel').carousel({
					interval: 2000
				})
		}
	}
</script>

<style scoped>
	.pic-ad{
		width: 100%;
	}
	.carousel-indicators{
		width: 80px;
		margin-left: -15%;
	}
</style>