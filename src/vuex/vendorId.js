const vendorId={
	namespaced: true,
	state:{
		vendorId:null,
		checkComment:null,
		userId:null,
		isTest:null
	},
	mutations:{
		getVendorId(state,id){
			state.vendorId=id;
		},
		getUserId(state,id){
			state.userId=id;
		},
		getCheckComment(state,data){
			state.checkComment=data;
		},
		ifTest(state,data){
			state.isTest=data;
		}
	}
}

export default vendorId