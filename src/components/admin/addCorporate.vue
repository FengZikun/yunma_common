<template>
  <div>
    <div class="mengban" v-show='showMB'>
    <div class="imgbox">
        <form name='myform2' id="myform2" enctype="multipart/form-data">
        <span class="message-name star" style="vertical-align: middle;">品牌代表图片：</span>
        <span style="display:inline-block;width:86px;height:86px;background-repeat:no-repeat;background-size: contain" v-if='imgSrcF!=""'  v-bind:style="{backgroundImage: imgSrcF}"></span>
        <input style="display:none" type="file" id="photoF" name="brandImg" @change='change($event)'>
        <label class="productImg" for="photoF"></label>
      </form>
      <div class="imgbottom">
        <input class="delbutton" type="button" name="" value="提交" @click='upLoad1'>
        <input class="delbutton" type="button" name="" value="返回" @click='showMB=false'>
      </div>
      </div>

    </div>
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
    <form id='myform' class="message" enctype="multipart/form-data">

      <div class='message-box'>
        <div class="return">
          <router-link to='/admin/corporate'>返回</router-link>
        </div>
        <span class='textname star'>厂商名称：</span>
        <input class='textvalue' type="text" name='brandName' v-model='brandName'>
      </div>
      <div class='message-box'>
        <span class='textname star'>所属行业：</span>
        <select class='textvalue' type="text" name="industryName" v-model='industryName'>
          <option>农产品</option>
          <option>畜牧养殖</option>
          <option>保健品</option>
          <option>医药</option>
          <option>医疗器械</option>
          <option>计算机硬件</option>
          <option>计算机软件</option>
          <option>通讯产品</option>
          <option>电子商务</option>
          <option>食品</option>
          <option>茶叶</option>
          <option>酒</option>
          <option>服饰皮具</option>
          <option>化妆品</option>
          <option>家用电器</option>
          <option>数码产品</option>
          <option>汽车配件</option>
          <option>汽车销售</option>
          <option>玩具礼品</option>
          <option>母婴用品</option>
          <option>农资产品</option>
          <option>体育用品</option>
          <option>成人用品</option>
          <option>床上用品</option>
          <option>珠宝</option>
          <option>线缆</option>
          <option>家具</option>
          <option>服务业</option>
          <option>金融投资</option>
          <option>电子电工</option>
          <option>旅游休闲</option>
          <option>安全防护</option>
          <option>印刷包装</option>
          <option>机械机电</option>
          <option>建筑建材</option>
          <option>冶金矿业</option>
          <option>石油化工</option>
          <option>水利水电</option>
          <option>交通运输</option>
          <option>综合性行业</option>
          <option>其他</option>
        </select>
      </div>
      <div class='message-box'>
        <span class='textname star'>联系方式：</span>
        <input class='textvalue' type="text" name="customPhone" v-model='customPhone' @blur='checkPhone'>
        <span class="text-after">（请输入11位手机号）</span>
        <p class="inputwarn hidelist">请输入合法的手机号</p>
      </div>
      <div class="title">
        <span class="textname">功能需求：</span>
        <div style="display:inline-block">
          <input class="mid" type="checkbox" name="" id="a" v-model='typeArr' value="1">
          <label class="mid" for="a">互联推广</label>
          <input class="mid" type="checkbox" name="" id="b" v-model='typeArr' value="2">
          <label class="mid" for="b">防伪</label>
          <input class="mid" type="checkbox" name="" id="c" v-model='typeArr' value="3">
          <label class="mid" for="c">溯源</label>
          <input class="mid" type="checkbox" name="" id="d" v-model='typeArr' value="6">
          <label class="mid" for="d">大数据</label>
          <input class="mid" type="checkbox" name="" id="e" v-model='typeArr' value="4">
          <label class="mid" for="e">红包</label>
          <input class="mid" type="checkbox" name="" id="f" v-model='typeArr' value="5">
          <label class="mid" for="f">游戏</label>
        </div>
      </div>
      <div class='message-box'>
        <span class='textname star'>邮箱：</span>
        <input class='textvalue' type="text" name="Emaill" v-model='Emaill' @blur='checkEmaill'>
        <span class="text-after">（请输入企业邮箱）</span>
        <p class="inputwarn hidelist">请输入符合规范的邮箱</p>
      </div>
      <div class='message-box'>
        <span class='textname'>官网：</span>
        <input class='textvalue' type="text" name='link' v-model='link'>
        <span class="text-after">（请输入公司官网）</span>
      </div>
      <div class='message-box'>
        <span class='textname'>微商城：</span>
        <input class='textvalue' type="text" name="vendorMall" v-model='vendorMall'>
        <span class="text-after">（请输入企业微商城链接）</span>
      </div>
      <div class='message-box'>
        <span class='textname'>公众号：</span>
        <input class='textvalue' type="text" name='wxConfig' v-model='wxConfig'>
        <span class="text-after">（请输入企业公众号）</span>
      </div>
      <div class='message-box'>
        <span class='textname'>相关图片资料：</span>
        <div class="phbox">
          <span class='photo' v-bind:style="{backgroundImage: imgSrcA}"></span>
          <p class="p">客户证书</p>
          <input type="file" name="img_vendor_qualification" style="display:none;" id="photoA" @change='change($event)'>
          <label for="photoA" class="button">上传图片</label>
        </div>
        <div class="phbox">
          <span class='photo'  v-bind:style="{backgroundImage: imgSrcB}"></span>
          <p class="p">商标注册证</p>
          <input type="file" name="img_trademark_certificate" style="display:none;" id="photoB" @change='change($event)'>
          <label for="photoB" class="button">上传图片</label>
        </div>
        <div class="phbox">
          <span class='photo'  v-bind:style="{backgroundImage: imgSrcC}"></span>
          <p class="p">工业产品生产许可证</p>
          <input type="file" name="img_industrial_production_license" style="display:none;" id="photoC" @change='change($event)'>
          <label for="photoC" class="button">上传图片</label>
        </div>
        <div class="phbox">
          <span class='photo'  v-bind:style="{backgroundImage: imgSrcD}"></span>
          <p class="p">食品生产许可证</p>
          <input type="file" name="img_food_production_license" style="display:none;" id="photoD" @change='change($event)'>
          <label for="photoD" class="button">上传图片</label>
        </div>
        <div class="phbox">
          <span class='photo'  v-bind:style="{backgroundImage: imgSrcE}"></span>
          <p class="p">银行开户许可证</p>
          <input type="file" name="img_bank_account_license" style="display:none;" id="photoE" @change='change($event)'>
          <label for="photoE" class="button">上传图片</label>
        </div>
        
      </div>
      <div class='message-box'>
        <span class='textname'>品牌代表图片：</span>
        <div class="phbox">
          <img style="display:inline-block;width:86px;height:86px;vertical-align:top" v-for='item in imgSrcs' v-bind:src='"https://ym-a.top"+item'></span>
          <span class="img" @click='mengban'></span>
          <!-- <input type="file" name="" style="display:none;" id="kehu">
          <label for="kehu" class="img"></label> -->
          <p>(企业logo+企业品牌+代表banner)</p>
        </div>
        
      </div>
      <div class='message-box'>
        <input id='submit' type="button" value='保存' @click='confirm'>
      </div>
    </form  id='myform'>
  </div>
