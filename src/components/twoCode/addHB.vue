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
					选择订单
					<span class="returnBtn" @click='hide'>返回</span>
					<router-link class="returnBtn" to='/twoCode/addRule'>新增规则</router-link>
					
				</div>
				<ul class="choosepro-main" v-if='order'>
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
				<ul class="choosepro-main" v-if='rule'>
					<li class="pro-li">
			            <span class="pro-li-span head">规则ID</span>
			            <span class="pro-li-span head">规则名称</span>
			            <span class="pro-li-span head">规则类型</span>
			            <span class="pro-li-span head">红包等级</span>
			            <span class="pro-li-span head">发放方式</span>
			            <span class="pro-li-span head">发放者名称</span>
			            <span class="pro-li-span head">红包祝福语</span>
			            <span class="pro-li-span head">创建时间</span>

			          </li>
			          <li class="pro-li" v-for='(item,index) in info'>
			            <span class="pro-li-span"><span class="check-box checkshu" @click='selectThis'></span>{{item.id}}</span>
			            <span class="span2">{{item.ruleName}}</span>
			            <span class="pro-li-span"></span>
			            <span class="pro-li-span">{{item.ruleLvel}}</span>
			            <span class="pro-li-span"></span>
			            <span class="pro-li-span"></span>
			            <span class="pro-li-span"></span>
			            <span class="pro-li-span">{{item.createTime}}</span>
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
		<div class="step1" v-bind:class='{hidestep:onehide}'>
			<div class="top">
				<img src="../../assets/img/step.png">
				<span class="return"><router-link to='/twoCode/hongbao' style="text-decoration: none">返回</router-link></span>
			</div>
			<div class="main">
				<div class="HBmessage">
					<span class="message-name">选择订单：</span>
					<input class="message-value" type="text" v-model='orderId' @click='init(1)'>
				</div>
				<div class="HBmessage">
					<span class="message-name">选择规则：</span>
					<input class="message-value" type="text" name="" v-model='ruleId' @click='chooseRule(1)'>
				</div>
				<input class="next" type="button" name="" value="下一步" @click='showStep2'>
			</div>
		</div>
		
		<div class="step2" v-bind:class='{hidestep:twohide}'>
			<div class="top">
				<img src="../../assets/img/step2.png">
				<span class="return"><a href="javascipt:void(0)" style="text-decoration: none"  @click='showStep1'>返回</a></span>
			</div>
			<div class="main">
				<div class="HBmessage">
					<span class="message-name">金额：</span>
					<input class="message-value" type="text" name="" v-model='money' :placeholder='jine'>
				</div>
				<div class="HBmessage">
					<span class="message-name">生效时间：</span>
					<input class="message-value" type="date" name="" v-model='startTime'>
				</div>
				<div class="HBmessage">
					<span class="message-name">失效时间：</span>
					<input class="message-value" type="date" name="" v-model='endTime'>
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
				
			</div>
			<div class="main" style="margin-top:70px">
				
				<div class="buttongroup">
					<router-link to='/twoCode/hongbao'><input class="jumpbutton" type="button" name="" value="完成"></router-link>

				</div>
			</div>
		</div>
	</div>

</template>

<script>
	
</script>

