<template>
  <div>
          <div class='top-title'>
            <router-link to="/enterprise/trade" class='title-one'>我的账户</router-link>
            <router-link to="/enterprise/passward" class='title-two'>支付密码</router-link>
            <router-link to="/enterprise/account" class='title-two'>充值</router-link>
          </div>
          <div class='right-top'>
            <span class='mysum-one'>我的余额</span><span class='mysum-two'>￥{{balance}}</span><span class='mysum-three'><span class="rechange">立即充值</span></span>
          </div>

          <div class='right-main'>
            <div class='transaction'><span>交易记录</span></div>
            <div class='message'>
              <span class='message-one selected-message'>最近交易记录</span><span class='message-two'>充值记录</span><span class='message-three'>支出记录</span><span class='message-four'>全部收支明细</span>
            </div>
            <div class='record'>
              <div class="record-none">
                <span class='div_one'></span><span class='div_two'>暂无交易记录</span>
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
.right-top,
.right-main,
.right-bottom{
  width: 95%;
  background: #fff;
  border-radius: 8px;
  margin: auto;
  margin-top: 44px;
  border-bottom: 1px solid transparent;
  text-align: left;
}
.mysum-one,
.mysum-two,
.mysum-three{
  height: 110px;
  line-height: 110px;
  display: inline-block;
  font-family: 'Microsoft YaHei';
  vertical-align: middle;

}
.mysum-one{
  font-size: 18px;
  padding-left: 60px;
}
.mysum-two{
  font-size: 29px;
  color: #ff9937;
  padding-left: 120px;
}
.mysum-three{
  font-size: 18px;
  float: right;
  padding-right: 60px;
  
}
.rechange{
  display: inline-block;
  text-decoration: none;
  background: #43c343;
  color: #fff;
  padding: 0 20px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 20px;
}
.transaction{
  padding-left: 60px;
  padding-top: 60px;
  font-size: 18px;
}
.message{
  padding-left: 60px;
  padding-top: 40px;
}
.message-one,
.message-two,
.message-three,
.message-four{
  display: inline-block;
  margin-right: 35px;
}
.selected-message{
  border-bottom: 2px solid #00baff;

}
.message-four{
  float: right;
  margin-right: 60px;
}
.record{
  height: 500px;
  margin-left: 60px;
}
.record-none{
  text-align: center;
  width: 100%;
  height: 500px;
  line-height: 500px;
  color: #b7b7b9;
}
</style>
<script>
import common from '../common.js'
  export default{
    data(){
      return{
        balance:null
      }
    },
    props:['vendorId'],
    methods:{
      init:function(){
        var self=this;
        var url='http://120.77.149.115/cloud_code/GET/vendor/balance.do';
        var type='get';
        var data={
          vendorId:parseInt(self.vendorId)
        };
        var success=function(res){
          self.balance=res.balance;
        }
        common.Ajax(url,type,data,success);
      }
    },
    created:function(){
      this.init();
    }
  }
</script>
