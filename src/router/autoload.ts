/**
 * 自动生成路由
 */
import { RouteRecordRaw } from "vue-router";

const layouts = import.meta.glob('../layouts/*.vue')
const views = import.meta.glob('../views/**/*.vue')


//获取主路由
function getRoutes() {
    const layoutRoutes = [] as RouteRecordRaw[]
    Object.entries(layouts).forEach(([file, module]) => {
        const route = getRoutesByModule(file, module)
        console.log(111,route);
        let child = getChildrenRoutes(route)
        layoutRoutes.push(route)
    })
    return layoutRoutes
}
//获取子路由
function getChildrenRoutes(layoutRoute: RouteRecordRaw): RouteRecordRaw[] {
    const routes = [] as RouteRecordRaw[]

    Object.entries(views).forEach(([file, module]) => {
        if (file.includes(`../views/${layoutRoute.name as string}`)) {
            
            const route = getRoutesByModule(file, module)
            console.log(222,file);
            routes.push(route)
        }
    })
    return routes
}
/**
 * 
 * @param file 获取布局路由
 * @param module 
 * @returns 
 */
function getRoutesByModule(file: string, module: { [key: string]: any }) {
    const name = file.split("/").pop()?.split('.')[0]
    // console.log(file.match(/\.\.\/layouts\/(?<name>.+?)\.vue/i)?.groups?.name);
    // const name = file.replace(/.+layouts\/ |.+views|\.vue/gi, '')
    const route = {
        path: `/${name}`,
        component: module,
        name: name,
        meta: {
            title: name
        }
    } as RouteRecordRaw
    
    return route

}


export default getRoutes();
