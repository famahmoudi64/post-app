<template>
                <ul class="list-group mt-5">
                 <li class="list-group-item active" aria-current="true">
                   <router-link :to="{name:'userId', params: { id : user.id}}"> {{user.name}} </router-link></li>
                 <li class="list-group-item">username: {{user.username}}</li>
                 <li class="list-group-item">email: {{user.email}}</li>
                 <li class="list-group-item">phone: {{user.phone}}</li>
                </ul>
 </template>
   
 <script>
 export default {
  props:['user']
}
</script>

<style scoped>
.active{
    background-color: rgb(254, 241, 241);
}
</style>
