<template>
    <div class="home">
        <!-- <div class="home-box">home</div> -->
        <!-- <div class="box">home</div> -->
        <slider></slider>
        <list :list="list" :dataName="dataName"></list><!-- 传递了两个props：:list，:dataName -->
        
    </div>
</template>
<script>
import slider from './slider'
import list from './list'
import * as types from '../store/type.js'

    export default {
        data(){
            return {
                list:[],    //原数据
                dataName:"home"
            }
        },
        components:{
            slider,list
        },
        mounted () {
            // this.$store.dispatch('VIEW_LOADING',true)
            // this.$store.dispatch(types.VIEW_LOADING,true)

            // this.$root.$data.bLoading=true
            setTimeout(()=>{
                this.$http({
                url:'/static/data/index.data'
            }).then(
                res=>{
                    // this.$store.dispatch(types.VIEW_LOADING,false)
                    // this.$root.$data.bLoading=false
                    this.list=res.data
                    })
          },3000)
            
        }
    }
</script>
<style scoped>
/*  scoped给style添加是限制当前style样式的作用域只能作用在当前页面中，不让他影响其他的页面。等于说给使用当前样式的元素加了一个自定义的属性 */
/* .home-box{background: red} */
/* .box{background: red} */
</style>
