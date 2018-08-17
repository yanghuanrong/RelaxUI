import Element from '../Menu/submenu'

Element.install = function (Vue) {
  Vue.component(Element.name, Element)
}

export default Element
