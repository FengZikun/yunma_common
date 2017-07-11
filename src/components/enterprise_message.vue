<template>
  <div>
          <form class="message" id="formTol" enctype="multipart/form-data">
            <div class='message-box'>
              <span class='textname'>账号：</span>
              <input type="text" style="display:none;" name="vendorName" model='vendorName'>
              <span>&nbsp;&nbsp;{{vendorName}}</span>
            </div>
            <div class='message-box'>
              
              <span class='textname'><span class='xing'>*</span>品牌商名称：</span>
              <input class='textvalue' type="text" v-model="brandName" name="brandName">
            </div>
            <div class='message-box'>
              <span class='textname' >上传头像：</span>
              <span class='photo' v-bind:style="{backgroundImage: imgUrl}"></span>
              <div class="photoafter">
                <p class="updatetwo"><a href="javascript:void(0)" style="text-decoration: none" @click="mengban">上传头像</a></p>
                <p class="pic">图片格式必须为：jpeg,jpg,gif;不可大于2M。</p>
              </div>
            </div>
            <div class='message-box'>
              <span class='textname'>所属行业：</span>
              <select class='textvalue' name="industryName" id="select" style='width:150px;padding-left: 10px;' v-model="industryName">
                  <option value="0">请选择</option>
                  <option value="1">服装制造</option>
                  <option value="2">包装印刷</option>
                  <option value="3">家用电器</option>
                  <option value="4">白酒板块</option>
                  <option value="5">食品加工</option>
                  <option value="6">零售连锁</option>
                </select>
            </div>
            <div class='message-box'>
              <span class='textname'><span class='xing'>*</span>联系人：</span>
              <input class='textvalue' type="text" v-model="contactName" name="contactName">
            </div>
            <div class='message-box'>
              <span class='textname'><span class='xing'>*</span>手机号码：</span>
              <input class='textvalue' type="text" v-model="customPhone" name="customPhone">
            </div>
            <div class='message-box'>
              <span class='textname'>微信绑定：</span>
              <input class='textvalue' type="text" v-model="vendorWeixin" name="vendorWeixin">
            </div>
            <div class='message-box'>
              <span class='textname'>客服电话：</span>
              <input class='textvalue' type="text" v-model="customTel" name="customTel">
            </div>
            <div class='message-box'>
              <span class='textname'>联系地址：</span>
              <select class='textvalue' name="vendorAddress" id="select2" style='width:97px;padding-left: 10px;' v-model="vendorAddress">
                  <option value="0">请选择</option>
                  <option value="1">广东省</option>
                  <option value="2">河北省</option>
                  <option value="3">山东省</option>
                  <option value="4">辽宁省</option>
                  <option value="5">吉林省</option>
                  <option value="6">甘肃省</option>
                  <option value="7">河南省</option>
                  <option value="8">江苏省</option>
                  <option value="9">湖南省</option>
                  <option value="10">浙江省</option>
                  <option value="11">山西省</option>
                  <option value="12">四川省</option>
                  <option value="13">贵州省</option>
                  <option value="14">福建省</option>
                  <option value="15">黑龙江省</option>
              </select>
              <select class='textvalue' name="" id="select3" style='width:97px;padding-left: 10px;' v-model="vendorAddress">
                  <option value="0">请选择</option>
                  <option value="1">广州市</option>
                  <option value="2">深圳市</option>
                  <option value="3">珠海市</option>
                  <option value="4">汕头市</option>
                  <option value="5">佛山市</option>
                  <option value="6">韶关市</option>
                  <option value="7">湛江市</option>
                  <option value="8">肇庆市</option>
                  <option value="9">江门市</option>
                  <option value="10">茂名市</option>
                  <option value="11">惠州市</option>
                  <option value="12">汕尾市</option>
                  <option value="13">东莞市</option>
                  <option value="14">中山市</option>
                  <option value="15">潮州市</option>
              </select>
              <select class='textvalue' name="" id="select4" style='width:97px;padding-left: 10px;' v-model="vendorAddress">
                  <option value="0">请选择</option>
                  <option value="1">罗湖区</option>
                  <option value="2">福田区</option>
                  <option value="3">南山区</option>
                  <option value="4">盐田区</option>
                  <option value="5">宝安区</option>
                  <option value="6">龙岗区</option>
              </select><br>
              <textarea name="" id="textarea" cols="30" rows="5" placeholder='详细地址' v-model="vendorAddress"></textarea>
              <div class='message-box'>
                <span class='textname'>官网地址：</span>
                <input class='textvalue' style='width:150px;padding-left: 10px;' type="text" v-model="link" name="link"> 
              </div>
              <div class='message-box'>
                <span class='textname'>关联公众号：</span>
                <input class='textvalue' style='width:150px;padding-left: 10px;' type="text" v-model="officialAccounts" name="officialAccounts"> 
              </div>
              <div class='message-box'>
                <input id='submit' type="button" value='保存' @click="complete" class="hid">
                <input id='submit1' type="button" value='更新' @click="complete1" class="hid">
              </div>
            </div>
        <div class="mengban" v-show='showMB'>
          <div class="imgbox">
            <div class="localUp">
            <div enctype="multipart/form-data">
              <span class="message-name star">上传头像：</span>
              <span style="display:inline-block;width:86px;height:86px;background-repeat:no-repeat;background-size: contain" v-if='imgUrl!=""'  v-bind:style="{backgroundImage: imgUrl}"></span>
              <input class="hidelist" type="file" id="productImg" name="imgUrl" @change='change($event)'>
              <input type="text" name="imgUrl" class="hidelist" value="1231564">
              <label class="productImg" for="productImg"></label>
              <input class="hidelist" type="text" name="vendorId" v-bind:value='vendorId'>
            </div>
            <div class="imgbottom">
              <input class="delbutton" type="button" name="" value="确定" @click='mengban'>
            </div>
          </div>
          </div>
          </div>
          </form>

  </div>
