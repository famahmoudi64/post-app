<template>
    <div class="container">
        <div class="row g-3 mt-3">
          <div v-if="loading" class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div v-else class='col-md-6'>
            <card-view :user="user"></card-view>
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {ref} from 'vue'
import cardView from './cardView.vue'
import { useRoute} from 'vue-router'
export default{
  components:{
    cardView
  },

    setup(){
        const user = ref({})
        const loading = ref(true)
        const route = useRoute()
 function getUser(){
    axios
    .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
  .then(function (response) {
    user.value=response.data
    loading.value=false
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error);
  })
}
getUser()
return {user, loading}
}
}
</script>