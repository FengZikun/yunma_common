import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes,//挂载路由集合
  scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
})

router.beforeEach((to,from,next)=>{
	if(to.path!=='/login'){
		if(sessionStorage.getItem('vendorId')===null){
			next({path:'/login'})
		}
	}
	next();
})
//导出router对象、
export default router
