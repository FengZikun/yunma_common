<template>
	<div class="right-main">
		<div class="step1" v-bind:class='{hidestep:onehide}'>
			<div class="top">
				<img src="../../assets/img/step.png">
				<span class="return"><router-link to='/goods/pro_message' style="text-decoration: none">返回</router-link></span>
			</div>
			<div class="main">
				<ul class="ul" @click.prevent='choosed'>
					<a href="javascript:void(0)"><li class="list">服装内衣</li></a>
					<a href="javascript:void(0)"><li class="list">鞋靴箱包</li></a>
					<a href="javascript:void(0)"><li class="list">运动户外</li></a>
					<a href="javascript:void(0)"><li class="list">珠宝配饰</li></a>
					<a href="javascript:void(0)"><li class="list">个护化妆</li></a>
					<a href="javascript:void(0)"><li class="list">家居建材</li></a>
					<a href="javascript:void(0)"><li class="list">家居家纺</li></a>
					<a href="javascript:void(0)"><li class="list">居家日用</li></a>
					<a href="javascript:void(0)"><li class="list">母婴用品</li></a>
					<a href="javascript:void(0)"><li class="list">其他</li></a>
				</ul>
				<div class="radio">
					<span><span style="color: red">*</span>选择产品类型：</span>
					<input id="shiwu" type="radio" name="protype" style="margin-left: 0" v-model='productSpe' v-bind:value='1'>
					<label for="shiwu">
						<span class="proname">
							实物商品
							<span style="color: #999999;margin-right: 30px;">（物流发货）
							</span>
						</span>
					</label>
					<input id="xuni" type="radio" name="protype" style="margin-left: 0" v-model='productSpe' v-bind:value='2'>
					<label for="xuni">
						<span class="proname">虚拟商品<span style="color: #999999">（无需物流）</span></span>
					</label>
					
				</div>
				<input class="next" type="button" name="" value="下一步，完善产品信息" @click='showStep2'>
			</div>
		</div>
		
		<div class="step2" v-bind:class='{hidestep:twohide}'>
			<div class="mengban" v-show='showWarn'>
				<div class="warn">
					<div class="classifyHeader">
						<span style="display:block;height:48px;line-height:48px;">操作提示</span>
					</div>
					<div class="warnmain">
						{{warnText}}
					</div>
					<div class="warnbottom">
						<input type="button" name="" value="确定" @click='showWarn=false'>
					</div>
				</div>
			</div>
			<div class="mengban" v-show='showMB'>
				
				<div class="proclassify" >
					<div class="classifyHeader">
						<span style="display:block;height:48px;line-height:48px;">选择分组</span>
					</div>
					<div class="select">
						<select v-model='selected' style="width:150px;height:30px;">
							<option v-for='cla in classifyData' v-bind:value='cla'>{{cla.name}}</option>
						</select>
					</div>
					<div class="select">
						<select v-model='chilselected' style="width:150px;height:30px;">
							<option v-for='item in selected.children' v-bind:value='item'>{{item.name}}</option>
						</select>
					</div>
					
					<div class="classifyFooter">
						<input class="delbutton" type="button" name="" value="确认" @click='confirmClassify'>
						<input class="delbutton" type="button" name="" value="取消" @click='hide'>
					</div>
					
				</div>
			</div>
			<div class="mengban" v-show='showMBimg'>
				<div class="imgbox">
					<div class="imgheader" v-if='local'>
						<span style="display:block;height:48px;line-height:48px;">我的图片</span>
					</div>
					<div class="imgheader" v-else>
						<span style="display:block;height:48px;line-height:48px;"><a href="javascript:void(0)" @click='local=true'>我的图片></a>本地上传</span>
					</div>
					<div class="imgmain" v-if='local'>
						<ul @click.prevent='chooseimg' style="height:450px;">
							<li class="single-img" v-for='item in imglist'>
								<img v-bind:src="'https://ym-a.top'+item.imgUrl" class="proimg" style="width:110px;height:110px" v-bind:data-id='item.id'>
								<span class="size">{{item.imgWidth}}*{{item.imgHeight}}</span>
								<span class="imgname">{{item.imgName}}</span>
							</li>
						</ul>
						<div class="imgPage">
							<input type="button" name="" value="上一页" v-if='imgcurrentPage>1' @click='searchphoto(imgcurrentPage-1)'>
							<input type="button" name="" value="下一页" v-if='imgtotalPages>1' @click='searchphoto(imgcurrentPage+1)' v-bind:disabled='imgcurrentPage==imgtotalPages'>
						</div>
						
						<input class="shangchuan delbutton" type="button" name="" value="本地上传" @click='local=false'>
						<div class="imgbottom">
							<input class="delbutton" type="button" name="" value="确认" :disabled='true' v-if='chooselist=={}'>
							<input class="delbutton" type="button" name="" value="确认" v-else @click='confirm'>
							<input class="delbutton" type="button" name="" value="返回" @click='hide'>
						</div>
					</div>
					<div class="localUp" v-else>
						<form name='myform' id="myform" enctype="multipart/form-data">
							<span class="message-name star">产品图片：</span>
							<span style="display:inline-block;width:86px;height:86px;background-repeat:no-repeat;background-size: contain" v-if='imgSrc!=""'  v-bind:style="{backgroundImage: imgSrc}"></span>
							<input class="hidelist" type="file" id="productImg" name="productImg" @change='change($event)'>
							<label class="productImg" for="productImg"></label>
							<input class="hidelist" type="text" name="vendorId" v-bind:value='vendorId'>
							<input class="hidelist" type="text" name="imgType" value="1">
						</form>
						<div class="imgbottom">
							<input class="delbutton" type="button" name="" value="确认" :disabled='true' v-if='chooselist2=={}'>
							<input class="delbutton" type="button" name="" value="提交" v-else @click='upLoad1'>
							<input class="delbutton" type="button" name="" value="返回" @click='local=true'>
						</div>
					</div>
				</div>
			</div>
			<div class="top">
				<img src="../../assets/img/step2.png">
				<span class="return"><a href="javascipt:void(0)" style="text-decoration: none"  @click='showStep1'>返回</a></span>
			</div>
			<div class="main">
				<p class="title">产品基本信息</p>
				<div class="promessage">
					<span class="message-name star">产品名称：</span>
					<input class="message-value" type="text" name="" v-model='productName'>
					<span class="message-after">查看产品名称规范</span>
				</div>
				<div class="promessage">
					<span class="message-name">产品分类：</span>
					<div v-if='selected.name!=undefined' class="choosezu">
						<span>{{selected.name}}</span><span v-if='chilselected!=undefined'>>{{chilselected.name}}</span>
					</div>
					<input class="message-choose" type="button" name="" value="选择分类" @click='chooseClassify'>
					<router-link to='/goods/classify' style='text-decoration:none;'><span class="message-after">管理分类</span></router-link>
				</div>
				<div class="promessage">
					<span class="message-name star">产品图片：</span>
					<img v-for='img in selectimg' class="myimg" style="width:86px;height:86px;vertical-align:top;" v-bind:src="'https://ym-a.top'+img" v-if='productid==""'>
					<img class="myimg" style="width:86px;height:64px;vertical-align:top;" v-bind:src="'https://ym-a.top'+productImg" @click='delImg' v-if='productid!=""'>
					<span class="message-add" @click='searchphoto(1)'></span>
					<p class="p">图片宽高要求1:1比例，建议尺寸为640px*640px以上；最多上传5张图片，您可以拖曳图片调整图片顺序。</p>
				</div>
				<div class="promessage">
					<span class="message-name star">价格：</span>
					<input class="message-value" type="text" name="" v-model='productPrice'>
					<span class="message-danwei">元</span>
				</div>
				<div class="promessage">
					<span class="message-name">市场定价：</span>
					<input class="message-value" type="text" name="" v-model='productMarketPrice'>
					<span class="message-danwei danwei">元</span>
				</div>
				<div class="promessage">
					<span class="message-name star">总库存：</span>
					<input class="message-value" type="text" name="" v-model='productTotal'>
					<span class="message-danwei">件</span>
				</div>
				<div class="promessage">
					<span class="message-name star">商品编码：</span>
					<input class="message-value" type="text" name="" placeholder="限20个字符" v-model='productCode'>
				</div>
				<div class="promessage">
					<span class="message-name">产品单位：</span>
					<input class="message-value" type="text" name="" placeholder="例：个、瓶、盒、件" v-model='productUnit'>
				</div>
				<div class="promessage">
					<span class="message-name">产品条码：</span>
					<input class="message-value" type="text" name="" v-model='productBarCode'>
				</div>
				<div class="promessage">
					<span class="message-name">产品参数：</span>
					<div class="brod">
						<p class="fontcolor">至少3个产品参数，最多50个</p>
						<ul class="pro-parameter" v-if='paramKey!=""'>
							<li v-for='(item, index) in paramKey'>
								<span>{{item}}：</span>
								<span>{{paramValue[index]}}</span>
								<span><a href="javascript:void(0)" v-bind:data-id='paramId[index]' @click='delparams(index)'>删除</a></span>
							</li>
						</ul>
						<input class="message-value" type="text" name="" placeholder="如：成分" style="margin-left:20px;" v-model='parametername'>
						<input class="message-value" type="text" name="" v-model='parametervalue'>
						<input class="delbutton" type="button" name="" value="添加" @click='addparameter'>
					</div>
				</div>
				<div class="promessage">
					<span class="message-name">产品描述：</span>
					<textarea v-model='productBewrite' maxlength="100"></textarea>
					<p class="description"><span class="miaoshu">{{descriptionNum}}</span></p>
				</div>
				<div class="buttongroup">
					<input class="jumpbutton" type="button" name="" value="上一步" @click='showStep1'>
					<input class="jumpbutton" type="button" name="" value="下一步" @click='showStep3'>

				</div>
			</div>
		</div>

		<div class="step3" v-bind:class='{hidestep:threehide}'>
			<div class="top">
				<img src="../../assets/img/step3.png">
				<span class="return" @click='showStep2'><a href="javascript:void(0)" style="text-decoration: none">返回</a></span>
				<div class="texteditor">
					<vue-html5-editor :content="editorcontent" :height="500" :show-module-name="showModuleName" @change="updateData" ref="editor" :auto-height="false" >
					</vue-html5-editor>
				</div>
				
				
			</div>
			<div class="main" style="margin-top:70px">
				<div class="buttongroup">
					<input class="jumpbutton" type="button" name="" value="上一步" @click='showStep2'>
					<input class="jumpbutton" type="button" name="" value="完成" @click='complete'>

				</div>
			</div>
		</div>
	</div>

