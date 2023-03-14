import { ConfigEnv, defineConfig, loadEnv } from "vite";
import alias from "./vite/alias";
import { parseEnv } from "./vite/utils";
import  setupPlugins from "./vite/plugins"


export default defineConfig(({ command, mode }: ConfigEnv) => {
  const isBuild = command == "build";
  const root = process.cwd();  
  const env = parseEnv(loadEnv(mode, root));
  return {
    // plugins: [vue()],
    plugins: setupPlugins(isBuild,env),
    resolve: {
      //路径别名
      alias,
    },
    server:{
      host:'0.0.0.0'
    }
  };
});
