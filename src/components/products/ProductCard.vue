<script setup>
import { ref } from 'vue'
import { adicionarAoCarrinho } from '@/utils/cartUtils'

const props = defineProps({
  livro: {
    required: true
  }
})

const mostrarResumo = ref(false)

function toggleResumo() {
  mostrarResumo.value = !mostrarResumo.value
}

function comprar() {
  adicionarAoCarrinho(props.livro)
}
</script>

<template>
  <div class="card">
    <div class="capa-container">
      <img :src="livro.image || livro.imagem" :alt="livro.title || livro.nome" />
    </div>

    <div class="info-bloco">
      <h2>{{ livro.title || livro.nome }}</h2>
      <p class="autor">{{ livro.author || livro.autor }}</p>
      <p class="preco">R$ {{ livro.price ? livro.price.toFixed(2) : livro.preco.toFixed(2) }}</p>
    </div>

    <div class="botoes">
      <button class="btn-comp" @click.stop="comprar">
        Comprar
      </button>
      <button class="btn-ler" @click.stop="toggleResumo">
        {{ mostrarResumo ? 'Ocultar' : 'Ler mais' }}
      </button>
    </div>

    <div v-if="mostrarResumo" class="resumo">
      {{ livro.resumo || livro.resenha }}
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 420px;
  width: calc(25% - 25px);
  min-width: 250px;
  box-sizing: border-box;
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

.capa-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-bottom: 12px;
}

.card img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 6px;
}

.info-bloco {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card h2 {
  margin: 8px 0 4px 0;
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
}

.autor {
  color: #64748b;
  font-size: 13px;
  margin-bottom: 12px;
}

.preco {
  font-size: 18px;
  font-weight: 800;
  color: #2a7a2a;
  margin-top: auto;
}

.botoes {
  display: flex;
  gap: 10px;
  margin-top: 16px;
}

.btn-comp {
  flex: 1;
  background: #2a7a2a;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.btn-comp:hover {
  background: #1f5c1f;
}

.btn-ler {
  flex: 1;
  background: #f1f5f9;
  color: #334155;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.btn-ler:hover {
  background: #e2e8f0;
}

.resumo {
  margin-top: 15px;
  padding: 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  line-height: 1.5;
  font-size: 13px;
  color: #334155;
  text-align: left;
}
</style>
