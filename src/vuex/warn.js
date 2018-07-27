const warn = {
	namespaced:true,
	state:{
		showWarn:false,
		showLoading:false,
		warnText:null
	},
	mutations:{
		show(state, text){
			state.showWarn = true;
			state.warnText = text;
		},
		hide(state){
			state.showWarn = false;
		},
		loading(state){
			state.showLoading = true;
			console.log(state.showLoading)
		},
		close(state){
			state.showLoading = false;
		}
	}
}

export default warn