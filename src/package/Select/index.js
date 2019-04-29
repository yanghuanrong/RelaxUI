import Element from './select'

Element.install = function (Vue) {
  Vue.component(Element.name, Element)
}

export default Element
