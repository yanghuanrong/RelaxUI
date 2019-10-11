import Element from './calendar'

Element.install = function (Vue) {
  Vue.component(Element.name, Element)
}

export default Element
