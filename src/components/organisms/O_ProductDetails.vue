<template>
  <div class="product-details-view">

    <div v-if="product" class="product-wrapper">

      <div class="product-media-area">

        <span class="high-rating-badge">★ Yüksek Puanlı</span>
        
        <A_ImageGallery
            :galleryUrls="product.galleryUrls || []"
            :mainImage="mainImageUrl"
            :productName="product.name"
            @imageSelected="updateMainImage"
        />
      </div>

      <div class="product-info-area">
        
        <p class="product-category">{{ product.category }}</p>
        <h1 class="product-name">{{ product.name }}</h1>
        <p class="product-price">{{ formattedPrice }}</p>
        
        <div class="size-guide-header">
            <span class="size-label">Numara/Beden Seç</span>
            <a href="#" class="size-guide-link">Beden/Numara Rehberi</a>
        </div>

        <M_SizeSelector 
            ref="sizeSelectorRef"
            :availableSizes="['35.5', '36', '36.5', '37.5', '38', '38.5', '39', '40', '40.5', '41', '42', '42.5', '43', '44', '44.5', '45', '45.5', '46', '47', '47.5', '48.5', '50']"
            @sizeSelected="handleSizeSelection"
        />
        
        <div class="action-buttons">
             <button @click="handleAddToCart" class="add-to-cart-btn">Sepete Ekle</button>
            <button class="favorite-btn">Favori ♡</button>
        </div>
        
        <p class="campaign-info">Bu ürün site promosyonları ve indirimleri kapsamında değildir.</p>

        <p class="product-short-description">{{ product.description }}</p>
        
        <ul class="style-info-list">
            <li><strong>Gösterilen Renk:</strong> {{ product.category.includes('Ayakkabı') ? 'Beyaz/Metalik Gümüş' : 'Siyah/Gri' }}</li>
            <li><strong>Stil:</strong> FD9876-101</li>
            <li><strong>Menşe Ülke/Bölge:</strong> Vietnam</li>
        </ul>

        <div class="product-accordion">
            <div class="accordion-item">
                <button class="accordion-header" @click="toggleAccordion('details')">
                    <span>Ürün Ayrıntıları</span>
                    <span class="toggle-icon">{{ activeAccordion === 'details' ? '—' : '+' }}</span>
                </button>

                <div v-if="activeAccordion === 'details'" class="accordion-content">
                    <p>{{ product.description }}</p>
                </div>
            </div>

            <div class="accordion-item">
                <button class="accordion-header" @click="toggleAccordion('shipping')">
                    <span>Ücretsiz Kargo ve İade Olanağı</span>
                    <span class="toggle-icon">{{ activeAccordion === 'shipping' ? '—' : '+' }}</span>
                </button>

                <div v-if="activeAccordion === 'shipping'" class="accordion-content">
                    <p>Standart teslimat 3-5 iş günü sürmektedir. Ücretsiz iade süresi 30 gündür.</p>
                </div>
            </div>
        </div>
      </div>
    </div>

    <div v-else-if="productStore.isLoading" class="loading-state">Ürün yükleniyor...</div>
    <div v-else class="error-state">Ürün bulunamadı.</div>
  </div>
</template>

<script>