</template>
<style scoped>
  /*@import "../assets/css/common.css";*/
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
    min-height: 56px;
    font-family: 'Microsoft YaHei';
    margin-top: 40px;
  }
  .textname{
    text-align: right;
    display: inline-block;
    width:126px;
    margin-left: 60px;
    font-family: 'Microsoft YaHei';
    font-size: 18px;
    vertical-align: middle;
  }
  .textvalue{
    display: inline-block;
    height: 36px;
    margin-left: 10px;
    border: 1px solid #e7e7eb;
    padding-left: 10px;
    width: 165px;
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
  .photoafter{
    display: inline-block;
    line-height: 35px;
    vertical-align: middle;
    margin-left: 20px;
  }
  .photoafter p{
    margin: 0;
  }
  .photo{
    background-repeat:no-repeat;
    background-size: contain;
  }
  .updatetwo{
    color: #67a9ec;
  }
  .pic{
    color: #b3b3b3;
  }
  .mid{
    vertical-align: middle;
    display: inline-block;
    margin: 0;
    padding: 0;
  }
  .title{
    margin-top: 50px;
  }
  .phbox{
    display: inline-block;
    vertical-align: top;
    text-align: center;
    margin-right: 50px;
  }
  .button{
    width: 69px;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    color: #fff;
    border-radius: 5px;
    background: #00baff;
    display: block;
    margin: auto;
    text-align: center;
  }
  .photo{
    margin: auto;
  }
  .p{
    text-align: center;
    line-height: 38px;
    margin: 0;
  }
  .img{
    display: inline-block;
    width: 86px;
    height: 86px;
    background: url(../../assets/img/group7.png);
  }
  .imgbox{
    top: 50%;
    left: 50%;
    margin-left: -342.5px;
    margin-top: -327.5px;
    height: 655px;
    border-radius: 2px;
    background: #fff;
    width: 685px;
    position: absolute;
  }
  .classifyHeader{
    width: 100%;
    height: 48px;
    background: #f6f8fc;
    padding: 0 20px;
    box-sizing: border-box;
    position: relative;
  }
  .classifyFooter{
    width: 100%;
    height: 48px;
    background: #f6f8fc;
    padding: 0 20px;
    box-sizing: border-box;
    position: relative;
    top: 68px;
    text-align: center;
  }
  .text-after{
    color: #bebec1;
  }
  .inputwarn{
    color: red;
    margin-left: 200px;
  }
  #myform2{
    margin-top: 40px;
    text-align: left;
    margin-left: 100px;
  }
  .imgbottom{
    margin-top: 100px;
  }
