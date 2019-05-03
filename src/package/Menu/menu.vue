<script>
import emit from '../utils/emit'

export default {
  name: 'xMenu',
  mixins: [emit],
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
    updateActiveName () {
      this.broadcast('xSubmenu', 'on-update-active-name', false)
      this.broadcast('xMenuItem', 'on-update-active-name', this.currentActiveName)
    },
    handleItemClick (item) {
      this.currentActiveName = item.name
      this.updateActiveName()
    }
  },
  render () {
    return <ul class='x-menu'>{this.$slots.default}</ul>
  }
}
</script>
