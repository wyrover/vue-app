<style lang="sass">
    .swiper {
        &-container {
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
            <div class="swiper-slide" v-for="img in imgs">
                <img :data-src="img.src" class="swiper-lazy">
                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination swiper-pagination-white"></div>
        <!-- Navigation -->
        <div class="swiper-button-next swiper-button-white"></div>
        <div class="swiper-button-prev swiper-button-white"></div>
    </div>
</template>

<script>
    require('../assets/sass/swiper.scss');
    import Swiper from 'swiper'
    export default {
        data () {
            return {
                imgs: [
                        {
                            "title": "标题1",
                            "url": "#",
                            "src": "http://www.swiper.com.cn/demo/img/largeNature1.jpg"
                        },
                        {
                            "title": "标题2",
                            "url": "#",
                            "src": "http://www.swiper.com.cn/demo/img/largeNature2.jpg"
                        },
                        {
                            "title": "标题3",
                            "url": "#",
                            "src": "http://www.swiper.com.cn/demo/img/largeNature3.jpg"
                        }
                    ]
            }
        },
        route: {
            activate: (transition) => {
                transition.next();
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
            },
             deactivate: function (transition) {
                 transition.next();
             }
        }
    }
</script>