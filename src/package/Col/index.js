import Element from './col'

Element.install = function (Vue) {
  Vue.component(Element.name, Element)
}

export default Element
