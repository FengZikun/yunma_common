<template>
  <div>
    <div class="mengban" v-show='showMB2'>
      <div class="proclassify" >
        <div class="classifyHeader">
          重置密码
        </div>
        <div class="passwordMessage">
          <span class="message-name">新密码：</span>
          <input class="message-value" type="password" name="" v-model='newPassword' @blur='testPswd'>
        <p class="pswWarn hidelist">密码长度至少为8位</p>

        </div>
        <div class="passwordMessage">
          <span class="message-name">确认新密码：</span>
          <input class="message-value" type="password" name="" v-model='checkPassword'>
        </div>
        <div class="classifyFooter">
          <input class="delbutton" type="button" name="" value="确认" @click='resetPassword'>
          <input class="delbutton" type="button" name="" value="取消" @click='hide'>
        </div>
        
      </div>
    </div>
    <div class="right-main">
      <div class="right-main-bottom">
        <div class="button-group">
          <router-link to='/admin/addAdmin'>
            <div class="add-pro">
              +&nbsp;新增管理员
            </div>
          </router-link>
        </div>
        <div class="my-form">
          <ul class="pro-list">
            <li class="pro-li">
              <span class="pro-li-span">用户名</span>
              <span class="pro-li-span">用户类型</span>
              <span class="pro-li-span">所属公司</span>
              <span class="pro-li-span">创建时间</span>
              <span class="pro-li-span">操作</span>
            </li>
            <li class="pro-li" v-for="info in getInfo">
              <span class="pro-li-span" style="display: inline-block;vertical-align: middle">{{info.userName}}</span>
              <span class="pro-li-span" v-if='info.userType==99'>管理员</span>
              <span class="pro-li-span" v-else>商家用户</span>
              <span class="pro-li-span">{{info.vendorName}}</span>
              <span class="pro-li-span">{{info.createTime}}</span>
              <span class="pro-li-span"><a href="javascript:void(0)" v-bind:data-id='info.userId' @click='mengban2'>重置密码</a> <a href="javascript:void(0)" v-if='info.userType!=99&&info.stutas==1' v-bind:data-id='info.userId' @click='locking'>锁定账号</a> <a href="javascript:void(0)" v-if='info.userType!=99&&info.stutas==0' v-bind:data-id='info.userId' @click='locking'>取消锁定</a></span>
            </li>
          </ul>
        </div>
      </div>
      <page v-on:finit='init'></page>
    </div>
  </div>
</template>
<style scoped>
  /*@import "../../assets/css/common.css";*/
  .pro-li-span{
    text-align: center;
    width: 19%;
    vertical-align: top;
  }
  .top-title{
    width: 95%;
    margin: auto;
    height: 36px;
    text-align: left;
    margin-top: 40px;
  }
  .right-main{
    width: 95%;
    height: 1310px;
    background: #fff;
    border-radius: 8px;
    margin: auto;
    margin-top: 44px;
  }
  .right-main-top{
    width: 90%;
    margin: auto;
    padding-top: 60px;
    text-align: left;
  }
  .right-main-top2,
  .right-main-top3{
    margin-left: 25px;
    color: #b3b3b3;
  }
  .right-main-bottom{
    width: 95%;
    margin:auto;
    text-align: left;
  }
  .page-num-ul a{
    display: inline-block;
  }
  .button-group{
    margin-top: 40px;
  }
  a{
    text-decoration: none;
  }
  a:hover{
    text-decoration: none;
  }
  a:visited{
    text-decoration: none;
  }
  a:focus{
    text-decoration: none;
  }
  .passwordMessage{
    margin-top: 30px;
  }
  .classifyHeader{
    line-height: 48px;
    text-align: left;
  }
  .classifyFooter{
    top: 42px;
  }
  .delbutton{
    margin-top: 10px;
  }
  .message-name{
    display: inline-block;
    width: 100px;
    text-align: right;
  }
  .pswWarn{
    color: red;
    text-align: center;
  }
