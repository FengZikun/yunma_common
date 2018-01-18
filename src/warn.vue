<template>
  <transition name="fade">
    <div class="mengban" v-show='showWarn'>
      <div class="warn">
        <div class="classifyHeader">
          <span style="display:block;height:48px;line-height:48px;">操作提示</span>
        </div>
        <div class="warnmain">
          {{warnText}}
        </div>
        <div class="warnbottom">
          <input type="button" class="delbutton" name="" value="确定" @click='hideWR'>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/javascript">
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
export default{
  data(){
    return{

    }
  },
  computed:{
    ...mapState({
      showWarn:state=>state.warn.showWarn,
      warnText:state=>state.warn.warnText
    })
  },
  methods:{
    ...mapMutations({
      hide:'warn/hide'
    }),

    hideWR(){
      this.hide()
    },

  }
}
</script>

<style type='scoped'>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


