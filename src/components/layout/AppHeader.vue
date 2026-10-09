<script setup>
import { computed } from 'vue'
import { carrinho } from '@/utils/cartUtils'

const totalItens = computed(() => {
  return carrinho.value.reduce((acc, item) => acc + item.quantity, 0)
})
</script>

<template>
  <header>
    <div class="header-container">
      <div class="logo">
        Mundo dos <span>Livros</span>
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Livros">Livros</RouterLink>
        <RouterLink to="/Equipe">Equipe</RouterLink>
        <RouterLink to="/Termos">Termos</RouterLink>
        <RouterLink to="/Carrinho" class="cart-icon-container">
          <span class="cart-emoji">🛒</span>
          <span class="badge-contagem" v-if="totalItens > 0">
            {{ totalItens }}
          </span>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #111c2e;
  z-index: 100;
  padding: 18px 0;
  border-bottom: 1px solid #1e293b;
  box-sizing: border-box;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: #ffffff;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 1px;
}

.logo span {
  color: #ffd600;
}

nav {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}

a {
  text-decoration: none;
  color: #94a3b8;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}

a:hover {
  color: #ffd600;
}

.router-link-active {
  color: #ffd600;
  font-weight: 700;
}

.cart-icon-container {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.cart-emoji {
  font-size: 20px;
}

.badge-contagem {
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: #ef4444;
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  border-radius: 50%;
  padding: 2px 6px;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 600px) {
  .header-container {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
