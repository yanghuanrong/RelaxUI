import Element from '../Select/option-group'

Element.install = function (Vue) {
  Vue.component(Element.name, Element)
}

export default Element
