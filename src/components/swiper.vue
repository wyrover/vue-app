<style lang="sass" scoped>
@import "../assets/sass/utils";
$app-size: 87;
.swiper {
    &-container {
        background: #eee;
        width: 100%;
        height: px2rem($app-size + 30);
    }
    &-slide img {
        top: 0;
        left: 50%;
        @include translate3d(-50%, 0, 0);
        width: px2rem($app-size);
        height: px2rem($app-size);
        border-radius: px2rem(10);
    }
    p {
        margin-top: px2rem($app-size+5);
    }
}
</style>

<template>
<div class="swiper-container swiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="app in apps">
            <img :data-src="app.src" class="swiper-lazy">
            <p v-text="app.title"></p>
            <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        apps: []
    }
}
</script>