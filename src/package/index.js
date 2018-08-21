import Button from './Button'
import ButtonGroup from './ButtonGroup'
import Icon from './Icon'
import Menu from './Menu'
import MenuItem from './MenuItem'
import MenuGroup from './MenuGroup'
import Submenu from './Submenu'
import Row from './Row'
import Col from './Col'
import Input from './Input'
import Checkbox from './Checkbox'
import Select from './Select'
import Option from './Option'
import OptionGroup from './OptionGroup'

const components = [Button, Icon, ButtonGroup, Menu, MenuItem, MenuGroup, Submenu, Row, Col, Input, Checkbox, Select, Option, OptionGroup]

const install = Vue => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const Relax = {
  install
}

components.map(component => {
  Relax[component.name] = component
})

export default Relax
