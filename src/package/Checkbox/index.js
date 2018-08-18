import Element from './checkbox'

Element.install = function (Vue) {
  Vue.component(Element.name, Element)
}

export default Element
