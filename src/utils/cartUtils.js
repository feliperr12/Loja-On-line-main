import { ref } from 'vue'

export const carrinho = ref([])

export function adicionarAoCarrinho(livro) {
  const existente = carrinho.value.find(item => item.id === livro.id)
  if (existente) {
    existente.quantity++
  } else {
    carrinho.value.push({ ...livro, quantity: 1 })
  }
}

export function aumentarQuantidade(id) {
  const item = carrinho.value.find(item => item.id === id)
  if (item) {
    item.quantity++
  }
}

export function diminuirQuantidade(id) {
  const item = carrinho.value.find(item => item.id === id)
  if (item && item.quantity > 1) {
    item.quantity--
  }
}

export function removerDoCarrinho(id) {
  carrinho.value = carrinho.value.filter(item => item.id !== id)
}

export function limparCarrinho() {
  carrinho.value = []
}

export function totalCarrinho() {
  return carrinho.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
}
