import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TermosView from '@/views/TermosView.vue'
import EquipeView from '@/views/EquipeView.vue'
import CartView from '@/views/CartView.vue'
import LivrosView from '@/views/LivrosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/Livros', name: 'Livros', component: LivrosView },
    { path: '/Carrinho', name: 'Carrinho', component: CartView },
    { path: '/Equipe', name: 'Equipe', component: EquipeView },
    { path: '/Termos', name: 'Termos', component: TermosView },
  ],
})

export default router
