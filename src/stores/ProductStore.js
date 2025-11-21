import { defineStore } from 'pinia';


const mockProducts = [
  {
    id: 1,
    name: "Nike Air Force 1",
    category: "Erkek Ayakkabısı",
    price: 3499.90,
    imageUrl: "nike_air_force_1.jpg",
    description: "Klasik stili ve konforu bir arada sunar.",
    galleryUrls: [
      "nike_air_force_1_2.png",
      "nike_air_force_1_3.png",
      "nike_air_force_1_4.png"
    ]
  },
  {
    id: 2,
    name: "Jordan Tatum 3",
    category: "Basketbol Ayakkabısı",
    price: 5299.90,
    imageUrl: "jordan_tatum_3.jpg",
    description: "Jayson Tatum'ın imzasıyla, hızlı ve hafif.",
    galleryUrls: [
      "jordan_tatum_3_2.png",
      "jordan_tatum_3_3.png",
      "jordan_tatum_3_4.png"
    ]
  },
  {
    id: 3,
    name: "LeBron XXIII 'Chosen One'",
    category: "Erkek Ayakkabısı",
    price: 3499.90,
    imageUrl: "lebron_xxiii_chosen_one.png",
    description: "LeBron yirmi yıl boyunca basketbolu omuzlarında taşıdı.",
    galleryUrls: [
        "lebron_xxiii_2.png",
        "lebron_xxiii_3.png",
        "lebron_xxiii_4.png"
    ]
  },
  {
    id: 4,
    name: "Nike Pegasus 40",
    category: "Koşu Ayakkabısı",
    price: 4899.90,
    imageUrl: "nike_pegasus_40.jpg",
    description: "Günlük koşularınız için güvenilir, nötr destek.",
    galleryUrls: [
        "nike_pegasus_40_2.png",
        "nike_pegasus_40_3.png",
        "nike_pegasus_40_4.png"
    ]
  },
  {
    id: 5,
    name: "Nike Dunk Low Retro",
    category: "Günlük Ayakkabı",
    price: 2899.90,
    imageUrl: "nike_dunk_low.jpg", 
    description: "Sokak modasının vazgeçilmezi, retro stil.",
    galleryUrls: [
        "nike_dunk_low_g2.jpg",
        "nike_dunk_low_g3.jpg",
        "nike_dunk_low_g4.jpg"
    ]
  },
  {
    id: 6,
    name: "Nike Air Max 270",
    category: "Lifestyle Ayakkabı",
    price: 4199.90,
    imageUrl: "nike_air_max_270.png",
    description: "En büyük Air birimiyle maksimum konfor.",
    galleryUrls: [
        "nike_air_max_270_g2.jpg",
        "nike_air_max_270_g3.jpg",
        "nike_air_max_270_g4.jpg"
    ]
  }
];


export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    isLoading: false,
    error: null,
  }),
  actions: {
   
    async fetchProducts() {
      this.isLoading = true;
      this.error = null;

      try {
        await new Promise(resolve => setTimeout(resolve, 500)); 
        
       
        this.products = mockProducts;
      } catch (err) {
        this.error = 'Ürünler yüklenirken bir hata oluştu.';
        console.error(err);
      } finally {
        this.isLoading = false;
      }
    },
    
  
    getProductById(id) {
     
      const productId = parseInt(id);
      return this.products.find(p => p.id === productId);
    }
  },
  getters: {
   
    productCount: (state) => state.products.length,
    
  }
});