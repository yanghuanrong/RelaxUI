<script>
export default {
  name: 'Icon',
  props: {
    type: String
  },
  render () {
    return <i class={this.type}></i>
  }
}
</script>
