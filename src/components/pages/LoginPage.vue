<template>
  <div class="login-page">
    <O_Header />
    <O_LoginForm />
    <O_Footer />
  </div>
</template>

<script>
import O_Header from '../organisms/O_Header.vue';
import O_Footer from '../organisms/O_Footer.vue';
import O_LoginForm from '../organisms/O_LoginForm.vue'; 

export default {
  name: 'LoginPage',
  components: { O_Header, O_Footer, O_LoginForm },
};
</script>