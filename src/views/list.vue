<style lang="sass">

</style>

<template>
<div class="list">
    <ul>
        <li>dfljdlj</li>
    </ul>
</div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    route: {
        activate: (transition) => {
            transition.next();
        },
         deactivate: function (transition) {
             transition.next();
         }
    }
}
</script>