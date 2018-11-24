<template>
    <div class="nav">
      <ul>
        <router-link tag="li" activeClass="active" to="/home"><a href="javescript:;" >首页</a></router-link>
        <router-link tag="li" activeClass="active" to="/follow"><a href="javescript:;" >关注</a></router-link>
        <router-link tag="li" activeClass="active" to="/column"><a href="javescript:;" >栏目</a></router-link>
  
      </ul>
    </div>
</template>
<style>
.nav{width:100%; position:fixed; top:0;left:0; z-index:2; background:#fff;}
.nav ul{width:4.38rem;height:0.6rem; margin:0 auto;}
.nav ul li{width:1.46rem;height:0.6rem; float:left;}
.nav ul li a{ display:block;width:1.46rem;height:0.6rem; line-height:0.6rem; text-align:center; font-size:0.3rem; color:#9e9a95;}
.nav ul li.active a{height:0.5rem; border-bottom:0.1rem solid #5477b2; color:#5477b2;}

</style>
