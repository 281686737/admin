<template>
    <div>
           <!--自定义组件要注意三个要素：ref,prop,slot  -->
        <div class="spinner" ref="div1">
            <slot name="s1"></slot>
            <div class="spinner-container container1">
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
                <div class="circle4"></div>
            </div>
            <div class="spinner-container container2">
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
                <div class="circle4"></div>
            </div>
            <div class="spinner-container container3">
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
                <div class="circle4"></div>
            </div>
        </div>
        <h5>{{title}}</h5>
    </div>
</template>
<style>
        .spinner {
        margin: 0px auto;
        width: 35px;
        height: 35px;
        position: relative;
        }
        
        .container1 > div, .container2 > div, .container3 > div {
        width: 6px;
        height: 6px;
        background-color: #333;
        
        border-radius: 100%;
        position: absolute;
        -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
        animation: bouncedelay 1.2s infinite ease-in-out;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        }
        
        .spinner .spinner-container {
        position: absolute;
        width: 100%;
        height: 100%;
        }
        
        .container2 {
        -webkit-transform: rotateZ(45deg);
        transform: rotateZ(45deg);
        }
        
        .container3 {
        -webkit-transform: rotateZ(90deg);
        transform: rotateZ(90deg);
        }
        
        .circle1 { top: 0; left: 0; }
        .circle2 { top: 0; right: 0; }
        .circle3 { right: 0; bottom: 0; }
        .circle4 { left: 0; bottom: 0; }
        
        .container2 .circle1 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
        }
        
        .container3 .circle1 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
        }
        
        .container1 .circle2 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
        }
        
        .container2 .circle2 {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
        }
        
        .container3 .circle2 {
        -webkit-animation-delay: -0.7s;
        animation-delay: -0.7s;
        }
        
        .container1 .circle3 {
        -webkit-animation-delay: -0.6s;
        animation-delay: -0.6s;
        }
        
        .container2 .circle3 {
        -webkit-animation-delay: -0.5s;
        animation-delay: -0.5s;
        }
        
        .container3 .circle3 {
        -webkit-animation-delay: -0.4s;
        animation-delay: -0.4s;
        }
        
        .container1 .circle4 {
        -webkit-animation-delay: -0.3s;
        animation-delay: -0.3s;
        }
        
        .container2 .circle4 {
        -webkit-animation-delay: -0.2s;
        animation-delay: -0.2s;
        }
        
        .container3 .circle4 {
        -webkit-animation-delay: -0.1s;
        animation-delay: -0.1s;
        }
        
        @-webkit-keyframes bouncedelay {
        0%, 80%, 100% { -webkit-transform: scale(0.0) }
        40% { -webkit-transform: scale(1.0) }
        }
        
        @keyframes bouncedelay {
        0%, 80%, 100% {
            transform: scale(0.0);
            -webkit-transform: scale(0.0);
        } 40% {
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
        }
        }
</style>
<script>
export default {
    props: {
        title:{
            type:String,
            default:'laoding··· '
        }
    },
    mounted() {
        this.$refs.div1.onmouseover=function(){
            console.log('交互。。。。');
          
        }
    },
}
</script>

