<template>
  <footer class="main-footer">
    <div class="footer-content-wrapper">
      
      <div class="footer-columns">
        <div class="column">
          <h3>Kaynaklar</h3>
          <ul>
            <li><a href="#">Mağaza Bul</a></li>
            <li><a href="#">Nike Journal</a></li>
            <li><a href="#">Üye Ol</a></li>
            <li><a href="#">Geri Bildirim</a></li>
            <li><a href="#">Promosyon Kodları</a></li>
          </ul>
        </div>
        
        <div class="column">
          <h3>Yardım</h3>
          <ul>
            <li><a href="#">Yardım Al</a></li>
            <li><a href="#">Sipariş Durumu</a></li>
            <li><a href="#">Kargo ve Teslimat</a></li>
            <li><a href="#">İadeler</a></li>
            <li><a href="#">Ödeme Seçenekleri</a></li>
            <li><a href="#">Bize Ulaş</a></li>
            <li><a href="#">İncelemeler</a></li>
          </ul>
        </div>

        <div class="column">
          <h3>Şirket</h3>
          <ul>
            <li><a href="#">Nike Hakkında</a></li>
            <li><a href="#">Haberler</a></li>
            <li><a href="#">Kariyer</a></li>
            <li><a href="#">Yatırımcılar</a></li>
            <li><a href="#">Sürdürülebilirlik</a></li>
            <li><a href="#">Amaç</a></li>
            <li><a href="#">Endişe Bildir</a></li>
          </ul>
        </div>

        <div class="column locale-column">
           <div class="locale-info">
             <span>📍 Türkiye</span>
           </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright-info">
          <div class="copyright">© {{ currentYear }} Nike, Inc. Tüm Hakları Saklıdır.</div>
          <a href="#" class="bottom-link">Klavuzlar</a>
        </div>
        
        <nav class="bottom-links">
          <a href="#">Kullanım Şartları</a>
          <a href="#">Satış Şartları</a>
          <a href="#">Şirket Ayrıntıları</a>
          <a href="#">Gizlilik ve Tanımlama Bilgisi Politikası</a>
          <a href="#">Gizlilik ve çerez ayarları</a>
        </nav>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'O_Footer',
  // Yılı dinamik olarak almak için computed property kullanıldı
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>


.main-footer {

  background-color: var(--color-white, #ffffff); 
  color: var(--color-black, #333); 
  padding: 40px 20px 20px 20px;
  font-size: 14px;
  border-top: 1px solid #eee; 
}

.footer-content-wrapper {
  max-width: 1300px;
  margin: 0 auto;
}

.footer-columns {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding-bottom: 30px;
  margin-bottom: 0;
  flex-wrap: wrap; 
}

.column {
  flex: 1; 
  min-width: 150px; 
}

.column h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
  /* Başlıklar siyah */
  color: black; 
}

.column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.column ul li {
  margin-bottom: 8px;
}

.column ul li a {
 
  color: #555; 
  text-decoration: none;
  transition: color 0.2s;
}

.column ul li a:hover {
 
  color: black;
}

.locale-column {
  flex: none;
}

.locale-info {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #555;
  font-size: 12px;
}



.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end; 
  flex-wrap: wrap; 
  padding-top: 15px; 
  border-top: 1px solid #eee; 
}

.copyright-info {
   
    display: flex;
    align-items: center;
    gap: 15px; 
}

.copyright {
  color: #777; 
  font-size: 12px;
 
  white-space: nowrap; 
}

.bottom-link, .bottom-links a {
    color: #777;
    text-decoration: none;
    font-size: 12px;
    transition: color 0.2s;
   
    white-space: nowrap; 
}

.bottom-links {
  display: flex;
  flex-wrap: nowrap; 
  gap: 15px;
}

.bottom-links a:hover, .bottom-link:hover {
  color: black;
}


@media (max-width: 900px) {
  
    .footer-bottom {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .copyright-info {
        flex-direction: column; 
        align-items: flex-start;
        gap: 5px;
        margin-bottom: 10px;
    }

    .bottom-links {
        flex-direction: column;
        gap: 10px;
        flex-wrap: wrap; 
    }
}
</style>
