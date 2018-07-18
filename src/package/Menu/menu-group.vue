<script>
export default {
  name: 'MenuGroup',
  props: {
    title: String,
    default: ''
  },
  render () {
    return <li class='yi-menu-group'>
      {this.title !== '' ? <div class='yi-menu-title'>{ this.title }</div> : ''}
      <ul class='yi-menu'>{this.$slots.default}</ul>
    </li>
  }
}
</script>
