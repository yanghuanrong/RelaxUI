import Element from './button'

Element.install = function (Vue) {
  Vue.component(Element.name, Element)
}

export default Element
