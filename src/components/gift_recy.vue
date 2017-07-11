<template>
  <div>
    <div class='row'>
      <div class='col-md-2'>
        <div class='goods_left'>
          <ul class='goods_menu'>
            <li class='goods_li_1'>
              <span class='img img1'></span><a href="javascript:void(0)"><span>概况</span></a>
            </li>
            <li class='goods_li_2' @click='goodsClick1'>
              <span class='img img2'></span><a href="javascript:void(0)"><span>产品库</span><span class='arrow'></span></a>
              <ul class='goods_sub2'>
                <li><router-link to="/pro_message" style='color:#00BAFF;'>产品管理</router-link></li>
                <li><router-link to="/classify">产品分类</router-link></li>
              </ul>
            </li>
            <li class='goods_li_3' @click='goodsClick2'>
              <span class='img img3'></span><a href="javascript:void(0)"><span>礼品库</span><span class='arrow'></span></a>
              <ul class='goods_sub3'>
                <li><router-link to="/gift">礼品管理</router-link></li>
                <li><router-link to="/groups">分组管理</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class='col-md-10'>
        <div class='goods_right'>
          <div class='top_title'>
            <router-link to="/gift" class='title_two'>礼品库</router-link>
            <router-link to="/gift_recy" class='title_one'>回收站</router-link>
          </div>
          <div class='rig'>
            <div class='center2'>
              <span class='span_first'>+&nbsp;上传产品</span>
              <input type="text" placeholder='请输入关键字'><span style='margin-top:-6px;'>搜索</span>
            </div>
            <div class='order_center'>
              <ul>
                <li class='li_one'><span>ID</span><span>产品名称</span><span>产品类型</span><span>产品库分类</span><span>价格/元</span><span>排序</span><span>更新时间</span><span>操作</span></li>
                <li class='li_two'><span class='span_top'>51310</span><span class='span_top'>阳澄湖大闸蟹</span><span class='span_top'>实物</span><span class='span_top'>阳澄湖</span><span class='span_top'>3.50</span><span class='span_top'>20</span><span class='span_top'>2017/01/10</span><span class='span_bottom'>-</span></li>
                <li class='li_two'><span class='span_top'>51310</span><span class='span_top'>泰山仙草蜜茶</span><span class='span_top'>实物</span><span class='span_top'>饮料</span><span class='span_top'>3.50</span><span class='span_top'>20</span><span class='span_top'>2017/01/10</span><span class='span_bottom'>-</span></li>
                <li class='li_two'><span class='span_top'>51310</span><span class='span_top'>泰山仙草蜜茶</span><span class='span_top'>实物</span><span class='span_top'>饮料</span><span class='span_top'>3.50</span><span class='span_top'>20</span><span class='span_top'>2017/01/10</span><span class='span_bottom'>-</span></li>
                <li class='li_two'><span class='span_top'>51310</span><span class='span_top'>泰山仙草蜜茶</span><span class='span_top'>虚拟</span><span class='span_top'>饮料</span><span class='span_top'>3.50</span><span class='span_top'>20</span><span class='span_top'>2017/01/10</span><span class='span_bottom'>-</span></li>
                <li class='li_two'><span class='span_top'>51310</span><span class='span_top'>泰山仙草蜜茶</span><span class='span_top'>虚拟</span><span class='span_top'>饮料</span><span class='span_top'>3.50</span><span class='span_top'>10</span><span class='span_top'>2017/01/10</span><span class='span_bottom'>-</span></li>
                <li class='li_two'><span class='span_top'>51310</span><span class='span_top'>泰山仙草蜜茶</span><span class='span_top'>虚拟</span><span class='span_top'>饮料</span><span class='span_top'>3.50</span><span class='span_top'>10</span><span class='span_top'>2017/01/10</span><span class='span_bottom'>-</span></li>
                <li class='li_two'><span class='span_top'>51310</span><span class='span_top'>泰山仙草蜜茶</span><span class='span_top'>虚拟</span><span class='span_top'>饮料</span><span class='span_top'>3.50</span><span class='span_top'>2</span><span class='span_top'>2017/01/10</span><span class='span_bottom'>-</span></li>
                <li style='border-bottom:0;' class='li_two'><span class='span_top'>51310</span><span class='span_top'>泰山仙草蜜茶</span><span class='span_top'>虚拟</span><span class='span_top'>饮料</span><span class='span_top'>3.50</span><span class='span_top'>2</span><span class='span_top'>2017/01/10</span><span class='span_bottom'>-</span></li>
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
  .space3 {
    width: 100%;
    height: 100px;
  }
  .goods_left {
    width: 102%;
    float: left;
    background-color: #313541;
    height: 1300px;
  }
  .goods_right {
    width: 102%;
    float: right;
    background-color: #e8e8e8;
    height: 1300px;
  }
  .goods_menu {
    width: 100%;
    margin-top: 40px;
  }
  .goods_menu li {
    width: 100%;
  }
  .goods_menu li a {
    color:#fff;
    font-size: 16px;
  }
  .goods_menu li .arrow {
    margin-left: 40px;
    font-family: 'simsun';
  }
  .goods_menu li a:hover {
    text-decoration: none;
    color:#00BAFF;
  }
  .goods_menu .sub1 {
    width: 100%;
  }
  .goods_menu .sub1 li {
    line-height: 100%;
    margin-top: 10px;
  }
  .goods_menu .two_sub2 {
    width: 100%;
  }
  .goods_menu .two_sub2 li {
    line-height: 100%;
    margin-top: 10px;
  }
  .goods_menu .sub3 {
    width: 100%;
  }
  .goods_menu .sub3 li {
    line-height: 100%;
    margin-top: 10px;
  }
  .goods_menu .goods_li_1 a {
    margin-right: 20%;
  }
  @media screen and (max-width:1366px) {
    .goods_menu .goods_li_1 a {
      margin-right: 30%;
    }
  }
  .goods_menu .goods_li_2 .goods_sub2 {
    width: 100%;
    display: none;
  }
  .goods_menu .goods_li_2 .goods_sub2 li {
    margin-top: -20px;
  }
  .goods_menu .goods_li_3 .goods_sub3 {
    width: 100%;
    display: none;
  }
  .goods_menu .goods_li_3 .goods_sub3 li {
    margin-top: -20px;
  }
  .rig {
    width: 90%;
    height: 1000px;
    margin:0 auto;
    border-radius: 10px;
    background-color: #fff;
    margin-top: 40px;
  }
  .gongz {
    width: 60%;
    margin:0 auto;
    margin-top: 40px;
    padding-top: 20px;
  }
  .center2 {
    width: 90%;
    height: 100px;
    margin:10px auto;
    padding-top: 30px;
  }
  .center2 .span_first {
    text-align: center;
    display: inline-block;
    width: 195px;
    height: 35px;
    background-color: #43C343;
    /*margin-left: -46%;*/
  }
  .center2 input {
    float: left;
    width: 200px;
    height: 35px;
    border:1px solid #EAEDF0;
    border-radius: 5px;
    padding-left: 10px;
    margin-left: 56%;
    margin-top: -6px;
  }
  .center2 span {
    display: inline-block;
    float: left;
    width: 70px;
    height: 35px;
    background-color: #00BAFF;
    color:#fff;
    margin-left: 30px;
    border-radius: 8px;
    line-height: 35px;
    font-size: 18px;
  }
  .order_center {
    width: 90%;
    height: 690px;
    margin: 0 auto;
    border:1px solid #E7EBEE;
    border-top:none;
    border-radius: 10px;
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
    width: 12.5%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .order_center li.li_one span.span_bottom {
    display: inline-block;
    width: 12.5%;
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
    width: 12.5%;
    height: 80px;
    line-height: 70px;
    text-align: center;
    overflow: hidden;
  }
  .order_center li.li_two span.span_bottom {
    display: inline-block;
    width: 12.5%;
    height: 80px;
    line-height: 60px;
    text-align: center;
    padding-top: 8px;
    overflow: hidden;
  }
  .order_center li.li_two span.span_bottom a {
    color:#000;
  }
  .top_title {
    width: 90%;
    height: 70px;
    margin:0 auto;
  }
  .top_title a {
    display: inline-block;
    width: 87px;
    height: 37px;
    color:#000;
    float: left;
    font-size: 16px;
    text-align: center;
  }
  .top_title .title_one {
    background-color: #00BAFF;
    line-height: 37px;
    border-radius: 20px;
    margin-top: 40px;
    color:#fff;
  }
  .top_title .title_two {
    line-height: 37px;
    border-radius: 20px;
    margin-top: 40px;
  }
  .gongz p {
    color:#6d7776;
  }
  a:hover {
    text-decoration: none;
  }
  p:hover {
    text-decoration: none;
  }
</style>
<script>
  export default{
    data(){
      return{
        childCon:'我是子页面',
      }
    },
    methods:{
      goodsClick1:function () {
        $('.goods_li_2>.goods_sub2').css('display','block');
        $('.goods_li_3>.goods_sub3').css('display','none');
      },
      goodsClick2:function () {
        $('.goods_li_3>.goods_sub3').css('display','block');
        $('.goods_li_2>.goods_sub2').css('display','none');
      }
    },
  }
</script>
