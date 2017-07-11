<template>
  <div>
    <div class="right-main">
      <div class='right-main-top'>
      <svg width="960" height="800" @click='selectTree'></svg>
        
      </div>


    </div>
    <div class="right-main">
      <div class="right-main-bottom">
        <div class="button-group">
          详细列表：
        </div>
        <div class="my-form">
          <ul class="pro-list">
            <li class="pro-li">
              <span class="pro-li-span head">ID</span>
              <span class="pro-li-span head">代理厂商名称</span>
              <span class="pro-li-span head">地址</span>
              <span class="pro-li-span head">联系方式</span>
              <span class="pro-li-span head">邮箱</span>
              <span class="pro-li-span head">备注</span>
              <span class="pro-li-span head">上级代理名称</span>
              <span class="pro-li-span head">操作</span>
            </li>
            <li v-for='pro in proInfo'>
              <span class="pro-li-span">{{pro.id}}</span>
              <span class="pro-li-span">{{pro.agentName}}</span>
              <span class="pro-li-span">{{pro.agentAddress}}</span>
              <span class="pro-li-span">{{pro.agentTel}}</span>
              <span class="pro-li-span">{{pro.agentEmaill}}</span>
              <span class="pro-li-span">{{pro.mark}}</span>
              <span class="pro-li-span">{{pro.agentFid}}</span>
              <span class="pro-li-span">
                <a href="javascript:void(0)">授权码</a>
              </span> 
            </li>
          </ul>
          <div class="page-num">
            <ul class="page-num-ul">
              <a href="javascript:void(0)"><li class="page-num-li-arrow page-num-li" v-if='currentPage>1' @click='prevPage'><span class="arrow-left"></span></li></a>
              <a href="javascript:void(0)"><li class="page-num-li" v-if='currentPage>4&&totalPage.length!=1&&totalPage[0]!=1' v-bind:data-page='1' @click.self='changePage'>1</li></a>
              <a href="javascript:void(0)"><li class="page-num-li" v-if='currentPage>4&&totalPage.length!=1&&totalPage[0]!=1'>...</li></a>
              <a href="javascript:void(0)"><li class="page-num-li" v-for='item in totalPage' v-bind:class='{dangqianye:item==currentPage}' v-bind:data-page='item' @click.self='changePage'>{{item}}</li></a>
              <a href="javascript:void(0)"><li class="page-num-li" v-if='totalPages>5&&currentPage<totalPages-2'>...</li></a>
              <a href="javascript:void(0)"><li class="page-num-li" v-if='totalPages>5&&currentPage<totalPages-2' v-bind:data-page='resData.totalPages' @click.self='changePage'>{{resData.totalPages}}</li></a>

              <a href="javascript:void(0)"><li class="page-num-li page-num-li-arrow" v-if='currentPage<totalPages' @click='nextPage'><span class="arrow-right"></span></li></a>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<style scoped>
 /*@import "../assets/css/common.css";*/

 .right-main-top{
  width: 95%;
  margin: auto;
  padding-top: 60px;
  text-align: left;
}
.right-main-top1{
  margin-bottom: 50px;
}
.right-main-top-icon1{
  width: 18px;
  height: 18px;
  background: url("../../assets/img/icon_tishi.png") no-repeat;
  float: left;
  margin-right: 8px;
}
.right-main-top{
  width: 95%;
  margin: auto;
  padding-top: 60px;
  text-align: left;
}
.right-main-bottom{
  width: 95%;
  margin:auto;
  text-align: left;
}
.pro-li-span{
  width: 12%;
  height: 70px;
  line-height: 70px;
  vertical-align: middle;
}
.head{
  height: 60px;
  line-height: 60px;
}
.span2{
  display: inline-block;
  height: 70px;
  line-height: 35px;
  word-break: break-all;
  text-align: center;
  vertical-align: middle;
}
#treeBox{
  height: 775px;
  width: 100%;
}
.button-group{
  margin-top: 50px;
}
.node circle {
  fill: #999;
}

.node text {
  font: 10px sans-serif;
}

.node--internal circle {
  fill: #555;
}

.node--internal text {
  text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff;
}

.link {
  fill: none;
  stroke: #555;
  stroke-opacity: 0.4;
  stroke-width: 1.5px;
}
</style>
<!-- <script src='../assets/js/echarts2.js'></script> -->
<script>
  import common from '../../common.js';
  // import DataV from 'datavjs'
  import * as d3 from 'd3'
  // var  DataV =require('d3') ;
  export default{
    data(){
      return{
        childCon:'我是子页面',
        proInfo:[],      //信息数组
        totalPage:[],    //页码数组
        resData:[],      //请求回的所有数据
        currentPage:'',  //当前页
        totalPages:'',    //总页数

      }
    },
    props:['datas'],
    methods:{
      Myinit:function(){
        var self=this;
        d3.select('#treeBox').text('Hello,yiifaa!');
        var url='http://192.168.1.107:8080/cloud_code/GET/agent/getAgentTree.do';
        var url2='http://192.168.1.107:8080/cloud_code/GET/agent/getAllAgent.do'
        var type='get';
        var data={
          vendorId:self.datas.vendorId
        }
        var success2=function(res){
          console.log(res);
          var pagenum=res.totalPages;
          self.totalPage=[];
          self.resData=res;
          self.proInfo=res.result.data;
          self.totalPages=res.totalPages;
          self.currentPage=res.currentPage;
          self.getPage();
        }
        common.Ajax(url2,type,data,success2);
        var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        g = svg.append("g").attr("transform", "translate(40,0)");
        console.log(svg)
        var tree = d3.tree()
        .size([height, width - 160]);

        // var hierarchy = d3.hierarchy()
        // .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

        d3.json("http://192.168.1.107:8080/cloud_code/GET/agent/getAgentTree.do?vendorId="+self.datas.vendorId, function(error, data) {
          if (error) throw error;

          var root = d3.hierarchy(data)
          .sort(function(a, b) { return (a.height - b.height)});

          var link = g.selectAll(".link")
          .data(tree(root).links())
          .enter().append("path")
          .attr("style", "fill: none;stroke: #555;stroke-opacity: 0.4;stroke-width: 1.5px;")
          .attr("d", d3.linkHorizontal()
            .x(function(d) { return d.y; })
            .y(function(d) { return d.x; }));

          var node = g.selectAll(".node")
          .data(root.descendants())
          .enter().append("g")
          .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
          .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })

          node.append("circle")
          .attr("r", 2.5);

          node.append("text")
          .attr("dy", 3)
          .attr("x", function(d) { return d.children ? -8 : 8; })
          .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
          .text(function(d) { 
            return d.data.name
          });
        });
      },

      //点击节点
      selectTree:function(){
        var self=this;
        console.log(event.target)
      },
      //获取页数
      getPage:common.getPage,
      //翻页
      changePage:common.changePage,

      //上一页
      prevPage:common.prevPage,

      //下一页
      nextPage:common.nextPage,

    },
    mounted:function(){
      this.Myinit();
    }
  }
</script>
