'use strict';

export default function (router) {
    router.map({
        '/': {  // 首页
            name: 'home',
            component: require('./views/index.vue')
        },
        '*': {  // 404路由
            name: 'home',
            component: require('./views/index.vue')
        },
        '/list':{   //列表页
            name:'list',
            component:require('./views/list.vue')
        }
    })
}