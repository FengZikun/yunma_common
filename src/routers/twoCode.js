const twoCodeRouter={
	path:'/twoCode',
	component: () => import('../components/two_code.vue'),
	children:[
	{
		path:'',
		component: () => import('../components/twoCode/gaikuang.vue')
	},
	{
		path:'gaikuang',
		component: () => import('../components/twoCode/gaikuang.vue')
	},
	{
		path:'briefCode',
		component: () => import('../components/twoCode/briefCode.vue') 
	},
	{
		path:'briefCodeSu',
		component: () => import('../components/twoCode/briefCodeSu.vue')
	},
	{
		path:'setupPage',
		component: () => import('../components/twoCode/setupPage.vue')
	},
	{
		path:'chosePage',
		component: () => import('../components/twoCode/chosePage.vue')
	},
	{
		path:'detailPage',
		component: () => import('../components/twoCode/detailPage.vue')
	},
	{
		path:'detailPage2',
		component: () => import('../components/twoCode/detailPage2.vue')
	},
	{
		path:'activity',
		component: () => import('../components/twoCode/activity.vue')
	},
	{
		path:'activitySu',
		component: () => import('../components/twoCode/activitySu.vue')
	},
	{
		path:'scan',
		component: () => import('../components/twoCode/scan.vue')
	},
	{
		path:'scanSu',
		component: () => import('../components/twoCode/scanSu.vue')
	},
	{
		path:'suggestion',
		component: () => import('../components/twoCode/suggestion.vue')
	},
	{
		path:'channel',
		component: () => import('../components/twoCode/channel.vue')
	},
	{
		path:'hongbao',
		component: () => import('../components/twoCode/hongbao.vue')
	},
	{
		path:'addHB',
		component: () => import('../components/twoCode/addHB.vue')
	},
	{
		path:'rule',
		component: () => import('../components/twoCode/rule.vue')
	},
	{
		path:'addRule',
		component: () => import('../components/twoCode/addRule.vue')
	},
	{
		path:'enterprise_order',
		component: () => import('../components/twoCode/enterprise_order.vue')
	},
	{
		path:'addOrder',
		component: () => import('../components/twoCode/addOrder.vue')
	},
	{
		path:'detail',
		component: () => import('../components/twoCode/detail.vue')
	},
	{
		path:'addActivity',
		component: () => import('../components/twoCode/addActivity.vue')
	},
	{
		path:'analysis',
		component: () => import('../components/twoCode/analysis.vue')
	},
	{
		path:'sourceCode',
		component: () => import('../components/twoCode/sourceCode.vue')
	},
	{
		path:'game',
		component: () => import('../components/twoCode/game.vue')
	},
	{
		path:'gameRule',
		component: () => import('../components/twoCode/gameRule.vue')
	},
	{
		path:'exhibitors',
		component: () => import('../components/twoCode/exhibitors.vue')
	},
	{
		path:'addGame',
		component: () => import('../components/twoCode/addGame.vue')
	},
	{
		path:'addGameRule',
		component: () => import('../components/twoCode/addGameRule.vue')
	},
	{
		path:'signIn',
		component: () => import('../components/twoCode/signIn.vue')
	},
	{
		path:'addIntegralRule',
		component: () => import('../components/twoCode/addIntegralRule.vue')
	},
	{
		path:'IntegralUseRule',
		component: () => import('../components/twoCode/IntegralUseRule.vue')
	},
	{
		path:'addIntegralUseRule',
		component: () => import('../components/twoCode/addIntegralUseRule.vue')
	},
	{
		path:'userInfomation',
		component: () => import('../components/twoCode/userInfomation.vue')
	},
	{
		path:'userDetail',
		component: () => import('../components/twoCode/userDetail.vue')
	},
	{
		path:'exchange',
		component: () => import('../components/twoCode/exchange.vue')
	}
	]
}

export default twoCodeRouter