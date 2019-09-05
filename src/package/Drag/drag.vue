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
import emit from '../utils/emit'

export default {
  name: 'xDrag',
  inject: ["stage"],
  mixins: [emit],
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

    this.multipleNotice()
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
    multipleNotice(){
        let touchX
        let touchY
        this.$on('multipleDown', (e) => {
          if(this.select){
            touchX = e.pageX - this.x
            touchY = e.pageY - this.y
          }
        })
        this.$on('multipleMove', (ev) => {
          if(this.select){
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
        })
        this.$on('multipleUp', (ev) => {
          touchX = null
          touchY = null
        })
    },
    move(e){
      e.preventDefault()

      this.select = true
      this.dispatch('xDragGroup', 'dragDown', e)

      document.onmousemove = (ev) => {
          this.dispatch('xDragGroup', 'dragMove', ev)
      }

      document.onmouseup= (e) => {
        this.dispatch('xDragGroup', 'dragUp', e)
        this.select = false
        document.onmousemove = null
      }
    }
  },
};
</script>
