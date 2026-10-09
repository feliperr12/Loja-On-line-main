<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <div class="app-layout">
    <AppHeader />
    <main class="palco">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style>
body,
html,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #f8fafc;
}

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding-top: 75px;
}

.palco {
  display: block;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  flex-grow: 1;
}

* {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}
</style>
