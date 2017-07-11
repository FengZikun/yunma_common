<template>
  <div class="two_top">
    <div class="progressBar"></div>
    <span class="titleSpan"><font color='red'>*</font>模板名称：</span>
    <input type="text" v-model="moduleName" class="titleInput" name="titleInput" required autofocus><br>
    <div style="position:relative;">
      <span class="beizhuSpan">备注：</span><span></span><textarea v-model="moduleRemark" class="beizhuInput"></textarea>
    </div>
    <router-link to='/twoCode/briefCode' class="nextBtn">上一步</router-link>
    <div class="nextBtn" @click='checkName'>下一步</div>
  </div>
</template>
<script>
  import router from '../../router'
  export default{
    data(){
      return {
        moduleName: this.datas.moduleName, moduleRemark: this.datas.moduleRemark
      }
    },
    props: ['datas'],
    methods:{
      // 检查模板名称
      checkName:function(){
        var self=this;
        $.ajax({
          url:'http://project.ym-b.top/cloud_code/POST/antiFake/htmlNameExist.do',
          type:'post',
          data:{
            vendorId:self.datas.vendorId,
            templateName:self.moduleName
          },
          datatype:'json',
          success:function(res){
            if(res.errorCode=='-1'){
              alert('模板名称存在')
            }
            else if(res.errorCode=='0'){
              router.push({path:'/twoCode/chosePage'});
            }
          }
        })
      }
    },
    watch: {
      moduleName(){
        this.$emit('sub', "moduleName", this.moduleName);
      },
      moduleRemark(){
        this.$emit('sub', "moduleRemark", this.moduleRemark)
      },
      datas(){
        console.log(this.datas)
      }
    }
  }
</script>
<style scoped>
  /*@import "../../assets/css/common.css";*/

  .progressBar {
    background-image: url("../../assets/img/progressBar1.png");
  }

  .titleInput {
    -webkit-appearance: none;
    -moz-appearance: none;
    display: inline-block;
    border: 1px solid #E9E9ED;
    border-radius: 3px;
    height: 30px;
    line-height: 30px;
    width: 330px;
    font-size: 16px;
  }

  .beizhuInput {
    display: inline-block;
    width: 330px;
    height: 162px;
    border: 1px solid #E9E9ED;
    border-radius: 3px;
    resize: none;
    font-size: 16px;
    margin-top: 10px;
  }

  .titleSpan {
    display: inline-block;
    width: 130px;
    text-align: right;
    font-size: 18px;
    margin-right: 10px;
  }

  .beizhuSpan {
    width: 130px;
    text-align: right;
    font-size: 18px;
    display: block;
    vertical-align: top;
    float: left;
    margin-top: 10px;
    margin-right: 10px;
  }

  .nextBtn {
    display: inline-block;
    text-decoration: none;
    background: #00baff;
    color: #fff;
    /*width: 86px;*/
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border-radius: 5px;
    margin-left: 145px;
    margin-bottom: 55px;
  }
</style>