</style>
<script>
import common from '../../common.js'
import router from '../../router.js'
  export default{
    data(){
      return{
        showMB:false,
        imgSrcA:null,
        imgSrcB:null,
        imgSrcC:null,
        imgSrcD:null,
        imgSrcE:null,
        imgSrcF:null,
        imgIds:[],
        imgSrcs:[],
        typeArr:[],
        brandName:null,
        industryName:null,
        customPhone:null,
        Emaill:null,
        link:"http://",
        vendorMall:null,
        wxConfig:null,
        showWarn:false,
        warnText:null
      }
    },
    methods:{
      //同步显示图片
      change:function(eImg){
        const reader = new FileReader();
        if($(eImg.target).attr('id')=='photoA'){
          reader.onloadend = (e) =>
          {
            this.imgSrcA = `url('${e.target.result}')`;
          };
        };
        if($(eImg.target).attr('id')=='photoB'){
          reader.onloadend = (e) =>
          {
            this.imgSrcB = `url('${e.target.result}')`;
          };
        };
        if($(eImg.target).attr('id')=='photoC'){
          reader.onloadend = (e) =>
          {
            this.imgSrcC = `url('${e.target.result}')`;
          };
        };
        if($(eImg.target).attr('id')=='photoD'){
          reader.onloadend = (e) =>
          {
            this.imgSrcD = `url('${e.target.result}')`;
          };
        };
        if($(eImg.target).attr('id')=='photoE'){
          reader.onloadend = (e) =>
          {
            this.imgSrcE = `url('${e.target.result}')`;
          };
        }
        if($(eImg.target).attr('id')=='photoF'){
          reader.onloadend = (e) =>
          {
            this.imgSrcF = `url('${e.target.result}')`;
          };
        }
        reader.readAsDataURL(eImg.target.files[0]);

      },

      //显示蒙版
      mengban:function(){
        var self=this;
        self.showMB=true;
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

      //验证邮箱
      checkEmaill:function(){
        var self=this;
        var maillReg=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!maillReg.test(self.Emaill)){
          $(event.target).next().next().removeClass('hidelist')
        }else{
          $(event.target).next().next().addClass('hidelist')
        }
      },

      //提交图片
      upLoad1:function(){
        var self=this;
        var data=new FormData($('#myform2')[0]);
        $.ajax({
          url: 'https://ym-a.top/cloud_code/POST/vendor/uploadVendorBrandImg.do',
          type:'post',
          data: data,
          cache: false,
          dataType: 'json',
          processData: false,
          contentType: false,
          success: function (res) {
            if(res.statuscode===1){
              var id=res.imgId.toString()
              self.imgIds.push(id);
              self.imgSrcs.push(res.imgUrl);
              self.showMB=false;
            }
          },
          error:function(res){
            //console.log("error")
          }
        });
      },

      //提交数据
      confirm:function(){
        var self=this;
        if(self.brandName==null){
          self.showWarn=true;
          self.warnText='请输入厂商名称';
          return
        }
        if(self.industryName==null){
          self.showWarn=true;
          self.warnText='请选择所属行业';
          return
        }
        if(self.customPhone==null){
          self.showWarn=true;
          self.warnText='请输入联系方式';
          return
        }
        if(self.Emaill==null){
          self.showWarn=true;
          self.warnText='请输入邮箱';
          return
        }
        var data=new FormData($('#myform')[0]);
        var functionType=self.typeArr.join(',')
        data.append('imgIds',self.imgIds.join(','));
        data.append('functionType',functionType);

        $.ajax({
          url: 'https://ym-a.top/cloud_code/POST/vendor/addVendorInfo.do',
          type:'post',
          data: data,
          cache: false,
          dataType: 'json',
          processData: false,
          contentType: false,
          success: function (res) {
            //console.log(data);
            if(res.statuscode===1){
              router.push({path:'corporate'});
              //console.log(data.get('imgIds'));
            }
          },
          error:function(res){
            //console.log("error")
          }
        });
      },
    }
  }
</script>
