<template>
	<div class="right-main">
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
		<div class="step1" v-bind:class='{hidestep:onehide}'>
			<div class="top">
				<img src="../../assets/img/step.png">
				<span class="return"><router-link to='/goods/gift' style="text-decoration: none">返回</router-link></span>
			</div>
			<div class="main">
				<div class="radio">
					<span><span style="color: red">*</span>选择礼品类型：</span>
					<input id="shiwu" type="radio" name="protype" style="margin-left: 0" v-model='presentSpe' v-bind:value='1'>
						<label for="shiwu">
							<span class="proname">
							实物商品
							<span style="color: #999999;margin-right: 30px;">（物流发货）
							</span>
							</span>
						</label>
					<input id="xuni" type="radio" name="protype" style="margin-left: 0" v-model='presentSpe' v-bind:value='2'>
						<label for="xuni">
							<span class="proname">虚拟商品<span style="color: #999999">（无需物流）</span></span>
						</label>
					
				</div>
				<input class="next" type="button" name="" value="下一步，完善礼品信息" @click='showStep2'>
			</div>
		</div>
		
		<div class="step2" v-bind:class='{hidestep:twohide}'>
			<div class="mengban" v-show='showMB' @click='hide'>
				<div class="proclassify" >
					
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
								<img v-bind:src="'http://120.77.149.115'+item.imgUrl" class="proimg" style="width:110px;height:110px" v-bind:data-id='item.id'>
								<span class="size">{{item.imgWidth}}*{{item.imgHeight}}</span>
								<span class="imgname">{{item.imgName}}</span>
							</li>
						</ul>
						<input type="button" name="" value="下一页" v-if='imgtotalPages>1' @click='searchphoto(imgcurrentPage+1)' v-bind:disabled='imgcurrentPage==imgtotalPages'>
						<input class="shangchuan" type="button" name="" value="本地上传" @click='local=false'>
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
							<input class="hidelist" type="text" name="imgType" value="2">
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
				<p class="title">礼品基本信息</p>
				<div class="promessage">
					<span class="message-name star">礼品名称：</span>
					<input class="message-value" type="text" name="" v-model='name'>
					<span class="message-after">（限50个汉字/100个字符以内）</span>
				</div>
				<div class="promessage">
					<span class="message-name">礼品分组：</span>
					<select v-model='selected' @change='getrowId'>
						<option value="null" selected="selected">不分组</option>
						<option v-for='item in giftClassify' v-bind:value='item'>{{item.name}}</option>
					</select>
					<router-link to='/goods/groups' style='text-decoration:none;'><span class="message-after">管理分组</span></router-link>
				</div>
				<div class="promessage">
					<span class="message-name star">市面价值：</span>
					<input class="message-value" type="text" name="" v-model='price'>
					<span class="message-after">元</span>
				</div>
				<div class="promessage">
					<span class="message-name star">礼品图片：</span>
					<img v-for='img in selectimg' class="myimg" style="width:86px;height:86px;vertical-align:top;" v-bind:src="'http://120.77.149.115'+img">
					<span class="message-add" @click='searchphoto'></span>
					<p class="p">图片宽高要求1:1比例，建议尺寸为640px*640px以上；最多上传5张图片，您可以拖曳图片调整图片顺序。</p>
					<form action="/cloud_code/ADD/product/info.do" method="post" enctype="multipart/form-data" style="display:none">
				  		<table>
				    		<tr>
				    			<td>
				    				<input type="file" id="img" name="img">
				    				<!-- <input type="text" name="id"/> -->
				    				<input type="text" name="vendorId"/>
				    				<input type="text" name="presentName"/>
				    				<input type="text" name="rowId"/>
				    				<input type="text" name="presentPrice"/>
				    				<input type="text" name="presentImage"/>
				    				<input type="text" name="weight"/>
				    				<input type="text" name="total"/>
				    				<input type="text" name="code"/>
				    				<input type="text" name="detail"/>
				    			</td>
				    		</tr>
				    		<tr>
				    			<td>
				    				<input type="submit" value="提交"/>
				    			</td>
				    		</tr>
				    	</table>
  	</form>
				</div>
				<div class="promessage">
					<span class="message-name star">重量：</span>
					<input class="message-value" type="text" name="" v-model='weight'>
					<span class="message-danwei">Kg</span>
				</div>
				<div class="promessage">
					<span class="message-name star">库存：</span>
					<input class="message-value" type="text" name="" v-model='total'>
					<span class="message-danwei">件</span>
				</div>
				<div class="promessage">
					<span class="message-name">商品编码：</span>
					<input class="message-value" type="text" name="" placeholder="限20个字符" v-model='code'>
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
		height: 1417px;
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
	.p{
		color: #999999;
	}
	.danwei:after{
		content: '(吊牌价)';
		color: #999999;
	}
	.description:after{
		content: '/100(限100字内，礼品描述将显示在礼品码的推荐信息上)';
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
	}
	.imgbottom{
		text-align: center;
	}
</style>
<script>
import common from '../../common.js'
import router from '../../router.js'
import Vue from 'vue'

