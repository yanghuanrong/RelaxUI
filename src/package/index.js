import Button from './Button'
import ButtonGroup from './ButtonGroup'
import Icon from './Icon'

const components = [Button, Icon, ButtonGroup]

const install = Vue => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Button,
  Icon,
  ButtonGroup
}
