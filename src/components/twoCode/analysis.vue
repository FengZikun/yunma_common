<template>
	<div class="right-main">
<!-- 		<div class="plzWait">
			<p class="plzp">此功能正在开发中，敬请等待......</p>
		</div> -->
		
		<div class="right-main-main" >
			<div class='two_center_tit'>
	        <p><span class='p_left'>桑基图</span><span class='p_right'></span></p>
	      </div>
			<div id='sankey' style='width: 100%;height: 300px;' v-on:load="showChart"></div>
		</div>
		<div class="right-main-main" >
			<div class='two_center_tit'>
	        <p><span class='p_left'>桑基图详情</span><span class='p_right'></span></p>
	      </div>
			<div v-if="nodedata!=null">
				<div class="my-form">
		          <ul class="pro-list">
		            <li class="pro-li">
		              <span class="pro-li-span" style="width:23.6%">代理商名称</span>
		              <span class="pro-li-span" style="width:23.6%">接受总量</span>
		              <span class="pro-li-span" style="width:23.6%">分销总量</span>
		              <span class="pro-li-span" style="width:23.6%">库存总量</span>
		            </li>
		            <li class="pro-li">
		              <span class="pro-li-span" style="width:23.6%">{{nodedata.name}}</span>
		              <span class="pro-li-span" style="width:23.6%">{{nodedata.source}}</span>
		              <span class="pro-li-span" style="width:23.6%">{{nodedata.target}}</span>
		              <span class="pro-li-span" style="width:23.6%">{{nodedata.self}}</span>

		            </li>
		           </ul>
		          </div>
			</div>
			<div v-if="edgedata!=null">
				<div class="my-form">
		          <ul class="pro-list">
		            <li class="pro-li">
		              <span class="pro-li-span">上级代理</span>
		              <span class="pro-li-span">下级代理</span>
		              <span class="pro-li-span">分销总量</span>
		            </li>
		            <li class="pro-li">
		              <span class="pro-li-span">{{edgedata.source}}</span>
		              <span class="pro-li-span">{{edgedata.target}}</span>
		              <span class="pro-li-span">{{edgedata.currentProCount}}</span>
		            </li>
		           </ul>
		          </div>	
			</div>

		</div>
</div>
</template>

<script>
	import '../../assets/js/echarts.js';
	import common from '../../common.js';
	export default{
		data(){
			return{
				links:null,
				nodedata:null,
				edgedata:null
			}
		},
		props:['datas'],
		methods:{
			init:function(){
				var self=this;
				$.ajax({
					url:'https://ym-a.top/cloud_code/GET/sankey/getSankeyDiagramData.do',
					type:'post',
					data:{vendorId:self.datas.vendorId},
					dataType:'json',
					success:function(res){
						self.links=res.links;
						self.showChart(res)
					},
					error:function(res){
						//console.log(error)
					}
				})
			},
				showChart:function(data){
				  var self=this;
		          var echarts = require('echarts');
		          // //console.log(date);
		          // //console.log(dateVal)
		          var myChart = echarts.init(document.getElementById('sankey'));

		          var option = {
		                  tooltip: {
		                      trigger: 'item',
		                      triggerOn: 'mousemove'

		                  },
		                  series: [
		                      {
		                          type: 'sankey',
		                          layout:'none',
		                          data: data.nodes,
		                          links: data.links,
		                          itemStyle: {
		                              normal: {
		                                  borderWidth: 1,
		                                  borderColor: '#aaa'
		                              }
		                          },
		                          lineStyle: {
		                              normal: {
		                                  curveness: 0.5
		                              }
		                          }
		                      }
		                  ]
		              };
		          myChart.setOption(option);
		          myChart.on('click',function(params){
			      	// 清空数据
			      	self.edgedata=null;
			      	self.nodedata=null;
			      	if(params.dataType=="edge"){
			      		// self.dataType="edge";
			      		self.drawtable(params.dataType,params.data);
			      	}
			      	else if(params.dataType=="node"){
			      		// self.dataType="node";
			      		self.drawtable(params.dataType,params.name)
			      	}
			      });
				},
				// 渲染表格数据
				drawtable:function(dataType,data){
					var self=this;
					if(dataType=='edge'){
						self.edgedata=data;
					}
					if(dataType=='node'){
						// self.nodedata=data;
						self.nodedata={}
						self.nodedata.name=data;
						self.nodedata.source=0;
						self.nodedata.target=0;
						let len=self.links.length;
						for(let i=0;i<len;i++){
							//console.log(self.links[i].target)
							if(self.links[i].target==data){
								self.nodedata.source+=parseInt(self.links[i].currentProCount)
							}
							else if(self.links[i].source==data){
								self.nodedata.target+=parseInt(self.links[i].currentProCount)
							}
						}
						self.nodedata.self=self.nodedata.source-self.nodedata.target;
					}
				},
			},
		mounted:function(){
      this.init();
    }
	}
	
</script>

<style scoped>
	.right-main-main{
		width: 95%;
		height: 500px;
		margin: 0 auto;
	}
	  .two_center_tit {
	    border-bottom: 1px solid #ccc;
	  }
	  .two_center_tit p {
	    text-align: left;
	    padding-top: 20px;
	  }
	 .two_center_tit p .p_left {
	    padding-top: 30px;
	    text-align: left;
	    padding-left:20px;
	    font-size: 16px;
	    color:#00BAFF;
	  }
	  .two_center_tit p .p_right {
	    color: #6d7776;
	    padding-left: 5px;
	  }
	  .pro-li-span1{
	  	width: 23.6%
	  }
	  .pro-li-span{
	  	width: 30.6%
	  }
</style>