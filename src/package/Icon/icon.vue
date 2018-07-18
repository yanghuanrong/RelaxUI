<script>
export default {
  name: 'Icon',
  props: {
    type: String
  },
  render () {
    return <i class={'yi-icon-' + this.type}></i>
  }
}
</script>
