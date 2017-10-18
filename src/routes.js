/**
 * Created by LUO on 2017/3/21.
 */
 import enterprise from './components/shouye/enterprise.vue'
 import child from './components/child.vue'
 import twoCodeRouter from './routers/twoCode.js'
 import goods from './components/goods.vue'
 import user from './components/user.vue'
 import union from './components/union.vue'
 import mall from './components/mall.vue'
 import enterprise_message from './components/shouye/enterprise_message.vue'
 import enterprise_cer from './components/shouye/enterprise_cer.vue'
 import enterprise_news from './components/shouye/enterprise_news.vue'
 import shouyegaikuang from './components/shouye/shouyegaikuang.vue'
 import complete from './components/shouye/complete.vue'
 import account from './components/account.vue'
 import trade from './components/trade.vue'
 import passward from './components/passward.vue'
 import revise from './components/revise.vue'
 import safety from './components/safety.vue'
 import en_public from './components/en_public.vue'
 import setup from './components/setup.vue'
 import link from './components/link.vue'
 import material from './components/material.vue'
 import pro_message from './components/pro_message.vue'
 import recycle from './components/recycle.vue'
 import groups from './components/groups.vue'
 import gift from './components/gift.vue'
 import gift_recy from './components/gift_recy.vue'
 import classify from './components/classify.vue'
 import progaikuang from './components/product/gaikuang.vue'
 import updataproduct from './components/product/updataproduct.vue'
 import proinfo from './components/product/proinfo.vue'
 import prodetail from './components/product/prodetail.vue'
 import giftrecycle from './components/product/giftrecycle.vue'
 import updatagift from './components/product/updatagift.vue'
 import login from './components/login.vue'
 import adminrouter from './routers/admin.js'
 import bulletinBoard from './components/union/bulletin_board.vue'
 import bill from './components/union/bill.vue'
 import wdBill from './components/union/wdBill.vue'

//编写路由集合
const routes = [
{
  path:'/',
  redirect:'login'
},
{
    path:'/login',
    component:login
  },


  adminrouter,

  {
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
  },
  {
    path:'/child',
    component:child
  },
  twoCodeRouter,
  {
    path:'/goods',
    component:goods,
    children:[
    {
      path:'',
      component:progaikuang
    },
    {
      path:'progaikuang',
      component:progaikuang
    },
    {
      path:'pro_message',
      component:pro_message,
    },
    {
      path:'updataproduct',
      component:updataproduct
    },
    {
      path:'classify',
      component:classify
    },
    {
      path:'proinfo',
      component:proinfo
    },
    {
      path:'prodetail',
      component:prodetail
    },
    {
      path:'recycle',
      component:recycle
    },
    {
      path:'gift',
      component:gift
    },
    {
      path:'groups',
      component:groups
    },
    {
      path:'giftrecycle',
      component:giftrecycle
    },
    {
      path:'updatagift',
      component:updatagift
    }
    ]
  },
  {
    path:'/user',
    component:user
  },
  {
    path:'/union',
    component:union,
    children:[
    {
      path:'',
      component:bill
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
    }
    ]
  },
  {
    path:'/mall',
    component:mall
  },
  {
    path:'/setup',
    component:setup
  },
  {
    path:'/link',
    component:link
  },
  {
    path:'/material',
    component:material
  },
  {
    path:'/gift_recy',
    component:gift_recy
  },
  {
    path:'/classify',
    component:classify
  },
  ]
//导出路由集合
export default routes
