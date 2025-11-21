import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    user: null, 
    
    
    authError: null,
    isLoading: false,
  }),
  actions: {
    async login(email, password) {
      this.isLoading = true;
      this.authError = null;

      
      await new Promise(resolve => setTimeout(resolve, 1000)); 

      if (email === 'test@nike.com' && password === '123456') {
        this.isLoggedIn = true;
        this.user = { email: email, name: 'Nike Üyesi' };
        
      } else {
        this.authError = 'E-posta veya şifre hatalı. Lütfen "test@nike.com" ve "123456" kullanın.';
        this.isLoggedIn = false;
        this.user = null;
      }
      this.isLoading = false;
    },
    
    async logout() {
      this.isLoading = true;
      await new Promise(resolve => setTimeout(resolve, 500)); 
      
      this.isLoggedIn = false;
      this.user = null;
      this.isLoading = false;
    },

    async register(userData) {
      this.isLoading = true;
      this.authError = null;

      
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      
      
      this.isLoading = false;
      return true; 
    }
  },
});