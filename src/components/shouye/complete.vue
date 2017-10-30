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
					<input type="button" class="delbutton" name="" value="确定" @click='showWarn=false'>
				</div>
			</div>
		</div>
		<form id='myform' enctype="multipart/form-data">
			<div class="phbox">
				<span class='photo' v-bind:style="{backgroundImage: imgSrcA}"></span>
				<p class="p">企业营业执照</p>
				<input type="file" name="tradeMarkImgUrl" style="display:none;" id="photoA" @change='change($event)'>
				<label for="photoA" class="button">上传图片</label>
			</div>
			<div class="phbox">
				<span class='photo'  v-bind:style="{backgroundImage: imgSrcB}"></span>
				<p class="p">商标注册证</p>
				<input type="file" name="tradeMarkLicense" style="display:none;" id="photoB" @change='change($event)'>
				<label for="photoB" class="button">上传图片</label>
			</div>
			<div class="phbox">
				<span class='photo'  v-bind:style="{backgroundImage: imgSrcC}"></span>
				<p class="p">银行开户许可证</p>
				<input type="file" name="bankAccountOpeningLicense" style="display:none;" id="photoC" @change='change($event)'>
				<label for="photoC" class="button">上传图片</label>
			</div>
			<div class="phbox">
				<span class='photo'  v-bind:style="{backgroundImage: imgSrcD}"></span>
				<p class="p">食品生产许可证</p>
				<input type="file" name="foodProductionLicence" style="display:none;" id="photoD" @change='change($event)'>
				<label for="photoD" class="button">上传图片</label>
			</div>
			<div class="phbox">
				<span class='photo'  v-bind:style="{backgroundImage: imgSrcE}"></span>
				<p class="p">工业产品生成许可证</p>
				<input type="file" name="industrialProductionLicense" style="display:none;" id="photoE" @change='change($event)'>
				<label for="photoE" class="button">上传图片</label>
			</div>
		</form>
		<div class="button-group">
			<input type="button" class="delbutton delbutton2" name="" value='提交' @click='commit'>
		</div>
		<div v-if='checkComment!==null'>
			<p>
				<span>审核未通过原因：</span>
				<span>{{checkComment}}</span>
			</p>
		</div>
	</div>
</template>

<script type="text/javascript">
import {mapState} from 'vuex'
import common from '../../common.js'
export default{
	data(){
		return{
			imgSrcA:null,
			imgSrcB:null,
			imgSrcC:null,
			imgSrcD:null,
			imgSrcE:null,
			showWarn:false,
			warnText:null,
		}
	},
	computed:{
		...mapState({
			vendorId:state=>state.vendorId.vendorId,
			userId:state=>state.vendorId.userId,
			checkComment:state=>state.vendorId.checkComment
		})
	},
	methods:{
		
		init(){
			var self=this;
			var url='https://ym-a.top/cloud_code/POST/user/singleTestingUserInfo.do';
			var type='get';
			var data={
				userId:self.userId
			}
			var success=function(res){
				self.resData=res;
				if(res.tradeMarkImgUrl!==null){
					self.imgSrcA=`url('${"https://ym-a.top"+res.tradeMarkImgUrl}')`;
				}
				if(res.tradeMarkLicense!==null){
					self.imgSrcB=`url('${"https://ym-a.top"+res.tradeMarkLicense}')`;
				}
				if(res.industrialProductionLicense!==null){
					self.imgSrcC=`url('${"https://ym-a.top"+res.industrialProductionLicense}')`;
				}
				if(res.foodProductionLicence!==null){
					self.imgSrcD=`url('${"https://ym-a.top"+res.foodProductionLicence}')`;
				}
				if(res.bankAccountOpeningLicense!==null){
					self.imgSrcE=`url('${"https://ym-a.top"+res.bankAccountOpeningLicense}')`;
				}
			}
			common.Ajax(url,type,data,success)
		},
		//同步现实图片
		change:function(eImg){
			const reader = new FileReader();
			if($(eImg.target).attr('id')=='photoA'){
				reader.onloadend = (e) =>
				{
					this.imgSrcA = `url('${e.target.result}')`;
				};
			};
			if($(eImg.target).attr('id')=='photoB'){
				reader.onloadend = (e) =>
				{
					this.imgSrcB = `url('${e.target.result}')`;
				};
			};
			if($(eImg.target).attr('id')=='photoC'){
				reader.onloadend = (e) =>
				{
					this.imgSrcC = `url('${e.target.result}')`;
				};
			};
			if($(eImg.target).attr('id')=='photoD'){
				reader.onloadend = (e) =>
				{
					this.imgSrcD = `url('${e.target.result}')`;
				};
			};
			if($(eImg.target).attr('id')=='photoE'){
				reader.onloadend = (e) =>
				{
					this.imgSrcE = `url('${e.target.result}')`;
				};
			};
			reader.readAsDataURL(eImg.target.files[0]);

		},

		//提交
		commit(){
			var self=this;
			if(self.imgSrcA===null){
				self.showWarn=true;
				self.warnText="请上传企业营业执照";
				return
			}
			if(self.imgSrcB===null){
				self.showWarn=true;
				self.warnText="请上传商标注册证";
				return
			}
			var picData=new FormData($('#myform')[0]);
			picData.append('vendorId',self.vendorId);
			$.ajax({
				url:'https://ym-a.top/cloud_code/POST/user/uploadRegistrationPic.do',
				type:'post',
				dataType:'json',
				data:picData,
				cache: false,
				processData: false,
				contentType: false,
				success:function(res){
					console.log(res)
					if(res.errorCode===0){
						self.showWarn=true;
						self.warnText=res.msg;
					}
					else{
						self.showWarn=true;
						self.warnText=res.msg;
					}
				},
				error:function(res){
					console.log('error')
				}
			})
		}
	},
	created(){
		this.init()
	}
}
</script>

<style scoped>
.button{
	width: 69px;
	height: 24px;
	line-height: 24px;
	font-size: 14px;
	color: #fff;
	border-radius: 5px;
	background: #00baff;
	display: block;
	margin: auto;
	text-align: center;
}
.phbox{
	display: inline-block;
	vertical-align: top;
	text-align: center;
	margin-right: 50px;
	margin-top: 20px;
}
.button-group{
	margin-top: 40px;
}
.delbutton2{
	width: 100px;
	height: 36px;
	margin-bottom: 60px;
}
.photo{
	margin-left: 0;
}
.picture{
	display: inline-block;
	width: 75px;
	height: 75px;
	background-size: contain;
  	background-repeat: no-repeat;
}
</style>