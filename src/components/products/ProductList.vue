<script setup>
import { computed } from 'vue'
import ProductCard from './ProductCard.vue'

const props = defineProps({
  livros: {
    type: Array,
    required: true
  }
})

const livrosValidos = computed(() => {
  return props.livros.filter(l => l.image && l.image.trim() !== '')
})
</script>

<template>
  <div class="grade-grid">
    <ProductCard
      v-for="livro in livrosValidos"
      :key="livro.id"
      :livro="livro"
    />
  </div>
</template>

<style scoped>
.grade-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  width: 100%;
}
</style>
