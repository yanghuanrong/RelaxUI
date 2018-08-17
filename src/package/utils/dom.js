export const hasClass = (el, style) => {
  return new RegExp('\\b' + style + '\\b').test(el.className)
}
export const addClass = (el, style) => {
  if (!hasClass(el, style)) {
    el.className += ' ' + style
  }
}
export const delClass = (el, style) => {
  if (hasClass(el, style)) {
    el.className = el.className.replace(new RegExp('(?:^|\\s)' + style + '(?=\\s|$)'), '').replace(/^\s*|\s*$/g, '')
  }
}
