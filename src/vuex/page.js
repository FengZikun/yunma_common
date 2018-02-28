const page = {
	namespaced:true,
	state:{
		totalPage:[],
		currentPage:'',
		totalPages:'',
	},
	mutations:{
		getData(state, data){
			state.currentPage = data.currentPage;
			state.totalPages = data.totalPages;
			state.totalPage = data.totalPage;
		},
		change(state, page){
			state.currentPage = page
		}
	}
}

export default page