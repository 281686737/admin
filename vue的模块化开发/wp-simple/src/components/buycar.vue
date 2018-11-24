    <template id="buycar">
        <div class="buycar">
                <dl v-for='(item,index) of list' :key="index">
                    <dt>商品名称：{{item.name}}</dt>
                    <dd>单价：{{item.price | currency('￥',2)}}</dd>
                    <dd>数量：<input type="number" min="0" v-model="item.count" ></dd>
                    <dd>小计：{{item.price*item.count | currency }}</dd>
                </dl>
                总计：{{cptSum | currency('￥',2)}}    
         </div>
    </template>
  <style>
        .buycar{width:600px;margin:0 auto;background: #777777;color: white}
    </style>
        <script>
        export default{
            data(){
                return{
                 list:[
                    {id:1,name:'西红柿',price:3.5,count:3},
                    {id:2,name:'鸡蛋',price:1,count:3},
                    {id:3,name:'黄瓜',price:.8,count:5}
                ]
            }
        },
            filters: {
                fixed:(data,num)=>{
                    console.log(this);
                    return data.toFixed(num)
                },
                currency(data,currency="$",digit="2"){
                    return currency + data.toFixed(digit)
                }
            },
            computed:{
                cptSum(){
                    var result=0;
                    this.list.forEach((item,index)=>{
                        result+=item.price*item.count
                    })
                    return result
                }
            }                  
        }
      
    </script>