import Vue from 'vue'
import Vuex from 'vuex'
import banner1 from './vuex/banner1.js'
import picAd from './vuex/picAd.js'
import codeType from './vuex/codeType.js'
import gameRule from './vuex/gameRule.js'
import signIn from './vuex/signIn.js'
import IntegralUseRule from './vuex/IntegralUseRule.js'
import userDetail from './vuex/userDetail.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		a:picAd,
		b:codeType,
		c:gameRule,
		signIn:signIn,
		banner1:banner1,
		IntegralUseRule:IntegralUseRule,
		userDetail:userDetail
	}
})

export default store
