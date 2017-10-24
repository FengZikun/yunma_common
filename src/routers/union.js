
import union from '../components/union.vue'
import bulletinBoard from '../components/union/bulletin_board.vue'
import bill from '../components/union/bill.vue'
import wdBill from '../components/union/wdBill.vue'
import coupon from '../components/union/coupon.vue'
import newActivities from '../components/union/new_activities.vue'

const unionrouter={
	path:'/union',
	component:union,
	children:[
	{
		path:'',
		component:coupon
	},
	{
		path:'bulletinBoard',
		component:bulletinBoard
	},
	{
		path:'bill',
		component:bill
	},
	{
		path:'wdBill',
		component:wdBill
	},
	{
		path:'coupon',
		component:coupon
	},
	{
		path:'newActivities',
		component:newActivities
	}
	]
}

export default unionrouter