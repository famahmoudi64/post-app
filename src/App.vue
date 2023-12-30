<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/section/TheHeader.vue'

export default {
  name: 'App',
components: { TheHeader }
}
</script>

<style>
</style>
