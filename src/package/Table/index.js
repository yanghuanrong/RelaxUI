import Element from './table.vue'

Element.install = function (Vue) {
  Vue.component(Element.name, Element)
}

export default Element
