import Element from './button.vue';

(<any>Element)['install'] = function (Vue:any) {
  Vue.component(Element.name, Element)
}

export default Element
