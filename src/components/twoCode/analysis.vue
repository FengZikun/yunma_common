<template>
	<div class="right-main">
<!-- 		<div class="plzWait">
			<p class="plzp">此功能正在开发中，敬请等待......</p>
		</div> -->
		
		<div class="right-main-main" >
			<div class='two_center_tit'>
	        <p><span class='p_left'>ID125订单--桑基图</span><span class='p_right'>(2017-04-10至2017-04-16)</span></p>
	      </div>
			<div id='sankey' style='width: 100%;height: 300px;' v-on:load="showChart"></div>
	</div>
</div>
</template>

<script>
	import '../../assets/js/echarts.js';
	import common from '../../common.js';
	export default{
		data(){
			return{
				
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
						self.showChart(res)
					},
					error:function(res){
						console.log(error)
					}
				})
			},
				showChart:function(data){
					var self=this;
          var echarts = require('echarts');
          // console.log(date);
          // console.log(dateVal)
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
				}
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
</style>