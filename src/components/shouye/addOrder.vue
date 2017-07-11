<template>
	<div>
		<div class="mengban" v-if='showMB'>
			<div class="choosepro" >
				<div class="choosepro-top">
					选择商品
					<span class="returnBtn" @click='hide'>返回</span>
				</div>
				<ul class="choosepro-main">
					<li class="pro-li header">
						<span class="pro-li-span">ID</span>
						<span class="pro-li-span">产品名称</span>
						<span class="pro-li-span">产品类型</span>
						<span class="pro-li-span">产品库分类</span>
						<span class="pro-li-span">价格/元</span>
						<span class="pro-li-span">排序</span>
						<span class="pro-li-span">更新时间</span>
					</li>
					<li class="pro-li" v-for="pro in proInfo">
						<span class="pro-li-span first"><span class="check-box checkshu" @click='selectThis'></span><span style="display: inline-block;vertical-align: middle">{{pro.id}}</span></span>
						<span class="pro-li-span" style="text-align:left;"><img style="width:45px;margin-left:20px;" v-bind:src="'http://120.77.149.115/'+pro.productImg">{{pro.productName}}</span>
						<span class="pro-li-span">{{pro.productSpe}}</span>
						<span class="pro-li-span">{{pro.rowName}}</span>
						<span class="pro-li-span">{{pro.productPrice}}</span>
						<span class="pro-li-span">{{pro.sortNum}}</span>
						<span class="pro-li-span wordbreak">{{pro.lastUpdateTime}}</span>
					</li>
				</ul>
	            <div style="text-align:center">
	              	<input type="button" class="delbutton" name="" value="确定" @click='confirm'>
	              </div>
			</div>
		</div>
		<div class="right-main">
			<div class="right-main-top">
				<p class="right-main-top1">
					<span class="right-main-top-icon1"></span>
					您可以在此页面根据需求新增订单，可以选择已有的产品，定义“数量”，“有效期”等。
					<router-link to='/twoCode/enterprise_order'><span class='returnBtn'>返回</span></router-link>
				</p>
			</div>
			<div class="right-main-bottom">
				<div class="messagebox">
					<span class="message-name">产品名称：</span>
					<input class="message-value" type="text" name="" @click='selectPro' v-model='productName'>
				</div>
				<div class="messagebox">
					<span class="message-name">产品个数：</span>
					<input class="message-value" type="text" name="" v-model='productCount'>
				</div>
				<div class="messagebox">
					<span class="message-name">有效期：</span>
					<input class="message-value" type="date" name="" v-model='expiryDate'>
				</div>
				<div class="messagebox">
					<span class="message-name">参考价格：</span>
					<input class="message-value" type="text" name="" v-model='referencePrice'>
				</div>
				<div class="button-group">
					<input class="delbutton" type="button" name="" value='确定' @click='tijiao'>
					<router-link to='/twoCode/enterprise_order'><input class="delbutton" type="button" name="" value='取消'></router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import common from '../../common.js'
	import router from '../../router.js'
	export default{
		data(){
			return{
				showMB:false,
				proInfo:[],
				productName:null,
				referencePrice:null,
				expiryDate:null,
				productCount:null,
				productId:null
			}
		},
		props:['datas'],
		methods:{
			//选择产品
			selectPro:function(){
				var self=this;
				self.showMB=true;
				var url='http://120.77.149.115/cloud_code/GET/product/info.do';
				var type='post';
				var data={
					vendorId:self.datas.vendorId,
					pageSize:0,
					deleteFlag:0,
					currentPage:1
				};
				var success=function(res){
					self.proInfo=res.result.data;
				};
				common.Ajax(url,type,data,success)
			},

			//显示蒙版
			mengban:function(){
				var self=this;
				self.showMB=true;
			},

			//隐藏蒙版
			hide:function(){
				var self=this;
				self.showMB=false;
			},

			//选择
			selectThis:function(event){
				var self=this;
				var checkBox=$(event.target);
				var length=$('.checkshu').length;
				if(checkBox.hasClass('check-box')){
					checkBox.removeClass('check-box').addClass('has-select');
					checkBox.parents('li').siblings().find('.checkshu').addClass('check-box').removeClass('has-select')
				}else{
					checkBox.addClass('check-box').removeClass('has-select');
				};
			},

			//确认
			confirm:function(){
				var self=this;
				self.productName=$('.has-select').parent().next().text();
				self.productId=$('.has-select').next().text();
				self.showMB=false;
				self.proInfo=[];
			},

			//提交
			tijiao:function(){
				var self=this;
				var url='http://120.77.149.115/cloud_code/POST/product/productOrder.do';
				var type='post';
				var data={
					vendorId:self.datas.vendorId,
					productName:self.productName,
					referencePrice:self.referencePrice,
					expiryDate:self.expiryDate,
					productId:self.productId,
					productCount:self.productCount,
					vendorName:self.datas.vendorName
				};
				console.log(data)
				var success=function(res){
					if(res.errorCode===0){
						router.push({path:'enterprise_order'})
					}else{
						alert('新增订单失败')
					}
				};
				common.Ajax(url,type,data,success)
			}
		}
	}
</script>

<style scoped>
	/*@import '../../assets/css/common.css'*/
	.right-main-top{
			width: 90%;
			margin: auto;
			padding-top: 60px;
			padding-bottom: 40px;
			border-bottom: 1px solid #e7ebee;
			text-align: left;
		}
		.right-main-top-icon1{
			width: 18px;
			height: 18px;
			background: url("../../assets/img/icon_tishi.png") no-repeat;
			float: left;
			margin-right: 8px;
		}
		.returnBtn{
			float: right;
		}
		.right-main-bottom{
			text-align: left;
		}
		.right-main-bottom{
			margin-top: 70px
		}
		.message-name{
			display: inline-block;
			width: 115px;
			text-align: right;
		}
		.messagebox{
			margin-top: 20px;
		}
		.message-value{
			width: 230px;
			height: 36px;
			border-radius: 5px;
			border: 1px solid #e7e7eb;
			margin-left: 30px;
		}
		.sanjiao:after{
			content: "";
		    display: inline-block;
		    width: 5px;
		    height: 5px;
		    background-color: #000;
		}
		.choosepro{
		width: 1000px;
		height: 700px;
		background: #fff;
		margin-left: 15%;
		margin-top: 73px;
		border-radius: 10px;
	}
	.choosepro-top{
		height: 75px;
		line-height: 75px;
		text-align: left;
		padding-left: 72px;
		font-size: 20px;
	}
	.choosepro-main{
		padding-left: 0;
		height: 450px;
		overflow-y: scroll;
	}
	.pro-li{
		height: 45px;

	}
	.pro-li-span{
		width: 13%;
		height: 45px;
		line-height: 45px;
	}
	.header .pro-li-span{
		height: 45px;
		line-height: 45px;
	}
	.returnBtn{
		float: right;
		margin-right: 50px;
	}
	.button-group{
		margin-left: 149px;
		margin-top: 100px;
		margin-bottom: 40px;
	}
	.delbutton{
		width: 90px;
		height: 34px;
	}
	.delbutton:hover{
		background: #00baff;
		color: #fff;
	}
</style>