const userDetail={
	namespaced: true,
	state:{
		playerId:null,
	},
	mutations:{
		checkDetail(state,id){
			state.playerId=id;
		}
	}
};

export default userDetail