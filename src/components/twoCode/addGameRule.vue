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
					<input type="button" name="" value="确定" @click='showWarn=false'>
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
					<span class="message-name">规则名：</span>
					<input class="message-value" type="text" placeholder="请输入规则名">
				</div>
				<div class="gameRuleMessage">
					<span class="message-name">设置字数：</span>
					<select class="message-value" style="width:127px;" v-model='fontNumText' @change='setNum'>
						<option v-for='item in fontNum'>{{item}}字</option>
					</select>
				</div>
				<div class="gameRuleMessage">
					<span class="message-name">设置获得率：</span>
					<div class="characterBox" v-for='(item,index) in parseInt(fontNumText.substring(0,fontNumText.length-1))'>
						<input class="character" type="text" name="" maxlength="1" v-model='fontArr[index].font'><br>
						(<input class="probability" type="text" name="" v-model='fontArr[index].probability'>%)
					</div>
				</div>
			</div>
		</div>
		<div class="right-main">
			<div class="right-main-bottom">
				<p class="title">奖项设置：</p>
				<div>
					<div class="gameRuleMessage">
						<span class="message-name">一等奖：</span>
						<select class="message-value" style="width:127px;margin-right: 35px;" v-model='fontNumText3'>
							<option v-for='item in fontNum2'>{{item}}字</option>
						</select>
						<select v-for='item in parseInt(fontNumText3.substring(0,fontNumText3.length-1))' class="message-value" style="width: 50px;margin-right: 25px;">
							<option v-for='(item,index) in fontArr' v-if='index<fontNum2'>{{item.font}}</option>
						</select>
					</div>
					<div class="gameRuleMessage">
						<span class="message-name">奖品描述：</span>
						<input class="message-value" style="width: 515px;"></input>
					</div>
				</div>

				<!-- <div>
					<div class="gameRuleMessage">
						<span class="message-name">一等奖：</span>
						<select class="message-value" style="width:127px;margin-right: 35px;" v-model='fontNumText3'>
							<option v-for='item in fontNum2'>{{item}}字</option>
						</select>
						<select v-for='item in parseInt(fontNumText3.substring(0,fontNumText3.length-1))' class="message-value" style="width: 50px;margin-right: 25px;">
							<option v-for='(item,index) in fontArr' v-if='index<fontNum2'>{{item.font}}</option>
						</select>
					</div>
					<div class="gameRuleMessage">
						<span class="message-name">奖品描述：</span>
						<input class="message-value" style="width: 515px;"></input>
					</div>
				</div> -->
				<input class="addAwards" type="button" name="" value="+添加奖项" @click='addAwards'>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
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
				fontArr:[
				{font:"",probability:null},
				{font:"",probability:null},
				{font:"",probability:null},
				{font:"",probability:null},
				{font:"",probability:null},
				{font:"",probability:null},
				{font:"",probability:null},
				{font:"",probability:null},
				{font:"",probability:null},
				{font:"",probability:null},
				],
				awardsNum:1
			}
		},
		methods:{
			//设置字数
			setNum(){
				var self=this;
				self.fontNum2=parseInt(self.fontNumText.substring(0,self.fontNumText.length-1));
				self.fontNumText3=self.fontNumText
			},
			addAwards(){
				var self=this;
				if(self.awardsNum<5){
					self.awardsNum++
				}
			}
		}
	}
</script>

<style scoped>
	.right-main{
		padding-bottom: 60px
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

</style>