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
				<div class="warnbottom" v-if='sure'>
					<input type="button" class="delbutton" name="" value="确定" @click='commit'>
					<input type="button" class="delbutton" name="" value="取消" @click='showWarn=false;sure=false'>
				</div>
				<div class="warnbottom" v-else>
					<input type="button" class="delbutton" name="" value="确定" @click='showWarn=false'>
				</div>
			</div>
		</div>
		<div class="mengban" v-show='showInput'>
			<div class="warn">
				<div class="classifyHeader">
					<span style="display:block;height:48px;line-height:48px;">操作提示</span>
				</div>
				<div class="warnmain">
					<span>未通过原因:</span>
					<input type="text" name="" v-model='reason'>
				</div>
				<div class="warnbottom">
					<input type="button" class="delbutton" name="" value="确定" @click='fail'>
					<input type="button" class="delbutton" name="" value="取消" @click='showInput=false'>
				</div>
			</div>
		</div>
		<div class="return">
			<router-link to='/admin/checkPending'>返回</router-link>
		</div>
		<div class="main">
			<div class="mengban" v-if='showMB' @click='showMB=false'>
				<img :src="'https://ym-a.top'+big">
			</div>
			<div class="picBox">
				<span v-if='tradeMarkImgUrl===""||tradeMarkImgUrl===null' class="photo"></span>
				<img v-else class="checkPic" :src="'https://ym-a.top'+tradeMarkImgUrl" @click='watch(tradeMarkImgUrl)'>
				<span v-if='tradeMarkImgUrl===""||tradeMarkImgUrl===null' class="check-box tip"></span>
				<span v-else class="has-select tip"></span>
				<span>营业执照</span>
			</div>
			<div class="picBox">
				<span v-if='tradeMarkLicense===""||tradeMarkLicense===null' class="photo"></span>
				<img v-else class="checkPic" :src="'https://ym-a.top'+tradeMarkLicense" @click='watch(tradeMarkLicense)'>
				<span v-if='tradeMarkLicense===""||tradeMarkLicense===null' class="check-box tip"></span>
				<span v-else class="has-select tip"></span>
				<span>商标注册证</span>
			</div>
			<div class="picBox">
				<span v-if='industrialProductionLicense===""||industrialProductionLicense===null' class="photo"></span>
				<img v-else class="checkPic" :src="'https://ym-a.top'+industrialProductionLicense " @click='watch(industrialProductionLicense)'>
				<span v-if='industrialProductionLicense===""||industrialProductionLicense===null' class="check-box tip"></span>
				<span v-else class="has-select tip"></span>
				<span>工业产品生产许可证</span>
			</div>
			<div class="picBox">
				<span v-if='foodProductionLicence===""||foodProductionLicence===null' class="photo"></span>
				<img v-else class="checkPic" :src="'https://ym-a.top'+foodProductionLicence  " @click='watch(foodProductionLicence)'>
				<span v-if='foodProductionLicence===""||foodProductionLicence===null' class="check-box tip"></span>
				<span v-else class="has-select tip"></span>
				<span>食品生产许可证</span>
			</div>
			<div class="picBox">
				<span v-if='bankAccountOpeningLicense===""||bankAccountOpeningLicense===null' class="photo"></span>
				<img v-else class="checkPic" :src="'https://ym-a.top'+bankAccountOpeningLicense  " @click='watch(bankAccountOpeningLicense)'>
				<span v-if='bankAccountOpeningLicense===""||bankAccountOpeningLicense===null' class="check-box tip"></span>
				<span v-else class="has-select tip"></span>
				<span>银行开户许可证</span>
			</div>
		</div>
		
		<div class="button-group">
			<input type="button" class="delbutton delbutton2" name="" value="通过审核" @click='pass'>
			<input type="button" class="delbutton delbutton2" name="" value="未通过审核" @click='notPass'>
		</div>
	</div>
</template>

<script type="text/javascript">
import {mapState} from 'vuex'
import common from '../../common.js'
import router from '../../router.js'
export default{
	data(){
		return{
			resData:null,
			tradeMarkImgUrl:null,
			tradeMarkLicense:null,
			industrialProductionLicense:null,
			foodProductionLicence:null,
			bankAccountOpeningLicense:null,
			big:null,
			showMB:false,
			showWarn:false,
			warnText:null,
			sure:false,
			showInput:false,
			reason:null
		}
	},
	computed:{
		...mapState({
			userId:state=>state.checkQualification.userId
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
				console.log(res)
				self.resData=res;
				self.tradeMarkImgUrl=res.tradeMarkImgUrl;
				self.tradeMarkLicense=res.tradeMarkLicense;
				self.industrialProductionLicense=res.industrialProductionLicense;
				self.foodProductionLicence=res.foodProductionLicence;
				self.bankAccountOpeningLicense=res.bankAccountOpeningLicense;
			}
			common.Ajax(url,type,data,success)
		},


		//看大图
		watch(src){
			this.showMB=true;
			this.big=src
		},

		//审核通过
		pass(){
			var self=this;
			var url='https://ym-a.top/cloud_code/POST/user/passCheckingUser.do';
			var type='get';
			var data={
				userId:self.userId
			}
			var success=function(res){
				if(res.errorCode===0){
					self.showWarn=true;
					self.warnText="是否确定通过审核？"
					self.sure=true;
				}else{
					self.showWarn=true;
					self.warnText=res.msg;
				}
			}
			common.Ajax(url,type,data,success)
		},

		//未通过原因
		notPass(){
			this.showInput=true;
		},

		//不通过
		fail(){
			var self=this;
			var url='https://ym-a.top/cloud_code/POST/user/unqualifiedPassingInfo.do';
			var type='post';
			var data={
				userId:self.userId,
				checkComment:self.reason
			}
			var success=function(res){
				if(res.errorCode===0){
					self.showInput=false;
				}else{
					self.showWarn=true;
					self.warnText=res.msg;
				}
			}
			common.Ajax(url,type,data,success)
		},

		//确认
		commit(){
			router.go(-1);
		}
	},
	created(){
		this.init()
	}
}
</script>

<style scoped>
.main{
	margin-top: 60px;
	display: flex;
}
.picBox{
	width: 300px;
	height: 400px;
}
.checkPic{
	width: 200px;
	height: 200px;
}
.tip{
	display: block;
	margin: 10px auto;
}
.photo{
	display: inline-block;
	margin-left: 10px;
	width: 200px;
	height: 200px;
	vertical-align: middle;
	background: url(../../assets/img/touxiang_png.png);
	background-size: contain;
	background-repeat: no-repeat;
}
.button-group{
	margin-bottom: 40px;
}
.delbutton2{
	width: 100px;
	height: 36px;
}
.return{
	position: absolute;
	top: 4%;
	right: 5%;
	margin: 0;
}
</style>