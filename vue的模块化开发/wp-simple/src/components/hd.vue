<template>
    <div class="hd">
        <nav>
        <router-link activeClass="navActive" to="/home">home</router-link>
        <router-link activeClass="navActive" to="/product">product</router-link>
        <router-link activeClass="navActive" to="/user">user</router-link>
        <router-link activeClass="navActive" to="/reg">reg</router-link>
        <router-link activeClass="navActive" to="/login">login</router-link>
        </nav>
        <!-- <router-view></router-view> -->
    </div>
</template>
<style>
.navActive{background: #993;color: aliceblue}
</style>


