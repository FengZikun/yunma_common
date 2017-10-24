/**
 * Created by LUO on 2017/3/21.
 */
 import shouye from './routers/shouye.js'
 import twoCodeRouter from './routers/twoCode.js'
 import product from './routers/product.js'
 import unionrouter from './routers/union.js'
 import login from './components/login.vue'
 import adminrouter from './routers/admin.js'

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

shouye,

twoCodeRouter,

product,

unionrouter

]
//导出路由集合
export default routes