</template>

<script>
	
</script>

<style scoped>
	@import "goodscommon.css";
	*{
		font-family: 'Microsoft YaHei';
		text-decoration: none;
	}
	div{
		text-align: left;
	}
	.right-main{
		/*height: 1417px;*/
	}
	.ul{
		width: 717px;
		height: 180px;
		padding-left: 0;
		margin: 160px 0 0 58px;
	}
	.ul a{
		display: inline-block;
		text-decoration: none;
		margin: 0;
		padding: 0;
		color: #000;
	}
	.list{
		width: 120px;
		height: 46px;
		border: 1px solid #e7e7eb;
		margin: 0 20px 20px 0;
		float: left;
		text-align: center;
	}
	.list:hover{
		border-color: #00baff;
	}
	.listselected{
		border-color: #00baff;

	}
	.list:nth-of-type(5),
	.list:nth-of-type(10){
		margin-right: 0;
	}
	.radio{
		margin-left: 58px;
	}
	.radio span{
		display: inline-block;
	}
	.proname{
		/*margin-left: 10px;*/
	}
	.next{
		width: 189px;
		height: 36px;
		display: block;
		color: #fff;
		background-color: #00baff;
		outline: none;
		border: none;
		border-radius: 3px;
		padding: 0 10px;
		margin: auto;
		margin-top: 80px;
		margin-bottom: 34px;
	}
	.main{
		/*width: 740px;*/
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
		border: 1px solid #ccc;
		padding-bottom: 20px;
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
	.warn{
		width: 420px;
		height: 250px;
		background: #fff;
		position: relative;
		top: 50%;
		margin: auto;
		margin-top: -125px;
	}
	.p{
		color: #999999;
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
	.hidestep{
		display: none;
	}
	.imgbox{
		margin: auto;
		top: 50%;
		margin-top: -327.5px;
		height: 655px;
		border-radius: 2px;
		background: #fff;
		width: 685px;
		position: relative;
	}
	.imgheader{
		width: 100%;
		height: 48px;
		background: #f6f8fc;
		padding: 0 20px;
		box-sizing: border-box;
		position: relative;
	}
	.single-img{
		float: left;
		width: 110px;
		height: 110px;
		margin: 15px;
		position: relative;
	}
	.proimg{
		border: 2px solid transparent;
	}
	.proimg:hover{
		border-color: #00baff;
	}
	.imgmain{
		height: 500px;
	}
	.imgbottom{
		text-align: center;
		width: 100%;
		height: 48px;
		background: #f6f8fc;
		padding: 0 20px;
		box-sizing: border-box;
		position: relative;
		top: 35px;
	}
	.size{
		display: block;
		width: 106px;
		height: 25px;
		line-height: 25px;
		position: absolute;
		top: 83px;
		left: 2px;
		text-align: center;
		background-color: rgba(0,0,0,.2);
		color: #fff;
	}
	.imgname{
		display: block;
		height: 25px;
		line-height: 25px;
		width: 110px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.shangchuan{
		display: block;
		clear: both;
		margin-left: 55px;
	}
	.localUp{
		height: 450px;
	}
	#productImg{
		display: none;
	}
	.productImg{
		display: inline-block;
		width: 86px;
		height: 86px;
		background: url(../../assets/img/group7.png);
	}
	.pro-parameter{
		width: 95%;
		padding: 10px 20px;
		margin: 20px;
		color: #333;
		background-color: #f4f5f9;
		max-height: 120px;
		overflow-y: scroll
	}
	.choosezu{
		display: inline-block;
	}
	.classifyHeader{
		width: 100%;
		height: 48px;
		background: #f6f8fc;
		padding: 0 20px;
		box-sizing: border-box;
		position: relative;
	}
	.classifyFooter{
		width: 100%;
		height: 48px;
		background: #f6f8fc;
		padding: 0 20px;
		box-sizing: border-box;
		position: relative;
		top: 68px;
		text-align: center;
	}
	.select{
		display: block;
		text-align: center;
		margin-top: 20px;
	}
	.delbutton{
		margin-top: 13px;
	}
	.imgPage{
		text-align: right;
		padding: 0 100px;
	}
	.warnbottom{
		text-align: right;
		position: relative;
		top: 140px;
		right: 50px;
	}
	.warnmain{
		position: relative;
		top: 70px;
		text-align: center;
	}
</style>
<script>
	import common from '../../common.js'
	import VueHtml5Editor from 'vue-html5-editor'
	import Vue from 'vue'
	import router from '../../router.js'
	Vue.use(VueHtml5Editor, {
		showModuleName: true,
		image: {
			sizeLimit: 512 * 1024,
			compress: true,
			width: 500,
			height: 500,
			quality: 80,
      // upload: {
      //       url: 'https://ym-a.top/imageContent/',
      //       headers: {},
      //       params: {},
      //       fieldName: {}
      //   },
      // compress: {
      //       width: 300,
      //       height: 300,
      //       quality: 40
      //   },
      // uploadHandler(responseText){
      //       var json = JSON.parse(responseText)
      //       if (!json.ok) {
      //           alert(json.msg)
      //       } else {
      //           return json.data
      //       }
      //   }
  },
  language: "zh-cn",
    // 自定义语言
    i18n: {
      //specify your language here
      "zh-cn": {
      	"align": "对齐方式",
      	"image": "图片",
      	"list": "列表",
      	"link": "链接",
      	"unlink": "去除链接",
      	"table": "表格",
      	"font": "文字",
      	"full screen": "全屏",
      	"text": "排版",
      	"eraser": "格式清除",
      	"info": "关于",
      	"color": "颜色",
      	"please enter a url": "请输入地址",
      	"create link": "创建链接",
      	"bold": "加粗",
      	"italic": "倾斜",
      	"underline": "下划线",
      	"strike through": "删除线",
      	"subscript": "上标",
      	"superscript": "下标",
      	"heading": "标题",
      	"font name": "字体",
      	"font size": "文字大小",
      	"left justify": "左对齐",
      	"center justify": "居中",
      	"right justify": "右对齐",
      	"ordered list": "有序列表",
      	"unordered list": "无序列表",
      	"fore color": "前景色",
      	"background color": "背景色",
      	"row count": "行数",
      	"column count": "列数",
      	"save": "确定",
      	"upload": "上传",
      	"progress": "进度",
      	"unknown": "未知",
      	"please wait": "请稍等",
      	"error": "错误",
      	"abort": "中断",
      	"reset": "重置"
      }
  },
});
	export default{
		data(){
			return{
				type:'',
				showMB:false,
				productBewrite:'',
				onehide:false,
				twohide:true,
				threehide:true,
				rowId:null,
				productName:'',
				productImg:'',
				productPrice:'',
				productMarketPrice:'',
				productTotal:'',
				productCode:'',
				productUnit:'',
				productBarCode:'',
				paramKey:[],
				paramValue:[],
				productBewrite:'',
				productDetail:'',
				productType:'',
				productSpe:'',
				paramId:[1],
				showMBimg:false,
				imglist:[],
				imgUrl:'',
				imgWidth:'',
				imgHeight:'',
				imgId:'',
				showModuleName:true,
				savename:'',
				editorcontent:'',
				selectimg:[],
				imgtotalPages:'',		//图片总页数
				imgcurrentPage:'',		//图片当前页
				chooselist:{},			//已选中图片
				chooselist2:{},			//已选中图片2
				local:true,				//本地上传开关
				imgSrc:'',
				parametername:'',		//参数名
				parametervalue:'',		//参数值
				classifyData:'',		//分组
				selected:{'children':null},
				chilselected:null,
				showWarn:false,
				warnText:null
			}
		},
		props:['productid','vendorId'],
		methods:{
			//进入step1
			init:function(){
				var self=this;

				//修改
				if(self.productid!=''){
					var url='https://ym-a.top/cloud_code/GET/product/infoById.do';
					var type='post';
					var data={
						productId:self.productid
					};
					var success=function(res){
						self.productType=res.productType;
						self.productSpe=res.productSpe;
						self.productName=res.productName;
						self.productImg=res.productImg;
						self.productPrice=res.productPrice;
						self.productMarketPrice=res.productMarketPrice;
						self.productTotal=res.productTotal;
						self.productCode=res.productCode;
						self.productUnit=res.productUnit;
						self.productBarCode=res.productBarCode;
						self.productBewrite=res.productBewrite;
						self.editorcontent=res.productDetail;
						self.paramId=res.paramsIds,
						self.paramKey=res.paramsKeys,
						self.paramValue=res.paramsValues,
						self.imgId=res.imgId;
						self.selectimg.push(self.productImg);
						var savename=self.productName;
						self.savename=savename;
						self.rowId=res.rowId;
						self.selected.name=res.rowName
						self.showStep2();
					}
				//调用ajax
				common.Ajax(url,type,data,success)
			}
		},
		showStep1:function(){
			this.onehide=false;
			this.twohide=true;
			this.threehide=true;
			$('body').scrollTop(0);
		},
			//进入step2
			showStep2:function(){
				var self=this;
				if(self.productType==''){
					alert("请选择商品类目");
				}else if(self.productSpe==''){
					alert("请选择商品类型");
				}else{
					this.onehide=true;
					this.twohide=false;
					this.threehide=true;
					$('body').scrollTop(0);
				}
				
			},
			//进入step3
			showStep3:function(){
				var self=this;
				if(self.productName==''){
					self.showWarn=true;
					self.warnText='请输入产品名';
					return
				}if(self.imgId==''){
					self.showWarn=true;
					self.warnText='请上传图片';
					return
				}if(self.productPrice==''){
					self.showWarn=true;
					self.warnText='请填写价格';
					return
				}if(self.productTotal==''){
					self.showWarn=true;
					self.warnText='请填写总库存';
					return
				}if(self.productCode==''){
					self.showWarn=true;
					self.warnText='请填写商品编码';
					return
				}
				self.onehide=true;
				self.twohide=true;
				self.threehide=false;
				$('body').scrollTop(0);
				
			},
			choosed:function(){
				var self=this;
				if($(event.target)[0].className!=="ul"){
					self.productType=$(event.target).text();
					$(event.target).addClass('listselected');
					$(event.target).parent().siblings().find('li').removeClass('listselected');
				}

			},
			//选择产品分类
			chooseClassify:function(){
				var self=this;
				self.showMB=true;
				var url='https://ym-a.top/cloud_code/GET/product/group.do';
				var type='get';
				var data={
					vendorId:self.vendorId
				};
				var success=function(res){
					self.classifyData=res.result.data;
					self.chilselected=null;
				};
				common.Ajax(url,type,data,success)
			},

			//确认产品分类
			confirmClassify:function(){
				var self=this;
				if(self.selected.name==undefined){
					alert('请选择分组')
				}else if(self.chilselected==null){
					var id=self.selected.id;
					self.rowId=id;
				}else if(self.chilselected!=null){
					var id=self.chilselected.id;
					self.rowId=id;
				}
				self.hide()
			},
			//隐藏蒙版
			hide:function(){
				this.showMB=false;
				this.showMBimg=false;
			},
			//文本编辑器
			updateData:function(data){
				this.editorcontent=data;
			},
			//提交数据
			complete:function(){
				var self=this;
				//修改
				if(self.productid!=''){
					var url='https://ym-a.top/cloud_code/UPDATE/product/info.do';
					var type='post';
					if(self.savename!=self.productName){
						var data={
							id:self.productid,
							vendorId:self.vendorId,
							rowId:self.rowId,
							productName:self.productName,
							productImg:self.imgId,
							productPrice:self.productPrice,
							productMarketPrice:self.productMarketPrice,
							productTotal:self.productTotal,
							productCode:self.productCode,
							productUnit:self.productUnit,
							productBarCode:self.productBarCode,
							productBewrite:self.productBewrite,
							productDetail:self.editorcontent,
							productType:self.productType,
							productSpe:self.productSpe
						};
						
					}else{
						var data={
							id:self.productid,
							vendorId:self.vendorId,
							rowId:self.rowId,
							productImg:self.imgId,
							productPrice:self.productPrice,
							productMarketPrice:self.productMarketPrice,
							productTotal:self.productTotal,
							productCode:self.productCode,
							productUnit:self.productUnit,
							productBarCode:self.productBarCode,
							paramId:self.paramId,
							paramKey:self.paramKey,
							paramValue:self.paramValue,
							productBewrite:self.productBewrite,
							productDetail:self.editorcontent,
							productType:self.productType,
							productSpe:self.productSpe
						};
					}
					
					var success=function(res){
						router.push({path:'/goods/pro_message'})
					};
					//调用ajax
					common.Ajax(url,type,data,success);
					return
				}
				
				//增加
				var url='https://ym-a.top/cloud_code/ADD/product/info.do';
				var type='post';
				var data={
					vendorId:self.vendorId,
					rowId:self.rowId,
					productName:self.productName,
					productImg:self.imgId,
					productPrice:self.productPrice,
					productMarketPrice:self.productMarketPrice,
					productTotal:self.productTotal,
					productCode:self.productCode,
					productUnit:self.productUnit,
					productBarCode:self.productBarCode,
					paramKey:self.paramKey,
					paramValue:self.paramValue,
					productBewrite:self.productBewrite,
					productDetail:self.editorcontent,
					productType:self.productType,
					productSpe:self.productSpe
				};
				var success=function(res){
					router.push({path:'/goods/pro_message'});

				};
				//调用ajax
				common.Ajax(url,type,data,success)
			},

			//查询图片
			searchphoto:function(num){
				var self=this;
				self.showMBimg=true;
				var url='https://ym-a.top/cloud_code/GET/product/Image.do';
				var type='get';
				var data={
					currentPage:num,
					pageSize:12,
					vendorId:self.vendorId,
					imgType:1
				};
				var success=function(res){
					self.imglist=res.result.data;
					self.imgtotalPages=res.totalPages;
					self.imgcurrentPage=res.currentPage
				};
				common.Ajax(url,type,data,success);
			},

			//选择图片
			chooseimg:function(){
				var self=this;
				self.chooselist={
					url:$(event.target).attr('src').slice(15),
					id:$(event.target).attr('data-id')
				}
				$(event.target).css('border-color','#00baff');
				$(event.target).parent().siblings().children().css('border-color','#fff')
			},

			//确认图片
			confirm:function(){
				var self=this;
				self.selectimg=[self.chooselist.url];
				self.imgId=self.chooselist.id;
				$('.myimg').attr('src',"https://ym-a.top"+self.selectimg)
				self.hide();
			},
			//上传图片
			upLoad1:function(){
				var self=this;
				var data=new FormData($('#myform')[0]);

				$.ajax({
					url: 'https://ym-a.top/cloud_code/ADD/product/uploadImage.do',
					type:'post',
					data: data,
					cache: false,
					dataType: 'json',
					processData: false,
					contentType: false,
					success: function (res) {
						self.imgUrl=res.imgUrl;
						self.imgWidth=res.width;
						self.imgHeight=res.height;
						self.imgId=res.id;
						self.local=true;
						self.searchphoto(1);
					},
					error:function(res){
						//console.log("error")
					}
				});
			},

			//删除图片
			delImg:function(){
				var self=this;
				var url='https://ym-a.top/cloud_code/DELETE/product/Image.do';
				var type='post';
				var data={
					id:$(event.target).attr('data-id')
				};
				
				var success=function(res){
					self.imgUrl='';
				};
				common.Ajax(url,type,data,success);

			},

			//同步显示图片
			change:function(eImg){
				const reader = new FileReader();
				reader.onloadend = (e) =>
				{
					this.imgSrc = `url('${e.target.result}')`;
				}
				;
				reader.readAsDataURL(eImg.target.files[0]);
			},

			//添加参数
			addparameter:function(){
				var self=this;
				if(self.parametername==''){
					alert('请添加参数')
					return
				}
				var name=self.parametername;
				var value=self.parametervalue;
				var url='https://ym-a.top/cloud_code/ADD/product/param.do';
				var type='post';
				if(self.productid!=undefined){
					var data={
						productId:parseInt(self.productid),
						paramKey:name,
						paramValue:value
					}
				}
				var data={
					paramKey:name,
					paramValue:value
				}
				var success=function(res){
					self.paramKey.push(name);
					self.paramValue.push(value);
					self.parametername='';
					self.parametervalue='';
					self.paramId.push(res.id);
				}
				common.Ajax(url,type,data,success)
			},

			//删除参数
			delparams:function(index){
				var self=this;
				self.paramKey.splice(index,1);
				self.paramValue.splice(index,1);
				var id=parseInt($(event.target).attr('data-id'));
				var url='https://ym-a.top/cloud_code/DELETE/product/param.do';
				var type='post';
				var data={
					paramId:id
				};
				var success=function(res){
					//console.log(res);
				}
				common.Ajax(url,type,data,success);
			}
		},
		computed:{
			descriptionNum:function(){
				if(this.productBewrite!=undefined&&this.productBewrite.length<=100){
					return this.productBewrite.length;
				}
				
			}
		},
		created:function(){
			this.init();
		}
	}
</script>