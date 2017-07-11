<template>
  <div class="two_top">
    <div class="progressBar"></div>
    <div class="phoneModule"></div>
    <span class="jingdian">经典模板</span><br><br><br>
    <span class="pay_list_c1 on">
          <input type="radio" checked="checked" name="paylist" value="1" class="radioclass">
          </span><br>
    <router-link to='/twoCode/setupPage' class="nextBtn">上一步</router-link>
    <router-link to='/twoCode/detailPage' class="nextBtn">下一步</router-link>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        childCon: '我是子页面',
      }
    },

  }
</script>
<style scoped>
  /*@import "../../assets/css/common.css";*/

  .progressBar {
    background-image: url("../../assets/img/progressBar2.png");
  }

  .phoneModule {
    height: 662px;
    width: 350px;
    /* margin-left: 35px; */
    background-image: url(../../assets/img/phoneBg.jpg)
  }

  .jingdian {
    display: block;
    width: 200px;
    text-align: right;
    float: left;
    margin-top: 35px;
    /* font-weight: bold; */
    font-size: 16px;
  }

  .pay_list_c1 {
    width: 24px;
    height: 24px;
    float: left;
    padding-top: 3px;
    cursor: pointer;
    text-align: center;
    margin-right: 10px;
    background-image: url("../../assets/img/chooseBtn.png");
    background-repeat: no-repeat;
    background-position: -24px 0;
    margin-left: 158px;
  }

  .radioclass {
    opacity: 0;
    cursor: pointer;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }

  .on {
    background-position: 0 0;
  }

  .nextBtn {
    display: inline-block;
    text-decoration: none;
    background: #00baff;
    color: #fff;
    /*width: 86px;*/
    padding: 0 40px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border-radius: 5px;
    margin-left: 155px;
    margin-bottom: 55px;
    position: relative;
    top: 100px;
    border: 1px solid transparent;
  }

  .nextBtn:hover {
    background: #fff;
    color: #00baff;
    border: 1px solid #00baff;
  }
</style>
