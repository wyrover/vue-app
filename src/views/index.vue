<style lang="sass">
.swiper {
    &-container {
        background: #000;
        width: 100%;
        height: 100px;
    }
    &-slide {
        text-align: center;
        font-size: 18px;
    }
    &-slide img {
         width: auto;
         height: auto;
         max-width: 100%;
         max-height: 100%;
         -ms-transform: translate(-50%, -50%);
         -webkit-transform: translate(-50%, -50%);
         -moz-transform: translate(-50%, -50%);
         transform: translate(-50%, -50%);
         position: absolute;
         left: 50%;
         top: 50%;
    }
}
</style>

<template>
<div class="swiper-container banner">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="img in banners">
            <img :data-src="img.src" class="swiper-lazy">
            <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination swiper-pagination-white"></div>
</div>
</template>

<script>
require('../assets/sass/swiper.scss');
import Swiper from 'swiper'
import {appCfg} from '../appCfg'
export default {
    data () {
        return {
            banners: []
        }
    },
    route: {
        data (transition){
             this.getHomeData();
        },
        deactivate (transition) {
             transition.next();
        }
    },
    methods: {
        getHomeData (){
            $.get(appCfg.ajaxurl.home, (d) => {
                if (d) {
                    this.banners = d.banners;
                    this.$nextTick(() => {
                        this.renderView();
                    });
                }
            });
        },
        renderView (){
            var banner = new Swiper('.banner', {
                // nextButton: '.swiper-button-next',
                // prevButton: '.swiper-button-prev',
                pagination: '.swiper-pagination',
                paginationClickable: true,
                // Disable preloading of all images
                preloadImages: false,
                // Enable lazy loading
                lazyLoading: true,
                spaceBetween: 0,
                autoplay: 5000,
                autoplayDisableOnInteraction: false,
                loop: true
            });
        }
    }
}
</script>