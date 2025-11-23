<template>
  <div class="register-page-container">
    <div class="register-form-wrapper">
      
      <div class="logo-area">
        <span class="nike-logo"></span> </div>
      
      <h1 class="main-title">Şimdi bir Nike Üyesi Olun.</h1>
      
      <div v-if="authStore.error" class="error-message">
        {{ authStore.error }}
      </div>

      <form @submit.prevent="handleRegister" class="registration-form">
        
        <div class="input-group">
            <input type="email" v-model="form.email" placeholder="E-posta Adresi" required />
            <span class="resend-code">Kodu Tekrar Gönder</span> </div>

        <div class="name-group">
            <input type="text" v-model="form.firstName" placeholder="Adınız*" required />
            <input type="text" v-model="form.lastName" placeholder="Soyadınız*" required />
        </div>

        <div class="input-group password-group">
            <input :type="passwordVisible ? 'text' : 'password'" v-model="form.password" placeholder="Şifreniz*" required />
            <span class="toggle-password" @click="passwordVisible = !passwordVisible">
                <i v-if="passwordVisible">👁️</i>
                <i v-else>🔒</i>
            </span>
            <div class="password-rules">
                <p :class="{ 'valid': form.password.length >= 8 }">✗ Minimum 8 karakter</p>
                <p :class="{ 'valid': hasUpperLowerAndNumber }">✗ Büyük/küçük harf ve bir rakam</p>
            </div>
        </div>
        
        <div class="input-group">
            <select v-model="form.preference" required>
                <option value="" disabled>Alışveriş Tercihi*</option>
                <option value="men">Erkek</option>
                <option value="women">Kadın</option>
                <option value="other">Diğer</option>
            </select>
        </div>

        <div class="dob-group">
            <p>Doğum Tarihi</p>
            <div class="dob-inputs">
                <input type="text" v-model="form.dobMonth" placeholder="Ay*" required />
                <input type="text" v-model="form.dobDay" placeholder="Gün*" required />
                <input type="text" v-model="form.dobYear" placeholder="Yıl*" required />
            </div>
             <p class="reward-text">Doğum gününüzde bir Nike Üyeliği Ödülü kazanın.</p>
        </div>

        <div class="checkbox-group">
            <label>
                <input type="checkbox" v-model="form.agreedEmails" />
                <span>Nike ürünleri, teklifleri ve Üye avantajları hakkında e-posta almak istiyorum.</span>
            </label>
            <label>
                <input type="checkbox" v-model="form.agreedTerms" required />
                <span>Nike'ın <a href="#" class="policy-link">Gizlilik Politikası</a> ve <a href="#" class="policy-link">Kullanım Şartları</a>'nı kabul ediyorum.</span>
            </label>
        </div>

        <button type="submit" :disabled="authStore.isLoading" class="create-account-btn">
            {{ authStore.isLoading ? 'Hesap Oluşturuluyor...' : 'Hesap Oluştur' }}
        </button>
      </form>

    </div>
  </div>
</template>

<script>
import { reactive, ref, computed } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';
import { useRouter } from 'vue-router';

export default {
    name: 'RegisterPage',
    setup() {
        const authStore = useAuthStore();
        const router = useRouter();
        
        const passwordVisible = ref(false);
        
        const form = reactive({
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            preference: '',
            dobMonth: '',
            dobDay: '',
            dobYear: '',
            agreedEmails: false,
            agreedTerms: false,
        });

        const hasUpperLowerAndNumber = computed(() => {
            const p = form.password;
            return /[A-Z]/.test(p) && /[a-z]/.test(p) && /[0-9]/.test(p);
        });

        const handleRegister = async () => {
         
            if (form.password.length < 8 || !hasUpperLowerAndNumber.value) {
                authStore.error = "Lütfen tüm şifre kurallarına uyunuz.";
                return;
            }

            
            const success = await authStore.registerUser(form);

            if (success) {
                router.push({ name: 'home' }); 
            }
        };

        return {
            form,
            authStore,
            passwordVisible,
            hasUpperLowerAndNumber,
            handleRegister
        };
    }
};
</script>

<style scoped>

.register-page-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 50px 20px;
    background-color: #f7f7f7;
}

.register-form-wrapper {
    width: 100%;
    max-width: 450px; 
    background: white;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.logo-area {
    text-align: center;
    margin-bottom: 20px;
}

.nike-logo {

    display: inline-block;
    width: 50px;
    height: 18px;
    background: url('/images/nike_logo.png') no-repeat center center; 
    background-size: contain;
}

.main-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 30px;
    text-align: center;
}

.error-message {
    padding: 10px;
    margin-bottom: 20px;
    background-color: #ffeaea;
    color: red;
    border: 1px solid red;
    border-radius: 4px;
    font-size: 14px;
}


.registration-form input:not([type="checkbox"]),
.registration-form select {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;
    transition: border-color 0.2s;
}

.registration-form input:focus,
.registration-form select:focus {
    border-color: black;
    outline: none;
}



.name-group {
    display: flex;
    gap: 15px;
}
.name-group input {
    flex: 1;
}

.input-group {
    position: relative;
    margin-bottom: 15px;
}


.resend-code {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 13px;
    color: #888;
    cursor: pointer;
    text-decoration: underline;
}

/* Şifre Grubu */
.password-group {
    margin-bottom: 30px;
}

.toggle-password {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 18px;
    color: #888;
}

.password-rules {
    font-size: 13px;
    color: #888;
    line-height: 1.4;
    padding-left: 5px;
    margin-top: -10px;
}

.password-rules p.valid {
    color: green;
}


/* Doğum Tarihi Grubu */
.dob-group {
    margin-bottom: 30px;
}
.dob-group > p {
    font-size: 14px;
    color: #333;
    margin-bottom: 10px;
    font-weight: 600;
}
.dob-inputs {
    display: flex;
    gap: 10px;
}
.dob-inputs input {
    flex: 1;
    margin-bottom: 0;
    text-align: center;
}
.reward-text {
    font-size: 13px;
    color: #888;
    margin-top: 10px;
    text-align: center;
}

/* Onay Kutuları */
.checkbox-group label {
    display: block;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 15px;
    cursor: pointer;
    color: #333;
}

.checkbox-group input[type="checkbox"] {
    width: auto;
    margin-right: 10px;
    padding: 0;
    vertical-align: middle;
}

.policy-link {
    color: black;
    text-decoration: underline;
    font-weight: 600;
}


.create-account-btn {
    width: 100%;
    background-color: black;
    color: white;
    border: none;
    padding: 15px 0;
    font-size: 16px;
    font-weight: 600;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.2s;
    margin-top: 20px;
}

.create-account-btn:hover:not(:disabled) {
    background-color: #333;
}

.create-account-btn:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}


@media (max-width: 600px) {
    .register-page-container {
        padding: 20px 10px;
    }
    .register-form-wrapper {
        padding: 15px;
    }
    .name-group, .dob-inputs {
        flex-direction: column;
        gap: 0;
    }
    .name-group input {
        margin-bottom: 15px;
    }
}
</style>
