<template>
	<div class="right-main">
		<div class="mengban" v-show='showMB' @click='hide'>
			<div class="proclassify" >
				
			</div>
		</div>
		<div class="top">
			<img src="../../assets/img/step2.png">
			<span class="return"><router-link to='/goods/updataproduct' style="text-decoration: none">返回</router-link></span>
		</div>
		<div class="main">
			<p class="title">产品基本信息</p>
			<div class="promessage">
				<span class="message-name star">产品名称：</span>
				<input class="message-value" type="text" name="">
				<span class="message-after">查看产品名称规范</span>
			</div>
			<div class="promessage">
				<span class="message-name">产品分类：</span>
				<input class="message-choose" type="button" name="" value="选择分类" @click='chooseClassify'>
				<router-link to='/goods/classify' style='text-decoration:none;'><span class="message-after">管理分类</span></router-link>
			</div>
			<div class="promessage">
				<span class="message-name star">产品图片：</span>
				<span class="message-photo"></span>
				<span class="message-add"></span>
				<p class="p">图片宽高要求1:1比例，建议尺寸为640px*640px以上；最多上传5张图片，您可以拖曳图片调整图片顺序。</p>
			</div>
			<div class="promessage">
				<span class="message-name star">价格：</span>
				<input class="message-value" type="text" name="">
				<span class="message-danwei">元</span>
			</div>
			<div class="promessage">
				<span class="message-name">市场定价：</span>
				<input class="message-value" type="text" name="">
				<span class="message-danwei danwei">元</span>
			</div>
			<div class="promessage">
				<span class="message-name star">总库存：</span>
				<input class="message-value" type="text" name="">
				<span class="message-danwei">件</span>
			</div>
			<div class="promessage">
				<span class="message-name star">商品编码：</span>
				<input class="message-value" type="text" name="" placeholder="限20个字符">
			</div>
			<div class="promessage">
				<span class="message-name">产品单位：</span>
				<input class="message-value" type="text" name="" placeholder="例：个、瓶、盒、件">
			</div>
			<div class="promessage">
				<span class="message-name">产品条码：</span>
				<input class="message-value" type="text" name="">
			</div>
			<div class="promessage">
				<span class="message-name">产品参数：</span>
				<div class="brod">
					<p class="fontcolor">至少3个产品参数，最多50个</p>
					<input class="message-value" type="text" name="" placeholder="如：成分" style="margin-left:20px;">
					<input class="message-value" type="text" name="">
					<input class="delbutton" type="button" name="" value="添加">
				</div>
			</div>
			<div class="promessage">
				<span class="message-name">产品描述：</span>
				<textarea v-model='proDscription' maxlength="100"></textarea>
				<p class="description"><span class="miaoshu">{{descriptionNum}}</span></p>
			</div>
			<div class="buttongroup">
				<router-link to='/goods/updataproduct' style="text-decoration: none"><input class="jumpbutton" type="button" name="" value="上一步"></router-link>
				<router-link to='/goods/prodetail'><input class="jumpbutton" type="button" name="" value="下一步"></router-link>

			</div>
		</div>
	</div>
</template>

<style scoped>
@import "goodscommon.css";
div{
		text-align: left;
	}
	.p{
		color: #999999;
	}
	.star:before{
		content: '*';
		color: red;
	}
	.danwei:after{
		content: '(吊牌价)';
		color: #999999;
	}
	.description:after{
		content: '/100(限100字内，产品描述将显示在产品码的推荐信息上)';
		color: #999999;
	}
	.miaoshu{
		color: red;
	}
	.mengban{
		position: fixed;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    z-index: 2000;
	    background: rgba(0, 0, 0, 0.6);
	}
	.message-photo{
		display: inline-block;
		width: 86px;
		height: 64px;
		vertical-align: top;
	}
	.message-add{
		width: 86px;
		height: 86px;
		display: inline-block;
		background: url(../../assets/img/group7.png);
	}
	.hidemengban{
		display: none;
	}
	.title{
		margin-top: 60px;
		margin-left: 50px;
		font-size: 18px;
	}
	.p,
	.description{
		margin-left: 182px;
	}
	.promessage{
		margin-top: 40px;
	}
	.message-name{
		display: inline-block;
		width: 120px;
		margin-left: 60px;
		text-align: right;
		color: #666;
		vertical-align: top;
	}
	.message-choose{
		width: 70px;
		height: 32px;
		appearance: none;
		background-color: #fff;
		border: 1px solid #cccccc;
		border-radius: 3px;
	}
	.message-value{
		border: 1px solid #ccc;
		height: 30px;
		padding-left: 5px;
	}
	.brod{
		display: inline-block;
		width: 760px;
		height: 105px;
		border: 1px solid #ccc;
	}
	textarea{
		width: 760px;
		height: 95px;
		resize: none;
		border: 1px solid #ccc;

	}
	.fontcolor{
		color: #999;
		margin-left: 20px;
		margin-top: 20px;
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
	.proclassify{
		width: 420px;
		height: 250px;
		background: #fff;
		position: relative;
		top: 50%;
		margin: auto;
		margin-top: -125px;
	}
</style>

<script>
	export default{
		data(){
			return{
				showMB:false,
				proDscription:''
			}
		},
		methods:{
			chooseClassify:function(){
				this.showMB=true;
			},
			hide:function(){
				this.showMB=false;
			}
		},
		computed:{
			descriptionNum:function(){
				if(this.proDscription.length<=100){
					return this.proDscription.length;
				}
				
			}
		}
	}
</script>