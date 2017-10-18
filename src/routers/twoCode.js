import twoCode from '../components/two_code.vue'
import hongbao from '../components/twoCode/hongbao.vue'
import addHB from '../components/twoCode/addHB.vue'
import rule from '../components/twoCode/rule.vue'
import addRule from '../components/twoCode/addRule.vue'
import addIntegralRule from '../components/twoCode/addIntegralRule.vue'
import IntegralUseRule from '../components/twoCode/IntegralUseRule.vue'
import addIntegralUseRule from '../components/twoCode/addIntegralUseRule.vue'
import userInfomation from '../components/twoCode/userInfomation.vue'
import addActivity from '../components/twoCode/addActivity.vue'
import analysis from '../components/twoCode/analysis.vue'
import signIn from '../components/twoCode/signIn.vue'
import sourceCode from '../components/twoCode/sourceCode.vue'
import game from '../components/twoCode/game.vue'
import gameRule from '../components/twoCode/gameRule.vue'
import exhibitors from '../components/twoCode/exhibitors.vue'
import addGame from '../components/twoCode/addGame.vue'
import addGameRule from '../components/twoCode/addGameRule.vue'
import userDetail from '../components/twoCode/userDetail.vue'
import exchange from '../components/twoCode/exchange.vue'
import briefCode from '../components/twoCode/briefCode.vue'
import briefCodeSu from '../components/twoCode/briefCodeSu.vue'
import chosePage from '../components/twoCode/chosePage.vue'
import setupPage from '../components/twoCode/setupPage.vue'
import detailPage from '../components/twoCode/detailPage.vue'
import detailPage2 from '../components/twoCode/detailPage2.vue'
import channel from '../components/twoCode/channel.vue'
import enterprise_order from '../components/shouye/enterprise_order.vue'
import gaikuang from '../components/gaikuang.vue'
import activity from '../components/activity.vue'
import activitySu from '../components/activitySu.vue'
import scan from '../components/scan.vue'
import addOrder from '../components/shouye/addOrder.vue'
import detail from '../components/shouye/detail.vue'

const twoCodeRouter={
	path:'/twoCode',
	component:twoCode,
	children:[
	{
		path:'',
		component:gaikuang
	},
	{
		path:'gaikuang',
		component:gaikuang
	},
	{
		path:'briefCode',
		component: briefCode
	},
	{
		path:'briefCodeSu',
		component: briefCodeSu
	},
	{
		path:'setupPage',
		component: setupPage
	},
	{
		path:'chosePage',
		component:chosePage
	},
	{
		path:'detailPage',
		component:detailPage
	},
	{
		path:'detailPage2',
		component:detailPage2
	},
	{
		path:'activity',
		component:activity
	},
	{
		path:'activitySu',
		component:activitySu
	},
	{
		path:'scan',
		component:scan
	},
	{
		path:'channel',
		component:channel
	},
	{
		path:'hongbao',
		component:hongbao
	},
	{
		path:'addHB',
		component:addHB
	},
	{
		path:'rule',
		component:rule
	},
	{
		path:'addRule',
		component:addRule
	},
	{
		path:'enterprise_order',
		component:enterprise_order
	},
	{
		path:'addOrder',
		component:addOrder
	},
	{
		path:'detail',
		component:detail
	},
	{
		path:'addActivity',
		component:addActivity
	},
	{
		path:'analysis',
		component:analysis
	},
	{
		path:'sourceCode',
		component:sourceCode
	},
	{
		path:'game',
		component:game
	},
	{
		path:'gameRule',
		component:gameRule
	},
	{
		path:'exhibitors',
		component:exhibitors
	},
	{
		path:'addGame',
		component:addGame
	},
	{
		path:'addGameRule',
		component:addGameRule
	},
	{
		path:'signIn',
		component:signIn
	},
	{
		path:'addIntegralRule',
		component:addIntegralRule
	},
	{
		path:'IntegralUseRule',
		component:IntegralUseRule
	},
	{
		path:'addIntegralUseRule',
		component:addIntegralUseRule
	},
	{
		path:'userInfomation',
		component:userInfomation
	},
	{
		path:'userDetail',
		component:userDetail
	},
	{
		path:'exchange',
		component:exchange
	}
	]
}

export default twoCodeRouter