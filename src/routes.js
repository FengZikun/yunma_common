/**
 * Created by LUO on 2017/3/21.
 */
 import shouye from './routers/shouye.js'
 import twoCodeRouter from './routers/twoCode.js'
 import product from './routers/product.js'
 import union from './components/union.vue'
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

adminrouter,

shouye,

twoCodeRouter,

product,

]
//导出路由集合
export default routes
