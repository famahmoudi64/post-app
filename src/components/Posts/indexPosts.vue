<template>
   <div v-if="loading" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
   </div>
   <div v-else class="container">
      <router-link class="btn btn-primary" :to="{name:'create'}">Create Post</router-link>
   </div> 
   <div class="col-md-4" v-for="post in posts" :key="post.id">
      <div class="card">
         <div class="card-header">
            <router-link :to="{name:'postId' , params:{ id : post.id }}">{{post.title}}</router-link> 
         </div>
         <ul class="list-group list-group-flush">
            <li class="list-group-item">Body:{{ post.body }}</li>
         </ul>
      </div>
   </div>
</template>

<script>
import axios from 'axios'
import {ref} from 'vue'

export default{
   setup() {
   const posts = ref([])
   const loading = ref(true)
      
   function getPosts(){
      axios
           .get('https://jsonplaceholder.typicode.com/posts')
           .then(function(response){
               console.log(response)
               posts.value = response.data
               loading.value = false
           })
           .catch(function (error) {
               console.log(error);
           })
   }
      getPosts()
      return{ posts,loading }
    }
 }
</script>

<style scoped>
.card-header{
    background-color: rgb(254, 241, 241);
}
</style>