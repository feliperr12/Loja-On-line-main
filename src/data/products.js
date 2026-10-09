import { ref } from 'vue';

export const listaProdutos = ref([
  {
    id: 1,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    resumo: 'Um guia prático sobre boas práticas de programação, escrita de código limpo e como melhorar a qualidade do seu software no dia a dia.',
    price: 129.90,
    categoria: 'Programação',
    image: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg'
  },
  {
    id: 2,
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt e David Thomas',
    resumo: 'Uma obra clássica que aborda a postura profissional, organização de projetos e as melhores decisões no desenvolvimento de software.',
    price: 149.90,
    categoria: 'Programação',
    image: 'https://covers.openlibrary.org/b/isbn/9780201616224-L.jpg'
  },
  {
    id: 3,
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    resumo: 'Uma introdução profunda e prática à linguagem JavaScript, recheada de exemplos de código para dominar o desenvolvimento web.',
    price: 89.90,
    categoria: 'JavaScript',
    image: 'https://covers.openlibrary.org/b/isbn/9781593279509-L.jpg'
  },
  {
    id: 4,
    title: "You Don't Know JS Yet",
    author: 'Kyle Simpson',
    resumo: 'O livro perfeito para quem quer parar de apenas copiar códigos e entender a fundo como o JavaScript funciona de verdade debaixo dos panos.',
    price: 79.90,
    categoria: 'JavaScript',
    image: 'https://covers.openlibrary.org/b/isbn/9781091210092-L.jpg'
  },
  {
    id: 5,
    title: 'Livro de Teste Sem Foto',
    author: 'Autor Desconhecido',
    resumo: 'Este livro não deve aparecer na vitrine porque está sem imagem cadastrada.',
    price: 19.90,
    categoria: 'Geral',
    image: ''
  }
]);
