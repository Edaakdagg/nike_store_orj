<script setup>
import { RouterView } from 'vue-router';
import O_Header from './components/organisms/O_Header.vue';
import O_Footer from './components/organisms/O_Footer.vue'; 
</script>

<template>
  <O_Header />
  
  <main class="content-wrapper">
    <RouterView /> </main>
  
  <O_Footer /> 
</template>