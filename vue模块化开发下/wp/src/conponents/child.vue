<template>
<div class="child">
    <h3>子组件</h3>
    {{count}}
</div>   
</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        computed:mapGetters([
            'count'
        ])
    }
</script>
