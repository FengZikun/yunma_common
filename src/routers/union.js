
const unionrouter={
	path:'/union',
	component: () => import('../components/union.vue'),
	children:[
	{
		path:'',
		component: () => import('../components/union/coupon.vue')
	},
	{
		path:'bulletinBoard',
		component: () => import('../components/union/bulletin_board.vue')
	},
	{
		path:'bill',
		component: () => import('../components/union/bill.vue')
	},
	{
		path:'wdBill',
		component: () => import('../components/union/wdBill.vue')
	},
	{
		path:'coupon',
		component: () => import('../components/union/coupon.vue')
	},
	{
		path:'newActivities',
		component: () => import('../components/union/new_activities.vue')
	}
	]
}

export default unionrouter