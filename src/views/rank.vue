<style lang="sass" scoped>
@import "../assets/sass/base";
@import "../assets/sass/utils";
.nav-tab {

    overflow: hidden;
    li {
        border: 1px solid blue;
        padding: px2rem(10) px2rem(20);
        float: left;
        &.active {
            color: red;
         }
    }
}
li {
    overflow: hidden;
}
.item-media {
    float: left;
    img {
        width: px2rem(40);
        height: px2rem(40);
        @include border-radius(10);
    }
}
.item-inner {

}
</style>

<template>
<div>
    <ul class="nav-tab">
        <li v-link="{name: 'rank', query: {tab: 'new'}}">最新</li>
        <li v-link="{name: 'rank', query: {tab: 'hot'}}">最热</li>
        <li v-link="{name: 'rank', query: {tab: 'tj'}}">推荐</li>
    </ul>
    <ul class="list">
        <li v-for="app in list" v-link="">
            <a href="" class="item-media">
                <img :src="app.icon" v-bind:alt="app.name">
            </a>
            <div class="item-inner">
                <h4 v-text="app.name"></h4>
            </div>
        </li>
    </ul>
</div>
</template>

<script type="es6">
import {appCfg} from '../appCfg'
export default {
    data () {
        return {
            list: [],
            searchKey: {
                page: 1,
                limit: 20,
                tab: 'new'
            }
        }
    },
    route: {
        data (transition){
            var query = transition.to.query, tab = query.tab || 'new';
            if(this.searchKey.tab !== tab) {
                this.list = [];
                this.searchKey.tab = tab;
            }
            this.pullData();
        },
        deactivate ({ next }) {
             next();
        }
    },
    methods: {
        pullData (){
            var params = $.param(this.searchKey);
            $.get(appCfg.ajaxurl.list+'?'+params, (d) => {
                if (d) {
                    this.list = this.list.concat(d.list);
                    this.$nextTick(() => {
                        this.renderView();
                    });
                }
            });
        },
        renderView (){
        }
    }
}
</script>