import tag from './tag'

export default {
  install (Vue) {
    Vue.component(tag.name, tag)
  }
}
