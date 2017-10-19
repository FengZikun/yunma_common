<template>
	<div>
		<div class="mengban" v-show='showMB' @click='hide'>
			<div class="codeImg">
				
			</div>
		</div>
		<div class="right-main">
			<p class="return">
				<router-link to='/twoCode/enterprise_order'>返回</router-link>
			</p>
			<div class="right-main-top">
				<div class="left">
					<span class="lefta">ID：</span>
					<span class="leftb">{{orderId}}</span>
				</div>
				<div class="right">
					<span class="lefta">名称：</span>
					<span class="leftb"></span>
				</div>
			</div>
			<div class="changeItem" v-if='type==0'>
				<span class="item"></span>
				<a class="item1 item1focus" data-type="block" @click='changepackType' href="javascript:void(0)">最小包装码</a>
				<a class="item1" data-type="row" @click='changepackType' href="javascript:void(0)">一级包装码</a>
				<a class="item1" data-type="box" @click='changepackType' href="javascript:void(0)">二级包装码</a>
				<span class="item2"></span>
				
			</div>
			<div class="right-main-bottom">
				<div class="my-form">
					<ul class="pro-list">
						<li class="pro-li">
							<span class="pro-li-span" v-if='this.type===1'>防伪码ID</span>
							<span class="pro-li-span" v-else>溯源码ID</span>
							<span class="pro-li-span">产品ID</span>
							<span class="pro-li-span">产品名称</span>
							<span class="pro-li-span">操作</span>

						</li>
						<li class="pro-li" v-for='item in codeInfo'>
							<span class="pro-li-span">{{item.securityCode||item.productTracingCode||item.groupCode||item.boxCode}}</span>
							<span class="pro-li-span">{{item.productId}}</span>
							<span class="pro-li-span">{{item.productName}}</span>
							<span class="pro-li-span"><a href="javascript:void(0)" @click='newCode' v-bind:data-code='item.securityCode||item.productTracingCode||item.groupCode||item.boxCode'>生成二维码</a></span>

						</li>
					</ul>
				</div>
			</div>
			<div class="page-button">
				<div class="page-num">
					<ul class="page-num-ul">
						<a href="javascript:void(0)"><li class="page-num-li-arrow page-num-li" v-if='currentPage>1' @click='prevPage'><span class="arrow-left"></span></li></a>
						<a href="javascript:void(0)"><li class="page-num-li" v-if='currentPage>4&&totalPage.length!=1&&totalPage[0]!=1' v-bind:data-page='1' @click.self='changePage'>1</li></a>
						<a href="javascript:void(0)"><li class="page-num-li" v-if='currentPage>4&&totalPage.length!=1&&totalPage[0]!=1'>...</li></a>
						<a href="javascript:void(0)"><li class="page-num-li" v-for='item in totalPage' v-bind:class='{dangqianye:item==currentPage}' v-bind:data-page='item' @click.self='changePage'>{{item}}</li></a>
						<a href="javascript:void(0)"><li class="page-num-li" v-if='totalPages>5&&currentPage<totalPages-2'>...</li></a>
						<a href="javascript:void(0)"><li class="page-num-li" v-if='totalPages>5&&currentPage<totalPages-2' v-bind:data-page='resData.totalPages' @click.self='changePage'>{{resData.totalPages}}</li></a>

						<a href="javascript:void(0)"><li class="page-num-li page-num-li-arrow" v-if='currentPage<totalPages' @click='nextPage'><span class="arrow-right"></span></li></a>

					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import common from '../../common.js'
	import QRCode from 'qrcodejs2'
  	import {mapState} from 'vuex'
	export default{
		data(){
			return{
				currentPage:'',  //当前页
        		totalPage:[],    //页码数组
        		totalPages:'',	//总页数
        		resData:'',
        		codeInfo:'',
        		showMB:false,
        		options:null,
        		qrcode:null,
        		orderId:null,
        		url:null,
        		packType:'block'
        	}
        },
        props:['datas'],
        methods:{
			//初始化
			init:function(currentPage){
				var self=this;
				var url;
				self.orderId=self.datas.orderId;
				//console.log(self.type)
				if(self.type==1){
					self.url='https://ym-a.top/cloud_code/GET/securityCode/securityCodeList.do';
				}
				else if(self.type==0){
					switch (self.packType) {
						case 'block':
							self.url='https://ym-a.top/cloud_code/GET/productTracingcode/tracingCodeList.do';
							break;
						case 'row':
							self.url='https://ym-a.top/cloud_code/GET/productTracingGroupcode/tracingCodeList.do';
						break;
						case 'box':
							self.url='https://ym-a.top/cloud_code/GET/productTracingBoxcode/tracingCodeList.do';
						break;
					}
					
				}
				//console.log(self.url)
				var type='get';
				var data={
					orderId:parseInt(self.orderId),
					currentPage:currentPage,
				};
				var success=function(res){
					//console.log(res)
					self.totalPage=[];
					self.currentPage=res.currentPage;
					self.resData=res;
					self.totalPages=res.totalPages;
					self.codeInfo=res.result.data;
					self.getPage();

				};
				common.Ajax(self.url,type,data,success)
			},

			//生成二维码
			newCode:function(){
				var self=this;
				self.showMB=true;
				var code=$(event.target).attr('data-code');
				if(self.type==1){
					var code="https://ym-a.top/s/"+code;
				}
				else if(self.type==0){
					var code="https://ym-a.top/t/"+code;
				}
				var qrcodeNode=document.getElementsByClassName('codeImg')[0];
				$(qrcodeNode).html('');
				self.qrcode = new QRCode(qrcodeNode, {
					text: code,
					width: 200,
					height: 200,
					colorDark: "#000000",
					colorLight: "#ffffff"
				});
			},
			// 切换箱条包码
			changepackType:function(){
				var self=this;
				self.packType=$(event.target).attr('data-type');
				self.init();
				$('.item1').removeClass('item1focus');
				$(event.target).addClass('item1focus')
			},
			//隐藏蒙版
			hide:function(){
				var self=this;
				if($(event.target)[0].className=='mengban'){
					self.showMB=false;
				}
				
			},

			//获取页数
			getPage:common.getPage,

			//翻页
			changePage:common.changePage,

			//上一页
			prevPage:common.prevPage,

			//下一页
			nextPage:common.nextPage,
		},
		computed: mapState({
			type: state=>state.b.type
		}),
		created:function(){
			this.init();
		}
	}
