const IntegralUseRule={
	namespaced: true,
	state:{
		isNew:true,
		ruleId:null,
	},
	mutations:{
		reset(state,id){
			state.isNew=false;
			state.ruleId=id;
			console.log(state.ruleId)
		},
		addNew(state){
			state.isNew=true;
			state.ruleId=null;
		}
	}
}

export default IntegralUseRule