<style scoped>
/*@import "goodscommon.css";*/
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
	.next{
		width: 130px;
		height: 36px;
		display: block;
		color: #fff;
		background-color: #00baff;
		outline: none;
		border: none;
		border-radius: 3px;
		padding: 0 10px;
		margin-left: 70px;
		margin-top: 80px;
	}
	.message-name{
		display: inline-block;
		width: 120px;
		margin-left: 25px;
		text-align: right;
		color: #000;
		vertical-align: middle;
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
		border: 1px solid #e8e8ec;
		width: 333px;
		height: 36px;
		padding-left: 5px;
	}
	.brod{
		display: inline-block;
		width: 760px;
		height: 105px;
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
		margin: 85px 0 34px 70px;
	}
	.jumpbutton:hover{
		background-color: #00baff;
		color: #fff;
	}
	.p{
		color: #999999;
	}
	.title{
		margin-top: 60px;
		margin-left: 50px;
		font-size: 18px;
	}
	.HBmessage{
		margin-top: 40px;
	}
	.hidestep{
		display: none;
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
.span2{
  display: inline-block;
  height: 70px;
  line-height: 70px;
  word-break: break-all;
  width: 10%;
  text-align: center;
  vertical-align: top;
}
</style>
<script>
import common from '../../common.js'
	export default{
		data(){
			return{
				type:'',
				showMB:false,
				onehide:false,
				twohide:true,
				threehide:true,
        		totalPages:'',    //总页数
        		currentPage:'',  //当前页
        		resData:[],      //请求回的所有数据
        		totalPage:[],    //页码数组
       			proInfo:[],      //信息数组
       			orderId:null,
       			order:false,
       			ruleId:null,
       			rule:false,
       			info:[],
       			startTime:null,
       			endTime:null,
       			money:null,
       			jine:null,
       			showWarn:false,
				warnText:null
			}
		},
		props:['datas'],
		methods:{
			//进入step1
			showStep1:function(){
				this.onehide=false;
				this.twohide=true;
				this.threehide=true;
				$('body').scrollTop(0);
			},
			//进入step2
			showStep2:function(){
				var self=this;
				//获取金额信息
				var url='https://ym-a.top/cloud_code/GET/redEnv/moneyScope.do';
				var type='get';
				var data={
					ruleId:parseInt(self.ruleId),
					orderId:parseInt(self.orderId)
				};
				var success=function(res){
					self.jine="金额范围："+res.min+"~"+res.max;
					self.min=res.min;
					self.max=res.max;
					self.onehide=true;
					self.twohide=false;
					self.threehide=true;
					$('body').scrollTop(0);
				}
				common.Ajax(url,type,data,success);
				
			 
			},
			//进入step3
			showStep3:function(){
				var self=this;
				var url='https://ym-a.top/cloud_code/ADD/redEnv/info.do';
				var type='post';
				var data={
					vendorId:parseInt(self.datas.vendorId),
					orderId:parseInt(self.orderId),
					ruleId:parseInt(self.ruleId),
					money:parseInt(self.money),
					startTime:self.startTime,
					endTime:self.endTime
				};
				var success=function(res){
					if(res.statuscode===1){
						self.onehide=true;
						self.twohide=true;
						self.threehide=false;
						$('body').scrollTop(0);
						return
					}else{
						self.showWarn=true;
						self.warnText=res.msg;
					}
					
				}
				common.Ajax(url,type,data,success)
				
				
			},

			//选择订单
			init:function(currentPage){
				var self=this;
				self.showMB=true;
				self.order=true;
				var url='https://ym-a.top/cloud_code/GET/product/productEnvInfoList.do';
		        var type='get';
		        var data={
		          vendorId:self.datas.vendorId,
		          currentPage:currentPage,
		          envFlag:0
		        };
		        var success=function(res){
		          var pagenum=res.totalPages;
		          self.totalPage=[];
		          self.resData=res;
		          self.proInfo=res.result.data;
		          self.totalPages=res.totalPages;
		          self.currentPage=res.currentPage;
		          self.getPage();
		          var vendorName=res.result.data[0].vendorName;
		          self.$emit('upvendorName',vendorName);
		        }
		        //调用ajax
		        common.Ajax(url,type,data,success)
			},


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

			//选择规则
			chooseRule:function(currentPage){
				var self=this;
				self.showMB=true;
				self.rule=true;
				var url='https://ym-a.top/cloud_code/GET/redEnv/ruleInfo.do';
				var type='get';
				var data={
					vendorId:parseInt(self.datas.vendorId),
					currentPage:currentPage,
					pageSize:10
				};
				var success=function(res){
					self.info=res.result.data;
					self.resData=res;
					self.totalPages=res.totalPages;
					self.currentPage=res.currentPage;
					self.getPage();
				};
				common.Ajax(url,type,data,success)
			},

			//隐藏蒙版
			hide:function(){
				var self=this;
				self.showMB=false;
				self.order=false;
				self.rule=false;
			},

			//显示蒙版
			mengban:function(){
				var self=this;
				self.showMB=true;
			},

			//确认
			confirm:function(){
				var self=this;
				if(self.order){
					self.orderId=$('.has-select').parent().text();
				}else{
					self.ruleId=$('.has-select').parent().text();
				}
				self.showMB=false;
				self.order=false;
				self.rule=false;
				// self.proInfo=[];
			},

			//获取页数
      		getPage:common.getPage,
      		//翻页
	      changePage:function(){
	      	var self=this;
	      	self.currentPage=$(event.target).attr('data-page');
	      	if(self.order){
	      		
		        self.init(self.currentPage);
		        $('.checkshu').addClass('check-box').removeClass('has-select');
		        self.chechednum=0;
	      	}else{
	      		self.currentPage=$(event.target).attr('data-page');
		        self.chooseRule(self.currentPage);
		        $('.checkshu').addClass('check-box').removeClass('has-select');
		        self.chechednum=0;
	      	}
	        
	        
	      },

      //上一页
      prevPage:common.prevPage,

      //下一页
      nextPage:common.nextPage,

		}
	}
</script>