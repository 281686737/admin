<template>
    <div class="foot-btn" >
      <ul>
        <router-link tag="li" to="/home" activeClass="home1" class="home"><a href="javascript:;"></a></router-link>
        <router-link tag="li" to="/buycar" activeClass="write1" class="write"><a href="javascript:;"></a></router-link>
        <router-link @click.native="check" tag="li" to="/user" activeClass="my1" class="my"><a href="javascript:;"></a></router-link>
        <!-- 注意：给vue的组件加事件一定要在事件名后加上native才会生效：@click.native="check"，但是这种做法并不科学，不推荐使用 -->
      </ul>
    </div>
</template>
<style>
.foot-btn{width:100%;height:0.8rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
.foot-btn ul{width:4.08rem; margin:0 auto;}
.foot-btn ul li{ float:left;}
.foot-btn ul li a{ display:block; width:100%;height:100%;}
.foot-btn ul .home{width:0.44rem;height:0.59rem; background:url(../assets/img/home.png) no-repeat 0 0; background-size:100%; margin-top:0.1rem;}
.foot-btn ul .write{width:0.82rem;height:0.81rem; background:url(../assets/img/write.png) no-repeat 0 0; background-size:100%; margin-left:1.18rem;}
.foot-btn ul .my{width:0.39rem;height:0.63rem; background:url(../assets/img/my.png) no-repeat 0 0;background-size:100%; margin-left:1.18rem; margin-top:0.07rem;}

</style>
<script>
export default {
  methods: {
    check(){
    this.$root.$data.bNav=false //使用非状态管理来决定是否加载组件
  }
  }
  
}
</script>
