interface ViteEnv {
    VITE_ROUTER_AUTOLOAD: boolean,
    VITE_API_URL: string
}

interface ImportMetaEnv extends ViteEnv {}
//https://cn.vitejs.dev/guide/env-and-mode.html
interface ImportMeta {
    readonly env: ImportMetaEnv
}