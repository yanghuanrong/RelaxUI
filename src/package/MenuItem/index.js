import Element from '../Menu/menu-item'

Element.install = function (Vue) {
  Vue.component(Element.name, Element)
}

export default Element
