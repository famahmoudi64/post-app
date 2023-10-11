<template>

    <me-dialog v-if="dialog" @close="closeAlertandPost()">
        <p>you edited your post successfully!</p>
        <button class="btn btn-primary" @click="closeAlertandPost"> GotoPosts </button>
    </me-dialog>

    <div v-if="editloading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div  v-else class="col-md-6">
        <h1>Edit Post:</h1>
    <form-vue @formdata='updatePost' :buttonloading="loading" button-text="Edit Post" :post="post"></form-vue>
    </div>  
</template>

<script>
import meDialog from '@/components/section/meDialog.vue'
import {ref} from 'vue'
import axios from 'axios'
import {useRoute,useRouter} from 'vue-router'
import formVue from '@/components/section/formVue.vue'

export default{
    components:{
        meDialog,formVue
    },
    setup(){
        const dialog = ref(false)
        const route = useRoute()
        const router = useRouter()
        const loading = ref(false)
        const post = ref({})
        const editloading = ref(true)
        
      function getPost(){
      axios
           .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
           .then(function(response){
           console.log(response.data)
           post.value = response.data
           editloading.value=false
           })
           .catch(function(error){
            console.log(error)
           })
      }
      getPost()
    function updatePost(formdata){
        loading.value=true
        axios
             .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`,{
                id:route.params.id,
                body:formdata.body,
                title:formdata.title,
                userId:1
             })
             .then(function(){
              
                loading.value=false
                dialog.value = true
             })
    }
    function closeAlertandPost(){
        dialog.value = false
        router.push('/Posts') 
        }
    return {loading,closeAlertandPost,dialog,updatePost,editloading,getPost,post}
         }
}
</script>