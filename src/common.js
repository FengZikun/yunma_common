import md5 from 'js-md5'
let Base64 = require('js-base64').Base64;

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
  getPage:function(currentPage, totalPages){
    var self=this;
    if(currentPage == null){
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
  }else{
    var lastpage=totalPages-2;
    var totalPage = [];
      if(currentPage<=4&&totalPages<=5){
       totalPage=totalPages;
       return totalPage
     };
     if(currentPage<4&&totalPages>5){
       totalPage=5;
     }else if(currentPage>=4&&currentPage<=lastpage){
      var i=currentPage-3;
      var len=currentPage+2;
      for(i,len;i<=len;i++){
        totalPage.push(i);
      }
    }else if(currentPage>lastpage){
      totalPage=[lastpage-2,lastpage-1,lastpage,lastpage+1,lastpage+2];
    }
    return totalPage
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


    //验证输入是否为空
    isEmpty(value, errormsg){
      if(value===null||value===''){
        return errormsg;
      }
    },

    //数量验证
    checkNum(value, errormsg){
      let val1 = parseInt(value[0]);
      let val2 = parseInt(value[1]);
      if(val1>=val2){
        return errormsg
      }
    },

    //验证密码是否正确
    psDetection(value, errormsg){
      let val1 = value[0];
      let val2 = value[1];
      if(Base64.encode(md5(val1))!=val2){
        return errormsg
      }
    },

    //验证密码
    passwdTest(value, errormsg){
      var passwordReg=/^([0-9]|[a-zA-Z]){8,16}$/;
      if(!passwordReg.test(value)&&errormsg == null){
        return false
      }else if(passwordReg.test(value)&&errormsg == null){
        return true
      }else if(!passwordReg.test(value)){
        return errormsg
      }
    },

    //配置表单验证
    validator(arr){
      var self = this;
      for(let i=0, len=arr.length; i<len; i++){
        var value = arr[i].value;
        var rules = arr[i];
        var errormsg = self.add(value, rules);
        if(errormsg){
          return errormsg;
        }
      }
    },

    //添加验证规则
    add(value, rules){
      return common[rules.name](value,rules.errormsg);
    }

  }

  export default common