<template>
  <div class="o-register-form-container">
    <A_NikeLogo />

    <h1>Haydi seni Nike Üyesi yapalım.</h1>
    <p class="email-info">Kodu şuraya gönderdik: edaakdag2003@gmail.com <a href="#" class="edit-email">Düzenle</a></p>

    <form @submit.prevent="handleRegister" class="register-form">
      <div class="form-group">
        <label for="code" class="sr-only">Kodu girin</label>
        <input 
          type="text" 
          id="code" 
          v-model="registrationData.code" 
          placeholder="Kod*" 
          class="form-control"
          required>
        <span class="code-timer">23 saniye içinde kodu tekrar gönder</span>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="firstName" class="sr-only">Adınız</label>
          <input 
            type="text" 
            id="firstName" 
            v-model="registrationData.firstName" 
            placeholder="Adı*" 
            class="form-control"
            required>
        </div>
        <div class="form-group">
          <label for="lastName" class="sr-only">Soyadınız</label>
          <input 
            type="text" 
            id="lastName" 
            v-model="registrationData.lastName" 
            placeholder="Soyadı*" 
            class="form-control"
            required>
        </div>
      </div>

      <div class="form-group">
        <label for="password" class="sr-only">Şifreniz</label>
        <div class="password-input-wrapper">
          <input 
            :type="passwordFieldType" 
            id="password" 
            v-model="registrationData.password" 
            placeholder="Şifre*" 
            class="form-control"
            required>
          <span class="password-toggle" @click="togglePasswordVisibility">
            <i :class="passwordFieldType === 'password' ? 'far fa-eye' : 'far fa-eye-slash'"></i>
          </span>
        </div>
        <ul class="password-rules">
          <li :class="{ 'valid': passwordValidations.minLength }">En az 8 karakter</li>
          <li :class="{ 'valid': passwordValidations.hasMixedCase && passwordValidations.hasNumber }">Büyük harf, küçük harf ve bir rakam</li>
        </ul>
      </div>

      <div class="form-group select-group">
        <label for="shoppingPreference" class="sr-only">Alışveriş Tercihi</label>
        <select 
          id="shoppingPreference" 
          v-model="registrationData.shoppingPreference" 
          class="form-control"
          required>
          <option value="" disabled selected>Alışveriş Tercihi*</option>
          <option value="male">Erkek</option>
          <option value="female">Kadın</option>
          <option value="other">Diğer</option>
        </select>
        <span class="select-arrow"></span>
      </div>

      <div class="form-group date-of-birth-group">
        <p class="dob-title">Doğum Tarihi</p>
        <div class="dob-inputs">
          <label for="birthDay" class="sr-only">Gün</label>
          <input type="text" id="birthDay" v-model="registrationData.birthDay" placeholder="Gün*" class="form-control" required>
          <label for="birthMonth" class="sr-only">Ay</label>
          <input type="text" id="birthMonth" v-model="registrationData.birthMonth" placeholder="Ay*" class="form-control" required>
          <label for="birthYear" class="sr-only">Yıl</label>
          <input type="text" id="birthYear" v-model="registrationData.birthYear" placeholder="Yıl*" class="form-control" required>
        </div>
        <p class="dob-info">Doğum gününde Nike Üye Ödülü kazanırsın.</p>
      </div>

      <div class="form-group checkbox-group">
        <label class="checkbox-label">
          <input type="checkbox" v-model="registrationData.receiveUpdates">
          <span>Nike'tan ürünler, teklifler ve Üye avantajlarına yönelik güncellemeler almak için e-postalara kaydol.</span>
        </label>
        <label class="checkbox-label">
          <input type="checkbox" v-model="registrationData.acceptTerms" required>
          <span>Nike'ın <a href="#">Gizlilik Politikası</a> ve <a href="#">Kullanım Şartları</a>'nı kabul ediyorum.</span>
        </label>
      </div>

      <button type="submit" class="btn-primary">Hesap Oluştur</button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import A_NikeLogo from '@/components/atoms/A_NikeLogo.vue';

const registrationData = ref({
  code: '',
  firstName: '',
  lastName: '',
  password: '',
  shoppingPreference: '',
  birthDay: '',
  birthMonth: '',
  birthYear: '',
  receiveUpdates: false,
  acceptTerms: false,
});

const passwordFieldType = ref('password');

const togglePasswordVisibility = () => {
  passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password';
};

const passwordValidations = computed(() => {
  const password = registrationData.value.password;
  return {
    minLength: password.length >= 8,
    hasMixedCase: /[a-z]/.test(password) && /[A-Z]/.test(password),
    hasNumber: /\d/.test(password),
  };
});

