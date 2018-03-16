const warn = {
	namespaced:true,
	state:{
		showWarn:false,
		warnText:null
	},
	mutations:{
		show(state, text){
			state.showWarn = true;
			state.warnText = text;
		},
		hide(state){
			state.showWarn = false;
		}
	}
}

export default warn