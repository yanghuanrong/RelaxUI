<script>
export default {
  name: 'YiIcon',
  props: {
    type: String
  },
  render () {
    return <i class={'yi-icon-' + this.type}></i>
  }
}
</script>
