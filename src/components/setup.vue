<template>
  <div>
    <div class='row'>
      <div class='col-md-2'>
        <div class='two_left'>
          <ul class='two_menu'>
            <li class='two_li_1'>
              <span class='img img1'></span><a href="javascript:void(0)"><span>概况</span></a>
            </li>
            <li class='two_li_2' @click='twoClick'>
              <span class='img img2'></span><a href="javascript:void(0)"><span>防伪码管理</span><span class='arrow'></span></a>
              <ul class='two_sub2'>
                <li><router-link to="/setup" style='color:#00BAFF;'>扫描页设置</router-link></li>
                <li><router-link to="/activity">扫码活动管理</router-link></li>
                <li><router-link to="/scan">扫码明细</router-link></li>
              </ul>
            </li>
            <li class='two_li_3' @click='secondClick'>
              <span class='img img3'></span><a href="javascript:void(0)"><span>溯源码管理</span><span class='arrow'></span></a>
              <ul class='two_sub2' id='two_sub2'>
                <li><router-link to="/production">生产环节管理</router-link></li>
                <li><router-link to="/material">原料批次管理</router-link></li>
                <li><router-link to="/link">环节关联赋码</router-link></li>
              </ul>
            </li>
            <li class='two_li_1'>
              <span class='img img4'></span><a href="javascript:void(0)"><span>赋能</span></a>
            </li>
          </ul>
        </div>
      </div>
      <div class='col-md-10'>
        <div class='two_right'>
          <div class='scan_space'>
            <div class='top' id='top' style='height:100px;'>
              <span class='top_one'></span>
              <span class='top_two'>可定义消费者扫码查询页面版式与功能(此功能仅针对V3.4版防伪查询页)</span>
            </div>
            <div class='center2'>
              <span class='span_first'>+&nbsp;添加防伪页模板</span>
              <input type="text" placeholder='请输入关键字'><span style='margin-top:-7px;'>搜索</span>
            </div>
            <div class='order_center' id='order_cen'>
              <ul>
                <li class='li_one li'><span>编号</span><span>模板名称</span><span>更新时间</span><span>状态</span><span>备注</span><span>操作</span></li>
                <li class='li_two li_width'><span class='span_top'>32864</span><span class='span_top'>默认红包</span><span class='span_top'>2017-03-27</span><span class='span_top'>被使用</span><span class='span_top'>广州经销商</span><span class='span_bottom'>广东、广州</span></li>
                <li class='li_two li_width'><span class='span_top'>32864</span><span class='span_top'>默认红包</span><span class='span_top'>2017-03-27</span><span class='span_top'>被使用</span><span class='span_top'>-</span><span class='span_bottom'>-</span></li>
                <li class='li_two li_width'><span class='span_top'>32864</span><span class='span_top'>默认红包</span><span class='span_top'>2017-03-27</span><span class='span_top'>被使用</span><span class='span_top'>-</span><span class='span_bottom'>-</span></li>
                <li class='li_two li_width'><span class='span_top'>32864</span><span class='span_top'>默认红包</span><span class='span_top'>2017-03-27</span><span class='span_top'>被使用</span><span class='span_top'>-</span><span class='span_bottom'>-</span></li>
                <li class='li_two li_width'><span class='span_top'>32864</span><span class='span_top'>备用模板</span><span class='span_top'>2017-03-27</span><span class='span_top'>未使用</span><span class='span_top'>-</span><span class='span_bottom'>-</span></li>
                <li class='li_two li_width'><span class='span_top'>32864</span><span class='span_top'>备用模板</span><span class='span_top'>2017-03-27</span><span class='span_top'>未使用</span><span class='span_top'>-</span><span class='span_bottom'>-</span></li>
                <li class='li_two li_width'><span class='span_top'>32864</span><span class='span_top'>备用模板</span><span class='span_top'>2017-03-27</span><span class='span_top'>未使用</span><span class='span_top'>-</span><span class='span_bottom'>-</span></li>
                <li class='li_two li_width'><span class='span_top'>32864</span><span class='span_top'>备用模板</span><span class='span_top'>2017-03-27</span><span class='span_top'>未使用</span><span class='span_top'>-</span><span class='span_bottom'>-</span></li>
                <li style='border-bottom:0;' class='li_two li_width'><span class='span_top'>32864</span><span class='span_top'>备用模板</span><span class='span_top'>2017-03-27</span><span class='span_top'>未使用</span><span class='span_top'>-</span><span class='span_bottom'>-</span></li>
              </ul>
            </div>
          </div>
          <div class='gongz'>
            <p>版权所有©2017 深圳市云码互联数字技术有限公司 All Rights Reserved. 粤ICP备17040526号</p>
          </div>
        </div>
      </div>
    </div>
    <div class='space3'></div>
  </div>