</template>
<style scoped>
/*@import "../assets/css/common.css";*/
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
    margin: auto;
    top: 50%;
    margin-top: -327.5px;
    height: 655px;
    border-radius: 2px;
    background: #fff;
    width: 685px;
    position: relative;
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
    margin-left: 10px;
    border: 1px solid #e7e7eb;
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
</style>
<script>
  import common from '../common.js'

  export default{
    data(){
      return{
        childCon:'我是子页面',
        vendorName: '', //账号
        brandName:'',//品牌商名称
        imgUrl:'',//头像地址
        industryName: '0' ,//所属行业
        contactName:'',   //联系人 
        customPhone:'',    //手机号码
        vendorWeixin:'',   //微信绑定
        customTel:'',   //客服电话
        vendorAddress:'',  //联系地址
        link:'',     //官网地址
        officialAccounts:'',//关联公众号
        showMB:false,
      }
    },
    props:['vendorId'],
    methods:{
      init:function(currentPage){
        var self=this;
        var url='http://120.77.149.115/cloud_code/GET/vendor/basicInfo.do';
        var type='get';
        var data={
                  vendorId:self.vendorId,
                };
        var success=function(res){
          if(res.statuscode=='1'){
            res=res.data;
            self.vendorName=res.vendorName;
            self.brandName=res.brandName;
            self.imgUrl=`url(http://project.ym-b.top${res.imgUrl})`;
            self.industryName=res.industryName;
            self.contactName=res.contactName;
            self.customPhone=res.customPhone;
            self.vendorWeixin=res.vendorWeixin;
            self.customTel=res.customTel;
            self.vendorAddress=res.vendorAddress;
            self.link=res.link;
            self.officialAccounts=res.officialAccounts;
            $('#submit1').show()
          }
          else{
            $('#submit').show()
          }
        }
        //调用ajax
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
        // console.log();
        $(event.target).parents("li").find("ul").toggleClass("hidelist");
        $(event.target).parents("li").siblings().find("ul").addClass("hidelist")
      },
      // 模态框显示与隐藏
      mengban:function(){
        this.showMB=!this.showMB;
      },
      // 提交数据
      complete:function(){
        var self=this;
        var data=new FormData($('#formTol')[0]);
        $.ajax({
          url: 'http://project.ym-b.top/cloud_code/ADD/vendor/basicInfo.do',
          type:'post',
          data: data,
          cache: false,
          dataType: 'json',
          processData: false,
          contentType: false,
          success: function (res) {
            if(res.statuscode==1){
              alert("保存成功")
            }
          },
          error:function(res){
            alert("error")
          }
        });
      },
      // 更新数据
      complete1:function(){
        var self=this;
        var data=new FormData($('#formTol')[0]);
        $.ajax({
          url: 'http://project.ym-b.top/cloud_code/UPDATE/vendor/basicInfo.do',
          type:'post',
          data: data,
          cache: false,
          dataType: 'json',
          processData: false,
          contentType: false,
          success: function (res) {
            if(res.statuscode==1){
              alert("保存成功")
            }
          },
          error:function(res){
            alert("error")
          }
        });
      },
    },
    created:function(){
      this.init();
    }
  }
</script>
