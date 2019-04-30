import Element from './message.vue'
import create from '../utils/create'
import {
  isObject,
  isString
} from '../utils/data-type'

function messageCreate(content, type) {
  let options = {}
  if (isString(content)) {
    options = {
      content: content
    }
  } else if (isObject(content)) {
    options = content
  }
  options.type = type
  const message = create(Element, options)
  message.$on('onClose', message.remove)
}

const methods = Object.keys(Element.data().iconType)
const Message = {}

methods.forEach((key) => {
  Message[key] = function (content) {
    messageCreate(content, key)
  }
})

export default Message