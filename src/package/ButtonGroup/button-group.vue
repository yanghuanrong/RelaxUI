<script lang='tsx'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue';

@Component
export default class ButtonGroup extends Vue {
  render () {
    return <div class='re-btn-group'>{this.$slots.default}</div>
  }
}
</script>
