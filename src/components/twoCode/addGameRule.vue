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
					<input class="delbutton" style="width:42px;height:24px;" type="button" name="" value="确定" @click='showWarn=false'>
				</div>
			</div>
		</div>
		<div class="top-title">
			<router-link to="/twoCode/game" class='title-two'>列表</router-link>
			<router-link to="/twoCode/gameRule" class='title-one'>规则</router-link>
			<router-link to="/twoCode/exhibitors" class='title-two'>中奖名单</router-link>
		</div>
		<div class="right-main">
			<div class='right-main-top'>
				<p class='right-main-top1'>
					<span class='right-main-top-icon1'></span>
					<span class='top_two'>集字游戏是一个通过二维码扫一扫，集字兑奖促进消费的一个游戏。</span>
				</p>
				<p class='right-main-top2'>
					<span style="color:red">重要提示：</span><br>
					<span>1、活动时间可以选择长期，或者自定义时间。</span><br>
					<span>2、字数可以设置长度和抽中的百分比来控制用户中奖几率。</span>
					<span>3、奖项设置可以增加奖项。</span>
				</p>
			</div>
			<div class="right-main-bottom">
				<p class="title">基本信息：</p>
				<div class="gameRuleMessage">
					<span class="message-name star">规则名：</span>
					<input :disabled='ruleId!==null' class="message-value" type="text" placeholder="请输入规则名" v-model='name'>
				</div>
				<div class="gameRuleMessage">
					<span class="message-name">设置字数：</span>
					<select :disabled='ruleId!==null' class="message-value" style="width:127px;" v-model='fontNumText' @change='setNum'>
						<option v-for='item in fontNum'>{{item}}字</option>
					</select>
				</div>
				<div class="gameRuleMessage">
					<span class="message-name">设置获得率：</span>
					<div class="characterBox" v-for='(item,index) in parseInt(fontNumText.substring(0,fontNumText.length-1))'>
						<input :disabled='ruleId!==null' class="character" type="text" name="" maxlength="1" v-model='fontArr[index].word'><br>
						(<input class="probability" type="text" name="" v-model='fontArr[index].word_rate' maxlength="2">%)
					</div>
				</div>
			</div>
		</div>
		<div class="right-main">
			<div class="right-main-bottom">
				<p class="title">奖项设置：</p>

				<!-- X等奖 -->
				<div v-for='item in awardsNum' class="awardsBox">
					<div class="gameRuleMessage">
						<span class="message-name">{{item}}等奖：</span>
						<!-- 选择字数 -->
						<select :disabled='ruleId!==null' class="message-value" style="width:127px;margin-right: 35px;" v-model='awards[item-1].fontNum3' @change='setPrize_item(item)'>
							<option v-for='fontitem in fontNum2'>{{fontitem}}字</option>
						</select>
						<!-- 设置具体字 -->
						<select :disabled='ruleId!==null' v-for='worditem in parseInt(awards[item-1].fontNum3.substring(0,awards[item-1].fontNum3.length-1))' class="message-value" style="width: 50px;margin-right: 25px;" v-model='awards[item-1].prize_item[worditem-1]'>
							<option v-for='(optionitem,index) in fontArr' v-if='index<fontNum2'>{{optionitem.word}}</option>
						</select>
					</div>
					<div class="gameRuleMessage">
						<span class="message-name">是否有序：</span>
						<input :disabled='ruleId!==null' class="radios" type="radio" v-bind:name="'youxu'+item" v-bind:id='"yes"+item' v-model='awards[item-1].prize_is_sort' v-bind:value='1'><label class="radios" v-bind:for='"yes"+item'>有序</label>
						<input :disabled='ruleId!==null' class="radios" type="radio" v-bind:name="'youxu'+item" v-bind:id='"no"+item' v-model='awards[item-1].prize_is_sort' v-bind:value='0'><label class="radios" v-bind:for='"no"+item'>无序</label>
					</div>
					<div class="gameRuleMessage">
						<span class="message-name">奖品描述：</span>
						<input :disabled='ruleId!==null' class="message-value" style="width: 515px;" v-model='awards[item-1].prize_comment'></input>
					</div>
				</div>
				<input v-if='ruleId===null' class="addAwards" type="button" name="" value="+添加奖项" @click='addAwards'>

				<div class="buttonGroup">
					<input v-if='ruleId===null' class="delbutton" type="button" name="" value="提交" @click='confirm'>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import common from '../../common.js'
	import _ from 'underscore'
	import router from '../../router.js'
	import { mapState } from 'vuex'
	export default{
		data(){
			return{
				showWarn:false,
				warnText:null,
				fontNum:10,
				fontNum2:5,
				fontNum3:'5字',
				fontNumText:'5字',
				fontNumText3:'5字',
				name:null,
				fontArr:[
				{word:"",word_rate:null},
				{word:"",word_rate:null},
				{word:"",word_rate:null},
				{word:"",word_rate:null},
				{word:"",word_rate:null},
				{word:"",word_rate:null},
				{word:"",word_rate:null},
				{word:"",word_rate:null},
				{word:"",word_rate:null},
				{word:"",word_rate:null},
				],
				awards:[
				{
					prize_name:"一等奖",
					prize_item:[],
					prize_is_sort:0,
					prize_comment:'',
					fontNum3:'5字',
				},
				{
					prize_name:"二等奖",
					prize_item:[],
					prize_is_sort:1,
					prize_comment:'',
					fontNum3:'5字',
				},
				{
					prize_name:"三等奖",
					prize_item:[],
					prize_is_sort:0,
					prize_comment:'',
					fontNum3:'5字',
				},
				{
					prize_name:"四等奖",
					prize_item:[],
					prize_is_sort:1,
					prize_comment:'',
					fontNum3:'5字',
				},
				{
					prize_name:"五等奖",
					prize_item:[],
					prize_is_sort:0,
					prize_comment:'',
					fontNum3:'5字',
				},
				],
				awardsNum:1
			}
		},
		props:['datas'],
		methods:{
			//初始化
			init(){
				var self=this;
				if(self.ruleId!==null){
					var url='https://ym-a.top/cloud_code/GET/CollectWord/getRuleInfoById.do';
					var type='get';
					var data={
						id:self.ruleId
					};
					var success=function(res){
						self.name=res.name;
						self.fontNumText=res.number+'字';
						self.fontArr=res.rates;
						for(var i=0;i<res.items.length;i++){
							res.items[i].prize_item=res.items[i].prize_item.split('');
							res.items[i].fontNum3=res.items[i].prize_item.length+'字';
						}
						//console.log(res);
						self.awardsNum=res.items.length;
						self.awards=res.items;
					}
					common.Ajax(url,type,data,success)
				}
			},
			//设置字数
			setNum(){
				var self=this;
				self.fontNum2=parseInt(self.fontNumText.substring(0,self.fontNumText.length-1));
				for(var i=0;i<self.awards.length;i++){
					self.awards[i].fontNum3=parseInt(self.fontNumText.substring(0,self.fontNumText.length-1))-i;
					self.awards[i].fontNum3=self.awards[i].fontNum3+"字"
				}
			},
			//增加奖项
			addAwards(){
				var self=this;
				var thisAward=self.awards[self.awardsNum-1];
				var len=thisAward.prize_item.length;
				var shouldLen=parseInt(thisAward.fontNum3.substring(0,thisAward.fontNum3.length-1))
				//验证获奖字是否设置
				if(len<shouldLen){
					self.showWarn=true;
					self.warnText='请设置完整的获奖字'
					return
				}
				if(thisAward.prize_comment===''){
					self.showWarn=true;
					self.warnText='请输入奖品描述'
					return
				}
				if(self.awardsNum<5){
					self.awardsNum++
				}
			},
			//提交
			confirm(){
				var self=this;
				var checkRate=0;
				//输入验证
				if(self.name===null){
					self.showWarn=true;
					self.warnText='请输入规则名';
					return
				}
				//获得率验证
				for(var i=0;i<self.fontNum2;i++){
					if(self.fontArr[i].word===''){
						self.showWarn=true;
						self.warnText='请设置中奖字'
						return
					}
					if(self.fontArr[i].word_rate===null){
						self.showWarn=true;
						self.warnText='请设置获得率'
						return
					}
				}
				//验证是否有重复字
				for(var i=0;i<self.fontNum2;i++){
					var font=self.fontArr[i].word;
					for(var j=i+1;j<self.fontNum2;j++){
						if(font===self.fontArr[j].word){
							self.showWarn=true;
							self.warnText='不可设置重复的字'
							return
						}
					}
				}
				//验证获得率之和
				for(var i=0;i<self.fontNum2;i++){
					checkRate+=parseInt(self.fontArr[i].word_rate);
					if(checkRate>100){
						self.showWarn=true;
						self.warnText='获奖率之和不可以大于100'
						return
					}
				}
				//奖励验证
				var thisAward=self.awards[self.awardsNum-1];
				var len=thisAward.prize_item.length;
				var shouldLen=parseInt(thisAward.fontNum3.substring(0,thisAward.fontNum3.length-1))
				//验证获奖字是否设置
				if(len<shouldLen){
					self.showWarn=true;
					self.warnText='请设置完整的获奖字'
					return
				}
				if(thisAward.prize_comment===''){
					self.showWarn=true;
					self.warnText='请输入奖品描述'
					return
				}
				
					self.add();
				
				
			},

			//新增
			add(){
				var self=this;
				var url="https://ym-a.top/cloud_code/ADD/CollectWord/addCollectWordRule.do";
					var type='post';
					var rates=self.fontArr.slice(0,self.fontNum2);
					var items=self.awards.slice(0,self.awardsNum);
					if(typeof(self.awards[0].prize_item)!=='string'){
						for(var i=0;i<self.awardsNum;i++){
							self.awards[i].prize_item=self.awards[i].prize_item.join("")
						}
					}

					var thisData={
						name:self.name,
						vendorId:self.datas.vendorId,
						number:self.fontNum2,
						items:items,
						rates:rates

					}
					var data={json:JSON.stringify(thisData)};
					//console.log(thisData);
					var success=function(res){
						if(res.status===1){
							router.push({path:'/twoCode/gameRule'})
						}else{
							self.showWarn=true;
							self.warnText=res.msg;
						}
					}
					common.Ajax(url,type,data,success)
			},

			//设置中奖字
			setPrize_item(item){
				var self=this;
				var thisAward=self.awards[item-1];
				self.awards[item-1].prize_item.length=parseInt(thisAward.fontNum3.substring(0,thisAward.fontNum3.length-1))
			}
		},
		computed:mapState({
			ruleId:state=>state.c.ruleId
		}),
		created(){
			this.init()
		}
	}
