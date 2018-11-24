<template>
    <div class="user">
        <h3>我是用户页</h3>
        <!-- 第一种方案拿数据 -->
        <!-- {{$route.query.userdata.username}} -->
        <!-- 第二种方案拿数据 -->
        {{userdata.username}}
    </div>
</template>
<script>
    import axios from 'axios' //axios可以在main.js的文件里引入，这样就可以在全局使用，另外注意：axios的数据在data里面，resource的数据在body里面
    export default{
        // 第二种方案：
        data(){
            return {
                userdata:{}//要提前给数据一个位置
            }
        },
         beforeRouteEnter(to, from, next){
                    axios({
                        url:'/data/user.json'
                        }).then((res)=>{
                            if(res.data.auth){
                                console.log(this);//此时的this还没有创建，拿到的是undefined也就是说还没有被实例化//第二种方案：把数据绑定到未来组件上面.在node模块中的this都指向一个空对象或者undefined
                                // next()//前置守卫如果不写next，或者next里面的参数是false：next(false)，其他路由进不来这个路由里面. 
                                next(vm=>vm.userdata=res.data.user)//等价于 next(_this=>_this.userdata=res.data.user)
                            }else{
                                next('/login')
                            }
                        })
                   }
        // 第一种方案
        // beforeRouteEnter(to, from, next){
        //     console.log('前置守卫',to,from);
        // // 守卫是否让某条路由通过并不是手动的，需要通过逻辑判断，当它为真时，可以通过否则不能通过。也就是说假如我们进入web页面需要登录，我们需要校验一下，那么要在设置守卫时做一个异步请求，来获取数据
        // // 当获取到数据时就通过，说明通过了守卫登录成功；没有获取到数据时就不通过，重新回到登录页面
        // setInterval(()=>{
        //     axios({
        //         url:'/data/user.json'
        //         }).then((res)=>{
        //             if(res.data.auth){
        //                 console.log(to);//第一种方案：把数据绑定到目标路由的一个属性上面
        //                 to.query.userdata=res.data.user
        //                 next()//前置守卫如果不写next，或者next里面的参数是false：next(false)，其他路由进不来这个路由里面. 
        //             }else{
        //                 next('/login')
        //             }
        //         })
        //     },1000)
        // },
    }
</script>
