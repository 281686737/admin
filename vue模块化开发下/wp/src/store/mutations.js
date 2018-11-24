export default{
    increment:(state,payload)=>{//mutations 接收commit发送的请求，并拿到state状态，处理commit发送的请求
        // console.log(state);
        state.count+=payload //count的原始数据来自于state.js，incerment函数根据state状态的改变，对数据进行处理，被叫做数据突变
    },
    decrement:(state,payload)=>{
        state.count-=payload
    }
}