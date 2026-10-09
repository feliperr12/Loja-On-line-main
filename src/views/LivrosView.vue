<script setup>
import { ref } from 'vue'
import ProductList from '@/components/products/ProductList.vue'

const livros = ref([
  {
    id: 1,
    title: 'Dom Casmurro',
    author: 'Machado de Assis',
    price: 24.90,
    image: 'https://covers.openlibrary.org/b/olid/OL51694392M-L.jpg',
    resumo: 'Bentinho relembra sua vida e seu relacionamento com Capitu, levantando dúvidas sobre traição e ciúme.'
  },
  {
    id: 2,
    title: 'O Pequeno Príncipe',
    author: 'Antoine de Saint-Exupéry',
    price: 16.60,
    image: 'https://covers.openlibrary.org/b/olid/OL24375637M-L.jpg',
    resumo: 'Um pequeno príncipe viaja por planetas e aprende lições sobre amizade, amor e humanidade.'
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    price: 14.90,
    image: 'https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg',
    resumo: 'Em um regime totalitário, o governo controla até os pensamentos dos cidadãos.'
  },
  {
    id: 4,
    title: 'Harry Potter e a Pedra Filosofal',
    author: 'J.K. Rowling',
    price: 36.50,
    image: 'https://covers.openlibrary.org/b/isbn/9788532511010-L.jpg',
    resumo: 'Harry descobre que é um bruxo e inicia seus estudos na escola de magia Hogwarts.'
  },
  {
    id: 5,
    title: 'O Alquimista',
    author: 'Paulo Coelho',
    price: 47.90,
    image: 'https://covers.openlibrary.org/b/olid/OL18511145M-L.jpg',
    resumo: 'Um pastor viaja em busca de um tesouro e descobre seu propósito de vida.'
  },
  {
    id: 6,
    title: 'O Senhor dos Anéis',
    author: 'J.R.R. Tolkien',
    price: 37.90,
    image: 'https://covers.openlibrary.org/b/isbn/9780618640157-L.jpg',
    resumo: 'Frodo precisa destruir um anel poderoso para impedir o domínio das forças do mal.'
  },
  {
    id: 7,
    title: 'A Revolução dos Bichos',
    author: 'George Orwell',
    price: 29.90,
    image: 'https://covers.openlibrary.org/b/isbn/9780451526342-L.jpg',
    resumo: 'Animais tomam uma fazenda dos humanos, mas uma nova tirania surge.'
  },
  {
    id: 8,
    title: 'Percy Jackson e o Ladrão de Raios',
    author: 'Rick Riordan',
    price: 47.80,
    image: 'https://covers.openlibrary.org/b/olid/OL26993664M-L.jpg',
    resumo: 'Um garoto descobre ser filho de um deus grego e embarca em uma aventura mitológica.'
  },
  {
    id: 9,
    title: 'O Hobbit',
    author: 'J.R.R. Tolkien',
    price: 49.70,
    image: 'https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg',
    resumo: 'Bilbo Bolseiro acompanha anões em uma jornada para recuperar um tesouro guardado por um dragão.'
  },
  {
    id: 10,
    title: 'Jogos Vorazes',
    author: 'Suzanne Collins',
    price: 67.00,
    image: 'https://covers.openlibrary.org/b/isbn/9780439023481-L.jpg',
    resumo: 'Jovens são forçados a participar de uma competição mortal televisionada.'
  },
  {
    id: 11,
    title: 'A Culpa é das Estrelas',
    author: 'John Green',
    price: 59.90,
    image: 'https://covers.openlibrary.org/b/isbn/9780525478812-L.jpg',
    resumo: 'Dois adolescentes com câncer vivem uma emocionante história de amor.'
  },
  {
    id: 12,
    title: 'Crime e Castigo',
    author: 'Fiódor Dostoiévski',
    price: 28.30,
    image: 'https://covers.openlibrary.org/b/isbn/9780143107637-L.jpg',
    resumo: 'Um estudante comete um crime e enfrenta profundas crises morais.'
  },
  {
    id: 13,
    title: 'Orgulho e Preconceito',
    author: 'Jane Austen',
    price: 17.90,
    image: 'https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg',
    resumo: 'Elizabeth Bennet e Sr. Darcy superam preconceitos para encontrar o amor.'
  },
  {
    id: 14,
    title: 'Duna',
    author: 'Frank Herbert',
    price: 49.00,
    image: 'https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg',
    resumo: 'Em um planeta desértico, disputas políticas e religiosas moldam o destino da galáxia.'
  },
  {
    id: 15,
    title: 'O Código Da Vinci',
    author: 'Dan Brown',
    price: 30.00,
    image: 'https://covers.openlibrary.org/b/isbn/9780307474278-L.jpg',
    resumo: 'Um professor desvenda enigmas ligados a sociedades secretas e à história cristã.'
  }
])
</script>

<template>
  <div class="container">
    <div class="vitrine-topo">
      <h1>Nosso Catálogo Técnico</h1>
      <p>Explore as obras literárias mais influentes</p>
    </div>

    <ProductList :livros="livros" />
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.vitrine-topo {
  margin-bottom: 32px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 16px;
}

h1 {
  font-size: 26px;
  color: #0f172a;
  font-weight: 800;
}

p {
  font-size: 14px;
  color: #64748b;
  margin-top: 4px;
}
</style>
