<script setup>
import kauanFoto from '@/assets/kauanzinho.jpeg'
import felipeFoto from '@/assets/felipersas.jpeg'
import tiagoFoto from '@/assets/foto_feia_do_cão.jpeg'
</script>

<template>
  <div class="equipe-box">
    <h2>Nossa Equipe</h2>
    <p class="sub">Alunos responsáveis pelo projeto: Mundo dos Livros</p>

    <div class="membros">
      <div class="membro-card">
        <img :src="tiagoFoto" alt="Foto do Tiago" class="avatar" />
        <h3>Tiago </h3>
      </div>

      <div class="membro-card">
        <img :src="kauanFoto" alt="Foto do Kauan" class="avatar" />
        <h3>Kauan</h3>
      </div>

      <div class="membro-card">
        <img :src="felipeFoto" alt="Foto do Felipe" class="avatar" />
        <h3>Felipe</h3>
      </div>
    </div>
  </div>
</template>


<style scoped>
.equipe-box {
  width: 100%;
}

h2 {
  font-size: 24px;
  color: #0f172a;
  margin: 0;
}

.sub {
  font-size: 14px;
  color: #64748b;
  margin-top: 4px;
  margin-bottom: 30px;
}

.membros {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
}

.membro-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 12px;
  display: block;
}

.membro-card h3 {
  font-size: 16px;
  color: #0f172a;
  margin: 0;
}

.membro-card p {
  font-size: 13px;
  color: #16a34a;
  font-weight: 500;
  margin-top: 4px;
  margin-bottom: 0;
}
</style>
