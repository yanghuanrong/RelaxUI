import Vue from 'vue'

/**
 * 將組件编译后追加至body中，给组件添加remove方法
 *
 * @export
 * @param {*} component
 * @param {*} props
 * @returns
 */
export default function (component, props) {
  const instance = new Vue({
    render: h => h(component, {props})
  }).$mount()

  document.body.appendChild(instance.$el)

  const comp = instance.$children[0]
  comp.remove = function () {
    document.body.removeChild(instance.$el)
    instance.$destroy()
  }
  return comp
}