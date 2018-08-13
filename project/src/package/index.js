import Button from './Button'
import ButtonGroup from './ButtonGroup'
import Icon from './Icon'
import Menu from './Menu'
import MenuItem from './MenuItem'
import MenuGroup from './MenuGroup'
import Submenu from './Submenu'
import Row from './Row'
import Col from './Col'

const components = [Button, Icon, ButtonGroup, Menu, MenuItem, MenuGroup, Submenu, Row, Col]

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
  ButtonGroup,
  Menu,
  MenuGroup,
  MenuItem,
  Submenu,
  Row,
  Col
}
