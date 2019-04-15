import Button from './Button'
import ButtonGroup from './ButtonGroup'
const components = [Button, ButtonGroup]

function install(Vue: any): void {
  components.forEach((component: any) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && (<any>window)['Vue']) {
  install((<any>window)['Vue'])
}

const Relax: any = {
  install
}

components.forEach((component: any) => {
  Relax[component.name] = component
})

export default Relax
