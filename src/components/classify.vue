<template>
  <div>
    <div class="mengban" v-show='showWarn'>
        <div class="warn">
          <div class="classifyHeader">
            <span style="display:block;height:48px;line-height:48px;">操作提示</span>
          </div>
          <div class="warnmain">
            {{warnText}}
          </div>
          <div class="warnbottom">
            <input type="button" name="" value="确定" @click='showWarn=false'>
          </div>
        </div>
      </div>
    <div class="mengban" v-show='showMB'>
      <div class="proclassify" v-if='type==1'>
        <p class="mbtitle">新增一级分类</p>
        <div class="addmessage">
          <span class="message-name star">名称分类：</span>
          <input class="message-value" type="text" name="" v-model='name'>
          <span class="message-after">限8个字符</span>
        </div>
        <div style="margin-top: 80px;">
          <input class="delbutton" type="button" name="" value="确认" @click='addclassify'>
          <input class="delbutton" type="button" name="" value="取消" @click='hide'>
        </div>
        
      </div>

      <div class="proclassify"  v-if='type==2'>
        <p class="mbtitle">新增二级分类</p>
        <div class="addmessage">
          <span class="message-name star">名称分类：</span>
          <input class="message-value" type="text" name="" v-model='name'>
          <span class="message-after">限8个字符</span>
        </div>
        <div style="margin-top: 50px;">
          <input class="delbutton" type="button" name="" value="确认" @click='addclassify'>
          <input class="delbutton" type="button" name="" value="取消" @click='hide'>
        </div>
        
      </div>

      <div class="proclassify"  v-if='xiugai!=""'>
        <p class="mbtitle" v-if='xiugai==1'>修改一级分类</p>
        <p class="mbtitle" v-if='xiugai==2'>修改二级分类</p>
        <div class="addmessage">
          <span class="message-name star">名称分类：</span>
          <input class="message-value" type="text" name="" v-model='name'>
          <span class="message-after">限8个字符</span>
        </div>
        <input class="delbutton" type="button" name="" value="确认" @click='reviseclassify'>
        <input class="delbutton" type="button" name="" value="取消" @click='hide'>
      </div>
    </div>
            <div class="right-main">
            <div class='center2'>
              <a href="javascript:void(0)"><span class='span_first' @click.self='mengban' v-bind:data-id='1'>+&nbsp;新增一级分类</span></a>
            </div>
            <div class='order_center'>
              <ul class="order_center_ul">
                <li class="pro_info" v-for='group in resData'>
                <div class="bac_color" @click.self='showSec' v-bind:data-id='group.id'>
                  <span class="pro_info_arrow"></span>
                  <span class="pro_info_group">{{group.name}}</span>
                  <span class="pro_info_num">产品数：{{group.productNum}}</span>
                  <div class="pro_info_handle">
                    <a href="javascript:void(0)" @click='mengban'><span>新增二级分类</span></a>
                     -
                    <a href="javascript:void(0)"><span @click.self='mengban' class="yiji">修改</span></a>
                    -
                    <a href="javascript:void(0)"><span @click.self='delclassify' v-bind:data-id='group.id'>删除</span></a>
                  </div>
                </div>
                  
                  <ul class="sec_ul">
                      <li class="sec_pro_info" v-for='childrens in group.children' v-bind:data-id='childrens.id'>
                        <span class="pro_info_group">{{childrens.name}}</span>
                        <span class="pro_info_num">产品数：{{childrens.productNum}}</span>
                        <div class="pro_info_handle">
                          <a href="javascript:void(0)"><span @click='mengban'>修改</span></a>
                          -
                          <a href="javascript:void(0)"><span v-bind:data-id='childrens.id' @click='delclassify'>删除</span></a>
                        </div>
                      </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
  </div>
