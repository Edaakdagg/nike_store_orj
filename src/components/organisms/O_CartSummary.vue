<template>
  <div class="cart-summary-organism">
    <h3 class="summary-title">Özet</h3>

    <div class="summary-line">
      <span>Ara Toplam:</span>
      <span class="amount">{{ formatPrice(cartTotal.subtotal) }} TL</span>
    </div>

    <div class="summary-line">
      <span>Tahmini Kargo ve İşlem:</span>
      <span class="amount">{{ cartTotal.shipping === 0 ? 'Ücretsiz' : formatPrice(cartTotal.shipping) + ' TL' }}</span>
    </div>

    <div class="summary-line total-line">
      <span class="total-label">Toplam Tutar:</span>
      <span class="total-amount">{{ formatPrice(cartTotal.total) }} TL</span>
    </div>

    <A_Button variant="primary" @click="goToCheckout" class="checkout-button">
      Ödemeye Geç
    </A_Button>

    <A_Button variant="secondary" @click="continueShopping" class="shopping-button">
      Alışverişe Devam Et
    </A_Button>
    
    <p class="vat-info">KDV dahildir</p>
  </div>
</template>

<script>
import A_Button from '../atoms/A_Button.vue';

export default {
  name: 'O_CartSummary',
  components: {
    A_Button,
  },
  props: {
    // Sepet toplamlarını prop olarak alıyoruz (mock data için)
    cartTotal: {
        type: Object,
        default: () => ({
            subtotal: 5599.40,
            shipping: 0,
            total: 5599.40
        })
    }
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 2 }).format(price);
    },
    goToCheckout() {
      console.log('Ödeme sayfasına yönlendiriliyor...');
      // Gerçekte: this.$router.push('/checkout');
    },
    continueShopping() {
      console.log('Alışverişe devam ediliyor...');
      // Gerçekte: this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.cart-summary-organism {
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #eee;
}

.summary-title {
  font-size: 20px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 20px;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 15px;
}

.summary-line.total-line {
  border-top: 1px solid #ccc;
  padding-top: 15px;
  margin-top: 15px;
}

.total-label {
  font-weight: 700;
  font-size: 18px;
}

.total-amount {
  font-weight: 700;
  font-size: 18px;
}

.checkout-button, .shopping-button {
  width: 100%;
  margin-top: 10px;
}

.vat-info {
    text-align: center;
    font-size: 12px;
    color: #777;
    margin-top: 15px;
}
</style>