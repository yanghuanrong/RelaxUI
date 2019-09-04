<template>
  <div
   class="x-drag" 
   :style="{top:y+'px', left: x+'px'}"
    @mousedown.stop="move"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'xDrag',
  inject: ["stage"],
  data () {
    return {
      select: false,
      stageW: null,
      stageH: null,
      w: null,
      h: null,
      x: 0,
      y: 0
    }
  },
  mounted(){
    this.stageW = this.stage.$el.offsetWidth
    this.stageH = this.stage.$el.offsetHeight
    this.w = this.$el.offsetWidth
    this.h = this.$el.offsetWidth
  },
  methods: {
    move(e){
      const touchX = e.pageX - this.x
      const touchY = e.pageY - this.y

      document.onmousedown = (e) => {
        e.preventDefault()
      }

      document.onmousemove = (ev) => {
        let x = ev.pageX - touchX
        let y = ev.pageY - touchY

        if(x < 0){
          x = 0
        }
        if(x > this.stageW - this.w){
          x = this.stageW - this.w
        }
        if(y < 0){
          y = 0
        }
        if(y > this.stageH - this.h){
          y = this.stageH - this.h
        }

        this.x = x
        this.y = y
      }

      document.onmouseup= () => {
        document.onmousemove = null
        document.onmousedown = null
      }
    }
  },
};
</script>