</template>
<style scoped>
/*@import "../assets/css/common.css";*/
  .img {
    display: inline-block;
    width: 30%;
    height: 20px;
    vertical-align: middle;
  }
  .img2 {
    background: url(../assets/img/icon_qiye_xinxi.png) no-repeat;
  }
  .img3 {
    background: url(../assets/img/icon_dingdan.png) no-repeat;
  }
  .goods_menu .two_sub2 {
    width: 100%;
  }
  .goods_menu .two_sub2 li {
    line-height: 100%;
    margin-top: 10px;
  }
  .goods_menu .sub3 {
    width: 100%;
  }
  .goods_menu .sub3 li {
    line-height: 100%;
    margin-top: 10px;
  }
  .goods_menu .goods_li_2 .goods_sub2 {
    width: 100%;
    display: none;
  }
  .goods_menu .goods_li_3 .goods_sub3 {
    width: 100%;
    display: none;
  }
  .rig_main{
    width: 95%;
    margin:40px auto;
    background-color: #fff;
    border-radius: 8px;
  }
  .gongz {
    width: 60%;
    margin:0 auto;
    margin-top: 40px;
    padding-top: 20px;
  }
  .center2 {
    width: 90%;
    height: 100px;
    margin:10px auto 30px;
  }
  .center2 .span_first {
    text-align: center;
    display: inline-block;
    width: 195px;
    height: 35px;
    background-color: #43C343;
    margin-left: 0;
    margin-top: 60px;
  }
  .center2 input {
    float: left;
    width: 200px;
    height: 35px;
    border:1px solid #EAEDF0;
    border-radius: 5px;
    padding-left: 10px;
    margin-left: 56%;
    margin-top: -6px;
  }
  .center2 span {
    display: inline-block;
    float: left;
    width: 70px;
    height: 35px;
    background-color: #00BAFF;
    color:#fff;
    margin-left: 30px;
    border-radius: 8px;
    line-height: 35px;
    font-size: 18px;
  }
  .order_center {
    width: 90%;
    min-height: 690px;
    margin: 0 auto;
  }
  .order_center ul {
    width: 100%;
  }
  .order_center li.li_one {
    width: 100%;
    height: 50px;
    background-color: #E7EBEE;
  }
  .order_center li.li_one span {
    display: inline-block;
    width: 12.5%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .order_center li.li_one span.span_bottom {
    display: inline-block;
    width: 12.5%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .order_center li.li_two span.span_bottom {
    display: inline-block;
    width: 12.5%;
    height: 80px;
    line-height: 60px;
    text-align: center;
    padding-top: 8px;
    overflow: hidden;
  }
  .order_center li.li_two span.span_bottom a {
    color:#000;
  }
  .gongz p {
    color:#6d7776;
  }
  a:hover {
    text-decoration: none;
  }
  p:hover {
    text-decoration: none;
  }
  .order_center_ul{
    width: 100%;
    padding-left: 0;
  }
  .pro_info_handle{
    display: inline-block;
  }
  .pro_info{
    width: 100%;
    /*background-color: #eefaff;*/
    /*border-radius: 8px;*/
    text-align: left;
    margin-bottom: 30px;
  }
  .bac_color{
    width: 100%;
    height: 50px;
    background-color: #eefaff;
    border-radius: 8px;

  }
  .pro_info > span{
    position: absolute;
    height: 50px;
    line-height: 50px;
  }
  .pro_info_arrow{
    
    
  }
  .pro_info_group{
    left: 20%;
    position: absolute;
    height: 50px;
    line-height: 50px;
  }
  .pro_info_num{
    left: 40%;
    position: absolute;
    height: 50px;
    line-height: 50px;
  }
  .pro_info_handle{
    position: absolute;
    right: 20%;
    position: absolute;
    height: 50px;
    line-height: 50px;
  }
  .pro_info_handle span{
    color: #7cb5ef;
  }
  .sec_ul{
    width: 100%;
  }
  .sec_pro_info{
    width: 100%;
    height: 50px;
    margin-top: 20px;
    border-radius: 8px;
    border:1px solid #b7b7b9;
  }
  .select{
    color:#00baff;
  }
  .page-num{
    height: 138px;
  }
  .addmessage{
    text-align: left;
    margin-top: 20px;
  }
  .message-name{
    display: inline-block;
    width: 80px;
    margin-left: 20px;
    text-align: right;
    color: #666;
    vertical-align: top;
  }
</style>
<script>
import common from '../common.js'
  export default{
    data(){
      return{
        childCon:'我是子页面',
        pro_num:12,
        totalPage:[],
        resData:[],
        showMB:false,
        name:'',
        num:'',
        type:'',
        pid:'',
        xiugai:'',
        id:'',
        savename:'',
        showWarn:false,
        warnText:''
      }
    },
    props:['vendorId'],
    methods:{

      //获取分组数据
      getData:function(){
        var self=this;
        var url='https://ym-a.top/cloud_code/GET/product/group.do';
        var type='get';
        var data={
          vendorId:self.vendorId
        };
        var success=function(res){
          //console.log(res)
          self.resData=res.result.data;
          self.totalPage=res.totalPages;
        };
        common.Ajax(url,type,data,success)
      },
      //获取页数
      getPage:function(){
        var self=this;
        for(var i=0;i<=self.totalPage;i++){
          totalPage.push(i);
        }
      },
      showList:function(event){
        // //console.log();
        $(event.target).parents("li").find("ul").toggleClass("hidelist");
        $(event.target).parents("li").siblings().find("ul").addClass("hidelist")
      },
      showSec:function(event){
        $(event.target).next().toggleClass("hidelist");

      },
      //显示蒙版
      mengban:function(){
        var self=this;
        self.showMB=true;
        if($(event.target).text()!='修改'){
          self.xiugai='';
          if($(event.target).attr('data-id')==1){
              self.pid='';
              self.type=1;
              self.name='';
              self.num='';
            }else{
              self.pid=$(event.target).parents('.bac_color').attr('data-id');
              self.type=2;
              self.name='';
              self.num='';
            }
        }else{
          self.type='';
          if($(event.target).hasClass('yiji')){
            self.id=$(event.target).parents('.bac_color').attr('data-id');
            self.name=$(event.target).parents('.bac_color').find('.pro_info_group').text();
            var savename=self.name
            self.savename=savename;
            self.num=$(event.target).parents('.bac_color').find('.pro_info_num').text().slice(4);
            self.xiugai=1;
          }else{
            self.id=$(event.target).parents('.sec_pro_info').attr('data-id');
            self.name=$(event.target).parents('.sec_pro_info').find('.pro_info_group').text();
            var savename=self.name
            self.savename=savename;
            self.num=$(event.target).parents('.sec_pro_info').find('.pro_info_num').text().slice(4);
            self.xiugai=2;
          }
        }
      },

      //隐藏蒙版
      hide:function(){
        this.showMB=false;
      },
      //增加分组
      addclassify:function(){
        var self=this;
        var url='https://ym-a.top/cloud_code/ADD/product/group.do';
        var type='post';
        var data={
          vendorId:self.vendorId,
          name:self.name,
          type:self.type,
          num:self.num,
          pid:self.pid
        };
        var success=function(res){
          
          if(res.statuscode===1){
            self.getData();
            self.showMB=false;
          }else{
            self.showWarn=true;
            self.warnText=res.msg;
            self.showMB=false;

          }
          
        };
        common.Ajax(url,type,data,success)
      },

      //删除分组
      delclassify:function(){
        var self=this;
        var id=$(event.target).attr('data-id');
        var url='https://ym-a.top/cloud_code/DELETE/product/group.do';
        var type='post';
        var data={
          id:id
        };
        var success=function(res){
          //console.log(res);
          self.getData();
        };
        common.Ajax(url,type,data,success)

      },

      //修改分组
      reviseclassify:function(){

        var self=this;
        //console.log(self.name);
        var url='https://ym-a.top/cloud_code/UPDATE/product/group.do';
        var type='post';
        if(self.savename!=self.name){
          var data={
            id:self.id,
            vendorId:self.vendorId,
            name:self.name,
            num:self.num
          }
        }else{
          var data={
            id:self.id,
            vendorId:self.vendorId,
            num:self.num
          }
        }
        
        var success=function(res){
          //console.log(res)
          self.getData();
          self.showMB=false
        }
        common.Ajax(url,type,data,success)
      }
    },
    created:function(){
      this.getData();
    }
  }
</script>
