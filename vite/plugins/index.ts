import vue from '@vitejs/plugin-vue'
import { Plugin } from "vite";
import { setupMockPlugin} from './mock'

//插件集中管理,安装
export default function setupPlugins(isBuild: boolean, env: ViteEnv) {
    const plugins:Plugin[]=[vue()]

    console.log(env.VITE_API_URL);
    
    plugins.push(setupMockPlugin(isBuild))
    return plugins
}