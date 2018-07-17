<script>
function broadcast (componentName, eventName, params) {
  this.$children.map(child => {
    const name = child.$options.name
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}

export default {
  name: 'YiMenu',
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
    }
  },
  mounted () {
    this.$on('item-click', this.handleItemClick)
    this.updateActiveName()
  },
  methods: {
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    },
    updateActiveName () {
      this.broadcast('YiSubmenu', 'on-update-active-name', false)
      this.broadcast('YiMenuItem', 'on-update-active-name', this.currentActiveName)
    },
    handleItemClick (item) {
      this.currentActiveName = item.name
      this.updateActiveName()
      console.log(item.name)
    }
  },
  render () {
    return <ul class='yi-menu'>{this.$slots.default}</ul>
  }
}
</script>
