
<template>
	<div>
		<!-- 轮播图 -->
		<div class="mudule" v-if='showModule'>
			<div class="header">
				图片轮播
			</div>
			<p>建议上传图片尺寸为640*280</p>
			<div class="picture">
				<input class="hidelist" id="productImg1" type="file" name="productImg" @change='change($event)'>
				<label v-if='bannerPic[0].src==null' class="productImg" for="productImg1"></label>
				<label v-else class="productImg" v-bind:style="{backgroundImage: imgSrc}" for="productImg1"></label>
				<div class="linkBox">
					<span>链接：</span>
					<input type="text" name="" v-model='address1'>
				</div>
				
			</div>
			<div class="picture" v-if='picNum>=2'>
				<input class="hidelist" id="productImg2" type="file" name="productImg" @change='change($event)'>
				<label v-if='bannerPic[1].src==null' class="productImg" for="productImg2"></label>
				<label v-else class="productImg" v-bind:style="{backgroundImage: imgSrc2}" for="productImg2"></label>
				<div class="linkBox">
					<span>链接：</span>
					<input type="text" name="" v-model='address2'>
				</div>
				
			</div>
			<div class="picture" v-if='picNum>=3'>
				<input class="hidelist" id="productImg3" type="file" name="productImg" @change='change($event)'>
				<label v-if='bannerPic[2].src==null' class="productImg" for="productImg3"></label>
				<label v-else class="productImg" v-bind:style="{backgroundImage: imgSrc3}" for="productImg3"></label>
				<div class="linkBox">
					<span>链接：</span>
					<input type="text" name="" v-model='address3'>
				</div>
				
			</div>
			<div class="addPicture">
				<a href="javascript:void(0)" @click='addPicNum'>添加图片</a>
				
			</div>
		</div>

		<!-- 防伪验证 -->
		<div class="mudule" v-if='showModuleVerify'>
			<div class="header">
				防伪验证与企业信息设置：
			</div>
			<div class="verifyBox">
				<span class="message-name">防伪码：</span>
				<input type="radio" name="fangweima" id="fangweima1" v-model='verifyA' :value='true'><label for='fangweima1'>显示</label>
				<input type="radio" name="fangweima" id="fangweima2" v-model='verifyA' :value='false'><label for='fangweima2'>不显示</label>
			</div>
			<div class="verifyBox">
				<span class="message-name">防伪验证信息：</span>
				<input type="radio" name="fangweiYanz" id="fangweiYanz1" v-model='verifyB' :value='true'><label for='fangweiYanz1'>显示</label>
				<input type="radio" name="fangweiYanz" id="fangweiYanz2" v-model='verifyB' :value='false'><label for='fangweiYanz2'>不显示</label>
			</div>
			<div class="verifyBox">
				<span class="message-name">扫码明细：</span>
				<input type="radio" name="mingxi" id="mingxi1" v-model='verifyC' :value='true'><label for='mingxi1'>显示</label>
				<input type="radio" name="mingxi" id="mingxi2" v-model='verifyC' :value='false'><label for='mingxi2'>不显示</label>
			</div>
			<div class="verifyBox">
				<span class="message-name">企业认证信息：</span>
				<input type="radio" name="qiye" id="qiye1" v-model='verifyD' :value='true'><label for='qiye1'>显示</label>
				<input type="radio" name="qiye" id="qiye2" v-model='verifyD' :value='false'><label for='qiye2'>不显示</label>
			</div>
			<div class="verifyBox" v-if='verifyD'>
				<span class="message-name">企业名称：</span>
				<input type="radio" name="qiyename" id="qiyename1" v-model='verifyE' :value='true'><label for='qiyename1'>显示</label>
			</div>
			<div class="verifyBox" v-if='verifyD'>
				<span class="message-name">组织机构代码：</span>
				<input type="radio" name="zuzhi" id="zuzhi1" v-model='verifyF' :value='true'><label for='zuzhi1'>显示</label>
				<input type="radio" name="zuzhi" id="zuzhi2" v-model='verifyF' :value='false'><label for='zuzhi2'>不显示</label>
			</div>
			<div class="verifyBox" v-if='verifyD'>
				<span class="message-name">营业执照号码：</span>
				<input type="radio" name="yingye" id="yingye1" v-model='verifyG' :value='true'><label for='yingye1'>显示</label>
				<input type="radio" name="yingye" id="yingye2" v-model='verifyG' :value='false'><label for='yingye2'>不显示</label>
			</div>
			<div class="verifyBox" v-if='verifyD'>
				<span class="message-name">企业地址：</span>
				<input type="radio" name="yingdizhi" id="yingdizhi1" v-model='verifyH' :value='true'><label for='yingdizhi1'>显示</label>
				<input type="radio" name="yingdizhi" id="yingdizhi2" v-model='verifyH' :value='false'><label for='yingdizhi2'>不显示</label>
			</div>
			<div class="verifyBox" v-if='verifyD'>
				<span class="message-name">客服热线：</span>
				<input type="radio" name="kefu" id="kefu1" v-model='verifyI' :value='true'><label for='kefu1'>显示</label>
				<input type="radio" name="kefu" id="kefu2" v-model='verifyI' :value='false'><label for='kefu2'>不显示</label>
			</div>
		</div>

		<!-- 快速通道 -->
		<div class="mudule" v-if='showModuleFastTrack'>
			<div class="header">
				快速通道模块设置：
			</div>
			<ul class="fastTrackUl">
				<li>
					<input type="checkbox" name="" v-model='website'>
					<input class="message-value" type="text" name="" v-model='websiteVal'>
				</li>
				<li>
					<input type="checkbox" name="" v-model='weiStore'>
					<input class="message-value" type="text" name="" v-model='weiStoreVal'>
				</li>
				<li>
					<input type="checkbox" name="" v-model='officialAccounts'>
					<input class="message-value" type="text" name="" v-model='officialAccountsVal'>
				</li>
				<li>
					<input type="checkbox" name="" v-model='complain'>
					<input class="message-value" type="text" name="" v-model='complainVal'>
				</li>
			</ul>
		</div>

		<!-- 宣传视频 -->
		<div class="mudule" v-if='showModulePromotionVedio'>
			<div class="header">
				宣传视频设置：
			</div>
			<div>
				<span class="message-name">标题：</span>
				<input class="message-value" type="text" name="" v-model='title'>
			</div>
			<div>
				<span class="message-name">视频地址：</span>
				<input class="message-value" type="text" name="" v-model='videoSrc'>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import {mapActions} from 'vuex'
	export default{
		data(){
			return{
				imgSrc:'',
				imgSrc2:'',
				imgSrc3:'',
			}
		},
		methods:{
			...mapActions({
				setPic:'banner1/setPic',
				changeState:'banner1/changeState',
				addPicNum:'banner1/addPicNum'
				}),
			//同步显示图片
			change:function(eImg){
				const reader = new FileReader();
				if($(eImg.target).attr('id')=='productImg1'){
					reader.onloadend = (e) =>
					{
						var url=`${e.target.result}`
						this.imgSrc = `url('${e.target.result}')`;
						this.setPic({url:url,type:1});
					}
				}
				if($(eImg.target).attr('id')=='productImg2'){
					reader.onloadend = (e) =>
					{
						var url=`${e.target.result}`
						this.imgSrc2 = `url('${e.target.result}')`;
						this.setPic({url:url,type:2});
					}
				}
				if($(eImg.target).attr('id')=='productImg3'){
					reader.onloadend = (e) =>
					{
						var url=`${e.target.result}`
						this.imgSrc3 = `url('${e.target.result}')`;
						this.setPic({url:url,type:3});
					}
				}
				;
				reader.readAsDataURL(eImg.target.files[0]);
			},
			add:function(){
				this.addPicNum();
			},
			confirm:function(){
				
			}
		},
		computed:{
			...mapState({
				showModule:state=>state.banner1.data.showModule,
				showModuleVerify:state=>state.banner1.verifyData.showModule,
				showModuleFastTrack:state=>state.banner1.fastTrackData.showModule,
				showModulePromotionVedio:state=>state.banner1.promotionVedioData.showModule,
				picNum:state=>state.banner1.data.picNum,
				bannerPic:state=>state.banner1.data.bannerPic,
			}),
			verifyA:{
				get(){
					return this.$store.state.banner1.verifyData.cell.a
				},
				set (value) {
					this.$store.commit('banner1/updateMessage', 'a')
				}
			},
			verifyB:{
				get(){
					return this.$store.state.banner1.verifyData.cell.b
				},
				set (value) {
					this.$store.commit('banner1/updateMessage', 'b')
				}
			},
			verifyC:{
				get(){
					return this.$store.state.banner1.verifyData.cell.c
				},
				set (value) {
					this.$store.commit('banner1/updateMessage', 'c')
				}
			},
			verifyD:{
				get(){
					return this.$store.state.banner1.verifyData.cell.d
				},
				set (value) {
					this.$store.commit('banner1/updateMessage', 'd')
				}
			},
			verifyE:{
				get(){
					return this.$store.state.banner1.verifyData.cell.e
				},
			},
			verifyF:{
				get(){
					return this.$store.state.banner1.verifyData.cell.f
				},
				set (value) {
					this.$store.commit('banner1/updateMessage', 'f')
				}
			},
			verifyG:{
				get(){
					return this.$store.state.banner1.verifyData.cell.g
				},
				set (value) {
					this.$store.commit('banner1/updateMessage', 'g')
				}
			},
			verifyH:{
				get(){
					return this.$store.state.banner1.verifyData.cell.h
				},
				set (value) {
					this.$store.commit('banner1/updateMessage', 'h')
				}
			},
			verifyI:{
				get(){
					return this.$store.state.banner1.verifyData.cell.i
				},
				set (value) {
					this.$store.commit('banner1/updateMessage', 'i')
				}
			},
			website:{
				get(){
					return this.$store.state.banner1.fastTrackData.website
				},
				set (value) {
					this.$store.commit('banner1/updateMessage', 'website')
				}
			},
			websiteVal:{
				get(){
					return this.$store.state.banner1.fastTrackData.websiteVal
				},
				set (value) {
					this.$store.commit('banner1/changeVal',{value:value,type:'website'})
				}
			},
			officialAccounts:{
				get(){
					return this.$store.state.banner1.fastTrackData.officialAccounts
				},
				set (value) {
					this.$store.commit('banner1/updateMessage', 'officialAccounts')
				}
			},
			officialAccountsVal:{
				get(){
					return this.$store.state.banner1.fastTrackData.officialAccountsVal
				},
				set (value) {
					this.$store.commit('banner1/changeVal',{value:value,type:'officialAccounts'})
				}
			},
			complain:{
				get(){
					return this.$store.state.banner1.fastTrackData.complain
				},
				set (value) {
					this.$store.commit('banner1/updateMessage', 'complain')
				}
			},
			complainVal:{
				get(){
					return this.$store.state.banner1.fastTrackData.complainVal
				},
				set (value) {
					this.$store.commit('banner1/changeVal',{value:value,type:'complain'})
				}
			},
			weiStore:{
				get(){
					return this.$store.state.banner1.fastTrackData.weiStore
				},
				set (value) {
					this.$store.commit('banner1/updateMessage', 'weiStore')
				}
			},
			weiStoreVal:{
				get(){
					return this.$store.state.banner1.fastTrackData.weiStoreVal
				},
				set (value) {
					this.$store.commit('banner1/changeVal',{value:value,type:'weiStore'})
				}
			},
			title:{
				get(){
					return this.$store.state.banner1.promotionVedioData.title
				},
				set (value) {
					this.$store.commit('banner1/changeVal',{value:value,type:'title'})
				}
			},
			videoSrc:{
				get(){
					return this.$store.state.banner1.promotionVedioData.videoSrc
				},
				set (value) {
					if(/embed/.test(value)){
						var a=value.replace(/width=\'480\'/,'width=\"100vw\"');
						a=a.replace(/400/,'219')
						this.$store.commit('banner1/changeVal',{value:a,type:'videoSrc'})
					}
					if(/iframe/.test(value)){
						var a=value.replace(/width=510/,'width=100%');
						a=a.replace(/498/,'219')
						this.$store.commit('banner1/changeVal',{value:a,type:'videoSrc'})
					}
					else{
						this.$store.commit('banner1/changeVal',{value:value,type:'videoSrc'})
					}
					
				}
			},
			address1:{
				get(){
					return this.$store.state.banner1.data.bannerPic[0].address;
				},
				set (value) {
					this.$store.commit('banner1/changeVal',{value:value,type:'bannerPic0'})
				}
			},
			address2:{
				get(){
					return this.$store.state.banner1.data.bannerPic[1].address;
				},
				set (value) {
					this.$store.commit('banner1/changeVal',{value:value,type:'bannerPic1'})
				}
			},
			address3:{
				get(){
					return this.$store.state.banner1.data.bannerPic[2].address;
				},
				set (value) {
					this.$store.commit('banner1/changeVal',{value:value,type:'bannerPic2'})
				}
			},
		}
	}
</script>

<style scoped>
	.mudule{
		width: 95%;
		margin: auto;
	}
	.header{
		height: 31px;
		width: 100%;
		border-bottom: 1px solid #d1d1d1;
		margin-top: 20px;
	}
	.picture{
		width: 450px;
		height: 105px;
		background: #fff;
		padding: 10px 15px;
		margin-top: 10px;
		position: relative;
	}
	.addPicture{
		padding: 10px 15px;
		width: 450px;
		background: #fff;
		margin: 10px 0;
	}
	.productImg{
		display: inline-block;
		width: 86px;
		height: 86px;
		background: url(../../assets/img/group7.png) no-repeat;
		background-size: contain;
	}
	.message-name{
		display: inline-block;
		width: 100px;
		text-align: right;
		margin-left: 40px;
		font-size: 14px;
	}
	.fastTrackUl{
		width: 100%;
		margin: 0 auto;
		background-color: #fff;
		padding-left: 0;
		margin-top: 10px;
	}
	.fastTrackUl li{
		height: 40px;
	}
	.message-value{
		height: 26px;
	}
	.linkBox{
		display: inline-block;
		position: absolute;
		top: 40px;
		left: 125px;
	}
</style>