<script setup>
defineProps({
  mostrar: {
    type: Boolean,
    required: true
  },
  livro: {
    type: Object,
    default: null
  }
})

defineEmits(['close'])
</script>

<template>
  <div v-if="mostrar && livro" class="modal-overlay" @click.stop="$emit('close')">
    <div class="modal-content" @click.stop>
      <div class="modal-layout">
        <div class="modal-img">
          <img :src="livro.image" :alt="livro.title" />
        </div>

        <div class="modal-info">
          <h2>{{ livro.title }}</h2>
          <p class="autor"><strong>Autor:</strong> <span>{{ livro.author }}</span></p>
          <p class="resumo-texto">{{ livro.resumo }}</p>
          <div class="modal-preco">R$ {{ livro.price.toFixed(2) }}</div>
          <button class="btn-fechar" @click.stop="$emit('close')">Fechar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(15, 23, 42, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}

.modal-content {
  background: #ffffff;
  padding: 30px;
  border-radius: 16px;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
}

.modal-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 24px;
  align-items: center;
}

.modal-img img {
  width: 100%;
  max-height: 240px;
  object-fit: contain;
}

.modal-info h2 {
  font-size: 20px;
  color: #0f172a;
}

.autor {
  color: #64748b;
  font-size: 14px;
  margin: 6px 0 12px;
}

.autor span {
  color: #16a34a;
  font-weight: 600;
}

.resumo-texto {
  line-height: 1.5;
  font-size: 13px;
  color: #334155;
  margin-bottom: 16px;
}

.modal-preco {
  font-size: 20px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 16px;
}

.btn-fechar {
  background: #ef4444;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  width: 100%;
  font-weight: 600;
  cursor: pointer;
}

@media (max-width: 600px) {
  .modal-layout {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
