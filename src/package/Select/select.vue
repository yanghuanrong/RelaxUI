<template>
  <div class='re-select'>
    <div class="re-select-input" @click.prevent='toggleMenu' @mouseover='mouseover' @mouseout='mouseout'>
      <div class="re-select-array" v-show='multiple && checkArray.length'>
        <div class="re-select-array-content">
          <span class="re-con-array">{{checkArray[0]}}</span>
          <span class="re-clearable-array" @click.stop='clearValue'><i class="re-icon-x"></i></span>
        </div>
        <span v-if='checkArray.length > 1'> + {{checkArray.length - 1}}</span>
      </div>

      <input class="re-input" readonly ref='selectInput' :class="{'is-focus': isActive}" @focus.stop='focus' :value="checkValue" :placeholder="placeholder"/>

      <transition-group name="fade" mode='out-in' tag='div' class="re-select-icon">
        <div class="re-clearable" v-show='isClear' key='1' @click.stop='clearValue'><i class="re-icon-x"></i></div>
        <i class="re-arrow" key='2' v-show='!isClear' :class="{'is-active': isActive}"></i>
      </transition-group>
    </div>
    
    <transition name="fade-up" mode="out-in">
      <div class="re-select-option" :style="dropStyle" v-show='isActive'>
        <div class="re-select-search" v-if='search'>
          <Input iconBefore="re-icon-search" size='sm' :clearable='true' v-model='searchKey' @input="searchEv"/>
        </div>
        <ul><slot></slot></ul>
      </div>
    </transition>
  </div>
</template>

<script>
import emit from '../utils/emit'

export default {
  name: 'Select',
  mixins: [emit],
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
    disabled: Boolean,
    search: [String, Boolean]
  },
  data () {
    return {
      isActive: false,
      checkValue: '',
      checkArray: [],
      dropStyle: null,
      isfocus: false,
      isClear: false,
      searchKey: ''
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
          this.checkArray.push(label)
        } else {
          this.checkArray.splice(this.checkArray.indexOf(label), 1)
        }
        this.checkValue = this.checkArray.length ? ' ' : ''
        this.$emit('input', this.checkArray)
      } else {
        this.checkValue = label
        this.close()
        this.$emit('input', this.checkValue)
      }
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
      this.searchKey = ''
      this.isActive = true
      this.isfocus = true
    },
    focus () {
      this.isActive = true
    },
    mouseover () {
      if (!this.multiple && this.checkValue.length) {
        this.isClear = true
      }
    },
    mouseout () {
      this.isClear = false
    },
    clearValue () {
      let emitValue
      if (this.multiple) {
        emitValue = this.checkArray.shift()
        this.$emit('input', this.checkArray)
        this.checkValue = this.checkArray.length ? ' ' : ''
      } else {
        emitValue = this.checkValue
        this.$emit('input', this.checkValue = '')
      }
      this.broadcast('Option', 'clearValue', emitValue)
    },
    searchEv () {
      this.broadcast(this.search, 'matched', this.searchKey)
    }
  }
}
</script>
