import Button from './Button'
import Menu from './Menu'
import Icon from './Icon'
import Row from './Row'
import Col from './Col'
import Input from './Input'
import Checkbox from './Checkbox'
import Select from './Select'


const components = {
  ...Button,
  ...Menu,
  ...Select,
  Icon,
  Row,
  Col,
  Input,
  Checkbox,
}

const install = (Vue) => {
  Object.keys(components).map((key) => {
    const component = components[key]
    Vue.component(component.name, component)
  })
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