</template>
<style scoped>
  input,p,span,img {
    margin: 0;
    padding: 0;
  }
  .space3 {
    width: 100%;
    height: 100px;
  }
  .two_left {
    width: 102%;
    float: left;
    background-color: #313541;
    height: 1300px;
  }
  .two_right {
    width: 102%;
    float: right;
    background-color: #e8e8e8;
    height: 1300px;
  }
  .gongz {
    width: 60%;
    margin:0 auto;
    margin-top: 40px;
    padding-top: 20px;
  }
  .gongz p {
    color:#6d7776;
  }
  .scan_space {
    width: 90%;
    height: 1100px;
    background-color: #fff;
    margin:0 auto;
    margin-top: 5%;
    border-radius: 10px;
  }
  .top {
    width: 90%;
    height: 100px;
    margin:0 auto;
  }
  #top {
    height: 100px;
  }
  .top span {
    display: inline-block;
  }
  .top span.top_one {
    width: 18px;
    height: 18px;
    background: url("../assets/img/icon_tishi.png") no-repeat;
    float: left;
    margin-top: 50px;
  }
  .top span.top_two {
    float: left;
    line-height: 120px;
    margin-left: 20px;
    font-size: 16px;
    color:#7A8187;
  }
  .two_menu .two_li_2 .two_sub2 {
    display: none;
  }
  .two_menu .two_li_3 .two_sub2 {
    display: none;
  }
  .two_right .center2 {
    width: 90%;
    height: 80px;
    margin:0 auto;
  }
  .two_right .center2 .span_first {
    text-align: center;
    display: inline-block;
    width: 195px;
    height: 35px;
    background-color: #43C343;
    margin-left: 6%;
  }
  .two_right .center2 input {
    float: left;
    width: 200px;
    height: 35px;
    border:1px solid #EAEDF0;
    border-radius: 5px;
    padding-left: 10px;
    margin-left: 56%;
  }
  .two_right .center2 span {
    display: inline-block;
    float: left;
    width: 70px;
    height: 35px;
    background-color: #00BAFF;
    color:#fff;
    margin-left: 30px;
    border-radius: 8px;
    line-height: 35px;
    font-size: 16px;
  }
  .order_center {
    width: 90%;
    height: 773px;
    margin: 0 auto;
    border:1px solid #E7EBEE;
    border-top:none;
    border-radius: 10px;
    margin-top: 114px;
  }
  #order_cen {
    height: 760px;
    margin-top: 100px;
  }
  .order_center ul {
    width: 100%;
  }
  .order_center li.li_one {
    width: 100%;
    height: 50px;
    background-color: #E7EBEE;
  }
  .order_center li.li_one span {
    display: inline-block;

    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .order_center li.li_one span.span_bottom {
    display: inline-block;
    width: 16.6%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .order_center li.li_two {
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #E7EBEE;
  }
  .order_center li.li_two span.span_top {
    display: inline-block;
    width: 16.6%;
    height: 80px;
    line-height: 70px;
    text-align: center;
    overflow: hidden;
  }
  .order_center li.li_two span.span_bottom {
    display: inline-block;
    width: 16.6%;
    height: 80px;
    line-height: 60px;
    text-align: center;
    padding-top: 8px;
    overflow: hidden;
  }
  .order_center li.li_two span.span_bottom a {
    color:#000;
  }
  .two_right .order_center li.li span {
    width: 16.6%;
  }
  .two_right .scan_space .order_center li.li_width span {
    width: 16.6%;
  }
</style>
<!--<script src='../assets/js/china.js'></script>-->
<script>
  import '../assets/js/echarts.js'
  import '../assets/js/china.js'
  export default{
    data(){
      return{
        childCon:'我是子页面',
      }
    },
    methods:{
      twoClick:function () {
        $('.two_li_2').on('click',function () {
          $('.two_li_2>.two_sub2').css('display','block');
          $('#two_sub2').css('display','none');
        })
      },
      secondClick:function () {
        $('.two_li_3').on('click',function () {
          $('#two_sub2').css('display','block');
          $('.two_li_2>.two_sub2').css('display','none');
        })
      },
    }
  }
</script>
