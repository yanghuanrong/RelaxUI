<script>
export default {
  name: 'ReMenuGroup',
  props: {
    title: String,
    default: ''
  },
  render () {
    return <li class='re-menu-group'>
      {this.title !== '' ? <div class='re-menu-title'>{ this.title }</div> : ''}
      <ul class='re-menu'>{this.$slots.default}</ul>
    </li>
  }
}
</script>
