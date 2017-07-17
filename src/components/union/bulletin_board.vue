<template>
  <div>
    <div class='right-main'>
      <div class="right-main-top">
        <p class="right-main-top1">
          <span class="right-main-top-icon1"></span>
          新建的优惠券用于在合作企业的平台上投放
        </p>
      </div>
      <div class="right-main-bottom">
        <div class="button-group">
          <router-link to='#'>
            <div class="add-pro">
            +&nbsp;新建公告
            </div>
          </router-link>
          <input type="button" name="" class="search-button" value="搜索">
          <input type="search" name="" class="search" placeholder="输入关键字">
        </div>
      </div>
      
      <ul class="message">
        <li class="mesage-cell">
          <span class="check-box checkshu" @click='selectThis'></span>
          <span class="notread"></span>
          <span class="text">群发消息使用教程</span>
          <span class="time">2017-4-10 15:29:29</span>
        </li>
        <li class="mesage-cell">
          <span class="check-box checkshu" @click='selectThis'></span>
          <span class="readed"></span>
          <span class="text">群发消息使用教程</span>
          <span class="time">2017-4-10 15:29:29</span>
        </li>
      </ul>
      <div class="page-button">
        <div class="page-button-checkbox">
          <span class="pro-li-span">
            <span class="allselect" v-bind:class='{"check-box":chechednum<2,"has-select":chechednum==2}' @click='selectAll'></span>
            &nbsp;&nbsp;&nbsp;全选
          </span>
          <input type="button" name="" value="删除" class="delbutton">
          <span class="delw">删除后数据不可恢复，请谨慎操作。</span>
        </div>
        <div class="page-num">
          <ul class="page-num-ul">
            <li class="page-num-li-arrow page-num-li"><span class="arrow-left"></span></li>
            <li class="page-num-li">1</li>
            <li class="page-num-li">2</li>
            <li class="page-num-li">3</li>
            <li class="page-num-li">4</li>
            <li class="page-num-li page-num-li-arrow"><span class="arrow-right"></span></li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  /*@import "../../assets/css/common.css";*/
.button-group{
  text-align: left;
  padding: 0 30px;
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
  border-top: 1px solid transparent;
}
.right-main-top-icon1{
  width: 18px;
  height: 18px;
  background: url("../../assets/img/icon_tishi.png") no-repeat;
  float: left;
  margin-right: 8px;
}
.right-main-top{
  width: 90%;
  margin: auto;
  padding-top: 60px;
  text-align: left;
}
.right-main-bottom{
  width: 95%;
  margin:auto;
  text-align: left;
}
.title{
  text-align: left;
  margin: 60px 0 0 60px;
  font-size: 18px;
  font-family: 'Microsoft YaHei';
}
.message{
  text-align: left;
  padding-left: 45px;
  padding-right: 45px;
  margin-top: 24px;
}
.mesage-cell span{
  vertical-align: middle;
  font-family: 'Microsoft YaHei';
}
.time{
  float: right;
  color: #c6c9cc;
}
.mesage-cell{
  padding: 0 15px 0 15px;
  border-radius: 3px;
}
.mesage-cell:hover{
  background-color: #eefaff;
}
.page-button{
  width: 100%;
  height: 400px;
  padding-left: 60px;
}
.number{
  color: #ff4646;
}
.delw{
  color: #b7b7b9;
  margin-left: 30px;
}
.pro-li-span{
  width: auto;
  margin-right: 10px;
}
</style>
<script>
  export default{
    data(){
      return{
        chechednum:0
      }
    },
    methods:{
      showList:function(event){
        // console.log();
        $(event.target).parents("li").find("ul").toggleClass("hidelist");
        $(event.target).parents("li").siblings().find("ul").addClass("hidelist")
      },
      selectThis:function(event){
        var checkBox=$(event.target);
        var length=$('.checkshu').length;
        checkBox.hasClass('check-box')?
        checkBox.removeClass('check-box').addClass('has-select')&&
        this.chechednum++:
        checkBox.addClass('check-box').removeClass('has-select')&&
        this.chechednum--;
      },
      selectAll:function(event){ 
        var checkall=$(event.target);
        var length=$('.checkshu').length;
        if(checkall.hasClass('check-box')){
          checkall.removeClass('check-box').addClass('has-select');
          $('.checkshu').removeClass('check-box').addClass('has-select');
          this.chechednum=length;
        }else{
          checkall.addClass('check-box').removeClass('has-select');
          $('.checkshu').addClass('check-box').removeClass('has-select');
          this.chechednum=0;
        }
      }
    }
  }
</script>
