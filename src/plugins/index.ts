import { App,Component, defineAsyncComponent } from "vue";
import { setupTailwindcss } from "./tailwindcss";
import _ from 'lodash'


//自动注册全局组件
function autoRegisterComponent(app: App) {
  const components = import.meta.glob('../components/form/*.vue')
  Object.keys(components).forEach(async (key) => {
    const name = key.split('/').pop()?.split('.').shift() as string
    app.component(name,defineAsyncComponent(components[key]))
  })
}
export function setupPlugins(app: App) {
  autoRegisterComponent(app)
  setupTailwindcss();
}

