<script setup>
defineProps({
  book: {
    type: Object,
    required: true
  }
})

defineEmits(['increase', 'decrease', 'remove'])
</script>

<template>
  <div class="item">
    <img :src="book.image" :alt="book.title" />

    <div class="info">
      <h3>{{ book.title }}</h3>
      <p class="autor">{{ book.author }}</p>
      <p class="preco">R$ {{ (book.price * book.quantity).toFixed(2) }}</p>
      <p class="unidade" v-if="book.quantity > 1">R$ {{ book.price.toFixed(2) }} cada</p>
    </div>

    <div class="acoes">
      <button class="btn-qtd" @click="$emit('decrease', book.id)" :disabled="book.quantity <= 1">−</button>
      <span class="qtd">{{ book.quantity }}</span>
      <button class="btn-qtd" @click="$emit('increase', book.id)">+</button>
      <button class="btn-rem" @click="$emit('remove', book.id)" title="Remover item">🗑</button>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 16px 12px;
  border-bottom: 1px solid #eee;
}

.item:hover {
  background: #fafafa;
}

img {
  width: 70px;
  height: 100px;
  border-radius: 4px;
}

.info {
  flex: 1;
  min-width: 0;
}

.info h3 {
  margin: 0 0 4px;
  font-size: 15px;
  font-weight: 600;
  color: #222;
}

.autor {
  margin: 0 0 6px;
  font-size: 13px;
  color: #777;
}

.preco {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: #2a7a2a;
}

.unidade {
  margin: 2px 0 0;
  font-size: 12px;
  color: #999;
}

.acoes {
  display: flex;
  align-items: center;
  gap: 6px;
}

.btn-qtd {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 6px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-qtd:hover:not(:disabled) {
  background: #f0f0f0;
  border-color: #aaa;
}

.btn-qtd:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.qtd {
  min-width: 26px;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
}

.btn-rem {
  background: none;
  border: none;
  font-size: 18px;
  padding: 4px 6px;
  border-radius: 6px;
}

.btn-rem:hover {
  background: #ffe0e0;
}
</style>