</script>

<style scoped>
	.right-main{
		width: 95%;
		height: 1310px;
		background: #fff;
		border-radius: 8px;
		margin: auto;
		margin-top: 44px;
	}
	.right-main-top{
		width: 95%;
		margin: auto;
		padding-top: 20px;
		text-align: left;
		display: flex;
		justify-content: space-between;
		clear: both;
	}
	.right-main-top2,
	.right-main-top3{
		margin-left: 25px;
		color: #b3b3b3;
	}
	.right-main-top-icon1{
		width: 18px;
		height: 18px;
		background: url("../../assets/img/icon_tishi.png") no-repeat;
		float: left;
		margin-right: 8px;
	}
	.right-main-bottom{
		width: 95%;
		margin:auto;
		text-align: left;
	}
	.button-group{
		margin-top: 40px;
	}
	.pro-li:nth-of-type(1){
		height: 51px;
		line-height: 51px;
	}
	.pro-li:first-of-type .pro-li-span{
		height: 51px;
		line-height: 51px;
	}
	.pro-li-span{
		width: 24%;
	}
	.last{
		width: 18%;
		overflow-wrap: break-word;
		height: 72px;
		line-height: 36px;
	}
	.left,.right{
		display: inline-block;
		width: 575px;
		height: 52px;
	}
	.lefta{
		display: inline-block;
		background: #e7ebee;
		width: 110px;
		line-height: 52px;
		text-align: center;
		font-weight: 700;
		border-radius: 5px 0 0 5px;
	}
	.leftb{
		width: 319px;
		display: inline-block;
		height: 52px;
		line-height: 52px;
		border-radius: 0 5px 5px 0;
		border:1px solid #e7ebee;
		vertical-align: top;
		margin-left: -5px;
		font-weight: 700;
		padding-left: 10px;
	}
	.codeImg{
		width: 200px;
		height: 200px;
		background: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -100px;
		margin-top: -100px;
	}
	.changeItem{
		display: -webkit-flex; /* Safari */
  		display: flex;
		width: 95%;
		height: 51px;
		margin: 0 auto;
		margin-top: 17px;
	}
	.item{
		display: inline-block;
		flex-grow: 0;
		box-sizing: border-box;
		width: 26px;
		height: 51px;
		border-bottom: 2px solid #E3E8EB;
		color: #28282B;	
	}
	.item1{
		display: inline-block;
		flex-grow: 0;
		box-sizing: border-box;
		width: 100px;
		height: 51px;
		line-height: 51px;
		text-align: center;
		border-bottom: 2px solid #E3E8EB;
		color: #28282B;
		text-decoration: none;
		/* font-weight: bold; */
	}
	.item1focus{
		border-bottom: 2px solid #00baff;
		color: #00baff;
	}
	.item1:hover{
		border-bottom: 2px solid #00baff;
		color: #00baff;
		text-decoration: none;
	}
	.item2{
		display: inline-block;
		flex-grow: 1;
		box-sizing: border-box;
		width: 90px;
		height: 51px;
		line-height: 51px;
		border-bottom: 2px solid #E3E8EB;
		color: #28282B;
	}
	.return{
		margin-top: 20px;
	}
</style>