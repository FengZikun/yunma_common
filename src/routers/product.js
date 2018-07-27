
 const product={
    path:'/goods',
    component: () => import('../components/goods.vue'),
    children:[
    {
      path:'',
      component: () => import('../components/product/gaikuang.vue')
    },
    {
      path:'progaikuang',
      component: () => import('../components/product/gaikuang.vue')
    },
    {
      path:'pro_message',
      component: () => import('../components/product/pro_message.vue'),
    },
    {
      path:'updataproduct',
      component: () => import('../components/product/updataproduct.vue')
    },
    {
      path:'classify',
      component: () => import('../components/product/classify.vue')
    },
    {
      path:'proinfo',
      component: () => import('../components/product/proinfo.vue')
    },
    {
      path:'prodetail',
      component: () => import('../components/product/prodetail.vue')
    },
    {
      path:'recycle',
      component: () => import('../components/product/recycle.vue')
    },
    {
      path:'gift',
      component: () => import('../components/product/gift.vue')
    },
    {
      path:'groups',
      component: () => import('../components/product/groups.vue')
    },
    {
      path:'giftrecycle',
      component: () => import('../components/product/giftrecycle.vue')
    },
    {
      path:'updatagift',
      component: () => import('../components/product/updatagift.vue')
    },
	{
	path:'/classify',
	component: () => import('../components/product/classify.vue')
	},
    ]
  }

  export default product