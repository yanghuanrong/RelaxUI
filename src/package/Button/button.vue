<script lang='tsx'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue';

@Component
export default class Button extends Vue {
  @Prop({
    type: String,
    default: 'default',
    validator: (value: string) =>
      [
        'success',
        'primary',
        'warning',
        'info',
        'danger',
        'default',
        'text'
      ].some(item => value === item)
  })
  readonly  type!: string;

  @Prop({
    type: String,
    default: ''
  })
  readonly  icon!: string;

  @Prop({
    type: String,
    default: '',
    validator: value => ['lg', 'sm', ''].some(item => value === item)
  })
  readonly  size!: string;

  @Prop(Boolean) readonly plain!: boolean;
  @Prop(Boolean) readonly round!: boolean;
  @Prop(Boolean) readonly circle!: boolean;
  @Prop(Boolean) readonly block!: boolean;
  @Prop(Boolean) readonly disabled!: boolean;
  @Prop(Boolean) readonly loading!: boolean;

  render() {
    const className = {
      class: [
        this.type && 're-btn-' + this.type,
        this.size !== '' || this.size ? 're-btn-' + this.size : '',
        {
          'is-plain': this.plain,
          'is-round': this.round,
          'is-circle': this.circle,
          'is-block': this.block,
          'disabled': this.disabled
        },
        this.loading && 're-btn-loading'
      ]
    }

    const slots = Object.keys(this.$slots).reduce(
      (arr, key) => arr.concat(this.$slots[key]),
      [] as any[]
    )
  
    const listeners = {
      on: !(this.loading || this.disabled) ? this.$listeners : null
    }

    return (
      <button type='button' {...listeners} class='re-btn' {...className}>
        {this.icon !== '' ? <i class={this.icon} /> : ''}
        {this.loading && <i class="re-icon-loader"/> }
        {slots.length ? <span>{this.$slots.default}</span> : ''}
      </button>
    )
  }
}
</script>
