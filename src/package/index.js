import Button from './Button'
import Menu from './Menu'
import Icon from './Icon'
import Input from './Input'
import Grid from './Grid'
import Checkbox from './Checkbox'
import Select from './Select'
import Message from './Message'
import Notice from './Notice'
import create from './utils/create'
const components = {
  ...Button,
  ...Menu,
  ...Select,
  ...Grid,
  Icon,
  Input,
  Checkbox,
}

const install = (Vue) => {
  Object.keys(components).map((key) => {
    const component = components[key]
    Vue.component(component.name, component)
  })

  Vue.prototype.$message = Message
  Vue.prototype.$notice = Notice
  Vue.prototype.$create = create
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const Relax = {
  install
}

Object.keys(components).map((key) => {
  const component = components[key]
  Relax[component.name] = component
})

export default Relax