</style>
<script>
  import common from '../../common.js'
  import {mapMutations} from 'vuex'
  export default{
    data(){ 
      return{
        childCon:'我是子页面',
        getInfo:[],
        resData:[],      //请求回的所有数据
        showMB:false,    //蒙版开关
        showMB2:false,    //蒙版开关2
        newPassword:null,
        checkPassword:null,
        userid:null,
      }
    },
    methods:{
      ...mapMutations({
        getData:'page/getData'
      }),
      //初始化
      init:function(currentPage){
        var self=this;
        var url='https://ym-a.top/cloud_code/GET/user/userInfoList.do';
        var type='get';
        var data={
          num:1,
          userId:1,
          currentPage:currentPage
        };
        var success=function(res){
          self.getInfo=res.result.data;
          var pagenum=res.totalPages;
          self.currentPage=res.currentPage;
          self.resData=res;
          var totalPage=[];
          totalPage = self.getPage(res.currentPage, res.totalPages);
          self.getData({currentPage:res.currentPage, totalPages:res.totalPages, totalPage:totalPage})
        }
        //调用ajax
        common.Ajax(url,type,data,success)
      },

      //获取页数
      getPage:common.getPage,


      //显示蒙版
      mengban:function(){
        this.showMB=true;
      },
      //显示蒙版2
      mengban2:function(){
        this.showMB2=true;
        self.userid=parseInt($(event.target).attr('data-id'));
      },
      //隐藏蒙版
      hide:function(){
        this.showMB=false;
        this.showMB2=false;

      },

      //重置密码
      resetPassword:function(){
        var self=this;
        var passwordReg=/^([0-9]|[a-zA-Z]){8,16}$/;
        if(self.newPassword==null){
          alert('请输入新密码')
          return
        }
        if(!passwordReg.test(self.newPassword)){
          alert('请输入至少8位密码')
          return
        }
        if(self.newPassword===self.checkPassword){
          var url='https://ym-a.top/cloud_code/POST/user/updatePasswd.do';
          var type='post';
          var data={
            userId:userid,
            passwd:parseInt(self.newPassword)
          };
          //console.log(data)
          var success=function(res){
            if(res.errorCode===0){
              alert('修改成功');
              self.showMB2=false;
              self.newPassword=null;
              self.checkPassword=null;
              self.userid=null
            }else{
              //console.log(res.errorCode)
            }
          };
          common.Ajax(url,type,data,success)
        }else{
          alert('请确认新密码')
        }
        
      },

      //锁定账号和取消锁定
      locking:function(){
        var self=this;
        var clickText=$(event.target);
        //console.log(clickText.text());
        if(clickText.text()=='锁定账号'){
          var url='https://ym-a.top/cloud_code/POST/user/lockUser.do';
          var type='post';
          var data={
            userId:parseInt(clickText.attr('data-id'))
          };
          var success=function(res){
            if(res.errorCode===0){
              alert('锁定成功')
              clickText.text('取消锁定');
            }
          };
          common.Ajax(url,type,data,success);
        }
        if(clickText.text()=='取消锁定'){
          var url='https://ym-a.top/cloud_code/POST/user/canselLockUser.do';
          var type='post';
          var data={
            userId:parseInt(clickText.attr('data-id'))
          };
          var success=function(res){
            if(res.errorCode===0){
              alert('解锁成功')
              clickText.text('锁定账号');
            }
          }
          common.Ajax(url,type,data,success);
        }
      },

      //新增管理员
      addNew:function(){
        var self=this;
        var url='https://ym-a.top/cloud_code/POST/user/vendorUser.do';
        var type='post';
        var data={
          userName:self.userName,
          passwd:self.passwd,
          vendorName:self.vendorName
        };
        var success=function(res){
          //console.log(res);
          if(res.errorCode==0){
            self.showMB=false;
            self.init();
          }
        };
        common.Ajax(url,type,data,success)
      },

      //验证密码
      testPswd:function(){
        var self=this;
        var passwordReg=/^([0-9]|[a-zA-Z]){8,16}$/;
        if(!passwordReg.test(self.newPassword)){
          $('.pswWarn').removeClass('hidelist');
        }else{
          $('.pswWarn').addClass('hidelist');
        }
      },

      //翻页
      changePage:common.changePage,

      //上一页
      prevPage:common.prevPage,

      //下一页
      nextPage:common.nextPage,
    },
    created:function(){
      this.init()
    }
  }
</script>
