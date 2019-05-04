import Element from './notice.vue'
import create from '../utils/create'
import {
  isObject
} from '../utils/data-type'

let NoticeWrap

function messageCreate(options, type) {
  if (!isObject(options)) {
    return
  }

  if(!NoticeWrap) {
    NoticeWrap = createNoticeWrap()
  }

  let props = {
    type: type,
    title: options.title,
    desc: options.desc
  }

  const message = create(Element, props, NoticeWrap)
  message.$on('onClose', message.remove)

  return message.hide.bind(this)
}

function createNoticeWrap() {
  const NoticeWrap = document.createElement('div')
  NoticeWrap.className =  'x-notice-wrap'
  document.body.appendChild(NoticeWrap)
  return NoticeWrap
}

const methods = Object.keys(Element.data().iconType)
const Message = {}

methods.forEach((key) => {
  Message[key] = (options) => messageCreate(options, key)
})

export default Message