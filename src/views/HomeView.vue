<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { listaProdutos } from '@/data/products'

const slides = ref(listaProdutos.value.filter(livro => livro.id !== 4 && livro.image && livro.image.trim() !== ''))
const slideAtual = ref(0)
let timer = null

function proximo() {
  slideAtual.value = (slideAtual.value + 1) % slides.value.length
}

function anterior() {
  slideAtual.value = (slideAtual.value - 1 + slides.value.length) % slides.value.length
}

onMounted(() => {
  timer = setInterval(proximo, 5000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="home-container">
    <div class="carrossel-box">
      <button class="seta-btn seta-carrossel-esquerda" @click="anterior">❮</button>
      <button class="seta-btn seta-carrossel-direita" @click="proximo">❯</button>

      <div
        class="slide-item"
        v-for="(slide, index) in slides"
        :key="slide.id"
        v-show="index === slideAtual"
      >
        <div class="slide-texto">
          <span class="tag-destaque">Destaque da Semana</span>
          <h1>{{ slide.title }}</h1>
          <p class="slide-autor">Por: {{ slide.author }}</p>
          <p class="slide-resumo">{{ slide.resumo }}</p>
          <RouterLink to="/Livros" class="btn-catalogo">Conhecer Catálogo</RouterLink>
        </div>
        <div class="slide-imagem">
          <img :src="slide.image" :alt="slide.title" />
        </div>
      </div>
    </div>

    <div class="recursos-grid">
      <div class="recurso-card">
        <span class="recurso-icone">🚚</span>
        <div>
          <h3>Frete Grátis para SC</h3>
          <p>Em todas as compras qualificadas</p>
        </div>
      </div>
      <div class="recurso-card">
        <span class="recurso-icone">⭐</span>
        <div>
          <h3>Livros Recomendados</h3>
          <p>Avaliados por especialistas técnicos</p>
        </div>
      </div>
      <div class="recurso-card">
        <span class="recurso-icone">📖</span>
        <div>
          <h3>Mais Vendidos</h3>
          <p>Os títulos preferidos da comunidade</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
}

.carrossel-box {
  position: relative;
  background: #ffffff;
  border-radius: 16px;
  padding: 60px;
  display: flex;
  align-items: center;
  border: 1px solid #e2e8f0;
  margin-bottom: 40px;
}

.slide-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  width: 100%;
}

.slide-texto {
  flex: 1;
}

.tag-destaque {
  background: #fef08a;
  color: #854d0e;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 16px;
}

.slide-texto h1 {
  font-size: 40px;
  color: #0f172a;
  margin: 0;
}

.slide-autor {
  font-size: 16px;
  color: #16a34a;
  margin-top: 8px;
  margin-bottom: 16px;
  font-weight: 600;
}

.slide-resumo {
  color: #475569;
  font-size: 15px;
  margin-bottom: 30px;
  line-height: 1.6;
}

.btn-catalogo {
  background: #16a34a;
  color: #ffffff;
  text-decoration: none;
  padding: 14px 28px;
  border-radius: 8px;
  display: inline-block;
  font-weight: 600;
}

.btn-catalogo:hover {
  background: #15803d;
}

.slide-imagem img {
  height: 300px;
  width: 200px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}

.seta-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #ffffff;
  border: 1px solid #e2e8f0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #64748b;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  z-index: 10;
}

.seta-btn:hover {
  background: #f8fafc;
  color: #0f172a;
}

.seta-carrossel-esquerda {
  left: 16px;
}

.seta-carrossel-direita {
  right: 16px;
}

.recursos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.recurso-card {
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 20px;
}

.recurso-icone {
  font-size: 28px;
}

.recurso-card h3 {
  margin: 0;
  font-size: 16px;
  color: #0f172a;
}

.recurso-card p {
  margin: 4px 0 0 0;
  font-size: 13px;
  color: #64748b;
}

@media (max-width: 900px) {
  .slide-item {
    flex-direction: column;
    text-align: center;
  }
  .slide-imagem {
    display: none;
  }
  .recursos-grid {
    grid-template-columns: 1fr;
  }
  .carrossel-box {
    padding: 40px 20px;
  }
}
</style>
