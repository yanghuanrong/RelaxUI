<template>
  <div class='x-drag-group' @mousedown="move">
    <slot></slot>
    <div class="x-select" :style="{
      width: selectStyle.w + 'px',
      height: selectStyle.h + 'px',
      top: selectStyle.y + 'px',
      left: selectStyle.x + 'px',
    }" v-show="isTouch"></div>
  </div>
</template>
<script>
export default {
  name: 'xDragGroup',
  provide () {
    return {
      stage: this
    }
  },
  data(){
    return {
      selectStyle: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
      },
      isTouch: false,
      w: null,
      h: null
    }
  },
  mounted(){
    this.w = this.$el.offsetWidth
    this.h = this.$el.offsetHeight
  },
  methods:{
    move(e){
      this.isTouch = true

      const touchX = e.pageX
      const touchY = e.pageY

      this.selectStyle.x = touchX - this.$el.offsetLeft
      this.selectStyle.y = touchY - this.$el.offsetTop
      
      const touchW = this.selectStyle.x
      const touchH = this.selectStyle.y
      
      document.onmousedown = (e) => {
        e.preventDefault()
      }

      document.onmousemove = (ev) => {
        let w = ev.pageX - touchX
        let h = ev.pageY - touchY
        
        if(w > 0){
          if(w > this.w - this.selectStyle.x){
            w = this.w - this.selectStyle.x
          }
          this.selectStyle.w = w
        } else {
          w = Math.abs(w)
          let x = touchW - w
          if(x < 0){
            w = w + x
            x = 0
          }
          this.selectStyle.x = x
          this.selectStyle.w = w
        }

        if(h > 0){
          if(h > this.h - this.selectStyle.y){
            h = this.h - this.selectStyle.y
          }
          this.selectStyle.h = h
        } else {
          h = Math.abs(h)
          let y = touchH - h
          if(y < 0){
            h = h + y
            y = 0
          }
          this.selectStyle.y = y
          this.selectStyle.h = h
        }
    
      }

      document.onmouseup= () => {
        
        this.isTouch = false

        this.selectStyle.w = 0
        this.selectStyle.h = 0

        this.selectStyle.x = 0
        this.selectStyle.y = 0

        document.onmousemove = null
        document.onmousedown = null
      }

    }
  }
}
</script>
