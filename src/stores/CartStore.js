import { defineStore } from 'pinia';
import { useAuthStore } from './AuthStore'; 
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [], 
  }),
  actions: {
 
    addItem(product) {
      const authStore = useAuthStore();
      if (!authStore.isLoggedIn) {
   
        alert('Sepete ürün eklemek için lütfen önce giriş yapınız.');
        return;
      }
      

      const existingItem = this.items.find(item => item.productId === product.id);

      if (existingItem) {
   
        existingItem.quantity++;
      } else {

        this.items.push({
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      }
      alert(`${product.name} sepete eklendi!`);
    },

    removeItem(productId) {
      this.items = this.items.filter(item => item.productId !== productId);
    },

    clearCart() {
      this.items = [];
    },
    
    // Miktar Güncelleme
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.productId === productId);
        if (item) {
            item.quantity = quantity;
            if (item.quantity <= 0) {
                this.removeItem(productId);
            }
        }
    }
  },
  getters: {
    
    totalQuantity: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },


    totalPrice: (state) => {
      return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
  }
});