<template>
	<div>
		<div class="pic-ad" style="margin-bottom: 12px;padding: 0 10px;">
			<div class="messageBox" v-if="a">
				<p class="AmessageBoxP">您查询的防伪码为：
					<span class="messageBoxA">123456789</span>
				</p>
				
			</div>
			<div class="messageBox" v-if='b'>
				<p style="margin-bottom: 0;">防伪验证信息：
					<p style="line-height: 20px;font-size: 16px;">您好，您所查询的是<span class="messageBoxB">{{vendorName}}</span>生产的正牌产品，请放心使用，谢谢您的查询。</p>
				</p>
				
			</div>
			<div class="messageBox" v-if='c'>
				<a class="CmessageBox">
					扫码明细
				</a>
			</div>
		</div>
		<div class="pic-ad" style="margin-bottom: 12px;padding: 0 10px;" v-if='d'>
			<div class="messageBox" v-if="e">
				<p>企业名称：
					<span class="messageBoxE">{{vendorName}}</span>
				</p>
			</div>
			<div class="messageBox" v-if='f'>
				<p>组织机构代码：</p>
			</div>
			<div class="messageBox" v-if='g'>
				<div>
					营业执照号码：
				</div>
			</div>
			<div class="messageBox" v-if='h'>
				<div>
					企业地址：
					<span class="messageBoxH"></span>
				</div>
			</div>
			<div class="messageBox" v-if='i'>
				<div>
					客服热线：
				</div>
			</div>
		</div>
		
		<div class="border hidelist">
			<input class="modulerRedactButton" type="button" name="" value="编辑" @click='showDel=true;'>
			<input class="moduleDelButton hidelist" type="button" name="" value="删除" @click='delTextNav'>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import {mapMutations} from 'vuex'
	export default{
		data(){
			return{
				showDel:false,
				vendorName:null,
			}
		},
		methods:{
			...mapMutations([
				'delThis2'
				]),
			delTextNav(){
				this.delThis2();
				$('.box').removeClass('detail');
			}
		},
		created(){
			this.vendorName=window.sessionStorage.getItem('vendorName');
		},
		computed: mapState({
			a:state=>state.banner1.verifyData.cell.a,
			b:state=>state.banner1.verifyData.cell.b,
			c:state=>state.banner1.verifyData.cell.c,
			d:state=>state.banner1.verifyData.cell.d,
			e:state=>state.banner1.verifyData.cell.e,
			f:state=>state.banner1.verifyData.cell.f,
			g:state=>state.banner1.verifyData.cell.g,
			h:state=>state.banner1.verifyData.cell.h,
			i:state=>state.banner1.verifyData.cell.i,
		})
	}
</script>

<style scoped>
	.pic-ad:first-child{
		margin-bottom: 12px;
	}
	.messageBox{
		min-height: 36px;
		line-height: 36px;
	}
	.AmessageBoxP:before{
		content: '';
		width: 4px;
		height: 17px;
		display: block;
		background-color: #dd2726;
		position: absolute;
		top: 10px;
		left: 10px;
	}
	.AmessageBoxP{
		padding-left: 10px;
	}
	.CmessageBox{
		position: absolute;
		right: 10px;
		font-size: 15px;
		text-align: center;
		color: #585858;
		border: 1px solid #e8e8e8;
		border-radius: 4px;
		height: 31px;
		line-height: 31px;
		outline: none;
		background: #fafafa;
		font-family: "Microsoft YaHei";
		width: 85px;
	}
</style>