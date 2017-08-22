<template>
	<div>
		<div class="top-title">
			<router-link to="/twoCode/game" class='title-one'>列表</router-link>
			<router-link to="/twoCode/gameRule" class='title-two'>规则</router-link>
			<router-link to="/twoCode/exhibitors" class='title-two'>中奖名单</router-link>
		</div>
		<div class="right-main">
			<div class="right-main-bottom">
				<div class="button-group">
					<router-link to='/twoCode/addGame'>
						<div class="add-pro">
							+&nbsp;新建集字游戏
						</div>
					</router-link>
				</div>
				<div class="my-form">
					<ul class="pro-list">
						<li class="pro-li">
							<span class="pro-li-span head">订单/产品ID</span>
							<span class="pro-li-span head">规则名称</span>
							<span class="pro-li-span head">状态</span>
							<span class="pro-li-span head">中奖字</span>
							<span class="pro-li-span head">有效时间</span>
							<span class="pro-li-span head">创建时间</span>
						</li>
						<li class="pro-li" v-for='item in dataInfo'>
							<span class="pro-li-span">{{item.order_id||item.product_id}}</span>
							<span class="pro-li-span">{{item.name}}</span>
							<span class="pro-li-span"></span>
							<span class="pro-li-span">{{item.prize_item}}</span>
							<span class="pro-li-span time">{{item.effect_time}}<br>{{item.invalid_time}}</span>
							<span class="pro-li-span">{{item.create_time}}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script type="text/javascript">
	import common from '../../common.js'
	export default{
		data(){
			return{
				dataInfo:null
			}
		},
		methods:{
			init(){
				var self=this;
				var url='https://ym-a.top/cloud_code/GET/CollectWord/getCollectWordGameList.do';
				var type='get';
				var data={
					vendorId:self.datas.vendorId
				};
				var success=function(res){
					self.dataInfo=res.data
				};
				common.Ajax(url,type,data,success)
			}
		},
		props:['datas'],
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
		width: 15%;
		height: 72px;
		line-height: 72px;
		vertical-align: middle;
	}
	.head{
		height: 60px;
		line-height: 60px;
	}
	.time{
		line-height: 26px;
		margin: 10px 0;
		vertical-align: top;
		display: inline-block;
		text-align: center;
		max-height: 52px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.pro-list{
		overflow-y: scroll;
	}
</style>