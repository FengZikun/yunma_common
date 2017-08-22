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
    <form class="message" id="formTol" enctype="multipart/form-data">
      <div class='message-box'>
        <span class='textname'>账号：</span>
        <!-- <input type="text" style="display:none;" name="userName" model='userName'> -->
        <span>&nbsp;&nbsp;{{userName}}</span>
      </div>
      <div class='message-box'>

        <span class='textname'><span class='xing'>*</span>品牌商名称：</span>
        <span>{{vendorName}}</span>
        <!-- <input class='textvalue' type="text" v-model="vendorName" name="vendorName"> -->
      </div>
      <div class='message-box'>
        <span class='textname' >上传Logo：</span>
        <span class='photo' v-bind:style="{backgroundImage: imgUrl}"></span>
        <div class="photoafter">
          <p class="updatetwo"><a href="javascript:void(0)" style="text-decoration: none" @click="mengban">上传Logo</a></p>
          <p class="pic">图片格式必须为：jpeg,jpg,gif;不可大于2M。</p>
        </div>
      </div>
      <div class='message-box'>
        <span class='textname'>所属行业：</span>
        <select class='textvalue' name="industryName" id="select" style='width:150px;padding-left: 10px;' v-model="industryName">
          <option value="0">请选择</option>
          <option value="1">小食品</option>
          <option value="2">酒水</option>
          <option value="3">饮料</option>
          <option value="4">鞋靴箱包</option>
          <option value="5">个护化妆</option>
          <option value="6">零售连锁</option>
        </select>
      </div>
      <div class='message-box'>
        <span class='textname'><span class='xing'>*</span>联系人：</span>
        <input class='textvalue' type="text" v-model="contactName" name="contactName">
      </div>
            <!-- <div class='message-box'>
              <span class='textname'><span class='xing'>*</span>手机号码：</span>
              <input class='textvalue' type="text" v-model="customPhone" name="customPhone">
            </div> -->
            <div class='message-box'>
              <span class='textname star'>联系方式：</span>
              <input class='textvalue' type="text" name="customPhone" v-model='customPhone' @blur='checkPhone'>
              <span class="text-after">（请输入11位手机号）</span>
              <p class="inputwarn hidelist">请输入合法的手机号</p>
            </div>
            <div class='message-box'>
              <span class='textname'>微信号：</span>
              <input class='textvalue' type="text" v-model="vendorWeixin" name="vendorWeixin">
            </div>
            <div class='message-box'>
              <span class='textname'>客服电话：</span>
              <input class='textvalue' type="text" v-model="customTel" name="customTel">
            </div>
            <div class='message-box'>
              <span class='textname' style="display:inline-block;position:relative;top:-89px;">联系地址：</span>
              <textarea rows="3" cols="20" v-model="vendorAddress" name="vendorAddress" style="width: 200px;height: 100px;position:relative;left:10px;"></textarea>
            </div>
            <div class='message-box'>
              <span class='textname'>官网地址：</span>
              <input class='textvalue' style='width:150px;padding-left: 10px;' type="text" v-model="link" name="link"> 
            </div>
              <!-- <div class='message-box'>
                <span class='textname'>关联公众号：</span>
                <input class='textvalue' style='width:150px;padding-left: 10px;' type="text" v-model="officialAccounts" name="officialAccounts"> 
              </div> -->
              <div class='message-box'>
                <input id='submit1' type="button" value='更新' @click="complete1">
              </div>
              <div class="mengban" v-show='showMB'>
                <div class="imgbox">
                  <div class="localUp">
                    <div enctype="multipart/form-data">
                      <span class="message-name star">上传头像：</span>
                      <span style="display:inline-block;width:86px;height:86px;background-repeat:no-repeat;background-size: contain" v-if='imgUrl!=""'  v-bind:style="{backgroundImage: imgUrl}"></span>
                      <input class="hidelist" type="file" id="productImg" name="imgUrl" @change='change($event)'>
                      <label class="productImg" for="productImg"></label>
                      <input class="hidelist" type="text" name="vendorId" v-bind:value='vendorId'>
                    </div>
                    <div class="imgbottom">
                      <input class="delbutton" type="button" name="" value="确定" @click='mengban'>
                      <input class="delbutton" type="button" name="" value="取消" @click='mengban'>
                      
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
          .inputwarn{
            color: red;
            margin-left: 200px;
          }
        </style>
        <script>
          import common from '../common.js'

          export default{
            data(){
              return{
                childCon:'我是子页面',
        userName: '', //账号
        vendorName:'',//品牌商名称
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
        showWarn:false,
        warnText:''
      }
    },
    props:['vendorId'],
    methods:{
      init:function(currentPage){
        var self=this;
        var url='https://ym-a.top/cloud_code/GET/vendor/basicInfo.do';
        var type='get';
        var data={
          vendorId:self.vendorId,
        };
        var success=function(res){
            res=res.data;
            self.userName=res.userName;
            self.vendorName=res.vendorName;
            self.imgUrl=`url(https://ym-a.top${res.imgUrl})`;
            self.industryName=res.industryName;
            self.contactName=res.contactName;
            self.customPhone=res.customPhone;
            self.vendorWeixin=res.vendorWeixin;
            self.customTel=res.customTel;
            self.vendorAddress=res.vendorAddress;
            self.link=res.link;
            self.officialAccounts=res.officialAccounts;
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
        // //console.log();
        $(event.target).parents("li").find("ul").toggleClass("hidelist");
        $(event.target).parents("li").siblings().find("ul").addClass("hidelist")
      },
      // 模态框显示与隐藏
      mengban:function(){
        this.showMB=!this.showMB;
      },

      //验证手机号
      checkPhone:function(){
        var self=this;
        var phoneReg=/^1[34578]\d{9}$/;
        if(!phoneReg.test(self.customPhone)){
          $(event.target).next().next().removeClass('hidelist')
        }else{
          $(event.target).next().next().addClass('hidelist')
        }
      },
      // 提交数据
      complete:function(){
        var self=this;
        var data=new FormData($('#formTol')[0]);
        var phoneReg=/^1[34578]\d{9}$/;
        if(self.contactName==''){
          self.showWarn=true;
          self.warnText='请输入联系人'
          return
        }
        if(!phoneReg.test(self.customPhone)){
          self.showWarn=true;
          self.warnText='请输入合法的手机号'
          return
        }
        $.ajax({
          url: 'https://ym-a.top/cloud_code/ADD/vendor/basicInfo.do',
          type:'post',
          data: data,
          cache: false,
          dataType: 'json',
          processData: false,
          contentType: false,
          success: function (res) {
            if(res.statuscode==1){
              self.showWarn=true;
              self.warnText='保存成功'
            }
            else{
              self.showWarn=true;
              self.warnText=res.msg
            }
          },
          error:function(res){
           self.showWarn=true;
              self.warnText='更新出错'
          }
        });
      },
      // 更新数据
      complete1:function(){
        var self=this;
        var data=new FormData($('#formTol')[0]);
        var phoneReg=/^1[34578]\d{9}$/;
        if(self.contactName==''){
          self.showWarn=true;
          self.warnText='请输入联系人'
          return
        }
        if(!phoneReg.test(self.customPhone)){
          self.showWarn=true;
          self.warnText='请输入合法的手机号'
          return
        }
        $.ajax({
          url: 'https://ym-a.top/cloud_code/UPDATE/vendor/basicInfo.do',
          type:'post',
          data: data,
          cache: false,
          dataType: 'json',
          processData: false,
          contentType: false,
          success: function (res) {
            if(res.statuscode==1){
              self.showWarn=true;
              self.warnText='保存成功';
              self.init();
            }
            else{
              self.showWarn=true;
              self.warnText=res.msg
            }
          },
          error:function(res){
           self.showWarn=true;
              self.warnText='更新出错'
          }
        });
      },
    },
    created:function(){
      this.init();
    }
  }
</script>
