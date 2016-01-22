<style lang="sass" scoped>
    @import "../assets/sass/base";
    @import "../assets/sass/utils";
    .banner {
        position: relative;
        height: 0;
        padding-top: 20%;
        img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
        }
    }
    .item-inner {
        padding-right: px2rem(70);
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%2060%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'm60%2061.5-38.25%2038.25-9.75-9.75%2029.25-28.5-29.25-28.5%209.75-9.75z'%20fill%3D'%23c7c7cc'%2F%3E%3C%2Fsvg%3E");
        background-size: px2rem(20) px2rem(40);
        background-repeat: no-repeat;
        background-position: 95% center;
        background-position: -webkit-calc(100% - 15px) center;
        background-position: calc(100% - 15px) center;
    }
    .item-inner {
        padding-right: px2rem(30);
        position: relative;
        width: 100%;
        padding-top: px2rem(16);
        padding-bottom: px2rem(14);
        min-height: px2rem(88);
        box-sizing: border-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        -ms-flex-item-align: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
    }
.item-inner:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: auto;
    top: auto;
    height: 1px;
    width: 100%;
    background-color: #c8c7cc;
    z-index: 1;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
}
    .item-title {
        -webkit-flex-shrink: 1;
        -ms-flex: 0 1 auto;
        flex-shrink: 1;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        @include font-dpr(17);
    }
</style>

<template>
<div>
    <div class="banner" v-link="banner.id" v-if="isShow">
        <img :src="banner.src">
    </div>
    <swiper :apps="hotApps"></swiper>
    <div class="list">
        <ul>
            <li v-for="item in category"
                v-link="{name:'category', query:{tag:item.id}}">
                <div class="item-inner">
                    <div class="item-title" v-text="item.title"></div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script type="es6">
import Swiper from 'swiper'
import {appCfg} from '../appCfg'
export default {
    data () {
        return {
            banner: {},
            hotApps: [],
            category: [],
            searchKey: {
                tag: ''
            },
            isShow: false // 是否显示 banner
        }
    },
    route: {
        data (transition) {
            var query = transition.to.query, tag = query.tag || '';
            this.isShow = !tag;
            if (this.searchKey.tag !== tag) {
                this.searchKey.tag = tag;
                this.hotApps = [];
            }
            this.pullData();
        },
         deactivate ({ next }) {
             next();
         }
    },
    methods: {
        pullData () {
            var params = $.param(this.searchKey);
            //var url = './_mock/category'+Math.floor(Math.random()*2+1) + '.json?' + params;
            // appCfg.ajaxurl.category+'?'+params+'&t='+Math.random()
            $.get(appCfg.ajaxurl.category+'?'+params, (d) => {
                if (d) {
                    this.banner = d.banner;
                    this.hotApps = d.hotApps;
                    this.category = d.category;
                    this.$nextTick(() => {
                        this.renderView();
                    });
                }
            });
        },
        renderView (){
            var swiper = new Swiper('.swiper', {
                initialSlide: 0,
                pagination: '.swiper-pagination',
                slidesPerView: 3,
                paginationClickable: false,
                preloadImages: false,
                lazyLoading: true,
                spaceBetween: 30
            });
            swiper.update();
        }
    },
    components: {
        swiper: require('../components/swiper.vue')
    }
}
</script>