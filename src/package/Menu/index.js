import Element from './menu'

Element.install = function (Vue) {
  Vue.component(Element.name, Element)
}

export default Element
