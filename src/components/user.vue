<template>
  <div>
    <div class='row'>
      <div class='col-md-2'>
        <div class='goods_left'>
          <ul class='goods_menu'>
            <li class='goods_li goods_li_1'>
            <div class="change_color">
              <router-link to=""><span class='img img1'></span><a href="javascript:void(0)" @click="toWeiQing('http://www.ym-b.top/web/index.php?c=mc&a=fans&')"><span>粉丝管理</span></a></router-link>
            </div>
              
            </li>
            <li class='goods_li_1'>
            <div class="change_color">
              <span class='img img2'></span><a href="javascript:void(0)" @click="toWeiQing('http://www.ym-b.top/web/index.php?c=mc&a=member&')"><span>会员管理</span></a>
            </div>
            </li>
          </ul>
        </div>
      </div>
      <div class='col-md-10'>
        <div class='goods_right'>
        <router-view>
          
        </router-view>
        <div class="footer">
            <p class="footer_p">版权所有©2017 深圳市云码互联数字技术有限公司 All Rights Reserved. 粤ICP备17040526号</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/*@import "../assets/css/common.css";*/

</style>
<script>
  export default{
    data(){
      return{
        childCon:'我是用户',
      }
    },
    methods:{
      showList:function(event){
        // console.log();
        $(event.target).parents("li").find("ul").toggleClass("hidelist");
        $(event.target).parents("li").siblings().find("ul").addClass("hidelist")
      },
      toWeiQing:function(url){
        document.cookie=`_755url=.${url.slice(url.indexOf('web/')+4)};domain=ym-b.top;path=/web`;
        window.open(url,'_blank')
      },
    }
  }
</script>
