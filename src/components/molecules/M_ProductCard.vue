<template>
  <div class="product-card-molecule">
    <router-link :to="`/product/${product.id}`" class="product-link">
      
      <div class="product-image">
        <img :src="`/images/${product.imageUrl}`" 
             :alt="product.name" 
             class="product-thumbnail" 
             v-if="product.imageUrl">
        
        <div class="placeholder-image" v-else>
            [Resim Alanı]
        </div>
        
      </div>
      
      <div class="product-info">
        <p class="product-category">{{ product.category }}</p>
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">{{ formattedPrice }}</p>
      </div>
    </router-link>
    
    <button @click="addToCart" class="add-to-cart-btn">Sepete Ekle</button>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/CartStore'; 

export default {
  name: 'M_ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({ 
        id: 0, 
        name: 'Ürün Adı', 
        category: 'Kategori', 
        price: 0, 
        imageUrl: '' 
      })
    }
  },
  setup() {
    const cartStore = useCartStore();
    return { cartStore }; 
  },
  computed: {
    formattedPrice() {
      if (this.product && typeof this.product.price === 'number') {
          return this.product.price.toLocaleString('tr-TR', { 
            style: 'currency', 
            currency: 'TRY' 
          });
      }
      return 'Fiyat Bilgisi Yok';
    }
  },
  methods: {
    addToCart() {
      this.cartStore.addItem(this.product);
    }
  }
};
</script>

<style scoped>
/* Kart Konteyneri */
.product-card-molecule {
  min-height: 480px; 
  
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  
  background-color: var(--color-secondary);
  border-radius: 0;
  overflow: hidden;
  transition: box-shadow 0.3s;
  padding: 0;
  border: none;
}

.product-card-molecule:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.product-link {
    text-decoration: none;
    color: var(--color-primary);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

/* Resim Alanı */
.product-image {
    height: 300px; 
    overflow: hidden;
}

.product-thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.placeholder-image {
  background-color: var(--color-accent);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  font-size: 14px;
  color: var(--color-text-light);
}

.product-info {
    padding: 15px 10px;
    flex-grow: 1; 
}

.product-category {
  font-size: 14px;
  color: var(--color-text-light);
  margin: 0 0 2px 0;
}

.product-name {
  font-size: 16px;
  font-weight: var(--font-weight-medium);
  margin: 0 0 5px 0;
  color: var(--color-primary);
}

.product-price {
  font-size: 16px;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin: 0 0 15px 0;
}


.add-to-cart-btn {
  margin-top: auto; 
  background-color: var(--color-primary);
  color: var(--color-secondary);
  border: none;
  padding: 12px 0;
  cursor: pointer;
  border-radius: 4px;
  margin: 10px 10px 10px 10px;
  font-weight: var(--font-weight-medium);
}

.add-to-cart-btn:hover {
  background-color: #333;
}
</style>