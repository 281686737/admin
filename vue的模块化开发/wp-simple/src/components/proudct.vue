<template>
    <div class="product">
        <h3>我是商品页</h3>
        <router-link activeClass="productActive" to="/product/detail/001?a=1&b=2">001</router-link>
        <router-link activeClass="productActive" :to="{name:'detail',params:{aid:'002'},quary:{a:11,b:22}}">002</router-link>
        <router-link activeClass="productActive" :to="{name:'detail',params:{aid:'003'},quary:{a:111,b:222}}">003</router-link>
        <transition
        enter-active-class="animated fadeInLeft"
        leave-active-class="animated fadeOutRight"
        >
        <router-view class="rv-style"></router-view>
        </transition>
        
    </div>
</template>
<style>
html,body{width:100%;height:100%;}
html { overflow-x: hidden; overflow-y: auto; }
.productActive{background: #278542;color: aquamarine;position: relative;transition: 1s ease all;}
.rv-style{position: absolute;left: 0;top: 90px;right: 0;bottom: 0;transition: 1s ease all;}
</style>
