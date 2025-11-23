<template>
    <header class="main-header">
        
        <div class="top-icon-bar">
            <div class="icon-links">
                <a href="#" class="brand-icon nike-icon">
                    <img src="/images/nike_logo_small.png" alt="Nike Logo" class="icon-image">
                </a>
                <a href="#" class="brand-icon jordan-icon">
                    <img src="/images/jordan_logo_small.png" alt="Jordan Logo" class="icon-image">
                </a>
            </div>
            
            <div class="top-util-nav">
                <router-link to="/help">Find a Store</router-link>
                <span>|</span>
                <router-link to="/help">Help</router-link>
                <span>|</span>
                <router-link :to="{ name: 'register' }">Join Us</router-link>
                <span>|</span>
                <router-link :to="{ name: 'login' }">Sign In</router-link>
            </div>
        </div>

        <div class="main-nav-bar">
        <router-link to="/" class="main-logo-link">
             <img src="/images/nike_logo.png" alt="Nike Swoosh Logo" class="main-swoosh-image">
        </router-link>

            <nav class="main-menu">
                <router-link to="/men">Men</router-link>
                <router-link to="/women">Women</router-link>
                <router-link to="/kids">Kids</router-link>
                <router-link to="/jordan">Jordan</router-link>
                <router-link to="/nikesbmg">NikeSB/MG</router-link>
                <router-link to="/sport">Sport</router-link>
                <router-link to="/sale">Sale</router-link>
            </nav>

            <div class="nav-tools">
                <div class="search-bar">
                    <span class="search-icon">🔍</span>
                    <input type="text" placeholder="Search" class="search-input">
                </div>
                <router-link to="/favorites" class="tool-icon favorite-icon">♡</router-link>
                <router-link :to="{ name: 'cart' }" class="tool-icon cart-icon">🛒</router-link>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'O_Header',
};
</script>

<style scoped>

.main-header {
    background-color: white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05); 
}


.top-icon-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 5px 40px; 
    background-color: #f5f5f5; 
    font-size: 13px;
    height: 35px;
}

.icon-links {
    display: flex;
    gap: 40px;
}

.brand-icon {
    line-height: 1;
    display: flex;
    align-items: center;
}
.icon-image {
    width: 32px;
    height: 32px; 
    object-fit: contain;
    opacity: 0.9; 
    transition: opacity 0.2s;
}
.icon-image:hover {
    opacity: 1; 
}

.top-util-nav a {
    color: #777;
    text-decoration: none;
    margin: 0 15px;
    transition: color 0.2s;
}

.top-util-nav a:hover {
    color: black;
}

.top-util-nav span {
    color: #ccc;
}


.main-nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

.main-logo-link {
    display: flex;
    align-items: center;
}

.main-swoosh-image {
    width: 60px; 
    height: auto;
    object-fit: contain;
}

/* Ana Menü Linkleri */
.main-menu {
    display: flex;
    gap: 30px;
    flex-grow: 1; 
    justify-content: center; 
    max-width: 600px;
}

.main-menu a {
    text-decoration: none;
    color: black;
    font-weight: 600;
    padding: 10px 0;
    font-size: 16px;
    position: relative;
}


.main-menu a:hover::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: black;
}


.nav-tools {
    display: flex;
    align-items: center;
    gap: 10px;
}

.search-bar {
    position: relative;
    background-color: #f5f5f5;
    border-radius: 20px;
    padding: 8px 15px;
    display: flex;
    align-items: center;
}

.search-input {
    border: none;
    background: none;
    padding-left: 10px; 
    font-size: 15px;
    width: 100px;
    transition: width 0.3s ease;
}

.search-input:focus {
    outline: none;
    width: 150px; 
}

.search-icon {
    color: #555;
    font-size: 14px;
}

.tool-icon {
    font-size: 20px;
    color: black;
    text-decoration: none;
    padding: 5px 8px;
}

/* Mobil Uyumlu Düzenleme */
@media (max-width: 900px) {
    .main-menu {
        display: none; 
    }
    .main-nav-bar {
        justify-content: space-between;
    }
    .main-logo-link {
        flex-grow: 1;
        justify-content: center;
    }
    .top-util-nav {
        display: none; 
    }
}
</style>
