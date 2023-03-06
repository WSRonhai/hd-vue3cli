import { viteMockServe } from 'vite-plugin-mock'
export function setupMockPlugin(isBuild: boolean){
    return  viteMockServe({
      mockPath: 'mock',
      localEnabled: !isBuild,
    })
  }

  //mock文档:https://github.com/vbenjs/vite-plugin-mock/blob/main/README.zh_CN.md