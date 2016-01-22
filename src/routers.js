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
        '/category':{   //分类
            name:'category',
            component:require('./views/category.vue')
        },
        '/rank':{   //rank
            name:'rank',
            component:require('./views/rank.vue')
        }
    })
}