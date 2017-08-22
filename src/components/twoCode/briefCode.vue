<template>
  <div class="right-main">
  <div class="right-main-top">
    <router-link  to='/twoCode/setupPage' class="title-one" ><span @click='refresh'>新建扫描页面</span></router-link>
      <div class="my-form">
        <ul class="brief-list">
          <li class="pro-li">
            <span class="pro-li-span">编号</span>
            <span class="pro-li-span">模板名称</span>
            <span class="pro-li-span">更新时间</span>
            <span class="pro-li-span">状态</span>
            <span class="pro-li-span">备注</span>
            <span class="pro-li-span">操作</span>
          </li>
          <li class="pro-li" v-for="data in data1">
            <span class="pro-li-span">{{data.actionId}}</span>
            <span class="pro-li-span">{{data.htmlName}}</span>
            <span class="pro-li-span">{{data.createTime}}</span>
            <span class="pro-li-span" v-if='data.status==0'>未使用</span>
            <span class="pro-li-span" v-if='data.status==1' style="color:#cbcbcc">被使用</span>
            <span class="pro-li-span">{{data.comment}}</span>
            <span class="pro-li-span" >
            <span title="预览" class="chakan" v-bind:data="data.urlName" @click="showKuang($event)"></span>
            <!-- <img src="../../assets/img/icon_yulan.png" id="scan" class="yulan1"> -->
            </span>
          </li>
        </ul>
      </div>
  <div class="mengban modHid">
      <div class="modelContent">
        <div class="phoneHeader"></div>
        <div class="phoneTitle"></div>
        <img src="../../assets/img/icon_cha3.png" class="cha3" @click="hideKuang">
        <iframe v-bind:src="frameSrc" width="349px" height="663px"></iframe>
        
      </div>
    </div>
  </div>
    

  </div>
</template>
<style type="text/css" scoped>
.cha3{
  position: absolute;
  top: 2px;
  right: -93px;
}
.right-main-top{
  width: 95%;
  margin: auto;
  padding-top: 60px;
  text-align: left;
}
  .img-ex {
    display: block;
    width: 95%; 
    margin: 0 auto;
  }
  .pro-li-span{
    width: 15.6%;
    line-height: 36px;
    vertical-align: middle;
    /* height: 72px */
  }
  .modelContent{
     position: absolute;
    left: 33%;
    top: 13%;
    width: 384px;
    min-height: 708px;
    background: #fff;
    z-index: 2001;
    font-size: 16px;
    padding: 0 14px;
    border: 1px solid #ededed;
    border-radius: 15px;
  }
  .modelS{
    position: absolute;
    left: 23%;
    top: 8%;
    width: 890px;
    min-height: 800px;
    background: #fff;
    z-index: 2001;
    padding: 15px 30px;
    font-size: 16px;
    border-radius: 10px;

  }
  .modHid {
    display: none;
  }
  .yulan1{
    position: relative;
    top: -1px;
  }
  .yulan2{
    background-image: url('../../assets/img/icon_yulan2.png');
    background-repeat: no-repeat;
    background-position: center center;
  }
  #scan:hover{
    opacity: 0;
  }
  .phoneHeader {
    height: 75px;
    width: 349px;
    background: url(../../assets/img/phoneHeader.png) no-repeat center center;
  }

  .phoneTitle {
    height: 55px;
    width: 349px;
    border: 1px solid transparent;
    padding-top: 1px;
    background-image: url(../../assets/img/phoneTitle.png);
    background-size: cover;
    position: relative;
  }
    .phoneModule {
    padding: 0 14px;
    margin-left: 35px;
    border: 1px solid #ededed;
    border-radius: 15px;
  }
  /* 外层 */
  .tipOut {
    width: 420px;
    min-height: 65px;
    border-radius: 5px;
    margin-left: 30px;
    background-color: #f6f8fc;
    position: absolute;
    left: 390px;
    top: 300px;
    padding: 15px 25px;
    text-align: left
  }

  /*内层*/
  .tipArrow {
    width: 0px;
    height: 0px;
    border-top: 10px solid transparent;
    border-right: 10px solid;
    border-bottom: 10px solid transparent;
    position: absolute;
    margin-left: -35px;
    border-right-color: #f6f8fc;
  }
    .infoIcon {
    display: inline-block;
    height: 21px;
    width: 21px;
    background-image: url('../../assets/img/info.png');
    background-repeat: no-repeat;
    position: relative;
    top: 5px;
  }

  .editHui {
    display: inline-block;
    height: 21px;
    width: 21px;
    background-image: url('../../assets/img/editHui.png');
    background-repeat: no-repeat;
    position: relative;
    top: 7px;
    margin-left: 8px;
    margin-right: 1px;
  }

  .editIcon {
    display: inline-block;
    height: 21px;
    width: 21px;
    background-image: url('../../assets/img/edit.png');
    background-repeat: no-repeat;
    position: relative;
    top: 7px;
    margin-left: 8px;
  }

  .editIcon:hover {
    background-image: url('../../assets/img/editHui.png')
  }

  .editErea {
    display: inline-block;
    width: 130px;
    text-align: right;
    margin-right: 5px;
  }
  .brief-list{
    width: 100%;
    height: 778px;
    overflow-y: scroll;
    padding: 0;
    border: 1px solid #e7ebee;
    border-radius: 10px;
  }
</style>
<script>
  export default{
    data(){
      return {
        childCon: '我是子页面',
        data1:'',
        frameSrc:''
      }
    },
    props:['datas'],
    methods:{
      init:function(){
        var self=this;
        var data={vendorId:self.datas.vendorId};
        $.ajax({
          url: 'https://ym-a.top/cloud_code/GET/codeManager/getScaPageModel.do',
          type:'get',
          data: data,
          dataType: 'json',
          success: function (res) {
            //console.log(data);
            //console.log(res)
            self.data1=res.data;
          },
          error:function(res){
            //console.log("error")
          }
        })
      },
      refresh(){
        this.$emit('sub', "refresh",'1');
      },
      hideKuang(event){
        $(event.target).parent().parent().addClass('modHid');
      },
      showKuang(event){
        this.frameSrc='https://ym-a.top/wx/'+$(event.target).attr('data');
        $('.mengban').removeClass('modHid');
      }
    },
    watch:{
      data1(){
        //console.log(this.data1)
      },
      frameSrc(){
        //console.log(this.frameSrc)
      }
    },
    created:function(){
      this.init()
    }
  }
</script>
