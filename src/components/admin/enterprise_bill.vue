<template>
	<div>
		<!-- <div class="top-title">
			<router-link to='/union/bill' class='title-two'>微信小店</router-link>
			<router-link to='/union/wdBill' class='title-one'>微店</router-link>
		</div> -->
		<div class="right-main">
			<div class="right-main-bottom">
				<div class="button-group">
					<span>筛选时间：</span>
					<input class="message-value" type="month" name="" v-model='searchMonth'>
					<input type="button" class="search-button" name="" value="搜索" @click='search(searchMonth,currentPage)'>
					<div class="count">
						<span>实付合计：￥</span>
						<span v-if='resData!==null'>{{resData.sum}}</span>
					</div>
				</div>
				<div class="my-form">
					<ul class="pro-list">
						<li class="pro-li">
							<span class="pro-li-span">厂商ID</span>
							<span class="pro-li-span">厂商名</span>
							<span class="pro-li-span">交易笔数</span>
							<span class="pro-li-span">实付合计</span>
							<span class="pro-li-span">详情</span>
						</li>
						<li class="pro-li" v-for='item in list'>
							<span class="pro-li-span">{{item.vendorId}}</span>
							<span class="pro-li-span">{{item.vendorName}}</span>
							<span class="pro-li-span">{{item.payCount}}</span>
							<span class="pro-li-span">{{item.paySum}}</span>
							<span class="pro-li-span"><a href="javascript:void(0)" @click='detail(item.vendorId)'>查看</a></span>

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

<script type="text/javascript">
import common from '../../common.js'
import {mapMutations} from 'vuex'
import router from '../../router.js'
export default{
	data(){
		return{
			list:null,
			resData:null,
			currentPage:'',  //当前页
        	totalPages:'',    //总页数
        	totalPage:[],    //页码数组
        	searchMonth:null
		}
	},
	props:['vendorId'],
	methods:{
		...mapMutations({
			getVendorId:'detailBill/getVendorId',
			getTime:'detailBill/getTime'
		}),
		init(currentPage){
			var self=this;
			if(self.searchMonth===null){
				var nowdays = new Date();
				var year = nowdays.getFullYear();
				var month = nowdays.getMonth();
				if(month==0)
				{
					month=12;
					year=year-1;
				}
				if (month < 10) {
					month = "0" + month;
				}
				self.searchMonth=year + "-" + month;
			}
			
				//微店
				var url2='https://ym-a.top/cloud_code/wdcouponorder/getVendorOrder.do';
				var type2='post';
				var data2={
					time:self.searchMonth,
					currentPage:currentPage,
					pageSize:10
				}
				var success2=function(res){
					self.resData=res.result;
					self.list=res.result.data;
					self.totalPages=res.totalPages;
					self.currentPage=res.currentPage;
					self.getPage();
				};
				common.Ajax(url2,type2,data2,success2)
			},

		//搜索
		search(month,currentPage){
			var self=this;
			var year=parseInt(month.split('-')[0]);
			var selmonth=parseInt(month.split('-')[1]);
			var myDate = new Date(year, selmonth, 0);
			var firstDay=month+"-"+"01";
			var lastDay=month+"-"+myDate.getDate();
			var url2='https://ym-a.top/cloud_code/wdcouponorder/getVendorOrder.do';
			var type2='post';
			var data2={
				time:month,
				currentPage:currentPage,
				pageSize:10
			}
			var success2=function(res){
				console.log(res);
				self.resData=res.result;
				self.list=res.result.data;
				self.totalPages=res.totalPages;
				self.currentPage=res.currentPage;
				self.getPage();
			};
			common.Ajax(url2,type2,data2,success2)
		},

		//查看详情
		detail(id){
			this.getVendorId(id);
			this.getTime(this.searchMonth)
			router.push({path:'/admin/detailBill'})
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
	mounted(){
		this.init();
	}
}
</script>

<style scoped>
.right-main-bottom{
	width: 95%;
	margin:auto;
	text-align: left;
}
.search-button{
	float: none;
}
.message-value{
	border: 1px solid #ccc;
	height: 30px;
	padding-left: 5px;
	border-radius: 5px;
}
.count{
	display: inline-block;
	float: right;
	margin-right: 30px;
}
.button-group{
	margin-top: 20px;
}
.pro-li-span{
	width: 19%;
}
</style>