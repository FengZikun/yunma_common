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
		<div class="mengban" v-if='showMB'>
			<div class="choosepro" >
				<div class="choosepro-top">
					选择厂商
					<span class="returnBtn" @click='hide'>返回</span>
				</div>
				<ul class="choosepro-main">
					<li class="pro-li">
						<span class="pro-li-span">ID</span>
						<span class="pro-li-span">厂商名称</span>
						<span class="pro-li-span">所属行业</span>
						<span class="pro-li-span">联系方式</span>
						<span class="pro-li-span">功能需求</span>
						<span class="pro-li-span">邮箱</span>
						<span class="pro-li-span">官网/微商城/公众号</span>
						<span class="pro-li-span">备注</span>
					</li>
					<li class="pro-li" v-for="pro in proInfo">
						<span class="pro-li-span" style="display: inline-block;vertical-align: middle"><span class="check-box checkshu" @click='selectThis'></span>{{pro.vendorId}}</span>
						<span class="pro-li-span">{{pro.brand_name}}</span>
						<span class="pro-li-span">{{pro.industryName}}</span>
						<span class="pro-li-span">{{pro.customPhone}}</span>
						<span class="pro-li-span">{{pro.functionType}}</span>
						<span class="pro-li-span">{{pro.vendorEmail}}</span>
						<span class="pro-li-span" style="line-height: 24px;text-align:left;overflow: hidden;text-overflow: ellipsis;min-width: 100px;">官网：{{pro.link}}<br>微商城：{{pro.vendor_mall}}<br>公众号：{{pro.officialAccounts}}</span>
						<span class="pro-li-span">{{pro.comment}}</span>
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
		<div class="messagebox">
			<span class='message-name'>用户名：</span>
			<input class="message-value" type="text" name="" v-model='userName'>
		</div>
		<div class="messagebox">
			<span class='message-name'>密码：</span>
			<input class="message-value" type="password" name="" v-model='passwd' @blur='checkInput'>
			<p class="inputWarn hidelist">请输入8~16位的密码</p>
		</div>
		<div class="messagebox">
			<span class='message-name'>厂商名：</span>
			<input class="message-value" type="text" name="" v-model='vendorName' @focus='mengban'>
		</div>
		<div style="text-align: left;padding-left: 75px;">
			<input class="delbutton" type="button" name="" value="确认" @click='addNew'>
			<input class="delbutton" type="button" name="" value="取消" @click='goback'>
		</div>
	</div>
</template>

<script>
	import common from '../../common.js'
	import router from '../../router.js'
	export default{
		data(){
			return{
				userName:null,
				passwd:null,
				vendorName:null,
				showMB:false,
				currentPage:'',  //当前页
       			totalPages:'',    //总页数
       			proInfo:[],      //信息数组
		        totalPage:[],    //页码数组
		        resData:[],      //请求回的所有数据
		        vendorName:null,
		        vendorId:null,
		        showWarn:false,
		        warnText:null
		    }
		},
		methods:{

			//初始化
			init:function(currentPage){
				var self=this;
				var url='http://120.77.149.115/cloud_code/GET/vendor/info.do';
				var type='get';
				var data={
					deleteFlag:0,
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
			//新增管理员
			addNew:function(){
				var self=this;
				if(self.userName===null){
					self.showWarn=true;
					self.warnText='请输入用户名';
					return
				}
				if(self.passwd===null){
					self.showWarn=true;
					self.warnText='请输入8~16位的密码';
					return;
				}
				if(self.vendorName===null){
					self.showWarn=true;
					self.warnText='请选择厂商';
					return;
				}
				var url='http://120.77.149.115/cloud_code/POST/user/vendorUser.do';
				var type='post';
				var data={
					userName:self.userName,
					passwd:self.passwd,
					vendorName:self.vendorName,
					vendorId:self.vendorId
				};
				var success=function(res){
					console.log(data);
					if(res.errorCode==0){
						router.push({path:'accountinfo'})
					}
				};
				common.Ajax(url,type,data,success)
			},

			goback:function(){
				var self=this;
				router.push({path:'accountinfo'});
			},

			mengban:function(){
				var self=this;
				self.showMB=true;
			},

			//隐藏蒙版
			hide:function(){
				var self=this;
				self.showMB=false;
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

			//新增管理员
			confirm:function(){
				var self=this;
				self.vendorId=$('.has-select').parent().text();
				self.vendorName=$('.has-select').parent().next().text();
				self.showMB=false;
			},

			//验证密码
			checkInput:function(){
				var self=this;
				var passwdReg=/^\d{8}$/;
				if(!passwdReg.test(self.passwd)){
					$(event.target).next().removeClass('hidelist');
				}else{
					$(event.target).next().addClass('hidelist');
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
		created:function(){
			this.init();
		}
	}
</script>

<style scoped>
	
	.message-name{
		display: inline-block;
		width: 80px;
		text-align: right;
		color: #666;
		margin-left: 40px;
		vertical-align: top;
	}
	.message-value{
		border: 1px solid #ccc;
		height: 30px;
		padding-left: 5px;
	}
	.messagebox{
		min-height: 56px;
		text-align: left;
		margin-top: 40px;
	}
	.pro-li-span{
		text-align: center;
		width: 12%;
		vertical-align: top;
	}
	.inputWarn{
		color: red;
		margin-left: 123px;
	}
	.delbutton{
		width: 100px;
		height: 36px;
		color: #fff;
		background-color: #00baff;
		outline: none;
		border: none;
		border-radius: 3px;
		padding: 0 10px;
		margin-top: 80px;
		margin-left: 50px;
		margin-bottom: 34px;
	}
</style>