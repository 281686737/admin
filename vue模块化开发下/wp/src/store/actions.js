import axios from 'axios'
export default{
    // add(a){//在没有第二个参数的情况下可以写成下面的形式
    add({commit,state},payload){    //第二个参数payload是负载,如果第二个参数payload没穿，那么拿到的就是事件对象ev
        // let {commit,state}=a
        //处理业务逻辑
        // console.log('add',a);
        payload=payload||1
        commit('increment',payload)//发送increment请求，mutations接收这个请求

    },
    jian({commit,state},payload){
        payload=payload||1

        commit('decrement',payload)
    },
    odd({commit,state},payload){
        payload=payload||1
        if(state.count%2==0){//业务逻辑处理
            commit('increment',payload)
        }
    },
    async({commit,state},payload){
        // payload=payload||1
        setTimeout(()=>{
            axios({
                url:'/static/' + payload +'.json'
            }).then(
                res=>commit('increment',res.data.num)
            )
        },1000)
    }
}