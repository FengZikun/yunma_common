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
		<div class="mengban" v-if='content'>
			<div class="contentBox">
				<div class="contentTop">
					<span class="titleFont">发放内容</span>
					<span class="cha" @click='content=false'></span>
				</div>
				<div class="contentMain">
					<ul class="contentUl">
						<li v-for='item in contentInfo'>
							{{item.itemName}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="right-main">
			<div class="right-main-bottom">
				<div class="button-group">
					<router-link to='/union/addCouponRule'>
						<div class="add-pro">
							+&nbsp;新建发放规则
						</div>
					</router-link>
				</div>
				<div class="my-form">
					<ul class="pro-list">
						<li class="pro-li">
							<span class="pro-li-span">规则ID</span>
							<span class="pro-li-span">规则名</span>
							<span class="pro-li-span">发放内容</span>
							<span class="pro-li-span">发放载体</span>
							<span class="pro-li-span">状态</span>
							<span class="pro-li-span">发放周期</span>
							<span class="pro-li-span">操作</span>
						</li>
						<li class="pro-li" v-for="(pro,index) in proInfo">
							<span class="pro-li-span first" style="text-align: center;">{{pro.id}}</span>
							<span class="pro-li-span">{{pro.ruleName}}</span>
							<span class="pro-li-span">
							 <span class="chakan" @click='showContent(index)'></span>
							</span>
							<span class="pro-li-span">
							 <span class="chakan"></span>
								
							</span>
							<span class="pro-li-span">
								<span class="zanting"></span>
							</span>
							<span class="pro-li-span" v-if='pro.timeType==0'>
								<span>长期</span>
							</span>
							<span class="pro-li-span time" v-else>
								<span>{{pro.startTime}}</span><br><span>{{pro.endTime}}</span>
							</span>
							<span class="pro-li-span">
								<span title="删除" class="shanchu" @click='delRule(pro.id)'></span>
							</span>
						</li>
					</ul>
				</div>
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
</div>

</template>

<script>
	import common from '../../common.js'
	import router from '../../router.js'
	export default{
		data(){
			return{
				proInfo:[],
		        totalPage:[],    //页码数组
		        resData:[],      //请求回的所有数据
		        currentPage:'',  //当前页
		        totalPages:'',    //总页数
		        content:false,
		        contentInfo:null,
		        showWarn:false,
				warnText:null

		    }
		},
		props:['vendorId'],
		methods:{
			init:function(currentPage){
				var self=this;
				var url='https://ym-a.top/cloud_code/GET/couponRule/info.do';
				var type='get';
				var data={
					vendorId:self.vendorId,
					currentPage:currentPage,
					pageSize:10
				}
				var success=function(res){
					//console.log(res);
					var pagenum=res.totalPages;
					self.totalPage=[];
					self.resData=res;
					self.totalPages=res.totalPages;
					self.currentPage=res.currentPage;
					self.proInfo=res.result.data;
          			self.getPage();

				}
				common.Ajax(url,type,data,success)
			},

			//删除规则
			delRule:function(id){
				var self=this;
				var url='https://ym-a.top/cloud_code/DELETE/couponRule/info.do';
				var type='get';
				var data={
					id:id,
					vendorId:self.vendorId
				};
				var success=function(res){
					if(res.statuscode===1){
						self.init(self.currentPage);
						self.showWarn=true;
						self.warnText='删除成功';
					}else{
						self.showWarn=true;
						self.warnText=res.msg;
					}
				};
				common.Ajax(url,type,data,success)
			},

			//查看内容
			showContent:function(index){
				var self=this;
				self.content=true;
				self.contentInfo=self.proInfo[index].whiteArray;
				//console.log(self.proInfo[index]);
			},
			//翻页
			changePage:common.changePage,

			//上一页
			prevPage:common.prevPage,

			//下一页
			nextPage:common.nextPage,
			//获取页数
    		getPage:common.getPage,
		},
		created:function(){
			this.init()
		}
	}
</script>

<style scoped>
	
	.right-main-bottom{
		width: 95%;
		margin:auto;
		text-align: left;
		margin-top: 55px;
	}
	.pro-li-span{
		width: 13.7%;
	}
	.yulan1{
		position: relative;
		top: -1px;
	}
	#scan:hover{
		opacity: 0;
	}
	.yulan2{
		background-image: url('../../assets/img/icon_yulan2.png');
		background-repeat: no-repeat;
		background-position: center center;
	}
	.contentUl li{
		float: left;
	}
</style>