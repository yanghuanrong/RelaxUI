import Element from './row'

Element.install = function (Vue) {
  Vue.component(Element.name, Element)
}

export default Element
