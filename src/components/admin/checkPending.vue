<template>
	<div>
		<div class="right-main">
			<div class="right-main-bottom">
				<div class="my-form">
					<ul class="pro-list">
						<li class="pro-li">
							<span class="pro-li-span">用户ID</span>
							<span class="pro-li-span">厂商ID</span>
							<span class="pro-li-span">厂商名称</span>
							<span class="pro-li-span">企业资质状态</span>
							<span class="pro-li-span">创建日期</span>
							<span class="pro-li-span">操作</span>
						</li>
						<li class="pro-li" v-for='item in list'>
							<span class="pro-li-span">{{item.userId}}</span>
							<span class="pro-li-span">{{item.vendorId}}</span>
							<span class="pro-li-span">{{item.vendorName}}</span>
							<span class="pro-li-span">{{item.checkStatus}}</span>
							<span class="pro-li-span">{{item.createTime}}</span>
							<span class="pro-li-span"><a href="javascript:void(0)" @click='detail(item.userId)'>查看</a></span>

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
    methods:{
    	...mapMutations({
    		getUserId:'checkQualification/getUserId'
    	}),
    	init(currentPage){
    		var self=this;
    		var url='https://ym-a.top/cloud_code/GET/user/userUncheckedUserInfoInfoList.do';
    		var type='post';
    		var data={
    			pageSize:10,
    			currentPage:1
    		}
    		var success=function(res){
    			console.log(res)
    			self.resData=res.result;
    			self.list=res.result.data;
    			self.totalPages=res.totalPages;
    			self.currentPage=res.currentPage;
    			self.getPage();
    		};
    		common.Ajax(url,type,data,success)
    	},

    	//查看
    	detail(id){
    		this.getUserId(id);
    		router.push({path:'/admin/checkQualification'})
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
	width: 16%;
}
</style>