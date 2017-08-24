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
            <input class="delbutton" type="button" name="" value="确定" @click='showWarn=false'>
          </div>
        </div>
      </div>
      <div class="mengban" v-show='showMB2'>
        <div class="warn">
          <div class="classifyHeader">
            <span style="display:block;height:48px;line-height:48px;">操作提示</span>
          </div>
          <div class="warnmain">
            删除当前代理会将其员工信息和子代理一并删除，是否确定？
          </div>
          <div class="warnbottom">
            <input class="delbutton" type="button" name="" value="确定" @click='delAgent'>
            <input class="delbutton" type="button" name="" value="取消" @click='showMB2=false'>
          </div>
        </div>
      </div>
    <div class="mengban" v-show='showCode' @click='hide'>
      <div class="codeImg">

      </div>
    </div>
    <div class="mengban" v-if='showDetail'>
      <div class="contentBox" style="width: 950px;margin-left: -475px;">
        <div class="contentTop">
          <span class="titleFont">详情</span>
          <span class="cha" @click='showDetail=false'></span>
        </div>
        <div class="contentMain">
          <ul class="choosepro-main">
            <li class="pro-li header">
              <span class="pro-li-span" style="width: 7%">员工ID</span>
              <span class="pro-li-span" style="width: 7%">代理商ID</span>
              <span class="pro-li-span">代理商名称</span>
              <span class="pro-li-span" style="width: 8%">员工姓名</span>
              <span class="pro-li-span" style="width: 18%">创建时间</span>
              <span class="pro-li-span" style="width: 8%">工号</span>
              <span class="pro-li-span">员工电话</span>
              <span class="pro-li-span" style="width: 18%">员工身份证号码</span>
              <span class="pro-li-span" style="width: 6%">操作</span>
            </li>
            <li class="pro-li" v-for='item in detailInfo'>
              <span class="pro-li-span" style="width: 7%">{{item.id}}</span>
              <span class="pro-li-span" style="width: 7%">{{item.agentId}}</span>
              <span class="pro-li-span">{{item.agentName}}</span>
              <span class="pro-li-span" style="width: 8%">{{item.empName}}</span>
              <span class="pro-li-span" style="width: 18%">{{item.createTime}}</span>
              <span class="pro-li-span" style="width: 8%">{{item.workNum}}</span>
              <span class="pro-li-span">{{item.empTel}}</span>
              <span class="pro-li-span" style="width: 18%">{{item.empIdcard}}</span>
              <span class="pro-li-span" style="width: 6%"><a href="javascript:void(0)" @click='delet(item.id)'>删除</a></span>
            </li>
          </ul>
        </div>
        <div class="contentBottom">
          <input class="content-botton" type="button" name="" value="确定" @click='showDetail=false'>
        </div>
      </div>
    </div>
    <div class="mengban" v-if='showMB'>
      <div class="contentBox">
        <div class="contentTop">
          <span class="titleFont">编辑窗口</span>
          <span class="cha" @click='showMB=false'></span>
        </div>
        <div class="contentMain">
          <div class="message-box">
            <span class="message-name">代理名称：</span>
            <input class="message-value" type="text" name="" v-model="agentName">
            <p class="message-warn" v-show='ifagentName'>请输入代理商名称</p>
          </div>
          <div class="message-box">
            <span class="message-name">代理地址：</span>
            <input class="message-value" type="text" name="" v-model="agentAddress">
            <p class="message-warn" v-show='ifagentAddress'>请输入代理地址</p>
          </div>
          <div class="message-box">
            <span class="message-name">联系方式：</span>
            <input class="message-value" type="text" name="" v-model="agentTel">
            <p class="message-warn" v-show='ifagentTel'>请输入合法的联系方式</p>
          </div>
          <div class="message-box">
            <span class="message-name">邮箱：</span>
            <input class="message-value" type="text" name="" v-model="agentEmaill">
            <p class="message-warn" v-show='ifagentEmaill'>请输入合法的邮箱</p>
          </div>
          <div class="message-box">
            <span class="message-name">备注：</span>
            <input class="message-value" type="text" name="" v-model="mark">
            <p class="message-warn"></p>
          </div>
        </div>
        <div class="contentBottom">
          <input class="content-botton" type="button" name="" value="发布" @click='confirm'>
          <input class="content-botton" type="button" name="" value="取消" @click='showMB=false'>
        </div>
      </div>
    </div>
    <div class="right-main">
      <div class='right-main-top'>
        <svg width="1060" height="500" @click='selectTree'></svg>
        
      </div>


    </div>
    <div class="right-main">
      <div class="right-main-bottom">
        <div class="button-group">
          <a href="javascript:void(0)" @click='addProxy'>
            <div class="add-pro">
              +新增代理
            </div>
          </a>
          <span style="color:#b3b3b7;">（新增代理前请选择树状图的某个节点，新增的代理将添加在选中节点的分支中）</span>
        </div>
        <div class="my-form">
          <ul class="pro-list" @click='shouquan'>
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
              <span class="pro-li-span">{{pro.id||pro.noData.id}}</span>
              <span class="pro-li-span">{{pro.agentName||pro.noData.agentName}}</span>
              <span class="pro-li-span">{{pro.agentAddress||pro.noData.agentAddress}}</span>
              <span class="pro-li-span">{{pro.agentTel||pro.noData.agentTel}}</span>
              <span class="pro-li-span">{{pro.agentEmaill||pro.noData.agentEmaill}}</span>
              <span class="pro-li-span">{{pro.mark||pro.noData.mark||null}}</span>
              <span class="pro-li-span" v-if='pro.noData==undefined'>{{pro.agentFid}}</span>
              <span class="pro-li-span" v-else>{{pro.noData.agentFid}}</span>
              <span class="pro-li-span">
                <a href="javascript:void(0)" v-bind:data-id='pro.id||pro.noData.id'>详情</a>
                <a href="javascript:void(0)" v-bind:data-id='pro.id||pro.noData.id' v-bind:data-level='pro.agentLevel||pro.noData.agentLevel'>授权码</a>
                <a href="javascript:void(0)" v-bind:data-id='pro.id||pro.noData.id'>删除</a>
              </span> 
            </li>
          </ul>
          <div class="page-num" v-if='fenye'>
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
  overflow-x: scroll;
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
  font-size: 18px;
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
.pro-list{
  overflow-y: scroll;
}
.contentTop{
  margin-bottom: 50px;
}
.contentBox{
  width: 625px;
  height: initial;
  margin-left: -312.5px;
  top: 20%;
}
.message-box{
  height: 70px;
}
.message-name{
  font-size: 16px;
  width: 80px;
  color: #000;
  font-family: 'Microsoft YaHei';
  vertical-align: middle;
}
.message-value{
  width: 390px;
  height: 38px;
  border-radius: 5px;
  margin-left: 13px;
}
.contentBottom{
  text-align: center;
}
.content-botton{
  background-color: #00baff;
  color: #fff;
  border: 1px solid transparent;
  width: 110px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  border-radius: 5px;
  margin: 40px 30px;
}
.message-warn{
  margin-left: 165px;
  color: red;
}
.codeImg{
  width: 200px;
  height: 200px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
</style>
<!-- <script src='../assets/js/echarts2.js'></script> -->
<script>
  import common from '../../common.js';
  // import DataV from 'datavjs'
  import * as d3 from 'd3'
  // var  DataV =require('d3') ;
  import QRCode from 'qrcodejs2'

  export default{
    data(){
      return{
        childCon:'我是子页面',
        proInfo:[],      //信息数组
        totalPage:[],    //页码数组
        resData:[],      //请求回的所有数据
        currentPage:'',  //当前页
        totalPages:'',    //总页数
        fenye:true,
        showMB:false,
        agentName:null,
        agentAddress:null,
        agentTel:null,
        agentEmaill:null,
        mark:' ',
        ifagentName:false,
        ifagentAddress:false,
        ifagentTel:false,
        ifagentEmaill:false,
        id:null,
        level:null,
        showCode:false,
        showDetail:false,
        detailInfo: null,
        detailId:null,
        showWarn:false,
        warnText:null,
        showMB2:false,
        delId:null
      }
    },
    props:['datas'],
    methods:{
     init:function(currentPage){
      var self=this;
      var url2='https://ym-a.top/cloud_code/GET/agent/getAllAgent.do'
      var type='get';
      var data={
        vendorId:self.datas.vendorId,
        currentPage:currentPage
      }
      var success2=function(res){
        console.log(res)
        var pagenum=res.totalPages;
        self.fenye=true
        self.totalPage=[];
        self.resData=res;
        self.proInfo=res.result.data;
        self.totalPages=res.totalPages;
        self.currentPage=res.currentPage;
        self.getPage();
      }
      common.Ajax(url2,type,data,success2);

      //创建树状图
      d3.selectAll("svg > *").remove();
      var svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height"),
      g = svg.append("g").attr("transform", "translate(70,0)");
      var tree = d3.tree()
      .size([height, width - 160]);

        // var hierarchy = d3.hierarchy()
        // .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

        d3.json("https://ym-a.top/cloud_code/GET/agent/getAgentTree.do?vendorId="+self.datas.vendorId, function(error, data) {
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
          .attr("data-id",function(d){return d.data.id})
          .attr("data-level",function(d){return d.data.nodeData.agentLevel})
          .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
          .text(function(d) { 
            return d.data.name
          });
        });
      },

      //点击节点
      selectTree:function(){
        var self=this;
        if($(event.target)[0].nodeName==='text'){
          $(event.target).css('fill','#00baff').parents('g').siblings().find('text').css('fill','#000');

          var id=$(event.target).attr('data-id');
          self.id=id;
          self.level=$(event.target).attr('data-level')
          var url='https://ym-a.top/cloud_code/GET/agent/getAgentInfoByNodeId.do';
          var type='get';
          var data={
            vendorId:self.datas.vendorId,
            id:id
          };
          var success=function(res){
            self.proInfo=res.data;
            self.fenye=false;
          };
          common.Ajax(url,type,data,success);
        };
        
      },

      //发布
      confirm:function(){
        var self=this;
        var phoneReg=/^1[34578]\d{9}$/;
        var phone=/^0\d{2,3}-\d{7,8}(-\d{1,6})?$/;
        var maillReg=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(self.agentName==null){
          self.ifagentName=true;
          return
        }else{
          self.ifagentName=false;
        }
        if(self.agentAddress==null){
          self.ifagentAddress=true;
          return
        }else{
          self.ifagentAddress=false;
        }
        if(self.agentTel==null||!phoneReg.test(self.agentTel)&&self.agentTel.length===11){
          self.ifagentTel=true;
          return
        }else if(self.agentTel.length!==11&&!phone.test(self.agentTel)){
          self.ifagentTel=true;
          return
        }else{
          self.ifagentTel=false;
        }
        if(self.agentEmaill==null||!maillReg.test(self.agentEmaill)){
          self.ifagentEmaill=true;
          return
        }else{
          self.ifagentEmaill=false;
        }
        var url='https://ym-a.top/cloud_code/ADD/agent/addAgentInfo.do';
        var type='post';
        var data={
          vendorId:self.datas.vendorId,
          agentLevel:parseInt(self.level)+1||1,
          agentFid:self.id,
          agentName:self.agentName,
          agentAddress:self.agentAddress,
          agentTel:self.agentTel,
          agentEmaill:self.agentEmaill,
          mark:self.mark
        };
        var success=function(res){
          if(res.status===1){
            self.showMB=false;
            self.init(1);
            self.level=null;
            self.id=null;
          }else{
            self.showWarn=true;
            self.warnText=res.msg;
          }
        }
        common.Ajax(url,type,data,success)
      },

      //新增代理
      addProxy:function(){
        var self=this;
        if(self.proInfo.length==0){
          self.showMB=true;
        }else if(self.id==null){
          return
        }else{
          self.showMB=true;
          self.agentName=null;
          self.agentTel=null;
          self.agentEmaill=null;
          self.agentAddress=null;
          self.mark=null;
        }
        
      },

      //授权码
      shouquan:function(){
        var self=this;
        if($(event.target)[0].innerText==='授权码'){
          var agentId=$(event.target).attr('data-id');
          var agentLevel=$(event.target).attr('data-level');
          var url='https://ym-a.top/cloud_code/ADD/agent/vendorGenerateLogisticCode.do';
          var type='get';
          var data={
            agentId:agentId,
            agentLevel:agentLevel,
            vendorId:self.datas.vendorId
          };
          var success=function(res){
            self.showMa(agentId);
          }
          common.Ajax(url,type,data,success)
        }else if($(event.target)[0].innerText==='删除'){
          self.delId=$(event.target).attr('data-id');
          self.showMB2=true;
          
        }else if($(event.target)[0].innerText==='详情'){
          self.detailId=$(event.target).attr('data-id')
          self.detail();
        }
      },
      //删除代理
      delAgent(){
        var self=this;
        var url='https://ym-a.top/cloud_code/DELETE/agent/deleteAgentNode.do';
          var type='get';
          var data={
            vendorId:parseInt(self.datas.vendorId),
            id:parseInt(self.delId),
          };
          var success=function(res){
            if(res.status===1){
              self.init();
              self.id=null;
              self.level=null;
              self.showMB2=false,
              self.delId=null;
            }else{
              self.showWarn=true;
              self.showMB2=false;
              self.warnText=res.msg;
            }
          };
          common.Ajax(url,type,data,success)
      },
      //展示二维码
      showMa:function(id){
        var self=this;
        var url='https://ym-a.top/cloud_code/GET/agent/getAgentLogisticCode.do';
        var type='get';
        var data={
          agentId:id
        };
        var success=function(res){
          self.newCode(res.logisticCode);
        }
        common.Ajax(url,type,data,success);
      },

      //生成二维码
      newCode:function(code){
        var self=this;
        self.showCode=true;
        var code="https://ym-a.top/cloud_code/w/"+code;
        var qrcodeNode=document.getElementsByClassName('codeImg')[0];
        $(qrcodeNode).html('');
        self.qrcode = new QRCode(qrcodeNode, {
          text: code,
          width: 200,
          height: 200,
          colorDark: "#000000",
          colorLight: "#ffffff"
        });
      },

      //隐藏蒙版
      hide:function(){
        var self=this;
        if($(event.target)[0].className=='mengban'){
          self.showCode=false;
        }
        
      },
      //删除代理信息
      delet(id){
        var self=this;
        var url='https://ym-a.top/cloud_code/DELETE/AgentEmployee/deleteAgentEmp.do';
        var type='get';
        var data={
          empId:id
        };
        var success=function(res){
          if(res.status===1){
            self.detail()
          }
        }
        common.Ajax(url,type,data,success)
      },

      //详情
      detail(){
        var self=this;
        var agentId=self.detailId;
        var url='https://ym-a.top/cloud_code/GET/AgentEmployee/getEmpInfoById.do';
        var type='get';
        var data={
          agentId:agentId
        };
        var success=function(res){
          self.showDetail=true;
          self.detailInfo=res.data;
        };
        common.Ajax(url,type,data,success)
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
      this.init();
    }
  }
</script>
