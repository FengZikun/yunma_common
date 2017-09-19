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
};

export default gameRule