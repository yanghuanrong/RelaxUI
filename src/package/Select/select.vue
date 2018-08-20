<template>
  <div class='re-select'>
    <div class="re-select-input" @click.prevent='toggleMenu'>
      <input class="re-input" readonly ref='selectInput' :class="{'is-focus': isActive}" @focus.stop='focus' :value="checkValue" :placeholder="placeholder"/>
      <i class="re-arrow" :class="{'is-active': isActive}"></i>
    </div>
    <transition name="fade-up" mode="out-in">
      <div class="re-select-option" :style="dropStyle" v-show='isActive'>
        <ul><slot></slot></ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Select',
  provide () {
    return {
      rootSelect: this
    }
  },
  props: {
    value: {
      required: true
    },
    multiple: Boolean,
    placeholder: String,
    disabled: Boolean
  },
  data () {
    return {
      isActive: false,
      checkValue: [],
      dropStyle: null,
      isfocus: false
    }
  },
  mounted () {
    this.dropStyle = {
      minWidth: this.$el.getBoundingClientRect().width + 'px',
      top: this.$el.getBoundingClientRect().height + 5 + 'px'
    }

    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.close()
      }
    })
    this.$on('select', ({label, check}) => {
      if (this.multiple) {
        if (check) {
          this.checkValue.push(label)
        } else {
          this.checkValue.splice(this.checkValue.indexOf(label), 1)
        }
      } else {
        this.checkValue = label
        this.close()
      }
      this.$emit('input', this.checkValue)
    })
  },
  methods: {
    toggleMenu () {
      if (this.isfocus && this.isActive) {
        this.close()
      } else {
        this.show()
      }
    },
    close () {
      this.isfocus = false
      this.isActive = false
    },
    show () {
      this.isActive = true
      this.isfocus = true
    },
    focus () {
      this.isActive = true
    }
  }
}
</script>
