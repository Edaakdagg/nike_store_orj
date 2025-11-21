<template>
  <div class="size-selector-container">
    <div class="size-options">
      <button 
        v-for="size in availableSizes" 
        :key="size"
        :class="['size-btn', { 'selected': selectedSize === size }]"
        @click="selectSize(size)"
      >
        {{ size }}
      </button>
    </div>
    <p v-if="!selectedSize && showWarning" class="size-warning">Lütfen bir beden seçiniz.</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'M_SizeSelector',
    props: {
        // Numara aralığı (O_ProductDetails'dan gelir)
        availableSizes: {
            type: Array,
            default: () => ['40', '41', '42', '43', '44']
        }
    },
    emits: ['sizeSelected'],
    setup(props, { emit }) {
        const selectedSize = ref(null);
        const showWarning = ref(false);

        const selectSize = (size) => {
            selectedSize.value = size;
            showWarning.value = false;
            // Seçilen bedeni üst bileşene iletiyoruz
            emit('sizeSelected', size);
        };

        // Bu fonksiyon O_ProductDetails'daki "Sepete Ekle" butonu tarafından çağrılır.
        const validate = () => {
             if (!selectedSize.value) {
                showWarning.value = true;
                return false;
            }
            return true;
        };

        return {
            selectedSize,
            showWarning,
            selectSize,
            validate
        };
    }
};
</script>

<style scoped>
.size-selector-container {
    margin-bottom: 20px;
}

/* Beden kutucuklarını düzenleyen ızgara sistemi */
.size-options {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Her satırda 3 düğme (tasarıma uygun) */
    gap: 8px; 
}

.size-btn {
    padding: 15px 0; /* Daha kalın bir görünüm */
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s;
    text-align: center;
    line-height: 1; /* Metnin ortalanması için */
}

/* Hover ve Seçim Stilleri */
.size-btn:hover {
    border-color: black;
}

.size-btn.selected {
    border-width: 2px;
    border-color: black;
    font-weight: 700;
}

.size-warning {
    color: red;
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
}

/* Küçük ekranlarda daha fazla sütun olabilir (Örn: 4'e 1fr) */
@media (min-width: 600px) {
    .size-options {
        grid-template-columns: repeat(4, 1fr); 
    }
}
</style>