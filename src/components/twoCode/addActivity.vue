<template>
	<div>
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
		<div class="mengban" v-if='showMB'>
			<div class="choosepro" >
				<div class="choosepro-top">
					选择订单
					<span class="returnBtn" @click='hide'>返回</span>
				</div>
				<ul class="choosepro-main">
					<li class="pro-li header">
						<span class="pro-li-span">订单ID</span>
						<span class="pro-li-span">厂商ID</span>
						<span class="pro-li-span">厂商名称</span>
						<span class="pro-li-span">产品ID</span>
						<span class="pro-li-span">产品名称</span>
						<span class="pro-li-span">产品数量</span>
						<span class="pro-li-span">创建日期</span>
						<span class="pro-li-span">状态</span>
					</li>
					<li class="pro-li" v-for='item in proInfo'>
						<span class="pro-li-span"><span class="check-box checkshu" @click='selectThis'></span>{{item.orderId}}</span>
						<span class="pro-li-span">{{item.vendorId}}</span>
						<span class="pro-li-span">{{item.vendorName}}</span>
						<span class="pro-li-span">{{item.productId}}</span>
						<span class="pro-li-span">{{item.productName}}</span>
						<span class="pro-li-span">{{item.productCount}}</span>
						<span class="pro-li-span">{{item.createDate}}</span>
						<span class="pro-li-span">{{item.status}}</span>

					</li>
				</ul>
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
				<div style="text-align:center;">
					<input type="button" class="delbutton" name="" value="确定" @click='confirm'>
				</div>
			</div>
		</div>
		<div class="right-main">

			<div class="right-main-top">
				<p class="right-main-top1">
					<span class="right-main-top-icon1"></span>
					新建扫码页是根据需求定义推广溯源的企业或产品的功能。
					<router-link to='/twoCode/activity'><span class='returnBtn'>返回</span></router-link>
				</p>
				<div class="right-main-top2">
					<p style="color: red;">重要提示：</p>
					<p style="color: #cbcbcc">1、发放周期可以选择默认，或者自定义时间
					</p>
					<p style="color: #cbcbcc">
						2、选择模板是对应到【模板设置】页面已添加的模板进行选择
					</p>
				</div>
			</div>
			<div class="right-main-bottom">
				<div class="messagebox">
					<span class="message-name">扫码页名称：</span>
					<input class="message-value" type="text" maxlength="20" name="" v-model='anti_fake_name'>

					<span class="after">（限20字内）</span>
				</div>
				<div class="messagebox">
					<span class="message-name">时间设置：</span>
					<div style="display:inline-block;margin-left:40px;">
						<input type="radio" name="time" id="a" class="radios" v-model='myTime' v-bind:value='1'><label for="a" class="radios">默认</label>
						<input type="radio" name="time" id="b" class="radios" v-model='myTime' v-bind:value='2'><label for="b" class="radios">自定义</label>
						<div style="display:inline-block;" v-show='myTime==2'>
							<input class="message-value" type="date" name="" v-model='startTime'>至
							<input class="message-value" type="date" name="" v-model='endTime'>
							<span class="after">（结束时间不选择则为无限期）</span>
						</div>
						
					</div>
					

				</div>
				<div class="messagebox">
					<span class="message-name">扫码页模板：</span>
					<select class="message-value" v-model='modelSelected'>
						<option class="message-value" v-for='item in model' v-bind:value='item'>{{item.htmlName}}</option>
					</select>
					<div class="after" v-if='modelSelected'>（模板功能：<span v-if='modelSelected.vendorHttp!="false"'> 公司官网 </span><span v-if='modelSelected.securityAndTraceability==0'> 防伪 溯源 </span><span v-if='modelSelected.getRedEnv==0'> 红包 </span><span v-if='modelSelected.spree==0'> 大礼包 </span><span v-if='modelSelected.weShop!="false"'> 微商城 </span><span v-if='modelSelected.productInfo!="false"'> 产品简介 </span>）</div>
					<div class="after" v-else>
						（模板功能：公司官网、防伪、溯源、红包）
					</div>
					<div>
						<span v-if='modelSelected' style="margin-left:165px;color: red;" class="editModel" @click="showKuang($event,'modelS')" v-bind:data-url='modelSelected.urlName'>预览/编辑</span>
					</div>
				</div>
				<div class="messagebox">
					<span class="message-name">选择订单：</span>
					<input class="message-value" type="text" name="" v-model='orderId' @focus='init(1)'>
				</div>
				<div class="messagebox">
					<span class="message-name">备注：</span>
					<input class="message-value" type="text" name="" v-model='mark'>
				</div>
				<div class="button-group">
					<input class="delbutton" type="button" name="" value='确定' @click='submit'>
					<router-link to='/twoCode/activity'><input class="delbutton" type="button" name="" value='取消'></router-link>
				</div>
			</div>
		</div>
		<div class="mengban modHid" defName="modelS">
			<div class="modelS">
				<div class="phoneHeader"></div>
				<div class="phoneTitle"></div>
				<img src="../../assets/img/icon_cha3.png" class="cha3" @click="hideKuang">

				<iframe v-if='modelSelected!=null' v-bind:src='frameSrc' width="349px" height="663px"></iframe>
				
				<div class="tipOut">
					<div class="tipArrow "></div>
					<h4>功能定义</h4>
					<p><i class="infoIcon"></i>选择功能后请点编辑<i class="editHui"></i>完善各功能内容</p>
					<hr style="width:380px;border-top:1px solid #d1d1d1;margin-top:15px;">
					<p>
						<span class="editErea">大礼包:</span>
						<input type="radio" name="you" v-on:click="modelSelected.spree=0" checked="true">&nbsp;显示&nbsp;&nbsp;
						<input type="radio" name="you" v-on:click="modelSelected.spree=1">&nbsp;不显示
					</p>
					<p>
						<span class="editErea">防伪溯源:</span>
						<input type="radio" name="antifake" @click="modelSelected.securityAndTraceability=0" checked="true">&nbsp;显示&nbsp;&nbsp;
						<input type="radio" name="antifake" @click="modelSelected.securityAndTraceability=1">&nbsp;不显示
					</p>
					<p>
						<span class="editErea">微商城:</span>
						<input type="radio" name="shop"  checked="true">&nbsp;显示&nbsp;&nbsp;
						<input type="radio" name="shop" v-on:click="modelSelected.weShop=false">&nbsp;不显示
						<i class="editIcon" v-on:click='showKuang($event,"shop")'></i>
					</p>
					<p>
						<span class="editErea">公司官网:</span>
						<input type="radio" name="keyOne" checked="true">&nbsp;显示&nbsp;&nbsp;
						<input type="radio" name="keyOne" @click="modelSelected.vendorHttp='false'">&nbsp;不显示
						<i class="editIcon" v-on:click='showKuang($event,"guan")'></i>
					</p>
					<p>
						<span class="editErea">产品介绍:</span>
						<input type="radio" name="keyTwo" checked="true">&nbsp;显示&nbsp;&nbsp;
						<input type="radio" name="keyTwo" @click="modelSelected.productInfo=false">&nbsp;不显示
						<i class="editIcon" v-on:click="showKuang($event,'chan')"></i>
					</p>
					<p>
						<span class="editErea">领取红包:</span>
						<input type="radio" name="keyThree" @click="modelSelected.getRedEnv=0" checked="true">&nbsp;显示&nbsp;&nbsp;
						<input type="radio" name="keyThree" @click="modelSelected.getRedEnv=1" >&nbsp;不显示
					</p>
				</div>
			</div>
		</div>
		<div class="modelBg modHid" defName="shop">
			<div class="modelContentkeyOne">
				请输入URL <input type="text" name="keyOneUrl" v-model="modelSelected.weShop" v-if='modelSelected!=null'><span class="modelbackBtn" @click="hideKuang">返回</span>
			</div>
		</div>
		<div class="modelBg modHid" defName="guan">
			<div class="modelContentkeyOne">
				请输入URL <input type="text" name="keyOneUrl" v-model="modelSelected.vendorHttp" v-if='modelSelected!=null'><span class="modelbackBtn" @click="hideKuang">返回</span>
			</div>
		</div>
		<div class="modelBg modHid" defName="chan">
			<div class="modelContentkeyOne">
				请输入URL <input type="text" name="keyOneUrl" v-model="modelSelected.productInfo" v-if='modelSelected!=null'><span class="modelbackBtn" @click="hideKuang">返回</span>
			</div>
		</div>
	</div>
