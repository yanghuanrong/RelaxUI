export function install(components) {
  Object.keys(components).map((key) => {
    const component = components[key]
    component.install = function (Vue) {
      Vue.component(component.name, component)
    }
  })

  return components
}