import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {

    public static handlers: { [key: string]: DetachedRouteHandle } = {};

    /** 删除缓存路由快照的方法 */
    public static deleteRouteSnapshot(path: string): void {
        const name = path.replace(/\//g, '_');
        if (CustomReuseStrategy.handlers[name]) {
            delete CustomReuseStrategy.handlers[name];
        }
    }

    /** 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断 */
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        // console.debug('shouldDetach======>', route);
        return true;
    }

    /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        // console.debug('store======>', route, handle);
        console.log('store', route);
        CustomReuseStrategy.handlers[this.getRouteUrl(route)] = handle;
        // CustomReuseStrategy.handlers[route.routeConfig.path] = handle
    }

    /** 若 path 在缓存中有的都认为允许还原路由 */
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        // console.debug('shouldAttach======>', route);
        // return !!CustomReuseStrategy.handlers[this.getRouteUrl(route)];
        return !!route.routeConfig && !!CustomReuseStrategy.handlers[this.getRouteUrl(route)];
    }

    /** 从缓存中获取快照，若无则返回nul */
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        // console.debug('retrieve======>', route);
        console.log('retrieve', route);
        // if (!CustomReuseStrategy.handlers[this.getRouteUrl(route)]) {
        //     console.log(1);
        //     return null;
        // }

        // if (!route.routeConfig) {
        //     console.log(2);
        //     return null;
        // }
        // if (route.routeConfig.loadChildren) {
        //     console.log(3);
        //     return null;
        // }
        // if (route.routeConfig.path == "") {
        //     console.log(4);
        //     return null;
        // }

        // console.log(5);
        // return CustomReuseStrategy.handlers[this.getRouteUrl(route)];
        if (!route.routeConfig) {
            return null;
          }
          if (route.routeConfig.loadChildren) {
            return null;
          }
        return CustomReuseStrategy.handlers[this.getRouteUrl(route)];
    }

    /** 进入路由触发，判断是否同一路由 */
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        // console.log(curr, future);
        // // console.log(future.routeConfig === curr.routeConfig);
        console.log(CustomReuseStrategy.handlers);
        // // return future.routeConfig === curr.routeConfig;
        return future['_routerState'].url.substring(0, 5) == '/home' && curr['_routerState'].url.substring(0, 10) == '/videoplay';
        // return future.routeConfig === curr.routeConfig
    }

    /** 使用route的path作为快照的key */
    getRouteUrl(route: ActivatedRouteSnapshot) {
        const path = route['_routerState'].url.replace(/\//g, '_');
        return path;
    }

}