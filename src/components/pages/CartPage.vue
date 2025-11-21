<template>
  <div class="cart-view-page">
    <div class="cart-content-wrapper">

      <h1 class="page-title">Sepetim</h1>

      <div v-if="cartStore.itemCount === 0" class="empty-cart">
        <h2>Sepetiniz boş!</h2>
        <p>Hemen ürünleri incelemeye başla ve sepetini doldur!</p>
        </div>

      <div v-else class="cart-layout">
        
        <div class="cart-items-list">
          <div v-for="item in cartStore.items" :key="item.productId" class="cart-item">
            
            <div class="item-details">
              <img :src="`/images/${item.imageUrl}`" :alt="item.name" class="item-image">
              <div class="item-info">
                <span class="item-name">{{ item.name }}</span>
                <span v-if="item.selectedSize" class="item-size">Beden: {{ item.selectedSize }}</span>
                <span class="item-price">{{ (item.price * item.quantity).toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' }) }}</span>
              </div>
            </div>

            <div class="item-actions">
              <button @click="cartStore.updateQuantity(item.productId, item.quantity - 1)" 
                      :disabled="item.quantity <= 1"
                      class="quantity-btn">
                      –
              </button>
              <span class="item-quantity">{{ item.quantity }}</span>
              <button @click="cartStore.updateQuantity(item.productId, item.quantity + 1)" class="quantity-btn">+</button>
              
              <button @click="cartStore.removeItem(item.productId)" class="remove-btn">Kaldır</button>
            </div>
            
          </div>
        </div>
        
        <O_CartSummary />
        
      </div>
      
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/CartStore';
import O_CartSummary from '../organisms/O_CartSummary.vue'; // Özeti daha önce yapmıştık

export default {
    name: 'CartPage',
    components: {
        O_CartSummary
    },
    setup() {
        const cartStore = useCartStore();
        return { cartStore };
    }
};
</script>

<style scoped>
.cart-view-page {
    max-width: 1300px;
    margin: 40px auto;
    padding: 0 20px;
}

.page-title {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 30px;
    border-bottom: 2px solid var(--color-primary);
    padding-bottom: 10px;
}

.empty-cart {
    text-align: center;
    padding: 50px 0;
}

.cart-layout {
    display: flex;
    gap: 30px;
    align-items: flex-start;
}

/* Ürün Listesi Stilleri */
.cart-items-list {
    flex: 2; /* Sepet listesi daha geniş */
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding: 20px 0;
}

.item-details {
    display: flex;
    gap: 15px;
    align-items: center;
}

.item-image {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 4px;
    border: 1px solid #eee;
    padding: 5px;
}

.item-info {
    display: flex;
    flex-direction: column;
}

.item-name {
    font-weight: 600;
    font-size: 18px;
}

/* ✨ YENİ STİL */
.item-size {
    font-size: 14px;
    color: #666;
    margin: 5px 0;
}

.item-price {
    font-weight: 700;
    font-size: 16px;
    color: var(--color-primary);
}

.item-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.quantity-btn {
    background: none;
    border: 1px solid #ccc;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 16px;
}

.item-quantity {
    font-weight: 600;
}

.remove-btn {
    background: none;
    border: none;
    color: var(--color-error);
    cursor: pointer;
    margin-left: 10px;
    text-decoration: underline;
}

@media (max-width: 900px) {
    .cart-layout {
        flex-direction: column;
    }

    .cart-items-list {
        order: 2;
        flex: 1;
    }

    .item-details {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>