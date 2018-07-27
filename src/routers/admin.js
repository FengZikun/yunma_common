
const adminrouter={
	path:'/admin', //路由路径这里是根路径
    component: () => import('../components/admin.vue'),  //模板
    children:[
    {
      path:'',
      component: () => import('../components/admin/admingaikuang.vue')
    },
    {
      path:'admingaikuang',
      component: () => import('../components/admin/admingaikuang.vue')
    },
    {
      path:'corporate',
      component: () => import('../components/admin/corporate_info.vue')
    },
    {
      path:'accountinfo',
      component: () => import('../components/admin/account_info.vue')
    },
    {
      path:'weixin',
      component: () => import('../components/admin/weixin.vue')
    },
    {
      path:'corporateDetail',
      component: () => import('../components/admin/corporateDetail.vue')
    },
    {
      path:'addCorporate',
      component: () => import('../components/admin/addCorporate.vue')
    },
    {
      path:'addAdmin',
      component: () => import('../components/admin/addAdmin.vue')
    },
    {
      path:'couponRule',
      component: () => import('../components/admin/couponRule.vue')
    },

    {
      path:'addCouponRule',
      component: () => import('../components/admin/coupon.vue')
    },
    {
      path:'coupon',
      component: () => import('../components/admin/checkQualification.vue')
    },
    {
      path:'newActivities',
      component: () => import('../components/admin/checkPending.vue')
    },
    {
      path:'enterpriseBill',
      component: () => import('../components/admin/new_activities.vue')
    },
    {
      path:'detailBill',
      component: () => import('../components/admin/detailBill.vue')
    },
    {
      path:'checkPending',
      component: () => import('../components/admin/addCouponRule.vue')
    },
    {
      path:'checkQualification',
      component: () => import('../components/admin/enterprise_bill.vue')
    },
    ]
}

export default adminrouter