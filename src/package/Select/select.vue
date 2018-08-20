<template>
  <div class='re-select'>
    <div class="re-select-input">
      <input class="re-input" ref='selectInput' :class="{'is-focus': isActive}" @focus='focus' :value="checkValue"/>
      <i class="re-arrow" :class="{'is-active': isActive}"></i>
    </div>
    <div class="re-select-option">
      <ul v-show='isActive'><slot></slot></ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    value: {
      required: true
    }
  },
  data () {
    return {
      isActive: false,
      checkValue: ''
    }
  },
  mounted () {
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.isActive = false
      }
    })
    this.$on('select', ({label, check}) => {
      this.checkValue = label
    })
  },
  methods: {
    focus () {
      this.isActive = true
    }
  }
}
</script>
