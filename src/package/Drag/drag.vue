<template>
  <div
   class="x-drag"
   :class="{'x-drag-select': select}" 
   :style="{top:y+'px', left: x+'px'}"
    @mousedown.stop="move"
  >
    <slot></slot>
  </div>
</template>

<script>
import {casks} from '../utils/collision'

export default {
  name: 'xDrag',
  inject: ["stage"],
  data () {
    return {
      select: false,
      w: null,
      h: null,
      x: 0,
      y: 0
    }
  },
  mounted(){
    this.w = this.$el.offsetWidth
    this.h = this.$el.offsetWidth
  },
  watch:{
    'stage.selectStyle':{
      handler: function(n,o) {
        if(o.state === 'touch'){
          this.select = false
        }
        if(o.state === 'move' && casks(o, this)){
          this.select = true
        }
      },
      deep: true
    }
  },
  methods: {
    move(e){
      e.preventDefault()

      const touchX = e.pageX - this.x
      const touchY = e.pageY - this.y

      document.onmousemove = (ev) => {
        let x = ev.pageX - touchX
        let y = ev.pageY - touchY

        if(x < 0){
          x = 0
        }
        if(x > this.stage.w - this.w){
          x = this.stage.w - this.w
        }
        if(y < 0){
          y = 0
        }
        if(y > this.stage.h - this.h){
          y = this.stage.h - this.h
        }

        this.x = x
        this.y = y
      }

      document.onmouseup= () => {
        document.onmousemove = null
      }
    }
  },
};
</script>
