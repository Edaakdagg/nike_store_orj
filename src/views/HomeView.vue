<template>
  <div class="showcase-container">
    
    <nav class="component-list-sidebar">
      <h2>Organizmalar</h2>
      <a 
        v-for="comp in components" 
        :key="comp.name" 
        @click="selectComponent(comp.component)" 
        :class="{ 'active': selectedComponent === comp.component }"
      >
        {{ comp.name }}
      </a>
      
      <hr>

      <h2>Diğer Sayfalar</h2>
       <router-link to="/register">Kayıt Formu (O_RegisterForm)</router-link>
       </nav>

    <div class="component-display-area">
      <component :is="selectedComponent" />
      
      <div v-if="!selectedComponent" class="placeholder">
        <p>Lütfen soldaki menüden bir Organizma seçiniz.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue';


const components = ref([
  {
    name: 'O_Header (Üst Navigasyon)',
    component: defineAsyncComponent(() => import('@/components/organisms/O_Header.vue'))
  },
  {
    name: 'O_Footer (Alt Bilgi)',
    component: defineAsyncComponent(() => import('@/components/organisms/O_Footer.vue'))
  },
  
  {
    name: 'O_LoginForm (Giriş Yap)',
    component: defineAsyncComponent(() => import('@/components/organisms/O_LoginForm.vue'))
  },
  {
    name: 'O_Cart (Sepet)',
    component: defineAsyncComponent(() => import('@/components/organisms/O_CartSummary.vue'))
  },
  {
    name: 'O_ProductCard (Ürün Kartı)',
    component: defineAsyncComponent(() => import('@/components/organisms/O_ProductGrid.vue'))
  },
  {
    name: 'O_ProductDetails (Ürün Detay Sayfası)',
    component: defineAsyncComponent(() => import('@/components/organisms/O_ProductDetails.vue'))
  }
]);

const selectedComponent = ref(null);

const selectComponent = (comp) => {
  selectedComponent.value = comp;
};
</script>

<style scoped>
.showcase-container {
  display: flex;
  min-height: calc(100vh - 120px); 
}


.component-list-sidebar {
  width: 250px;
  padding: 20px;
  background-color: #f8f8f8;
  border-right: 1px solid #eee;
  flex-shrink: 0;
}

.component-list-sidebar h2 {
    font-size: 1.2em;
    margin-top: 15px;
    margin-bottom: 10px;
    color: #333;
}

.component-list-sidebar a {
  display: block;
  padding: 8px 10px;
  margin-bottom: 5px;
  cursor: pointer;
  color: #007bff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s;
  font-size: 0.95em;
}

.component-list-sidebar a:hover {
  background-color: #e9e9e9;
}

.component-list-sidebar a.active {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}

.component-list-sidebar hr {
    margin: 20px 0;
    border: none;
    border-top: 1px solid #ccc;
}

/* 2. Sağ Gösterim Alanı Stilleri */
.component-display-area {
  flex-grow: 1;
  padding: 30px;
  background-color: white;
}

.placeholder {
    padding: 50px;
    text-align: center;
    border: 2px dashed #ccc;
    color: #888;
    margin-top: 50px;
}


.component-display-area > * {
    max-width: 100%;
}
</style>