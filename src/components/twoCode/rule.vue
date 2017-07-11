<template>
<div>
<div class='top-title'>
            <router-link to="/twoCode/hongbao" class='title-two'>红包</router-link>
            <router-link to="/twoCode/rule" class='title-one'>规则</router-link>
          </div>
  <div class="right-main">
    <div class="mengban" v-show='showMB' @click='hide'>
        <my-component v-if='index!=null' v-bind:info="info" v-bind:index="index" class="HBlevel">
              
            </my-component>
      
    </div>
    <div class="right-main-bottom">
      <div class="button-group">
        <span>统计时间：</span>
        <input class="message-value" type="text" name="">
        <span>搜索规则：</span>
        <input class="message-value" type="text" name="">
        <router-link to='/twoCode/addRule'>
          <div class="add-pro">
            +&nbsp;新建规则
          </div>
        </router-link>
      </div>
      <div class="my-form">
        <ul class="pro-list">
          <li class="pro-li">
            <span class="pro-li-span head">规则ID</span>
            <span class="pro-li-span head">规则名称</span>
            <span class="pro-li-span head">规则类型</span>
            <span class="pro-li-span head">红包等级</span>
            <span class="pro-li-span head">发放方式</span>
            <span class="pro-li-span head">发放者名称</span>
            <span class="pro-li-span head">红包祝福语</span>
            <span class="pro-li-span head">创建时间</span>
            <span class="pro-li-span head">查看详情</span>

          </li>
          <li class="pro-li" v-for='(item,index) in info'>
            <span class="pro-li-span">{{item.id}}</span>
            <span class="span2">{{item.ruleName}}</span>
            <span class="pro-li-span"></span>
            <span class="pro-li-span">{{item.ruleLvel}}</span>
            <span class="pro-li-span"></span>
            <span class="pro-li-span"></span>
            <span class="pro-li-span"></span>
            <span class="pro-li-span">{{item.createTime}}</span>
            <span class="pro-li-span"><img v-bind:data='index' src="../../assets/img/icon_yulan.png" @click='getposition'></span>
          </li>
        </ul>
      </div>
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
<style scoped>
 /*@import "../assets/css/common.css";*/

 .right-main-top{
  width: 95%;
  margin: auto;
  padding-top: 60px;
  text-align: left;
}
.right-main-top1{
  margin-bottom: 50px;
}
.right-main-top-icon1{
  width: 18px;
  height: 18px;
  background: url("../../assets/img/icon_tishi.png") no-repeat;
  float: left;
  margin-right: 8px;
}
.right-main-top{
  width: 95%;
  margin: auto;
  padding-top: 60px;
  text-align: left;
}
.right-main-bottom{
  width: 95%;
  margin:auto;
  text-align: left;
}
.pro-li{
  position: relative;
}
.pro-li-span{
  width: 10%;
  height: 70px;
  line-height: 70px;
  vertical-align: middle;
}
.head{
  height: 60px;
  line-height: 60px;
}
.span2{
  display: inline-block;
  height: 70px;
  line-height: 70px;
  word-break: break-all;
  width: 10%;
  text-align: center;
  vertical-align: middle;
}
.button-group{
  margin-top: 40px;
}
.add-pro{
  float: right;
}
.button-group{
  height: 36px;
}
.message-value{
  border: 1px solid #e8e8ec;
  width: 259px;
  height: 36px;
  padding-left: 5px;
  border-radius: 5px;
}
.page-num-ul a{
  display: inline-block;
}
.HBlevel{
  width: 320px;
  height: 250px;
  background: #fff;
  position: absolute;
  top:316px;
  right: 75px;
  z-index: 100;
}
.mengban{
  background: transparent;
}
</style>
<!--<script src='../assets/js/china.js'></script>-->
<script>
  import '../../assets/js/echarts.js'
  import '../../assets/js/china.js'
  import common from '../../common.js'
  export default{
    data(){
      return{
        childCon:'我是子页面',
        showMB:false,
        info:null,
        totalPages:'',    //总页数
        totalPage:[],    //页码数组
        resData:[],      //请求回的所有数据
        currentPage:'',  //当前页
        index:null
      }
    },
    props:['datas'],
    components:{'my-component':{
      template:'<div><table border="1px" width="280px" style="text-align:center;"><th>等级</th><th>中奖率（%）</th><th>最小金额</th><th>最大金额</th><tr><td>一</td><td v-if="info[index].oneRate!=null">{{info[index].oneRate}}</td><td v-else>0</td><td v-if="info[index].oneMinMoney!=null">{{info[index].oneMinMoney}}</td><td v-else>0</td><td v-if="info[index].oneMaxMoney!=null">{{info[index].oneMaxMoney}}</td><td v-else>0</td></tr><tr><td>二</td><td v-if="info[index].twoRate!=null">{{info[index].twoRate}}</td><td v-else>0</td><td v-if="info[index].twoMinMoney!=null">{{info[index].twoMinMoney}}</td><td v-else>0</td><td v-if="info[index].twoMaxMoney!=null">{{info[index].twoMaxMoney}}</td><td v-else>0</td></tr><tr><td>三</td><td v-if="info[index].threeRate!=null">{{info[index].threeRate}}</td><td v-else>0</td><td v-if="info[index].threeMinMoney!=null">{{info[index].threeMinMoney}}</td><td v-else>0</td><td v-if="info[index].threeMaxMoney!=null">{{info[index].threeMaxMoney}}</td><td v-else>0</td></tr><tr><td>四</td><td v-if="info[index].fourRate!=null">{{info[index].fourRate}}</td><td v-else>0</td><td v-if="info[index].fourMinMoney!=null">{{info[index].fourMinMoney}}</td><td v-else>0</td><td v-if="info[index].fourMaxMoney!=null">{{info[index].fourMaxMoney}}</td><td v-else>0</td></tr><tr><td>五</td><td v-if="info[index].fiveRate!=null">{{info[index].fiveRate}}</td><td v-else>0</td><td v-if="info[index].fiveMinMoney!=null">{{info[index].fiveMinMoney}}</td><td v-else>0</td><td v-if="info[index].fiveMinMoney!=null">{{info[index].fiveMinMoney}}</td><td v-else>0</td></tr></table></div>',
      props:['info','index'],
    }},
    methods:{
      //初始化
      init:function(currentPage){
        var self=this;
        var url='http://120.77.149.115/cloud_code/GET/redEnv/ruleInfo.do';
        var type='get';
        var data={
          vendorId:parseInt(self.datas.vendorId),
          currentPage:currentPage,
          pageSize:10
        };
        var success=function(res){
          console.log(res);
          self.info=res.result.data;
          self.resData=res;
          self.totalPages=res.totalPages;
          self.currentPage=res.currentPage;
          self.getPage();
        };
        common.Ajax(url,type,data,success)
      },

      //获取Y值
      getposition:function(){
        var self=this;
        var topPosition=parseInt($(event.pageY)[0])-30;
        $('.HBlevel').css('top',topPosition);
        self.showMB=true
        self.index=$(event.target).attr('data');
      },

      //影藏蒙版
      hide:function(){
        var self=this;
        if($(event.target)[0].className!='HBlevel'){
          self.showMB=false;
        }
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
    created:function(){
      this.init();
    }
  }
</script>
