import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const picAd={
	state: {
		picAdNum:0,
		test1: "a",
		test2: "b",
		test3: "c",
		test4: "d"
	},
}
const codeType={
	state: {
		type:null
	},
	mutations:{
		changeType(state,type){
			//溯源码
			if(type=='a'){
				state.type=0
				return
			};
			//防伪码
			if(type=='b'){
				state.type=1
				return
			}
		}
	}
}
const store = new Vuex.Store({
  modules: {
  	a:picAd,
  	b:codeType
  }
})

export default store
