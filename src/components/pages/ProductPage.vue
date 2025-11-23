<template>
  <div class="product-page">
    <O_Header />

    <main class="product-main-content">
      <O_ProductDetails :productId="$route.params.id" />

      <O_ProductGrid title="Bunları da Beğenebilirsin" />
    </main>

    <O_Footer />
  </div>
</template>

<script>
import O_Header from '../organisms/O_Header.vue';
import O_Footer from '../organisms/O_Footer.vue';
import O_ProductGrid from '../organisms/O_ProductGrid.vue';
import O_ProductDetails from '../organisms/O_ProductDetails.vue'; 

export default {
  name: 'ProductPage',
  components: {
    O_Header,
    O_Footer,
    O_ProductGrid,
    O_ProductDetails, 
  },
};
</script>

<style scoped>
.product-main-content {
    padding: 20px 40px;
}

</style>
