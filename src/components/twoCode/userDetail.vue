<template>
  <div>
    <form class="message" id="formTol" enctype="multipart/form-data">
      <div class="title">
        <span style="font-size: 18px;">基本信息：</span>
        <router-link to='/twoCode/userInfomation' style='float: right;'>返回</router-link>
      </div>
      <div class='message-box'>
        <span class='textname'>微信昵称</span>
        <span class="textvalue">{{nickName}}</span>
      </div>
      <div class='message-box'>
        <span class='textname'>微信头像</span>
        <img class="textvalueimg" :src="img">
      </div>
      <div class='message-box'>
        <span class='textname'>已累计积分</span>
        <span class="textvalue">{{integral}}</span>
      </div>
      <div class='message-box'>
        <span class='textname'>姓名</span>
        <span class="textvalue">{{playerName}}</span>
      </div>
      <div class='message-box'>
        <span class='textname'>所在地区</span>
        <span class="textvalue">{{address}}</span>
      </div>
      <div class='message-box'>
        <span class='textname'>关注时间</span>
        <span class="textvalue">{{createTime}}</span>
      </div>
      <div class='message-box'>
        <span class='textname'>联系方式</span>
        <span class="textvalue">{{recipientPhone}}</span>
      </div>
      <div class='message-box'>
        <span class='textname'>Open ID</span>
        <span class="textvalue">{{openId}}</span>
      </div>
    </form>

  </div>
</template>
<style scoped>
label{
  margin-bottom: 0;
}
.localUp{
  height: 450px;
  padding: 50px 0;

}
.message-name{
  display: inline-block;
  width: 120px;
  margin-left: 115px;
  text-align: right;
  color: #666;
  vertical-align: top;
}
.delbutton{
  margin-top: 13px;
}
.imgbox{
  left: 50%;
  margin-left: -342.5px;
  top: 50%;
  margin-top: -327.5px;
  height: 655px;
  border-radius: 2px;
  background: #fff;
  width: 685px;
  position: absolute;
}
.xing{
  color: #ff4646;
}
.message{
  width: 95%;
  background: #fff;
  border-radius: 8px;
  margin: auto;
  margin-top: 44px;
  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;
  text-align: left;
}
.message-box{
  min-height: 38px;
  font-family: 'Microsoft YaHei';
  margin-top: 40px;
}
.textname{
  text-align: right;
  display: inline-block;
  width:120px;
  margin-left: 60px;
  font-family: 'Microsoft YaHei';
  vertical-align: middle;
  font-size: 16px;
}
.textvalue{
  display: inline-block;
  height: 36px;
  margin-left: 60px;
  padding-left: 10px;
  font-size: 16px;
}
input,
select{
  border-radius: 3px;
  border: 1px solid #e7e7eb;
  font-family: 'Microsoft YaHei';
  outline: none;
}
#textarea{
  margin-left: 194px;
  border-radius: 3px;
  border: 1px solid #e7e7eb;
  width: 319px;
  height: 90px;
  resize: none;
  margin-top: 16px;
  outline: none;
}
#submit{
  width: 120px;
  height: 36px;
  background-color: #00baff;
  color: #fff;
  border-radius: 8px;
  margin-left: 194px;
  margin-bottom: 83px;
}
#submit1{
  width: 120px;
  height: 36px;
  background-color: #00baff;
  color: #fff;
  border-radius: 8px;
  margin-left: 194px;
  margin-bottom: 83px;
}
.photoafter{
  display: inline-block;
  line-height: 35px;
  vertical-align: middle;
  margin-left: 20px;
}
.photoafter p{
  margin: 0;
}
.updatetwo{
  color: #67a9ec;
}
.pic{
  color: #b3b3b3;
}
.photo1{
  display: inline-block;
  margin-left: 10px;
  width: 75px;
  height: 75px;
  vertical-align: middle;
  background-size: contain;
  background-repeat: no-repeat;
}
.hid{
  display: none;
}
.inputwarn{
  color: red;
  margin-left: 200px;
}
.title{
  padding: 40px;
  margin-left: 40px;
}
.textvalueimg{
  margin-left: 60px;
  padding-left: 10px;
}
</style>
<script>
import common from '../../common.js'
import {mapState} from 'vuex'
export default{
  data(){
    return{
        nickName:null,
        img:null,
        integral:null,
        playerName:null,
        address:null,
        createTime:null,
        recipientPhone:null,
        openId:null
      }
    },
    props:['datas'],
    computed:{
      ...mapState({
        playerId:state=>state.userDetail.playerId
      })
    },
    methods:{
      init(){
        var self=this;
        var url='https://project.ym-b.top/cloud_code/GET/vendorIntegral/findPlayerByPlayerId.do';
        var type='get';
        var data={
          vendorId:self.datas.vendorId,
          playerId:self.playerId
        };
        var success=function(res){
          console.log(res)
          self.nickName=res.nickName;
          self.img=res.headImgurl;
          self.integral=res.integral;
          self.playerName=res.playerName;
          self.address=res.address;
          self.createTime=res.createTime;
          self.recipientPhone=res.recipientPhone;
          self.openId=res.openId;
        };
        common.Ajax(url,type,data,success)
      },
      //同步显示图片
      change:function(eImg){
        const reader = new FileReader();
        reader.onloadend = (e) =>
        {
          this.imgUrl = `url('${e.target.result}')`;
        }
        ;
        reader.readAsDataURL(eImg.target.files[0]);
      },
      showList:function(event){
        // //console.log();
        $(event.target).parents("li").find("ul").toggleClass("hidelist");
        $(event.target).parents("li").siblings().find("ul").addClass("hidelist")
      },
    },
    created:function(){
      this.init();
    }
  }
  </script>
