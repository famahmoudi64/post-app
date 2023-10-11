<template>
    <div @click="$emit('close')"></div>
   <dialog open>
    <slot></slot>
   </dialog>
</template>
<style scoped>
dialog{
    margin:0 auto;
    position:fixed;
    width:40%;
    height:200px;
    /* left:30%; */
    background-color: white;
    top:20vh;
    box-shadow:0 2px 8px rgba(0,0,0,0.26);
    z-index:100
}
div{
    position:fixed;
    top:0;
    left:0;
    height:100vh;
    width:100vw;
    background-color: rgba(0,0,0,0.75);
    z-index:10;
}
</style>