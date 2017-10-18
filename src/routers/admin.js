import admin from '../components/admin.vue'
import admingaikuang from '../components/admin/admingaikuang.vue'
import corporate from '../components/admin/corporate_info.vue'
import accountinfo from '../components/admin/account_info.vue'
import detailBill from '../components/admin/detailBill.vue'
import weixin from '../components/admin/weixin.vue'
import coupon from '../components/admin/coupon.vue'
import checkQualification from '../components/admin/checkQualification.vue'
import checkPending from '../components/admin/checkPending.vue'
import corporateDetail from '../components/admin/corporateDetail.vue'
import addCorporate from '../components/admin/addCorporate.vue'
import addAdmin from '../components/admin/addAdmin.vue'
import newActivities from '../components/admin/new_activities.vue'
import couponRule from '../components/admin/couponRule.vue'
import addCouponRule from '../components/admin/addCouponRule.vue'
import enterpriseBill from '../components/admin/enterprise_bill.vue'

const adminrouter={
	path:'/admin', //路由路径这里是根路径
    component:admin,  //模板
    children:[
    {
      path:'',
      component:admingaikuang
    },
    {
      path:'admingaikuang',
      component:admingaikuang
    },
    {
      path:'corporate',
      component:corporate
    },
    {
      path:'accountinfo',
      component:accountinfo
    },
    {
      path:'weixin',
      component:weixin
    },
    {
      path:'corporateDetail',
      component:corporateDetail
    },
    {
      path:'addCorporate',
      component:addCorporate
    },
    {
      path:'addAdmin',
      component:addAdmin
    },
    {
      path:'couponRule',
      component:couponRule
    },

    {
      path:'addCouponRule',
      component:addCouponRule
    },
    {
      path:'coupon',
      component:coupon
    },
    {
      path:'newActivities',
      component:newActivities
    },
    {
      path:'enterpriseBill',
      component:enterpriseBill
    },
    {
      path:'detailBill',
      component:detailBill
    },
    {
      path:'checkPending',
      component:checkPending
    },
    {
      path:'checkQualification',
      component:checkQualification
    },
    ]
}

export default adminrouter