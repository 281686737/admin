<template>
    <div class="reg">
        <h3>我是注册页</h3>
        <textarea v-model="msg"></textarea>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                msg:''
            }
        },
        beforeRouteLeave(to, from, next) {   
            console.log('后置守卫');
            if (this.msg=='') {
                next()
            } else {
                let bl=window.confirm('确定填写完毕了吗？')
                if (bl) {
                    next(true)
                } else {
                   next(false) 
                }
                // next()// 后置守卫如果不写next，进入这个路由之后就出不去，进不到其他路由  
            }    
        }
    }
</script>
