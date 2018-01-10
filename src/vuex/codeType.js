const codeType={
	namespaced:true,
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
};

export default codeType