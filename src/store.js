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
const gameRule={
	state: {
		ruleId:null
	},
	mutations: {
		getId(state,type){
			if(type==='add'){
				state.ruleId=null
			}else{
				state.ruleId=type;
			}
		}
	}
}
const store = new Vuex.Store({
  modules: {
  	a:picAd,
  	b:codeType,
  	c:gameRule
  }
})

export default store
