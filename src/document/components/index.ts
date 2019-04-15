import tag from './tag.vue'

export default {
  install (Vue:any) {
    (<any>Vue)['component'](tag.name, tag)
  }
}
