<script>
export default {
  name: 'ReIcon',
  props: {
    type: String
  },
  render () {
    return <i class={'re-icon-' + this.type}></i>
  }
}
</script>
