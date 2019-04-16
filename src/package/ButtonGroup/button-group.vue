<script lang='tsx'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ButtonGroup extends Vue {
  render () {
    return <div class='re-btn-group'>{this.$slots.default}</div>
  }
}
</script>
