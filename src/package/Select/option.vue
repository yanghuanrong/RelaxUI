<template>
  <li @click='select' :class="{'select':isActive}">{{value}}</li>
</template>

<script>
import {dispatch} from '../utils/emit'
export default {
  name: 'Option',
  props: {
    value: String
  },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    dispatch (componentName, eventName, params) {
      dispatch.call(this, componentName, eventName, params)
    },
    select () {
      this.isActive = !this.isActive
      this.dispatch('Select', 'select', {label: this.value, check: this.isActive})
    }
  }
}
</script>
