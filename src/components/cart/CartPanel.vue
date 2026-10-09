  <script setup>
  import { computed } from 'vue'
  import CartItem from '@/components/cart/CartItem.vue'
  import {
    carrinho,
    aumentarQuantidade,
    diminuirQuantidade,
    removerDoCarrinho,
    limparCarrinho,
    totalCarrinho
  } from '@/utils/cartUtils'

  const totalItens = computed(() =>
    carrinho.value.reduce((acc, item) => acc + item.quantity, 0)
  )
  </script>

  <template>
    <div class="painel">
      <div class="topo">
        <h2>Meu Carrinho</h2>
        <span v-if="totalItens > 0" class="total-itens">
          {{ totalItens }} {{ totalItens === 1 ? 'item' : 'itens' }}
        </span>
      </div>

      <div v-if="carrinho.length === 0" class="vazio">
        <span class="icone">🛒</span>
        <p>Seu carrinho está vazio.</p>
        <RouterLink to="/Livros" class="btn-ver">Ver livros</RouterLink>
      </div>

      <template v-else>
        <div class="lista">
          <CartItem
            v-for="item in carrinho"
            :key="item.id"
            :book="item"
            @increase="aumentarQuantidade"
            @decrease="diminuirQuantidade"
            @remove="removerDoCarrinho"
          />
        </div>

        <div class="rodape">
          <button class="btn-limpar" @click="limparCarrinho">Limpar carrinho</button>

          <div class="resumo">
            <div class="linha-total">
              <span>Total</span>
              <strong>R$ {{ totalCarrinho().toFixed(2) }}</strong>
            </div>
            <button class="btn-fim" @click="limparCarrinho">Finalizar compra</button>
          </div>
        </div>
      </template>
    </div>
  </template>

  <style scoped>
  .painel {
    padding: 28px 24px;
    max-width: 620px;
    margin: 80px auto 40px;
  }

  .topo {
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin-bottom: 20px;
  }

  .topo h2 {
    margin: 0;
    font-size: 22px;
    color: #222;
  }

  .total-itens {
    font-size: 14px;
    color: #888;
  }

  .vazio {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 48px 0;
    color: #aaa;
  }

  .icone {
    font-size: 48px;
  }

  .vazio p {
    margin: 0;
    font-size: 16px;
  }

  .btn-ver {
    margin-top: 8px;
    padding: 10px 22px;
    background: #333;
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
    font-size: 14px;
  }

  .btn-ver:hover {
    background: #111;
  }

  .lista {
    border: 1px solid #eee;
    border-radius: 10px;
  }

  .rodape {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .btn-limpar {
    align-self: flex-start;
    background: none;
    border: none;
    color: #c0392b;
    font-size: 13px;
    padding: 0;
  }

  .btn-limpar:hover {
    color: #922b21;
  }

  .resumo {
    display: flex;
    gap: 14px;
    align-items: flex-end;
  }

  .linha-total {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 18px;
  }

  .linha-total strong {
    font-size: 22px;
    color: #2a7a2a;
  }

  .btn-fim {
    padding: 12px 32px;
    background: #2a7a2a;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
  }

  .btn-fim:hover {
    background: #1f5c1f;
  }
  </style>
