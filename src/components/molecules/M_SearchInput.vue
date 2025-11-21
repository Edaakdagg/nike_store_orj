<template>
  <div class="search-module">
    <span class="search-icon">🔍</span> 
    
    <A_TextInput 
      type="text" 
      placeholder="Search" 
      :modelValue="query"
      @update:modelValue="$emit('update:query', $event)"
      class="search-input-field"
    />
  </div>
</template>

<script>
import A_TextInput from '../atoms/A_TextInput.vue';

export default {
  name: 'M_SearchInput',
  components: {
    A_TextInput,
  },
  props: {
    query: String,
  },
};
</script>

<style scoped>
.search-module {
  display: flex;
  align-items: center;
  background-color: #f5f5f5; /* Açık gri arka plan  */
  border-radius: 20px;
  padding: 0 15px;
  height: 40px;
  width: 180px; /* Sabit genişlik  */
}

.search-icon {
  font-size: 16px;
  margin-right: 8px;
  color: #777;
}

.search-input-field {
  flex-grow: 1;
  border: none;
  background-color: transparent;
  padding: 0;
}

.search-module :deep(.text-input-wrapper) {
  margin-bottom: 0;
}

.search-module :deep(.text-input) {
  padding: 0;
  border: none;
  background-color: transparent;
}
</style>