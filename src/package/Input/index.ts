import Element from './input.vue';

(<any>Element)['install'] = function (Vue:any) {
  Vue.component(Element.name, Element)
}

export default Element
