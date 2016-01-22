<style lang="sass">
nav {
    a.active {
        color: red;
    }
}
</style>

<template>
    <nav>
        <a v-link="{path:'/home'}">Home</a>
        <a v-link="{path:'/category'}">Category</a>
        <a v-link="{path:'/rank'}">Rank</a>
    </nav>
</template>

<script>
export default {
  data () {
        return {
        }
    }
}
</script>