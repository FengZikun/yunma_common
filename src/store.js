import Vue from 'vue'
import Vuex from 'vuex'
import banner1 from './vuex/banner1.js'
import picAd from './vuex/picAd.js'
import codeType from './vuex/codeType.js'
import gameRule from './vuex/gameRule.js'
import signIn from './vuex/signIn.js'
import IntegralUseRule from './vuex/IntegralUseRule.js'
import userDetail from './vuex/userDetail.js'
import vendorId from './vuex/vendorId.js'
import detailBill from './vuex/detailBill.js'
import checkQualification from './vuex/checkQualification.js'
import warn from './vuex/warn.js'
import page from './vuex/page.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		a:picAd,
		b:codeType,
		c:gameRule,
		signIn:signIn,
		banner1:banner1,
		IntegralUseRule:IntegralUseRule,
		userDetail:userDetail,
		vendorId:vendorId,
		detailBill:detailBill,
		checkQualification:checkQualification,
		warn:warn,
		page:page
	}
})

export default store

