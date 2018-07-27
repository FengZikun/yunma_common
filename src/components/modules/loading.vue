<template>
	<div>
		<div class="mengban" v-show='showLoading' @click='hideLoading'>

		</div>
	</div>
	
</template>

<script type="text/javascript">
	import {mapState} from 'vuex'
	import {mapMutations} from 'vuex'
	export default{
		data () {
			return{

			}
		},
		computed:{
			...mapState({
				showLoading:state=>state.warn.showLoading
			})
		},
		methods: {
			...mapMutations({
				close:'warn/close'
			}),

			hideLoading(){
				this.close();
			}

		}
	}
</script>

<style scoped>

</style>