import VueHtml5Editor from 'vue-html5-editor'
Vue.use(VueHtml5Editor, {
		showModuleName: true,
		image: {
			sizeLimit: 512 * 1024,
			compress: true,
			width: 500,
			height: 500,
			quality: 80,
      // upload: {
      //       url: 'http://120.77.149.115/imageContent/',
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
				onehide:false,
				twohide:true,
				threehide:true,
				rowId:null,
				name:null,
				imgId:null,
				weight:null,
				price:null,
				total:null,
				code:'',
				detail:'',
				presentType:'',
				presentSpe:'',
				// paramId:[]
				showMBimg:false,
				imglist:[],
				selectimg:[],
				imgtotalPages:'',		//图片总页数
				imgcurrentPage:'',		//图片当前页
				chooselist:{},			//已选中图片
				chooselist2:{},			//已选中图片2
				local:true,				//本地上传开关
				imgSrc:'',
				giftClassify:null,
				selected:null,
				editorcontent:'',
				showModuleName:true,
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
				var url='http://120.77.149.115/cloud_code/GET/product/presentById.do';
				var type='post';
				var data={
					id:self.productid
				};
				console.log(data);
				var success=function(res){
					self.presentType=res.presentType;
					self.presentSpe=res.presentSpe;
					self.name=res.name;
					self.selectimg=[res.img];
					self.price=res.price;
					self.productMarketPrice=res.productMarketPrice;
					self.total=res.total;
					self.code=res.code;
					self.productUnit=res.productUnit;
					self.detail=res.detail;
					self.weight=res.weight;
					self.editorcontent=res.detail;
					self.imgId=res.imgId;
					console.log(res)


				}
				//调用ajax
        		common.Ajax(url,type,data,success)
			}
				//进入新增页面后请求分类信息
				var url='http://120.77.149.115/cloud_code/GET/product/presentGroup.do';
		        var type='get';
		        var data={
		          vendorId:self.vendorId
		        };
		        var success=function(res){
		          self.giftClassify=res.data;
		        };
		        common.Ajax(url,type,data,success)
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
				if(self.presentSpe==''){
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
				if(self.name===null){
					self.showWarn=true;
					self.warnText='请输入礼品名称';
					return
				}
				if(self.price===null){
					self.showWarn=true;
					self.warnText='请输入市面价值';
					return
				}
				if(self.imgId===null){
					self.showWarn=true;
					self.warnText='请选择图片';
					return
				}
				if(self.weight===null){
					self.showWarn=true;
					self.warnText='请输入重量';
					return
				}
				if(self.total===null){
					self.showWarn=true;
					self.warnText='请输入库存';
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
					self.presentType=$(event.target).text();
					$(event.target).addClass('listselected');
					$(event.target).parent().siblings().find('li').removeClass('listselected');
					console.log(self.presentType);
				}

			},
			//Select a product category
			chooseClassify:function(){
				var self=this;
				self.showMB=true;
				
			},
			//hide the mask
			hide:function(){
				this.showMB=false;
				this.showMBimg=false;
			},
			//submit data
			complete:function(){
				var self=this;
				//修改
				if(self.productid!=''){
					var url='http://120.77.149.115/cloud_code/UPDATE/product/present.do';
					var type='post';
					var data={
						id:self.productid,
						rowId:self.rowId,
						name:self.name,
						img:self.imgId,
						price:self.price,
						total:self.total,
						code:self.code,
						detail:self.editorcontent,
						presentSpe:self.presentSpe,
						weight:self.weight,

					};
					console.log(data);
					var success=function(res){
						router.push({path:'/goods/gift'})
					};
					// transfer Ajax
					common.Ajax(url,type,data,success);
					return
				}
				
				var url='http://120.77.149.115/cloud_code/ADD/product/present.do';
				var type='post';
				var data={
					vendorId:self.vendorId,
					rowId:self.rowId,
					name:self.name,
					img:self.imgId,
					price:self.price,
					total:self.total,
					code:self.code,
					detail:self.editorcontent,
					presentType:self.presentType,
					presentSpe:self.presentSpe,
					weight:self.weight

				};
				var success=function(res){
					router.push({path:'/goods/gift'})
				};
				console.log(data);
				//调用ajax
				common.Ajax(url,type,data,success)
			},

			//查询图片
			searchphoto:function(){
				var self=this;
				self.showMBimg=true;
				var url='http://120.77.149.115/cloud_code//GET/product/Image.do';
				var type='get';
				var data={
					currentPage:1,
					pageSize:12,
					vendorId:parseInt(self.vendorId),
					imgType:2
				};
				var success=function(res){
					self.imglist=res.result.data;
					console.log(data);
				};
				common.Ajax(url,type,data,success);
			},

			//选择图片
			chooseimg:function(){
				var self=this;
				self.chooselist={
					url:$(event.target).attr('src').slice(21),
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
				$('.myimg').attr('src',"http://120.77.149.115"+self.selectimg)
				self.hide();
				console.log(self.selectimg);
			},

			//删除图片
			delImg:function(){
				var self=this;
				var url='http://120.77.149.115/cloud_code/DELETE/product/Image.do';
				var type='post';
				var data={
					id:$(event.target).attr('data-id')
				};
				
				var success=function(res){
					console.log(res);
					self.imgUrl='';
				};
				common.Ajax(url,type,data,success);

			},

			//上传图片
			upLoad1:function(){
				var self=this;
				var data=new FormData($('#myform')[0]);

				$.ajax({
					url: 'http://120.77.149.115/cloud_code/ADD/product/uploadImage.do',
					type:'post',
					data: data,
					cache: false,
					dataType: 'json',
					processData: false,
					contentType: false,
					success: function (res) {
						console.log(data)
						console.log(res);	
						self.imgUrl=res.imgUrl;
						self.imgWidth=res.width;
						self.imgHeight=res.height;
						self.imgId=res.id;
						self.local=true;
						self.searchphoto(1);
					},
					error:function(res){
						console.log("error")
					}
				});
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

			//文本编辑器
			updateData:function(data){
				this.editorcontent=data;
			},

			getrowId:function(){
				var self=this;
				var id=self.selected.id
				self.rowId=id;
				console.log(self.rowId)
			}
		},
		created:function(){
			this.init();
		}
	}
</script>