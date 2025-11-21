<template>
  <div class="image-gallery">
    <div class="thumbnails">
      <img 
        v-for="(url, index) in galleryUrls" 
        :key="index"
        :src="`/images/${url}`" 
        :alt="`Thumbnail ${index + 1}`"
        :class="['thumbnail-image', { 'active': url === mainImage }]"
        @click="selectImage(url)"
      >
    </div>

    <div class="main-image-container">
      <img :src="`/images/${mainImage}`" :alt="productName" class="main-product-image">
    </div>
  </div>
</template>

<script>
export default {
    name: 'A_ImageGallery',
    props: {
        galleryUrls: {
            type: Array,
            required: true
        },
        mainImage: {
            type: String,
            required: true
        },
        productName: {
            type: String,
            default: 'Product Image'
        }
    },
    emits: ['imageSelected'],
    setup(props, { emit }) {
        const selectImage = (url) => {
            emit('imageSelected', url);
        };

        return {
            selectImage
        };
    }
};
</script>

<style scoped>
.image-gallery {
    display: flex;
    gap: 15px;
    width: 100%;
    align-items: flex-start;
}


.thumbnails {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 70px; 
    flex-shrink: 0;
}

.thumbnail-image {
    width: 100%;
    height: 70px; 
    object-fit: cover; 
    border: 2px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    opacity: 1;
    transition: all 0.2s;
}

.thumbnail-image:hover,
.thumbnail-image.active {
    border-color: black;
}

/* Ana Resim Alanı */
.main-image-container {
    flex-grow: 1; 
    display: flex;
    justify-content: center;
    align-items: flex-start; 
}

.main-product-image {
    width: 100%;
    height: auto;
    max-height: 700px; 
    display: block;
    object-fit: contain;
}


@media (max-width: 768px) {
    .image-gallery {
        flex-direction: column;
    }
    .thumbnails {
        flex-direction: row; 
        width: 100%;
        height: 60px;
        overflow-x: auto;
        padding-bottom: 10px;
    }
    .thumbnail-image {
        width: 60px;
        height: 60px;
        flex-shrink: 0;
    }
    .main-image-container {
        padding: 0;
    }
}
</style>