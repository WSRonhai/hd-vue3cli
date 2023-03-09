// test.ts

import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/info',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message:"请求成功",
        data: {
          name:'纱纱',
          age:23,
          avatar:'./1.png'
        }
      }
    },
  }
] as MockMethod[]