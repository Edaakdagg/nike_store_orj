<template>
  <div class="product-list-container">
    
    <div v-if="productStore.isLoading" class="loading-state">
      Ürünler yükleniyor...
    </div>

    <div v-else-if="productStore.error" class="error-state">
      Hata: {{ productStore.error }}
    </div>

    <div v-else class="product-grid-wrapper">
      <M_ProductCard 
        v-for="product in productStore.products" 
        :key="product.id" 
        :product="product" 
      />
    </div>

  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useProductStore } from '@/stores/ProductStore'; 
import M_ProductCard from '@/components/molecules/M_ProductCard.vue'; 

export default {
  name: 'O_ProductGrid',
  components: {
    M_ProductCard,
  },
  setup() {
    const productStore = useProductStore();

    onMounted(() => {
      // Sadece ürünler boşsa çek
      if (productStore.products.length === 0) {
        productStore.fetchProducts();
      }
    });

    return {
      productStore,
    };
  },
};
</script>

<style scoped>

.product-grid-wrapper {
    display: grid;
    
   
    grid-template-columns: repeat(3, 1fr); 
    
    gap: 30px; 
    padding: 0 0 40px 0; 
}


.loading-state, .error-state {
    text-align: center;
    padding: 50px;
    font-size: 1.2em;
    color: var(--color-text-light);
}


@media (max-width: 1024px) {
    .product-grid-wrapper {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
}


@media (max-width: 600px) {
    .product-grid-wrapper {
        grid-template-columns: 1fr;
        gap: 15px;
    }
}
</style>
