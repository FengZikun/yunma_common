 import goods from '../components/goods.vue'
 import groups from '../components/product/groups.vue'
 import gift from '../components/product/gift.vue'
 import classify from '../components/product/classify.vue'
 import progaikuang from '../components/product/gaikuang.vue'
 import updataproduct from '../components/product/updataproduct.vue'
 import proinfo from '../components/product/proinfo.vue'
 import prodetail from '../components/product/prodetail.vue'
 import giftrecycle from '../components/product/giftrecycle.vue'
 import updatagift from '../components/product/updatagift.vue'
 import pro_message from '../components/product/pro_message.vue'
 import recycle from '../components/product/recycle.vue'

 const product={
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
    },
	{
	path:'/classify',
	component:classify
	},
    ]
  }

  export default product