import Element from './button-group'

Element.install = function (Vue) {
  Vue.component(Element.name, Element)
}

export default Element
