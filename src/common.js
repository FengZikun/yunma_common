
const common={
	//test
	test:function(){
		alert(11)
	},
	//ajax请求
	Ajax:function(url,type,data,success){
		$.ajax({
			url:url,
			dataType:'json',
			type:type,
			data:data,
			success:success,
			error:function(){
				console.log('error')
			}
		})
	},
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

export default common