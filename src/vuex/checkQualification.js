const checkQualification={
	namespaced:true,
	state:{
		userId:null
	},
	mutations:{
		getUserId(state,id){
			state.userId=id;
		}
	}
}

export default checkQualification