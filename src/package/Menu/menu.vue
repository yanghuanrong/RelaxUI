<script>
import {broadcast} from '../utils/emit'

export default {
  name: 'Menu',
  data () {
    return {
      currentActiveName: this.activeName
    }
  },
  provide () {
    return {
      rootMenu: this
    }
  },
  props: {
    activeName: {
      type: String,
      default: ''
    },
    uniqueOpened: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.$on('item-click', this.handleItemClick)
    this.updateActiveName()
  },
  watch: {
    currentActiveName (val) {
      this.updateActiveName()
    }
  },
  methods: {
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    },
    updateActiveName () {
      this.broadcast('Submenu', 'on-update-active-name', false)
      this.broadcast('MenuItem', 'on-update-active-name', this.currentActiveName)
    },
    handleItemClick (item) {
      this.currentActiveName = item.name
      this.updateActiveName()
    }
  },
  render () {
    return <ul class='re-menu'>{this.$slots.default}</ul>
  }
}
</script>