const handleRegister = () => {
  if (registrationData.value.acceptTerms && passwordValidations.value.minLength && passwordValidations.value.hasMixedCase && passwordValidations.value.hasNumber) {
    console.log('Kayıt Verileri:', registrationData.value);
    alert('Kayıt başarılı! (Konsolu kontrol edin)');
   
  } else {
    alert('Lütfen tüm alanları doldurun ve koşulları kabul edin.');
  }
};
</script>

<style scoped>
.o-register-form-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Ortalamak için */
  padding: 40px 20px;
  max-width: 450px; /* Nike'ın sayfasındaki form genişliğine yakın */
  margin: 50px auto; /* Üstten ve alttan boşluk bırak */
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05); /* Hafif gölge */
  border-radius: 8px;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #111;
}

.email-info {
  font-size: 14px;
  color: #555;
  margin-bottom: 30px;
  text-align: center;
}

.email-info .edit-email {
  color: #007bff; /* Mavi link rengi */
  text-decoration: underline;
}

.register-form {
  width: 100%;
}

.form-group {
  margin-bottom: 20px;
  position: relative; /* Şifre gözü için */
}

.form-row {
  display: flex;
  gap: 15px; /* Ad ve Soyadı arasında boşluk */
  margin-bottom: 20px;
}

.form-row .form-group {
  flex: 1; /* Eşit genişlikte olmaları için */
  margin-bottom: 0; /* İçteki form-group'ların kendi marginleri olmasın */
}

.form-control {
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 15px;
  color: #333;
  outline: none;
  transition: border-color 0.2s;
}

.form-control::placeholder {
  color: #aaa;
}

.form-control:focus {
  border-color: #111; /* Odaklandığında siyah çerçeve */
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Kod alanı ve timer */
.code-timer {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  font-size: 13px;
  color: #888;
  white-space: nowrap; /* Timer'ın alt satıra inmesini engeller */
}

/* Şifre Alanı */
.password-input-wrapper {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #888;
}

.password-rules {
  list-style: none;
  padding: 0;
  margin-top: 5px;
  font-size: 13px;
  color: #888;
}

.password-rules li {
  margin-bottom: 3px;
}

.password-rules li::before {
  content: '✕'; /* Hata işareti */
  color: #f00; /* Kırmızı */
  margin-right: 5px;
}

.password-rules li.valid::before {
  content: '✓'; /* Geçerli işareti */
  color: #0a0; /* Yeşil */
}

/* Select Alanı */
.select-group {
  position: relative;
}

.select-group .form-control {
  appearance: none; /* Varsayılan select okunu gizle */
  padding-right: 35px; /* Özel ok için yer aç */
}

.select-arrow {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg); /* Ok şekli */
  width: 8px;
  height: 8px;
  border-bottom: 2px solid #555;
  border-right: 2px solid #555;
  pointer-events: none; /* Tıklamayı engelle */
}

/* Doğum Tarihi Alanı */
.date-of-birth-group {
  margin-bottom: 30px;
}

.dob-title {
  font-size: 15px;
  font-weight: 500;
  color: #333;
  margin-bottom: 10px;
}

.dob-inputs {
  display: flex;
  gap: 10px;
}

.dob-inputs .form-control {
  flex: 1; /* Eşit genişlikte olmaları için */
  text-align: center; /* Sayıların ortalanması */
}

.dob-info {
  font-size: 13px;
  color: #888;
  margin-top: 10px;
}

/* Checkbox Alanları */
.checkbox-group {
  margin-bottom: 30px;
}

.checkbox-label {
  display: flex;
  align-items: flex-start; /* Metin birden fazla satırsa üstten başla */
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 14px;
  color: #555;
  line-height: 1.4;
}

.checkbox-label input[type="checkbox"] {
  margin-right: 10px;
  flex-shrink: 0; /* Checkbox'ın küçülmesini engelle */
  width: 18px; /* Daha büyük checkbox */
  height: 18px;
  border: 1px solid #ccc;
  border-radius: 2px;
  appearance: none;
  background-color: #eee;
  position: relative;
}

.checkbox-label input[type="checkbox"]:checked {
  background-color: #111; /* İşaretlendiğinde siyah */
  border-color: #111;
}

.checkbox-label input[type="checkbox"]:checked::after {
  content: '✓'; /* Tik işareti */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 14px;
  font-weight: bold;
}

.checkbox-label a {
  color: #007bff;
  text-decoration: underline;
}

/* Buton */
.btn-primary {
  width: 100%;
  padding: 14px;
  background-color: #111; /* Siyah buton */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #555; /* Hover'da koyu gri */
}
</style>