import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'
import { setupPlugins } from './plugins'
import "@/assets/styles/globle.scss"
async function bootstrap() {
    const app = createApp(App)
    //自动注册路由
    setupRouter(app)
    //自行注册插件
    setupPlugins(app)
    await router.isReady()
    app.mount('#app')
}
bootstrap()