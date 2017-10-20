<template>
	<div>
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
</template>

<script type="text/javascript">
import {mapState} from 'vuex'

export default{
	data(){
		return{

		}
	},
    computed:{
      ...mapState({
        resData:state=>state.pageButton.resData,
        currentPage:state=>state.pageButton.currentPage,
        totalPages:state=>state.pageButton.totalPages,
        totalPage:state=>state.pageButton.totalPage,
      })
    },
    mounted(){
    	console.log(this.resData)
    },
	methods:{

		//获取页数
		getPage:function(){
			var self=this;
			var lastpage=self.totalPages-2;
			if(self.currentPage<=4&&self.totalPages<=5){
				self.totalPage=self.totalPages;
				return
			};
			if(self.currentPage<4&&self.totalPages>5){
				self.totalPage=5;
			}else if(self.currentPage>=4&&self.currentPage<=lastpage){
				var i=self.currentPage-3;
				var len=self.currentPage+2;
				for(i,len;i<=len;i++){
					self.totalPage.push(i);
				}
			}else if(self.currentPage>lastpage){
				self.totalPage=[lastpage-2,lastpage-1,lastpage,lastpage+1,lastpage+2];
			}

		},
		//翻页
		changePage:function(){
			var self=this;
			self.currentPage=$(event.target).attr('data-page');
			self.init(self.currentPage);
			$('.checkshu').addClass('check-box').removeClass('has-select');
			self.chechednum=0;
		},

		//上一页
		prevPage:function(){
			var self=this;
			var shangye=self.currentPage;
			var pagenum=shangye-1;
			this.init(pagenum);
			$('.checkshu').addClass('check-box').removeClass('has-select');
			this.chechednum=0;
		},

		//下一页
		nextPage:function(){
			var self=this;
			var shangye=self.currentPage;
			var pagenum=shangye+1;
			this.init(pagenum);
			$('.checkshu').addClass('check-box').removeClass('has-select');
			this.chechednum=0;
		},
	}
}
</script>

<style scoped>

</style>