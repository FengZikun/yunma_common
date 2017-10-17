const vendorId={
	namespaced: true,
	state:{
		vendorId:null,
		checkComment:null
	},
	mutations:{
		getVendorId(state,id){
			state.vendorId=id;
		},
		getCheckComment(state,data){
			state.checkComment=data;
		}
	}
}

export default vendorId