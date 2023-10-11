<template>
    <div v-if="loading" class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else  class="col-md-6">
        <div class="card">
            <div class="card-header">
                {{ post.title }} 
            </div>
            <ul class="list-group list-group-flush">
               <li class="list-group-item">Body:{{ post.body }}</li>
            </ul>
            <div class="card-footer">
                <button class="btn btn-danger btn-sm me-3" @click="deletePost">
                   <div v-if="isloading" class="spinner-border spinner-border-sm text-dark" role="status">
                   </div>
                    Delete
                </button>
                <router-link :to="{name:'edit', params:{id:post.id}}" class="btn btn-dark btn-sm me-3">Edit</router-link>
               </div>
             </div>
            </div>
</template>

<script>
import {useRoute} from 'vue-router'
import axios from 'axios'
import {ref} from 'vue'
import Swal from 'sweetalert2'
export default{
    setup(){
        const route = useRoute()
        const post = ref({})
        const loading = ref(true)
        const isloading=ref(false)

        function getPost(){
            axios
                 .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
                 .then(function(response){
                 console.log(response)
                 post.value = response.data
                 loading.value = false
              })
              .catch(function (error) {
               console.log(error);
         })
       }
        getPost()
        function deletePost(){
            isloading.value=true
            axios
                .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
                .then(function(){
                    Swal.fire({
                        icon: 'warning',
                         title: 'your post was deleted seuccessfully',
                         ConfirmButtonText:'ok',
                        })
                        isloading.value=false
                })
        }
        return{ loading,post,route,deletePost,isloading }
        }
    }
   
</script>

<style scoped>
.card-header{
    background-color: rgb(254, 241, 241);
}
.card-footer{
    background-color: rgb(254, 241, 241);
}
</style>