import { ref, computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '@/stores/ProductStore';
import { useCartStore } from '@/stores/CartStore';
import A_ImageGallery from '../atoms/A_ImageGallery.vue';
import M_SizeSelector from '../molecules/M_SizeSelector.vue'; 

export default {
    name: 'O_ProductDetails',
    components: {
        A_ImageGallery,
        M_SizeSelector, 
    },
    setup() {
        const route = useRoute();
        const productStore = useProductStore();
        const cartStore = useCartStore();

        const product = ref(null);
        const mainImageUrl = ref('');
        const activeAccordion = ref(null);
        const selectedSize = ref(null);
        const sizeSelectorRef = ref(null);

        watchEffect(() => {
            const id = parseInt(route.params.id);
            if (id) {
                if (productStore.products.length === 0) {
                    productStore.fetchProducts().then(() => {
                        product.value = productStore.getProductById(id);
                        if (product.value) {
                            mainImageUrl.value = product.value.imageUrl;
                        }
                    });
                } else {
                    product.value = productStore.getProductById(id);
                    if (product.value) {
                        mainImageUrl.value = product.value.imageUrl;
                    }
                }
            }
        });

        const formattedPrice = computed(() => {
            if (product.value && typeof product.value.price === 'number') {
                return product.value.price.toLocaleString('tr-TR', {
                    style: 'currency',
                    currency: 'TRY'
                });
            }
            return 'Fiyat Bilgisi Yok';
        });

        const toggleAccordion = (name) => {
            activeAccordion.value = activeAccordion.value === name ? null : name;
        };

        const updateMainImage = (url) => {
            mainImageUrl.value = url;
        };

        const handleSizeSelection = (size) => {
            selectedSize.value = size;
        };

        const handleAddToCart = () => {
            if (sizeSelectorRef.value && sizeSelectorRef.value.validate()) {
                const itemToAdd = {
                    ...product.value,
                    selectedSize: selectedSize.value, 
                };
                cartStore.addItem(itemToAdd);
                alert(`Ürün sepete eklendi: ${product.value.name}, Beden: ${selectedSize.value}`);
            } else {
                alert('Lütfen devam etmeden önce bir beden seçiniz.');
            }
        };

        return {
            product,
            formattedPrice,
            productStore,
            mainImageUrl,
            activeAccordion,
            toggleAccordion,
            updateMainImage,
            sizeSelectorRef,
            handleSizeSelection,
            handleAddToCart
        };
    }
};
</script>

<style scoped>
/* Genel Düzen ve Konteynerler */
.product-details-view {
    max-width: 1300px;
    margin: 40px auto;
    padding: 0 20px;
}

.product-wrapper {
    display: flex;
    gap: 40px;
}

/* 1. GÖRSEL ALAN */
.product-media-area {
    flex: 1; 
    max-width: 60%; 
    display: flex;
    flex-direction: row;
    position: relative; /* Yüksek Puan için */
}

.high-rating-badge {
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: white;
    color: black;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 600;
    z-index: 10;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

/* 2. BİLGİ ALANI */
.product-info-area {
    flex: 1; 
    max-width: 40%; 
    padding-top: 5px; 
}

/* Tipografi */
.product-category {
    font-size: 16px;
    font-weight: 500;
    color: #999; 
    margin-bottom: 5px;
}

.product-name {
    font-size: 28px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 10px;
}

.product-price {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 30px;
}

/* Beden Rehberi Kısmı */
.size-guide-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.size-label {
    font-size: 16px;
    font-weight: 500;
    color: black;
}

.size-guide-link {
    font-size: 14px;
    color: #555;
    text-decoration: underline;
    transition: color 0.2s;
}

.size-guide-link:hover {
    color: black;
}


/* Buton Grubu */
.action-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 30px; /* Beden seçiciden sonra boşluk */
    margin-bottom: 20px;
}

.add-to-cart-btn {
    width: 100%;
    background-color: var(--color-primary, black);
    color: white;
    border: none;
    padding: 15px 0;
    font-size: 16px;
    font-weight: 600;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.add-to-cart-btn:hover {
    background-color: #333;
}

.favorite-btn {
    width: 100%;
    background-color: white;
    color: #333;
    border: 1px solid #ccc;
    padding: 15px 0;
    font-size: 16px;
    font-weight: 600;
    border-radius: 30px;
    cursor: pointer;
    transition: border-color 0.2s, background-color 0.2s;
}

.favorite-btn:hover {
    border-color: #333;
    background-color: #f5f5f5;
}

.campaign-info {
    font-size: 14px;
    color: #777;
    margin-bottom: 30px;
}

.product-short-description {
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #444;
}

.style-info-list {
    list-style: none;
    padding: 0;
    margin-bottom: 30px;
}

.style-info-list li {
    font-size: 15px;
    line-height: 1.8;
}


.product-accordion {
    border-top: 1px solid #eee;
    margin-top: 20px;
}

.accordion-item {
    border-bottom: 1px solid #eee;
}

.accordion-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    padding: 20px 0;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    text-align: left;
}

.accordion-content {
    padding: 0 0 20px 0;
    font-size: 15px;
    line-height: 1.6;
    color: #555;
}

.toggle-icon {
    font-size: 20px;
    font-weight: 300;
}


@media (max-width: 900px) {
    .product-wrapper {
        flex-direction: column;
    }

    .product-media-area,
    .product-info-area {
        max-width: 100%;
    }
}
</style>