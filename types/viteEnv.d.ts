interface ViteEnv {
    VITE_SOME_KEY: number,
    VITE_ROUTE_AUTOLOAD: boolean,
    VITE_API_URL: string
}

interface ImportMetaEnv extends ViteEnv {}
//https://cn.vitejs.dev/guide/env-and-mode.html
interface ImportMeta {
    readonly env: ImportMetaEnv
}