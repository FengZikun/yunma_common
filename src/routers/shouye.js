 const shouye={
    path:'/enterprise',
    component: () => import('../components/shouye/enterprise.vue'),
    children:[
    {
      path:'',
      component: () => import('../components/shouye/shouyegaikuang.vue')
    },
    {
      path:'shouyegaikuang',
      component: () => import('../components/shouye/shouyegaikuang.vue')
    },
    {
      path:'enterprise_message',
      component: () => import('../components/shouye/enterprise_message.vue')
    },
    {
      path:'enterprise_cer',
      component: () => import('../components/shouye/enterprise_cer.vue')
    },
    {
      path:'en_public',
      component: () => import('../components/shouye/en_public.vue')
    },
    {
      path:'trade',
      component: () => import('../components/shouye/trade.vue')
    },
    {
      path:'safety',
      component: () => import('../components/shouye/safety.vue')
    },
    {
      path:'revise',
      component: () => import('../components/shouye/revise.vue')
    },
    {
      path:'enterprise_news',
      component: () => import('../components/shouye/enterprise_news.vue')
    },
    {
      path:'passward',
      component: () => import('../components/shouye/passward.vue')
    },
    {
      path:'account',
      component: () => import('../components/shouye/account.vue')
    },
    {
      path:'complete',
      component: () => import('../components/shouye/complete.vue')
    },
    ]
  }

  export default shouye