import Element from './message.vue'
import create from '../utils/create'
import {
  isString,
  isNumber
} from '../utils/data-type'

function messageCreate(content, type, duration) {
  if (!isString(content) && content == '') {
    return
  }

  let options = {
    content: content,
    type: type
  }

  if (isNumber(duration)) {
    options.duration = duration
  }

  const message = create(Element, options)
  message.$on('onClose', message.remove)

  return message.hide.bind(this)
}

const methods = Object.keys(Element.data().iconType)
const Message = {}

methods.forEach((key) => {
  Message[key] = (content, duration) => messageCreate(content, key, duration)
})

export default Message