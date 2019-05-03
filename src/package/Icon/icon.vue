<script>
export default {
  name: 'xIcon',
  props: {
    type: String
  },
  render () {
    return <i class={this.type}></i>
  }
}
</script>
