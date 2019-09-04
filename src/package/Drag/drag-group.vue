<template>
  <div class='x-drag-group' @mousedown="move">
    <div class="x-select" :style="{
      width: selectStyle.w + 'px',
      height: selectStyle.h + 'px',
      top: selectStyle.y + 'px',
      left: selectStyle.x + 'px',
    }"></div>
    <slot></slot>
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
    }
  },
  methods:{
    move(e){
      const touchX = e.pageX
      const touchY = e.pageY

      this.selectStyle.x = touchX - this.$el.offsetLeft
      this.selectStyle.y = touchY - this.$el.offsetTop
      
      const touchW = this.selectStyle.x 
      document.onmousedown = (e) => {
        e.preventDefault()
      }

      document.onmousemove = (ev) => {
        let w = ev.pageX - touchX

        if(w > 0){
          this.selectStyle.w = w
        } else {
          this.selectStyle.x = touchW - Math.abs(w)
          this.selectStyle.w = Math.abs(w)
        }


        // let x = Math.abs(ev.pageX - touchX)
        // let y = Math.abs(ev.pageY - touchY)

        console.log(ev.pageX - touchX)
        // console.log(y)
        // this.selectStyle.w = x
        // this.selectStyle.h = y
      }

      document.onmouseup= () => {
        
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
