import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.vue'
import TheHome from './components/Pages/TheHome.vue'
import indexUsers from './components/Users/indexUsers.vue'

import showUser from './components/Users/showUser.vue'
import TemplateUsers from './components/Users/TemplateUsers.vue'
import TemplatePosts from './components/Posts/TemplatePosts.vue'
import indexPosts from './components/Posts/indexPosts.vue'
import showPost from './components/Posts/showPost.vue'
import createPost from './components/Posts/createPost.vue'
import editPost from './components/Posts/editPost.vue'

  const routes =[
    { path:'/', component:TheHome},
    { path:'/Users', name:'users', component:TemplateUsers, children:[
      {path:'', name:'users', component:indexUsers},
      {path:':id',name:'userId', component:showUser}
    ]},
    {path:'/Posts',name:'posts', component:TemplatePosts, children:[
      {path:'', name:'posts', component:indexPosts},
      {path:':id', name:'postId', component:showPost},
      {path:'create', name:'create', component:createPost},
      {path:'edit/:id', name:'edit', component:editPost}
    ]}
  ];
  const router1 = createRouter({
    history:createWebHistory(),
    routes
  })

const app = createApp(App)
app.use(router1)

app.mount('#app')
