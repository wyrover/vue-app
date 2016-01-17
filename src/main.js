'use strict';

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerMap from './routers'
import FastClick from 'fastclick'

Vue.use(VueResource);
Vue.use(VueRouter);

//实例化VueRouter
let router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    linkActiveClass: 'active',
    transitionOnLoad: true
});

router.beforeEach(transition => {
    window.scrollTo(0, 0);
    FastClick.attach(document.body);
    transition.next();
});

let app = Vue.extend({
    components: {
        'gNav': require('./components/nav.vue')
    }
});
routerMap(router);
router.start(app, '#app');