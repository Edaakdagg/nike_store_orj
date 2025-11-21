<template>
  <div class="cart-view-page">
    <div class="cart-content-wrapper">
      
      <h1 class="page-title">Sepetim</h1>

      <div v-if="cart.totalQuantity === 0" class="empty-cart">
        <h2>Sepetin şu an boş.</h2>
        <p>Hemen ürünleri incelemeye başla ve sepetini doldur!</p>
        <router-link to="/" class="shop-now-button">ALIŞVERİŞE BAŞLA</router-link>
      </div>

      <div v-else class="cart-layout">
        
        <div class="cart-items-list">
          <div v-for="item in cart.items" :key="item.productId" class="cart-item">
            
            <div class="item-details">
              <span class="item-name">{{ item.name }}</span>
              <span class="item-price">{{ (item.price * item.quantity).toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' }) }}</span>
            </div>
            
            <div class="item-actions">
              <button @click="cart.updateQuantity(item.productId, item.quantity - 1)" class="quantity-btn">-</button>
              <span class="item-quantity">{{ item.quantity }}</span>
              <button @click="cart.updateQuantity(item.productId, item.quantity + 1)" class="quantity-btn">+</button>
              
              <button @click="cart.removeItem(item.productId)" class="remove-btn">Kaldır</button>
            </div>

          </div>
        </div>

        <div class="cart-summary">
          <h2>Sipariş Özeti</h2>
          <div class="summary-line">
            <span>Ara Toplam ({{ cart.totalQuantity }} ürün)</span>
            <span>{{ cart.totalPrice.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' }) }}</span>
          </div>
          <div class="summary-line">
            <span>Kargo</span>
            <span>Ücretsiz</span>
          </div>
          <div class="summary-total">
            <span>Toplam Tutar</span>
            <span>{{ cart.totalPrice.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' }) }}</span>
          </div>
          
          <button class="checkout-button">ÖDEMEYE GEÇ</button>
          <button @click="cart.clearCart" class="clear-cart-button">Sepeti Temizle</button>
        </div>
        
      </div>

    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/CartStore';
import { useAuthStore } from '@/stores/AuthStore'; 

export default {
  name: 'CartView',
  setup() {
    const cart = useCartStore();
    const auth = useAuthStore();
    return { cart, auth };
  }
};
</script>

<style scoped>

.cart-view-page {
    padding: 40px 0;
}

.cart-content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.page-title {
    font-size: 32px;
    font-weight: var(--font-weight-bold);
    margin-bottom: 30px;
    border-bottom: 2px solid var(--color-primary);
    padding-bottom: 10px;
}


.empty-cart {
    text-align: center;
    padding: 80px 0;
    background-color: var(--color-accent);
    border-radius: 8px;
}
.empty-cart h2 {
    margin-bottom: 10px;
}
.shop-now-button {
    display: inline-block;
    background-color: var(--color-primary);
    color: var(--color-secondary);
    padding: 10px 30px;
    margin-top: 20px;
    font-weight: var(--font-weight-bold);
    border-radius: 4px;
}


.cart-layout {
    display: flex;
    gap: 40px;
}

.cart-items-list {
    flex: 3; 
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.cart-summary {
    flex: 1; /* Özet daha dar */
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: var(--color-accent);
}

.cart-summary h2 {
    font-size: 20px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
}

/* Sepet Item Stili */
.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #eee;
    background-color: var(--color-secondary);
    border-radius: 4px;
}

.item-details {
    display: flex;
    flex-direction: column;
}

.item-name {
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    margin-bottom: 5px;
}
.item-price {
    font-size: 14px;
    color: var(--color-primary);
}

.item-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.quantity-btn {
    background: #eee;
    border: 1px solid #ddd;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-weight: var(--font-weight-bold);
}

.remove-btn {
    background: none;
    border: none;
    color: #c00;
    text-decoration: underline;
    font-size: 12px;
}

/* Özet Stilleri */
.summary-line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 15px;
}

.summary-total {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: var(--font-weight-bold);
    border-top: 1px solid #ccc;
    padding-top: 15px;
    margin-top: 15px;
}

.checkout-button {
    width: 100%;
    background-color: #008000; 
    color: var(--color-secondary);
    padding: 12px;
    border: none;
    border-radius: 4px;
    font-weight: var(--font-weight-bold);
    margin-top: 20px;
}

.clear-cart-button {
    width: 100%;
    background: none;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    padding: 10px;
    margin-top: 10px;
    border-radius: 4px;
}
</style>