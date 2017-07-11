<template>
  <div>
    <div class="mengban" v-if='showMB'>
      <div class="proclassify">
        <p class="mbtitle" v-if='zengjia'>添加分组</p>
        <p class="mbtitle" v-if='xiugai'>修改分组</p>

        <div class="addmessage">
          <span class="message-name star">分组名称：</span>
          <input class="message-value" type="text" name="" v-model='name'>
          <span class="message-after">限8个字符</span>
        </div>
        <input class="delbutton" type="button" name="" value="确认" @click='addclassify'>
        <input class="delbutton" type="button" name="" value="取消" @click='hide'>
      </div>
    </div>
          <div class="right-main">
            <div class="right-main-bottom">
              <div class="button-group">
                <a href="javascript:void(0)"><div class="add-pro" @click='mengban'>
                  +&nbsp;添加分组
                </div></a>
              </div>
              <div class="my-form">
                <ul class="pro-list">
                  <li class="pro-li">
                    <span class="pro-li-span">分组名称</span>
                    <span class="pro-li-span">分组数量</span>
                    <span class="pro-li-span">操作</span>
                  </li>
                  <li class="pro-li" v-for="item in resData">
                    <span class="pro-li-span">{{item.name}}</span>
                    <span class="pro-li-span">{{item.productNum}}</span>
                    <span class="pro-li-span">
                      <router-link to='#'>
                        <span class="bianji" v-bind:data-id='item.id' v-bind:data-name='item.name' @click='mengban'></span>
                      </router-link>
                      <a href="javascript:void(0)">
                        <span class="shanchu" v-bind:data-id='item.id' @click='delclassify'></span>
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  </div>
</template>
<style scoped>
/*@import "../assets/css/common.css";*/
.top-title{
  width: 95%;
  margin: auto;
  height: 36px;
  text-align: left;
  margin-top: 40px;
}
.button-group{
  padding-top: 60px;
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
.right-main-top-icon1{
  width: 18px;
  height: 18px;
  background: url("../assets/img/icon_tishi.png") no-repeat;
  float: left;
  margin-right: 8px;
}
.right-main-bottom{
  width: 95%;
  margin:auto;
  text-align: left;
}
.pro-li-span{
  width: 32%;
}


.pro-li:nth-of-type(1) .pro-li-span:nth-of-type(5):after{
  content: "";
  display: inline-block;
  width: 5px;
  height: 5px;
  background-color: #000;
}

</style>
<script>
import common from '../common.js'
  export default{
    data(){
      return{
        childCon:'我是子页面',
        resData:[],
        showMB:false,
        name:'',
        zengjia:'',
        xiugai:'',
        id:''
      }
    },
    props:['vendorId'],
    methods:{
      //数据请求
      getData:function(){
        var self=this;
        $.ajax({
          type:'get',
          url:'http://120.77.149.115/cloud_code/GET/product/presentGroup.do',
          dataType:'json',
          data:{
            vendorId:self.vendorId
          },
          success:function(res){
            self.resData=res.data;
            console.log(self.resData);
            self.showMB=false;
            self.id='';
          },
          error:function(){
            console.log('error')
          }
        })
      },

      //显示蒙版
      mengban:function(){
        var self=this;
        self.showMB=true;
        if($(event.target).hasClass('add-pro')){
          self.zengjia=true;
          self.xiugai=false;
          self.name='';
        }else{
          self.id=$(event.target).attr('data-id')
          self.zengjia=false;
          self.xiugai=true;
          self.name=$(event.target).attr('data-name');
        }
      },
      //隐藏蒙版
      hide:function(){
        this.showMB=false;
      },

      //增加分组
      addclassify:function(){
        var self=this;
        if(self.zengjia){
          var url='http://120.77.149.115/cloud_code/ADD/product/presentGroup.do';
          var data={
              vendorId:self.vendorId,
              name:self.name
            };
        }else{
          var url='http://120.77.149.115/cloud_code/UPDATE/product/presentGroup.do';
          var data={
              id:self.id,
              name:self.name
            };
        }
        var type='post';
        var success=function(res){
          console.log(res)
          self.getData()
        };
        common.Ajax(url,type,data,success)
      },

      //删除分组
      delclassify:function(){
        var self=this;
        self.id=$(event.target).attr('data-id');
        var url='http://120.77.149.115/cloud_code/DELETE/product/presentGroup.do';
        var type='post';
        var data={
          id:self.id
        };
        var success=function(res){
          console.log(res);
          self.getData();
        };
        common.Ajax(url,type,data,success);
      }
    },
    created:function(){
      this.getData()
    }
  }
</script>
