const vendorId={
	namespaced: true,
	state:{
		vendorId:null
	},
	mutations:{
		getVendorId(state,id){
			state.vendorId=id;
		}
	}
}

export default vendorId