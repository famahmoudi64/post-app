<template>
 <form @submit.prevent="validate">
    <div class="mb-3 mt-5">
        <label for="exampleFormControlInput1" class="form-label">Title</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" v-model.lazy.trim="form.title">
    </div>
    <div class="text-danger">{{ form.titleError }}</div>
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Body</label>
        <textarea class="form-control"  id="exampleFormControlTextarea1" rows="6" v-model.lazy.trim="form.body"></textarea>
    </div>
    <div class="text-danger">{{ form.textError }}</div>

    <button class="btn btn-primary mt-3" type="submit" :disabled="buttonLoading">
      <div v-if="buttonLodaing" class="spinner-border spinner-border-sm text-dark" role="status">
      </div>  
      {{buttonText}}
    </button>
   </form>
</template>

<script>
import { reactive } from 'vue'

export default{
    props:{
        buttonLoading: Boolean,
        buttonText: String,
        post: Object
    },

    setup(props, { emit }){
        const form = reactive({
        title:'',
        body:'',
        textError:'',
        titleError:''
    })
    console.log(props)

    function setInput(){
        if(props.post !== undefined){
            form.title = props.post.title,
            form.body = props.post.body
        }
    }
   
    setInput()
    function validate(){
        if (form.title === ''){
            form.titleError = 'you have full this input'
        } else {
            form.titleError = ''
        }
        if (form.body === ''){
            form.textError='you have full textarea'
        } else {
            form.textError=''
        }
        if (form.title!=='' && form.body!==''){
            emit('formdata', form)
        }
    }
        return{ form, validate, setInput }
    }
}
</script>