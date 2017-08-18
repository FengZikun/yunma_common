<template>
	<div>
		<div class="top-title">
			<router-link to="/twoCode/game" class='title-two'>列表</router-link>
			<router-link to="/twoCode/gameRule" class='title-one'>规则</router-link>
			<router-link to="/twoCode/exhibitors" class='title-two'>中奖名单</router-link>
		</div>
		<div class="right-main">
			<div class="right-main-bottom">
				<div class="button-group">
					<a href="javascript:void(0)" @click='addRule'>
						<div class="add-pro">
							+&nbsp;新建规则
						</div>
					</a>
				</div>
				<div class="my-form">
					<ul class="pro-list">
						<li class="pro-li">
							<span class="pro-li-span head">规则ID</span>
							<span class="pro-li-span head">规则名称</span>
							<span class="pro-li-span head">中奖字</span>
							<span class="pro-li-span head">创建时间</span>
							<span class="pro-li-span head">查看详情</span>
						</li>
						<li class="pro-li" v-for='item in dataInfo'>
							<span class="pro-li-span">{{item.id}}</span>
							<span class="pro-li-span">{{item.name}}</span>
							<span class="pro-li-span">{{item.prize_item}}</span>
							<span class="pro-li-span">{{item.createTime}}</span>
							<span class="pro-li-span"><a href="javascript:void(0)" v-bind:data-id='item.id' @click='showDetail'>详情</a></span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import common from '../../common.js'
import router from '../../router.js'
import { mapMutations } from 'vuex'

	export default{
		data(){
			return{
				dataInfo:null
			}
		},
		props:['datas'],
		methods:{
			...mapMutations({
				getId:'getId'
			}),
			init(){
				var self=this;
				var url='https://ym-a.top/cloud_code/GET/CollectWord/getRuleList.do';
				var type='get';
				var data={
					vendorId:self.datas.vendorId
				};
				var success=function(res){
					self.dataInfo=res.data
				};
				common.Ajax(url,type,data,success)
			},
			showDetail(){
				var self=this;
				var id=$(event.target).attr('data-id');
				self.getId(id)
				router.push({path:'/twoCode/addGameRule'})

			},
			addRule(){
				var self=this;
				self.getId("add");
				router.push({path:'/twoCode/addGameRule'})
				
			}
		},
		mounted(){
			this.init()
		}
	}
</script>

<style scoped>
	.right-main-bottom{
		width: 95%;
		margin:auto;
		text-align: left;
	}
	.button-group{
		margin-top: 40px;
	}
	.pro-li-span{
		width: 19%;
		height: 72px;
		line-height: 72px;
		vertical-align: middle;
	}
	.head{
		height: 60px;
		line-height: 60px;
	}
	.time{
		height: 52px;
	}
	.pro-list{
		overflow-y: scroll;
	}
</style>