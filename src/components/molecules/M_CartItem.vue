<template>
  <div class="cart-item">
    <div class="item-image-area">
      <img :src="item.imageUrl" :alt="item.name" class="item-image" />
    </div>

    <div class="item-details">
      <h4 class="item-name">{{ item.name }}</h4>
      <p class="item-category">{{ item.category }}</p>
      <p class="item-size">Beden: {{ item.size }}</p>
      
      <div class="quantity-selector">
        <label>Miktar:</label>
        <select :value="item.quantity" @change="$emit('update:quantity', $event.target.value)">
          <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
        </select>
      </div>

      <div class="item-actions">
        <button @click="$emit('remove:item', item.id)">Sil</button>
        <button @click="$emit('move:to:favorites', item.id)">Favorilere Taşı</button>
      </div>
    </div>

    <div class="item-price-area">
      <span class="item-price">{{ formatPrice(item.price * item.quantity) }} TL</span>
      <span v-if="item.discountRate" class="discount-rate">%{{ item.discountRate }} İndirim</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'M_CartItem',
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({
        id: 'c1',
        name: 'Nike Sportswear Eşofman Altı',
        category: 'Erkek Giyim',
        price: 999.50,
        imageUrl: "https://via.placeholder.com/150x150?text=Esofman",
        size: 'L',
        quantity: 1,
        discountRate: null
      })
    },
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 2 }).format(price);
    }
  }
};
</script>

<style scoped>
.cart-item {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.item-image-area {
  width: 150px;
  margin-right: 20px;
}

.item-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.item-details {
  flex-grow: 1;
}

.item-name {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 5px 0;
}

.item-category, .item-size {
  font-size: 14px;
  color: #777;
  margin: 0 0 3px 0;
}

.quantity-selector {
    margin: 10px 0;
    font-size: 14px;
}

.quantity-selector select {
    margin-left: 5px;
    padding: 5px;
    border: 1px solid #ccc;
}

.item-actions button {
    background: none;
    border: none;
    color: #777;
    text-decoration: underline;
    cursor: pointer;
    margin-right: 15px;
    font-size: 13px;
    padding: 0;
}

.item-price-area {
  text-align: right;
  width: 120px;
}

.item-price {
  font-size: 16px;
  font-weight: 600;
  display: block;
}

.discount-rate {
    font-size: 14px;
    color: #a00;
}
</style>