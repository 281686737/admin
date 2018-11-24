<template>
    <list :list="list" :dataName="dataName"></list><!-- 传递了两个props：:list，:dataName -->
</template>
<script>
    import list from './list.vue'
// import * as types from '../store/type.js'

    export default {
        data(){
            return {
                list:[],    //原数据
                dataName:"follow"
            }
        },
        components:{
            list
        },
        mounted () {
            // this.$store.dispatch(types.VIEW_LOADING,true)

            this.$root.$data.bLoading=true
            setTimeout(()=>{
               this.$http({
                url:'/static/data/follow.data'
            }).then(
                res=>{this.list=res.data
                this.$root.$data.bLoading=false
            // this.$store.dispatch(types.VIEW_LOADING,false)
                
                }) 
            }
            ,2000)
            
        }
    }
</script>
<style>
 .newsList{clear: both;margin-bottom:1rem;margin-top:.7rem;}
</style>

