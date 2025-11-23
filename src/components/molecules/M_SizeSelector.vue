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
        
            emit('sizeSelected', size);
        };

     
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


.size-options {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 8px; 
}

.size-btn {
    padding: 15px 0; 
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s;
    text-align: cent
}


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


@media (min-width: 600px) {
    .size-options {
        grid-template-columns: repeat(4, 1fr); 
    }
}
</style>
