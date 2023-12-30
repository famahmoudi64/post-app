<template>
  <div class="col-md-6">
    <h1>Create Post:</h1>
  </div>
  <form-vue @formdata="createPost" :button-loading="loading" button-text="Create Post"></form-vue>
</template>

<script>
import {ref} from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import formVue from '@/components/section/formVue.vue'

export default{
  components:{
    formVue
  },
   setup(){
    const loading = ref(false)
    function createPost(formdata){
        loading.value = true
      axios
           .post('https://jsonplaceholder.typicode.com/posts',{
           userId: 1,
           title: formdata.title,
           body: formdata.body
      })
          .then(function(){
              formdata.title =''
              formdata.body =''
              loading.value = false

              Swal.fire({
               icon:'success',
               title: 'your post submitted!',
               ConfirmButtonText:'cool',
              })
          })
          .catch(function(error){
              console.log(error)
          })
    }
       return{loading,createPost}
  }
}
</script>