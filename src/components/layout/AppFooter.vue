<script setup></script>

<template>
  <footer class="rodape-total">
    <div class="footer-container">
      <div class="footer-lado-esquerdo">
        <p>&copy; 2026 Projeto <span>Livraria</span> - Todos os direitos reservados.</p>
        <p class="projeto-info">Projeto Trimestral do Professor Fábio</p>
      </div>
      <div class="footer-lado-direito">
        <p class="dev-nomes">Desenvolvido por: Tiago, Kauan e Felipe</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.rodape-total {
  background: #111c2e;
  padding: 45px 0;
  border-top: 1px solid #1e293b;
  min-height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
}

.footer-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-lado-esquerdo {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

footer p {
  color: #94a3b8;
  font-size: 14px;
}

footer span {
  color: #ffd600;
  font-weight: 700;
}

.projeto-info {
  color: #64748b;
  font-size: 13px;
}

.dev-nomes {
  color: #94a3b8;
  font-size: 14px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
}
</style>
