/**
 * Created by LUO on 2017/3/21.
 */
import enterprise from './components/enterprise.vue'
import child from './components/child.vue'
import twoCode from './components/two_code.vue'
import goods from './components/goods.vue'
import user from './components/user.vue'
import union from './components/union.vue'
import mall from './components/mall.vue'
import enterprise_order from './components/enterprise_order.vue'
import enterprise_message from './components/enterprise_message.vue'
import enterprise_cer from './components/enterprise_cer.vue'
import enterprise_news from './components/enterprise_news.vue'
import account from './components/account.vue'
import trade from './components/trade.vue'
import passward from './components/passward.vue'
import revise from './components/revise.vue'
import safety from './components/safety.vue'
import en_public from './components/en_public.vue'
import scan from './components/scan.vue'
import activity from './components/activity.vue'
import activitySu from './components/activitySu.vue'
import setup from './components/setup.vue'
import link from './components/link.vue'
import channel from './components/twoCode/channel.vue'
import material from './components/material.vue'
import pro_message from './components/pro_message.vue'
import recycle from './components/recycle.vue'
import groups from './components/groups.vue'
import gift from './components/gift.vue'
import gift_recy from './components/gift_recy.vue'
import classify from './components/classify.vue'
import gaikuang from './components/gaikuang.vue'
import briefCode from './components/twoCode/briefCode.vue'
import briefCodeSu from './components/twoCode/briefCodeSu.vue'
import chosePage from './components/twoCode/chosePage.vue'
import setupPage from './components/twoCode/setupPage.vue'
import detailPage from './components/twoCode/detailPage.vue'
import progaikuang from './components/product/gaikuang.vue'
import updataproduct from './components/product/updataproduct.vue'
import proinfo from './components/product/proinfo.vue'
import prodetail from './components/product/prodetail.vue'
import giftrecycle from './components/product/giftrecycle.vue'
import updatagift from './components/product/updatagift.vue'
import login from './components/login.vue'
// import app from './App.vue'
import admin from './components/admin.vue'
import admingaikuang from './components/admin/admingaikuang.vue'
import corporate from './components/admin/corporate_info.vue'
import accountinfo from './components/admin/account_info.vue'
import weixin from './components/admin/weixin.vue'
import coupon from './components/union/coupon.vue'
import bulletinBoard from './components/union/bulletin_board.vue'
import newActivities from './components/union/new_activities.vue'
import couponRule from './components/union/couponRule.vue'
import addCouponRule from './components/union/addCouponRule.vue'
import addOrder from './components/shouye/addOrder.vue'
import shouyegaikuang from './components/shouye/shouyegaikuang.vue'
import detail from './components/shouye/detail.vue'
import hongbao from './components/twoCode/hongbao.vue'
import addHB from './components/twoCode/addHB.vue'
import rule from './components/twoCode/rule.vue'
import addRule from './components/twoCode/addRule.vue'
import corporateDetail from './components/admin/corporateDetail.vue'
import addCorporate from './components/admin/addCorporate.vue'
import addActivity from './components/twoCode/addActivity.vue'
import analysis from './components/twoCode/analysis.vue'
import addAdmin from './components/admin/addAdmin.vue'
import sourceCode from './components/twoCode/sourceCode.vue'
import game from './components/twoCode/game.vue'
import gameRule from './components/twoCode/gameRule.vue'
import exhibitors from './components/twoCode/exhibitors.vue'
import addGame from './components/twoCode/addGame.vue'
import addGameRule from './components/twoCode/addGameRule.vue'
//编写路由集合
const routes = [
  {
    path:'/',
    redirect:'login'
  },
  {
    path:'/login', //路由路径这里是根路径
    component:login  //模板
  },
  {
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
    }
    ]
  },
  {
    path:'/enterprise', //路由路径这里是根路径
    component:enterprise,  //模板
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
      path:'enterprise_message', //路由路径这里是根路径
      component:enterprise_message  //模板
    },
    {
      path:'enterprise_cer', //路由路径这里是根路径
      component:enterprise_cer  //模板
    },
    {
      path:'en_public', //路由路径这里是根路径
      component:en_public  //模板
    },
    {
      path:'trade', //路由路径这里是根路径
      component:trade  //模板
    },
    {
      path:'safety', //路由路径这里是根路径
      component:safety  //模板
    },
    {
      path:'revise', //路由路径这里是根路径
      component:revise  //模板
    },
    {
      path:'enterprise_news', //路由路径这里是根路径
      component:enterprise_news  //模板
    },
    {
      path:'passward', //路由路径这里是根路径
      component:passward  //模板
    },
    {
      path:'account', //路由路径这里是根路径
      component:account  //模板
    },
    ]
  },
  {
    path:'/child', //路由路径这里是根路径
    component:child  //模板
  },
 {
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
    component: setupPage},
  {
    path:'chosePage',
    component:chosePage},
  {
    path:'detailPage',
    component:detailPage
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
    path:'channel', //路由路径这里是根路径
    component:channel  //模板
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
    path:'enterprise_order', //路由路径这里是根路径
    component:enterprise_order  //模板
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
  }
  ]
},
  {
    path:'/goods', //路由路径这里是根路径
    component:goods,  //模板
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
      path:'gift', //路由路径这里是根路径
      component:gift  //模板
    },
    {
      path:'groups', //路由路径这里是根路径
      component:groups  //模板
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
    path:'/user', //路由路径这里是根路径
    component:user  //模板
  },
  {
    path:'/union', //路由路径这里是根路径
    component:union,  //模板
    children:[
    {
      path:'',
      component:coupon
    },
    {
      path:'coupon',
      component:coupon
    },
    {
      path:'bulletinBoard',
      component:bulletinBoard
    },
    {
      path:'newActivities',
      component:newActivities
    },
    {
      path:'couponRule',
      component:couponRule
    },
    {
      path:'addCouponRule',
      component:addCouponRule
    }
    ]
  },
  {
    path:'/mall', //路由路径这里是根路径
    component:mall  //模板
  },
  {
    path:'/setup', //路由路径这里是根路径
    component:setup  //模板
  },
  {
    path:'/link', //路由路径这里是根路径
    component:link  //模板
  },
  {
    path:'/material', //路由路径这里是根路径
    component:material  //模板
  },
  {
    path:'/gift_recy', //路由路径这里是根路径
    component:gift_recy  //模板
  },
  {
    path:'/classify', //路由路径这里是根路径
    component:classify  //模板
  },
]
//导出路由集合
export default routes
