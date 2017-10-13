const detailBill={
	namespaced:true,
	state:{
		vendorId:null,
		time:null
	},
	mutations:{
		getVendorId(state,id){
			state.vendorId=id;
		},
		clearVendorId(state){
			state.vendorId=null
		},
		getTime(state,time){
			state.time=time
			console.log(time)
		}
	}
}

export default detailBill