</script>

<style scoped>
	.right-main{
		padding-bottom: 60px;
		
	}
	.right-main:last-of-type{
		max-height: 796px;
		overflow-y: scroll;
	}
	.right-main-top{
		width: 95%;
		margin: auto;
		padding-top: 60px;
		text-align: left;
		border-bottom: 1px solid #e8e8ec;
		padding-bottom: 20px;
	}
	.right-main-top-icon1{
		width: 18px;
		height: 18px;
		background: url("../../assets/img/icon_tishi.png") no-repeat;
		float: left;
		margin-right: 8px;
	}
	.right-main-top2{
		margin-left: 25px;
		color: #b3b3b3;
	}
	.right-main-bottom{
		width: 95%;
		margin:auto;
		text-align: left;
	}
	.gameRuleMessage{
		margin-top: 40px;
	}
	.message-name{
		display: inline-block;
		width: 120px;
		text-align: right;
		color: #000;
		vertical-align: middle;
		color: #7f7f7f;
	}
	.message-value{
		border: 1px solid #e8e8ec;
		width: 334px;
		height: 36px;
		padding-left: 5px;
		border-radius: 5px;
	}
	.title{
		margin-top: 60px;
		margin-left: 30px;
		height: 20px;
		line-height: 20px;
		font-size: 18px;
		font-weight: 500;
	}
	option{
		text-align: center;
	}
	.characterBox{
		display: inline-block;
		width: 90px;
		height: 80px;
		vertical-align: middle;
	}
	.character{
		display: inline-block;
		border: 1px solid #e8e8ec;
		width: 35px;
		height: 35px;
		padding-left: 5px;
		border-radius: 5px;
		margin: 20px 0 0 11px;
	}
	.probability{
		display: inline-block;
		border: 1px solid #e8e8ec;
		width: 35px;
		height: 25px;
		padding-left: 5px;
		border-radius: 5px;
		margin: auto;
		border-color: transparent;
		outline: none;
	}
	.addAwards{
		width: 300px;
		height: 40px;
		line-height: 40px;
		border: 1px dashed #00baff;
		background-color: #fff;
		border-radius: 8px;
		margin: 40px 0 0 80px;
		outline: none;
		color: #00baff;
	}
	.buttonGroup{
		margin: 40px 0 0 80px;
	}
	.delbutton{
		width: 100px;
		height: 40px;
	}
	.radios{
		display: inline-block;
		vertical-align: middle;
		margin: 0;
	}
	.awardsBox{
		padding: 10px 0 50px 0;
		border-radius: 8px;
	}
	.awardsBox:hover{
		background-color: #eefaff;
	}
</style>