<template>
  <div class="login-form-organism">
    <div v-if="auth.authError" class="alert-error">{{ auth.authError }}</div>
    
    <form @submit.prevent="handleLogin" class="auth-form">
      
      <M_EmailInput 
        v-model="email" 
        :error="emailError" 
        label="E-posta Adresi"
        placeholder="E-postanızı girin"
      />
      
      <M_PasswordInput 
        v-model="password" 
        :error="passwordError" 
        label="Şifre"
        placeholder="Şifreniz"
      />

      <A_Button type="submit" variant="primary" :disabled="auth.isLoading" class="submit-button">
        {{ auth.isLoading ? 'Giriş Yapılıyor...' : 'Giriş Yap' }}
      </A_Button>

      <p class="register-link-text">
        Hesabınız yok mu? <router-link to="/register" class="register-link">Şimdi Kayıt Olun</router-link>
      </p>
      
    </form>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/AuthStore';
import { useRouter } from 'vue-router'; 
import A_Button from '../atoms/A_Button.vue';
import M_EmailInput from '../molecules/M_EmailInput.vue';
import M_PasswordInput from '../molecules/M_PasswordInput.vue';

export default {
  name: 'O_LoginForm',
  components: {
    A_Button,
    M_EmailInput,
    M_PasswordInput,
  },
  data() {
    return {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
    };
  },
  setup() {

    const auth = useAuthStore();
  
    const router = useRouter(); 
    
   
    return { auth, router };
  },
  methods: {
    validateInputs() {
     
      this.auth.authError = null;

      
      this.emailError = this.email.includes('@') && this.email.length > 5 
                        ? '' 
                        : 'Lütfen geçerli bir e-posta adresi girin.';
      

      this.passwordError = this.password.length >= 6 
                           ? '' 
                           : 'Şifre en az 6 karakter olmalıdır.';
      
      return !this.emailError && !this.passwordError;
    },
    
    async handleLogin() {

      if (!this.validateInputs()) {
        this.auth.authError = 'Lütfen form alanlarını kontrol edin.';
        return;
      }
      
     
      await this.auth.login(this.email, this.password);

     
      if (this.auth.isLoggedIn) {
       
        this.router.push('/');
      }
     
    },
  },
};
</script>

<style scoped>

.login-form-organism {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    max-width: 400px;
    margin: 50px auto 100px auto;
    background-color: var(--color-secondary); 
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.form-title {
    font-size: 24px;
    font-weight: var(--font-weight-bold);
    margin-bottom: 30px;
    text-align: center;
}

.input-group {
    margin-bottom: 20px;
    width: 100%;
}

label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    color: var(--color-text-light);
}

.form-input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.2s;
}

.form-input:focus {
    border-color: var(--color-primary);
    outline: none;
}

.submit-button {
    width: 100%;
    background-color: var(--color-primary);
    color: var(--color-secondary);
    padding: 12px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: var(--font-weight-bold);
    margin-top: 10px;
}

.submit-button:hover:not(:disabled) {
    background-color: #333;
}

.submit-button:disabled {
    background-color: #999;
    cursor: not-allowed;
}


.register-area {
    margin-top: 20px;
    font-size: 14px;
    text-align: center;
}

.register-area a {
    font-weight: var(--font-weight-bold);
    color: var(--color-primary);
    margin-left: 5px;
}

.alert-error {
    margin-bottom: 20px;
}
</style>
