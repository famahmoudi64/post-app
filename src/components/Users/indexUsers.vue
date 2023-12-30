<template>
  <div  class="container">
    <div class="row g-3 mt-3">
      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class='col-md-6' v-for="user in users " :key="user.id">
        <card-view :user="user"></card-view>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import cardView from './cardView.vue'

export default {
  components:{
    cardView
  },

  setup() {
    const users = ref([])
    const loading = ref(true)
  function getUsers() {
     axios
          .get('https://jsonplaceholder.typicode.com/users')
          .then(function (response) {
            users.value=response.data
            loading.value=false  
          })
          .catch(function (error) {
            console.log(error);
          })
}
  getUsers()
  return { users, loading }
  }
}
</script>