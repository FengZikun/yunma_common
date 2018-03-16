<template>
  <div class="two_top">
  <div class="main">
    <div>
      <div class="progressBar"></div>
      <div class="phoneModule"></div>
      <span class="jingdian">经典模板</span><br><br><br>
      <input class="chooseModule" name='chooseModule' v-model='muban' :value='1' type="radio">
    </div>
    <div>
      <div class="progressBar"></div>
      <div class="phoneModule2"></div>
      <span class="jingdian">自定义模板</span><br><br><br>
      <input class="chooseModule" name='chooseModule' v-model='muban' :value='2' type="radio">
    </div>
  </div>
    
    <router-link to='/twoCode/setupPage' class="nextBtn">上一步</router-link>
    <a href='javascript:void(0)' @click='next' class="nextBtn">下一步</a>
  </div>
</template>
<script>
import router from '../../router.js'
import {mapMutations} from 'vuex'
  export default{
    data(){
      return {
        childCon: '我是子页面',
        muban:1,
      }
    },
    methods:{
      ...mapMutations({
        reset:'banner1/reset'
        }),
      next(){
        if(this.muban===1){
          router.push({path:'/twoCode/detailPage'});
        }else{
          this.reset();
          router.push({path:'/twoCode/detailPage2'});
        }
      }
    }

  }
</script>
<style scoped>
  /*@import "../../assets/css/common.css";*/

  .progressBar {
    background-image: url("../../assets/img/progressBar2.png");
  }
  .main{
    display: flex;
    justify-content: space-around;
  }
  .phoneModule {
    height: 662px;
    width: 350px;
    /* margin-left: 35px; */
    background-image: url(../../assets/img/bgone.png);
    background-size: contain;
    background-repeat: no-repeat;
  }
  .phoneModule2 {
    height: 662px;
    width: 350px;
    /* margin-left: 35px; */
    background-image: url(../../assets/img/150416507.jpg);
    background-size: contain;
    background-repeat: no-repeat;
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
  .chooseModule{
    width: 20px;
    display: block;
    height: 40px;
    margin-left: 155px;
  }
</style>
