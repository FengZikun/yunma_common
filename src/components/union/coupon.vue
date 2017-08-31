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
		<div class="mengban" v-show='showMB'>
			<div class="proclassify" >
				<div class="classifyHeader">
					<span style="display:block;height:48px;line-height:48px;">关联微店</span>
				</div>
				<div class="messagebox">
					<span class="message-name">appKey：</span>
					<input class="message-value" type="text" name="" v-model='appKey'>
					<a href="javascript:void(0)" style="display: block;margin-left: 105px;" @click='showMB2=true;showMB=false'>如何获取appKey和secret</a>
					</div>
					<div class="messagebox">
						<span class="message-name">secret：</span>
						<input class="message-value" type="text" name="" v-model='secret'>
					</div>
					<div class="messagebox">
						<span class="message-name">产品地址：</span>
						<input class="message-value" type="text" name="" v-model='productUrl'>
					</div>
					<div class="classifyFooter">
						<input class="delbutton" type="button" name="" value="确认" @click='connect'>
						<input class="delbutton" type="button" name="" value="取消" @click='hide'>
					</div>

				</div>
			</div>
			<div class="mengban" v-show='showMB1'>
				<div class="proclassify" >
					<form id="wxd" enctype="multipart/form-data" method="post"> 
						<div class="classifyHeader">
							<span style="display:block;height:48px;line-height:48px;">关联微信小店</span>
						</div>
						<div class="messageboxwxd">
							<span class="message-name" style="padding-left:-5px;">开发者ID(AppID)：</span>
							<input class="wxd-value" type="text" name="appId" v-model="appIdWxd">
						</div>
						<div class="messageboxwxd">
							<span class="message-name">开发者密码：</span>
							<input class="wxd-value" type="text" name="secret" v-model="secretWxd">
						</div>
						<div class="messageboxwxd">
							<span class="message-name">微信支付API秘钥：</span>
							<input class="wxd-value" type="text" name="apiKey" v-model="apiKeyWxd">
						</div>
						<div class="messageboxwxd">
							<span class="message-name">微信商户号：</span>
							<input class="wxd-value" type="text" name="mchId" v-model="mchIdWxd">
						</div>
						<div class="messageboxwxd">
							<span class="message-name">产品地址：</span>
							<input class="wxd-value" type="text" name="productUrl" v-model='productUrlWxd'>
						</div>
						<div class="messageboxwxd" v-if="credentialsLocationWxd!=null">
							<span class="message-name">证书地址：</span>
							<span class="wxd-value">已上传至服务器</span>
							<!-- <span class="wxd-value">{{credentialsLocationWxd}}</span> -->
							<br>
							<a href="javascript:void(0)" @click="credentialsLocationWxd=null" style="margin-left:109px;">重新上传证书？</a>
						</div>

						<div class="messageboxwxd" v-if="credentialsLocationWxd==null">
							<span class="message-name">上传证书：</span>
							<input class="wxd-value" type="file" name="credentials">
						</div>
						<div class="messageboxwxd" v-if="credentialsLocationWxd==null">
							<span class="message-name">上传证书：</span>
							<input class="wxd-value" type="file" name="credentials">
						</div>
						<div class="messageboxwxd" v-if="credentialsLocationWxd==null">
							<span class="message-name">上传证书：</span>
							<input class="wxd-value" type="file" name="credentials">
						</div>
						<div class="messageboxwxd" v-if="credentialsLocationWxd==null">
							<span class="message-name">上传证书：</span>
							<input class="wxd-value" type="file" name="credentials">
						</div>

						<input type="text" name="vendorId" v-bind:value="vendorId" class="hidelist">
						</form>
						<div class="classifyFooter">
							<input class="delbutton" type="button" name="" value="确认" @click='connectwxd' v-if="connectwx">
							<input class="delbutton" type="button" name="" value="修改" @click='updatewxd' v-if="updatewx">
							<input class="delbutton" type="button" name="" value="取消" @click='hide'>
						</div>
					
				</div>
			</div>
			<div class="mengban" v-show='showMB2'>
				<div style="width: 1000px;height: 850px; overflow-y: scroll;margin: auto;position: absolute;top:100px;left: 220px;">
					<img style="width: 1000px" src="../../assets/img/2.jpg">
				</div>
				<img src="../../assets/img/icon_cha3.png" class="cha" @click='showMB=true;showMB2=false'>

			</div>
			<div class="mengban" v-show='showMB3'>
		      <div class="proclassify" >
		        <div class="tishi">
		          确定将优惠券删除吗？
		        </div>
		        <input class="delbutton" type="button" name="" value="确认" @click='delcoupon'>
		        <input class="delbutton" type="button" name="" value="取消" @click='hide'>
		      </div>
		    </div>
			<div class="mengban" v-show='showMB4'>
		      <div class="proclassify" >
		        <div class="tishi">
		          请扫码进行微信商户平台验证
		        </div>
		        <div class="codeImg"></div>
		        <input class="delbutton" type="button" name="" value="完成" @click='hide'>
		      </div>
		    </div>
			<div class="right-main">
				<div class="right-main-top">
					<p class="right-main-top1">
						<span class="right-main-top-icon1"></span>
						<span style="display:inline-block;width:95%;">您可以设置不同的购物券领取活动，每个购物券活动均有独立的领取链接，您可将购物券的领取链接设置在商城自定义首页或自定义页面，让会员领取使用（促进转化），同时在商品详情页、购物车、活动中心均有领取入口。</span>

					</p>
				</div>
				<div class="right-main-bottom">
					<div class="button-group">
						<router-link to='/union/newActivities'>
							<div class="add-pro">
								+&nbsp;新建领券活动
							</div>
						</router-link>
						<router-link to='/union/newActivities'>
							<div class="add-pro2">
								同步信息
							</div>
						</router-link>

						<a href="javascript:void(0)" @click='search'>
							<div class="add-pro3">
								关联微店
							</div>
						</a>
						<a href="javascript:void(0)" @click='wxdbind'>
							<div class="add-pro3">
								关联微信小店
							</div>
						</a>
					</div>
					<div class="my-form">
						<ul class="pro-list">
							<li class="pro-li">
								<span class="pro-li-span">优惠券名称</span>
								<span class="pro-li-span">活动时间</span>
								<span class="pro-li-span">优惠券价格</span>
								<span class="pro-li-span">领取限制</span>
								<span class="pro-li-span">适用范围</span>
								<span class="pro-li-span">操作</span>
							</li>
							<li class="pro-li" v-for="pro in proInfo">
								<span class="pro-li-span first" style="text-align: center;">{{pro.name}}</span>
								<span class="pro-li-span" style="text-align:center;line-height:24px;margin: 12px 0;">{{pro.beginTime}}<br>{{pro.endTime}}</span>
								<span class="pro-li-span">满 {{pro.leastCost}} 减 <span style="color:red;">{{pro.reduce}}</span></span>
								<span class="pro-li-span" style="line-height:24px;margin:12px 0;">每人限 {{pro.buyerLimit}} 张<br><span style="color: #c3c3c6">库存{{pro.stock}}</span></span>
								<span class="pro-li-span" v-if='pro.type==2'>微店优惠券</span>
								<span class="pro-li-span" v-else>商户号优惠券</span>
								<!-- <span class="pro-li-span">
									<router-link to='#'>
										<span class="bianji" @click.self='updata' v-bind:data-id='pro.id'></span>
									</router-link>
									<a href="javascript:void(0)">
										<span class="shanchu" @click.self='mengban2' v-bind:data-id='pro.id'></span>
									</a>
								</span> -->
								<span class="pro-li-span">
			                      <span title="删除" class="shanchu" v-bind:data-id='pro.couponId' @click='mengban3'></span>

			                    </span>
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
		export default{
			data(){
				return{
					childCon:'我是子页面',
			        chechednum:0,    //全选单选控制
			        proInfo:[],      //信息数组
			        totalPage:[],    //页码数组
			        resData:[],      //请求回的所有数据
			        showMB:false,    //蒙版开关
			        deleteArr:[],    //删除数组
			        currentPage:'',  //当前页
			        totalPages:'',    //总页数
			        keyword:'',
			        appKey:null,
			        secret:null,
			        showMB1:false,
			        showMB2:false,
			        showMB3:false,
			        showMB4:false,
			        couponId:null,
			        productUrl:null,
			        showWarn:false,
	        		warnText:'',
	        		productUrlWxd:null,
	        		appIdWxd:null,
	        		credentialsLocationWxd:null,
	        		secretWxd:null,
	        		mchIdWxd:null,
	        		apiKeyWxd:null,
	        		connectwx:false,
	        		updatewx:false
		    	}
			},
		props:['vendorId'],
		methods:{
			//初始化
			init:function(currentPage){
				var self=this;
				var url='https://ym-a.top/cloud_code/GET/wdCoupon/couponInfoList.do';
				var type='get';
				var data={
					vendorId:self.vendorId,
					pageSize:10,
					currentPage:currentPage
				};
				var success=function(res){
					//console.log(res)
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


			//显示蒙版
			mengban2:function(){
				// this.showMB=true;
				// this.deleteArr.push($(event.target).attr('data-id'));
			},
			//删除提示
	      mengban3:function(){
	        var self=this;
	        self.showMB3=true;
	        self.couponId=$(event.target).attr('data-id');
	      },
			//获取
			search:function(){
				var self=this;
				self.showMB=true;
				var url='https://ym-a.top/cloud_code/GET/wd/config.do';
				var type='get';
				var data={
					vendorId:self.vendorId
				};
				var success=function(res){
					if(res.statuscode===1){
						self.appKey=res.appKey;
						self.secret=res.secret;
						self.productUrl=res.productUrl;
					}
					
				};
				common.Ajax(url,type,data,success)
			},
			// 查询微信小店关联信息
			wxdbind:function(){
				var self=this;
				$.ajax({
					url:'https://ym-a.top/cloud_code/wechatCouponConfig/getConfig.do',
					type:'post',
					data:{
						vendorId:self.vendorId,
					},
					dataType:'json',
					success:function(res){
						if(jQuery.isEmptyObject(res)){
							self.connectwx=true;
							self.updatewx=false;
							return
						}
						else{
							self.updatewx=true;
							self.connectwx=false;
							self.appIdWxd=res.appId;
							self.credentialsLocationWxd=res.credentialsLocation;
							self.secretWxd=res.secret;
							self.mchIdWxd=res.mchId;
							self.apiKeyWxd=res.apiKey;
							self.productUrlWxd=res.productUrl;
						}
					},
					error:function(res){
						//console.log(res)
					}
				})
				this.showMB1=true;
			},
			//关联微店
			connect:function(){
				var self=this;
				var url='https://ym-a.top/cloud_code/ADD/wd/config.do';
				var type='post';
				var data={
					vendorId:self.vendorId,
					appKey:self.appKey,
					secret:self.secret,
					productUrl:self.productUrl
				};
				var success=function(res){
					if(res.statuscode===1||2){
						self.showMB=false
					}else{
						//console.log(res.msg)
					}
				};
				common.Ajax(url,type,data,success)
			},
			// 关联微信小店
			connectwxd:function(){
				var self=this;
        		var data=new FormData($('#wxd')[0]);
        		$.ajax({
		          url: 'https://ym-a.top/cloud_code/wechatCouponConfig/addConfig.do',
		          type:'post',
		          data: data,
		          cache: false,
		          dataType: 'json',
		          processData: false,
		          contentType: false,
		          success: function (res) {
		            if(res.statuscode==1){
		              self.sandBox();
		            }
		            else{
		              self.showWarn=true;
		              self.warnText=res.msg
		            }
		          },
		          error:function(res){
		           self.showWarn=true;
		              self.warnText='更新出错'
		          }
		        });
		        self.showMB1=false;
			},
			// 修改微信小店
			updatewxd:function(){
				var self=this;
				self.updatewx=true;
				self.connectwx=false;
				var data=new FormData($('#wxd')[0]);
        		$.ajax({
		          url: 'https://ym-a.top/cloud_code//wechatCouponConfig/updateConfig.do',
		          type:'post',
		          data: data,
		          cache: false,
		          dataType: 'json',
		          processData: false,
		          contentType: false,
		          success: function (res) {
		            if(res.statuscode==1){
		              self.sandBox();
		            }
		            else{
		              self.showWarn=true;
		              self.warnText=res.msg
		            }
		          },
		          error:function(res){
		           self.showWarn=true;
		              self.warnText='更新出错'
		          }
		        });
		        self.showMB1=false;
			},
			// 沙河验证
			sandBox:function(){
				var self=this;
		        self.showMB4=true;
				$.ajax({
					url:'https://ym-a.top/cloud_code/wechatCouponConfig/getConfig.do',
					type:'post',
					data:{
						vendorId:self.vendorId,
					},
					dataType:'json',
					success:function(res){
						if(jQuery.isEmptyObject(res)){
							self.showMB4=false;
							self.showWarn=true;
							self.warnText='请先关联微信小店';
							return
						}
						else if(res.appId!=''&res.credentialsLocation!=''&res.secret!=''&res.mchId!=''&res.apiKey!=''){
							var code=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${res.appId}&redirect_uri=http%3a%2f%2fmp.ym-a.top%2ftransfer.html&response_type=code&scope=snsapi_base&state=${self.vendorId}funcsandbox&component_appid=wx639e8bfda5be58eb#wechat_redirect`;
							var qrcodeNode=document.getElementsByClassName('codeImg')[0];
							$(qrcodeNode).html('');
							self.qrcode = new QRCode(qrcodeNode, {
								text: code,
								width: 400,
								height: 400,
								colorDark: "#000000",
								colorLight: "#ffffff"
							});
							return
						}
						else {
							self.showMB4=false;
							self.showWarn=true;
							self.warnText='请补全关联微信小店信息';
							return
						}
					},
					error:function(res){
						console.log(res)
					}
				})
			},
			//隐藏蒙版
			hide:function(){
				this.showMB=false;
				this.showMB1=false;
				this.showMB3=false;
				this.showMB4=false;

			},
			// 删除优惠券
			delcoupon:function(){
				var self=this;
				self.showMB3=false;
				var url='https://ym-a.top/cloud_code//DELETE/coupon/info.do';
				var type='get';
				var data={
					vendorId:self.vendorId,
					couponId:self.couponId.toString()
				};
				var success=function(res){
					if(res.statuscode==1){
						alert('删除成功')
					}
					self.init()
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
		created:function(){
			this.init();
		}
	}
</script>

<style scoped>
	/*@import "../../assets/css/common.css";*/
	.pro-li-span{
		width: 16%;
	}
	.top-title{
		width: 95%;
		margin: auto;
		height: 36px;
		text-align: left;
		margin-top: 40px;
	}
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
		padding-top: 60px;
		text-align: left;
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
		margin-top: 55px;
	}
	.page-num-ul a{
		display: inline-block;
	}
	.add-pro2{
		display: inline-block;
		text-align: center;
		width: 140px;
		height: 36px;
		line-height: 36px;
		border-radius: 8px;
		background-color: #ffa800;
		color: #fff;
		margin-left: 30px;
	}
	.add-pro3{
		float: right;
		display: inline-block;
		text-align: center;
		width: 140px;
		height: 36px;
		line-height: 36px;
		border-radius: 8px;
		background-color: #00baff;
		color: #fff;
		margin-left: 30px;
	}
	.classifyFooter{
		top: 34px;
	}
	.delbutton{
		margin-top: 15px;
	}
	.messagebox{
		margin-top: 30px;
		text-align: left;
	}
	.messageboxwxd{
		margin-top: 20px;
		text-align: left;
	}
	.message-name{
		width: 100px;
		display: inline-block;
		text-align: right;
	}
	.message-value{
		border: 1px solid #ededed;
		height: 30px;
		padding-left: 5px;
		border-radius: 5px;
		text-align: left;
	}
	.wxd-value{
		display: inline-block;
		padding-left: 5px;
	}
	.cha{
		position: absolute;
		top: 70px;
		right: 100px;
	}
	.pro-li:nth-of-type(2){
		margin-top: 20px;
	}
	a:hover{
		text-decoration: none;
	}
	.codeImg{
		width: 400px;
		height: 400px;
		background: #fff;
		margin: -33px auto 0;
	}
	.proclassify1 {
	    width: 420px;
	    min-height: 500px;
	    background: #fff;
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    margin-left: -250px;
	    margin-top: -250px;
	}
</style>