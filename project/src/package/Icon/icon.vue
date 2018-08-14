<script>
export default {
  name: 'ReIcon',
  props: {
    type: String
  },
  render () {
    return <i class={this.type}></i>
  }
}
</script>
