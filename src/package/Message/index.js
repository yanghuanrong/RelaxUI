import Element from './message.vue'
import create from '../utils/create'

export default {
  info(content) {
    const message = create(Element, {
      content: content
    })
    message.$on('onClose', message.remove)
  }
}