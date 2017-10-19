 import enterprise from '../components/shouye/enterprise.vue'
 import enterprise_message from '../components/shouye/enterprise_message.vue'
 import enterprise_cer from '../components/shouye/enterprise_cer.vue'
 import enterprise_news from '../components/shouye/enterprise_news.vue'
 import shouyegaikuang from '../components/shouye/shouyegaikuang.vue'
 import complete from '../components/shouye/complete.vue'
 import en_public from '../components/shouye/en_public.vue'
 import trade from '../components/shouye/trade.vue'
 import safety from '../components/shouye/safety.vue'
 import revise from '../components/shouye/revise.vue'
 import passward from '../components/shouye/passward.vue'
 import account from '../components/shouye/account.vue'
 const shouye={
    path:'/enterprise',
    component:enterprise,
    children:[
    {
      path:'',
      component:shouyegaikuang
    },
    {
      path:'shouyegaikuang',
      component:shouyegaikuang
    },
    {
      path:'enterprise_message',
      component:enterprise_message
    },
    {
      path:'enterprise_cer',
      component:enterprise_cer
    },
    {
      path:'en_public',
      component:en_public
    },
    {
      path:'trade',
      component:trade
    },
    {
      path:'safety',
      component:safety
    },
    {
      path:'revise',
      component:revise
    },
    {
      path:'enterprise_news',
      component:enterprise_news
    },
    {
      path:'passward',
      component:passward
    },
    {
      path:'account',
      component:account
    },
    {
      path:'complete',
      component:complete
    },
    ]
  }

  export default shouye