</template>

<script>
	import common from '../../common.js'
	import router from '../../router.js'
	import {mapState} from 'vuex'
	export default{
		data(){
			return{
				model:null,
				modelSelected:null,
				showMB:false,
				proInfo:[],
				resData:null,
        		totalPages:'',    //总页数
        		currentPage:'',  //当前页
        		totalPage:[],    //页码数组
        		orderId:null,
        		anti_fake_name:null, //活动名称
        		startTime:null,
        		endTime:null,
        		mode_id:null,
        		getRedEnv:null,
        		productInfo:null,
        		vendorHttp:null,
        		weShop:null,
        		spree:null,
        		securityAndTraceability:null,
        		mark:null,
        		ifChangeMode:null,
        		myTime:1,
        		showWarn:null,
				warnText:null,
				frameSrc:''
        	}
        },
        props:['datas'],
        methods:{
			//初始化
			init1:function(){
				var self=this;
				//获取模板信息
				//console.log(self.type)
				var url='https://ym-a.top/cloud_code/GET/codeManager/getScaPageModel.do';
				var type='get';
				var data={
					vendorId:self.datas.vendorId
				};
				var success=function(res){
					self.model=res.data;
					//修改
					if(self.datas.activityId!=null){
						var url='https://ym-a.top/cloud_code/GET/codeManager/getCodeManagerById.do';
						var type='get';
						var data={
							id:self.datas.activityId
						};
						var success=function(data){
							self.ifChangeMode=data.mode_id;
							self.anti_fake_name=data.anti_fake_name;
							if(data.start_time!==null){
							self.startTime=data.start_time.split(" ")[0];
							self.endTime=data.end_time.split(" ")[0];
							self.myTime=2;
							}
							
							self.modelSelected=data.httpName;
							self.orderId=data.orderId;
							self.mark=data.mark;
							var myId=data.mode_id;
							for(var i=0,len=self.model.length;i<len;i++){
								if(myId==self.model[i].actionId){
									self.modelSelected=self.model[i];
									break
								}
							}
						};
						common.Ajax(url,type,data,success);
						return
					}
					
				}
				common.Ajax(url,type,data,success);
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

			//选择订单
			init:function(currentPage){
				var self=this;
				self.showMB=true;
				if(self.type==1){
					var url='https://ym-a.top/cloud_code/GET/codeManager/productInfoList.do';
				}
				else if(self.type==0){
					var url="https://ym-a.top/cloud_code/GET/codeManager/getProductOrderTracyInfo.do";
				}
				// var url='https://ym-a.top/cloud_code/GET/codeManager/productInfoList.do';
				// var url="https://ym-a.top/cloud_code/GET/codeManager/getCodeManagerAllForTracy.do";
				var type='get';
				var data={
					vendorId:self.datas.vendorId,
					currentPage:currentPage
				};
				var success=function(res){
					var pagenum=res.totalPages;
					self.totalPage=[];
					self.resData=res;
					self.proInfo=res.result.data;
					self.totalPages=res.totalPages;
					self.currentPage=res.currentPage;
					self.getPage();
				}
		        //调用ajax
		        common.Ajax(url,type,data,success)
		    },

		    selectThis:function(event){
		    	var self=this;
		    	var checkBox=$(event.target);
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
				self.orderId=$('.has-select').parent().text();
				self.showMB=false;
			},

			hideKuang(event){
				$(event.target).parent().parent().addClass('modHid');
			},
			showKuang(event,name){
				// //console.log(event.target,name);
				if(name==="guan"){
					$("[defName=guan]").removeClass('modHid');
					return;
				}
				if(name==="modelS"){
					this.frameSrc='https://ym-a.top/wx/'+$(event.target).attr('data-url');
					$("[defName=modelS]").removeClass('modHid');
					return;
				}
				if(name==="shop"){
					$("[defName=shop]").removeClass('modHid');
					return;
				}
				if(name==='chan'){
					$("[defName=chan]").removeClass('modHid');
					return;
				}
			},

			submit:function(){
				var self=this;
				if(self.anti_fake_name===null){
					self.showWarn=true;
					self.warnText='请输入扫码页名称'
					return
				}
				if(self.myTime===2&&self.startTime===null){
					self.showWarn=true;
					self.warnText='请选择开始时间'
					return
				}
				if(self.modelSelected===null){
					self.showWarn=true;
					self.warnText='请选择模板'
					return
				}
				if(self.orderId===null){
					self.showWarn=true;
					self.warnText='请选择订单'
					return
				}
				//修改
				if(self.datas.activityId!=null){
					if(self.myTime===1){
						self.startTime=null;
						self.endTime=null;
					}
					var data={
						id:self.datas.activityId,
						orderId:self.orderId,
						vendor_id:self.datas.vendorId,
						anti_fake_name:self.anti_fake_name,
						startTime:self.startTime,
						endTime:self.endTime,
						mark:self.mark,
						mode_id:self.modelSelected.actionId,
						initModeId:self.ifChangeMode,
						getRedEnv:self.modelSelected.getRedEnv,
						productInfo:self.modelSelected.productInfo,
						vendorHttp:self.modelSelected.vendorHttp,
						weShop:self.modelSelected.weShop,
						spree:self.modelSelected.spree,
						securityAndTraceability:self.modelSelected.securityAndTraceability
					}
					if(self.type==1){
						data.funcFlag=1;
					}
					else if(self.type==0){
						data.funcFlag=2;
					}
					var url='https://ym-a.top/cloud_code/UPDATE/codeManager/updateCodeManager.do';
				}else{
					var data={
						orderId:self.orderId,
						vendor_id:self.datas.vendorId,
						anti_fake_name:self.anti_fake_name,
						startTime:self.startTime,
						endTime:self.endTime,
						mark:self.mark,
						mode_id:self.modelSelected.actionId,
						getRedEnv:self.modelSelected.getRedEnv,
						productInfo:self.modelSelected.productInfo,
						vendorHttp:self.modelSelected.vendorHttp,
						weShop:self.modelSelected.weShop,
						spree:self.modelSelected.spree,
						securityAndTraceability:self.modelSelected.securityAndTraceability
					}
					if(self.type==1){
						data.funcFlag=1;
					}
					else if(self.type==0){
						data.funcFlag=2;
					}
					var url='https://ym-a.top/cloud_code/ADD/codeManager/addCodeManager.do';
				}
				var type='post';
				var success=function(res){
					if(res.status===1){
					if(self.type==1){
						router.push({path:'activity'})
					}
					else if(self.type==0){
						router.push({path:'activitySu'})
					}
					}
				};
				common.Ajax(url,type,data,success)
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
  	this.init1()
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
	.messagebox:nth-of-type(2){
		line-height: 36px;
		height: 36px;
	}
	.message-value{
		width: 230px;
		height: 36px;
		border-radius: 5px;
		border: 1px solid #e7e7eb;
		margin-left: 30px;
		padding-left: 10px;
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
		height: 65%;
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
		height: 60%;
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
	.after{
		display: inline-block;
		color:#b3b3b7;
	}
	.radios{
		display: inline-block;
		vertical-align: middle;
		margin: 0;
	}
	.pro-li-span{
		width: 12%;
	}
	.phoneHeader {
		height: 75px;
		width: 349px;
		background: url(../../assets/img/phoneHeader.png) no-repeat center center;
	}
	.modelS{
		position: absolute;
		left: 50%;
		top: 8%;
		width: 890px;
		margin-left: -445px;
		min-height: 800px;
		background: #fff;
		z-index: 2001;
		padding: 15px 30px;
		font-size: 16px;
		border-radius: 10px;

	}
	.modelBg{
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 2000;
		background: rgba(0, 0, 0, 0.6);
	}
	.modelBg1{
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 2000;
		background: rgba(0, 0, 0, 0.6);
	}
	.phoneTitle {
		height: 55px;
		width: 349px;
		border: 1px solid transparent;
		padding-top: 1px;
		background-image: url(../../assets/img/phoneTitle.png);
		background-size: cover;
		position: relative;
	}
	.phoneModule {
		padding: 0 14px;
		margin-left: 35px;
		border: 1px solid #ededed;
		border-radius: 15px;
	}
	/* 外层 */
	.tipOut {
		width: 420px;
		min-height: 65px;
		border-radius: 5px;
		margin-left: 30px;
		background-color: #f6f8fc;
		position: absolute;
		left: 390px;
		top: 300px;
		padding: 15px 25px;
		text-align: left
	}

	/*内层*/
	.tipArrow {
		width: 0px;
		height: 0px;
		border-top: 10px solid transparent;
		border-right: 10px solid;
		border-bottom: 10px solid transparent;
		position: absolute;
		margin-left: -35px;
		border-right-color: #f6f8fc;
	}
	.infoIcon {
		display: inline-block;
		height: 21px;
		width: 21px;
		background-image: url('../../assets/img/info.png');
		background-repeat: no-repeat;
		position: relative;
		top: 5px;
	}

	.editHui {
		display: inline-block;
		height: 21px;
		width: 21px;
		background-image: url('../../assets/img/editHui.png');
		background-repeat: no-repeat;
		position: relative;
		top: 7px;
		margin-left: 8px;
		margin-right: 1px;
	}

	.editIcon {
		display: inline-block;
		height: 21px;
		width: 21px;
		background-image: url('../../assets/img/edit.png');
		background-repeat: no-repeat;
		position: relative;
		top: 7px;
		margin-left: 8px;
	}

	.editIcon:hover {
		background-image: url('../../assets/img/editHui.png')
	}

	.editErea {
		display: inline-block;
		width: 130px;
		text-align: right;
		margin-right: 5px;
	}
	.cha3{
		position: absolute;
		top: 2px;
		right: -93px;
	}
	.modHid {
		display: none;
	}
	.modelContentkeyOne{
		position: absolute;
		left: 50%;
		top: 43%;
		width: 300px;
		min-height: 70px;
		background: #fff;
		z-index: 2001;
		padding: 15px 30px;
		font-size: 16px;
	}
	.mengban:nth-of-type(2){
		overflow-y: scroll;
	}
</style>