<template>
	<div class="right-main">
		<div class="main">
			<div class="return">
				<router-link to='/admin/corporate'>返回</router-link>
			</div>
			<div class="title">
				<span>基本资料：</span>
			</div>
			<div class="messagebox">
				<div class='box'>
					<span class="lefta">厂商名称</span>
					<span class="leftb">{{brandName}}</span>
				</div>
				

				<div class='box'>
					<span class="lefta">所属行业</span>
					<span class="leftb">{{industryName}}</span>
				</div>

				<div class='box'>
					<span class="lefta">联系方式</span>
					<span class="leftb">{{customPhone}}</span>
				</div>
				
			</div>
			<div class="title">
				<span>功能需求：</span>
				<div style="display:inline-block">
					<input class="mid" type="checkbox" name="" id="a" v-model='typeArr' value="1">
					<label class="mid" for="a">互联推广</label>
					<input class="mid" type="checkbox" name="" id="b" v-model='typeArr' value="2">
					<label class="mid" for="b">防伪</label>
					<input class="mid" type="checkbox" name="" id="c" v-model='typeArr' value="3">
					<label class="mid" for="c">溯源</label>
					<input class="mid" type="checkbox" name="" id="d" v-model='typeArr' value="6">
					<label class="mid" for="d">大数据</label>
					<input class="mid" type="checkbox" name="" id="e" v-model='typeArr' value="4">
					<label class="mid" for="e">红包</label>
					<input class="mid" type="checkbox" name="" id="f" v-model='typeArr' value="5">
					<label class="mid" for="f">游戏</label>
				</div>
			</div>
			<div class="messagebox">
				<div class='box'>
					<span class="lefta">官网</span>
					<span class="leftb">{{link}}</span>
				</div>
				

				<div class='box'>
					<span class="lefta">微商城</span>
					<span class="leftb">{{vendorMall}}</span>
				</div>

				<div class='box'>
					<span class="lefta">公众号</span>
					<span class="leftb">{{wxConfig}}</span>
				</div>

				<div class='box'>
					<span class="lefta">邮箱</span>
					<span class="leftb">{{Emaill}}</span>
				</div>
				
			</div>
			<div class="title">
				<span>图片资料：</span>
			</div>
			<div class='message-box'>
				<span class='textname'>相关图片资料：</span>
				<div class="phbox">
					<img v-if='imgSrcA!=null' class="photo1" v-bind:src="'https://ym-a.top'+imgSrcA"></img>
					<span v-else class='photo' v-bind:style="{backgroundImage: imgSrcA}"></span>
					<p class="p">客户证书</p>
				</div>
				<div class="phbox">
					<img v-if='imgSrcB!=null' class="photo1" v-bind:src="'https://ym-a.top'+imgSrcB"></img>
					<span v-else class='photo'  v-bind:style="{backgroundImage: imgSrcB}"></span>
					<p class="p">商标注册证</p>
				</div>
				<div class="phbox">
					<img v-if='imgSrcC!=null' class="photo1" v-bind:src="'https://ym-a.top'+imgSrcC"></img>
					<span v-else class='photo'  v-bind:style="{backgroundImage: imgSrcC}"></span>
					<p class="p">工业产品生产许可证</p>
				</div>
				<div class="phbox">
					<img v-if='imgSrcD!=null' class="photo1" v-bind:src="'https://ym-a.top'+imgSrcD"></img>
					<span v-else class='photo'  v-bind:style="{backgroundImage: imgSrcD}"></span>
					<p class="p">食品生产许可证</p>
				</div>
				<div class="phbox">
					<img v-if='imgSrcE!=null' class="photo1" v-bind:src="'https://ym-a.top'+imgSrcE"></img>
					<span v-else class='photo'  v-bind:style="{backgroundImage: imgSrcE}"></span>
					<p class="p">银行开户许可证</p>
				</div>

			</div>
			<div class="messagebox">
				<div class="mid">
					<p>相关图片资料</p>
					<a href="javascript:void(0)"><span class="button">图片批量下载</span></a>
				</div>
				<div class="phbox" v-for='item in imgInfo'>
					<img class="photo1" v-bind:src="'https://ym-a.top'+item.imgUrl"></img>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import common from '../../common.js'
	export default{
		data(){
			return{
				brandName:null,
				industryName:null,
				customPhone:null,
				link:null,
				vendorMall:null,
				wxConfig:null,
				Emaill:null,
				typeArr:[],
				imgSrcA:null,
				imgSrcB:null,
				imgSrcC:null,
				imgSrcD:null,
				imgSrcE:null,
				imgInfo:null
			}
		},
		props:['detailId'],
		methods:{
			init:function(){
				var self=this;
				var url='https://ym-a.top/cloud_code/GET/vendor/getVendorInfo.do';
				var type='get';
				var data={
					vendorId:self.detailId
				};
				var success=function(res){
					//console.log(res);
					self.imgInfo=res.brandImgs;
					self.brandName=res.brandName;
					self.industryName=res.industryName;
					self.customPhone=res.customPhone;
					self.link=res.link;
					self.vendorMall=res.vendorMall;
					self.wxConfig=res.wxConfig;
					self.Emaill=res.Emaill;
					self.typeArr=res.functionType.split(',');
					self.imgSrcA=res.img_vendor_qualification;
					self.imgSrcB=res.img_trademark_certificate;
					self.imgSrcC=res.img_industrial_production_license;
					self.imgSrcD=res.img_food_production_license;
					self.imgSrcE=res.img_bank_account_license;
				};
				common.Ajax(url,type,data,success)
			},

			//品牌代表图
			// init2:function(){
			// 	var self=this;
			// 	var url='https://ym-a.top/cloud_code/GET/vendor/getVendorBrandImg.do';
			// 	var type='get';
			// 	var data={
			// 		id:self.detailId
			// 	};
			// 	var success=function(res){
			// 		//console.log(res)
			// 		self.imgInfo=res.data;
			// 	};
			// 	common.Ajax(url,type,data,success)
			// }
		},
		created:function(){
			this.init();
		}
	}
</script>

<style scoped>
	.main{
		margin-left: 40px;
		margin-top: 60px;
		text-align: left;
	}
	.lefta{
		display: inline-block;
		background: #e7e7eb;
		width: 110px;
		line-height: 36px;
		text-align: center;
		font-weight: 700;
		border-radius: 5px 0 0 5px;
	}
	.leftb{
		width: 200px;
		display: inline-block;
		height: 36px;
		line-height: 36px;
		border-radius: 0 5px 5px 0;
		border:1px solid #e7ebee;
		vertical-align: top;
		margin-left: -5px;
		font-weight: 700;
		padding-left: 10px;
		margin-right: 140px;
	}
	.mid{
		vertical-align: middle;
		display: inline-block;
		margin: 0;
		padding: 0;
	}
	.box{
		display: inline-block;
		margin-top: 50px;
	}
	.title{
		margin-top: 50px;
	}
	.button{
		color: #fff;
		background: #00baff;
		padding: 8px;
		border-radius: 6px;
		display: block;
	}
	a:hover{
		text-decoration: none;
	}
	.phbox{
		display: inline-block;
		vertical-align: top;
		text-align: center;
		margin-right: 50px;
	}
	.photo{
		display: inline-block;
		margin-left: 10px;
		width: 75px;
		height: 75px;
		vertical-align: middle;
		background: url(../../assets/img/touxiang_png.png);
	}  
	.photo1{
		display: inline-block;
		margin-left: 10px;
		width: 75px;
		height: 75px;
		vertical-align: middle;
	}  
</style>